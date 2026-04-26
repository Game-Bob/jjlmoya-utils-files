import type { FilesToolEntry, ToolLocaleContent } from '../../types';
import type { FileSizeConverterUI } from './ui';

export type FileSizeConverterLocaleContent = ToolLocaleContent<FileSizeConverterUI>;

export const fileSizeConverter: FilesToolEntry<FileSizeConverterUI> = {
  id: 'file-size-converter',
  icons: {
    bg: 'mdi:database',
    fg: 'mdi:expansion-card',
  },
  i18n: {
    en: async () => (await import('./i18n/en')).content,
  },
};
