import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FormatStripperUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'hapus-format-teks';
const title = 'Hapus Format Teks Online Gratis — Pembersih Gaya';
const description =
  'Hapus tebal, miring, tautan, dan warna dari teks apa pun. Konversi HTML atau Word ke teks biasa (txt) secara instan dengan pembersih gaya profesional kami.';

const faqData = [
  {
    question: 'Bagaimana cara menghapus tebal dan miring dari sebuah teks?',
    answer:
      'Cukup tempelkan teks Anda ke alat kami. Sistem secara otomatis mendeteksi gaya dan menghapusnya, hanya menyisakan karakter dalam teks biasa, tanpa bobot atau dekorasi tambahan.'},
  {
    question: 'Apakah kompatibel dengan teks dari Microsoft Word atau Google Docs?',
    answer:
      'Ya, ini dirancang khusus untuk itu. Saat menyalin dari Word atau Docs, banyak kode "sampah" yang terbawa. Pembersih kami menghapus semua gaya tersembunyi tersebut, memungkinkan Anda menempelkan teks bersih ke aplikasi lain.'},
  {
    question: 'Dapatkah saya mengonversi HTML ke teks biasa?',
    answer:
      'Tepat sekali. Jika Anda menempelkan cuplikan HTML, alat kami akan menghapus semua tag (seperti <div>, <a>, <strong>) dan hanya mengembalikan konten teks yang dapat dibaca.'},
  {
    question: 'Apakah aman menempelkan informasi rahasia?',
    answer:
      'Sangat aman. Semua pemrosesan dilakukan 100% di browser Anda. Tidak ada data yang dikirim ke server kami, memastikan teks Anda tetap pribadi dan aman setiap saat.'},
];

const howToData = [
  {
    name: 'Salin teks Anda',
    text: 'Salin teks dengan format dari Word, situs web, atau email.'},
  {
    name: 'Tempel di pembersih',
    text: 'Masukkan konten di area input. Penghapusan gaya dilakukan secara otomatis.'},
  {
    name: 'Salin hasilnya',
    text: 'Teks Anda sekarang polos dan bersih. Salin dan gunakan di mana pun Anda mau tanpa masalah format.'},
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }}))};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text}))};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  inLanguage: 'id'};

export const content: ToolLocaleContent<FormatStripperUI> = {
  slug,
  title,
  description,
  bibliography,
  faq: faqData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Apa yang dimaksud dengan "menghapus format" dan mengapa Anda membutuhkannya?',
      level: 2},
    {
      type: 'paragraph',
      html: 'Menghapus format adalah proses <strong>mengubah teks kaya menjadi teks biasa</strong> (Plain Text). Saat kita menyalin informasi dari situs web, eBook, atau dokumen Word, teks tersebut membawa "bagasi tersembunyi": jenis font, ukuran, warna, tautan, dan gaya CSS. Alat kami berfungsi sebagai filter yang menghilangkan semua sampah digital tersebut.'},
    {
      type: 'title',
      text: 'Manfaat menggunakan pembersih teks',
      level: 2},
    {
      type: 'list',
      items: [
        '<strong>Kompatibilitas Universal:</strong> Teks biasa berfungsi di program apa pun, dari email lama hingga CMS modern seperti WordPress.',
        '<strong>Kode Bersih:</strong> Ideal bagi pengembang yang perlu menempelkan teks ke dalam kode mereka tanpa membawa tag HTML atau gaya RTF.',
        '<strong>SEO dan Keterbacaan:</strong> Dengan menghapus format yang tidak teratur, Anda memastikan konten Anda menjaga konsistensi visual situs web Anda.',
        '<strong>Privasi Total:</strong> Proses dilakukan secara lokal. Teks Anda tidak pernah meninggalkan browser Anda.',
      ]},
    {
      type: 'title',
      text: 'Hapus format vs. Salin-Tempel Sederhana',
      level: 2},
    {
      type: 'paragraph',
      html: 'Sering kali, <code>Ctrl + V</code> sederhana membawa format yang tidak diinginkan yang merusak desain dokumen tujuan Anda. Menggunakan <strong>penghapus format</strong> online memastikan Anda hanya menyimpan esensi pesan.'},
  ],
  ui: {
    labelInput: 'Teks sumber (dengan format)',
    labelOutput: 'Teks biasa (bersih)',
    placeholderInput: 'Tempelkan teks dari Word, Web, atau PDF di sini...',
    placeholderOutput: 'Teks bersih akan muncul di sini...',
    btnCopy: 'Salin Hasil',
    btnClear: 'Bersihkan Semua',
    toastCopied: 'Teks bersih disalin!'}};
