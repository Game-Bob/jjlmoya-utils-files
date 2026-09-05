export { filesCategory } from './category';
export const filesCategorySEO = () => import('./category/seo.astro').then((m) => m.default);

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  FilesToolEntry,
  FilesCategoryEntry,
  ToolDefinition,
} from './types';

export { ALL_ENTRIES, ALL_TOOLS } from './tools';

export { CLIPBOARD_TO_IMAGE_TOOL } from './tool/clipboardToImage';
export { FORMAT_STRIPPER_TOOL } from './tool/formatStripper';
export { CHARACTER_COUNTER_TOOL } from './tool/characterCounter';
export { HASH_VERIFIER_TOOL } from './tool/hashVerifier';
export { TEXT_TO_MARKDOWN_TOOL } from './tool/textToMarkdown';
export { EMOJI_SPACE_CLEANER_TOOL } from './tool/emojiSpaceCleaner';
export { TEXT_SPLITTER_TOOL } from './tool/textSplitter';
export { JSON_TO_CSV_TOOL } from './tool/jsonToCsv';
export { FILE_SIZE_CONVERTER_TOOL } from './tool/fileSizeConverter';
export { MARKDOWN_TO_RICH_TEXT_TOOL } from './tool/markdownToRichText';
