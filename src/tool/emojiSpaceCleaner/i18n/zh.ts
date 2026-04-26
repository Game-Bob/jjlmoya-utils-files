import type { WithContext, FAQPage, SoftwareApplication, HowTo } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EmojiSpaceCleanerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'emoji-space-cleaner';
const title = '表情符号与双空格在线清除工具: 免费文本清理助手';
const description =
  '瞬间清理您的文本：移除 WhatsApp 表情符号、规范化多重空格并删除不可见字符，让您的文档展现专业且整洁的品质。';

const faqData = [
  {
    question: '如何批量移除文本中的表情符号（Emoji）？',
    answer:
      '只需将您的内容粘贴到我们的工具中，并确保勾选“移除表情符号”选项。系统将自动检测来自 WhatsApp 或社交媒体的所有象形图标和符号并立即删除，只为您保留纯净的文本。'
  },
  {
    question: '为什么我的文本中会出现双空格，如何移除它们？',
    answer:
      '双空格通常出现在从网站、PDF 复制内容时，或者由于意外的敲击错误产生。我们的空格规范化工具会扫描文本并将任何连续两个或多个空格的序列替换为单个空格，从而提升文档的美感和可读性。'
  },
  {
    question: '什么是不可见字符？为什么要清理它们？',
    answer:
      '不可见字符是 Unicode 编码（如零宽空格或控制字符），肉眼无法察觉但存在于文本中。它们可能导致数据库错误、网页排版错乱或表单验证失败。清理它们可确保文本的“纯净”与兼容。'
  },
  {
    question: '在这个网站处理我的机密文本安全吗？',
    answer:
      '绝对安全。我们的工具完全在客户端运行。这意味着您的文本永远不会离开您的浏览器，也不会发送到任何外部服务器。处理过程在您自己的 RAM 中完成，保证了数据的绝对隐私。'
  },
  {
    question: '我可以清理来自 WhatsApp 或 Telegram 的文本吗？',
    answer:
      '是的，这正是我们的强项。从这些应用复制的消息通常带有表情符号和不可见的格式。通过在这里粘贴消息并使用清理选项，您将获得一个可直接用于专业报告、电子邮件或官方 Word 文档的版本。'
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
  step: []
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

export const content: ToolLocaleContent<EmojiSpaceCleanerUI> = {
  slug,
  title,
  description,
  bibliography,
  faq: faqData,
  howTo: [],
  schemas: [faqSchema, appSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: '为什么在专业文本中移除 Emoji 和清理空格至关重要？',
      level: 2
    },
    {
      type: 'paragraph',
      html: '在即时数字通信时代，信息的呈现方式与消息本身一样重要。一段塞满表情符号等干扰视线元素的文本，或者带有双空格、三空格等技术缺陷的文档，会投射出一种不专业和草率的印象。我们的<strong>在线文本清理助手</strong>旨在帮助作者、文案策划、程序员和行政人员瞬间净化内容。'
    },
    {
      type: 'paragraph',
      html: '通过在线<strong>移除文本中的表情符号</strong>，您不仅是在擦除图案，更是在规范文档的编码。许多内容管理系统 (CMS)、旧数据库或像 Microsoft Word 这样的文档处理器在面对某些 Unicode 符号时可能会表现异常。清理文本能保证在任何设备或平台上的完全兼容性和最佳可读性。'
    },
    {
      type: 'paragraph',
      html: '企业邮件或绩效报告中的“视觉饱和”是一个日益严重的问题。在 WhatsApp 或 Telegram 等非正式应用中适用的图标，在严肃的商业环境中则显得格格不入。使用自动<strong>表情移除器</strong>能让读者的注意力集中在数据和论点上，消除阻碍信息理解的视觉噪音。'
    },
    {
      type: 'title',
      text: '如何移除双空格并规范您的内容',
      level: 3
    },
    {
      type: 'paragraph',
      html: '写作中最常见的错误之一是意外敲击两次空格键。虽然这看起来是一个微小的细节，但通过<strong>移除双空格</strong>，您可以从根本上改善段落的美感。在现代 Web 设计中，排版依赖于均匀的间距来维持阅读节奏。'
    },
    {
      type: 'tip',
      title: '极致隐私：100% 在您的浏览器内处理',
      html: '<p>与其他将您的数据发送到远程服务器的转换器不同，我们的工具完全在<strong>客户端 (Client-Side)</strong>运行。您粘贴的文本永远不会离开您的电脑。移除 Emoji 和清理空格的整个过程都在您自己的 RAM 中进行，确保您的机密或工作信息完全私密。</p>'
    },
    {
      type: 'paragraph',
      html: '我们的<strong>在线移除额外空格</strong>功能会扫描文本的每一个字符并应用规范化逻辑。这意味着任何两个、三个甚至十个连续空格的序列都会自动转换为单个纯净空格。这是在最终发布前准备手稿、博客文章或技术报告的完美方案。'
    },
    {
      type: 'title',
      text: '如何批量删除 WhatsApp 和 Telegram 的表情笑脸？',
      level: 3
    },
    {
      type: 'paragraph',
      html: '如果您使用社交应用管理工作流，您知道消息中不可避免地会填满图标。要将这些聊天记录转入正式环境，您需要批量<strong>删除 WhatsApp 原有表情</strong>。在几页长的文本中手动操作是一项巨大且容易出错的任务。'
    },
    {
      type: 'paragraph',
      html: '我们的工具使用覆盖整个 Unicode 规范光谱的最先进正则表达式 (RegExp)。这包括从经典笑脸到最新的图形符号、肤色变体及组合 Emoji。只需点击一下，您就能获得一个完全“去 Emoji 化”的文本，可以直接粘贴到官方文档中。'
    },
    {
      type: 'title',
      text: '清理不可见字符和数字垃圾的重要性',
      level: 3
    },
    {
      type: 'list',
      items: [
        '<strong>全平台兼容：</strong> 为 WordPress、SQL、Excel 和 Word 准备无隐藏断码字符的纯净文本。',
        '<strong>省时省力：</strong> 不到一秒钟处理上万字，无需手动核对修正。',
        '<strong>SEO 优化：</strong> 搜索引擎更青睐具有整洁文本结构和高质量规范化字符的内容。',
      ]
    },
    {
      type: 'title',
      text: '通过页边距修剪 (Trimming) 优化您的工作流',
      level: 2
    },
    {
      type: 'paragraph',
      html: '除了移除内部 Emoji 和空格外，每行开头或结尾的空白也是一个反复出现的问题。通过<strong>移除行首和行尾空格</strong>，您可以确保列表完美对齐。这种在编程中被称为 <em>trimming</em> 的技术，在处理名单、产品清单或任何结构化数据时都至关重要。'
    },
    {
      type: 'title',
      text: '如何清理文本以便粘贴到 Word 而不丢失格式',
      level: 3
    },
    {
      type: 'paragraph',
      html: '使用在线工具时最大的担忧是文本失去基本结构或出现怪异字符。我们的工具导出最高品质的纯文本 (Plain Text)。这意味着将其粘贴到 Microsoft Word 或 Google 文档时，程序能完美应用其自身的字体样式，而不会继承来自网页的各种干扰格式成分。'
    },
    {
      type: 'tip',
      title: '压缩 (Minify) 与清理 (Cleaning) 文本的区别',
      level: 3,
      html: '<p>压缩工具旨在通过删除计算机不需要的所有内容来减小文件体积，而我们的<strong>人性化文本清理器</strong>则优先考虑可读性。我们不会将所有单词连在一起，而是在尊重语法结构的同时消除视觉垃圾。</p>'
    },
    {
      type: 'title',
      text: '结论：2026 年文本清理的新标准',
      level: 3
    },
    {
      type: 'paragraph',
      html: '在信息饱和的数字生态中，内容的纯净度是一项宝贵的资产。无论您是出于专业美感需要<strong>在线移除笑脸符号</strong>，还是出于技术要求寻求<strong>删除多余空格</strong>，我们的工具都能为您提供卓越的服务。'
    },
    {
      type: 'paragraph',
      html: '不要满足于那些会让屏幕充满广告或危害数据安全的平庸方案。选择技术与视觉的卓越。今天就尝试我们的 <strong>Emoji 与空格清理助手</strong>。'
    },
  ],
  ui: {
    labelToggleEmojis: '移除表情符号',
    labelToggleSpaces: '双空格',
    labelInput: '输入文本',
    labelOutput: '清理后预览',
    placeholderInput: '请在此粘贴带有表情符号或多余空格的文本...',
    placeholderOutput: '清理后的纯净文本将出现在这里...',
    btnCopy: '复制',
    btnClear: '清空',
    toastCopied: '已复制！',
    statEmojis: '个表情符号已移除',
    statSpaces: '处多余空格已修正',
    statNone: '未检测到任何更改'
  }
};
