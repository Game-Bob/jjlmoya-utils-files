import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FileSizeConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'file-size-converter';
const title = '文件大小转换器与可视化工具: 二进制与十进制';
const description =
  '即时转换文件大小单位。查看下载所需时间，并可视化不同设备上的存储占用情况。100% 本地处理。';

const faqData = [
  {
    question: '十进制 (KB) 和二进制 (KiB) 有什么区别？',
    answer:
      '十进制使用 1000 的幂（KB、MB、GB），而二进制使用 1024 的幂（KiB、MiB、GiB）。这就是为什么“1GB”的驱动器在您的电脑中显示容量较小的原因——制造商使用十进制，而操作系统则使用二进制。',
  },
  {
    question: '使用此工具时我的数据安全吗？',
    answer:
      '绝对安全。所有计算完全在您的浏览器中通过 JavaScript 完成。没有任何数据会发送到我们的服务器。您的文件和数值永远不会离开您的电脑。',
  },
  {
    question: '我可以上传文件来查看其大小吗？',
    answer:
      '可以！您可以直接将文件拖放到输入区域，工具会自动读取其大小并填充转换器。文件本身从未被上传——仅在本地使用其大小信息。',
  },
  {
    question: '为什么我的 1TB 外置驱动器在电脑中显示的容量较少？',
    answer:
      '外置驱动器是以十进制进行营销的（1TB = 1,000,000,000,000 字节），但您的操作系统以二进制显示它们（1TiB = 1,099,511,627,776 字节）。此工具可帮助您理解这两种视角。',
  },
  {
    question: '下载时间计算的准确性如何？',
    answer:
      '该计算基于理想的网络速度。现实世界的速度会因网络拥堵、距离和硬件而异。请将这些数据视为粗略估计，而非保证。',
  },
];

const howToData = [
  {
    name: '输入文件大小',
    text: '在输入框中输入数字（例如“500”或“1.5”）并选择单位（KB、MB、GB 等）。',
  },
  {
    name: '选择您的标准',
    text: '在十进制（营销标准）和二进制（计算标准）之间切换，查看数值如何变化。',
  },
  {
    name: '查看即时转换',
    text: '从字节到拍字节的所有单位都会即时显示。点击任何区块即可将其数值复制到剪贴板。',
  },
  {
    name: '可视化背景信息',
    text: '在转换结果下方，查看在不同网络下下载所需的时间，以及文件在不同设备上占用的空间。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<FileSizeConverterUI> = {
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
      text: '为什么要转换文件大小？理解十进制与二进制',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '当您购买一个 <strong>“1TB”</strong> 的驱动器时，制造商是以十进制（1,000 GB）测量的。但您的操作系统是以二进制（1,024 GiB = 约 931 GB）显示的。这种差异常让用户感到困惑。<strong>文件大小转换器</strong> 弥合了这一差距，向您准确展示文件在任何单位下的含义。',
    },
    {
      type: 'title',
      text: '现实场景：下载与存储',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '知道一个文件是“50MB”在没有背景信息的情况下毫无意义。使用 4G 下载需要多久？在 iPhone 上占多少空间？我们的工具通过对真实网络和真实设备的实时计算，即时回答这些问题。',
    },
    {
      type: 'title',
      text: '隐藏的成本：存储数学',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '一个外置的“1 TB”驱动器实际容量约为 <strong>931 GiB</strong>（制造商的营销技巧）',
        '一部 4K 电影（约 100GB）在光纤下仅需 <strong>4 秒</strong>，但在 4G 下需要 <strong>13 分钟</strong>',
        '“256GB”的 iPhone 存储空间较少，因为操作系统占用了空间，且二进制数学加剧了这种差异',
      ],
    },
    {
      type: 'title',
      text: '值得信赖的技术精度',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '所有转换均遵循 <strong>NIST 标准</strong>：十进制 (SI) 使用 1000 为底数，二进制 (IEC) 使用 1024 为底数。计算 <strong>100% 在本地</strong>完成——无上传、无服务器，完全保护隐私。',
    },
  ],
  ui: {
    inputPlaceholder: '输入数字（例如 1.5 或 500）',
    selectUnit: '单位',
    standardLabel: '标准：',
    decimalOption: '十进制',
    binaryOption: '二进制',
    conversionTitle: '转换结果',
    networkSpeedsTitle: '下载时间',
    deviceStorageTitle: '设备存储占用',
    copyFeedback: '已复制！',
    dragDropText: '将文件拖放到此处以读取其大小',
    fileTooBig: '文件过大',
  },
};
