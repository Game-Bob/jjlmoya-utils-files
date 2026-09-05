import type { ToolDefinition } from '../../types';
import { markdownToRichText } from './entry';

export * from './entry';

export const MARKDOWN_TO_RICH_TEXT_TOOL: ToolDefinition = {
  entry: markdownToRichText,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
