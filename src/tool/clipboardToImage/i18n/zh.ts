import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClipboardToImageUI } from '../ui';

const slug = 'clipboard-to-png';
const title = '剪贴板转 PNG：下载屏幕截图和图像';
const description =
  '在线将剪贴板内容（屏幕截图、图像）转换为可立即下载的 PNG 文件的工具。100% 隐私保护且过程极速。';

const faqData = [
  {
    question: '在这里粘贴我的屏幕截图安全吗？',
    answer:
      '是的，绝对安全。此工具 100% 在您的浏览器本地运行。您的剪贴板数据永远不会被发送到任何服务器，确保您的完全隐私。',
  },
  {
    question: '我可以转换哪些类型的内容？',
    answer:
      '您可以粘贴复制的图像（屏幕截图、照片）、将被转换为 .txt 文件的文本，甚至是 HTML 元素。最常见的用途是将快速屏幕截图保存为 PNG 文件。',
  },
  {
    question: '为什么粘贴按钮不起作用？',
    answer:
      '由于浏览器的安全限制，有时“粘贴”按钮需要明确的权限。如果它不起作用，您始终可以使用标准的键盘快捷键：Ctrl+V (Windows) 或 Cmd+V (Mac)。',
  },
  {
    question: '它在移动设备上可以用吗？',
    answer:
      '是的，您可以使用手机的粘贴功能来查看内容，不过该工具针对桌面端快速屏幕截图管理进行了优化。',
  },
];

const howToData = [
  {
    name: '复制内容',
    text: '进行屏幕截图或从任何应用程序复制图像/文本。',
  },
  {
    name: '在区域中粘贴',
    text: '点击粘贴区域或使用快捷键 Ctrl+V / Cmd+V 加载内容。',
  },
  {
    name: '预览',
    text: '在即时出现的预览区域中确认内容是否正确。',
  },
  {
    name: '下载文件',
    text: '点击下载按钮，将内容以真实文件的形式保存到您的电脑中。',
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
  inLanguage: 'zh'
};

export const content: ToolLocaleContent<ClipboardToImageUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '如何将剪贴板图像保存为文件',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '这款免费的在线工具可让您立即<strong>将剪贴板内容转换为图像文件</strong> (PNG)。当您截取了屏幕（Windows + Shift + S）或从网页复制了图像，并需要将其保存到电脑中而不想打开 Photoshop 或画图等繁重软件时，它是完美的解决方案。',
    },
    {
      type: 'title',
      text: '为什么要使用这款剪贴板转换器？',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>快速：</strong> 只需按下 <code>Ctrl + V</code> 即可下载。没有中间步骤。',
        '<strong>隐私：</strong> 整个过程在您的浏览器中完成。您的图像<strong>永远不会被上传到任何服务器</strong>。',
        '<strong>原始质量：</strong> 我们从剪贴板获取原始数据，确保下载的图像保持尽可能高的质量。',
        '<strong>自动整理：</strong> 文件会以基于精确日期的时间命名下载，方便您整理截图。',
      ],
    },
    {
      type: 'title',
      text: '常见问题',
      level: 2,
    },
    {
      type: 'title',
      text: '它支持屏幕截图吗？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '是的，非常适合快速保存使用 Windows 或 Mac 的截图工具制作的屏幕截图。',
    },
    {
      type: 'title',
      text: '它支持哪些格式？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '目前，该工具会自动检测并转换剪贴板中的任何图像为 PNG 格式，以确保兼容性和透明度。',
    },
  ],
  ui: {
    labelCtrlV: '在任意位置按 Ctrl + V',
    labelClickPaste: '或点击此处进行粘贴',
    btnClear: '清空',
    btnDownload: '下载',
    privacyMsg: '整个过程均为 100% 本地运行。您的图像永远不会离开浏览器。',
  },
};
