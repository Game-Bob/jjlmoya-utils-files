import { hashVerifier } from './entry';
export * from './entry';
export const HASH_VERIFIER_TOOL: ToolDefinition = {
  entry: hashVerifier,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
