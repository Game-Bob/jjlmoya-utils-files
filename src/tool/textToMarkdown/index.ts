import type { ToolDefinition } from '../../types';
import { textToMarkdown } from './entry';
export * from './entry';
export const TEXT_TO_MARKDOWN_TOOL: ToolDefinition = {
  entry: textToMarkdown,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
