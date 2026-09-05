import { describe, expect, it } from 'vitest';
import { resolveDelimiter, splitText } from './logic';

const options = { trim: true, unique: true, clean: true, numbered: false };

describe('textSplitter', () => {
  it('resolves built-in and custom delimiters', () => {
    expect(resolveDelimiter('semicolon', '')).toBe(';');
    expect(resolveDelimiter('custom', '|')).toBe('|');
  });

  it('trims, removes empty values and de-duplicates items', () => {
    expect(splitText(' a, b,,a ', ',', options)).toBe('a\nb');
  });

  it('numbers output after applying cleanup', () => {
    expect(splitText('a,b', ',', { ...options, unique: false, numbered: true })).toBe('1. a\n2. b');
    expect(splitText('   ', ',', options)).toBe('');
  });
});
