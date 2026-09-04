import type { ToolDefinition } from '../../types';
import { formatStripper } from './entry';
export * from './entry';
export const FORMAT_STRIPPER_TOOL: ToolDefinition = {
  entry: formatStripper,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
