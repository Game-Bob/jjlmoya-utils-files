import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextToMarkdownUI } from '../ui';

const slug = 'konverter-teks-ke-markdown';
const title = 'Konverter Teks ke Markdown Online — Format Dokumen';
const description =
  'Ubah teks biasa menjadi kode Markdown dengan cepat. Konversi paragraf, header, dan daftar ke dalam format yang kompatibel dengan GitHub, Reddit, dan editor MD.';

const faqData = [
  {
    question: 'Apa itu Markdown dan untuk apa gunanya?',
    answer:
      'Markdown adalah bahasa markup ringan yang digunakan untuk memformat teks menggunakan sintaks teks biasa. Ini banyak digunakan di platform seperti GitHub, Reddit, Slack, dan dalam generator situs statis karena mudah dibaca dan ditulis.',
  },
  {
    question: 'Apakah teks saya aman selama konversi?',
    answer:
      'Ya, 100% aman. Konversi dilakukan sepenuhnya di browser Anda menggunakan JavaScript. Tidak ada informasi yang dikirim ke server kami, memastikan dokumen Anda tetap pribadi.',
  },
  {
    question: 'Bagaimana judul dan daftar dikonversi?',
    answer:
      'Alat kami mengidentifikasi struktur dasar teks. Jika mendeteksi baris tunggal sebelum paragraf, alat ini dapat memperlakukannya sebagai header. Baris yang diawali dengan tanda hubung atau angka diformat sebagai daftar Markdown standar.',
  },
  {
    question: 'Bisakah saya menggunakan ini untuk tabel rumit atau kode?',
    answer:
      'Alat ini dirancang untuk pemformatan teks dasar (paragraf, daftar, tebal, miring). Untuk struktur yang sangat kompleks seperti tabel multi-kolom, penyesuaian manual dalam Markdown yang dihasilkan mungkin diperlukan.',
  },
];

const howToData = [
  {
    name: 'Tempelkan teks Anda',
    text: 'Masukkan teks biasa yang ingin Anda format di bidang sumber.',
  },
  {
    name: 'Konversi otomatis',
    text: 'Alat ini memproses teks dan menerapkan sintaks Markdown ke berbagai elemen yang diidentifikasi.',
  },
  {
    name: 'Salin atau unduh',
    text: 'Klik "Salin hasil" atau "Unduh .md" untuk mendapatkan file yang diformat.',
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

export const content: ToolLocaleContent<TextToMarkdownUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Sumber dan Referensi',
  bibliography: [
    { name: 'CommonMark: Spesifikasi Standar Markdown', url: 'https://commonmark.org/' },
    { name: 'Daring Fireball: Proyek Markdown asli', url: 'https://daringfireball.net/projects/markdown/' },
    { name: 'GitHub Flavored Markdown (GFM)', url: 'https://github.github.com/gfm/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Mengapa mengonversi teks Anda ke Markdown?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jika Anda adalah seorang pengembang, blogger, atau penulis teknis, Anda mungkin menggunakan <strong>Markdown</strong> setiap hari. Mengonversi <strong>teks biasa ke Markdown</strong> memungkinkan Anda mempertahankan struktur bersih yang mudah diekspor ke HTML, PDF, atau langsung ke platform seperti WordPress dan generator situs statis.',
    },
    {
      type: 'title',
      text: 'Privasi Total: Konversi 100% Lokal',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sebagian besar konverter online memproses teks Anda di server mereka. <strong>Konverter teks ke Markdown</strong> kami berjalan sepenuhnya di browser Anda. Data Anda tidak pernah meninggalkan komputer Anda, menjadikannya ideal untuk menyusun dokumen internal, catatan rapat, atau ide pribadi.',
    },
    {
      type: 'title',
      text: 'Fitur Unggulan',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Identifikasi otomatis <strong>header dan judul</strong>.',
        'Konversi <strong>daftar berpoin dan bernomor</strong>.',
        'Dukungan untuk pemformatan dasar seperti <strong>tebal dan miring</strong>.',
        'Ekspor langsung ke <strong>file .md</strong>.',
      ],
    },
  ],
  ui: {
    labelInput: 'Teks Biasa',
    labelOutput: 'Markdown Terformat',
    placeholderInput: 'Tempelkan teks Anda di sini...',
    placeholderOutput: 'Kode Markdown yang dihasilkan akan muncul di sini...',
    btnConvert: 'Konversi ke Markdown',
    btnDownload: 'Unduh .md',
    btnCopy: 'Salin hasil',
    btnClear: 'Bersihkan Semua',
    toastCopied: 'Kode Markdown disalin!',
    toastDownloaded: 'Mengunduh file .md...',
  },
};
