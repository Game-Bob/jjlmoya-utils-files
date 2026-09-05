import { describe, expect, it } from 'vitest';
import { flattenObject, generateCSV } from './logic';

describe('jsonToCsv', () => {
  it('flattens nested objects while preserving arrays as values', () => {
    expect(flattenObject({ user: { id: 7 }, tags: ['a', 'b'] })).toEqual({ 'user.id': 7, tags: ['a', 'b'] });
  });

  it('quotes fields and escapes embedded quotes', () => {
    expect(generateCSV([{ name: 'Ada', note: 'say "hi"' }])).toBe('\uFEFF"name","note"\n"Ada","say ""hi"""');
  });

  it('returns an empty string for empty input', () => {
    expect(generateCSV([])).toBe('');
  });
});
