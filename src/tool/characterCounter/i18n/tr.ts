import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CharacterCounterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'karakter-sayaci';
const title = 'Online Karakter ve Kelime Sayacı: Harf Hesaplama Aracı';
const description =
  'Online karakter, kelime, cümle ve paragraf sayacı. Okuma ve konuşma sürelerini hesaplayın. SEO ve sosyal medya için mükemmel ücretsiz araç.';

const faqData = [
  {
    question: 'SEO için karakter sayımı neden önemlidir?',
    answer:
      'Arama motorlarının başlıklar (60 karakter) ve meta açıklamalar (155-160 karakter) için önerilen sınırları vardır. Bu sınırları aşmak, içeriğinizin arama sonuçlarında kesilmesine neden olabilir.'
  },
  {
    question: 'Karakter sayacı boşlukları dahil eder mi?',
    answer:
      'Evet, varsayılan olarak boşluklar dahil tüm vuruşları sayıyoruz. Ancak aracımız, ihtiyaçlarınıza göre daha fazla hassasiyet için sayımı boşluklu ve boşluksuz olarak ayırır.'
  },
  {
    question: 'Okuma süresi nasıl hesaplanır?',
    answer:
      'Okuma süresi dakikada ortalama 200 ila 250 kelime hızına dayanmaktadır. Konuşma süresi dakikada yaklaşık 130-150 kelime üzerinden hesaplanır; bu, senaryolar ve sunumlar için idealdir.'
  },
  {
    question: 'Burada uzun metinleri analiz etmek güvenli mi?',
    answer:
      'Kesinlikle. Analiz yerel olarak tarayıcınızda gerçekleştirilir. Metin sunucularımıza gönderilmeden makalelerin tamamını veya uzun belgeleri işleyebilirsiniz.'
  },
];

const howToData = [
  {
    name: 'Metni girin',
    text: 'Doğrudan yazın veya analiz etmek istediğiniz metni ana alana yapıştırın.'
  },
  {
    name: 'İstatistikleri inceleyin',
    text: 'Kelime, karakter, cümle ve paragraf sayılarının gerçek zamanlı olarak güncellenmesini izleyin.'
  },
  {
    name: 'Süreleri analiz edin',
    text: 'İçeriğiniz için tahmini okuma ve konuşma süresi göstergelerini kontrol edin.'
  },
  {
    name: 'Uzunluğu optimize edin',
    text: 'Metninizi sosyal medya veya SEO (başlıklar, açıklamalar) için önerilen sınırlara göre ayarlayın.'
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
      text: 'Dijital Metinde Hassasiyetin Önemi',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Dijital dünyada "kelime ekonomisi" temeldir. Artık sadece insanlar tarafından okunmak için değil, algoritmalar tarafından işlenmek için yazıyoruz. Google başlıklarınızı 60 karakterde keser. Twitter (şimdi X) sizi 280 karakterle sınırlar. Etkili bir satış e-postası 30 saniyeden kısa sürede okunmalıdır.'
    },
    {
      type: 'paragraph',
      html: 'Bu <strong>karakter ve kelime sayma aracı</strong> sadece size bir sayı vermek için değil, iletişiminizi optimize etmenize yardımcı olmak için tasarlanmıştır. <em>Okuma süresi</em> veya <em>kelime yoğunluğu</em> gibi metrikleri hesaplayarak, "metin yazmaktan" "içerik tasarlamaya" geçersiniz.'
    },
    {
      type: 'title',
      text: 'SEO Optimizasyonu',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Arama motoru sınırları katıdır. Aşarsanız, mesajınız üç nokta (...) ile kesilir ve CTR\'niz (Tıklanma Oranı) sert bir şekilde düşer.'
    },
    {
      type: 'table',
      headers: ['Öğe', 'Önerilen Sınır'],
      rows: [
        ['Meta Başlık', '50: 60 karakter'],
        ['Meta Açıklama', '150: 160 karakter'],
        ['Google Reklamları (Başlıklar)', '30 karakter'],
      ]
    },
    {
      type: 'title',
      text: 'Sosyal Medya',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Her platformun kendine özgü dili ve ideal uzunluğu vardır. Sınır daha yüksek olsa bile, etkileşim için "en uygun nokta" genellikle daha düşüktür.'
    },
    {
      type: 'table',
      headers: ['Platform', 'Sınır'],
      rows: [
        ['Twitter (X)', '280 kar. (İdeal: 70-100)'],
        ['Instagram Bio', '150 karakter'],
        ['LinkedIn Gönderisi', '3000 kar. (İdeal: ~1200)'],
      ]
    },
    {
      type: 'title',
      text: 'Sayım Hakkında Sıkça Sorulan Sorular',
      level: 2
    },
    {
      type: 'title',
      text: 'Boşluklar karakter olarak sayılır mı?',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Evet, ve bunları unutmak yaygın bir hatadır. Bir bilgisayar için boşluk, tıpkı "A" harfi gibi bir baytlık bilgidir. Twitter gibi platformlarda veya SMS veritabanlarında boşluklar sınırınızı tüketir. Aracımız size her iki veri noktasını da sunar: "boşluklu" ve "boşluksuz" (çevirmenler veya sayfa tasarımcıları için kullanışlıdır).'
    },
    {
      type: 'title',
      text: 'Okuma Süresi nasıl hesaplanır?',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Yetişkinler için ortalama okuma standardını kullanıyoruz: <strong>dakikada 200-250 kelime</strong> (sessiz okuma). Konuşma süresi (seslendirme) için dakikada yaklaşık <strong>130-150 kelime</strong> hesaplıyoruz; bu, doğal bir konuşmanın veya ölçülü bir sesli kitap anlatıcısının ritmidir.'
    },
    {
      type: 'title',
      text: 'Gizlilik: Metnim nereye gidiyor?',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Hiçbir yere. Tüm işlemler, <strong>istemci tarafı JavaScript</strong> kullanılarak tarayıcınızda gerçekleştirilir. İnternet bağlantısını kesebilirsiniz ve araç çalışmaya devam edecektir. Sunucularımıza hiçbir veri gönderilmez.'
    },
  ],
  ui: {
    labelChars: 'Karakter',
    labelWords: 'Kelime',
    labelLines: 'Satır',
    labelParagraphs: 'Paragraf',
    labelNoSpaces: 'Boşluksuz',
    labelBytes: 'Bayt',
    labelReading: 'Okuma',
    labelSpeaking: 'Konuşma',
    labelUpload: 'Dosya yükle',
    btnCopyTitle: 'Metni kopyala',
    btnClearTitle: 'Temizle',
    placeholder: 'Metninizi buraya yazın veya yapıştırın...',
    unitSec: 'sn',
    unitMin: 'dk',
    numberLocale: 'tr-TR'
  }
};
