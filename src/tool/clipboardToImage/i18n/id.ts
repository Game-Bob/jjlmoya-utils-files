import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClipboardToImageUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'papan-klip-ke-png';
const title = 'Papan Klip ke PNG: Unduh Tangkapan Layar dan Gambar';
const description =
  'Alat online untuk mengonversi konten papan klip (tangkapan layar, gambar) menjadi file PNG yang dapat langsung diunduh. Proses 100% pribadi dan cepat.';

const faqData = [
  {
    question: 'Apakah aman menempelkan tangkapan layar saya di sini?',
    answer:
      'Ya, ini sangat aman. Alat ini bekerja 100% secara lokal di browser Anda. Data papan klip Anda tidak pernah dikirim ke server mana pun, menjamin privasi total Anda.'},
  {
    question: 'Jenis konten apa yang bisa saya konversi?',
    answer:
      'Anda dapat menempelkan gambar yang disalin (tangkapan layar, foto), teks yang akan dikonversi menjadi file .txt, atau bahkan elemen HTML. Penggunaan yang paling umum adalah menyimpan tangkapan layar cepat sebagai file PNG.'},
  {
    question: 'Mengapa tombol tempel tidak berfungsi?',
    answer:
      'Karena batasan keamanan browser, terkadang tombol "Tempel" memerlukan izin eksplisit. Jika tidak berhasil, Anda selalu dapat menggunakan pintasan keyboard standar: Ctrl+V (Windows) atau Cmd+V (Mac).'},
  {
    question: 'Apakah ini berfungsi di perangkat seluler?',
    answer:
      'Ya, Anda dapat menggunakan fungsi tempel ponsel Anda untuk melihat konten, meskipun pengalamannya dioptimalkan untuk pengelolaan tangkapan layar cepat di desktop.'},
];

const howToData = [
  {
    name: 'Salin konten',
    text: 'Ambil tangkapan layar atau salin gambar/teks dari aplikasi apa pun.'},
  {
    name: 'Tempel di area',
    text: 'Klik pada area tempel ili gunakan pintasan Ctrl+V / Cmd+V untuk memuat konten.'},
  {
    name: 'Pratinjau',
    text: 'Pastikan konten sudah benar di area pratinjau yang akan segera muncul.'},
  {
    name: 'Unduh file',
    text: 'Tekan tombol unduh untuk menyimpan konten sebagai file asli di komputer Anda.'},
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

export const content: ToolLocaleContent<ClipboardToImageUI> = {
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
      text: 'Cara menyimpan gambar papan klip sebagai file',
      level: 2},
    {
      type: 'paragraph',
      html: 'Alat online gratis ini memungkinkan Anda <strong>mengonversi konten papan klip menjadi file gambar</strong> (PNG) secara instan. Ini adalah solusi sempurna saat Anda telah mengambil tangkapan layar (Windows + Shift + S) atau menyalin gambar dari web dan perlu menyimpannya di komputer tanpa membuka editor berat seperti Photoshop atau Paint.'},
    {
      type: 'title',
      text: 'Mengapa menggunakan konverter papan klip ini?',
      level: 2},
    {
      type: 'list',
      items: [
        '<strong>Cepat:</strong> Cukup tekan <code>Ctrl + V</code> dan unduh. Tanpa langkah perantara.',
        '<strong>Privasi:</strong> Seluruh proses dilakukan di browser Anda. Gambar Anda <strong>tidak pernah diunggah ke server mana pun</strong>.',
        '<strong>Kualitas asli:</strong> Kami mengambil data mentah dari papan klip, memastikan gambar yang diunduh menjaga kualitas setinggi mungkin.',
        '<strong>Organisasi otomatis:</strong> File diunduh dengan nama berdasarkan tanggal dan waktu yang tepat, memudahkan pengaturan tangkapan layar Anda.',
      ]},
    {
      type: 'title',
      text: 'Pertanyaan yang sering diajukan',
      level: 2},
    {
      type: 'title',
      text: 'Apakah ini berfungsi dengan tangkapan layar?',
      level: 3},
    {
      type: 'paragraph',
      html: 'Ya, ini sangat ideal untuk menyimpan tangkapan layar dengan cepat yang dibuat dengan snipping tool Windows atau Mac.'},
    {
      type: 'title',
      text: 'Format apa yang didukung?',
      level: 3},
    {
      type: 'paragraph',
      html: 'Saat ini alat secara otomatis mendeteksi dan mengonversi gambar apa pun di papan klip ke format PNG untuk menjamin kompatibilitas dan transparansi.'},
  ],
  ui: {
    labelCtrlV: 'Tekan Ctrl + V di mana saja',
    labelClickPaste: 'atau klik di sini untuk menempel',
    btnClear: 'Bersihkan',
    btnDownload: 'Unduh',
    privacyMsg: 'Seluruh proses 100% lokal. Gambar Anda tidak pernah meninggalkan browser Anda.'}};
