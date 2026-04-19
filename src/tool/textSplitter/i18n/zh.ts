import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextSplitterUI } from '../ui';

const slug = 'text-splitter';
const title = '在线文本分割工具 — 按段落、句子或长度拆分';
const description =
  '自动将长文本拆分为较小的部分。您可以选择按单词数、字符数、段落或句子进行分割。';

const faqData = [
  {
    question: '如何为 ChatGPT 或 AI 分割文本？',
    answer:
      '许多 AI 系统对每条消息都有字符限制。使用我们的工具，您可以将长提示词分为较小的部分（例如，每 2000 个字符一部分），以便按顺序发送而不丢失信息。',
  },
  {
    question: '在分割器中粘贴私密文本安全吗？',
    answer:
      '绝对安全。分割逻辑 100% 在您的浏览器中使用 JavaScript 运行。没有任何文本会被发送到我们的服务器，确保您的数据在本地设备上保持私密。',
  },
  {
    question: '分割文本的大小有限制吗？',
    answer:
      '由于处理是在本地完成的，我们没有设定严格的限制。您可以在几秒钟内分割数兆字节的文本，尽管性能取决于您电脑的内存。',
  },
  {
    question: '它会为拆分出的部分添加编号吗？',
    answer:
      '目前，该工具会返回单独的文本块。您可以逐个复制它们。许多用户发现这有助于手动控制向其他应用发送每个片段的方式。',
  },
];

const howToData = [
  {
    name: '粘贴文本',
    text: '在主输入区域插入您想要分割的长文本。',
  },
  {
    name: '配置分割设置',
    text: '选择分割方法（字符、单词、句子或段落）并设置每个部分的最大值。',
  },
  {
    name: '复制分割后的部分',
    text: '工具将显示生成的文本块。复制您需要的块并随处使用。',
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

export const content: ToolLocaleContent<TextSplitterUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '来源与参考',
  bibliography: [
    { name: 'Unicode 分行算法', url: 'https://unicode.org/reports/tr14/' },
    { name: 'NLP: 句子分割技术', url: 'https://zh.wikipedia.org/wiki/%E5%8F%A5%E5%AD%90%E8%BE%B9%E7%95%8C%E6%B6%88%E6%AD%A7' },
    { name: 'LLM 上下文窗口限制', url: 'https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '为什么您需要在线文本分割工具？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在数字时代处理超长文本可能是一项挑战。无论您是需要将代码拆分为模块的程序员、为社交媒体调整内容的作家，还是与 ChatGPT 等<strong>大语言模型 (LLM)</strong> 交互的用户，<strong>文本分割工具</strong>都是必备工具。',
    },
    {
      type: 'title',
      text: '智能分割方法',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>按字符：</strong> 精确满足严格的技术限制要求。',
        '<strong>按单词：</strong> 非常适合追求特定 SEO 长度或可读性的文章和博客。',
        '<strong>按句子：</strong> 确保思想不会从中途断开，保持每个文本块的上下文。',
        '<strong>按段落：</strong> 保持复杂文档逻辑结构的佳选。',
      ],
    },
    {
      type: 'title',
      text: '隐私与速度：本地处理',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '我们的<strong>在线文本分割器</strong>不会将您的内容“上传”到任何服务器。所有操作都在您的浏览器中即时处理。这意味着您可以处理敏感文档、合同或私密电子邮件，绝对确信没有人能看到它们。',
    },
  ],
  ui: {
    labelInput: '待分割文本',
    labelOutput: '结果（每行一项）',
    placeholderInput: '在此粘贴以逗号、空格或任意分隔符分隔的列表...',
    placeholderOutput: '列表将显示在这里...',
    labelDelimiter: '分隔符',
    optComma: '逗号 (,)',
    optSemicolon: '分号 (;)',
    optSpace: '空格',
    optCustom: '自定义',
    labelCustom: '自定义分隔符',
    placeholderCustom: '输入分隔符...',
    optTrim: '去除空格',
    optUnique: '删除重复项',
    optClean: '删除空项',
    optNumbered: '给行编号',
    statLines: '结果行数',
    statChars: '字符数',
    btnCopy: '复制列表',
    btnClear: '清空',
    toastCopied: '已复制到剪贴板！',
  },
};
