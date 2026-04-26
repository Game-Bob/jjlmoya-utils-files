import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextToMarkdownUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'text-to-markdown';
const title = 'Online Text to Markdown Converter — Format Documents';
const description =
  'Transform plain text into Markdown code quickly. Convert paragraphs, headers and lists into format compatible with GitHub, Reddit and MD editors.';

const faqData = [
  {
    question: 'What is Markdown and what is it for?',
    answer:
      'Markdown is a lightweight markup language used to format text using plain text syntax. It is widely used on platforms like GitHub, Reddit, Slack, and in static site generators because it is easy to read and write.'},
  {
    question: 'Is my text safe during conversion?',
    answer:
      'Yes, 100% safe. The conversion is done entirely in your browser using JavaScript. No information is sent to our servers, ensuring your documents remain private.'},
  {
    question: 'How are titles and lists converted?',
    answer:
      'Our tool identifies the basic structure of the text. If it detects single lines before paragraphs, it can treat them as headers. Lines starting with dashes or numbers are formatted as standard Markdown lists.'},
  {
    question: 'Can I use this for complex tables or code?',
    answer:
      'This tool is designed for basic text formatting (paragraphs, lists, bold, italics). For very complex structures such as multi-column tables, manual adjustment in the generated Markdown may be required.'},
];

const howToData = [
  {
    name: 'Paste your text',
    text: 'Insert the plain text you want to format in the source field.'},
  {
    name: 'Automatic conversion',
    text: 'The tool processes the text and applies Markdown syntax to the different elements identified.'},
  {
    name: 'Copy or download',
    text: 'Click on "Copy result" or "Download .md" to obtain your formatted file.'},
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

export const content: ToolLocaleContent<TextToMarkdownUI> = {
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
      text: 'Why convert your text to Markdown?',
      level: 2},
    {
      type: 'paragraph',
      html: 'If you are a developer, blogger, or technical writer, you probably use <strong>Markdown</strong> daily. Converting your <strong>plain text to Markdown</strong> allows you to maintain a clean structure that exports easily to HTML, PDF, or directly to platforms like WordPress and static site generators.'},
    {
      type: 'title',
      text: 'Total Privacy: 100% Local Conversion',
      level: 2},
    {
      type: 'paragraph',
      html: 'Most online converters process your text on their servers. Our <strong>text to Markdown converter</strong> runs completely in your browser. Your data never leaves your computer, making it ideal for drafting internal documents, meeting notes, or personal ideas.'},
    {
      type: 'title',
      text: 'Highlighted Features',
      level: 3},
    {
      type: 'list',
      items: [
        'Automatic identification of <strong>headers and titles</strong>.',
        'Conversion of <strong>bulleted and numbered lists</strong>.',
        'Support for basic formatting like <strong>bold and italics</strong>.',
        'Immediate export to <strong>.md file</strong>.',
      ]},
  ],
  ui: {
    labelInput: 'Plain Text',
    labelOutput: 'Formatted Markdown',
    placeholderInput: 'Paste your text here...',
    placeholderOutput: 'The generated Markdown code will appear here...',
    btnConvert: 'Convert to Markdown',
    btnDownload: 'Download .md',
    btnCopy: 'Copy result',
    btnClear: 'Clear All',
    toastCopied: 'Markdown code copied!',
    toastDownloaded: 'Downloading .md file...'}};
