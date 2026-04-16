import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClipboardToImageUI } from '../ui';

const slug = 'panoyu-pngye-donustur';
const title = 'Panoyu PNG\'ye Dönüştür: Ekran Görüntülerini İndir';
const description =
  'Pano içeriğini (ekran görüntüleri, resimler) anında indirilebilir bir PNG dosyasına dönüştürmek için online araç. %100 gizli ve hızlı işlem.';

const faqData = [
  {
    question: 'Ekran görüntülerimi buraya yapıştırmak güvenli mi?',
    answer:
      'Evet, tamamen güvenlidir. Bu araç tarayıcınızda %100 yerel olarak çalışır. Pano verileriniz asla bir sunucuya gönderilmez, bu da tam gizliliğinizi garanti eder.',
  },
  {
    question: 'Ne tür içerikleri dönüştürebilirim?',
    answer:
      'Kopyalanmış resimleri (ekran görüntüleri, fotoğraflar), .txt dosyasına dönüştürülecek metinleri veya hatta HTML öğelerini yapıştırabilirsiniz. En yaygın kullanım, hızlı ekran görüntülerini PNG dosyası olarak kaydetmektir.',
  },
  {
    question: 'Yapıştır düğmesi neden çalışmıyor?',
    answer:
      'Tarayıcı güvenlik kısıtlamaları nedeniyle, bazen "Yapıştır" düğmesi açık izinler gerektirir. Çalışmazsa, her zaman standart klavye kısayolunu kullanabilirsiniz: Ctrl+V (Windows) veya Cmd+V (Mac).',
  },
  {
    question: 'Mobil cihazlarda çalışır mı?',
    answer:
      'Evet, içeriği görüntülemek için mobil cihazınızın yapıştırma işlevini kullanabilirsiniz; ancak deneyim masaüstünde hızlı ekran görüntüsü yönetimi için optimize edilmiştir.',
  },
];

const howToData = [
  {
    name: 'İçeriği kopyalayın',
    text: 'Bir ekran görüntüsü alın veya herhangi bir uygulamadan bir resim/metin kopyalayın.',
  },
  {
    name: 'Alana yapıştırın',
    text: 'İçeriği yüklemek için yapıştırma alanına tıklayın veya Ctrl+V / Cmd+V kısayolunu kullanın.',
  },
  {
    name: 'Önizleyin',
    text: 'Anında görünecek olan önizleme alanında içeriğin doğru olduğunu doğrulayın.',
  },
  {
    name: 'Dosyayı indirin',
    text: 'İçeriği bilgisayarınıza gerçek bir dosya olarak kaydetmek için indirme düğmesine basın.',
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

export const content: ToolLocaleContent<ClipboardToImageUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: '',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Pano resmi dosya olarak nasıl kaydedilir?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu ücretsiz online araç, <strong>pano içeriğinizi anında bir resim dosyasına</strong> (PNG) dönüştürmenize olanak tanır. Ekran görüntüsü aldığınızda (Windows + Shift + S) veya bir web sitesinden bir resim kopyaladığınızda ve bunu Photoshop veya Paint gibi ağır düzenleyicileri açmadan bilgisayarınıza kaydetmeniz gerektiğinde mükemmel bir çözümdür.',
    },
    {
      type: 'title',
      text: 'Neden bu pano dönüştürücüsünü kullanmalısınız?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Hız:</strong> Sadece <code>Ctrl + V</code> tuşlarına basın ve indirin. Ara adım yok.',
        '<strong>Gizlilik:</strong> Tüm işlem tarayıcınızda yapılır. Resimleriniz <strong>asla bir sunucuya yüklenmez</strong>.',
        '<strong>Orijinal kalite:</strong> Panodaki ham verileri alarak, indirilen resmin mümkün olan en yüksek kaliteyi korumasını sağlıyoruz.',
        '<strong>Otomatik düzenleme:</strong> Dosyalar tam tarih ve saate dayalı bir isimle indirilir, bu da ekran görüntülerinizin düzenlenmesini kolaylaştırır.',
      ],
    },
    {
      type: 'title',
      text: 'Sıkça sorulan sorular',
      level: 2,
    },
    {
      type: 'title',
      text: 'Ekran görüntüleriyle çalışır mı?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Evet, Windows veya Mac ekran alıntısı aracıyla yapılan ekran görüntülerini hızlı bir şekilde kaydetmek için idealdir.',
    },
    {
      type: 'title',
      text: 'Hangi formatları destekliyor?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Şu an itibarıyla araç, uyumluluk ve şeffaflığı sağlamak için panodaki herhangi bir resmi otomatik olarak algılar ve PNG formatına dönüştürür.',
    },
  ],
  ui: {
    labelCtrlV: 'Herhangi bir yerde Ctrl + V tuşlarına basın',
    labelClickPaste: 'veya yapıştırmak için buraya tıklayın',
    btnClear: 'Temizle',
    btnDownload: 'İndir',
    privacyMsg: 'Tüm işlem %100 yereldir. Resimleriniz asla tarayıcınızdan çıkmaz.',
  },
};
