import type { FilesToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import ClipboardToImageComponent from './component.astro';
import ClipboardToImageSEO from './seo.astro';
import ClipboardToImageBibliography from './bibliography.astro';

import type { ClipboardToImageUI } from './ui';

export type ClipboardToImageLocaleContent = ToolLocaleContent<ClipboardToImageUI>;



export const clipboardToImage: FilesToolEntry<ClipboardToImageUI> = {
  id: 'clipboard-to-image',
  icons: {
    bg: 'mdi:clipboard-outline',
    fg: 'mdi:image-outline',
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

export { ClipboardToImageComponent, ClipboardToImageSEO, ClipboardToImageBibliography };

export const CLIPBOARD_TO_IMAGE_TOOL: ToolDefinition = {
  entry: clipboardToImage,
  Component: ClipboardToImageComponent,
  SEOComponent: ClipboardToImageSEO,
  BibliographyComponent: ClipboardToImageBibliography,
};
