import type { FilesToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import CharacterCounterComponent from './component.astro';
import CharacterCounterSEO from './seo.astro';
import CharacterCounterBibliography from './bibliography.astro';

import type { CharacterCounterUI } from './ui';

export type CharacterCounterLocaleContent = ToolLocaleContent<CharacterCounterUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const characterCounter: FilesToolEntry<CharacterCounterUI> = {
  id: 'character-counter',
  icons: {
    bg: 'mdi:counter',
    fg: 'mdi:text',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { CharacterCounterComponent, CharacterCounterSEO, CharacterCounterBibliography };

export const CHARACTER_COUNTER_TOOL: ToolDefinition = {
  entry: characterCounter,
  Component: CharacterCounterComponent,
  SEOComponent: CharacterCounterSEO,
  BibliographyComponent: CharacterCounterBibliography,
};
