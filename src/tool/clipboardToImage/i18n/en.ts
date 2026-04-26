import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClipboardToImageUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'clipboard-to-image';
const title = 'Clipboard to PNG: Download Screenshots and Images';
const description =
  'Online tool to convert clipboard content (screenshots, images) into an instantly downloadable PNG file. 100% private and fast process.';

const faqData = [
  {
    question: 'Is it safe to paste my screenshots here?',
    answer:
      'Yes, it is completely safe. This tool works 100% locally in your browser. Your clipboard data is never sent to any server, ensuring your total privacy.'},
  {
    question: 'What types of content can I convert?',
    answer:
      'You can paste copied images (screenshots, photos), text that will be converted into a .txt file, or even HTML elements. The most common use is to save quick screenshots as PNG files.'},
  {
    question: 'Why isn\'t the paste button working?',
    answer:
      'Due to browser security restrictions, sometimes the "Paste" button requires explicit permissions. If it doesn\'t work, you can always use the standard keyboard shortcut: Ctrl+V (Windows) or Cmd+V (Mac).'},
  {
    question: 'Does it work on mobile devices?',
    answer:
      'Yes, you can use your mobile\'s paste function to view content, although the experience is optimized for quick screenshot management on desktop.'},
];

const howToData = [
  {
    name: 'Copy content',
    text: 'Take a screenshot or copy an image/text from any application.'},
  {
    name: 'Paste in the area',
    text: 'Click on the paste area or use the shortcut Ctrl+V / Cmd+V to load the content.'},
  {
    name: 'Preview',
    text: 'Verify that the content is correct in the preview area that will appear instantly.'},
  {
    name: 'Download file',
    text: 'Press the download button to save the content as a real file on your computer.'},
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }}))};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text}))};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en'};

export const content: ToolLocaleContent<ClipboardToImageUI> = {
  slug,
  title,
  description,
  bibliography,
  faq: faqData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'How to save a clipboard image as a file',
      level: 2},
    {
      type: 'paragraph',
      html: 'This free online tool allows you to <strong>convert your clipboard content into an image file</strong> (PNG) instantly. It is the perfect solution when you have taken a screenshot (Windows + Shift + S) or copied an image from a website and need to save it on your computer without opening heavy editors like Photoshop or Paint.'},
    {
      type: 'title',
      text: 'Why use this clipboard converter?',
      level: 2},
    {
      type: 'list',
      items: [
        '<strong>Speed:</strong> Just press <code>Ctrl + V</code> and download. No intermediate steps.',
        '<strong>Privacy:</strong> The entire process is done in your browser. Your images <strong>are never uploaded to any server</strong>.',
        '<strong>Original quality:</strong> We get the raw data from the clipboard, ensuring the downloaded image maintains the highest possible quality.',
        '<strong>Automatic organization:</strong> Files are downloaded with a name based on the exact date and time, making it easy to organize your captures.',
      ]},
    {
      type: 'title',
      text: 'Frequently Asked Questions',
      level: 2},
    {
      type: 'title',
      text: 'Does it work with screenshots?',
      level: 3},
    {
      type: 'paragraph',
      html: 'Yes, it is ideal for quickly saving screenshots made with the Windows or Mac snipping tool.'},
    {
      type: 'title',
      text: 'What formats does it support?',
      level: 3},
    {
      type: 'paragraph',
      html: 'Currently, the tool automatically detects and converts any image in the clipboard to PNG format to ensure compatibility and transparency.'},
  ],
  ui: {
    labelCtrlV: 'Press Ctrl + V anywhere',
    labelClickPaste: 'or click here to paste',
    btnClear: 'Clear',
    btnDownload: 'Download',
    privacyMsg: 'The entire process is 100% local. Your images never leave your browser.'}};
