import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonToCsvUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'json-to-excel-csv-converter';
const title = 'JSONからCSVへの変換ツール オンライン無料 - Excelにエクスポート';
const description =
  'JSONファイルを素早く簡単にCSVテーブルに変換。JSONファイルをExcelやGoogleスプレッドシートで開く必要があるデータアナリストに最適です。';

const faqData = [
  {
    question: 'Excel用にJSONをCSVに変換するにはどうすればよいですか？',
    answer:
      'JSONコードをツールに貼り付けるか、ファイルをアップロードするだけです。システムが自動的にデータ構造を処理し、Microsoft ExcelやGoogleスプレッドシートで直接開けるCSVファイルを生成します。'
  },
  {
    question: 'このサイトでデータを変換するのは安全ですか？',
    answer:
      'はい、100%安全です。変換はJavaScriptを使用してすべてブラウザ内で行われます。データがサーバーに送信されることはなく、お客様の情報は常にプライベートで安全に保たれます。'
  },
  {
    question: 'JSONが入れ子（ネスト）構造になっている場合はどうなりますか？',
    answer:
      '当ツールの基本コンバーターは、オブジェクトの配列に最適化されています。非常に深いネストがある場合、ツールは最初のレベルのプロパティをフラット化して、Excelで読みやすい表に変換しようと試みます。'
  },
  {
    question: 'ダウンロードせずにCSVを直接コピーできますか？',
    answer:
      'もちろんです。「CSVをダウンロード」ボタンの他に「結果をコピー」オプションがあり、コンテンツを任意のテキストエディタや表計算ソフトに直接貼り付けることができます。'
  },
];

const howToData = [
  {
    name: 'JSONを貼り付ける',
    text: '入力エリアにJSONコードを入力するか、.jsonファイルをアップロードします。'
  },
  {
    name: 'データを処理する',
    text: 'ツールがフィールドと構造を自動的に識別し、行と列に整理します。'
  },
  {
    name: 'ダウンロードまたはコピー',
    text: '「CSVをダウンロード」をクリックしてファイルを保存するか、「結果をコピー」をクリックしてすぐに使用します。'
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
      text: 'なぜデータ分析のためにJSONをCSVに変換するのですか？',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'JSONはモダンなAPIの標準形式ですが、人間が分析するには必ずしも最適な形式ではありません。<strong>JSONからCSVへのコンバーター</strong>を使用することで、複雑な構造を行と列に変換し、<strong>Microsoft Excel</strong>やGoogleスプレッドシートなどの強力なツールでの操作を容易にします。'
    },
    {
      type: 'title',
      text: '完全なプライバシー：ファイルをアップロードせずに変換',
      level: 2
    },
    {
      type: 'paragraph',
      html: '多くのオンラインコンバーターは、データをお客様のサーバーにアップロードします。当ツールは異なります。<strong>変換は100%ローカル</strong>で行われます。ブラウザ内でJavaScriptを使用することで、データがコンピュータの外に出ることはありません。機密情報や顧客リスト、社内レポートなどを扱う場合に非常に重要です。'
    },
    {
      type: 'title',
      text: '完璧な変換のためのテクニカルヒント',
      level: 3
    },
    {
      type: 'list',
      items: [
        'JSONが<strong>オブジェクトの配列</strong>（例：[{}, {}]）であることを確認してください。',
        'CSVの列の一貫性を保つため、すべてのオブジェクトが同様のプロパティを持っていることを確認してください。',
        '特殊文字が含まれる場合でも、Excelでの文字化けを防ぐために<strong>UTF-8</strong>形式でCSVを書き出します。',
      ]
    },
  ],
  ui: {
    statusWaiting: '有効なJSONを待機中',
    statusValid: '有効なJSON',
    statusInvalid: '無効なJSON',
    labelFlatten: 'オブジェクトを平坦化',
    zoneLabel: 'JSONをここに貼り付けるかファイルをドロップ',
    placeholderJson: '[{"id": 1, "name": "John", "details": {"age": 30}}]',
    btnCopyCsv: 'CSVをコピー',
    btnDownloadCsv: 'Excelをダウンロード (CSV)',
    copyFeedback: 'コピーしました！'
  }
};
