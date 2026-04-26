import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FormatStripperUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'format-stripper';
const title = 'テキスト書式解除 オンライン無料ツール - スタイルクリーナー';
const description =
  'テキストから太字、斜体、リンク、色などを完全に除去。HTMLやWordドキュメントを瞬時にプレーンテキスト（txt）に変換するプロフェッショナルなスタイル解除ツール。';

const faqData = [
  {
    question: 'テキストから太字や斜体を除去するにはどうすればいいですか？',
    answer:
      'テキストをツールに貼り付けるだけです。システムが自動的にスタイルを検出し、それを取り除きます。装飾のない、純粋なプレーンテキストのみが残ります。'
  },
  {
    question: 'Microsoft WordやGoogleドキュメントのテキストに対応していますか？',
    answer:
      'はい、それらの用途のために特別に設計されています。WordやDocsからコピーすると、大量の「ゴミコード」が一緒に付いてきます。当ツールはそれら隠れたスタイルをすべて除去し、他のアプリに綺麗なテキストを貼り付けられるようにします。'
  },
  {
    question: 'HTMLをプレーンテキストに変換できますか？',
    answer:
      'もちろんです。HTMLスニペットを貼り付ければ、<div>、<a>、<strong>などのタグがすべて取り除かれ、読みやすいプレーンテキストのみが抽出されます。'
  },
  {
    question: '機密情報を扱う際、安全性は大丈夫ですか？',
    answer:
      '完全に安全です。すべての処理はブラウザ内で100%ローカルに行われます。データがサーバーに送信されることはなく、テキストのプライバシーは常に守られます。'
  },
];

const howToData = [
  {
    name: 'テキストをコピーする',
    text: 'Word、ウェブサイト、メールなどから書式付きのテキストをコピーします。'
  },
  {
    name: 'クリーナーに貼り付ける',
    text: '入力エリアにコンテンツを貼り付けます。スタイルの削除は自動的に行われます。'
  },
  {
    name: '結果をコピーする',
    text: 'テキストがプレーンで綺麗な状態になりました。これをコピーして、書式トラブルを気にせず好きな場所で使用してください。'
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  inLanguage: 'ja'
};

export const content: ToolLocaleContent<FormatStripperUI> = {
  slug,
  title,
  description,
  bibliography,
  faq: faqData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '「書式解除（書式ストリップ）」とは何ですか？なぜ必要なのですか？',
      level: 2
    },
    {
      type: 'paragraph',
      html: '書式解除とは、<strong>リッチテキストをプレーンテキスト（Plain Text）に変換する</strong>プロセスです。ウェブサイト、電子書籍、Word文書から情報をコピーすると、そのテキストにはフォントの種類、サイズ、色、リンク、CSSスタイルといった「隠れた荷物」が伴います。当ツールは、これらのデジタルゴミを取り除くフィルターとして機能します。'
    },
    {
      type: 'title',
      text: 'テキストクリーナーを使用するメリット',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>ユニバーサルな互換性：</strong> プレーンテキストは、古いメールソフトから最新のWordPressなどのCMSまで、あらゆるプログラムで動作します。',
        '<strong>クリーンなコード：</strong> HTMLタグやRTFスタイルを持ち込まずに、コード内にテキストを貼り付けたい開発者に最適です。',
        '<strong>SEOと読みやすさ：</strong> 不規則な書式を排除することで、コンテンツがウェブサイト内で視覚的な一貫性を保てるようにします。',
        '<strong>完全なプライバシー：</strong> 処理はローカルで行われます。テキストがブラウザの外に出ることはありません。',
      ]
    },
    {
      type: 'title',
      text: '書式解除 vs 単純なコピペ',
      level: 2
    },
    {
      type: 'paragraph',
      html: '多くの場合、単純な <code>Ctrl + V</code> では、貼り付け先ドキュメントのデザインを崩す不要な書式まで引き連れてしまいます。オンライン<strong>書式削除ツール</strong>を使用すれば、メッセージの本質だけを保持でき、技術的な干渉なしに独自のスタイルをゼロから適用できるようになります。'
    },
  ],
  ui: {
    labelInput: 'ソーステキスト（書式あり）',
    labelOutput: 'プレーンテキスト（クリーン）',
    placeholderInput: 'Word、ウェブ、PDFなどのテキストをここに貼り付けてください...',
    placeholderOutput: 'クリーンなテキストがここに表示されます...',
    btnCopy: '結果をコピー',
    btnClear: 'すべて消去',
    toastCopied: 'クリーンなテキストをコピーしました'
  }
};
