import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CharacterCounterUI } from '../ui';

const slug = 'character-counter';
const title = 'Character and Word Counter';
const description =
  'Count characters, words, lines, and paragraphs in real time. Estimate reading and speaking time. Perfect for SEO, social media, and professional writing.';

const faqData = [
  {
    question: 'Why does character count matter for SEO?',
    answer:
      'Search engines have recommended limits: 60 characters for titles and 155–160 for meta descriptions. Exceeding them causes content to be truncated in search results.',
  },
  {
    question: 'Does the counter include spaces?',
    answer:
      'Yes, the main counter includes all characters including spaces. The detail row also shows the count without spaces for when you need that metric.',
  },
  {
    question: 'How is reading time calculated?',
    answer:
      'Reading time is based on an average of 200 words per minute. Speaking time uses 130 words per minute, which is more appropriate for scripts and oral presentations.',
  },
  {
    question: 'Can I analyse text files?',
    answer:
      'Yes. You can upload .txt, .md, .json, .csv, .js, .ts, .html, or .css files using the upload button, or drag and drop them directly onto the text area.',
  },
];

const howToData = [
  {
    name: 'Enter the text',
    text: 'Type directly, paste with Ctrl+V, or drag a file onto the text area.',
  },
  {
    name: 'Check the main stats',
    text: 'The character, word, line, and paragraph counts update in real time.',
  },
  {
    name: 'Review the details',
    text: 'The lower row shows characters without spaces, file size in bytes, and estimated times.',
  },
  {
    name: 'Copy or clear',
    text: 'Use the toolbar buttons to copy the text to the clipboard or erase everything.',
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
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<CharacterCounterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography',
  bibliography: [
    {
      name: 'Intl.NumberFormat — MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat',
    },
    {
      name: 'FileReader API — MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileReader',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Text Counting for SEO, Social Media, and Professional Writing',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Every platform has its own text limits. Twitter/X allows 280 characters, an SEO title should not exceed 60, and an optimal meta description is around 155–160. Without a precise counter it is easy to go over or under. This tool updates all counts <strong>in real time</strong>, character by character.',
    },
    {
      type: 'stats',
      items: [
        { value: '60', label: 'SEO title chars', icon: 'mdi:magnify' },
        { value: '155', label: 'Meta desc. chars', icon: 'mdi:text-box' },
        { value: '200', label: 'Words/min reading', icon: 'mdi:book-open-variant' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Metrics Provided by the Counter',
      level: 3,
    },
    {
      type: 'summary',
      title: 'What this tool measures',
      items: [
        'Total characters (with and without spaces) for platform limits.',
        'Words: real count split by spaces and line breaks.',
        'Lines and paragraphs: useful for structuring articles and scripts.',
        'Estimated reading time at 200 words per minute.',
        'Estimated speaking time at 130 words per minute.',
        'Size in bytes: relevant for APIs with payload limits.',
      ],
    },
  ],
  ui: {
    labelChars: 'Characters',
    labelWords: 'Words',
    labelLines: 'Lines',
    labelParagraphs: 'Paragraphs',
    labelNoSpaces: 'No Spaces',
    labelBytes: 'Bytes',
    labelReading: 'Read Time',
    labelSpeaking: 'Speak Time',
    labelUpload: 'Upload File',
    btnCopyTitle: 'Copy text',
    btnClearTitle: 'Clear all',
    placeholder: 'Type, paste something here or drag a file...',
    unitSec: 'sec',
    unitMin: 'min',
    numberLocale: 'en-US',
  },
};
