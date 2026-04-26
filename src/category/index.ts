import type { FilesCategoryEntry } from '../types';
import { clipboardToImage } from '../tool/clipboardToImage/index';
import { formatStripper } from '../tool/formatStripper/index';
import { characterCounter } from '../tool/characterCounter/index';
import { hashVerifier } from '../tool/hashVerifier/index';
import { textToMarkdown } from '../tool/textToMarkdown/index';
import { emojiSpaceCleaner } from '../tool/emojiSpaceCleaner/index';
import { textSplitter } from '../tool/textSplitter/index';
import { fileSizeConverter } from '../tool/fileSizeConverter/index';

export const filesCategory: FilesCategoryEntry = {
  icon: 'mdi:file-multiple',
  tools: [clipboardToImage, formatStripper, characterCounter, hashVerifier, textToMarkdown, emojiSpaceCleaner, textSplitter, fileSizeConverter],
  i18n: {
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    de: () => import('./i18n/de').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};

