import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonToCsvUI } from '../ui';

const slug = 'konverter-json-ke-csv';
const title = 'Konverter JSON ke CSV Online Gratis — Ekspor ke Excel';
const description =
  'Ubah file JSON Anda menjadi tabel CSV dengan cepat dan mudah. Ideal untuk analis data yang perlu membuka file JSON di Excel atau Google Sheets.';

const faqData = [
  {
    question: 'Bagaimana cara mengonversi JSON ke CSV untuk Excel?',
    answer:
      'Cukup tempelkan kode JSON Anda atau unggah file Anda ke alat kami. Sistem secara otomatis memproses struktur data dan menghasilkan file CSV yang dapat Anda unduh dan buka langsung di Microsoft Excel atau Google Sheets.',
  },
  {
    question: 'Apakah aman untuk mengonversi data saya di situs web ini?',
    answer:
      'Ya, 100% aman. Konversi dilakukan sepenuhnya di browser Anda menggunakan JavaScript. Tidak ada data yang dikirim ke server kami, memastikan informasi Anda tetap pribadi dan aman.',
  },
  {
    question: 'Apa yang terjadi jika JSON saya bersarang (nested)?',
    answer:
      'Konverter dasar kami dioptimalkan untuk array objek. Jika Anda memiliki sarang yang sangat dalam, alat ini akan mencoba meratakan tingkat properti pertama untuk memastikan tabel dapat dibaca oleh Excel.',
  },
  {
    question: 'Bisakah saya menyalin CSV secara langsung alih-alih mengunduhnya?',
    answer:
      'Tentu saja. Selain tombol "Unduh CSV", Anda memiliki opsi "Salin hasil" untuk menempelkan konten secara langsung ke editor teks atau spreadsheet apa pun.',
  },
];

const howToData = [
  {
    name: 'Tempelkan JSON Anda',
    text: 'Masukkan kode JSON atau unggah file .json di area input.',
  },
  {
    name: 'Proses datanya',
    text: 'Alat secara otomatis mengidentifikasi bidang dan struktur untuk mengaturnya ke dalam baris dan kolom.',
  },
  {
    name: 'Unduh atau salin',
    text: 'Klik "Unduh CSV" untuk menyimpan file atau "Salin hasil" untuk segera menggunakannya.',
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

export const content: ToolLocaleContent<JsonToCsvUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Sumber dan Referensi',
  bibliography: [
    { name: 'RFC 4180: Spesifikasi Format CSV', url: 'https://tools.ietf.org/html/rfc4180' },
    { name: 'ECMA-404: Standar Pertukaran Data JSON', url: 'https://www.json.org/json-en.html' },
    { name: 'Microsoft: Impor CSV ke Excel', url: 'https://support.microsoft.com/id-id/office/mengimpor-atau-mengekspor-file-teks-txt-atau-csv-5250ac4c-663c-47ce-937b-339e391393ba' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Mengapa mengonversi JSON ke CSV untuk analisis data Anda?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON adalah format standar untuk API modern, tetapi bukan yang termudah untuk dianalisis secara manusiawi. <strong>Konverter JSON ke CSV</strong> memungkinkan Anda mengubah struktur yang kompleks menjadi baris dan kolom, memfasilitasi manipulasi dalam alat canggih seperti <strong>Microsoft Excel</strong>, Numbers, atau Google Sheets.',
    },
    {
      type: 'title',
      text: 'Privasi Total: Konversi tanpa mengunggah file',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sebagian besar konverter online mengunggah data Anda ke server. Alat kami berbeda: <strong>konversi 100% lokal</strong>. Dengan menggunakan JavaScript di browser Anda, data tidak pernah meninggalkan komputer Anda. Ini sangat penting jika Anda bekerja dengan informasi sensitif, daftar pelanggan, atau laporan internal perusahaan.',
    },
    {
      type: 'title',
      text: 'Tips Teknis untuk konversi yang sempurna',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Pastikan JSON Anda adalah <strong>array objek</strong> (misalnya, [{}, {}]).',
        'Verifikasi bahwa semua objek memiliki properti yang serupa agar kolom CSV tetap konsisten.',
        'Jika Anda memiliki karakter khusus, CSV kami diekspor dalam <strong>UTF-8</strong> untuk menghindari masalah di Excel.',
      ],
    },
  ],
  ui: {
    labelInput: 'JSON Sumber',
    labelOutput: 'Hasil CSV',
    placeholderInput: 'Tempelkan array JSON Anda di sini (misal: [{"id": 1, "name": "Budi"}])',
    placeholderOutput: 'CSV yang dihasilkan akan muncul di sini...',
    btnConvert: 'Konversi Sekarang',
    btnDownload: 'Unduh CSV',
    btnCopy: 'Salin hasil',
    btnClear: 'Bersihkan Semua',
    toastCopied: 'CSV disalin ke papan klip!',
    toastDownloaded: 'Mengunduh file CSV...',
    errorInvalidJson: 'Format JSON tidak valid. Harap periksa data Anda.',
  },
};
