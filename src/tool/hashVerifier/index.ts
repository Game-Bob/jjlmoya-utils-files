import type { FilesToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import HashVerifierComponent from './component.astro';
import HashVerifierSEO from './seo.astro';
import HashVerifierBibliography from './bibliography.astro';

import type { HashVerifierUI } from './ui';

export type HashVerifierLocaleContent = ToolLocaleContent<HashVerifierUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const hashVerifier: FilesToolEntry<HashVerifierUI> = {
  id: 'hash-verifier',
  icons: {
    bg: 'mdi:shield-check',
    fg: 'mdi:lock',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { HashVerifierComponent, HashVerifierSEO, HashVerifierBibliography };

export const HASH_VERIFIER_TOOL: ToolDefinition = {
  entry: hashVerifier,
  Component: HashVerifierComponent,
  SEOComponent: HashVerifierSEO,
  BibliographyComponent: HashVerifierBibliography,
};
