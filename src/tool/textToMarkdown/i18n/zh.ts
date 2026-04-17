import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextToMarkdownUI } from '../ui';

const slug = 'text-to-markdown';
const title = '在线文本转 Markdown 转换器 — 格式化文档';
const description =
  '快速将纯文本转换为 Markdown 代码。将段落、标题和列表转换为兼容 GitHub、Reddit 和 MD 编辑器的格式。';

const faqData = [
  {
    question: '什么是 Markdown？它有什么用途？',
    answer:
      'Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。由于其简洁的语法，它被广泛应用于 GitHub、Reddit、Slack 以及静态网站生成器中。',
  },
  {
    question: '在转换过程中我的文本安全吗？',
    answer:
      '是的，100% 安全。转换完全在您的浏览器中通过 JavaScript 完成。没有任何信息会被发送到我们的服务器，确保您的文档保持私密。',
  },
  {
    question: '标题和列表是如何转换 pricing 的？',
    answer:
      '我们的工具会识别文本的基本结构。如果它在段落前检测到单行文本，可能会将其视为标题。以连字符或数字开头的行将被格式化为标准的 Markdown 列表。',
  },
  {
    question: '我可以将其用于复杂的表格或代码吗？',
    answer:
      '此工具专为基础文本格式化（段落、列表、加粗、斜体）而设计。对于非常复杂的结构（如多栏表格），可能需要在生成的 Markdown 基础上进行手动调整。',
  },
];

const howToData = [
  {
    name: '粘贴文本',
    text: '在源文本框中插入您想要格式化的纯文本。',
  },
  {
    name: '自动转换',
    text: '工具将处理文本并对识别出的不同元素应用 Markdown 语法。',
  },
  {
    name: '复制或下载',
    text: '点击“复制结果”或“下载 .md”获取格式化后的文件。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<TextToMarkdownUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '来源与参考',
  bibliography: [
    { name: 'CommonMark: 标准 Markdown 规范', url: 'https://commonmark.org/' },
    { name: 'Daring Fireball: 原始 Markdown 项目', url: 'https://daringfireball.net/projects/markdown/' },
    { name: 'GitHub Flavored Markdown (GFM)', url: 'https://github.github.com/gfm/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '为什么要将文本转换为 Markdown？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '如果您是开发人员、博主或技术作家，您可能每天都在使用 <strong>Markdown</strong>。将<strong>纯文本转换为 Markdown</strong> 可以让您保持整洁的结构，方便导出为 HTML、PDF，或直接发布到 WordPress 和静态网站生成器等平台。',
    },
    {
      type: 'title',
      text: '绝对隐私：100% 本地转换',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '大多数在线转换器会在其服务器上处理您的文本。我们的<strong>文本转 Markdown 转换器</strong>完全在您的浏览器中运行。您的数据永远不会离开您的电脑，是起草内部文档、会议记录或个人想法的理想选择。',
    },
    {
      type: 'title',
      text: '亮点功能',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '自动识别<strong>页眉和标题</strong>。',
        '转换<strong>项目符号列表和编号列表</strong>。',
        '支持<strong>加粗和斜体</strong>等基础格式。',
        '即时导出为 <strong>.md 文件</strong>。',
      ],
    },
  ],
  ui: {
    labelInput: '纯文本',
    labelOutput: '格式化后的 Markdown',
    placeholderInput: '在此粘贴文本...',
    placeholderOutput: '生成的 Markdown 代码将显示在这里...',
    btnConvert: '转换为 Markdown',
    btnDownload: '下载 .md',
    btnCopy: '复制结果',
    btnClear: '全部清空',
    toastCopied: 'Markdown 代码已复制！',
    toastDownloaded: '正在下载 .md 文件...',
  },
};
