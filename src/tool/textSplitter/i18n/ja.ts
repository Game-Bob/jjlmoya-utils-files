import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextSplitterUI } from '../ui';

const slug = 'text-splitter';
const title = 'テキスト分割ツール オンライン無料 — 段落、一文、または文字数で分割';
const description =
  '長いテキストを自動的に小さなパーツに分割します。文字数、単語数、段落、または一文ごとの分割方法から選択可能です。';

const faqData = [
  {
    question: 'ChatGPTなどのAI用にテキストを分割するにはどうすればいいですか？',
    answer:
      '多くのAIには1メッセージあたりの文字数制限があります。当ツールを使用すれば、長いプロンプトを小さなパーツ（例：2000文字ごと）に分割し、情報を失うことなく順番に送信することができます。',
  },
  {
    question: '機密のテキストを分割ツールに貼り付けても安全ですか？',
    answer:
      '完全に安全です。分割のロジックはJavaScriptを使用して100%お使いのブラウザで実行されます。テキストがサーバーに送信されることはなく、データはお使いのデバイス内でプライベートに保たれます。',
  },
  {
    question: '分割できるテキストのサイズに制限はありますか？',
    answer:
      '処理はローカルで行われるため、厳格な制限は設けていません。数メガバイトのテキストでも数秒で分割できますが、パフォーマンスはお使いのコンピュータのメモリに依存します。',
  },
  {
    question: '分割されたパーツに番号は付きますか？',
    answer:
      '現在、ツールは分割されたブロックを個別に返します。それらを一つずつコピーして使用できます。多くのユーザーは、各セグメントを他のアプリに送信する際の制御をしやすくするために、この形式を好んでいます。',
  },
];

const howToData = [
  {
    name: 'テキストを貼り付ける',
    text: '分割したい長いテキストをメインの入力エリアに貼り付けます。',
  },
  {
    name: '分割設定を行う',
    text: '分割方法（文字、単語、一文、または段落）を選択し、各パーツの最大値を設定します。',
  },
  {
    name: 'パーツをコピーする',
    text: '生成されたブロックが表示されます。必要なパーツをコピーして、好きな場所で使用してください。',
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

export const content: ToolLocaleContent<TextSplitterUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '出典およびリファレンス',
  bibliography: [
    { name: 'Unicode 改行アルゴリズム', url: 'https://unicode.org/reports/tr14/' },
    { name: 'NLP: 文分割のテクニック', url: 'https://ja.wikipedia.org/wiki/%E6%96%87%E5%A2%83%E7%95%8C%E8%A7%A3%E6%9E%90' },
    { name: 'LLM コンテキストウィンドウの制限', url: 'https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'なぜオンライン・テキスト分割ツールが必要なのですか？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'デジタル時代において、非常に長いテキストを扱うことは課題となる場合があります。コードをモジュールに分割する必要があるプログラマー、SNS用にコンテンツを調整するライター、あるいはChatGPTなどの<strong>大規模言語モデル (LLM)</strong> を活用するユーザーにとって、<strong>テキスト分割ツール</strong>は不可欠な道具です。',
    },
    {
      type: 'title',
      text: 'インテリジェントな分割メソッド',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>文字数指定:</strong> 技術的な制限を厳密に守るために正確な分割が可能です。',
        '<strong>単語数指定:</strong> SEOや読みやすさのために特定の長さを目標とする記事やブログに最適です。',
        '<strong>一文ごと:</strong> 各ブロックの文脈を維持しつつ、思考が途中で途切れないように分割します。',
        '<strong>段落ごと:</strong> 複雑なドキュメントの論理構造を維持するのに最適なオプションです。',
      ],
    },
    {
      type: 'title',
      text: 'プライバシーとスピード：ローカル処理',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '当ツールの<strong>オンライン・テキスト分割ツール</strong>は、コンテンツをサーバーに「アップロード」することはありません。すべてがお使いのブラウザで即座に処理されます。これにより、機密文書、契約書、プライベートなメールなどを、誰にも見られる心配なく安心して処理できます。',
    },
  ],
  ui: {
    labelInput: '元のテキスト',
    labelOutput: '分割されたパーツ',
    labelMethod: '分割方法',
    labelValue: '1パーツあたりの最大値',
    placeholderInput: 'ここに長いテキストを貼り付けてください...',
    placeholderOutput: '分割されたパーツがここに表示されます...',
    optionChars: '文字数',
    optionWords: '単語数',
    optionSentences: '一文ごと',
    optionParagraphs: '段落ごと',
    btnSplit: 'テキストを分割',
    btnCopy: 'パーツをコピー',
    btnClear: 'すべて消去',
    toastCopied: 'パーツをクリップボードにコピーしました',
    labelPartsFound: '生成されたパーツ数',
  },
};
