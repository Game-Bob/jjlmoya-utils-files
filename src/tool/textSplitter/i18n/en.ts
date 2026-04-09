import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextSplitterUI } from '../ui';

const slug = 'text-splitter';
const title = 'Online Text Splitter | List to Lines Converter';
const description =
  'Split comma-separated, space-separated or custom-delimited lists into individual lines instantly. Free tool to clean and organize data online.';

const faqData = [
  {
    question: 'How do I split a comma-separated list online?',
    answer:
      'Paste your list in the text box, select "Comma (,)" as the delimiter, and you will automatically get one item per line in the results area.',
  },
  {
    question: 'What is a comma-to-line-break converter?',
    answer:
      'It is a digital tool that transforms text strings separated by punctuation marks into organized vertical lists, making it easier to process data in spreadsheets or databases.',
  },
  {
    question: 'Can I split text by other characters?',
    answer:
      'Yes, the tool allows you to use semicolons, spaces, or any other custom character you define manually.',
  },
  {
    question: 'Is it safe to process email lists?',
    answer:
      'Absolutely. Being a client-side tool, all processing happens locally in your browser. Your data and private information are never sent to any external server.',
  },
  {
    question: 'Can the tool remove duplicate entries?',
    answer:
      'Yes, it has a specific option to clean the final list of any repeated element, ensuring each line is unique.',
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

export const content: ToolLocaleContent<TextSplitterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Sources and References',
  bibliography: [
    {
      name: 'MDN: String.prototype.split()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split',
    },
    {
      name: 'CSV format and common delimiters guide',
      url: 'https://en.wikipedia.org/wiki/Comma-separated_values',
    },
    {
      name: 'Managing lists and duplicates in JavaScript',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set',
    },
  ],
  howTo: [],
  schemas: [faqSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Text Splitter: How to Quickly Split Lists and Commas Into Lines',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Have you ever found yourself with an endless list of emails, names, or product codes separated by commas, needing each one on a different line? Manually pressing "Enter" hundreds of times is tedious, error-prone, and frankly a waste of time. Our <strong>online text splitter</strong> has been designed precisely to solve this problem in milliseconds.',
    },
    {
      type: 'title',
      text: 'Why Use an Online List Splitter?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In the world of digital marketing, programming, and data management, it is common to receive information in "dirty" formats. You might export a list from a database and get something like <code>item1, item2, item3</code>. To import that into a spreadsheet like Excel or Google Sheets, or to process it in a script, you often need each element in its own row.',
    },
    {
      type: 'paragraph',
      html: 'Using a <strong>comma to line break converter</strong> eliminates the manual workload. Whether you have 10 or 10,000 elements, the client-side logic processes the information locally in your browser, ensuring your data never leaves your computer — offering maximum privacy and instant speed.',
    },
    {
      type: 'title',
      text: 'Benefits of Automating Text Cleaning',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Duplicate removal:</strong> If your original list has repeated elements, you can mark them so they only appear once in the final result. Ideal for cleaning email databases.',
        '<strong>Space trimming:</strong> Automatically removes blank spaces that often remain before or after the delimiter, leaving a clean and professional result.',
        '<strong>Automatic numbering:</strong> Transforms a simple list into a numbered list ready to copy into a Word document or email.',
        '<strong>Empty line filtering:</strong> Avoids those annoying blank gaps that appear when there are consecutive delimiters (e.g., <code>item1,,item2</code>).',
      ],
    },
    {
      type: 'title',
      text: 'Privacy and Security: Your Data Is Safe',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Unlike other websites that send text to a server for processing, our architecture is 100% <strong>client-side</strong>. This means the processing happens inside your RAM. Nothing is stored in external databases, making it the ideal tool for handling sensitive information like client emails or confidential lists.',
    },
    {
      type: 'tip',
      title: 'Final Note',
      html: '<p>If you are looking for a <strong>free text splitter</strong> that is fast and secure, you have come to the right place. Optimize your workflow and let the browser do the dirty work for you.</p>',
    },
  ],
  ui: {
    labelInput: 'Text to Split',
    labelOutput: 'Result (one item per line)',
    placeholderInput: 'Paste your comma, space or custom-delimited list here...',
    placeholderOutput: 'The list will appear here...',
    labelDelimiter: 'Delimiter',
    optComma: 'Comma (,)',
    optSemicolon: 'Semicolon (;)',
    optSpace: 'Space',
    optCustom: 'Custom',
    labelCustom: 'Custom delimiter',
    placeholderCustom: 'Enter delimiter...',
    optTrim: 'Trim spaces',
    optUnique: 'Remove duplicates',
    optClean: 'Remove empty',
    optNumbered: 'Number lines',
    statLines: 'Result lines',
    statChars: 'Characters',
    btnCopy: 'Copy List',
    btnClear: 'Clear',
    toastCopied: 'Copied to clipboard!',
  },
};
