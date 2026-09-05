import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { BibliographyEntry, FAQItem, HowToStep, KnownLocale, ToolLocaleContent } from '../../types';
import type { MarkdownToRichTextUI } from './ui';

type MarkdownSEO = ToolLocaleContent<MarkdownToRichTextUI>['seo'];

export interface MarkdownToRichTextCopy {
  locale: KnownLocale;
  slug: string;
  title: string;
  description: string;
  bibliography: BibliographyEntry[];
  faq: FAQItem[];
  howTo: HowToStep[];
  seoTitle: string;
  seoIntro: string;
  seoWorkflowTitle: string;
  seoWorkflow: string;
  seoFeatures: string[];
  ui: MarkdownToRichTextUI;
}

function createSchemas(copy: MarkdownToRichTextCopy): ToolLocaleContent<MarkdownToRichTextUI>['schemas'] {
  const faqSchema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  };
  const howToSchema: WithContext<HowTo> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: copy.title,
    description: copy.description,
    step: copy.howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
  };
  const appSchema: WithContext<SoftwareApplication> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: copy.title,
    description: copy.description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    inLanguage: copy.locale,
  };
  return [faqSchema, howToSchema, appSchema];
}

function createSEO(copy: MarkdownToRichTextCopy): MarkdownSEO {
  return [
    { type: 'title', text: copy.seoTitle, level: 2 },
    { type: 'paragraph', html: copy.seoIntro },
    { type: 'title', text: copy.seoWorkflowTitle, level: 2 },
    { type: 'paragraph', html: copy.seoWorkflow },
    { type: 'list', items: copy.seoFeatures },
  ];
}

export function createMarkdownToRichTextContent(copy: MarkdownToRichTextCopy): ToolLocaleContent<MarkdownToRichTextUI> {
  return {
    slug: copy.slug,
    title: copy.title,
    description: copy.description,
    bibliography: copy.bibliography,
    faq: copy.faq,
    howTo: copy.howTo,
    schemas: createSchemas(copy),
    seo: createSEO(copy),
    ui: copy.ui,
  };
}
