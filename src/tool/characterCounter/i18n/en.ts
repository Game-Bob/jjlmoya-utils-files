import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CharacterCounterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'character-counter';
const title = 'Online Character and Word Counter Letter Counting Tool';
const description =
  'Online character, word, sentence, and paragraph counter. Calculate reading and speaking times. Free tool perfect for SEO and social media.';

const faqData = [
  {
    question: 'Why is character counting important for SEO?',
    answer:
      'Search engines have recommended limits for titles (60 characters) and meta descriptions (155-160 characters). Exceeding these limits can cause your content to be truncated in search results.'},
  {
    question: 'Does the character counter include spaces?',
    answer:
      'Yes, by default we count all keystrokes, including spaces. However, our tool breaks down the count with and without spaces for greater precision according to your needs.'},
  {
    question: 'How is reading time calculated?',
    answer:
      'Reading time is based on an average speed of 200 to 250 words per minute. Speaking time is calculated at around 130-150 words per minute, ideal for scripts and presentations.'},
  {
    question: 'Is it safe to analyze long texts here?',
    answer:
      'Absolutely. The analysis is performed locally in your browser. You can process entire articles or long documents without the text being sent to our servers.'},
];

const howToData = [
  {
    name: 'Enter the text',
    text: 'Type directly or paste the text you want to analyze into the main area.'},
  {
    name: 'Review statistics',
    text: 'Watch the word, character, sentence, and paragraph counts update in real time.'},
  {
    name: 'Analyze times',
    text: 'Check the estimated reading and speaking time indicators for your content.'},
  {
    name: 'Optimize length',
    text: 'Adjust your text according to the recommended limits for social media or SEO (titles, descriptions).'},
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

export const content: ToolLocaleContent<CharacterCounterUI> = {
  slug,
  title,
  description,
  bibliography,
  faq: faqData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'The Importance of Precision in Digital Text',
      level: 2},
    {
      type: 'paragraph',
      html: 'In the digital world, "economy of words" is fundamental. We no longer write just to be read by humans, but to be processed by algorithms. Google cuts your titles at 60 characters. Twitter (now X) limits you to 280. An effective sales email should be read in less than 30 seconds.'},
    {
      type: 'paragraph',
      html: 'This <strong>character and word counting tool</strong> is designed not just to give you a number, but to help you optimize your communication. By calculating metrics like <em>reading time</em> or <em>word density</em>, you move from "writing text" to "designing content".'},
    {
      type: 'title',
      text: 'SEO Optimization',
      level: 3},
    {
      type: 'paragraph',
      html: 'Search engine limits are strict. If you go over, your message is cut off with ellipses (...) and your CTR (Click Through Rate) drops sharply.'},
    {
      type: 'table',
      headers: ['Element', 'Recommended Limit'],
      rows: [
        ['Meta Title', '50 - 60 characters'],
        ['Meta Description', '150 - 160 characters'],
        ['Google Ads (Headlines)', '30 characters'],
      ]},
    {
      type: 'title',
      text: 'Social Media',
      level: 3},
    {
      type: 'paragraph',
      html: 'Each platform has its own language and ideal length. Even if the limit is higher, the "sweet spot" for engagement is usually lower.'},
    {
      type: 'table',
      headers: ['Platform', 'Limit'],
      rows: [
        ['Twitter (X)', '280 chars. (Sweet spot: 70-100)'],
        ['Instagram Bio', '150 characters'],
        ['LinkedIn Post', '3000 chars. (Ideal: ~1200)'],
      ]},
    {
      type: 'title',
      text: 'Frequently Asked Questions about Counting',
      level: 2},
    {
      type: 'title',
      text: 'Do spaces count as characters?',
      level: 3},
    {
      type: 'paragraph',
      html: 'Yes, and it is a common mistake to forget them. For a computer, a space is a byte of information just like a letter "A". On platforms like Twitter or SMS databases, spaces consume your limit. Our tool gives you both data points: "with spaces" and "without spaces" (useful for translators or layout designers).'},
    {
      type: 'title',
      text: 'How is Reading Time calculated?',
      level: 3},
    {
      type: 'paragraph',
      html: 'We use the average reading standard for adults: <strong>200-250 words per minute</strong> (silent reading). For speaking time, we calculate around <strong>130-150 words per minute</strong>, which is the rhythm of natural conversation or a measured audiobook narrator.'},
    {
      type: 'title',
      text: 'Privacy: Where does my text go?',
      level: 3},
    {
      type: 'paragraph',
      html: 'Nowhere. All processing is done in your browser using <strong>client-side JavaScript</strong>. You can disconnect from the internet and the tool will still work. No data is sent to our servers.'},
  ],
  ui: {
    labelChars: 'Characters',
    labelWords: 'Words',
    labelLines: 'Lines',
    labelParagraphs: 'Paragraphs',
    labelNoSpaces: 'No spaces',
    labelBytes: 'Bytes',
    labelReading: 'Reading',
    labelSpeaking: 'Speaking',
    labelUpload: 'Upload file',
    btnCopyTitle: 'Copy text',
    btnClearTitle: 'Clear',
    placeholder: 'Type or paste your text here...',
    unitSec: 's',
    unitMin: 'min',
    numberLocale: 'en-US'}};
