import type { NumberingMode, RenameOptions } from './logic';

const STORAGE_KEY = 'batch-file-name-normalizer:v1';

export interface StoredRenameOptions {
  findText: string;
  replaceText: string;
  prefix: string;
  suffix: string;
  numberingMode: NumberingMode;
  numberStart: number;
  numberPadding: number;
  numberSeparator: string;
  preserveExtension: boolean;
}

export function loadRenameOptions(fallback: RenameOptions): RenameOptions {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as Partial<StoredRenameOptions>;
    return {
      ...fallback,
      ...parsed,
      numberingMode: parsed.numberingMode === 'prefix' || parsed.numberingMode === 'suffix' ? parsed.numberingMode : fallback.numberingMode,
      numberStart: Number.isFinite(parsed.numberStart) ? Number(parsed.numberStart) : fallback.numberStart,
      numberPadding: Number.isFinite(parsed.numberPadding) ? Number(parsed.numberPadding) : fallback.numberPadding,
      preserveExtension: parsed.preserveExtension !== false,
    };
  } catch {
    return fallback;
  }
}

export function saveRenameOptions(options: RenameOptions): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(options));
  } catch {}
}
