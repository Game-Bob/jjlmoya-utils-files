export * from './entry';
export const CLIPBOARD_TO_IMAGE_TOOL: ToolDefinition = {
  entry: clipboardToImage,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
