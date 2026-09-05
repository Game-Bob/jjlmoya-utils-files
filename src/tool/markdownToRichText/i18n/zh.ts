import { createMarkdownToRichTextContent } from '../content';
import { getBibliography } from '../bibliography';

export const content = createMarkdownToRichTextContent({
  locale: 'zh', slug: 'markdown-to-rich-text', title: 'Markdown 转富文本工具：复制带格式的 HTML', description: '将 Markdown 转换为带实时预览的富文本，并生成可直接粘贴的 HTML。所有处理都在浏览器中完成。', bibliography: getBibliography('zh'),
  faq: [
    { question: '这个 Markdown 转富文本工具会生成什么？', answer: '它会将支持的 Markdown 转换为语义化富文本，方便你检查后粘贴到编辑器、邮件、文档或 CMS 中。' },
    { question: '支持哪些 Markdown 功能？', answer: '支持标题、段落、强调、链接、图片、引用、无序和有序列表、行内代码、代码块以及水平线。' },
    { question: '为什么要使用富文本而不是 Markdown？', answer: '许多编辑器可以在粘贴时保留格式，却不会解析 Markdown 语法。这个工具可以连接两种格式。' },
    { question: '粘贴后的格式在所有应用中都一样吗？', answer: '富文本编辑器会使用自己的样式，并且对 HTML 的支持范围不同。不同应用之间出现细微的视觉差异是正常的。' },
  ],
  howTo: [{ name: '粘贴 Markdown', text: '将 Markdown 文档粘贴到源文本面板。' }, { name: '检查预览', text: '查看生成的富文本页面及其结构。' }, { name: '复制富文本', text: '复制带格式的结果，然后粘贴到文档、邮件、CMS 或编辑器中。' }],
  seoTitle: '将 Markdown 转换为可直接粘贴的富文本', seoIntro: 'Markdown 适合写作和版本管理，但许多邮件编辑器、文档编辑器和 CMS 字段需要富文本。这个工具会根据你的 Markdown 创建语义化 HTML。', seoWorkflowTitle: '简单的转换流程', seoWorkflow: '粘贴已有的 Markdown，检查文档预览，然后复制带格式的结果。标题、段落、列表、链接、引用、代码和强调都可以在无需账号的情况下处理。', seoFeatures: ['<strong>富文本输出：</strong>复制 HTML，并同时保留纯文本备选内容。', '<strong>范围清晰：</strong>明确说明支持的 Markdown 语法。', '<strong>本地处理：</strong>草稿保留在浏览器中。', '<strong>方便继续：</strong>重新打开时恢复最近的草稿。'],
  ui: { labelKicker: 'Markdown 工作台', labelInput: 'Markdown 源文本', labelPreview: '富文本预览', placeholderInput: '在此粘贴 Markdown...', btnExample: '加载示例', btnClear: '清除', btnCopy: '复制富文本', toastCopied: '富文本已复制！', toastCopyError: '复制被阻止。请选择预览内容并手动复制。', toastRestored: '已恢复最近的草稿。', emptyPreview: '格式化后的文档会显示在这里。', labelHint: '支持常见的 Markdown 结构。不安全的 HTML 会被转义，所有处理都在浏览器中进行。', labelBlocks: '块', labelWords: '字词', labelWarnings: '警告', warningMessage: '部分内容已被转义，或无法作为安全链接处理。', exampleMarkdown: '# 发布说明\n\n这是一次包含[项目链接](https://example.com)的**重点**更新。\n\n- 快速本地转换\n- 富文本输出\n\n> 将结果粘贴到编辑器中。\n\n```js\nconst ready = true;\n```' },
});
