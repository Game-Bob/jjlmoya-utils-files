import {
  DEFAULT_RENAME_OPTIONS,
  canDownload,
  planRenames,
  type RenameOptions,
  type RenamePlan,
} from './logic';
import { evaluatePlan } from './evaluator';
import { loadRenameOptions, saveRenameOptions } from './storage';
import { createZip } from './zip';
import { renderFileList, renderPlan, renderSummary } from './dom-views';
import type { BatchFileNameNormalizerUI } from './ui';

interface ControllerState {
  files: File[];
  options: RenameOptions;
  plan: RenamePlan[];
}

function getElement<T extends Element>(root: ParentNode, selector: string): T | null {
  return root.querySelector<T>(selector);
}

function readOptions(root: ParentNode, current: RenameOptions): RenameOptions {
  const value = (selector: string): string => getElement<HTMLInputElement>(root, selector)?.value ?? '';
  const checked = (selector: string): boolean => getElement<HTMLInputElement>(root, selector)?.checked ?? false;
  const mode = getElement<HTMLInputElement>(root, '[data-numbering]:checked')?.value;
  return {
    ...current,
    findText: value('[data-find]'),
    replaceText: value('[data-replace]'),
    prefix: value('[data-prefix]'),
    suffix: value('[data-suffix]'),
    numberingMode: mode === 'prefix' || mode === 'suffix' ? mode : 'none',
    numberStart: Number(value('[data-number-start]')) || 1,
    numberPadding: Number(value('[data-number-padding]')) || 1,
    numberSeparator: value('[data-number-separator]'),
    preserveExtension: checked('[data-preserve-extension]'),
  };
}

function writeOptions(root: ParentNode, options: RenameOptions): void {
  const setValue = (selector: string, value: string): void => {
    const input = getElement<HTMLInputElement>(root, selector);
    if (input) input.value = value;
  };
  setValue('[data-find]', options.findText);
  setValue('[data-replace]', options.replaceText);
  setValue('[data-prefix]', options.prefix);
  setValue('[data-suffix]', options.suffix);
  setValue('[data-number-start]', String(options.numberStart));
  setValue('[data-number-padding]', String(options.numberPadding));
  setValue('[data-number-separator]', options.numberSeparator);
  const mode = getElement<HTMLInputElement>(root, `[data-numbering="${options.numberingMode}"]`);
  if (mode) mode.checked = true;
  const preserve = getElement<HTMLInputElement>(root, '[data-preserve-extension]');
  if (preserve) preserve.checked = options.preserveExtension;
}

function setStatus(root: ParentNode, message: string): void {
  const status = getElement<HTMLElement>(root, '[data-status]');
  if (status) status.textContent = message;
}

function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function buildManifest(plan: RenamePlan[]): string {
  return plan.map((item) => `${item.originalName} -> ${item.newName}`).join('\n');
}

function installFileDrop(root: HTMLElement, onFiles: (files: File[]) => void, ui: BatchFileNameNormalizerUI): void {
  const dropzone = getElement<HTMLElement>(root, '[data-dropzone]');
  const input = getElement<HTMLInputElement>(root, '[data-file-input]');
  const choose = getElement<HTMLButtonElement>(root, '[data-choose]');
  if (!dropzone || !input || !choose) return;
  choose.addEventListener('click', () => input.click());
  input.addEventListener('change', () => onFiles(Array.from(input.files ?? [])));
  ['dragenter', 'dragover'].forEach((eventName) => dropzone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropzone.classList.add('bfn-dropzone-active');
    dropzone.setAttribute('aria-label', ui.dropFilesActive);
  }));
  ['dragleave', 'drop'].forEach((eventName) => dropzone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropzone.classList.remove('bfn-dropzone-active');
    dropzone.setAttribute('aria-label', ui.dropFiles);
  }));
  dropzone.addEventListener('drop', (event) => onFiles(Array.from(event.dataTransfer?.files ?? [])));
}

function createSampleFiles(): File[] {
  return [
    new File(['Quarterly planning notes'], 'project draft 01.txt', { type: 'text/plain' }),
    new File(['Review checklist'], 'project draft 02.txt', { type: 'text/plain' }),
    new File(['Release notes'], 'project draft 03.txt', { type: 'text/plain' }),
  ];
}

function createUpdate(root: HTMLElement, state: ControllerState, ui: BatchFileNameNormalizerUI): () => void {
  const fileList = getElement<HTMLElement>(root, '[data-file-list]');
  const table = getElement<HTMLElement>(root, '[data-preview]');
  const summary = getElement<HTMLElement>(root, '[data-summary]');
  const count = getElement<HTMLElement>(root, '[data-file-count]');
  const download = getElement<HTMLButtonElement>(root, '[data-download]');
  return (): void => {
    if (!fileList || !table || !summary || !count || !download) return;
    state.options = readOptions(root, state.options);
    saveRenameOptions(state.options);
    state.plan = planRenames(state.files.map((file, index) => ({ name: file.name, index })), state.options);
    count.textContent = String(state.files.length);
    renderFileList(fileList, state.files, ui);
    renderPlan(table, state.plan, ui);
    renderSummary(summary, evaluatePlan(state.plan), ui);
    download.disabled = !canDownload(state.plan) || state.plan.every((item) => item.status === 'unchanged');
    const copyButton = getElement<HTMLButtonElement>(root, '[data-copy]');
    if (copyButton) copyButton.disabled = state.plan.length === 0;
  };
}

function connectExample(root: HTMLElement, state: ControllerState, ui: BatchFileNameNormalizerUI, update: () => void): void {
  const example = getElement<HTMLButtonElement>(root, '[data-example]');
  example?.addEventListener('click', () => {
    state.files = createSampleFiles();
    state.options = { ...state.options, findText: 'draft', replaceText: 'final', numberingMode: 'suffix', numberStart: 1, numberPadding: 2, numberSeparator: '-' };
    writeOptions(root, state.options);
    update();
    setStatus(root, ui.exampleLoadedMessage);
  });
}

function connectClear(root: HTMLElement, state: ControllerState, ui: BatchFileNameNormalizerUI, update: () => void): void {
  const clear = getElement<HTMLButtonElement>(root, '[data-clear]');
  clear?.addEventListener('click', () => {
    state.files = [];
    state.options = { ...DEFAULT_RENAME_OPTIONS };
    writeOptions(root, state.options);
    const input = getElement<HTMLInputElement>(root, '[data-file-input]');
    if (input) input.value = '';
    update();
    setStatus(root, ui.clearedMessage);
  });
}

function connectDownloads(root: HTMLElement, state: ControllerState, ui: BatchFileNameNormalizerUI): void {
  const download = getElement<HTMLButtonElement>(root, '[data-download]');
  download?.addEventListener('click', async () => {
    try {
      const files = state.files.map((file, index) => ({ name: state.plan[index]?.newName ?? file.name, file }));
      downloadBlob(await createZip(files), ui.manifestFilename);
      setStatus(root, ui.downloadedMessage);
    } catch {
      setStatus(root, ui.zipErrorMessage);
    }
  });
  const copy = getElement<HTMLButtonElement>(root, '[data-copy]');
  copy?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(buildManifest(state.plan));
      setStatus(root, ui.copiedMessage);
    } catch {
      setStatus(root, ui.copyErrorMessage);
    }
  });
}

function setupRoot(root: HTMLElement): void {
  if (root.dataset.initialized === 'true') return;
  root.dataset.initialized = 'true';
  const ui = JSON.parse(root.dataset.ui ?? '{}') as BatchFileNameNormalizerUI;
  const state: ControllerState = { files: [], options: loadRenameOptions(DEFAULT_RENAME_OPTIONS), plan: [] };
  const update = createUpdate(root, state, ui);
  installFileDrop(root, (files) => { state.files = files; update(); }, ui);
  root.querySelectorAll<HTMLInputElement>('input[data-option], input[data-numbering]').forEach((input) => input.addEventListener('input', update));
  connectExample(root, state, ui, update);
  connectClear(root, state, ui, update);
  connectDownloads(root, state, ui);
  writeOptions(root, state.options);
  update();
}

export function initBatchFileNameNormalizer(): void {
  document.querySelectorAll<HTMLElement>('[data-batch-file-name-normalizer]').forEach(setupRoot);
}
