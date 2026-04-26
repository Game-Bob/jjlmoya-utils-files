import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FileSizeConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'file-size-converter';
const title = 'File Size Converter & Visualizer: Binary & Decimal';
const description =
  'Convert between file size units instantly. See how long downloads take and visualize storage usage across devices. 100% local processing.';

const faqData = [
  {
    question: 'What is the difference between decimal (KB) and binary (KiB)?',
    answer:
      'Decimal uses powers of 1000 (KB, MB, GB), while binary uses powers of 1024 (KiB, MiB, GiB). This is why a "1GB" drive appears smaller in your computer-manufacturers use decimal, but operating systems use binary.',
  },
  {
    question: 'Is my data safe using this tool?',
    answer:
      'Absolutely. All calculations happen entirely in your browser using JavaScript. No data is sent to our servers. Your files and values never leave your computer.',
  },
  {
    question: 'Can I upload files to see their size?',
    answer:
      'Yes! You can drag and drop a file directly into the input area, and the tool will automatically read its size and populate the converter. The file itself is never uploaded-only its size is used locally.',
  },
  {
    question: 'Why does my 1TB external drive show less space in my computer?',
    answer:
      'External drives are marketed using decimal (1TB = 1,000,000,000,000 bytes), but your operating system displays them in binary (1TiB = 1,099,511,627,776 bytes). This tool helps you understand both perspectives.',
  },
  {
    question: 'How accurate is the download time calculation?',
    answer:
      'The calculation is based on ideal network speeds. Real-world speeds vary due to network congestion, distance, and hardware. Use these as rough estimates, not guarantees.',
  },
];

const howToData = [
  {
    name: 'Enter a file size',
    text: 'Type a number in the input field (e.g., "500" or "1.5") and select the unit (KB, MB, GB, etc.).',
  },
  {
    name: 'Choose your standard',
    text: 'Toggle between Decimal (marketing standard) and Binary (computing standard) to see how the value changes.',
  },
  {
    name: 'See instant conversions',
    text: 'All units from Bytes to Petabytes appear instantly. Click any block to copy its value to your clipboard.',
  },
  {
    name: 'Visualize context',
    text: 'Below the conversions, see how long downloads take on different networks and how much space the file occupies on different devices.',
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

export const content: ToolLocaleContent<FileSizeConverterUI> = {
  slug,
  title,
  description,
  bibliography,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Why Convert File Sizes? Understanding Decimal vs. Binary',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'When you buy a <strong>"1TB"</strong> drive, manufacturers measure it in decimal (1,000 GB). But your operating system displays it in binary (1,024 GiB = ~931 GB). This difference confuses users. A <strong>file size converter</strong> bridges this gap, showing you exactly what your files mean in any unit.',
    },
    {
      type: 'title',
      text: 'Real-World Context: Downloads & Storage',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Knowing that a file is "50MB" means nothing without context. How long to download on 4G? How much space on an iPhone? Our tool answers these instantly with live calculations for real networks and real devices.',
    },
    {
      type: 'title',
      text: 'The Hidden Cost: Storage Math',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'A "1 TB" external drive is actually <strong>~931 GiB</strong> (the manufacturer trick)',
        'A 4K movie (~100GB) takes <strong>4 seconds</strong> on fiber but <strong>13 minutes</strong> on 4G',
        'A "256GB" iPhone stores less because the OS uses space and binary math compounds the difference',
      ],
    },
    {
      type: 'title',
      text: 'Technical Precision You Can Trust',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'All conversions follow <strong>NIST standards</strong>: decimal (SI) uses 1000 as the base, binary (IEC) uses 1024. The calculations happen <strong>100% locally</strong>-no uploads, no servers, full privacy.',
    },
  ],
  ui: {
    inputPlaceholder: 'Enter a number (e.g., 1.5 or 500)',
    selectUnit: 'Unit',
    standardLabel: 'Standard:',
    decimalOption: 'Decimal',
    binaryOption: 'Binary',
    conversionTitle: 'Conversions',
    networkSpeedsTitle: 'Download Times',
    deviceStorageTitle: 'Device Storage Impact',
    copyFeedback: 'Copied!',
    dragDropText: 'Drop a file here to read its size',
    fileTooBig: 'File is too large',
  },
};
