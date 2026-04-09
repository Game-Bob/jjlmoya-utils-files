import type { FilesToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import JsonToCsvComponent from './component.astro';
import JsonToCsvSEO from './seo.astro';
import JsonToCsvBibliography from './bibliography.astro';

import type { JsonToCsvUI } from './ui';

export type JsonToCsvLocaleContent = ToolLocaleContent<JsonToCsvUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const jsonToCsv: FilesToolEntry<JsonToCsvUI> = {
  id: 'json-to-csv',
  icons: {
    bg: 'mdi:file-code-outline',
    fg: 'mdi:table-arrow-right',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { JsonToCsvComponent, JsonToCsvSEO, JsonToCsvBibliography };

export const JSON_TO_CSV_TOOL: ToolDefinition = {
  entry: jsonToCsv,
  Component: JsonToCsvComponent,
  SEOComponent: JsonToCsvSEO,
  BibliographyComponent: JsonToCsvBibliography,
};
