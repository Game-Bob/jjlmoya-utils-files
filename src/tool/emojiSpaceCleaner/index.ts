import type { FilesToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import EmojiSpaceCleanerComponent from './component.astro';
import EmojiSpaceCleanerSEO from './seo.astro';
import EmojiSpaceCleanerBibliography from './bibliography.astro';

import type { EmojiSpaceCleanerUI } from './ui';

export type EmojiSpaceCleanerLocaleContent = ToolLocaleContent<EmojiSpaceCleanerUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const emojiSpaceCleaner: FilesToolEntry<EmojiSpaceCleanerUI> = {
  id: 'emoji-space-cleaner',
  icons: {
    bg: 'mdi:emoticon-remove',
    fg: 'mdi:format-clear',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { EmojiSpaceCleanerComponent, EmojiSpaceCleanerSEO, EmojiSpaceCleanerBibliography };

export const EMOJI_SPACE_CLEANER_TOOL: ToolDefinition = {
  entry: emojiSpaceCleaner,
  Component: EmojiSpaceCleanerComponent,
  SEOComponent: EmojiSpaceCleanerSEO,
  BibliographyComponent: EmojiSpaceCleanerBibliography,
};
