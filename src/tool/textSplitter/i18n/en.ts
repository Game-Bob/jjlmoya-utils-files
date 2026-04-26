import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextSplitterUI } from '../ui';

const slug = 'text-splitter';
const title = 'Online Text Splitter - Separate by Paragraphs, Sentences or Length';
const description =
  'Split long texts into smaller parts automatically. Choose between separating by number of words, characters, paragraphs, or sentences.';

const faqData = [
  {
    question: 'How to split text for ChatGPT or AI?',
    answer:
      'Many AIs have character limits per message. With our tool, you can divide your long prompt into smaller parts (for example, every 2000 characters) to send them sequentially without losing information.'
  },
  {
    question: 'Is it safe to paste private texts into the splitter?',
    answer:
      'Totally safe. The splitting logic runs 100% in your browser using JavaScript. No text is sent to our servers, ensuring your data remains private on your device.'
  },
  {
    question: 'Is there a limit to the size of the text I can split?',
    answer:
      'We do not impose a strict limit, as the processing is done locally. You can split several megabytes of text in seconds, although performance depends on your computer\'s memory.'
  },
  {
    question: 'Does it add numbering to the parts?',
    answer:
      'Currently, the tool returns the separate blocks. You can copy them one by one. Many users find this useful for maintaining manual control over how they wend each segment to other applications.'
  },
];

const howToData = [
  {
    name: 'Paste your text',
    text: 'Insert the long text you want to divide in the main input area.'
  },
  {
    name: 'Configure the split',
    text: 'Choose the method (characters, words, sentences, or paragraphs) and set the maximum value for each part.'
  },
  {
    name: 'Copy the parts',
    text: 'The tool will show you the generated blocks. Copy the one you need and use it wherever you want.'
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text
  }))
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en'
};

export const content: ToolLocaleContent<TextSplitterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Why do you need an online text splitter?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Working with very long texts can be a challenge in the digital age. Whether you are a programmer needing to split code into modules, a writer adapting content for social media, or a user interacting with <strong>Large Language Models (LLMs)</strong> like ChatGPT, a <strong>text splitter</strong> is an essential tool.'
    },
    {
      type: 'title',
      text: 'Intelligent Splitting Methods',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>By Characters:</strong> Precise for strictly meeting technical limits.',
        '<strong>By Words:</strong> Ideal for articles and blogs where a specific length is sought for SEO or readability.',
        '<strong>By Sentences:</strong> Ensures that ideas are not cut in half, maintaining the context of each block.',
        '<strong>By Paragraphs:</strong> The best option to keep the logical structure of a complex document.',
      ]
    },
    {
      type: 'title',
      text: 'Privacy and Speed: Local Processing',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Our <strong>online text splitter</strong> does not "upload" your content to any server. Everything is processed instantly in your browser. This means you can work with sensitive documents, contracts, or private emails with the absolute certainty that no one else can see them.'
    },
  ],
  ui: {
    labelInput: 'Text to Split',
    labelOutput: 'Result (one item per line)',
    placeholderInput: 'Paste your comma, space or any delimiter separated list here...',
    placeholderOutput: 'The list will appear here...',
    labelDelimiter: 'Delimiter',
    optComma: 'Comma (,)',
    optSemicolon: 'Semicolon (;)',
    optSpace: 'Space',
    optCustom: 'Custom',
    labelCustom: 'Custom delimiter',
    placeholderCustom: 'Enter the delimiter...',
    optTrim: 'Trim spaces',
    optUnique: 'Remove duplicates',
    optClean: 'Remove empty',
    optNumbered: 'Number lines',
    statLines: 'Result lines',
    statChars: 'Characters',
    btnCopy: 'Copy List',
    btnClear: 'Clear',
    toastCopied: 'Copied to clipboard!'
  }
};
