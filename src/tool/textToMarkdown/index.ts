import type { FilesToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import TextToMarkdownComponent from './component.astro';
import TextToMarkdownSEO from './seo.astro';
import TextToMarkdownBibliography from './bibliography.astro';

import type { TextToMarkdownUI } from './ui';

export type TextToMarkdownLocaleContent = ToolLocaleContent<TextToMarkdownUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const textToMarkdown: FilesToolEntry<TextToMarkdownUI> = {
  id: 'text-to-markdown',
  icons: {
    bg: 'mdi:language-markdown',
    fg: 'mdi:code-tags',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { TextToMarkdownComponent, TextToMarkdownSEO, TextToMarkdownBibliography };

export const TEXT_TO_MARKDOWN_TOOL: ToolDefinition = {
  entry: textToMarkdown,
  Component: TextToMarkdownComponent,
  SEOComponent: TextToMarkdownSEO,
  BibliographyComponent: TextToMarkdownBibliography,
};
