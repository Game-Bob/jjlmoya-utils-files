import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonToCsvUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'json-to-excel-csv-converter';
const title = '在线 JSON 转 CSV 免费工具: 导出至 Excel';
const description =
  '快速轻松地将您的 JSON 文件转换为 CSV 表格。非常适合需要在 Excel 或 Google Sheets 中打开 JSON 文件的数据分析师。';

const faqData = [
  {
    question: '如何将 JSON 转换为适用于 Excel 的 CSV？',
    answer:
      '只需将您的 JSON 代码粘贴到我们的工具中，或上传您的文件。系统会自动处理数据结构并生成一个 CSV 文件，您可以下载并直接在 Microsoft Excel 或 Google Sheets 中打开。'
  },
  {
    question: '在此网站转换我的数据安全吗？',
    answer:
      '是的，100% 安全。转换完全在您的浏览器中通过 JavaScript 完成。没有任何数据发送到我们的服务器，确保您的信息保持私密和安全。'
  },
  {
    question: '如果我的 JSON 是嵌套的会发生什么？',
    answer:
      '我们的基础转换器针对对象数组进行了优化。如果您有非常深层的嵌套，该工具将尝试展平第一级属性，以确保生成 Excel 可读的表格。'
  },
  {
    question: '我可以直接复制 CSV 而不下载吗？',
    answer:
      '当然可以。除了“下载 CSV”按钮外，您还有一个“复制结果”选项，可以将内容直接粘贴到任何文本编辑器或电子表格中。'
  },
];

const howToData = [
  {
    name: '粘贴您的 JSON',
    text: '在输入区域插入 JSON 代码或上传 .json 文件。'
  },
  {
    name: '处理数据',
    text: '工具会自动识别字段和结构，将其组织成行和列。'
  },
  {
    name: '下载或复制',
    text: '点击“下载 CSV”保存文件，或点击“复制结果”立即使用。'
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

export const content: ToolLocaleContent<JsonToCsvUI> = {
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
      text: '为什么要将 JSON 转换为 CSV 进行数据分析？',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'JSON 是现代 API 的标准格式，但它并不是最容易进行人工分析的格式。<strong>JSON 转 CSV 转换器</strong>允许您将复杂的结构转变为行和列，从而便于在 <strong>Microsoft Excel</strong>、Numbers 或 Google Sheets 等强大工具中进行操作。'
    },
    {
      type: 'title',
      text: '绝对隐私：无需上传文件即可转换',
      level: 2
    },
    {
      type: 'paragraph',
      html: '大多数在线转换器会将您的数据上传到服务器。我们的工具则不同：<strong>转换 100% 在本地完成</strong>。通过在浏览器中使用 JavaScript，数据永远不会离开您的电脑。如果您处理敏感信息、客户列表或公司内部报告，这一点至关重要。'
    },
    {
      type: 'title',
      text: '完美转换的技术提示',
      level: 3
    },
    {
      type: 'list',
      items: [
        '确保您的 JSON 是一个<strong>对象数组</strong>（例如：[{}, {}]）。',
        '验证所有对象是否具有相似的属性，以保持 CSV 列的一致性。',
        '如果包含特殊字符，我们的 CSV 将以 <strong>UTF-8</strong> 格式导出，以避免在 Excel 中出现乱码。',
      ]
    },
  ],
  ui: {
    statusWaiting: '等待有效的JSON',
    statusValid: '有效的JSON',
    statusInvalid: '无效的JSON',
    labelFlatten: '展开对象',
    zoneLabel: '在此粘贴JSON或拖入文件',
    placeholderJson: '[{"id": 1, "name": "John", "details": {"age": 30}}]',
    btnCopyCsv: '复制CSV',
    btnDownloadCsv: '下载Excel (CSV)',
    copyFeedback: '已复制！'
  }
};
