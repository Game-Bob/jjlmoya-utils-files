import type { FilesToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import ClipboardToImageComponent from './component.astro';
import ClipboardToImageSEO from './seo.astro';
import ClipboardToImageBibliography from './bibliography.astro';

import type { ClipboardToImageUI } from './ui';

export type ClipboardToImageLocaleContent = ToolLocaleContent<ClipboardToImageUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const clipboardToImage: FilesToolEntry<ClipboardToImageUI> = {
  id: 'clipboard-to-image',
  icons: {
    bg: 'mdi:clipboard-outline',
    fg: 'mdi:image-outline',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { ClipboardToImageComponent, ClipboardToImageSEO, ClipboardToImageBibliography };

export const CLIPBOARD_TO_IMAGE_TOOL: ToolDefinition = {
  entry: clipboardToImage,
  Component: ClipboardToImageComponent,
  SEOComponent: ClipboardToImageSEO,
  BibliographyComponent: ClipboardToImageBibliography,
};
