import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashVerifierUI } from '../ui';

const slug = 'verifikasi-hash-file';
const title = 'Verifikator Hash Online — SHA 256, MD5 dan SHA 1';
const description =
  'Hitung dan verifikasi integritas file Anda dengan membandingkan tanda tangan digital SHA256, MD5, atau SHA1. Pastikan unduhan Anda tidak diubah.';

const faqData = [
  {
    question: 'Bagaimana cara memverifikasi jika sebuah file telah dimodifikasi?',
    answer:
      'Cara paling aman adalah dengan membandingkan Hash-nya. Hash adalah sidik jari digital yang unik. Jika satu bit saja dari file berubah, Hash-nya akan sangat berbeda. Dengan membandingkan Hash yang diperoleh dengan yang disediakan oleh penulis, Anda dapat menjamin integritasnya.',
  },
  {
    question: 'Algoritma mana yang lebih baik: MD5 atau SHA-256?',
    answer:
      'MD5 sangat cepat tetapi dianggap kurang aman terhadap serangan yang disengaja. SHA-256 adalah standar keamanan saat ini dan jauh lebih sulit untuk "dipalsukan". Untuk sebagian besar pemeriksaan integritas file, SHA-256 adalah opsi yang disarankan.',
  },
  {
    question: 'Mengapa Hash berubah ketika saya mengganti nama file?',
    answer:
      'Sebenarnya, mengganti nama file TIDAK mengubah nilai Hash-nya. Hash dihitung berdasarkan konten internal (byte) dari file tersebut, bukan nama atau tanggal pembuatannya. Jika Hash berubah, itu karena data internalnya telah dimodifikasi.',
  },
  {
    question: 'Apakah file saya diunggah ke server untuk menghitung Hash?',
    answer:
      'Tidak. Alat kami menggunakan Web Crypto API, yang berarti semua penghitungan dilakukan secara lokal di browser Anda. File Anda tidak pernah meninggalkan komputer Anda, menjamin privasi 100% dan jauh lebih cepat karena tidak diperlukan pengunggahan.',
  },
];

const howToData = [
  {
    name: 'Pilih file Anda',
    text: 'Tarik atau pilih file yang ingin Anda verifikasi di alat ini.',
  },
  {
    name: 'Pilih algoritma',
    text: 'Pilih SHA-256, MD5, atau SHA-1 tergantung pada tanda tangan yang Anda miliki.',
  },
  {
    name: 'Bandingkan hasilnya',
    text: 'Tempelkan Hash yang diharapkan dan sistem akan memberi tahu Anda seketika jika cocok (Berhasil) atau jika berbeda (Gagal).',
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

export const content: ToolLocaleContent<HashVerifierUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Sumber dan Referensi',
  bibliography: [
    {
      name: 'NIST: Standar Fungsi Hash',
      url: 'https://csrc.nist.gov/projects/hash-functions',
    },
    {
      name: 'MDN: Web Crypto API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API',
    },
    {
      name: 'Wikipedia: Fungsi Hash Kriptografi',
      url: 'https://id.wikipedia.org/wiki/Fungsi_hash_kriptografi',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Apa itu Hash file dan mengapa itu penting untuk keamanan Anda?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Hash adalah <strong>sidik jari digital</strong> yang unik untuk setiap file. Ini adalah string alfanumerik yang dihasilkan oleh algoritma matematika (seperti SHA-256). Fitur utamanya adalah "satu arah": Anda dapat memperoleh Hash dari sebuah file, tetapi Anda tidak dapat merekonstruksi file tersebut dari Hash-nya.',
    },
    {
      type: 'paragraph',
      html: 'Menggunakan <strong>verifikator hash online</strong> sangat penting saat mengunduh perangkat lunak, gambar ISO, atau dokumen sensitif. Penulis biasanya memublikasikan MD5 atau SHA256 dari file mereka sehingga Anda dapat memverifikasi bahwa apa yang Anda unduh persis seperti yang mereka unggah, tanpa korupsi atau penyuntikan berbahaya.',
    },
    {
      type: 'title',
      text: 'SHA-256 vs MD5: Mana yang harus Anda gunakan?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Algoritma <strong>MD5</strong> sangat populer selama bertahun-tahun karena kecepatannya, tetapi saat ini dianggap tidak aman secara kriptografi karena rentan terhadap "tabrakan". Namun, ini masih digunakan untuk pemeriksaan integritas sederhana (unduhan yang rusak).',
    },
    {
      type: 'paragraph',
      html: 'Jika Anda mencari keamanan maksimum, <strong>SHA-256</strong> (bagian dari keluarga SHA-2) adalah standar yang direkomendasikan oleh lembaga keamanan di seluruh dunia. Hampir tidak mungkin bagi dua file berbeda untuk menghasilkan Hash SHA-256 yang sama.',
    },
    {
      type: 'title',
      text: 'Privasi Total: Penghitungan 100% di browser Anda',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Tidak Perlu Pengunggahan',
      html: '<p>Alat kami menggunakan kekuatan komputer Anda untuk memproses file. Dengan menggunakan <strong>Web Crypto API</strong>, kami tidak perlu "mengunggah" file ke server mana pun. Ini berarti Anda dapat memverifikasi file berukuran beberapa gigabyte dalam hitungan detik, tanpa menghabiskan bandwidth internet Anda dan memastikan bahwa konten file Anda tidak pernah meninggalkan perangkat Anda.</p>',
    },
  ],
  ui: {
    labelFile: 'Pilih atau tarik file',
    labelAlgorithm: 'Pilih Algoritma',
    labelExpectedHash: 'Hash yang Diharapkan (opsional)',
    labelStatus: 'Status Perbandingan',
    placeholderHash: 'Tempelkan hash yang disediakan oleh penulis di sini...',
    btnCompare: 'Verifikasi Integritas',
    btnClear: 'Bersihkan Semua',
    toastCopied: 'Hash terhitung disalin!',
    statusMatch: 'Hash cocok! File ini asli.',
    statusMismatch: 'Hash TIDAK cocok. File mungkin rusak atau telah diubah.',
    statusWaiting: 'Menunggu hash yang diharapkan untuk membandingkan...',
  },
};
