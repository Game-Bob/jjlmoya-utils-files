import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonToCsvUI } from '../ui';

const slug = 'json-to-excel-csv-converter';
const title = 'JSON to CSV Converter Online Free — Export to Excel';
const description =
  'Transform your JSON files into CSV tables quickly and easily. Ideal for data analysts who need to open JSON files in Excel or Google Sheets.';

const faqData = [
  {
    question: 'How to convert JSON to CSV for Excel?',
    answer:
      'Just paste your JSON code or upload your file to our tool. The system automatically processes the data structure and generates a CSV file that you can download and open directly in Microsoft Excel or Google Sheets.',
  },
  {
    question: 'Is it safe to convert my data on this website?',
    answer:
      'Yes, 100% safe. The conversion is done entirely in your browser using JavaScript. No data is sent to our servers, ensuring your information remains private and secure.',
  },
  {
    question: 'What happens if my JSON is nested?',
    answer:
      'Our basic converter is optimized for arrays of objects. If you have very deep nesting, the tool will try to flatten the first level of properties to ensure a readable table for Excel.',
  },
  {
    question: 'Can I copy the CSV directly instead of downloading it?',
    answer:
      'Of course. Besides the "Download CSV" button, you have a "Copy result" option to paste the content directly into any text editor or spreadsheet.',
  },
];

const howToData = [
  {
    name: 'Paste your JSON',
    text: 'Insert the JSON code or upload the .json file in the input area.',
  },
  {
    name: 'Process the data',
    text: 'The tool automatically identifies the fields and structure to organize them into rows and columns.',
  },
  {
    name: 'Download or copy',
    text: 'Click on "Download CSV" to save the file or "Copy result" to use it immediately.',
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

export const content: ToolLocaleContent<JsonToCsvUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Sources and References',
  bibliography: [
    { name: 'RFC 4180: CSV Format Specification', url: 'https://tools.ietf.org/html/rfc4180' },
    { name: 'ECMA-404: The JSON Data Interchange Standard', url: 'https://www.json.org/json-en.html' },
    { name: 'Microsoft: Import CSV into Excel', url: 'https://support.microsoft.com/en-us/office/import-or-export-text-txt-or-csv-files-5250ac4c-663c-47ce-937b-339e391393ba' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Why convert JSON to CSV for your data analysis?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON is the standard format for modern APIs, but it is not the easiest to analyze humanly. A <strong>JSON to CSV converter</strong> allows you to turn complex structures into rows and columns, facilitating manipulation in powerful tools like <strong>Microsoft Excel</strong>, Numbers, or Google Sheets.',
    },
    {
      type: 'title',
      text: 'Total Privacy: Convert without uploading files',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Most online converters upload your data to a server. Our tool is different: the <strong>conversion is 100% local</strong>. By using JavaScript in your browser, the data never leaves your computer. This is vital if you work with sensitive information, customer lists, or internal company reports.',
    },
    {
      type: 'title',
      text: 'Technical Tips for a perfect conversion',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Make sure your JSON is an <strong>array of objects</strong> (e.g., [{}, {}]).',
        'Verify that all objects have similar properties to keep the CSV columns consistent.',
        'If you have special characters, our CSV is exported in <strong>UTF-8</strong> to avoid issues in Excel.',
      ],
    },
  ],
  ui: {
    labelInput: 'Source JSON',
    labelOutput: 'Resulting CSV',
    placeholderInput: 'Paste your JSON array here (e.g., [{"id": 1, "name": "John"}])',
    placeholderOutput: 'The generated CSV will appear here...',
    btnConvert: 'Convert Now',
    btnDownload: 'Download CSV',
    btnCopy: 'Copy result',
    btnClear: 'Clear All',
    toastCopied: 'CSV copied to clipboard!',
    toastDownloaded: 'Downloading CSV file...',
    errorInvalidJson: 'Invalid JSON format. Please check your data.',
  },
};
