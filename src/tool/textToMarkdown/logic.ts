function childrenToMd(node: Node): string {
  return Array.from(node.childNodes)
    .map((n) => nodeToMd(n))
    .join('');
}

function headingToMd(node: Element): string {
  const level = parseInt(node.tagName[1], 10);
  return `${'#'.repeat(level)} ${childrenToMd(node).trim()}\n\n`;
}

function listToMd(node: Element, ordered: boolean): string {
  const lines = Array.from(node.children).map((li, i) => {
    const prefix = ordered ? `${i + 1}. ` : '- ';
    return `${prefix}${childrenToMd(li).trim()}`;
  });
  return lines.join('\n') + '\n\n';
}

const BOLD_TAGS = new Set(['strong', 'b']);
const ITALIC_TAGS = new Set(['em', 'i']);

function inlineDecoToMd(tag: string, inner: string): string | null {
  if (BOLD_TAGS.has(tag)) return `**${inner}**`;
  if (ITALIC_TAGS.has(tag)) return `*${inner}*`;
  if (tag === 'code') return `\`${inner}\``;
  return null;
}

function inlineToMd(node: Element): string {
  const tag = node.tagName.toLowerCase();
  const inner = childrenToMd(node);
  const deco = inlineDecoToMd(tag, inner);
  if (deco !== null) return deco;
  if (tag === 'a') return `[${inner}](${node.getAttribute('href') ?? ''})`;
  if (tag === 'img') return `![${node.getAttribute('alt') ?? ''}](${node.getAttribute('src') ?? ''})`;
  return inner;
}

function blockToMdTop(node: Element, tag: string): string | null {
  if (/^h[1-6]$/.test(tag)) return headingToMd(node);
  if (tag === 'p') return `${childrenToMd(node).trim()}\n\n`;
  if (tag === 'ul') return listToMd(node, false);
  if (tag === 'ol') return listToMd(node, true);
  return null;
}

function blockToMd(node: Element): string {
  const tag = node.tagName.toLowerCase();
  const top = blockToMdTop(node, tag);
  if (top !== null) return top;
  if (tag === 'blockquote') return `> ${childrenToMd(node).trim()}\n\n`;
  if (tag === 'pre') return `\`\`\`\n${node.textContent ?? ''}\n\`\`\`\n\n`;
  if (tag === 'hr') return '---\n\n';
  if (tag === 'br') return '\n';
  return childrenToMd(node);
}

const INLINE_TAGS = new Set(['strong', 'b', 'em', 'i', 'code', 'a', 'img', 'span', 'mark', 'del', 's']);

function nodeToMd(node: Node): string {
  if (node.nodeType === Node.TEXT_NODE) return node.textContent ?? '';
  if (node.nodeType !== Node.ELEMENT_NODE) return '';
  const el = node as Element;
  if (INLINE_TAGS.has(el.tagName.toLowerCase())) return inlineToMd(el);
  return blockToMd(el);
}

export function htmlToMarkdown(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return childrenToMd(doc.body).replace(/\n{3,}/g, '\n\n').trim();
}
