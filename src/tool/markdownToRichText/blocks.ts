import type { RenderContext } from './logic';
import { escapeHtml } from './logic';
import { renderInline } from './inline';

interface BlockResult {
  html: string;
  nextIndex: number;
  blockCount: number;
}

const BLOCK_START = /^( {0,3}(?:#{1,6}\s+|>\s?|[-+*]\s+|\d+[.)]\s+|```|~~~)| {0,3}(?:---+|\*\s*\*\s*\*|_\s*_\s*_))$/;

function isFence(line: string): RegExpMatchArray | null {
  return line.match(/^ {0,3}(`{3,}|~{3,})\s*([\w-]*)\s*$/);
}

function isListItem(line: string): RegExpMatchArray | null {
  return line.match(/^ {0,3}([-+*]|\d+[.)])\s+(.+)$/);
}

function isClosingFence(line: string, marker: string): boolean {
  return new RegExp('^ {0,3}' + marker[0] + '{' + marker.length + ',}\\s*$').test(line);
}

function collectCodeLines(lines: string[], index: number, marker: string): { codeLines: string[]; nextIndex: number } {
  const codeLines: string[] = [];
  let nextIndex = index;
  while (nextIndex < lines.length) {
    if (isClosingFence(lines[nextIndex] ?? '', marker)) break;
    codeLines.push(lines[nextIndex] ?? '');
    nextIndex += 1;
  }
  return { codeLines, nextIndex: nextIndex < lines.length ? nextIndex + 1 : nextIndex };
}

function renderFence(lines: string[], index: number): BlockResult | null {
  const fence = isFence(lines[index] ?? '');
  if (!fence) return null;
  const marker = fence[1] ?? '```';
  const code = collectCodeLines(lines, index + 1, marker);
  const language = fence[2] ? ` class="language-${escapeHtml(fence[2])}"` : '';
  return { html: `<pre><code${language}>${escapeHtml(code.codeLines.join('\n'))}</code></pre>`, nextIndex: code.nextIndex, blockCount: 1 };
}

function renderHeading(lines: string[], index: number, context: RenderContext): BlockResult | null {
  const heading = (lines[index] ?? '').match(/^ {0,3}(#{1,6})\s+(.+?)\s*#*\s*$/);
  if (!heading) return null;
  const level = heading[1]?.length ?? 1;
  return { html: `<h${level}>${renderInline(heading[2] ?? '', context)}</h${level}>`, nextIndex: index + 1, blockCount: 1 };
}

function renderRule(line: string, index: number): BlockResult | null {
  if (!/^ {0,3}(?:(?:[-*_])\s*){3,}$/.test(line)) return null;
  return { html: '<hr>', nextIndex: index + 1, blockCount: 1 };
}

function collectListItems(lines: string[], index: number, ordered: boolean, context: RenderContext): { items: string[]; nextIndex: number } {
  const items: string[] = [];
  let nextIndex = index;
  while (nextIndex < lines.length) {
    const item = isListItem(lines[nextIndex] ?? '');
    if (!item) break;
    if (/^\d/.test(item[1] ?? '') !== ordered) break;
    items.push(`<li>${renderInline(item[2] ?? '', context)}</li>`);
    nextIndex += 1;
  }
  return { items, nextIndex };
}

function renderQuote(lines: string[], index: number, context: RenderContext): BlockResult | null {
  if (!/^ {0,3}>/.test(lines[index] ?? '')) return null;
  const quoteLines: string[] = [];
  let nextIndex = index;
  while (nextIndex < lines.length && /^ {0,3}>/.test(lines[nextIndex] ?? '')) {
    quoteLines.push((lines[nextIndex] ?? '').replace(/^ {0,3}> ?/, ''));
    nextIndex += 1;
  }
  const nested = renderBlocks(quoteLines, context);
  return { html: `<blockquote>${nested.html}</blockquote>`, nextIndex, blockCount: nested.blockCount + 1 };
}

function renderList(lines: string[], index: number, context: RenderContext): BlockResult | null {
  const first = isListItem(lines[index] ?? '');
  if (!first) return null;
  const ordered = /^\d/.test(first[1] ?? '');
  const list = collectListItems(lines, index, ordered, context);
  const tag = ordered ? 'ol' : 'ul';
  return { html: `<${tag}>${list.items.join('')}</${tag}>`, nextIndex: list.nextIndex, blockCount: 1 };
}

function renderParagraph(lines: string[], index: number, context: RenderContext): BlockResult {
  const paragraph: string[] = [lines[index] ?? ''];
  let nextIndex = index + 1;
  while (nextIndex < lines.length && lines[nextIndex]?.trim() && !BLOCK_START.test(lines[nextIndex] ?? '')) {
    paragraph.push(lines[nextIndex] ?? '');
    nextIndex += 1;
  }
  return { html: `<p>${renderInline(paragraph.join('\n'), context)}</p>`, nextIndex, blockCount: 1 };
}

function renderBlock(lines: string[], index: number, context: RenderContext): BlockResult {
  const block = renderFence(lines, index) ?? renderHeading(lines, index, context) ?? renderRule(lines[index] ?? '', index) ?? renderQuote(lines, index, context) ?? renderList(lines, index, context);
  return block ?? renderParagraph(lines, index, context);
}

export function renderBlocks(lines: string[], context: RenderContext): { html: string; blockCount: number } {
  const parts: string[] = [];
  let blockCount = 0;
  let index = 0;
  while (index < lines.length) {
    if (!(lines[index] ?? '').trim()) {
      index += 1;
      continue;
    }
    const block = renderBlock(lines, index, context);
    parts.push(block.html);
    blockCount += block.blockCount;
    index = block.nextIndex;
  }
  return { html: parts.join(''), blockCount };
}
