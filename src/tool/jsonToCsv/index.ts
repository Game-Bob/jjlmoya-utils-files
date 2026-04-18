import { jsonToCsv } from './entry';
export * from './entry';
export const JSON_TO_CSV_TOOL: ToolDefinition = {
  entry: jsonToCsv,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
