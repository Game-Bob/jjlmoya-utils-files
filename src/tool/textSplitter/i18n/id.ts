import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextSplitterUI } from '../ui';

const slug = 'pemecah-teks';
const title = 'Pemisah Teks Online — Pisahkan Berdasarkan Paragraf, Kalimat, atau Panjang';
const description =
  'Pecah teks panjang menjadi bagian-bagian kecil secara otomatis. Pilih antara pemisahan berdasarkan jumlah kata, karakter, paragraf, atau kalimat.';

const faqData = [
  {
    question: 'Bagaimana cara membagi teks untuk ChatGPT atau AI?',
    answer:
      'Banyak sistem AI memiliki batasan karakter per pesan. Dengan alat kami, Anda dapat membagi prompt panjang Anda menjadi bagian-bagian yang lebih kecil (misalnya setiap 2000 karakter) untuk dikirim secara berurutan tanpa kehilangan informasi.',
  },
  {
    question: 'Apakah aman untuk menempelkan teks pribadi ke dalam pemisah?',
    answer:
      'Sangat aman. Logika pemisahan berjalan 100% di browser Anda menggunakan JavaScript. Tidak ada teks yang dikirim ke server kami, memastikan data Anda tetap pribadi di perangkat Anda.',
  },
  {
    question: 'Apakah ada batasan ukuran teks yang dapat saya bagi?',
    answer:
      'Kami tidak memberlakukan batasan yang ketat, karena pemrosesan dilakukan secara lokal. Anda dapat membagi beberapa megabyte teks dalam hitungan detik, meskipun performanya bergantung pada memori komputer Anda.',
  },
  {
    question: 'Apakah alat ini menambahkan penomoran pada bagian-bagiannya?',
    answer:
      'Saat ini, alat ini mengembalikan blok-blok yang terpisah. Anda dapat menyalinnya satu per satu. Banyak pengguna merasa ini berguna untuk mempertahankan kontrol manual atas cara mereka mengirim setiap segmen ke aplikasi lain.',
  },
];

const howToData = [
  {
    name: 'Tempelkan teks Anda',
    text: 'Masukkan teks panjang yang ingin Anda bagi di area input utama.',
  },
  {
    name: 'Konfigurasi pemisahan',
    text: 'Pilih metode (karakter, kata, kalimat, atau paragraf) dan atur nilai maksimum untuk setiap bagian.',
  },
  {
    name: 'Salin bagian-bagiannya',
    text: 'Alat ini akan menunjukkan blok-blok yang dihasilkan. Salin yang Anda butuhkan dan gunakan di mana pun Anda mau.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<TextSplitterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Sumber dan Referensi',
  bibliography: [
    { name: 'Algoritma Unicode untuk pemutusan baris', url: 'https://unicode.org/reports/tr14/' },
    { name: 'NLP: Teknik pemisahan kalimat', url: 'https://id.wikipedia.org/wiki/Segmentasi_kalimat' },
    { name: 'Batasan jendela konteks LLM', url: 'https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Mengapa Anda memerlukan pemisah teks online?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bekerja dengan teks yang sangat panjang bisa menjadi tantangan di era digital. Baik Anda seorang programmer yang perlu membagi kode menjadi modul, seorang penulis yang mengadaptasi konten untuk media sosial, atau pengguna yang berinteraksi dengan <strong>Large Language Models (LLM)</strong> seperti ChatGPT, <strong>pemisah teks</strong> adalah alat yang penting.',
    },
    {
      type: 'title',
      text: 'Metode Pemisahan yang Cerdas',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Berdasarkan Karakter:</strong> Tepat untuk memenuhi batasan teknis yang ketat.',
        '<strong>Berdasarkan Kata:</strong> Ideal untuk artikel dan blog di mana panjang tertentu dicari untuk SEO atau keterbacaan.',
        '<strong>Berdasarkan Kalimat:</strong> Memastikan bahwa pemikiran tidak terpotong di tengah jalan, menjaga konteks dari setiap blok.',
        '<strong>Berdasarkan Paragraf:</strong> Opsi terbaik untuk menjaga struktur logis dari dokumen yang kompleks.',
      ],
    },
    {
      type: 'title',
      text: 'Privasi dan Kecepatan: Pemrosesan Lokal',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Alat <strong>pemisah teks online</strong> kami tidak "mengunggah" konten Anda ke server mana pun. Semuanya diproses secara instan di browser Anda. Ini berarti Anda dapat bekerja dengan dokumen sensitif, kontrak, atau email pribadi dengan kepastian mutlak bahwa tidak ada orang lain yang dapat melihatnya.',
    },
  ],
  ui: {
    labelInput: 'Teks Asli',
    labelOutput: 'Bagian yang Dibagi',
    labelMethod: 'Metode Pemisahan',
    labelValue: 'Maks per bagian',
    placeholderInput: 'Tempelkan teks panjang di sini...',
    placeholderOutput: 'Bagian yang dibagi akan muncul di sini...',
    optionChars: 'Karakter',
    optionWords: 'Kata',
    optionSentences: 'Kalimat',
    optionParagraphs: 'Paragraf',
    btnSplit: 'Bagi Teks',
    btnCopy: 'Salin Bagian',
    btnClear: 'Bersihkan Semua',
    toastCopied: 'Bagian disalin ke papan klip!',
    labelPartsFound: 'Bagian yang dihasilkan',
  },
};
