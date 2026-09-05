import { describe, expect, it } from 'vitest';
import { SHA256, formatFileSize } from './logic';

function digest(value: string): string {
  const hash = new SHA256();
  hash.update(new TextEncoder().encode(value));
  return hash.finalize();
}

describe('hashVerifier', () => {
  it('matches the SHA-256 empty input reference vector', () => {
    expect(digest('')).toBe('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
  });

  it('matches the SHA-256 abc reference vector', () => {
    expect(digest('abc')).toBe('ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
  });

  it('formats the zero-byte boundary', () => {
    expect(formatFileSize(0)).toBe('0 B');
  });
});
