import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CharacterCounterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'character-counter';
const title = '文字数カウント・単語数カウント オンラインツール';
const description =
  '文字数、単語数、行数、段落数をリアルタイムでカウントするオンラインツール。読了時間やスピーチ時間の推定も可能。SEOやSNS投稿の最適化に最適です。';

const faqData = [
  {
    question: 'SEOにおいて文字数カウントが重要なのはなぜですか？',
    answer:
      '検索エンジンには推奨される制限があります。タイトルは約60文字、メタディスクリプションは155〜160文字（日本語の場合は約80文字前後）です。これらの制限を超えると、検索結果で内容が省略されてしまう可能性があります。'},
  {
    question: '文字数カウントに空白は含まれますか？',
    answer:
      'はい、デフォルトでは空白を含むすべての入力がカウントされます。ただし、当ツールではニーズに合わせて空白あり・なしの両方の数値を詳細に表示します。'},
  {
    question: '読了時間はどのように計算されますか？',
    answer:
      '読了時間は、成人の平均的な読書スピード（1分あたり約400〜600文字）に基づいて計算されます。スピーチ時間は1分あたり約300文字程度で計算されており、原稿作成やプレゼン資料に最適です。'},
  {
    question: '長いテキストをここで解析しても安全ですか？',
    answer:
      'もちろんです。解析はブラウザ内でローカルに実行されます。テキストがサーバーに送信されることはないため、記事全文や機密文書も安心して処理いただけます。'},
];

const howToData = [
  {
    name: 'テキストを入力する',
    text: '解析したいテキストをメインエリアに直接入力するか、貼り付けてください。'},
  {
    name: '統計を確認する',
    text: '単語数、文字数、行数、段落数がリアルタイムで更新されるのを確認します。'},
  {
    name: '時間を分析する',
    text: 'コンテンツの推定読了時間とスピーチ時間のインジケーターを確認します。'},
  {
    name: '長さを最適化する',
    text: 'SNSやSEO（タイトル、ディスクリプション）の推奨制限に合わせてテキストを調整します。'},
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }}))};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text}))};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  inLanguage: 'ja'};

export const content: ToolLocaleContent<CharacterCounterUI> = {
  slug,
  title,
  description,
  bibliography,
  faq: faqData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'デジタルテキストにおける「正確さ」の重要性',
      level: 2},
    {
      type: 'paragraph',
      html: '現代のデジタル世界において、「言葉の節約」は不可欠です。私たちはもはや人間だけに読まれるために書いているのではなく、アルゴリズムによって処理されるためにも書いています。Googleはタイトルを全角30文字（半角60文字）程度でカットします。Twitter（現X）は140文字（各国語により異なる）に制限しています。効果的なセールスメールは30秒以内に読み終えられるべきです。'},
    {
      type: 'paragraph',
      html: 'この<strong>文字数・単語数カウントツール</strong>は、単に数値を出すだけでなく、コミュニケーションの最適化を支援するように設計されています。<em>読了時間</em>や<em>単語密度</em>などの指標を計算することで、「テキストを書く」ことから「コンテンツを作成する」ことへとステップアップできます。'},
    {
      type: 'title',
      text: 'SEO最適化',
      level: 3},
    {
      type: 'paragraph',
      html: '検索エンジンの制限は厳格です。制限を超えるとメッセージが省略（...）され、CTR（クリック率）が急激に低下します。'},
    {
      type: 'table',
      headers: ['項目', '推奨制限'],
      rows: [
        ['メタタイトル', '全角25: 32文字程度'],
        ['メタディスクリプション', '全角80: 120文字程度'],
        ['Googleリスティング広告', '全角15文字（半角30文字）'],
      ]},
    {
      type: 'title',
      text: 'ソーシャルメディア',
      level: 3},
    {
      type: 'paragraph',
      html: '各プラットフォームには独自の言語と理想的な長さがあります。制限値が高くても、エンゲージメントが高まる「スイートスポット」は通常それよりも短くなります。'},
    {
      type: 'table',
      headers: ['プラットフォーム', '制限'],
      rows: [
        ['Twitter (X)', '全角140文字（推奨：70-100）'],
        ['Instagram 自己紹介', '150文字'],
        ['LinkedIn 投稿', '約3000文字（理想：約1200）'],
      ]},
    {
      type: 'title',
      text: 'カウントに関するよくある質問',
      level: 2},
    {
      type: 'title',
      text: '空白は文字としてカウントされますか？',
      level: 3},
    {
      type: 'paragraph',
      html: 'はい。空白を文字として忘れてしまうのはよくあるミスです。コンピュータにとって、空白は「A」という文字と同じ1バイトの情報です。TwitterやSMS、データベースなどでは空白も制限を消費します。当ツールでは、「空白込み」と「空白抜き」の両方のデータを提供しています。'},
    {
      type: 'title',
      text: '読了時間はどのように計算されますか？',
      level: 3},
    {
      type: 'paragraph',
      html: '成人の平均的な読書スピード：<strong>1分あたり約400〜600文字</strong>（黙読）を基準にしています。スピーチ（音読）時間は<strong>1分あたり約300文字</strong>で計算しており、これは自然な会話や落ち着いたナレーションのペースです。'},
    {
      type: 'title',
      text: 'プライバシー：入力したテキストの行方は？',
      level: 3},
    {
      type: 'paragraph',
      html: 'どこにも送信されません。すべての処理は<strong>クライアントサイドのJavaScript</strong>を使用してブラウザ内で行われます。インターネットを切断してもツールは動作し続けます。サーバーにデータが送信されることは一切ありません。'},
  ],
  ui: {
    labelChars: '文字数',
    labelWords: '単語数',
    labelLines: '行数',
    labelParagraphs: '段落数',
    labelNoSpaces: '空白抜き',
    labelBytes: 'バイト',
    labelReading: '読了時間',
    labelSpeaking: 'スピーチ',
    labelUpload: 'ファイルをアップロード',
    btnCopyTitle: 'テキストをコピー',
    btnClearTitle: 'クリア',
    placeholder: 'ここにテキストを入力または貼り付けてください...',
    unitSec: '秒',
    unitMin: '分',
    numberLocale: 'ja-JP'}};
