import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashVerifierUI } from '../ui';

const slug = 'dosya-hash-dogrulama';
const title = 'Online Hash Doğrulayıcı — SHA 256, MD5 ve SHA 1';
const description =
  'SHA256, MD5 veya SHA1 dijital imzalarını karşılaştırarak dosyalarınızın bütünlüğünü hesaplayın ve doğrulayın. İndirdiğiniz dosyaların değiştirilmediğinden emin olun.';

const faqData = [
  {
    question: 'Bir dosyanın değiştirilip değiştirilmediği nasıl doğrulanır?',
    answer:
      'En güvenli yol Hash değerini karşılaştırmaktır. Hash, benzersiz bir dijital parmak izidir. Dosyanın tek bir biti bile değişse, Hash tamamen farklı olacaktır. Alınan Hash\'i yazar tarafından sağlananla karşılaştırarak bütünlüğünü garanti edebilirsiniz.',
  },
  {
    question: 'Hangi algoritma daha iyi: MD5 mi SHA-256 mı?',
    answer:
      'MD5 çok hızlıdır ancak kasıtlı saldırılara karşı daha az güvenli kabul edilir. SHA-256 güncel güvenlik standardıdır ve "taklit edilmesi" çok daha zordur. Çoğu dosya bütünlüğü kontrolü için SHA-256 önerilen seçenektir.',
  },
  {
    question: 'Dosyayı yeniden adlandırdığımda Hash neden değişiyor?',
    answer:
      'Aslında, bir dosyayı yeniden adlandırmak Hash değerini DEĞİŞTİRMEZ. Hash, dosyanın adına veya oluşturulma tarihine değil, dahili içeriğine (baytlarına) göre hesaplanır. Eğer Hash değişiyorsa, bunun nedeni dahili verilerin değiştirilmiş olmasıdır.',
  },
  {
    question: 'Hash hesaplamak için dosyam sunucuya mı yükleniyor?',
    answer:
      'Hayır. Aracımız Web Crypto API kullanır, bu da tüm hesaplamaların yerel olarak tarayıcınızda yapıldığı anlamına gelir. Dosyanız asla bilgisayarınızdan çıkmaz, %100 gizlilik sağlar ve herhangi bir yükleme gerekmediği için çok daha hızlıdır.',
  },
];

const howToData = [
  {
    name: 'Dosyanızı seçin',
    text: 'Doğrulamak istediğiniz dosyayı araca sürükleyin veya seçin.',
  },
  {
    name: 'Algoritmayı seçin',
    text: 'Elinizdeki imzaya göre SHA-256, MD5 veya SHA-1\'i seçin.',
  },
  {
    name: 'Sonuçları karşılaştırın',
    text: 'Beklenen Hash\'i yapıştırın; sistem anında eşleşip eşleşmediklerini (Başarılı) veya farklı olup olmadıklarını (Hata) size söyleyecektir.',
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

export const content: ToolLocaleContent<HashVerifierUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynaklar ve Referanslar',
  bibliography: [
    {
      name: 'NIST: Hash Fonksiyonları Standardı',
      url: 'https://csrc.nist.gov/projects/hash-functions',
    },
    {
      name: 'MDN: Web Crypto API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API',
    },
    {
      name: 'Wikipedia: Kriptografik Karma Fonksiyonu',
      url: 'https://tr.wikipedia.org/wiki/Kriptografik_karma_fonksiyonu',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Dosya Hash nedir ve güvenliğiniz için neden hayati önem taşır?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Hash, her dosyaya özgü bir <strong>dijital parmak izidir</strong>. Matematiksel bir algoritma (SHA-256 gibi) tarafından oluşturulan alfanümerik bir dizidir. Temel özelliği "tek yönlü" olmasıdır: Bir dosyadan Hash elde edebilirsiniz, ancak Hash\'inden dosyayı yeniden oluşturamazsınız.',
    },
    {
      type: 'paragraph',
      html: 'Yazılım, ISO imajları veya hassas belgeler indirirken <strong>online hash doğrulayıcı</strong> kullanmak çok önemlidir. Yazarlar genellikle dosyalarının MD5 veya SHA256 değerlerini yayınlarlar, böylece indirdiğiniz şeyin bozulma veya kötü niyetli müdahaleler olmadan tam olarak onların yüklediği şey olduğunu doğrulayabilirsiniz.',
    },
    {
      type: 'title',
      text: 'SHA-256 vs MD5: Hangisini kullanmalısınız?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>MD5</strong> algoritması hızı nedeniyle yıllarca çok popülerdi ancak bugün "çakışmalara" açık olduğu için kriptografik olarak güvensiz kabul edilmektedir. Bununla birlikte, basit bütünlük kontrolleri (hatalı indirmeler) için hala kullanılmaktadır.',
    },
    {
      type: 'paragraph',
      html: 'Maksimum güvenlik arıyorsanız, <strong>SHA-256</strong> (SHA-2 ailesinin bir parçası) dünya çapındaki güvenlik ajansları tarafından tavsiye edilen standarttır. İki farklı dosyanın aynı SHA-256 Hash değerini üretmesi neredeyse imkansızdır.',
    },
    {
      type: 'title',
      text: 'Tam Gizlilik: %100 Tarayıcınızda Hesaplama',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Yüklemeye Gerek Yok',
      html: '<p>Aracımız dosyayı işlemek için bilgisayarınızın gücünü kullanır. <strong>Web Crypto API</strong> kullanarak dosyayı herhangi bir sunucuya "yüklememize" gerek kalmaz. Bu, internet bant genişliğinizi tüketmeden birkaç gigabaytlık dosyaları saniyeler içinde doğrulayabileceğiniz ve dosyalarınızın içeriğinin cihazınızdan asla çıkmayacağı anlamına gelir.',
    },
  ],
  ui: {
    labelTitle: "Yerel Hash Doğrulayıcı",
    labelSubtitle: "Anında <strong class=\"hv-accent\">SHA-256</strong> imzası oluşturmak için herhangi bir dosyayı bırakın.",
    btnSelect: "Dosya Seç",
    labelPrivacy: "Dosyalar asla cihazınızı terk etmez.",
    labelCalculating: "İmza Hesaplanıyor...",
    labelSuccess: "Hesaplama Başarılı",
    btnAnother: "Başka birini doğrula",
    labelHash: "SHA-256 Hash",
    btnCopyTitle: "Hash kopyala",
    labelCompare: "Orijinal ile karşılaştır",
    placeholderCompare: "Beklenen hash değerini buraya yapıştırın...",
    labelCompareNote: "* Karşılaştırma büyük/küçük harf ve boşlukları yoksayar.",
    statusVerified: "DOĞRULANDI",
    statusCorrupt: "BOZUK / HATA",
  },
};
