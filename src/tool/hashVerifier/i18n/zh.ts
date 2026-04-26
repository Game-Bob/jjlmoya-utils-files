import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashVerifierUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'hash-verifier';
const title = '在线文件哈希校验: SHA 256, MD5 与 SHA 1';
const description =
  '通过计算并对比 SHA256、MD5 或 SHA1 数字签名，验证文件的完整性。确保您下载的文件未被篡改。';

const faqData = [
  {
    question: '如何验证文件是否被修改过？',
    answer:
      '最安全的方法是对比其哈希值（Hash）。哈希是唯一的“数字指纹”。即使文件中只有一个位发生了变化，哈希值也会完全不同。通过将获得的哈希值与作者提供的值进行对比，您可以保证文件的完整性。'
  },
  {
    question: '哪种算法更好：MD5 还是 SHA-256？',
    answer:
      'MD5 速度非常快，但在防御故意攻击方面被认为不够安全。SHA-256 是目前的安全性标准，极难被“伪造”。对于大多数文件完整性检查，SHA-256 是推荐的选项。'
  },
  {
    question: '为什么重命名文件后哈希值没变？',
    answer:
      '事实上，重命名文件不会改变其哈希值。哈希是基于文件的内部内容（字节）计算的，而不是文件名或创建日期。如果哈希值改变了，那是因为内部数据被修改了。'
  },
  {
    question: '我的文件会被上传到服务器进行计算吗？',
    answer:
      '不会。我们的工具使用 Web Crypto API，这意味着所有计算都在您的浏览器本地完成。您的文件永远不会离开您的电脑，这保证了 100% 的隐私，且由于无需上传，速度也更快。'
  },
];

const howToData = [
  {
    name: '选择您的文件',
    text: '将要验证的文件拖入或选择到工具中。'
  },
  {
    name: '选择算法',
    text: '根据您拥有的签名选择 SHA-256、MD5 或 SHA-1。'
  },
  {
    name: '对比结果',
    text: '粘贴预期的哈希值，系统会立即告知您它们是否匹配（成功）或不同（错误）。'
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

export const content: ToolLocaleContent<HashVerifierUI> = {
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
      text: '什么是文件哈希？为什么它对您的安全至关重要？',
      level: 2
    },
    {
      type: 'paragraph',
      html: '哈希是每个文件的唯一<strong>数字指纹</strong>。它是由数学算法（如 SHA-256）生成的字母数字字符串。其主要特点是“单向性”：您可以从文件获得哈希值，但无法从哈希值还原文件。'
    },
    {
      type: 'paragraph',
      html: '在下载软件、ISO 镜像或敏感文档时，使用<strong>在线哈希校验工具</strong>至关重要。作者通常会发布其文件的 MD5 或 SHA256，以便您可以验证下载的内容是否与他们上传的一致，没有损坏或恶意的注入。'
    },
    {
      type: 'title',
      text: 'SHA-256 vs MD5: 您应该使用哪一个？',
      level: 3
    },
    {
      type: 'paragraph',
      html: '<strong>MD5</strong> 算法因其速度在多年里非常流行，但今天因易受“碰撞”攻击而被认为在密码学上不够安全。不过，它仍被用于简单的完整性检查（如检查下载是否损坏）。'
    },
    {
      type: 'paragraph',
      html: '如果您追求最高安全性，<strong>SHA-256</strong>（SHA-2 家族成员）是全世界安全机构推荐的标准。两个不同的文件产生相同 SHA-256 哈希值的情况几乎是不可能的。'
    },
    {
      type: 'title',
      text: '绝对隐私：100% 在您的浏览器内计算',
      level: 3
    },
    {
      type: 'tip',
      title: '无需上传',
      html: '<p>我们的工具使用您电脑的性能来处理文件。通过使用 <strong>Web Crypto API</strong>，我们无需将文件“上传”到任何服务器。这意味着您可以在几秒钟内验证数千兆字节的文件，不会消耗您的互联网带宽，并确保您的文件内容永远不会离开您的设备。</p>'
    },
  ],
  ui: {
    labelTitle: "本地哈希验证工具",
    labelSubtitle: "拖入任意文件，即刻生成其 <strong class=\"hv-accent\">SHA-256</strong> 签名。",
    btnSelect: "选择文件",
    labelPrivacy: "文件永远不会离开您的设备。",
    labelCalculating: "正在计算签名...",
    labelSuccess: "计算成功",
    btnAnother: "验证另一个",
    labelHash: "SHA-256 哈希值",
    btnCopyTitle: "复制哈希",
    labelCompare: "与原始哈希对比",
    placeholderCompare: "在此粘贴预期的哈希值...",
    labelCompareNote: "* 对比时忽略大小写和空白字符。",
    statusVerified: "已验证",
    statusCorrupt: "已损坏 / 错误"
  }
};
