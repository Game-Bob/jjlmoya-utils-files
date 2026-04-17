import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashVerifierUI } from '../ui';

const slug = 'hash-verifier';
const title = 'オンライン・ハッシュ確認ツール — SHA 256、MD5、SHA 1';
const description =
  'ファイルのSHA256、MD5、またはSHA1デジタル署名を比較して、整合性を計算・確認します。ダウンロードしたファイルが改ざんされていないか確認しましょう。';

const faqData = [
  {
    question: 'ファイルが変更されたかどうかをどのように確認しますか？',
    answer:
      '最も安全な方法は、そのハッシュ値を比較することです。ハッシュは一意のデジタル指紋のようなものです。ファイルの1ビットでも変化すると、ハッシュ値はまったく異なるものになります。取得したハッシュ値を作者が提供した数値と比較することで、その整合性を保証できます。',
  },
  {
    question: 'MD5とSHA-256、どちらのアルゴリズムが優れていますか？',
    answer:
      'MD5は非常に高速ですが、意図的な攻撃に対しては安全性が低いと考えられています。SHA-256は現在のセキュリティ標準であり、「偽造」するのは非常に困難です。ほとんどのファイル整合性チェックには、SHA-256が推奨される選択肢です。',
  },
  {
    question: 'ファイル名を変更するとハッシュ値が変わりますか？',
    answer:
      '実際には、ファイル名を変更してもハッシュ値は変わりません。ハッシュはファイルの名前や作成日ではなく、内部のコンテンツ（バイトデータ）に基づいて計算されます。ハッシュ値が変わる場合は、内部データが変更されたことを意味します。',
  },
  {
    question: 'ハッシュ計算のためにファイルはサーバーにアップロードされますか？',
    answer:
      'いいえ。当ツールはWeb Crypto APIを使用しているため、すべての計算はお使いのブラウザ内でローカルに行われます。ファイルがコンピュータから離れることはなく、100%のプライバシーが確保されます。また、アップロードが不要なため計算も非常に高速です。',
  },
];

const howToData = [
  {
    name: 'ファイルを選択する',
    text: '確認したいファイルをツールにドラッグ、または選択します。',
  },
  {
    name: 'アルゴリズムを選ぶ',
    text: 'お手元にある署名に合わせて、SHA-256、MD5、またはSHA-1を選択します。',
  },
  {
    name: '結果を比較する',
    text: '期待されるハッシュ値を貼り付けると、一致（成功）か不一致（エラー）かをシステムが即座に判定します。',
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

export const content: ToolLocaleContent<HashVerifierUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '出典およびリファレンス',
  bibliography: [
    {
      name: 'NIST: ハッシュ関数標準',
      url: 'https://csrc.nist.gov/projects/hash-functions',
    },
    {
      name: 'MDN: Web Crypto API',
      url: 'https://developer.mozilla.org/ja/docs/Web/API/Web_Crypto_API',
    },
    {
      name: 'Wikipedia: 暗号学的ハッシュ関数',
      url: 'https://ja.wikipedia.org/wiki/暗号学的ハッシュ関数',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'ファイルのハッシュとは何か？なぜセキュリティに不可欠なのか？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ハッシュとは、各ファイルに対して一意の<strong>デジタル指紋</strong>です。これは、数学的アルゴリズム（SHA-256など）によって生成される英数字の文字列です。その主な特徴は「不可逆性」です。ファイルからハッシュを得ることはできますが、ハッシュからファイルを復元することはできません。',
    },
    {
      type: 'paragraph',
      html: 'ソフトウェアやISOイメージ、機密文書をダウンロードする際、<strong>オンライン・ハッシュ確認ツール</strong>を使用することは非常に重要です。作者は通常、ファイルのMD5またはSHA256を公開しており、ダウンロードしたものが破損や悪意のある注入なしに、アップロードされたものと完全に一致するかどうかを確認できます。',
    },
    {
      type: 'title',
      text: 'SHA-256 vs MD5: どちらを使うべきか？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>MD5</strong>アルゴリズムはその高速さから長年普及してきましたが、今日では「衝突」しやすいため暗号学的に安全ではないと考えられています。しかし、ダウンロードの破損チェックなどの単純な整合性確認には依然として使用されています。',
    },
    {
      type: 'paragraph',
      html: '最高のセキュリティを求めるなら、<strong>SHA-256</strong>（SHA-2ファミリーの一部）が世界中のセキュリティ機関によって推奨される標準です。2つの異なるファイルが同じSHA-256ハッシュを生成することは実質的に不可能です。',
    },
    {
      type: 'title',
      text: '完全なプライバシー：ブラウザ内で100%計算',
      level: 3,
    },
    {
      type: 'tip',
      title: 'アップロード不要',
      html: '<p>当ツールはお使いのコンピュータのパワーを使用してファイルを処理します。<strong>Web Crypto API</strong>を使用することで、ファイルをサーバーに「アップロード」する必要がありません。つまり、数ギガバイトのファイルでも数秒で確認でき、ネットの帯域を消費せず、ファイルの内容がデバイスから外に出ることもありません。</p>',
    },
  ],
  ui: {
    labelFile: 'ファイルを選択またはドラッグ',
    labelAlgorithm: 'アルゴリズムを選択',
    labelExpectedHash: '期待されるハッシュ（任意）',
    labelStatus: '比較ステータス',
    placeholderHash: '作者から提供されたハッシュをここに貼り付けてください...',
    btnCompare: '整合性を確認',
    btnClear: 'すべて消去',
    toastCopied: '計算されたハッシュをコピーしました',
    statusMatch: 'ハッシュが一致しました！ファイルは本物です。',
    statusMismatch: 'ハッシュが一致しません。ファイルが破損しているか改ざんされている可能性があります。',
    statusWaiting: '比較するハッシュ値の入力を待機中...',
  },
};
