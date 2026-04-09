import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClipboardToImageUI } from '../ui';

const slug = 'clipboard-to-image';
const title = 'Clipboard to Image';
const description =
  'Convert your clipboard content into a downloadable image file instantly. 100% private and local: your screenshots never leave your browser.';

const faqData = [
  {
    question: 'Is it safe to paste my screenshots here?',
    answer:
      'Yes, completely. The entire process happens inside your own browser. Clipboard data is never sent to any server, guaranteeing total privacy.',
  },
  {
    question: 'What types of images can I paste?',
    answer:
      'You can paste any image you have copied to the clipboard: screenshots, images from web pages, photos copied from other applications, and so on.',
  },
  {
    question: 'Why does the paste button not work?',
    answer:
      'The paste button requires the browser to have permission to access the clipboard. If the browser asks, grant it. If it still does not work, use the keyboard shortcut Ctrl+V (Windows) or Cmd+V (Mac) directly.',
  },
  {
    question: 'What name will the downloaded file have?',
    answer:
      'The file is downloaded with a name based on the exact date and time of the paste, for example: clipboard-2024-06-15-14-32-07.png. This makes it easy to organise your screenshots chronologically.',
  },
];

const howToData = [
  {
    name: 'Copy an image',
    text: 'Take a screenshot or copy any image from another application or web page.',
  },
  {
    name: 'Paste into the tool',
    text: 'Press Ctrl+V anywhere on the page, or click on the paste zone.',
  },
  {
    name: 'Check the preview',
    text: 'The image will appear instantly. You can see its dimensions in the top-right corner.',
  },
  {
    name: 'Download the file',
    text: 'Click the download button to save the image as a PNG file on your computer.',
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

export const content: ToolLocaleContent<ClipboardToImageUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography',
  bibliography: [
    {
      name: 'Clipboard API — MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API',
    },
    {
      name: 'ClipboardEvent — MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'How to Save a Screenshot as a File Without Any Software',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'When you take a screenshot with <strong>Windows + Shift + S</strong> or <strong>Cmd + Shift + 4</strong> on Mac, the image lands in your clipboard but is not saved as a file automatically. This tool solves exactly that: paste, preview, and download in seconds, <strong>with no installation and no data uploaded to any server</strong>.',
    },
    {
      type: 'stats',
      items: [
        { value: '100%', label: 'Private & Local', icon: 'mdi:shield-check' },
        { value: '0 MB', label: 'No Install', icon: 'mdi:download-off' },
        { value: 'PNG', label: 'Output Format', icon: 'mdi:image' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Why Use This Tool',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Clipboard Converter Advantages',
      items: [
        'Total privacy: images never leave your browser.',
        'Extreme speed: Ctrl+V and download in a single click.',
        'No installation: works directly in the browser.',
        'Automatic file names with date and time for better organisation.',
        'Compatible with screenshots, web images, and any copied image.',
      ],
    },
  ],
  ui: {
    labelCtrlV: 'Press Ctrl + V anywhere',
    labelClickPaste: 'or click here to paste',
    btnClear: 'Clear',
    btnDownload: 'Download',
    privacyMsg: 'The entire process is 100% local. Your images never leave your browser.',
  },
};
