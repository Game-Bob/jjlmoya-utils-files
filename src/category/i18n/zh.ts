import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'files-and-text',
  title: '文件和文本工具',
  description: '直接在浏览器中处理文件和文本的免费在线工具。将剪贴板转换为可下载的图像，无需安装，完全保护隐私。',
  seo: [
    {
      type: 'title',
      text: '为什么从浏览器管理文件？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '日常的文件和文本任务--保存截图、转换格式、提取文本--通常需要安装重型软件或使用将数据上传到外部服务器的在线服务。这些工具<strong>100%在您的浏览器中本地运行</strong>：您的任何数据都不会离开您的设备。',
    },
    {
      type: 'paragraph',
      html: '现代浏览器对Clipboard API、本地文件系统和图像处理引擎具有原生访问权限。这使得无需安装任何东西、无需注册任何服务或看到任何广告，就能复制最常见的桌面应用程序功能成为可能。',
    },
    {
      type: 'title',
      text: '剪贴板：从复制粘贴到真实文件',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '当您使用 <strong>Windows + Shift + S</strong> 或 <strong>Cmd + Shift + 4</strong> 截图时，图像会进入剪贴板但不会保存为文件。要获取它，通常需要打开Paint、Photoshop或其他编辑器，粘贴并导出。使用剪贴板转图像工具，整个过程简化为 <strong>Ctrl+V 加一次点击</strong>。',
    },
    {
      type: 'paragraph',
      html: '文件以基于精确日期和时间的名称下载，无需手动重命名即可轻松按时间顺序整理截图。输出格式为PNG，无损保留原始质量。',
    },
    {
      type: 'title',
      text: '设计上的隐私保护',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '此类别中的每个工具都建立在一个原则上：<strong>数据永远不会离开浏览器</strong>。没有对外部服务器的请求，没有云存储，没有活动日志。无论您粘贴到工具中的内容，都在内存中处理并直接下载到您的磁盘，没有中间人。',
    },
    {
      type: 'list',
      items: [
        '<strong>无需安装：</strong>在任何操作系统的浏览器中直接运行。',
        '<strong>完全隐私：</strong>任何文件或文本都不会发送到任何服务器。',
        '<strong>免费：</strong>无使用限制，无订阅，无水印。',
        '<strong>快速：</strong>处理是本地的，因此速度取决于您的设备，而不是连接。',
      ],
    },
    {
      type: 'title',
      text: '生产力工具的未来',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '现代Web API（Clipboard API、File System Access API、Canvas API）已经弥合了原生应用程序和浏览器之间的差距。此类别中的每个新工具都利用这些功能，以<strong>URL的可访问性提供桌面级功能</strong>。',
    },
  ],
};
