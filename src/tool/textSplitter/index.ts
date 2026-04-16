import type { FilesToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import TextSplitterComponent from './component.astro';
import TextSplitterSEO from './seo.astro';
import TextSplitterBibliography from './bibliography.astro';

import type { TextSplitterUI } from './ui';

export type TextSplitterLocaleContent = ToolLocaleContent<TextSplitterUI>;



export const textSplitter: FilesToolEntry<TextSplitterUI> = {
  id: 'text-splitter',
  icons: {
    bg: 'mdi:format-list-bulleted',
    fg: 'mdi:scissors-cutting',
  },
  i18n: {
    de: async () => (await import('./i18n/de')).content,
    en: async () => (await import('./i18n/en')).content,
    es: async () => (await import('./i18n/es')).content,
    fr: async () => (await import('./i18n/fr')).content,
    id: async () => (await import('./i18n/id')).content,
    it: async () => (await import('./i18n/it')).content,
    ja: async () => (await import('./i18n/ja')).content,
    ko: async () => (await import('./i18n/ko')).content,
    nl: async () => (await import('./i18n/nl')).content,
    pl: async () => (await import('./i18n/pl')).content,
    pt: async () => (await import('./i18n/pt')).content,
    ru: async () => (await import('./i18n/ru')).content,
    sv: async () => (await import('./i18n/sv')).content,
    tr: async () => (await import('./i18n/tr')).content,
    zh: async () => (await import('./i18n/zh')).content,
  },
};

export { TextSplitterComponent, TextSplitterSEO, TextSplitterBibliography };

export const TEXT_SPLITTER_TOOL: ToolDefinition = {
  entry: textSplitter,
  Component: TextSplitterComponent,
  SEOComponent: TextSplitterSEO,
  BibliographyComponent: TextSplitterBibliography,
};
