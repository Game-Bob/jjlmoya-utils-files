import { describe, expect, it } from 'vitest';
import { markdownToRichText } from './logic';

describe('markdownToRichText', () => {
  it('renders common Markdown into semantic rich text and plain text', () => {
    const result = markdownToRichText('# Hello\n\nThis is **bold** and [useful](https://example.com).\n\n- One\n- Two');

    expect(result.html).toContain('<h1>Hello</h1>');
    expect(result.html).toContain('<strong>bold</strong>');
    expect(result.html).toContain('href="https://example.com"');
    expect(result.html).toContain('<ul><li>One</li><li>Two</li></ul>');
    expect(result.plainText).toBe('Hello\n\nThis is bold and useful.\n\nOne\nTwo');
    expect(result.blockCount).toBe(3);
    expect(result.wordCount).toBe(8);
  });

  it('escapes raw HTML and blocks unsafe link schemes', () => {
    const result = markdownToRichText('<script>alert(1)</script>\n\n[x](javascript:alert(1))');

    expect(result.html).toContain('&lt;script&gt;alert(1)&lt;/script&gt;');
    expect(result.html).not.toContain('<script>');
    expect(result.html).not.toContain('javascript:');
    expect(result.warningCount).toBe(1);
  });

  it('renders fenced code and preserves code text', () => {
    const result = markdownToRichText('```ts\nconst value = "<safe>";\n```');

    expect(result.html).toContain('class="language-ts"');
    expect(result.html).toContain('&lt;safe&gt;');
    expect(result.plainText).toBe('const value = "<safe>";');
  });

  it('returns an empty result for empty input', () => {
    expect(markdownToRichText('')).toEqual({ html: '', plainText: '', blockCount: 0, wordCount: 0, warningCount: 0 });
  });
});
