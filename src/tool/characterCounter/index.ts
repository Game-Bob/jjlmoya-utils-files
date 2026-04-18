import { characterCounter } from './entry';
export * from './entry';
export const CHARACTER_COUNTER_TOOL: ToolDefinition = {
  entry: characterCounter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
