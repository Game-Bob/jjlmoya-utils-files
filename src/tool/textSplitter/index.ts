import { textSplitter } from './entry';
export * from './entry';
export const TEXT_SPLITTER_TOOL: ToolDefinition = {
  entry: textSplitter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
