import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextToMarkdownUI } from '../ui';

const slug = 'text-to-markdown';
const title = 'テキストからMarkdownへの変換ツール オンライン無料 — ドキュメントの書式設定';
const description =
  'プレーンテキストを素早くMarkdownコードに変換します。段落、見出し、リストをGitHub、Reddit、MDエディタと互換性のある形式に変換可能です。';

const faqData = [
  {
    question: 'Markdownとは何ですか？何のために使われますか？',
    answer:
      'Markdownは、プレーンテキストの構文を使用してテキストをフォーマットするための軽量マークアップ言語です。読み書きが簡単なため、GitHub、Reddit、Slackなどのプラットフォームや、静的サイトジェネレーターで広く使用されています。',
  },
  {
    question: '変換中、テキストは安全に取り扱われますか？',
    answer:
      'はい、100%安全です。変換はJavaScriptを使用してすべてブラウザ内で行われます。サーバーに情報が送信されることはなく、ドキュメントのプライバシーは完全に守られます。',
  },
  {
    question: '見出しやリストはどのように変換されますか？',
    answer:
      '当ツールはテキストの基本構造を識別します。段落の前に1行だけのテキストがある場合、それを見出しとして処理することができます。ダッシュや数字で始まる行は、標準的なMarkdownリストとしてフォーマットされます。',
  },
  {
    question: '複雑な表やコードにも使用できますか？',
    answer:
      'このツールは、基本的なテキストフォーマット（段落、リスト、太字、斜体）向けに設計されています。多段組みの表などの非常に複雑な構造については、生成されたMarkdownを手動で調整する必要がある場合があります。',
  },
];

const howToData = [
  {
    name: 'テキストを貼り付ける',
    text: 'フォーマットしたいプレーンテキストをコピーして、入力フィールドに貼り付けます。',
  },
  {
    name: '自動変換',
    text: 'ツールがテキストを処理し、識別されたさまざまな要素にMarkdown構文を適用します。',
  },
  {
    name: 'コピーまたはダウンロード',
    text: '「結果をコピー」または「.mdをダウンロード」をクリックして、フォーマットされたファイルを取得します。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<TextToMarkdownUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '出典およびリファレンス',
  bibliography: [
    { name: 'CommonMark: 標準Markdown仕様', url: 'https://commonmark.org/' },
    { name: 'Daring Fireball: オリジナルのMarkdownプロジェクト', url: 'https://daringfireball.net/projects/markdown/' },
    { name: 'GitHub Flavored Markdown (GFM)', url: 'https://github.github.com/gfm/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'なぜテキストをMarkdownに変換するのですか？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '開発者、ブロガー、またはテクニカルライターであれば、おそらく毎日 <strong>Markdown</strong> を使用しているでしょう。<strong>プレーンテキストをMarkdownに変換</strong>することで、HTMLやPDF、あるいはWordPressや静的サイトジェネレーターなどのプラットフォームへ簡単にエクスポートできる、クリーンな構造を維持できます。',
    },
    {
      type: 'title',
      text: '完全なプライバシー：100%ローカル変換',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '多くのオンラインコンバーターは、サーバー上でテキストを処理します。当ツールの <strong>テキストからMarkdownへの変換ツール</strong> は、すべてブラウザ内で動作します。データがコンピュータの外に出ることはないため、内部文書や会議メモ、個人的なアイデアのドラフト作成に最適です。',
    },
    {
      type: 'title',
      text: '主な特徴',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>見出しとタイトル</strong>の自動識別。',
        '<strong>箇条書きおよび番号付きリスト</strong>の変換。',
        '<strong>太字や斜体</strong>などの基本書式をサポート。',
        '<strong>.mdファイル</strong>として即座に書き出し可能。',
      ],
    },
  ],
  ui: {
    labelInput: 'プレーンテキスト',
    labelOutput: 'フォーマットされたMarkdown',
    placeholderInput: 'ここにテキストを貼り付けてください...',
    placeholderOutput: '生成されたMarkdownコードがここに表示されます...',
    btnConvert: 'Markdownに変換',
    btnDownload: '.mdをダウンロード',
    btnCopy: '結果をコピー',
    btnClear: 'すべて消去',
    toastCopied: 'Markdownコードをコピーしました！',
    toastDownloaded: '.mdファイルをダウンロード中...',
  },
};
