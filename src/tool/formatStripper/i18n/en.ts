import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FormatStripperUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'format-stripper';
const title = 'Strip Text Formatting Online Free — Style Cleaner';
const description =
  'Remove bold, italics, links, and colors from any text. Convert HTML or Word to plain text (txt) instantly with our professional style cleaner.';

const faqData = [
  {
    question: 'How to remove bold and italics from a text?',
    answer:
      'Simply paste your text into our tool. The system automatically detects styles and removes them, leaving only the characters in plain text, without any added weight or decoration.'},
  {
    question: 'Is it compatible with text from Microsoft Word or Google Docs?',
    answer:
      'Yes, it is specially designed for it. When copying from Word or Docs, a lot of "trash" code is carried over. Our cleaner removes all those hidden styles, allowing you to paste a clean text into other applications.'},
  {
    question: 'Can I convert HTML to plain text?',
    answer:
      'Exactly. If you paste an HTML snippet, our tool will strip all tags (like <div>, <a>, <strong>) and return only the readable text content, ready to be used anywhere.'},
  {
    question: 'Is it safe to paste confidential information?',
    answer:
      'Totally safe. All processing is done 100% in your browser. No data is sent to our servers, ensuring that your text remains private and secure at all times.'},
];

const howToData = [
  {
    name: 'Copy your text',
    text: 'Copy the text with format from Word, a website, or an email.'},
  {
    name: 'Paste in the cleaner',
    text: 'Insert the content in the input area. The removal of styles is automatic.'},
  {
    name: 'Copy the result',
    text: 'Your text is now plain and clean. Copy it and use it wherever you want without format issues.'},
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

export const content: ToolLocaleContent<FormatStripperUI> = {
  slug,
  title,
  description,
  bibliography,
  faq: faqData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'What does it mean to "strip formatting" and why do you need it?',
      level: 2},
    {
      type: 'paragraph',
      html: 'Stripping formatting is the process of <strong>transforming rich text into plain text</strong> (Plain Text). When we copy information from a website, an eBook, or a Word document, that text carries "hidden luggage": font types, sizes, colors, links, and CSS styles. Our tool serves as a filter that removes all that digital junk.'},
    {
      type: 'title',
      text: 'Benefits of using a text cleaner',
      level: 2},
    {
      type: 'list',
      items: [
        '<strong>Universal Compatibility:</strong> Plain text works in any program, from old emails to modern CMS like WordPress.',
        '<strong>Clean Code:</strong> Ideal for developers who need to paste text into their code without carrying over HTML tags or RTF styles.',
        '<strong>SEO and Readability:</strong> By removing erratic formats, you ensure that your content maintains the visual consistency of your website.',
        '<strong>Total Privacy:</strong> The process is local. Your text never leaves your browser.',
      ]},
    {
      type: 'title',
      text: 'Strip formatting vs. Simple Copy-Paste',
      level: 2},
    {
      type: 'paragraph',
      html: 'Many times, a simple <code>Ctrl + V</code> carries unwanted formats that break the design of your destination document. Using an online <strong>format remover</strong> ensures that you only keep the essence of the message, allowing you to apply your own styles from scratch without technical interference.'},
  ],
  ui: {
    labelInput: 'Source text (with format)',
    labelOutput: 'Plain text (clean)',
    placeholderInput: 'Paste here the text from Word, Web, or PDF...',
    placeholderOutput: 'Clean text will appear here...',
    btnCopy: 'Copy Result',
    btnClear: 'Clear All',
    toastCopied: 'Clean text copied!'}};
