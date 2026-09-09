import type { ToolDefinition } from '../../types';
import { batchFileNameNormalizer } from './entry';

export * from './entry';

export const BATCH_FILE_NAME_NORMALIZER_TOOL: ToolDefinition = {
  entry: batchFileNameNormalizer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
