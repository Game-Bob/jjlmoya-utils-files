import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FileSizeConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'file-size-converter';
const title = 'ファイルサイズ変換・可視化ツール: 2進数と10進数';
const description =
  'ファイルサイズの単位を瞬時に変換します。ダウンロードにかかる時間を計算し、デバイス間でのストレージ使用量を可視化します。100%ローカル処理。';

const faqData = [
  {
    question: '10進数（KB）と2進数（KiB）の違いは何ですか？',
    answer:
      '10進数は1000の累乗（KB、MB、GB）を使用し、2進数は1024の累乗（KiB、MiB、GiB）を使用します。これが、1GBのドライブがコンピュータ上で小さく表示される理由です。メーカーは10進数を使用しますが、OSは2進数を使用するためです。',
  },
  {
    question: 'このツールを使用する際、データは安全ですか？',
    answer:
      'もちろんです。すべての計算はJavaScriptを使用してブラウザ内で完全に行われます。サーバーにデータが送信されることはありません。ファイルや数値がコンピュータの外に出ることはありません。',
  },
  {
    question: 'ファイルをアップロードしてサイズを確認できますか？',
    answer:
      'はい！ファイルを入力エリアに直接ドラッグ＆ドロップすれば、ツールが自動的にサイズを読み取ります。ファイル自体がアップロードされることはなく、サイズ情報のみがローカルで使用されます。',
  },
  {
    question: '1TBの外付けドライブが、コンピュータで少なく表示されるのはなぜですか？',
    answer:
      '外付けドライブは10進数（1TB = 1,000,000,000,000バイト）で販売されていますが、OSは2進数（1TiB = 1,099,511,627,776バイト）で表示します。このツールは、両方の視点を理解するのに役立ちます。',
  },
  {
    question: 'ダウンロード時間の計算はどの程度正確ですか？',
    answer:
      '計算は理想的なネットワーク速度に基づいています。実際の速度は、ネットワークの混雑、距離、ハードウェアによって異なります。これらは保証ではなく、大まかな目安として使用してください。',
  },
];

const howToData = [
  {
    name: 'ファイルサイズを入力する',
    text: '入力フィールドに数値（例：「500」や「1.5」）を入力し、単位（KB、MB、GBなど）を選択します。',
  },
  {
    name: '規格を選択する',
    text: '10進数（マーケティング規格）と2進数（コンピュータ規格）を切り替えて、値がどのように変化するかを確認します。',
  },
  {
    name: '瞬時に変換結果を確認',
    text: 'バイトからペタバイトまでのすべての単位が即座に表示されます。任意のブロックをクリックして、値をクリップボードにコピーできます。',
  },
  {
    name: 'コンテキストを可視化',
    text: '変換結果の下で、さまざまなネットワークでのダウンロード時間や、デバイスごとの占有スペースを確認できます。',
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
  inLanguage: 'ja',
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
      text: 'なぜファイルサイズを変換するのか？10進数と2進数の違いを理解する',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>「1TB」</strong>のドライブを購入すると、メーカーは10進数（1,000 GB）で測定します。しかし、OSは2進数（1,024 GiB = 約931 GB）で表示します。この違いがユーザーを混乱させます。<strong>ファイルサイズ変換ツール</strong>はこのギャップを埋め、任意の単位でファイルが正確に何を意味するかを示します。',
    },
    {
      type: 'title',
      text: '実世界のコンテキスト：ダウンロードとストレージ',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ファイルが「50MB」であると知っていても、コンテキストがなければ意味がありません。4Gでダウンロードするのにどれくらいかかるか？iPhoneでどれくらいのスペースを占めるか？当ツールは、実際のネットワークやデバイスのライブ計算で即座に回答します。',
    },
    {
      type: 'title',
      text: '隠れたコスト：ストレージの計算',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '外付けの「1 TB」ドライブは実際には<strong>約931 GiB</strong>です（メーカーのトリック）',
        '4K映画（約100GB）は光回線で<strong>4秒</strong>ですが、4Gでは<strong>13分</strong>かかります',
        '「256GB」のiPhoneは、OSがスペースを使用し、2進数の計算が差を広げるため、実際に保存できる量は少なくなります',
      ],
    },
    {
      type: 'title',
      text: '信頼できる技術的精度',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'すべての変換は<strong>NIST規格</strong>に従っています。10進数（SI）は1000を底とし、2進数（IEC）は1024を底とします。計算は<strong>100%ローカル</strong>で行われ、アップロードやサーバー処理はなく、完全なプライバシーが保たれます。',
    },
  ],
  ui: {
    inputPlaceholder: '数値を入力（例：1.5 や 500）',
    selectUnit: '単位',
    standardLabel: '規格:',
    decimalOption: '10進数',
    binaryOption: '2進数',
    conversionTitle: '変換結果',
    networkSpeedsTitle: 'ダウンロード時間',
    deviceStorageTitle: 'デバイスストレージへの影響',
    copyFeedback: 'コピーしました！',
    dragDropText: 'ファイルをここにドロップしてサイズを読み取る',
    fileTooBig: 'ファイルが大きすぎます',
  },
};
