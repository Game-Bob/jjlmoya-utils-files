import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextSplitterUI } from '../ui';

const slug = 'metin-bolucu';
const title = 'Online Metin Bölücü — Paragraf, Cümle veya Uzunluğa Göre Ayır';
const description =
  'Uzun metinleri otomatik olarak daha küçük parçalara bölün. Kelime sayısı, karakter, paragraf veya cümleye göre ayırma seçeneklerinden birini seçin.';

const faqData = [
  {
    question: 'ChatGPT veya Yapay Zeka için metin nasıl bölünür?',
    answer:
      'Pek çok yapay zeka sisteminin mesaj başına karakter sınırı vardır. Aracımızla, uzun isteminizi (örneğin her 2000 karakterde bir) daha küçük parçalara bölerek bilgi kaybetmeden sırayla gönderebilirsiniz.',
  },
  {
    question: 'Özel metinleri bölücüye yapıştırmak güvenli mi?',
    answer:
      'Tamamen güvenli. Bölme mantığı, JavaScript kullanılarak %100 tarayıcınızda çalışır. Sunucularımıza hiçbir metin gönderilmez, bu da verilerinizin cihazınızda gizli kalmasını sağlar.',
  },
  {
    question: 'Bölebileceğim metin boyutu için bir sınır var mı?',
    answer:
      'İşlem yerel olarak yapıldığı için katı bir sınır koymuyoruz. Bilgisayarınızın belleğine bağlı olarak saniyeler içinde birkaç megabaytlık metni bölebilirsiniz.',
  },
  {
    question: 'Parçalara numaralandırma ekliyor mu?',
    answer:
      'Şu anda araç ayrı bloklar döndürmektedir. Bunları birer birer kopyalayabilirsiniz. Birçok kullanıcı, her bir segmenti diğer uygulamalara nasıl gönderecekleri konusunda manuel kontrolü elinde tutmak için bunu yararlı bulmaktadır.',
  },
];

const howToData = [
  {
    name: 'Metninizi yapıştırın',
    text: 'Bölmek istediğiniz uzun metni ana giriş alanına ekleyin.',
  },
  {
    name: 'Bölmeyi yapılandırın',
    text: 'Yöntemi seçin (karakter, kelime, cümle veya paragraf) ve her parça için maksimum değeri belirleyin.',
  },
  {
    name: 'Parçaları kopyalayın',
    text: 'Araç size oluşturulan blokları gösterecektir. İhtiyacınız olanı kopyalayın ve istediğiniz yerde kullanın.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<TextSplitterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynaklar ve Referanslar',
  bibliography: [
    { name: 'Unicode satır sonlandırma algoritması', url: 'https://unicode.org/reports/tr14/' },
    { name: 'NLP: Cümle ayırma teknikleri', url: 'https://tr.wikipedia.org/wiki/C%C3%BCmle_s%C4%B1n%C4%B1r%C4%B1_belirleme' },
    { name: 'LLM bağlam penceresi sınırları', url: 'https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Neden bir online metin bölücüye ihtiyacınız var?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dijital çağda çok uzun metinlerle çalışmak bir zorluk olabilir. Kodları modüllere ayırması gereken bir programcı, sosyal medya için içeriği uyarlayan bir yazar veya ChatGPT gibi <strong>Büyük Dil Modelleri (LLM\'ler)</strong> ile etkileşime giren bir kullanıcı olun, bir <strong>metin bölücü</strong> temel bir araçtır.',
    },
    {
      type: 'title',
      text: 'Akıllı Bölme Yöntemleri',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Karaktere Göre:</strong> Teknik sınırları kesin olarak karşılamak için hassastır.',
        '<strong>Kelimeye Göre:</strong> SEO veya okunabilirlik için belirli bir uzunluğun hedeflendiği makaleler ve bloglar için idealdir.',
        '<strong>Cümleye Göre:</strong> Her bloğun bağlamını koruyarak fikirlerin yarıda kesilmemesini sağlar.',
        '<strong>Paragrafa Göre:</strong> Karmaşık bir belgenin mantıksal yapısını korumak için en iyi seçenektir.',
      ],
    },
    {
      type: 'title',
      text: 'Gizlilik ve Hız: Yerel İşlem',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Online metin bölücü</strong> aracımız içeriğinizi herhangi bir sunucuya "yüklemez". Her şey anında tarayıcınızda işlenir. Bu, hassas belgeler, sözleşmeler veya özel e-postalarla, başka kimsenin bunları göremeyeceğinden tamamen emin olarak çalışabileceğiniz anlamına gelir.',
    },
  ],
  ui: {
    labelInput: 'Bölünecek Metin',
    labelOutput: 'Sonuç (satır başına bir öğe)',
    placeholderInput: 'Virgül, boşluk veya herhangi bir ayırıcıyla ayrılmış listenizi buraya yapıştırın...',
    placeholderOutput: 'Liste burada görünecektir...',
    labelDelimiter: 'Sınırlayıcı',
    optComma: 'Virgül (,)',
    optSemicolon: 'Noktalı virgül (;)',
    optSpace: 'Boşluk',
    optCustom: 'Özel',
    labelCustom: 'Özel sınırlayıcı',
    placeholderCustom: 'Sınırlayıcıyı girin...',
    optTrim: 'Boşlukları kırp',
    optUnique: 'Tekrarları kaldır',
    optClean: 'Boşları kaldır',
    optNumbered: 'Satırları numaralandır',
    statLines: 'Sonuç satırları',
    statChars: 'Karakterler',
    btnCopy: 'Listeyi Kopyala',
    btnClear: 'Temizle',
    toastCopied: 'Panoya kopyalandı!',
  },
};
