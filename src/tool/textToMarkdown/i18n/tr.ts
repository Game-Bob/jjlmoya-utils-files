import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextToMarkdownUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'metin-markdown-donusturucu';
const title = 'Online Metinden Markdown\'a Dönüştürücü — Doküman Formatla';
const description =
  'Düz metni hızlıca Markdown koduna dönüştürün. Paragrafları, başlıkları ve listeleri GitHub, Reddit ve MD editörleriyle uyumlu formata çevirin.';

const faqData = [
  {
    question: 'Markdown nedir ve ne işe yarar?',
    answer:
      'Markdown, düz metin sözdizimi kullanarak metni formatlamak için kullanılan hafif bir işaretleme dilidir. Okunması ve yazılması kolay olduğu için GitHub, Reddit, Slack gibi platformlarda ve statik site oluşturucularda yaygın olarak kullanılır.'},
  {
    question: 'Dönüştürme sırasında metnim güvende mi?',
    answer:
      'Evet, %100 güvenli. Dönüştürme işlemi tamamen tarayıcınızda JavaScript kullanılarak yapılır. Sunucularımıza hiçbir bilgi gönderilmez, böylece dokümanlarınızın gizli kalması sağlanır.'},
  {
    question: 'Başlıklar ve listeler nasıl dönüştürülüyor?',
    answer:
      'Aracımız metnin temel yapısını tanımlar. Paragraflardan önceki tek satırları algılarsa, bunları başlık olarak değerlendirebilir. Tire veya sayılarla başlayan satırlar standart Markdown listeleri olarak formatlanır.'},
  {
    question: 'Bunu karmaşık tablolar veya kodlar için kullanabilir miyim?',
    answer:
      'Bu araç temel metin formatlama (paragraflar, listeler, kalın, eğik) için tasarlanmıştır. Çok sütunlu tablolar gibi çok karmaşık yapılar için, oluşturulan Markdown üzerinde manuel ayarlama yapılması gerekebilir.'},
];

const howToData = [
  {
    name: 'Metninizi yapıştırın',
    text: 'Formatlamak istediğiniz düz metni kaynak alana ekleyin.'},
  {
    name: 'Otomatik dönüştürme',
    text: 'Araç metni işler ve tanımlanan farklı öğelere Markdown sözdizimini uygular.'},
  {
    name: 'Kopyalayın veya indirin',
    text: 'Formatlanmış dosyanızı almak için "Sonucu kopyala" veya ".md İndir"e tıklayın.'},
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  inLanguage: 'tr'};

export const content: ToolLocaleContent<TextToMarkdownUI> = {
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
      text: 'Metninizi neden Markdown\'a dönüştürmelisiniz?',
      level: 2},
    {
      type: 'paragraph',
      html: 'Eğer bir yazılımcı, blogger veya teknik yazar iseniz, muhtemelen her gün <strong>Markdown</strong> kullanıyorsunuzdur. <strong>Düz metninizi Markdown\'a</strong> dönüştürmek, HTML, PDF veya doğrudan WordPress ve statik site oluşturucular gibi platformlara kolayca dışa aktarılabilen temiz bir yapı korumanıza olanak tanır.'},
    {
      type: 'title',
      text: 'Tam Gizlilik: %100 Yerel Dönüştürme',
      level: 2},
    {
      type: 'paragraph',
      html: 'Çoğu online dönüştürücü metninizi kendi sunucularında işler. <strong>Metinden Markdown\'a dönüştürücü</strong> aracımız tamamen tarayıcınızda çalışır. Verileriniz bilgisayarınızdan asla ayrılmaz, bu da onu dahili dokümanlar, toplantı notları veya kişisel fikirler tasarlamak için ideal kılar.'},
    {
      type: 'title',
      text: 'Öne Çıkan Özellikler',
      level: 3},
    {
      type: 'list',
      items: [
        '<strong>Başlıklar ve alt başlıkların</strong> otomatik tanımlanması.',
        '<strong>Madde işaretli ve numaralı listelerin</strong> dönüştürülmesi.',
        '<strong>Kalın ve eğik</strong> gibi temel formatlama desteği.',
        'Anında <strong>.md dosyası</strong> olarak dışa aktarma.',
      ]},
  ],
  ui: {
    labelInput: 'Düz Metin',
    labelOutput: 'Formatlanmış Markdown',
    placeholderInput: 'Metninizi buraya yapıştırın...',
    placeholderOutput: 'Oluşturulan Markdown kodu burada görünecektir...',
    btnConvert: 'Markdown\'a Dönüştür',
    btnDownload: '.md İndir',
    btnCopy: 'Sonucu kopyala',
    btnClear: 'Hepsini Temizle',
    toastCopied: 'Markdown kodu kopyalandı!',
    toastDownloaded: '.md dosyası indiriliyor...'}};
