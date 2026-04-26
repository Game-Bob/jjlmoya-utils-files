import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CharacterCounterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'penghitung-karakter';
const title = 'Penghitung Karakter dan Kata Online: Alat Hitung Huruf';
const description =
  'Penghitung karakter, kata, kalimat, dan paragraf online. Hitung waktu baca dan bicara. Alat gratis yang sempurna untuk SEO dan media sosial.';

const faqData = [
  {
    question: 'Mengapa penghitungan karakter penting untuk SEO?',
    answer:
      'Mesin pencari memiliki batas yang disarankan untuk judul (60 karakter) dan deskripsi meta (155-160 karakter). Melebihi batas ini dapat menyebabkan konten Anda terpotong di hasil pencarian.'
  },
  {
    question: 'Apakah penghitung karakter menyertakan spasi?',
    answer:
      'Ya, secara default kami menghitung semua ketukan tombol, termasuk spasi. Namun, alat kami merinci hitungan dengan dan tanpa spasi untuk presisi yang lebih tinggi sesuai kebutuhan Anda.'
  },
  {
    question: 'Bagaimana waktu baca dihitung?',
    answer:
      'Waktu baca didasarkan pada kecepatan rata-rata 200 hingga 250 kata per menit. Waktu bicara dihitung sekitar 130-150 kata per menit, ideal untuk naskah dan presentasi.'
  },
  {
    question: 'Apakah aman untuk menganalisis teks panjang di sini?',
    answer:
      'Tentu saja. Analisis dilakukan secara lokal di browser Anda. Anda dapat memproses seluruh artikel atau dokumen panjang tanpa teks dikirim ke server kami.'
  },
];

const howToData = [
  {
    name: 'Masukkan teks',
    text: 'Ketik langsung atau tempel teks yang ingin Anda analisis ke area utama.'
  },
  {
    name: 'Tinjau statistik',
    text: 'Lihat jumlah kata, karakter, kalimat, dan paragraf yang diperbarui secara real-time.'
  },
  {
    name: 'Analisis waktu',
    text: 'Periksa indikator estimasi waktu baca dan bicara untuk konten Anda.'
  },
  {
    name: 'Optimalkan panjang',
    text: 'Sesuaikan teks Anda sesuai dengan batas yang disarankan untuk media sosial atau SEO (judul, deskripsi).'
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  inLanguage: 'id'
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
      text: 'Pentingnya Presisi dalam Teks Digital',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Di dunia digital, "ekonomi kata-kata" sangatlah mendasar. Kita tidak lagi menulis hanya untuk dibaca oleh manusia, tetapi untuk diproses oleh algoritma. Google memotong judul Anda pada 60 karakter. Twitter (sekarang X) membatasi Anda hingga 280 karakter. Email penjualan yang efektif harus dapat dibaca dalam waktu kurang dari 30 detik.'
    },
    {
      type: 'paragraph',
      html: 'Alat <strong>penghitung karakter dan kata</strong> ini dirancang bukan hanya untuk memberi Anda angka, tetapi untuk membantu Anda mengoptimalkan komunikasi. Dengan menghitung metrik seperti <em>waktu baca</em> atau <em>kerapatan kata</em>, Anda berpindah dari sekadar "menulis teks" menjadi "merancang konten".'
    },
    {
      type: 'title',
      text: 'Optimalisasi SEO',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Batas mesin pencari sangat ketat. Jika Anda melampauinya, pesan Anda akan terpotong dengan elipsis (...) dan CTR (Click Through Rate) Anda akan turun tajam.'
    },
    {
      type: 'table',
      headers: ['Elemen', 'Batas yang Disarankan'],
      rows: [
        ['Meta Title', '50: 60 karakter'],
        ['Meta Description', '150: 160 karakter'],
        ['Google Ads (Judul)', '30 karakter'],
      ]
    },
    {
      type: 'title',
      text: 'Media Sosial',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Setiap platform memiliki bahasanya sendiri dan panjang idealnya. Meskipun batasnya lebih tinggi, "sweet spot" untuk keterlibatan biasanya lebih rendah.'
    },
    {
      type: 'table',
      headers: ['Platform', 'Batas'],
      rows: [
        ['Twitter (X)', '280 kar. (Sweet spot: 70-100)'],
        ['Instagram Bio', '150 karakter'],
        ['LinkedIn Post', '3000 kar. (Ideal: ~1200)'],
      ]
    },
    {
      type: 'title',
      text: 'Pertanyaan yang Sering Diajukan tentang Penghitungan',
      level: 2
    },
    {
      type: 'title',
      text: 'Apakah spasi dihitung sebagai karakter?',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Ya, dan melupakannya adalah kesalahan umum. Bagi komputer, spasi adalah satu byte informasi sama seperti huruf "A". Pada platform seperti Twitter atau database SMS, spasi menghabiskan batas Anda. Alat kami memberi Anda kedua data: "dengan spasi" dan "tanpa spasi" (berguna untuk penerjemah atau desainer tata letak).'
    },
    {
      type: 'title',
      text: 'Bagaimana Waktu Baca dihitung?',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Kami menggunakan standar membaca rata-rata untuk orang dewasa: <strong>200-250 kata per menit</strong> (membaca dalam hati). Untuk waktu bicara (lokusi), kami menghitung sekitar <strong>130-150 kata per menit</strong>, yang merupakan ritme percakapan alami atau narator buku audio yang tenang.'
    },
    {
      type: 'title',
      text: 'Privasi: Ke mana teks saya pergi?',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Tidak ke mana-mana. Semua pemrosesan dilakukan di browser Anda menggunakan <strong>JavaScript di sisi klien</strong>. Anda dapat memutuskan koneksi internet dan alat ini akan tetap berfungsi. Tidak ada data yang dikirim ke server kami.'
    },
  ],
  ui: {
    labelChars: 'Karakter',
    labelWords: 'Kata',
    labelLines: 'Baris',
    labelParagraphs: 'Paragraf',
    labelNoSpaces: 'Tanpa spasi',
    labelBytes: 'Byte',
    labelReading: 'Membaca',
    labelSpeaking: 'Bicara',
    labelUpload: 'Unggah file',
    btnCopyTitle: 'Salin teks',
    btnClearTitle: 'Bersihkan',
    placeholder: 'Ketik atau tempel teks Anda di sini...',
    unitSec: 'd',
    unitMin: 'mnt',
    numberLocale: 'id-ID'
  }
};
