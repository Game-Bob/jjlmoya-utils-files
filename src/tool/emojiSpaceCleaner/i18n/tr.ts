import type { WithContext, FAQPage, SoftwareApplication, HowTo } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EmojiSpaceCleanerUI } from '../ui';

const slug = 'emoji-ve-tek-bosluk-temizleyici';
const title = 'Ücretsiz Online Emoji ve Çift Boşluk Temizleyici';
const description =
  'Metinlerinizi anında temizleyin: WhatsApp emojilerini kaldırın, çoklu boşlukları normalleştirin ve profesyonel bir görünüm için görünmez karakterleri silin.';

const faqData = [
  {
    question: 'Metinden emojiler toplu olarak nasıl kaldırılır?',
    answer:
      'İçeriğinizi aracımıza yapıştırın ve "Emojileri Kaldır" seçeneğinin etkin olduğundan emin olun. Sistem, WhatsApp veya sosyal medyadaki tüm piktografik simgeleri ve sembolleri otomatik olarak algılayacak ve anında silecek, size sadece saf metin bırakacaktır.',
  },
  {
    question: 'Metinlerimde neden çift boşluk oluşuyor ve bunları nasıl kaldırırım?',
    answer:
      'Çift boşluklar genellikle web sitelerinden, PDF\'lerden kopyalama yaparken veya yanlışlıkla yazım hataları nedeniyle oluşur. Boşluk normalleştirme aracımız metni tarar ve iki veya daha fazla ardışık boşluk dizisini tek bir boşlukla değiştirerek dokümanlarınızın estetiğini ve okunabilirliğini artırır.',
  },
  {
    question: 'Görünmez karakterler nelerdir ve bunları temizlemek neden önemlidir?',
    answer:
      'Görünmez karakterler, çıplak gözle görülmeyen ancak metinde bulunan Unicode kodlarıdır (sıfır genişlikli boşluklar veya kontrol karakterleri gibi). Bunlar veritabanlarında hatalara neden olabilir, web sayfası tasarımını bozabilir veya form doğrulamalarında başarısızlığa yol açabilir. Bunları temizlemek "temiz" ve uyumlu bir metin sağlar.',
  },
  {
    question: 'Gizli metinlerimi bu web sitesinde işlemek güvenli mi?',
    answer:
      'Kesinlikle. Aracımız tamamen istemci tarafında (Client-Side) çalışır. Bu, metninizin tarayıcınızdan asla çıkmadığı ve herhangi bir dış sunucuya gönderilmediği anlamına gelir. İşlem kendi RAM\'inizde gerçekleşir ve verileriniz için mutlak gizlilik garanti edilir.',
  },
  {
    question: 'WhatsApp veya Telegram gibi uygulamalardan gelen metinleri temizlemek için kullanabilir miyim?',
    answer:
      'Evet, bunun için idealdir. Bu uygulamalardan mesaj kopyaladığınızda, genellikle yanlarında emojiler ve görünmez formatlar getirirler. Mesajı buraya yapıştırıp temizleme seçeneklerini kullanarak, profesyonel bir rapor, e-posta veya resmi Word dokümanı için hazır bir sürüm elde edersiniz.',
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
  step: [],
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

export const content: ToolLocaleContent<EmojiSpaceCleanerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynaklar ve Referanslar',
  bibliography: [
    {
      name: 'Unicode Standardı: Emojiler ve Piktografik Semboller',
      url: 'https://unicode.org/emoji/charts/full-emoji-list.html',
    },
    {
      name: 'MDN: JavaScript\'te Düzenli İfadeler (RegExp)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions',
    },
    {
      name: 'W3C: Web\'de boşluk karakterlerini yönetme',
      url: 'https://www.w3.org/TR/CSS2/text.html#white-space-prop',
    },
  ],
  howTo: [],
  schemas: [faqSchema, appSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Profesyonel metinlerinizden emojileri kaldırmak ve boşlukları temizlemek neden hayati önem taşır?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dijital iletişimin hızı arttıkça, bilgiyi sunma biçimimiz mesajın kendisi kadar önemli hale gelmiştir. Emojiler gibi dikkat dağıtıcı görsel unsurlarla dolu veya çift ve üçlü boşluklar gibi teknik kusurlar içeren bir metin, profesyonellikten uzak bir imaj yansıtır. <strong>Online metin temizleyici</strong> aracımız, yazarların, metin yazarlarının, programcıların ve idari personelin içeriklerini anında temizlemelerine yardımcı olmak için geliştirilmiştir.',
    },
    {
      type: 'paragraph',
      html: '<strong>Online metinden emoji kaldırma</strong> işlemiyle sadece şekilleri silmezsiniz; dokümanınızın kodlamasını normalleştirirsiniz. Birçok içerik yönetim sistemi (CMS), eski veritabanları veya Microsoft Word gibi kelime işlemciler, belirli Unicode sembolleriyle karşılaştığında hatalı davranabilir. Metni temizleyerek, herhangi bir cihaz veya platformda tam uyumluluk ve optimum okunabilirlik garantilersiniz.',
    },
    {
      type: 'paragraph',
      html: 'Kurumsal e-postalardaki görsel kirlilik büyüyen bir sorundur. WhatsApp veya Telegram gibi uygulamalarda çalışan simgeler, ciddi bir iş ortamında yerini kaybeder. Otomatik bir <strong>emoji silici</strong> kullanmak, okuyucunun dikkatini verilere ve argümanlara odaklamanızı sağlar, mesajın anlaşılmasını yavaşlatan görsel gürültüyü ortadan kaldırır.',
    },
    {
      type: 'title',
      text: 'Çift boşluklar nasıl kaldırılır ve içerik nasıl normalleştirilir?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Yazarken en sık yapılan hatalardan biri yanlışlıkla boşluk tuşuna iki kez basmaktır. Küçük bir detay gibi görünse de, <strong>çift boşlukları kaldırarak</strong> paragraflarınızın estetiğini kökten iyileştirirsiniz. Modern web tasarımında tipografi, okuma ritmini korumak için homojen boşluklandırmaya dayanır.',
    },
    {
      type: 'tip',
      title: 'Maksimum Gizlilik: %100 Tarayıcınızda İşleme',
      html: '<p>Verilerinizi uzak sunuculara gönderen diğer dönüştürücülerin aksine, aracımız tamamen <strong>istemci tarafında (Client-Side)</strong> çalışır. Yapıştırdığınız metin asla bilgisayarınızdan çıkmaz. Emojilerin silinmesi ve boşlukların temizlenmesi işleminin tamamı kendi RAM\'inizde gerçekleşir, böylece gizli bilgileriniz tamamen özel kalır.</p>',
    },
    {
      type: 'paragraph',
      html: '<strong>Online fazla boşlukları kaldırma</strong> işlevimiz metninizin her karakterini tarar ve bir normalleştirme mantığı uygular. Bu, iki, üç veya on ardışık boşluk dizisinin otomatik olarak tek bir temiz boşluğa dönüştürülmesi anlamına gelir. Taslakların, makalelerin veya teknik raporların yayınlanmadan önce hazırlanması için mükemmel bir çözümdür.',
    },
    {
      type: 'title',
      text: 'WhatsApp ve Telegram emojileri toplu olarak nasıl silinir?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'İş akışınızı yönetmek için mesajlaşma uygulamalarını kullanıyorsanız, mesajların simgelerle dolmasının kaçınılmaz olduğunu bilirsiniz. Bu sohbetleri resmi bir ortama aktarmak için <strong>WhatsApp emojilerini toplu silmeniz</strong> gerekir. Bunu çok sayfalı bir metinde manuel olarak yapmak devasa ve hata riski taşıyan bir iştir.',
    },
    {
      type: 'paragraph',
      html: 'Aracımız, Unicode spesifikasyonunun tüm spektrumunu kapsayan son teknoloji düzenli ifadeler (RegExp) kullanır. Bu, klasik ifadelerden yeni piktografik sembollere, cilt tonu varyasyonlarına ve birleşik emojilere kadar her şeyi içerir. Tek bir tıklamayla, resmi bir belgeye yapıştırılmaya hazır, tamamen "emoji-siz" bir metin elde edersiniz.',
    },
    {
      type: 'title',
      text: 'Görünmez karakterleri ve dijital çöpleri temizlemenin önemi',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Evrensel Uyumluluk:</strong> WordPress, SQL, Excel ve Word için kodları bozmayan gizli karakterlerden arınmış metin.',
        '<strong>Zaman Tasarrufu:</strong> Manuel düzeltme ihtiyacını ortadan kaldırarak binlerce kelimeyi bir saniyeden kısa sürede işler.',
        '<strong>SEO Optimizasyonu:</strong> Google, temiz metin yapısına ve yüksek kaliteli normalleştirilmiş karakterlere sahip içeriği tercih eder.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Hiç metin yapıştırıp imlecin garip davrandığını veya boşluk olması gereken yerlerde kareler belirdiğini fark ettiniz mi? Bu, <strong>görünmez karakterlerden</strong> kaynaklanır. <em>Zero Width Space</em> (ZWS) veya <em>Non-Breaking Space</em> (NBSP) gibi bu unsurlar, kodunuzu veya veritabanınızı "kirletebilen" web formatlama kalıntılarıdır.',
    },
    {
      type: 'title',
      text: 'Kenar Boşluklarını Kırpma (Trimming) ile İş Akışınızı Optimize Edin',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Metin içi emojileri ve boşlukları kaldırmanın yanı sıra, her satırın başındaki veya sonundaki boşluklar da tekrarlanan bir sorundur. <strong>Satır başındaki ve sonundaki boşlukları kaldırarak</strong>, listelerinizin mükemmel hizada olmasını sağlarsınız. Programlamada <em>trimming</em> olarak bilinen bu teknik, isim listeleri veya ürün envanterleri ile çalışırken temeldir.',
    },
    {
      type: 'title',
      text: 'Topluluk Yöneticileri ve Yazarlar İçin Gelişmiş Kullanım',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sosyal medyadan sorumluysanız, emojilerin Instagram için harika ancak bir Excel raporu için felaket olduğunu bilirsiniz. <strong>Metinden emoji çıkararak</strong> en iyi açıklamalarınızı ekibiniz için okunabilir verilere dönüştürebilirsiniz. Aynı şekilde, bir kitap hazırlıyorsanız <strong>boşluk normalleştiricimizi</strong> kullanmak mizanpajcının binlerce boşluk hatasıyla karşılaşmamasını sağlar.',
    },
    {
      type: 'title',
      text: 'Word\'e yapıştırmak için metin formatı kaybetmeden nasıl temizlenir?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Online araçlar kullanırken en büyük korku metnin temel yapısını kaybetmesi veya garip karakterlerin belirmesidir. Aracımız en yüksek kalitede Düz Metin (Plain Text) dışa aktarımı yapar. Bu, Microsoft Word, Google Docs veya Apple Pages\'e yapıştırırken programın kendi yazı tipi stillerini kusursuz bir şekilde uygulayacağı anlamına gelir.',
    },
    {
      type: 'tip',
      title: 'Minimize Etmek ve Metin Temizlemek Arasındaki Fark',
      level: 3,
      html: '<p>Bir minimize edici bilgisayar için gereksiz olan her şeyi kaldırarak dosya boyutunu küçültmeye çalışırken, bizim <strong>insanlar için metin temizleyicimiz</strong> okunabilirliğe öncelik verir. Tüm kelimeleri birleştirmiyoruz, gramer yapısına saygı duyarak görsel çöpleri temizliyoruz.</p>',
    },
    {
      type: 'title',
      text: 'Sonuç: 2026 İçin Metin Temizleme Standardı',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bilgiyle doymuş bir dijital ekosistemde, içerik saflığı değerli bir varlıktır. Profesyonel estetik için <strong>online emoji kaldırmanız</strong> gerekiyorsa veya teknik gereksinimler için <strong>fazla boşlukları silmek</strong> istiyorsanız, aracımız size hizmet etmek için burada.',
    },
    {
      type: 'paragraph',
      html: 'Yarım metinlerle yetinmeyin. Teknik ve görsel mükemmelliği seçin. <strong>Emoji ve boşluk temizleyicimizi</strong> bugün deneyin.',
    },
  ],
  ui: {
    labelToggleEmojis: 'Emojileri Kaldır',
    labelToggleSpaces: 'Çift Boşluklar',
    labelInput: 'Giriş metni',
    labelOutput: 'Temizlenmiş metin',
    placeholderInput: 'Emojili veya fazla boşluklu metni buraya yapıştırın...',
    placeholderOutput: 'Temizlenmiş metin burada görünecektir...',
    btnCopy: 'Kopyala',
    btnClear: 'Temizle',
    toastCopied: 'Kopyalandı!',
    statEmojis: 'emoji kaldırıldı',
    statSpaces: 'fazla boşluk kaldırıldı',
    statNone: 'Hiçbir değişiklik algılanmadı',
  },
};
