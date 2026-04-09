import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonToCsvUI } from '../ui';

const slug = 'json-to-excel-csv-converter';
const title = 'JSON to Excel & CSV Converter Online - 100% Local & Secure';
const description =
  'Transform complex JSON files into Excel or CSV spreadsheets instantly. With automatic object flattening and complete local privacy.';

const faqData = [
  {
    question: 'Is it safe to upload my JSON data here?',
    answer:
      'This tool is 100% safe and local. Your JSON is processed exclusively in your browser memory (Client-Side). Your data is never sent to any server or stored in the cloud.',
  },
  {
    question: 'How does the tool handle nested objects?',
    answer:
      "We use a recursive flattening technique. If you have an object inside another, the converter creates columns with compound names (e.g., 'user.id', 'user.name'), making the entire data hierarchy readable in Excel.",
  },
  {
    question: 'Is there a size limit for the JSON file?',
    answer:
      'The limit depends on your device RAM, but files up to 10MB are processed smoothly. For very large files, we recommend splitting the data.',
  },
  {
    question: 'Can I import a file from my computer?',
    answer:
      'Yes, the tool supports drag and drop. Simply drag your .json file onto the dotted area and the content will load automatically.',
  },
  {
    question: 'Is the downloaded file compatible with Excel?',
    answer:
      "Yes. We generate a CSV file with a UTF-8 Byte Order Mark (BOM), ensuring that Excel, Google Sheets or Numbers correctly displays special characters without manual import settings.",
  },
];

const howToData = [
  {
    name: 'Load Data',
    text: 'Paste your JSON code in the text area or drag a .json file directly from your computer onto the dotted area.',
  },
  {
    name: 'Automatic Flattening',
    text: "Check 'Flatten Objects' if your JSON has nested structures and you want them as individual columns in the spreadsheet.",
  },
  {
    name: 'Visual Validation',
    text: 'Check the preview table that appears below. It shows the first rows to confirm the conversion is correct.',
  },
  {
    name: 'Final Download',
    text: "Click 'Download Excel (CSV)' to get the ready-to-use file or use 'Copy CSV' to paste it directly into an open spreadsheet.",
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

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
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
  bibliographyTitle: 'Data Exchange Standards',
  bibliography: [
    {
      name: 'ECMA-404: The JSON Data Interchange Format',
      url: 'https://ecma-international.org/wp-content/uploads/ECMA-404_2nd_edition_december_2017.pdf',
    },
    {
      name: 'RFC 4180: Common Format and MIME Type for CSV',
      url: 'https://datatracker.ietf.org/doc/html/rfc4180',
    },
    {
      name: 'W3C: CSV on the Web (Standardization for Tabular Data)',
      url: 'https://www.w3.org/TR/tabular-data-model/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guide: Converting JSON to Excel and CSV — Data Optimization',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In the modern digital ecosystem, JSON (JavaScript Object Notation) has become the de facto standard for data exchange between servers and web applications. However, its hierarchical and technical structure often creates barriers for business analysis, accounting, or traditional administrative management. This is where our <strong>JSON to Excel Converter</strong> becomes an indispensable tool.',
    },
    {
      type: 'paragraph',
      html: 'Our utility transforms raw JSON files into structured, readable spreadsheets in milliseconds. Whether you work with e-commerce APIs, NoSQL databases like MongoDB, or application logs, the ability to flatten nested data and export to CSV or Excel greatly simplifies data-driven decision making.',
    },
    {
      type: 'title',
      text: 'How Does JSON Flattening Work?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'One of the biggest challenges when moving from JSON to a table is multidimensionality. JSON allows objects within objects and data arrays. A basic converter would simply ignore these fields or display them as "[object Object]", which is useless for the end user.',
    },
    {
      type: 'tip',
      title: 'Recursive Flattening',
      html: '<p>Our tool uses a <strong>recursive flattening</strong> algorithm. A structure like "user.address.street" is automatically converted into an individual column with that name, preserving all original information regardless of how deep the data is nested.</p>',
    },
    {
      type: 'title',
      text: 'Benefits of Using Our Online Converter',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Free & Instant',
          html: '<p>No sign-ups or heavy software downloads. All processing happens in your browser, guaranteeing total privacy since your data never leaves your device.</p>',
        },
        {
          type: 'card',
          title: 'Excel Compatibility',
          html: '<p>We generate CSV files with a BOM (Byte Order Mark), ensuring Excel correctly recognizes special characters like accents and special symbols.</p>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Output Structure and Data Type Mapping',
      level: 4,
    },
    {
      type: 'table',
      headers: ['JSON Type', 'Excel/CSV Representation', 'Note'],
      rows: [
        ['String', 'Plain Text', 'Double quotes are automatically escaped.'],
        ['Number', 'Numeric', 'Preserves original decimal precision.'],
        ['Boolean', 'TRUE / FALSE', 'Converted to uppercase for better filtering.'],
        ['Null', 'Empty Cell', 'Standard representation for missing data.'],
        ['Nested Object', 'Separate Column', 'Flattened using dot notation.'],
      ],
    },
    {
      type: 'title',
      text: 'Privacy and Security: Your Data Is Safe',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Unlike other online converters that upload your JSON files to external servers, our utility is <strong>Client-Side Only</strong>. The JavaScript that performs the conversion downloads to your browser and processes the text locally. Your confidential data — financial, personal, or corporate — is secure because it never crosses the network to any third-party server.',
    },
    {
      type: 'tip',
      title: 'Final Note',
      html: '<p>Whether you need to audit a technical log, prepare a sales report from an API, or simply explore a .json file, this converter is your best ally. Fast, secure, and professional.</p>',
    },
  ],
  ui: {
    statusWaiting: 'Waiting for Valid JSON',
    statusValid: 'Valid JSON',
    statusInvalid: 'Invalid JSON',
    labelFlatten: 'Flatten Objects',
    zoneLabel: 'Paste your JSON here or drag a file',
    placeholderJson: '[{"id": 1, "name": "John", "details": {"age": 30}}]',
    btnCopyCsv: 'Copy CSV',
    btnDownloadCsv: 'Download Excel (CSV)',
    copyFeedback: 'Copied!',
  },
};
