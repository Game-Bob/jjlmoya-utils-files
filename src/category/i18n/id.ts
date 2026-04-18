import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'file-dan-teks',
  title: 'Alat File dan Teks',
  description: 'Alat online gratis untuk bekerja dengan file dan teks langsung di browser Anda. Konversi clipboard menjadi gambar yang dapat diunduh, tanpa instalasi dan privasi total.',
  seo: [
    {
      type: 'title',
      text: 'Mengapa mengelola file dari browser?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tugas file dan teks sehari-hari — menyimpan tangkapan layar, mengonversi format, mengekstrak teks — biasanya memerlukan penginstalan perangkat lunak berat atau menggunakan layanan online yang mengunggah data Anda ke server eksternal. Alat-alat ini bekerja <strong>100% secara lokal di browser Anda</strong>: tidak ada data Anda yang pernah meninggalkan perangkat Anda.',
    },
    {
      type: 'paragraph',
      html: 'Browser modern memiliki akses asli ke Clipboard API, sistem file lokal, dan mesin pemrosesan gambar. Hal ini memungkinkan replikasi fungsi aplikasi desktop yang paling umum tanpa menginstal apa pun, mendaftar untuk apa pun, atau melihat iklan apa pun.',
    },
    {
      type: 'title',
      text: 'Clipboard: dari salin-tempel ke file sungguhan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Saat Anda mengambil tangkapan layar dengan <strong>Windows + Shift + S</strong> atau <strong>Cmd + Shift + 4</strong>, gambar tersebut mendarat di clipboard tetapi tidak disimpan sebagai file. Untuk mendapatkannya, Anda biasanya harus membuka Paint, Photoshop, atau editor lain, tempel, dan ekspor. Dengan alat clipboard-ke-gambar, seluruh proses dikurangi menjadi <strong>Ctrl+V dan satu klik</strong>.',
    },
    {
      type: 'paragraph',
      html: 'File diunduh dengan nama berdasarkan tanggal dan waktu yang tepat, memudahkan pengaturan tangkapan layar secara kronologis tanpa mengganti namanya secara manual. Format keluarannya adalah PNG, yang mempertahankan kualitas asli tanpa kehilangan apa pun.',
    },
    {
      type: 'title',
      text: 'Privasi berdasarkan desain',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Setiap alat dalam kategori ini dibangun berdasarkan satu prinsip: <strong>data tidak pernah meninggalkan browser</strong>. Tidak ada permintaan ke server eksternal, tidak ada penyimpanan cloud, tidak ada pencatatan aktivitas. Apa pun yang Anda tempel ke alat diproses dalam memori dan diunduh langsung ke disk Anda, tanpa perantara.',
    },
    {
      type: 'list',
      items: [
        '<strong>Tanpa instalasi:</strong> Bekerja langsung di browser pada sistem operasi apa pun.',
        '<strong>Privasi total:</strong> Tidak ada file atau teks yang pernah dikirim ke server mana pun.',
        '<strong>Gratis:</strong> Tidak ada batas penggunaan, tidak ada langganan, tidak ada tanda air.',
        '<strong>Cepat:</strong> Pemrosesan bersifat lokal, sehingga kecepatan bergantung pada perangkat Anda, bukan koneksi.',
      ],
    },
    {
      type: 'title',
      text: 'Masa depan alat produktivitas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'API web modern (Clipboard API, File System Access API, Canvas API) telah menutup kesenjangan antara apa yang dapat dilakukan aplikasi asli dan apa yang dapat dilakukan browser. Setiap alat baru dalam kategori ini memanfaatkan kemampuan ini untuk menghadirkan <strong>fungsionalitas kelas desktop dengan aksesibilitas sebuah URL</strong>.',
    },
  ],
};
