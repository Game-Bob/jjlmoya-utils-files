import { describe, expect, it } from 'vitest';
import { htmlToMarkdown } from './logic';

describe('textToMarkdown', () => {
  it('exposes the browser HTML conversion API', () => {
    expect(htmlToMarkdown).toBeTypeOf('function');
  });
});
