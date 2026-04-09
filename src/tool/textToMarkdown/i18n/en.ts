import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextToMarkdownUI } from '../ui';

const slug = 'text-to-markdown';
const title = 'HTML to Markdown Converter';
const description =
  'Convert HTML or rich text to clean Markdown instantly, entirely in your browser. Paste content from any website or document and get ready-to-use Markdown without sending anything to any server.';

const faqData = [
  {
    question: 'What exactly does this tool convert?',
    answer:
      'It converts HTML to Markdown syntax. Supported elements include headings (h1–h6), paragraphs, bold, italic, links, images, ordered and unordered lists, blockquotes, code blocks, and horizontal rules.',
  },
  {
    question: 'Can I paste content directly from a web page?',
    answer:
      'Yes. When you paste (Ctrl+V) text copied from a browser, the tool automatically intercepts the HTML from the clipboard and converts it to Markdown. You do not need to copy the page source.',
  },
  {
    question: 'Is it safe to use with private content?',
    answer:
      'Completely. The conversion happens 100% in your browser using the native DOM API. No data leaves your device.',
  },
  {
    question: 'When is HTML-to-Markdown conversion useful?',
    answer:
      'It is useful for migrating content to tools like Obsidian, Notion, GitHub READMEs, Jekyll, or any Markdown-based system. Also handy for cleaning up formatting from documents or emails.',
  },
];

const howToData = [
  {
    name: 'Paste or type the HTML',
    text: 'Paste HTML into the left panel. If you paste text copied from a website, the HTML is automatically extracted from the clipboard.',
  },
  {
    name: 'Get the Markdown',
    text: 'The right panel shows the converted Markdown in real time as you type or paste.',
  },
  {
    name: 'Copy the result',
    text: 'Use the "Copy Markdown" button to copy the result to the clipboard in one click.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<TextToMarkdownUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Specifications and References',
  bibliography: [
    {
      name: 'CommonMark Spec — the standard Markdown specification',
      url: 'https://spec.commonmark.org/',
    },
    {
      name: 'GitHub Flavored Markdown Spec',
      url: 'https://github.github.com/gfm/',
    },
    {
      name: 'MDN Web Docs: DOMParser API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOMParser',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Why Convert HTML to Markdown',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Markdown</strong> is the most widely used lightweight text format in technical documentation, wikis, blogs, and repositories. Converting HTML to Markdown lets you reuse web content in tools like Obsidian, GitHub, Jekyll, or Notion without losing the original structure.',
    },
    {
      type: 'stats',
      items: [
        { value: '100%', label: 'Private & Local', icon: 'mdi:incognito' },
        { value: '0ms', label: 'Network latency', icon: 'mdi:lightning-bolt' },
        { value: '∞', label: 'No size limit', icon: 'mdi:infinity' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Common Use Cases',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Situations where this conversion matters',
      items: [
        'Migrating articles from a CMS or blog to a Markdown repository.',
        'Cleaning up formatting from Word, Google Docs, or email content.',
        'Preparing content for GitHub READMEs or technical documentation.',
        'Exporting Notion or Confluence pages to local Markdown files.',
        'Converting HTML emails to plain notes for Obsidian or Logseq.',
      ],
    },
  ],
  ui: {
    labelInput: 'HTML Input',
    labelOutput: 'Markdown Output',
    placeholderInput: 'Paste HTML here, or paste text copied from any website...',
    placeholderOutput: 'Markdown will appear here...',
    btnClear: 'Clear',
    btnCopy: 'Copy Markdown',
    toastCopied: 'Copied!',
    labelHint: '* When pasting text from a website (Ctrl+V), the HTML is automatically extracted from the clipboard.',
  },
};
