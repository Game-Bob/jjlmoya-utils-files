import { describe, expect, it } from 'vitest';
import {
  DEFAULT_RENAME_OPTIONS,
  canDownload,
  createNewName,
  planRenames,
  summarizePlan,
  validateFilename,
} from './logic';

describe('batch file name normalizer logic', () => {
  it('replaces text while preserving the final extension', () => {
    const options = { ...DEFAULT_RENAME_OPTIONS, findText: 'draft', replaceText: 'final' };
    expect(createNewName({ name: 'draft-notes.txt', index: 0 }, options)).toBe('final-notes.txt');
  });

  it('adds padded numbering before the extension', () => {
    const options = { ...DEFAULT_RENAME_OPTIONS, numberingMode: 'suffix' as const, numberStart: 7, numberPadding: 3, numberSeparator: '-' };
    expect(createNewName({ name: 'photo.JPG', index: 1 }, options)).toBe('photo-008.JPG');
  });

  it('can intentionally include the extension in the transformation', () => {
    const options = { ...DEFAULT_RENAME_OPTIONS, preserveExtension: false, suffix: '-copy' };
    expect(createNewName({ name: 'notes.txt', index: 0 }, options)).toBe('notes.txt-copy');
  });

  it('flags reserved characters, trailing punctuation and device names', () => {
    expect(validateFilename('report?.txt')).not.toBe('');
    expect(validateFilename('report.')).not.toBe('');
    expect(validateFilename('CON.txt')).not.toBe('');
    expect(validateFilename('report.txt')).toBe('');
  });

  it('marks case insensitive duplicate outputs as collisions', () => {
    const options = { ...DEFAULT_RENAME_OPTIONS, findText: 'raw', replaceText: 'final' };
    const plan = planRenames([{ name: 'raw.txt', index: 0 }, { name: 'FINAL.TXT', index: 1 }], options);
    expect(plan.map((item) => item.status)).toEqual(['collision', 'collision']);
    expect(canDownload(plan)).toBe(false);
  });

  it('summarizes ready, unchanged and invalid results', () => {
    const options = { ...DEFAULT_RENAME_OPTIONS, prefix: 'x-' };
    const plan = planRenames([{ name: 'a.txt', index: 0 }, { name: 'b?.txt', index: 1 }], options);
    expect(summarizePlan(plan)).toEqual({ total: 2, ready: 1, unchanged: 0, issues: 1 });
  });
});
