import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FileSizeConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'konverter-ukuran-file';
const title = 'Pengonversi & Visualisator Ukuran File - Biner & Desimal';
const description =
  'Konversi satuan ukuran file secara instan. Lihat berapa lama waktu unduhan dan visualisasikan penggunaan penyimpanan di berbagai perangkat. Pemrosesan 100% lokal.';

const faqData = [
  {
    question: 'Apa perbedaan antara desimal (KB) dan biner (KiB)?',
    answer:
      'Desimal menggunakan pangkat 1000 (KB, MB, GB), sedangkan biner menggunakan pangkat 1024 (KiB, MiB, GiB). Inilah sebabnya mengapa drive "1GB" tampak lebih kecil di komputer Anda—produsen menggunakan desimal, tetapi sistem operasi menggunakan biner.',
  },
  {
    question: 'Apakah data saya aman menggunakan alat ini?',
    answer:
      'Tentu saja. Semua perhitungan terjadi sepenuhnya di browser Anda menggunakan JavaScript. Tidak ada data yang dikirim ke server kami. File dan nilai Anda tidak pernah meninggalkan komputer Anda.',
  },
  {
    question: 'Bisakah saya mengunggah file untuk melihat ukurannya?',
    answer:
      'Ya! Anda dapat menyeret dan melepas file langsung ke area input, dan alat ini akan secara otomatis membaca ukurannya. File itu sendiri tidak pernah diunggah—hanya ukurannya yang digunakan secara lokal.',
  },
  {
    question: 'Mengapa drive eksternal 1TB saya menunjukkan ruang yang lebih sedikit di komputer?',
    answer:
      'Drive eksternal dipasarkan menggunakan desimal (1TB = 1.000.000.000.000 byte), tetapi sistem operasi Anda menampilkannya dalam biner (1TiB = 1.099.511.627.776 byte). Alat ini membantu Anda memahami kedua perspektif tersebut.',
  },
  {
    question: 'Seberapa akurat perhitungan waktu unduhan?',
    answer:
      'Perhitungan didasarkan pada kecepatan jaringan ideal. Kecepatan dunia nyata bervariasi karena kemacetan jaringan, jarak, dan perangkat keras. Gunakan ini sebagai perkiraan kasar, bukan jaminan.',
  },
];

const howToData = [
  {
    name: 'Masukkan ukuran file',
    text: 'Ketik angka di kolom input (misalnya, "500" atau "1.5") dan pilih satuannya (KB, MB, GB, dll.).',
  },
  {
    name: 'Pilih standar Anda',
    text: 'Beralih antara Desimal (standar pemasaran) dan Biner (standar komputasi) untuk melihat bagaimana nilainya berubah.',
  },
  {
    name: 'Lihat konversi instan',
    text: 'Semua satuan dari Byte hingga Petabyte muncul secara instan. Klik blok mana pun untuk menyalin nilainya ke papan klip Anda.',
  },
  {
    name: 'Visualisasikan konteks',
    text: 'Di bawah konversi, lihat berapa lama waktu unduhan di berbagai jaringan dan berapa banyak ruang yang ditempati file di berbagai perangkat.',
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
  inLanguage: 'id',
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
      text: 'Mengapa Mengonversi Ukuran File? Memahami Desimal vs. Biner',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Saat Anda membeli drive <strong>"1TB"</strong>, produsen mengukurnya dalam desimal (1.000 GB). Tetapi sistem operasi Anda menampilkannya dalam biner (1.024 GiB = ~931 GB). Perbedaan ini membingungkan pengguna. <strong>Pengonversi ukuran file</strong> menjembatani kesenjangan ini, menunjukkan kepada Anda dengan tepat apa arti file Anda dalam satuan apa pun.',
    },
    {
      type: 'title',
      text: 'Konteks Dunia Nyata: Unduhan & Penyimpanan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mengetahui bahwa sebuah file berukuran "50MB" tidak berarti apa-apa tanpa konteks. Berapa lama waktu unduh di 4G? Berapa banyak ruang di iPhone? Alat kami menjawabnya secara instan dengan perhitungan langsung untuk jaringan nyata dan perangkat nyata.',
    },
    {
      type: 'title',
      text: 'Biaya Tersembunyi: Matematika Penyimpanan',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Drive eksternal "1 TB" sebenarnya berukuran <strong>~931 GiB</strong> (trik produsen)',
        'Film 4K (~100GB) butuh <strong>4 detik</strong> di fiber tetapi <strong>13 menit</strong> di 4G',
        'iPhone "256GB" menyimpan lebih sedikit karena OS menggunakan ruang dan matematika biner memperparah perbedaan',
      ],
    },
    {
      type: 'title',
      text: 'Presisi Teknis yang Dapat Anda Percayai',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Semua konversi mengikuti <strong>standar NIST</strong>: desimal (SI) menggunakan basis 1000, biner (IEC) menggunakan 1024. Perhitungan terjadi <strong>100% secara lokal</strong>—tidak ada unggahan, tidak ada server, privasi penuh.',
    },
  ],
  ui: {
    inputPlaceholder: 'Masukkan angka (misalnya, 1.5 atau 500)',
    selectUnit: 'Satuan',
    standardLabel: 'Standar:',
    decimalOption: 'Desimal',
    binaryOption: 'Biner',
    conversionTitle: 'Konversi',
    networkSpeedsTitle: 'Waktu Unduhan',
    deviceStorageTitle: 'Dampak Penyimpanan Perangkat',
    copyFeedback: 'Disalin!',
    dragDropText: 'Lepaskan file di sini untuk membaca ukurannya',
    fileTooBig: 'File terlalu besar',
  },
};
