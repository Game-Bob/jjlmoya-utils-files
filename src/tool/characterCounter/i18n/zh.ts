import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CharacterCounterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'character-counter';
const title = '在线字符计数器与单词计数器: 字数统计工具';
const description =
  '在线实时统计字符数、单词数、行数和段落数。估算阅读时间和演讲时间。非常适合 SEO 和社交媒体优化的免费工具。';

const faqData = [
  {
    question: '为什么字数统计对 SEO 很重要？',
    answer:
      '搜索引擎对内容长度有建议限制。通常标题约为 60 个字符，元描述为 155-160 个字符（中文通常减半）。超过这些限制可能会导致您的内容在搜索结果中显示不全。'
  },
  {
    question: '字符计数器包含空格吗？',
    answer:
      '是的，默认情况下我们会计算包括空格在内的所有输入。不过，我们的工具会提供包含空格和不含空格的详细统计，以满足您的不同精度需求。'
  },
  {
    question: '阅读时间是如何计算的？',
    answer:
      '阅读时间基于成年人平均阅读速度（每分钟约 400-600 字）。演讲时间按每分钟约 250-300 字计算，非常适合文案准备或演讲稿。'
  },
  {
    question: '在这里分析长文章安全吗？',
    answer:
      '绝对安全。所有分析均在您的浏览器中本地运行。由于文本不会被发送到我们的服务器，您可以放心地处理文章全文或长文档。'
  },
];

const howToData = [
  {
    name: '输入文本',
    text: '直接在主体区域输入或粘贴您想要分析的文本。'
  },
  {
    name: '查看统计',
    text: '实时观察单词数、字符数、行数和段落数的更新。'
  },
  {
    name: '分析时间',
    text: '检查内容的预计阅读时间和演讲时间指标。'
  },
  {
    name: '优化长度',
    text: '根据社交媒体或 SEO（标题、描述）的建议限制调整您的文本。'
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text
  }))
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  inLanguage: 'zh'
};

export const content: ToolLocaleContent<CharacterCounterUI> = {
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
      text: '数字文本中\"精准度\"的重要性',
      level: 2
    },
    {
      type: 'paragraph',
      html: '在数字世界中，\"语言的精简\"至关重要。我们写作不仅是为了给人类阅读，也是为了被算法处理。Google 会在约 60 个字符（英文）或 30 个字（中文）处截断您的标题。Twitter（现 X）限制在 280 个字符。一封有效的销售邮件应在 30 秒内读完。'
    },
    {
      type: 'paragraph',
      html: '这款<strong>字符与单词计数器工具</strong>不仅是为了给您一个数字，更是为了帮助您优化沟通。通过计算<em>阅读时间</em>或<em>词汇密度</em>等指标，您将从\"写文字\"转变为\"设计内容\"。'
    },
    {
      type: 'title',
      text: 'SEO 优化',
      level: 3
    },
    {
      type: 'paragraph',
      html: '搜索引擎的限制是严格的。如果您超过限制，您的信息将被省略号 (...) 截断，导致您的 CTR（点击率）急剧下降。'
    },
    {
      type: 'table',
      headers: ['项目', '建议限制'],
      rows: [
        ['元标题 (Meta Title)', '30: 35 个中文字符'],
        ['元描述 (Meta Description)', '75: 80 个中文字符'],
        ['Google 广告（标题）', '15 个中文字符'],
      ]
    },
    {
      type: 'title',
      text: '社交媒体',
      level: 3
    },
    {
      type: 'paragraph',
      html: '每个平台都有自己的语言风格和理想长度。即使限制值较高，互动的\"黄金位置\"通常也较短。'
    },
    {
      type: 'table',
      headers: ['平台', '限制'],
      rows: [
        ['Twitter (X)', '280 字符 (推荐：70-100)'],
        ['Instagram 简介', '150 字符'],
        ['LinkedIn 帖子', '约 3000 字符 (理想：约 1200)'],
      ]
    },
    {
      type: 'title',
      text: '关于计数的常见问题',
      level: 2
    },
    {
      type: 'title',
      text: '空格算作字符吗？',
      level: 3
    },
    {
      type: 'paragraph',
      html: '是的，忘记空格是常见的错误。对于计算机来说，一个空格和字母\"A\"一样，都是 1 字节的信息。在 Twitter 或短信数据库等平台上，空格会消耗您的限制。我们的工具提供\"计空格\"和\"不计空格\"两种数据。'
    },
    {
      type: 'title',
      text: '阅读时间是如何计算的？',
      level: 3
    },
    {
      type: 'paragraph',
      html: '我们使用成年人平均阅读标准：<strong>每分钟约 400-600 字</strong>（默读）。演讲（朗读）时间按<strong>每分钟约 250-300 字</strong>计算，这是自然对话或播音员的节奏。'
    },
    {
      type: 'title',
      text: '隐私：我的文本会去哪里？',
      level: 3
    },
    {
      type: 'paragraph',
      html: '哪里都不会去。所有处理都在您的浏览器中通过<strong>客户端 JavaScript</strong> 完成。您可以断开网络连接，工具依然有效。没有任何数据会被发送到我们的服务器。'
    },
  ],
  ui: {
    labelChars: '字符数',
    labelWords: '单词数',
    labelLines: '行数',
    labelParagraphs: '段落数',
    labelNoSpaces: '不计空格',
    labelBytes: '字节',
    labelReading: '阅读时间',
    labelSpeaking: '演讲时间',
    labelUpload: '上传文件',
    btnCopyTitle: '复制文本',
    btnClearTitle: '清空',
    placeholder: '请在此输入或粘贴您的文本...',
    unitSec: '秒',
    unitMin: '分',
    numberLocale: 'zh-CN'
  }
};
