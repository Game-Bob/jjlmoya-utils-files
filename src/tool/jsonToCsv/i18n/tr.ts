import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonToCsvUI } from '../ui';

const slug = 'json-csv-donusturucu';
const title = 'Online Ücretsiz JSON CSV Dönüştürücü — Excel\'e Aktar';
const description =
  'JSON dosyalarınızı hızlı ve kolay bir şekilde CSV tablolarına dönüştürün. JSON dosyalarını Excel veya Google Sheets\'te açması gereken veri analistleri için idealdir.';

const faqData = [
  {
    question: 'Excel için JSON CSV\'ye nasıl dönüştürülür?',
    answer:
      'JSON kodunuzu aracımıza yapıştırmanız veya dosyanızı yüklemeniz yeterlidir. Sistem veri yapısını otomatik olarak işler ve doğrudan Microsoft Excel veya Google Sheets\'te açabileceğiniz bir CSV dosyası oluşturur.',
  },
  {
    question: 'Verilerimi bu sitede dönüştürmek güvenli mi?',
    answer:
      'Evet, %100 güvenli. Dönüştürme işlemi tamamen tarayıcınızda JavaScript kullanılarak yapılır. Sunucularımıza hiçbir veri gönderilmez, böylece bilgilerinizin gizli ve güvenli kalması sağlanır.',
  },
  {
    question: 'JSON\'um iç içe geçmişse ne olur?',
    answer:
      'Temel dönüştürücümüz nesne dizileri (arrays of objects) için optimize edilmiştir. Çok derin iç içe geçmeleriniz varsa, araç Excel için okunabilir bir tablo sağlamak amacıyla ilk özellik seviyesini düzleştirmeye çalışacaktır.',
  },
  {
    question: 'CSV\'yi indirmek yerine doğrudan kopyalayabilir miyim?',
    answer:
      'Elbette. "CSV İndir" butonunun yanı sıra, içeriği herhangi bir metin düzenleyiciye veya elektronik tabloya doğrudan yapıştırmak için "Sonucu kopyala" seçeneğine sahipsiniz.',
  },
];

const howToData = [
  {
    name: 'JSON\'unuzu yapıştırın',
    text: 'Giriş alanına JSON kodunu ekleyin veya .json dosyasını yükleyin.',
  },
  {
    name: 'Verileri işleyin',
    text: 'Araç, verileri satır ve sütunlar halinde düzenlemek için alanları ve yapıyı otomatik olarak tanımlar.',
  },
  {
    name: 'İndirin veya kopyalayın',
    text: 'Dosyayı kaydetmek için "CSV İndir"e veya anında kullanmak için "Sonucu kopyala"ya tıklayın.',
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

export const content: ToolLocaleContent<JsonToCsvUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynaklar ve Referanslar',
  bibliography: [
    { name: 'RFC 4180: CSV Format Belirtimi', url: 'https://tools.ietf.org/html/rfc4180' },
    { name: 'ECMA-404: JSON Veri Değişim Standardı', url: 'https://www.json.org/json-en.html' },
    { name: 'Microsoft: CSV\'yi Excel\'e Aktarma', url: 'https://support.microsoft.com/tr-tr/office/metin-txt-veya-csv-dosyalar%C4%B1n%C4%B1-alma-veya-verme-5250ac4c-663c-47ce-937b-339e391393ba' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Veri analiziniz için neden JSON\'u CSV\'ye dönüştürmelisiniz?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON, modern API\'ler için standart formattır ancak insan tarafından analizi en kolay format değildir. Bir <strong>JSON - CSV dönüştürücü</strong>, karmaşık yapıları satır ve sütunlara dönüştürmenize olanak tanıyarak <strong>Microsoft Excel</strong>, Numbers veya Google Sheets gibi güçlü araçlarda işlem yapmanızı kolaylaştırır.',
    },
    {
      type: 'title',
      text: 'Tam Gizlilik: Dosya yüklemeden dönüştürün',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Çoğu online dönüştürücü verilerinizi bir sunucuya yükler. Aracımız farklıdır: <strong>dönüştürme işlemi %100 yereldir</strong>. Tarayıcınızda JavaScript kullanarak verileriniz bilgisayarınızdan asla ayrılmaz. Bu, hassas bilgiler, müşteri listeleri veya şirket içi raporlarla çalışıyorsanız hayati önem taşır.',
    },
    {
      type: 'title',
      text: 'Mükemmel bir dönüştürme için teknik ipuçları',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'JSON\'unuzun bir <strong>nesne dizisi</strong> (örneğin, [{}, {}]) olduğundan emin olun.',
        'CSV sütunlarının tutarlı kalması için tüm nesnelerin benzer özelliklere sahip olduğunu doğrulayın.',
        'Özel karakterleriniz varsa, Excel\'de sorun yaşamamak için CSV\'miz <strong>UTF-8</strong> formatında dışa aktarılır.',
      ],
    },
  ],
  ui: {
    labelInput: 'Kaynak JSON',
    labelOutput: 'Sonuç CSV',
    placeholderInput: 'JSON dizinizi buraya yapıştırın (ör: [{"id": 1, "name": "Ahmet"}])',
    placeholderOutput: 'Oluşturulan CSV burada görünecektir...',
    btnConvert: 'Dönüştür',
    btnDownload: 'CSV İndir',
    btnCopy: 'Sonucu kopyala',
    btnClear: 'Hepsini Temizle',
    toastCopied: 'CSV panoya kopyalandı!',
    toastDownloaded: 'CSV dosyası indiriliyor...',
    errorInvalidJson: 'Geçersiz JSON formatı. Lütfen verilerinizi kontrol edin.',
  },
};
