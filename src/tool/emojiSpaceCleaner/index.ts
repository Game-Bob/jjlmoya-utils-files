export * from './entry';
export const EMOJI_SPACE_CLEANER_TOOL: ToolDefinition = {
  entry: emojiSpaceCleaner,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
