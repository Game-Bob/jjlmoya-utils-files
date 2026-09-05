import { createMarkdownToRichTextContent } from '../content';
import { getBibliography } from '../bibliography';

export const content = createMarkdownToRichTextContent({
  locale: 'en',
  slug: 'markdown-to-rich-text',
  title: 'Markdown to Rich Text Converter: Copy Formatted HTML',
  description: 'Convert Markdown into safe rich text with a live preview and paste-ready HTML. Everything runs locally in your browser.',
  bibliography: getBibliography('en'),
  faq: [
    { question: 'What does this Markdown to rich text converter produce?', answer: 'It turns supported Markdown into semantic rich text that you can review and paste into an editor, email, document, or CMS.' },
    { question: 'Which Markdown features are supported?', answer: 'It supports headings, paragraphs, emphasis, strong text, links, images, blockquotes, ordered and unordered lists, inline code, fenced code blocks, and horizontal rules.' },
    { question: 'Why use rich text instead of Markdown?', answer: 'Many editors accept formatted content when you paste it, but they do not interpret Markdown syntax. This tool bridges that gap while preserving a plain-text fallback.' },
    { question: 'Will the pasted formatting look identical everywhere?', answer: 'Rich-text editors apply their own styles and may support different HTML features. Check the preview and expect small visual differences between apps.' },
  ],
  howTo: [
    { name: 'Paste Markdown', text: 'Paste the Markdown document into the source panel.' },
    { name: 'Check the preview', text: 'Review the rendered rich-text page and its structure.' },
    { name: 'Copy rich text', text: 'Copy the formatted result and paste it into your document, email, CMS, or editor.' },
  ],
  seoTitle: 'Turn Markdown into paste-ready rich text',
  seoIntro: 'Markdown is excellent for writing and version control, but many email composers, document editors, and CMS fields expect rich text. This converter creates a semantic HTML version of your Markdown and lets you copy that formatting directly from the browser.',
  seoWorkflowTitle: 'A focused conversion workflow',
  seoWorkflow: 'Paste the Markdown you already have, inspect the document preview, and copy the formatted result. The tool handles common headings, paragraphs, lists, links, quotes, code, and emphasis without requiring an account or an upload.',
  seoFeatures: ['<strong>Rich output:</strong> copy formatted HTML with a plain-text fallback.', '<strong>Clear scope:</strong> supported Markdown is documented instead of overstated.', '<strong>Local workflow:</strong> your draft stays in the browser.', '<strong>Useful recovery:</strong> your latest draft is restored on return.'],
  ui: {
    labelKicker: 'Markdown desk', labelInput: 'Markdown source', labelPreview: 'Rich-text preview', placeholderInput: 'Paste Markdown here...', btnExample: 'Load example', btnClear: 'Clear', btnCopy: 'Copy rich text', toastCopied: 'Rich text copied!', toastCopyError: 'Copy was blocked. Select the preview and copy it manually.', toastRestored: 'Restored your last draft.', emptyPreview: 'Your formatted document will appear here.', labelHint: 'Supports common Markdown structure. Unsafe HTML is escaped and all processing stays in your browser.', labelBlocks: 'blocks', labelWords: 'words', labelWarnings: 'warnings', warningMessage: 'Some content was escaped or could not be treated as a safe link.', exampleMarkdown: '# Release notes\n\nA **focused** update with a [project link](https://example.com).\n\n- Fast local conversion\n- Rich clipboard output\n\n> Paste the result into your editor.\n\n```js\nconst ready = true;\n```',
  },
});
