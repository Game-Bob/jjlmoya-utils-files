import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FileSizeConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'dosya-boyutu-donusturucu';
const title = 'Dosya Boyutu Dönüştürücü ve Görselleştirici: İkili ve Onluk';
const description =
  'Dosya boyutu birimleri arasında anında dönüştürme yapın. İndirmelerin ne kadar sürdüğünü görün ve cihazlar arasındaki depolama kullanımını görselleştirin. %100 yerel işleme.';

const faqData = [
  {
    question: 'Onluk (KB) ve ikili (KiB) arasındaki fark nedir?',
    answer:
      'Onluk sistem 1000\'in katlarını (KB, MB, GB), ikili sistem ise 1024\'ün katlarını (KiB, MiB, GiB) kullanır. Bu yüzden "1GB" bir sürücü bilgisayarınızda daha küçük görünür; üreticiler onluk sistemi kullanırken, işletim sistemleri ikili sistemi kullanır.',
  },
  {
    question: 'Bu aracı kullanırken verilerim güvende mi?',
    answer:
      'Kesinlikle. Tüm hesaplamalar tamamen tarayıcınızda JavaScript kullanılarak yapılır. Sunucularımıza hiçbir veri gönderilmez. Dosyalarınız ve değerleriniz asla bilgisayarınızdan dışarı çıkmaz.',
  },
  {
    question: 'Dosya boyutunu görmek için dosya yükleyebilir miyim?',
    answer:
      'Evet! Bir dosyayı doğrudan giriş alanına sürükleyip bırakabilirsiniz; araç otomatik olarak boyutunu okuyacaktır. Dosyanın kendisi asla yüklenmez, sadece boyutu yerel olarak kullanılır.',
  },
  {
    question: '1TB harici sürücüm bilgisayarımda neden daha az alan gösteriyor?',
    answer:
      'Harici sürücüler onluk sistem (1TB = 1.000.000.000.000 bayt) kullanılarak pazarlanır, ancak işletim sisteminiz bunları ikili sistemde (1TiB = 1.099.511.627.776 bayt) görüntüler. Bu araç her iki perspektifi de anlamanıza yardımcı olur.',
  },
  {
    question: 'İndirme süresi hesaplaması ne kadar doğru?',
    answer:
      'Hesaplama ideal ağ hızlarına dayanmaktadır. Gerçek dünya hızları ağ yoğunluğu, mesafe ve donanıma bağlı olarak değişir. Bunları garanti olarak değil, kaba tahminler olarak kullanın.',
  },
];

const howToData = [
  {
    name: 'Bir dosya boyutu girin',
    text: 'Giriş alanına bir sayı yazın (örneğin "500" veya "1.5") ve birimi (KB, MB, GB vb.) seçin.',
  },
  {
    name: 'Standartınızı seçin',
    text: 'Değerin nasıl değiştiğini görmek için Onluk (pazarlama standardı) ve İkili (bilgi işlem standardı) arasında geçiş yapın.',
  },
  {
    name: 'Anlık dönüştürmeleri görün',
    text: 'Bayt\'tan Petabayt\'a kadar tüm birimler anında görünür. Değerini panonuza kopyalamak için herhangi bir bloğa tıklayın.',
  },
  {
    name: 'Bağlamı görselleştirin',
    text: 'Dönüştürmelerin altında, farklı ağlarda indirmelerin ne kadar sürdüğünü ve dosyanın farklı cihazlarda ne kadar yer kapladığını görün.',
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
  inLanguage: 'tr',
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
      text: 'Dosya Boyutlarını Neden Dönüştürmeliyiz? Onluk ve İkili Farkını Anlamak',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir <strong>"1TB"</strong> sürücü satın aldığınızda, üreticiler bunu onluk sistemde (1.000 GB) ölçer. Ancak işletim sisteminiz bunu ikili sistemde görüntüler (1.024 GiB = ~931 GB). Bu fark kullanıcıların kafasını karıştırır. Bir <strong>dosya boyutu dönüştürücü</strong> bu boşluğu doldurarak dosyalarınızın herhangi bir birimde ne anlama geldiğini size tam olarak gösterir.',
    },
    {
      type: 'title',
      text: 'Gerçek Dünya Bağlamı: İndirmeler ve Depolama',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir dosyanın "50MB" olduğunu bilmek bağlam olmadan hiçbir şey ifade etmez. 4G\'de indirmek ne kadar sürer? Bir iPhone\'da ne kadar yer kaplar? Aracımız, gerçek ağlar ve gerçek cihazlar için canlı hesaplamalarla bu soruları anında yanıtlar.',
    },
    {
      type: 'title',
      text: 'Gizli Maliyet: Depolama Matematiği',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Bir "1 TB" harici sürücü aslında <strong>~931 GiB</strong>\'tır (üretici hilesi)',
        'Bir 4K film (~100GB) fiberde <strong>4 saniye</strong> sürerken 4G\'de <strong>13 dakika</strong> sürer',
        'Bir "256GB" iPhone daha az veri depolar çünkü işletim sistemi yer kaplar ve ikili matematik farkı artırır',
      ],
    },
    {
      type: 'title',
      text: 'Güvenebileceğiniz Teknik Hassasiyet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tüm dönüştürmeler <strong>NIST standartlarını</strong> takip eder: onluk (SI) taban olarak 1000\'i, ikili (IEC) 1024\'ü kullanır. Hesaplamalar <strong>%100 yerel</strong> olarak yapılır; yükleme yok, sunucu yok, tam gizlilik.',
    },
  ],
  ui: {
    inputPlaceholder: 'Bir sayı girin (örneğin 1.5 veya 500)',
    selectUnit: 'Birim',
    standardLabel: 'Standart:',
    decimalOption: 'Onluk',
    binaryOption: 'İkili',
    conversionTitle: 'Dönüştürmeler',
    networkSpeedsTitle: 'İndirme Süreleri',
    deviceStorageTitle: 'Cihaz Depolama Etkisi',
    copyFeedback: 'Kopyalandı!',
    dragDropText: 'Boyutunu okumak için bir dosyayı buraya bırakın',
  },
};
