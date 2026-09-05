import { markdownToRichText } from './logic';

const STORAGE_KEY = 'gamebob-markdown-to-rich-text-draft';

interface CardElements {
  input: HTMLTextAreaElement;
  example: HTMLButtonElement;
  clear: HTMLButtonElement;
  copy: HTMLButtonElement;
  preview: HTMLElement;
  blocks: HTMLElement;
  words: HTMLElement;
  warnings: HTMLElement;
  warningStat: HTMLElement;
}

function showMessage(card: HTMLElement, message: string): void {
  const status = card.querySelector<HTMLElement>('[data-status]');
  if (!status) return;
  status.textContent = message;
  status.classList.add('mr-status-visible');
  window.setTimeout(() => status.classList.remove('mr-status-visible'), 2600);
}

function getElements(card: HTMLElement): CardElements | null {
  const input = card.querySelector<HTMLTextAreaElement>('[data-input]');
  const example = card.querySelector<HTMLButtonElement>('[data-example]');
  const clear = card.querySelector<HTMLButtonElement>('[data-clear]');
  const copy = card.querySelector<HTMLButtonElement>('[data-copy]');
  const preview = card.querySelector<HTMLElement>('[data-preview]');
  const blocks = card.querySelector<HTMLElement>('[data-blocks]');
  const words = card.querySelector<HTMLElement>('[data-words]');
  const warnings = card.querySelector<HTMLElement>('[data-warnings]');
  const warningStat = card.querySelector<HTMLElement>('[data-warning-stat]');
  const elements = [input, example, clear, copy, preview, blocks, words, warnings, warningStat];
  if (elements.some((element) => !element)) return null;
  return {
    input: input as HTMLTextAreaElement,
    example: example as HTMLButtonElement,
    clear: clear as HTMLButtonElement,
    copy: copy as HTMLButtonElement,
    preview: preview as HTMLElement,
    blocks: blocks as HTMLElement,
    words: words as HTMLElement,
    warnings: warnings as HTMLElement,
    warningStat: warningStat as HTMLElement,
  };
}

function render(card: HTMLElement, elements: CardElements): void {
  const result = markdownToRichText(elements.input.value);
  elements.preview.replaceChildren();
  if (result.html) {
    elements.preview.innerHTML = result.html;
  } else {
    const empty = document.createElement('p');
    empty.className = 'mr-empty';
    empty.textContent = card.dataset.empty ?? '';
    elements.preview.append(empty);
  }
  elements.blocks.textContent = String(result.blockCount);
  elements.words.textContent = String(result.wordCount);
  elements.warnings.textContent = String(result.warningCount);
  elements.warningStat.hidden = result.warningCount === 0;
  elements.copy.disabled = !result.html;
  card.dataset.html = result.html;
  card.dataset.plainText = result.plainText;
  if (result.warningCount > 0) showMessage(card, card.dataset.warning ?? '');
}

function restoreDraft(input: HTMLTextAreaElement): boolean {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === null) return false;
    input.value = saved;
    return true;
  } catch {
    return false;
  }
}

function saveDraft(input: HTMLTextAreaElement): void {
  try {
    localStorage.setItem(STORAGE_KEY, input.value);
  } catch {
  }
}

function canWriteRichClipboard(): boolean {
  return Boolean(typeof navigator.clipboard?.write === 'function' && 'ClipboardItem' in window && window.isSecureContext);
}

function copyWithSelection(html: string): boolean {
  const fallback = document.createElement('div');
  fallback.contentEditable = 'true';
  fallback.setAttribute('aria-hidden', 'true');
  fallback.style.position = 'fixed';
  fallback.style.left = '-10000px';
  fallback.style.top = '0';
  fallback.innerHTML = html;
  document.body.append(fallback);
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(fallback);
  selection?.removeAllRanges();
  selection?.addRange(range);
  const execCommand = (document as Document & { execCommand?: (command: string) => boolean }).execCommand;
  const copied = execCommand ? execCommand.call(document, 'copy') : false;
  selection?.removeAllRanges();
  fallback.remove();
  return copied;
}

async function writeRichClipboard(html: string, plainText: string): Promise<void> {
  if (canWriteRichClipboard()) {
    const item = new ClipboardItem({
      'text/html': new Blob([html], { type: 'text/html' }),
      'text/plain': new Blob([plainText], { type: 'text/plain' }),
    });
    await navigator.clipboard.write([item]);
    return;
  }
  if (!copyWithSelection(html)) throw new Error('Rich clipboard is unavailable');
}

async function copyRichText(card: HTMLElement): Promise<void> {
  const html = card.dataset.html ?? '';
  if (!html) return;
  try {
    await writeRichClipboard(html, card.dataset.plainText ?? '');
    showMessage(card, card.dataset.copied ?? '');
  } catch {
    showMessage(card, card.dataset.copyError ?? '');
  }
}

function initializeCard(card: HTMLElement): void {
  if (card.dataset.initialized === 'true') return;
  const elements = getElements(card);
  if (!elements) return;
  card.dataset.initialized = 'true';
  const restored = restoreDraft(elements.input);
  const save = () => saveDraft(elements.input);
  elements.input.addEventListener('input', () => { save(); render(card, elements); });
  elements.example.addEventListener('click', () => { elements.input.value = elements.input.defaultValue; save(); render(card, elements); elements.input.focus(); });
  elements.clear.addEventListener('click', () => { elements.input.value = ''; save(); render(card, elements); elements.input.focus(); });
  elements.copy.addEventListener('click', () => { void copyRichText(card); });
  render(card, elements);
  if (restored) showMessage(card, card.dataset.restored ?? '');
}

export function initMarkdownToRichText(): void {
  document.querySelectorAll<HTMLElement>('.mr-card').forEach(initializeCard);
}
