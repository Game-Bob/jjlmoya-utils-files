import type { ToolDefinition } from '../../types';
import { fileSizeConverter } from './entry';

export * from './entry';

export const FILE_SIZE_CONVERTER_TOOL: ToolDefinition = {
  entry: fileSizeConverter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
