import { renderBlocks } from './blocks';

export interface MarkdownToRichTextResult {
  html: string;
  plainText: string;
  blockCount: number;
  wordCount: number;
  warningCount: number;
}

export interface RenderContext {
  warnings: Set<string>;
}

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character] ?? character);
}

export function sanitizeUrl(rawUrl: string, context: RenderContext): string | null {
  const url = rawUrl.trim();
  if (!url) return null;
  if (/^(?:https?:|mailto:|\/|\.\.?\/|#)/i.test(url)) return escapeHtml(url);
  context.warnings.add('unsafe-url');
  return null;
}

function stripInlineMarkdown(value: string): string {
  return value
    .replace(/\\([\\`*_[\]{}()>#+.!-])/g, '$1')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/(`+|\*\*|__|~~|\*|_)/g, '')
    .replace(/<[^>]*>/g, '');
}

function isFence(line: string): RegExpMatchArray | null {
  return line.match(/^ {0,3}(`{3,}|~{3,})\s*([\w-]*)\s*$/);
}

function toPlainText(markdown: string): string {
  const lines = markdown.split('\n');
  const output: string[] = [];
  let inFence = false;

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    if (isFence(line)) {
      inFence = !inFence;
      continue;
    }
    if (/^ {0,3}(?:(?:[-*_])\s*){3,}$/.test(line)) {
      if (output.at(-1) !== '') output.push('');
      continue;
    }
    const cleaned = stripInlineMarkdown(line.replace(/^ {0,3}> ?/, '').replace(/^ {0,3}(?:[-+*]|\d+[.)])\s+/, '').replace(/^ {0,3}#{1,6}\s+/, ''));
    if (!cleaned.trim()) {
      if (output.at(-1) !== '') output.push('');
    } else {
      output.push(inFence ? line : cleaned);
    }
  }

  return output.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

export function markdownToRichText(markdown: string): MarkdownToRichTextResult {
  const normalized = markdown.replace(/\r\n?/g, '\n');
  const context: RenderContext = { warnings: new Set<string>() };
  const rendered = renderBlocks(normalized.split('\n'), context);
  const plainText = toPlainText(normalized);

  return {
    html: rendered.html,
    plainText,
    blockCount: rendered.blockCount,
    wordCount: plainText ? (plainText.match(/\S+/g) ?? []).length : 0,
    warningCount: context.warnings.size,
  };
}
