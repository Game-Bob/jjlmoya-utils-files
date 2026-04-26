import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FormatStripperUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'format-stripper';
const title = '在线清除文本格式 — 免费样式净化工具';
const description =
  '移除任何文本中的加粗、斜体、链接和颜色。使用我们的专业样式清除工具，瞬间将 HTML 或 Word 转换为纯文本 (txt)。';

const faqData = [
  {
    question: '如何移除文本中的加粗和斜体？',
    answer:
      '只需将文本粘贴到我们的工具中。系统会自动检测并移除所有样式，仅保留纯文本字符，没有任何额外的粗细或装饰。'},
  {
    question: '它兼容 Microsoft Word 或 Google Docs 的文本吗？',
    answer:
      '是的，它正是为此设计的。从 Word 或 Docs 复制时会携带大量“垃圾代码”。我们的清理器会移除所有这些隐藏样式，让您可以干净地将文本粘贴到其他应用。'},
  {
    question: '我可以将 HTML 转换为纯文本吗？',
    answer:
      '当然。如果您粘贴一段 HTML 代码，我们的工具将清除所有标签（如 <div>、<a>、<strong>），仅返回可读的文本内容。'},
  {
    question: '粘贴机密信息安全吗？',
    answer:
      '绝对安全。所有处理都在您的浏览器中 100% 本地完成。没有任何数据发送到我们的服务器，确保您的文本始终保持私密和安全。'},
];

const howToData = [
  {
    name: '复制文本',
    text: '从 Word、网站或电子邮件中复制带有格式的文本。'},
  {
    name: '粘贴到清理器',
    text: '将内容放入输入框。样式的移除是自动进行的。'},
  {
    name: '复制结果',
    text: '您的文本现在已变为纯净。复制它并随时随地使用，不再受格式问题困扰。'},
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  inLanguage: 'zh'};

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
      text: '什么是“清除格式”，为什么您需要它？',
      level: 2},
    {
      type: 'paragraph',
      html: '清除格式是将<strong>富文本转换为纯文本</strong> (Plain Text) 的过程。当我们从网站、电子书或 Word 文档复制信息时，该文本会携带“隐藏行李”：字体、大小、颜色、链接和 CSS 样式。我们的工具充当过滤器，消除所有这些数字垃圾。'},
    {
      type: 'title',
      text: '使用文本清理器的益处',
      level: 2},
    {
      type: 'list',
      items: [
        '<strong>通用兼容性：</strong> 纯文本可在任何程序中工作，从旧式邮件到 WordPress 等现代 CMS。',
        '<strong>代码整洁：</strong> 非常适合需要将文本粘贴到代码中而不携带 HTML 标签或 RTF 样式的开发人员。',
        '<strong>SEO 与可读性：</strong> 通过移除杂乱格式，您可以确保内容保持网站的视觉一致性。',
        '<strong>绝对隐私：</strong> 过程在本地进行，您的文本永不离开浏览器。',
      ]},
    {
      type: 'title',
      text: '清除格式 vs. 简单复制粘贴',
      level: 2},
    {
      type: 'paragraph',
      html: '很多时候，简单的 <code>Ctrl + V</code> 会携带破坏目标文档布局的无用格式。使用在线<strong>格式清除器</strong>可确保您只保留信息核心。'},
  ],
  ui: {
    labelInput: '源文本（带格式）',
    labelOutput: '纯文本（已净化）',
    placeholderInput: '在此粘贴来自 Word、网页或 PDF 的文本...',
    placeholderOutput: '净化后的文本将出现在这里...',
    btnCopy: '复制结果',
    btnClear: '清空全部',
    toastCopied: '纯净文本已复制！'}};
