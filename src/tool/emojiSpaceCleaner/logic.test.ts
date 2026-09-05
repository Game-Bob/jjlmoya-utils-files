import { describe, expect, it } from 'vitest';
import { cleanText, normalizeSpaces, removeEmojis } from './logic';

describe('emojiSpaceCleaner', () => {
  it('removes pictographic symbols and counts them', () => {
    expect(removeEmojis('Hola \u{1F600} mundo \u{1F680}')).toEqual({ text: 'Hola  mundo ', count: 2 });
  });

  it('normalizes repeated horizontal whitespace without changing newlines', () => {
    expect(normalizeSpaces('a   b\n c\t\td')).toEqual({ text: 'a b\n c d', count: 3 });
  });

  it('composes enabled cleaning operations and leaves disabled operations untouched', () => {
    expect(cleanText('a \u{1F600}   b', true, true)).toEqual({ text: 'a b', emojisRemoved: 1, spacesNormalized: 3 });
    expect(cleanText('a \u{1F600}   b', false, false)).toEqual({ text: 'a \u{1F600}   b', emojisRemoved: 0, spacesNormalized: 0 });
  });
});
