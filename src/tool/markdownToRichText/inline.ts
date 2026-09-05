import type { RenderContext } from './logic';
import { escapeHtml, sanitizeUrl } from './logic';

interface InlineToken {
  html: string;
  length: number;
}

type InlineRenderer = (source: string, index: number, context: RenderContext) => InlineToken | null;

function token(html: string, length: number): InlineToken {
  return { html, length };
}

function renderEscape(source: string, index: number): InlineToken | null {
  if (source[index] !== '\\' || index + 1 >= source.length) return null;
  return token(escapeHtml(source[index + 1] ?? ''), 2);
}

function renderCode(source: string, index: number): InlineToken | null {
  const match = source.slice(index).match(/^(`+)([\s\S]*?)\1/);
  return match ? token(`<code>${escapeHtml(match[2] ?? '')}</code>`, match[0].length) : null;
}

function renderLink(source: string, index: number, context: RenderContext): InlineToken | null {
  const match = source.slice(index).match(/^(!?)\[([^\]]+)\]\((\S+?)(?:\s+["'].*?["'])?\)/);
  if (!match) return null;
  const label = match[2] ?? '';
  const url = sanitizeUrl(match[3] ?? '', context);
  if (!url) return token(renderInline(label, context), match[0].length);
  if (match[1] === '!') return token(`<img src="${url}" alt="${escapeHtml(label)}" loading="lazy">`, match[0].length);
  return token(`<a href="${url}" target="_blank" rel="noreferrer">${renderInline(label, context)}</a>`, match[0].length);
}

function renderAutolink(source: string, index: number, context: RenderContext): InlineToken | null {
  const match = source.slice(index).match(/^<(https?:\/\/[^ >]+|mailto:[^ >]+)>/i);
  if (!match) return null;
  const url = sanitizeUrl(match[1] ?? '', context);
  const html = url ? `<a href="${url}" target="_blank" rel="noreferrer">${escapeHtml(match[1] ?? '')}</a>` : '';
  return token(html, match[0].length);
}

function renderStrong(source: string, index: number, context: RenderContext): InlineToken | null {
  const match = source.slice(index).match(/^(\*\*|__)(.+?)\1/);
  return match ? token(`<strong>${renderInline(match[2] ?? '', context)}</strong>`, match[0].length) : null;
}

function renderDeletion(source: string, index: number, context: RenderContext): InlineToken | null {
  const match = source.slice(index).match(/^~~(.+?)~~/);
  return match ? token(`<del>${renderInline(match[1] ?? '', context)}</del>`, match[0].length) : null;
}

function renderEmphasis(source: string, index: number, context: RenderContext): InlineToken | null {
  const match = source.slice(index).match(/^(\*|_)([^\n]+?)\1/);
  if (!match) return null;
  const adjacentWord = match[1] === '_' && /\w/.test(source[index - 1] ?? '') && /\w/.test(source[index + match[0].length] ?? '');
  return adjacentWord ? null : token(`<em>${renderInline(match[2] ?? '', context)}</em>`, match[0].length);
}

const renderers: InlineRenderer[] = [renderEscape, renderCode, renderLink, renderAutolink, renderStrong, renderDeletion, renderEmphasis];

function renderInlineToken(source: string, index: number, context: RenderContext): InlineToken | null {
  for (const renderer of renderers) {
    const result = renderer(source, index, context);
    if (result) return result;
  }
  return null;
}

export function renderInline(source: string, context: RenderContext): string {
  let result = '';
  let index = 0;

  while (index < source.length) {
    const inlineToken = renderInlineToken(source, index, context);
    if (inlineToken) {
      result += inlineToken.html;
      index += inlineToken.length;
      continue;
    }
    if (source[index] === '\n') {
      const hardBreak = / {2}$/.test(result);
      if (hardBreak) result = result.slice(0, -2);
      result += hardBreak ? '<br>\n' : '\n';
      index += 1;
      continue;
    }
    result += escapeHtml(source[index] ?? '');
    index += 1;
  }

  return result.replace(/\n/g, ' ');
}
