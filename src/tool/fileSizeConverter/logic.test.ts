import { describe, expect, it } from 'vitest';
import { calculateDownloadTime, convertFromBytes, convertToBytes, parseInput } from './logic';

describe('fileSizeConverter', () => {
  it('parses values with and without units', () => {
    expect(parseInput('1.5 MB')).toEqual({ value: 1.5, unit: 'MB' });
    expect(parseInput('invalid')).toBeNull();
  });

  it('uses decimal and binary factors', () => {
    expect(convertToBytes(1, 'KB')).toBe(1000);
    expect(convertToBytes(1, 'KiB')).toBe(1024);
    expect(convertFromBytes(1024, false).binary.KiB).toBe(1);
  });

  it('formats download time boundaries deterministically', () => {
    expect(calculateDownloadTime(0, 100)).toBe('< 1s');
    expect(calculateDownloadTime(1000000000, 100)).toBe('1m');
  });
});
