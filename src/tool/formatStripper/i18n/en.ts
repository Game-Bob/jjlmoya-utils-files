import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FormatStripperUI } from '../ui';

const slug = 'format-stripper';
const title = 'Text Format Stripper';
const description =
  'Remove junk formatting from any copied text: double spaces, stray line breaks, and invisible characters. Convert to upper or lower case with a single click.';

const faqData = [
  {
    question: 'What types of formatting does this tool remove?',
    answer:
      'It removes double spaces, tabs, redundant line breaks, and normalises punctuation so there are no spaces before commas or full stops. The result is clean plain text, ready to paste into any document.',
  },
  {
    question: 'Can I normalise upper and lower case?',
    answer:
      'Yes. The UPPER and lower buttons convert the entire text to the desired case. This is useful for normalising headings, name lists, or correcting text accidentally typed with Caps Lock on.',
  },
  {
    question: 'Is the text sent to any server?',
    answer:
      'No. All processing happens locally in your browser. Your content never leaves your device.',
  },
  {
    question: 'How does the automatic clean-up on paste work?',
    answer:
      'When you paste text with Ctrl+V, the tool intercepts the event and applies the clean-up before inserting the text into the editor. The text is clean from the very first moment without any extra steps.',
  },
];

const howToData = [
  {
    name: 'Paste the text',
    text: 'Paste the content you want to clean into the text area. Clean-up is applied automatically on paste.',
  },
  {
    name: 'Apply optional transforms',
    text: 'If you need to change the case, use the UPPER or lower buttons in the toolbar.',
  },
  {
    name: 'Copy the result',
    text: 'Click the Copy button to send the clean text to your clipboard.',
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

export const content: ToolLocaleContent<FormatStripperUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography',
  bibliography: [
    {
      name: 'ClipboardEvent.clipboardData — MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent/clipboardData',
    },
    {
      name: 'String.prototype.replace() — MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'The Problem with Formatted Text',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'When you copy text from a website, a PDF, or an email and paste it into Word, Google Docs, or any editor, you bring along <strong>invisible formatting</strong>: bold, colours, fonts, tabs, non-breaking spaces, and stray line breaks. The result is dirty text that you have to clean up character by character.',
    },
    {
      type: 'paragraph',
      html: 'This stripper intercepts the text at the moment of paste and automatically applies all the necessary normalisation: it <strong>collapses multiple spaces</strong>, removes spaces before punctuation marks, and produces clean plain text ready to use.',
    },
    {
      type: 'stats',
      items: [
        { value: '100%', label: 'Private & Local', icon: 'mdi:shield-check' },
        { value: '0s', label: 'Instant Clean-up', icon: 'mdi:lightning-bolt' },
        { value: 'Ctrl+V', label: 'Paste Ready', icon: 'mdi:content-paste' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'When to Use a Format Stripper',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Common use cases',
      items: [
        'Copying text from websites or PDFs to paste into text editors or emails.',
        'Normalising documents with multiple authors and inconsistent formatting.',
        'Preparing content for systems that do not support rich formatting (CMS, APIs).',
        'Converting text to upper or lower case for lists or headlines.',
        'Removing tabs and extra spaces from spreadsheet exports.',
      ],
    },
  ],
  ui: {
    labelChars: 'chars',
    labelWords: 'words',
    btnUppercase: 'UPPER',
    btnLowercase: 'lower',
    btnCopy: 'Copy',
    placeholder: 'Paste your text here to clean it...',
    toastCopied: 'Copied',
    toastCleaned: 'Text automatically cleaned',
  },
};
