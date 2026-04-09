import type { FilesToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import FormatStripperComponent from './component.astro';
import FormatStripperSEO from './seo.astro';
import FormatStripperBibliography from './bibliography.astro';

import type { FormatStripperUI } from './ui';

export type FormatStripperLocaleContent = ToolLocaleContent<FormatStripperUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const formatStripper: FilesToolEntry<FormatStripperUI> = {
  id: 'format-stripper',
  icons: {
    bg: 'mdi:format-clear',
    fg: 'mdi:text-box-edit-outline',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { FormatStripperComponent, FormatStripperSEO, FormatStripperBibliography };

export const FORMAT_STRIPPER_TOOL: ToolDefinition = {
  entry: formatStripper,
  Component: FormatStripperComponent,
  SEOComponent: FormatStripperSEO,
  BibliographyComponent: FormatStripperBibliography,
};
