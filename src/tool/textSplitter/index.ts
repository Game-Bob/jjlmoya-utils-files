import type { FilesToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import TextSplitterComponent from './component.astro';
import TextSplitterSEO from './seo.astro';
import TextSplitterBibliography from './bibliography.astro';

import type { TextSplitterUI } from './ui';

export type TextSplitterLocaleContent = ToolLocaleContent<TextSplitterUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const textSplitter: FilesToolEntry<TextSplitterUI> = {
  id: 'text-splitter',
  icons: {
    bg: 'mdi:format-list-bulleted',
    fg: 'mdi:scissors-cutting',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { TextSplitterComponent, TextSplitterSEO, TextSplitterBibliography };

export const TEXT_SPLITTER_TOOL: ToolDefinition = {
  entry: textSplitter,
  Component: TextSplitterComponent,
  SEOComponent: TextSplitterSEO,
  BibliographyComponent: TextSplitterBibliography,
};
