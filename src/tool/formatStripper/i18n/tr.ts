import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FormatStripperUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'metin-formatini-temizle';
const title = 'Metin Formatını Temizle Online Ücretsiz: Stil Temizleyici';
const description =
  'Herhangi bir metinden kalın, italik, bağlantı ve renkleri kaldırın. HTML veya Word\'ü profesyonel stil temizleyicimizle anında düz metne (txt) dönüştürün.';

const faqData = [
  {
    question: 'Bir metinden kalın ve italik yazılar nasıl kaldırılır?',
    answer:
      'Metninizi aracımıza yapıştırmanız yeterlidir. Sistem stilleri otomatik olarak algılar ve kaldırır; geriye herhangi bir ağırlık veya süsleme içermeyen düz metin kalır.'
  },
  {
    question: 'Microsoft Word veya Google Dokümanlar ile uyumlu mu?',
    answer:
      'Evet, özellikle bunun için tasarlanmıştır. Word veya Dokümanlar\'dan kopyalarken birçok "çöp" kod taşınır. Temizleyicimiz tüm bu gizli stilleri kaldırarak diğer uygulamalara temiz bir metin yapıştırmanıza olanak tanır.'
  },
  {
    question: 'HTML\'i düz metne dönüştürebilir miyim?',
    answer:
      'Kesinlikle. Bir HTML snippet yapıştırırsanız, aracımız tüm etiketleri (<div>, <a>, <strong> gibi) temizler ve yalnızca okunabilir metin içeriğini döndürür.'
  },
  {
    question: 'Gizli bilgileri yapıştırmak güvenli mi?',
    answer:
      'Tamamen güvenli. Tüm işlemler %100 tarayıcınızda yapılır. Sunucularımıza hiçbir veri gönderilmez, böylece metniniz her zaman gizli ve güvenli kalır.'
  },
];

const howToData = [
  {
    name: 'Metninizi kopyalayın',
    text: 'Word, web sitesi veya e-postadan formatlı metni kopyalayın.'
  },
  {
    name: 'Temizleyiciye yapıştırın',
    text: 'İçeriği giriş alanına yerleştirin. Stillerin kaldırılması otomatiktir.'
  },
  {
    name: 'Sonucu kopyalayın',
    text: 'Metniniz artık sade ve temiz. Kopyalayın ve format sorunu yaşamadan istediğiniz yerde kullanın.'
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  inLanguage: 'tr'
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
      text: '"Formatı temizlemek" ne anlama gelir ve neden buna ihtiyacınız var?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Formatı temizlemek, <strong>zengin metni düz metne (Plain Text) dönüştürme</strong> işlemidir. Bir web sitesinden, e-kitaptan veya Word belgesinden bilgi kopyaladığımızda, o metin "gizli bagajlar" taşır: yazı tipleri, boyutlar, renkler, bağlantılar ve CSS stilleri. Aracımız tüm bu dijital çöpleri temizleyen bir filtre görevi görür.'
    },
    {
      type: 'title',
      text: 'Metin temizleyici kullanmanın avantajları',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Evrensel Uyumluluk:</strong> Düz metin, eski e-postalardan WordPress gibi modern CMS\'lere kadar her programda çalışır.',
        '<strong>Temiz Kod:</strong> HTML etiketleri veya RTF stillerini taşımadan metni kodlarına yapıştırması gereken geliştiriciler için idealdir.',
        '<strong>SEO ve Okunabilirlik:</strong> Düzensiz formatları kaldırarak, içeriğinizin web sitenizin görsel tutarlılığını korumasını sağlarsınız.',
        '<strong>Tam Gizlilik:</strong> İşlem yereldir. Metniniz asla tarayıcınızdan çıkmaz.',
      ]
    },
    {
      type: 'title',
      text: 'Formatı temizle vs. Basit Kopyala-Yapıştır',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Çoğu zaman basit bir <code>Ctrl + V</code>, hedef belgenizin tasarımını bozan istenmeyen formatları taşır. Online <strong>format temizleyici</strong> kullanmak, mesajın özünü korumanızı sağlar.'
    },
  ],
  ui: {
    labelInput: 'Kaynak metin (formatlı)',
    labelOutput: 'Düz metin (temiz)',
    placeholderInput: 'Word, Web veya PDF\'den metni buraya yapıştırın...',
    placeholderOutput: 'Temiz metin burada görünecektir...',
    btnCopy: 'Sonucu Kopyala',
    btnClear: 'Hepsini Temizle',
    toastCopied: 'Temiz metin kopyalandı!'
  }
};
