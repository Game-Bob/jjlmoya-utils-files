import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClipboardToImageUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'clipboard-to-image';
const title = 'クリップボードをPNGに変換：スクリーンショットを保存';
const description =
  'クリップボードの内容（スクリーンショット、画像）を瞬時にダウンロード可能なPNGファイルに変換するオンラインツール。100%プライベートで高速なプロセス。';

const faqData = [
  {
    question: 'スクリーンショットをここに貼り付けても安全ですか？',
    answer:
      'はい、完全に安全です。このツールはブラウザ内で100%ローカルに動作します。クリップボードのデータがサーバーに送信されることはなく、完全なプライバシーが保証されます。'},
  {
    question: 'どのような種類のコンテンツを変換できますか？',
    answer:
      'コピーした画像（スクリーンショット、写真）、テキスト（.txtとして保存）、さらにはHTML要素も貼り付け可能です。最も一般的な用途は、スクリーンショットをPNGファイルとして素早く保存することです。'},
  {
    question: '貼り付けボタンが機能しないのはなぜですか？',
    answer:
      'ブラウザのセキュリティ制限により、「貼り付け」ボタンには明示的な許可が必要な場合があります。機能しない場合は、標準のキーボードショートカット（Windows：Ctrl+V、Mac：Cmd+V）をいつでも使用できます。'},
  {
    question: 'モバイルデバイスでも動作しますか？',
    answer:
      'はい、モバイルの貼り付け機能を使用して内容を表示できますが、デスクトップでのスクリーンショット管理を素早く行うために最適化されています。'},
];

const howToData = [
  {
    name: 'コンテンツをコピーする',
    text: 'スクリーンショットを撮るか、任意のアプリケーションから画像・テキストをコピーします。'},
  {
    name: 'エリアに貼り付ける',
    text: '貼り付けエリアをクリックするか、Ctrl+V / Cmd+Vを使用してコンテンツを読み込みます。'},
  {
    name: 'プレビュー',
    text: '即座に表示されるプレビューエリアで、内容が正しいか確認します。'},
  {
    name: 'ファイルをダウンロード',
    text: 'ダウンロードボタンを押して、コンテンツを実際のファイルとしてコンピュータに保存します。'},
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

export const content: ToolLocaleContent<ClipboardToImageUI> = {
  slug,
  title,
  description,
  bibliography,
  faq: faqData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'クリップボードの画像をファイルとして保存する方法',
      level: 2},
    {
      type: 'paragraph',
      html: 'この無料オンラインツールを使用すると、<strong>クリップボードの内容を瞬時に画像ファイル（PNG）に変換</strong>できます。スクリーンショット（Windows + Shift + S）を撮った際や、ウェブ上の画像をコピーして、Photoshopやペイントなどの重いエディタを開かずにパソコンに保存したい場合に最適なソリューションです。'},
    {
      type: 'title',
      text: 'このクリップボードコンバーターを使う理由',
      level: 2},
    {
      type: 'list',
      items: [
        '<strong>高速：</strong> <code>Ctrl + V</code> を押してダウンロードするだけ。中間ステップはありません。',
        '<strong>プライバシー：</strong> すべてのプロセスはブラウザ内で行われます。画像が<strong>サーバーへアップロードされることはありません</strong>。',
        '<strong>オリジナル品質：</strong> クリップボードから生のデータを取得し、ダウンロードされる画像が最高品質を維持するようにしています。',
        '<strong>自動整理：</strong> ファイルは正確な日時に基づいた名前でダウンロードされるため、キャプチャの整理が簡単です。',
      ]},
    {
      type: 'title',
      text: 'よくある質問',
      level: 2},
    {
      type: 'title',
      text: 'スクリーンショットに対応していますか？',
      level: 3},
    {
      type: 'paragraph',
      html: 'はい。WindowsやMacの「切り取り領域とスケッチ」等のツールで作成したスクリーンショットを素早く保存するのに最適です。'},
    {
      type: 'title',
      text: '対応しているフォーマットは？',
      level: 3},
    {
      type: 'paragraph',
      html: '現在、このツールはクリップボード内のあらゆる画像を自動的に検出し、互換性と透明度を確保するためにPNG形式に変換します。'},
  ],
  ui: {
    labelCtrlV: 'どこでも Ctrl + V を押してください',
    labelClickPaste: 'またはここをクリックして貼り付け',
    btnClear: 'クリア',
    btnDownload: 'ダウンロード',
    privacyMsg: 'すべてのプロセスは100%ローカルです。画像がブラウザから流出することはありません。'}};
