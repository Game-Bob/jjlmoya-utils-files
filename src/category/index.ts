import type { FilesCategoryEntry } from '../types';
import { clipboardToImage } from '../tool/clipboardToImage/index';
import { formatStripper } from '../tool/formatStripper/index';
import { characterCounter } from '../tool/characterCounter/index';
import { hashVerifier } from '../tool/hashVerifier/index';
import { textToMarkdown } from '../tool/textToMarkdown/index';
import { emojiSpaceCleaner } from '../tool/emojiSpaceCleaner/index';
import { textSplitter } from '../tool/textSplitter/index';

export const filesCategory: FilesCategoryEntry = {
  icon: 'mdi:file-multiple',
  tools: [clipboardToImage, formatStripper, characterCounter, hashVerifier, textToMarkdown, emojiSpaceCleaner, textSplitter],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

