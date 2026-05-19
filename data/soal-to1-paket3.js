/* ============================================================
   OSN ACADEMY — soal-to1-paket3.js
   Kelompok : Try Out #1
   Paket    : Paket 3 (C)
   Jumlah   : 10 soal pilihan ganda
   Waktu    : 30 menit (1800 detik)
   ============================================================ */

const PAKET_INFO = {
  id:        'to1-paket3',
  label:     'Try Out #1 — Paket 3',
  tema:      'Try Out #1',
  level:     'paket3',
  waktu:     1800,
  totalSoal: 10
};

const SOAL_LIST = [

  /* ── Soal 1 ─────────────────────────────────────────── */
  {
    no:     1,
    level:  'C4',
    format: 'Multi-pernyataan',
    soal:   'Perhatikan pernyataan berikut tentang dampak pembagian zona waktu di Indonesia!',
    gambar: null,
    tabel:  null,
    list: [
      '(1) Perbedaan zona waktu antara WIB dan WIT mencapai dua jam karena Indonesia membentang luas dari barat ke timur berdasarkan letak garis bujur',
      '(2) Matahari terbit lebih dahulu di wilayah Indonesia bagian timur dibandingkan wilayah bagian barat',
      '(3) Perbedaan zona waktu menyebabkan perbedaan iklim dan curah hujan yang signifikan antara wilayah barat dan timur Indonesia',
      '(4) Pengusaha yang menjadwalkan rapat antara Jakarta (WIB) dan Jayapura (WIT) harus memperhitungkan selisih waktu dua jam',
      '(5) Pembagian zona waktu di Indonesia adalah faktor utama yang menyebabkan Indonesia memiliki dua musim dalam setahun'
    ],
    pertanyaan: 'Pernyataan yang tepat mengenai dampak pembagian zona waktu di Indonesia adalah ....',
    opsi: [
      { key: 'A', teks: '(1), (2), dan (3)' },
      { key: 'B', teks: '(1), (2), dan (4)' },
      { key: 'C', teks: '(2), (3), dan (5)' },
      { key: 'D', teks: '(3), (4), dan (5)' }
    ],
    kunci:      'B',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>B</strong>.'
  },

  /* ── Soal 2 ─────────────────────────────────────────── */
  {
    no:     2,
    level:  'C3',
    format: 'Menjodohkan',
    soal:   'Perhatikan dua tabel berikut! Pasangkan perilaku dengan jenis pelanggarannya yang paling tepat!',
    gambar: null,
    tabel:  null,
    list: [
      'Perilaku: (1) Tidak menjalankan ibadah wajib yang diperintahkan agama — (A) Pelanggaran norma kesopanan',
      'Perilaku: (2) Menerobos lampu merah saat berkendara di jalan raya — (B) Pelanggaran norma agama',
      'Perilaku: (3) Berbicara kasar dan tidak sopan kepada orang yang lebih tua — (C) Pelanggaran norma hukum',
      'Perilaku: (4) Mengambil barang milik orang lain tanpa izin untuk kepentingan pribadi — (D) Pelanggaran norma kesusilaan'
    ],
    pertanyaan: 'Pasangan yang paling tepat adalah ....',
    opsi: [
      { key: 'A', teks: '1B, 2C, 3A, 4D' },
      { key: 'B', teks: '1A, 2C, 3B, 4D' },
      { key: 'C', teks: '1B, 2D, 3A, 4C' },
      { key: 'D', teks: '1C, 2B, 3A, 4D' }
    ],
    kunci:      'A',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>A</strong>.'
  },

  /* ── Soal 3 ─────────────────────────────────────────── */
  {
    no:     3,
    level:  'C4',
    format: 'Multi-pernyataan',
    soal:   'Perhatikan pernyataan berikut!',
    gambar: null,
    tabel:  null,
    list: [
      '(1) Kemudahan mengakses informasi dan pengetahuan dari seluruh penjuru dunia melalui internet',
      '(2) Munculnya budaya konsumtif akibat promosi berlebihan produk-produk luar negeri',
      '(3) Kemudahan pertukaran ilmu pengetahuan dan teknologi antarbangsa',
      '(4) Melemahnya nilai-nilai budaya lokal akibat dominasi budaya asing yang masuk',
      '(5) Kemudahan berkomunikasi dengan warga negara lain melalui berbagai platform media sosial'
    ],
    pertanyaan: 'Pernyataan yang menunjukkan dampak positif globalisasi di bidang komunikasi dan informasi adalah ....',
    opsi: [
      { key: 'A', teks: '(1), (2), dan (3)' },
      { key: 'B', teks: '(1), (3), dan (5)' },
      { key: 'C', teks: '(2), (3), dan (4)' },
      { key: 'D', teks: '(3), (4), dan (5)' }
    ],
    kunci:      'B',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>B</strong>.'
  },

  /* ── Soal 4 ─────────────────────────────────────────── */
  {
    no:     4,
    level:  'C5',
    format: 'Pernyataan A-B',
    soal:   '<strong>Pernyataan A:</strong> Perdagangan bebas di kawasan ASEAN membuka peluang masuknya produk-produk luar negeri dengan harga yang lebih murah ke pasar Indonesia.<br><br><strong>Pernyataan B:</strong> Produk-produk Usaha Mikro, Kecil, dan Menengah (UMKM) Indonesia yang belum kompetitif dari segi harga dan kualitas akan semakin terancam tanpa dukungan kebijakan pemerintah yang tepat.<br><br>Berdasarkan pernyataan di atas, hubungan dua pernyataan yang tepat adalah ....',
    gambar: null,
    tabel:  null,
    list:   null,
    pertanyaan: null,
    opsi: [
      { key: 'A', teks: 'pernyataan A benar, pernyataan B benar, dan ada hubungan' },
      { key: 'B', teks: 'pernyataan A benar, pernyataan B benar, tetapi tidak ada hubungan' },
      { key: 'C', teks: 'pernyataan A benar, pernyataan B salah' },
      { key: 'D', teks: 'pernyataan A salah, pernyataan B benar' }
    ],
    kunci:      'A',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>A</strong>.'
  },

  /* ── Soal 5 ─────────────────────────────────────────── */
  {
    no:     5,
    level:  'C4',
    format: 'Narasi',
    soal:   'Perhatikan tiga situasi penggunaan uang berikut!',
    gambar: null,
    tabel:  null,
    list: [
      '(P) Pak Budi membandingkan harga motor merek X seharga Rp18 juta dengan merek Y seharga Rp21 juta sebelum memutuskan mana yang akan ia beli.',
      '(Q) Ibu Sari rutin menyimpan sebagian gajinya di tabungan bank setiap bulan agar bisa digunakan untuk biaya pendidikan anak di masa mendatang.',
      '(R) Dian membayar tagihan listrik sebesar Rp350.000 kepada petugas yang datang ke rumahnya.'
    ],
    pertanyaan: 'Fungsi uang pada situasi P, Q, dan R secara berurutan adalah ....',
    opsi: [
      { key: 'A', teks: 'alat tukar, satuan hitung, penyimpan nilai' },
      { key: 'B', teks: 'satuan hitung, penyimpan nilai, alat tukar' },
      { key: 'C', teks: 'penyimpan nilai, alat tukar, satuan hitung' },
      { key: 'D', teks: 'satuan hitung, alat tukar, penyimpan nilai' }
    ],
    kunci:      'B',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>B</strong>.'
  },

  /* ── Soal 6 ─────────────────────────────────────────── */
  {
    no:     6,
    level:  'C4',
    format: 'Multi-pernyataan',
    soal:   'Perhatikan pernyataan berikut!',
    gambar: null,
    tabel:  null,
    list: [
      '(1) Standar kualitas produk ekspor Indonesia yang belum sepenuhnya memenuhi persyaratan negara tujuan',
      '(2) Kekayaan sumber daya alam yang melimpah sebagai bahan baku utama produk ekspor',
      '(3) Tarif bea masuk yang tinggi yang diberlakukan negara tujuan terhadap produk Indonesia',
      '(4) Banyaknya tenaga kerja terampil yang siap mendukung industri ekspor',
      '(5) Terbatasnya infrastruktur pelabuhan dan logistik untuk mendukung pengiriman barang ekspor'
    ],
    pertanyaan: 'Pernyataan yang merupakan hambatan bagi kegiatan ekspor Indonesia adalah ....',
    opsi: [
      { key: 'A', teks: '(1), (2), dan (3)' },
      { key: 'B', teks: '(1), (3), dan (5)' },
      { key: 'C', teks: '(2), (4), dan (5)' },
      { key: 'D', teks: '(3), (4), dan (5)' }
    ],
    kunci:      'B',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>B</strong>.'
  },

  /* ── Soal 7 ─────────────────────────────────────────── */
  {
    no:     7,
    level:  'C4',
    format: 'Multi-pernyataan',
    soal:   'Perhatikan pernyataan berikut!',
    gambar: null,
    tabel:  null,
    list: [
      '(1) Indonesia mengekspor minyak kelapa sawit kepada negara-negara anggota ASEAN',
      '(2) Indonesia menjadi tuan rumah penyelenggaraan Konferensi Tingkat Tinggi ASEAN',
      '(3) Indonesia berperan aktif dalam AFTA (ASEAN Free Trade Area) untuk memperlancar perdagangan antarnegara',
      '(4) Indonesia mengirim tenaga ahli di bidang pertanian dan kesehatan ke negara ASEAN yang membutuhkan',
      '(5) Indonesia mengimpor produk teknologi tinggi dari Singapura untuk memenuhi kebutuhan dalam negeri'
    ],
    pertanyaan: 'Pernyataan yang menunjukkan peran aktif Indonesia dalam kerja sama ekonomi kawasan ASEAN adalah ....',
    opsi: [
      { key: 'A', teks: '(1), (2), dan (3)' },
      { key: 'B', teks: '(1), (3), dan (4)' },
      { key: 'C', teks: '(2), (3), dan (5)' },
      { key: 'D', teks: '(3), (4), dan (5)' }
    ],
    kunci:      'B',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>B</strong>.'
  },

  /* ── Soal 8 ─────────────────────────────────────────── */
  {
    no:     8,
    level:  'C5',
    format: 'Pernyataan A-B',
    soal:   '<strong>Pernyataan A:</strong> Peristiwa Rengasdengklok terjadi pada tanggal 16 Agustus 1945 ketika golongan muda membawa Soekarno dan Hatta ke Rengasdengklok, Karawang.<br><br><strong>Pernyataan B:</strong> Tujuan golongan muda membawa Soekarno-Hatta ke Rengasdengklok adalah untuk menjauhkan mereka dari pengaruh Jepang dan mendesak mereka segera memproklamasikan kemerdekaan tanpa menunggu keputusan PPKI.<br><br>Berdasarkan pernyataan di atas, hubungan dua pernyataan yang tepat adalah ....',
    gambar: null,
    tabel:  null,
    list:   null,
    pertanyaan: null,
    opsi: [
      { key: 'A', teks: 'pernyataan A benar, pernyataan B benar, dan ada hubungan' },
      { key: 'B', teks: 'pernyataan A benar, pernyataan B benar, tetapi tidak ada hubungan' },
      { key: 'C', teks: 'pernyataan A benar, pernyataan B salah' },
      { key: 'D', teks: 'pernyataan A salah, pernyataan B benar' }
    ],
    kunci:      'A',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>A</strong>.'
  },

  /* ── Soal 9 ─────────────────────────────────────────── */
  {
    no:     9,
    level:  'C4',
    format: 'Multi-pernyataan',
    soal:   'Perhatikan pernyataan berikut!',
    gambar: null,
    tabel:  null,
    list: [
      '(1) Kekalahan Jepang dari Sekutu pada Agustus 1945 menjadi faktor pendorong percepatan proklamasi kemerdekaan Indonesia',
      '(2) Golongan muda membawa Soekarno-Hatta ke Rengasdengklok agar mereka segera memproklamasikan kemerdekaan Indonesia',
      '(3) Naskah proklamasi kemerdekaan dirumuskan dan ditandatangani di Istana Negara Jakarta',
      '(4) Proklamasi kemerdekaan Indonesia dibacakan oleh Soekarno-Hatta pada tanggal 17 Agustus 1945',
      '(5) Setelah proklamasi, Indonesia langsung mendapat pengakuan resmi dari seluruh negara di dunia'
    ],
    pertanyaan: 'Pernyataan yang tepat mengenai proses kemerdekaan Indonesia adalah ....',
    opsi: [
      { key: 'A', teks: '(1), (2), dan (3)' },
      { key: 'B', teks: '(1), (2), dan (4)' },
      { key: 'C', teks: '(2), (4), dan (5)' },
      { key: 'D', teks: '(3), (4), dan (5)' }
    ],
    kunci:      'B',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>B</strong>.'
  },

  /* ── Soal 10 ─────────────────────────────────────────── */
  {
    no:     10,
    level:  'C5',
    format: 'Narasi',
    soal:   'Terdapat dua pandangan mengenai makna Proklamasi Kemerdekaan Indonesia 17 Agustus 1945.<br><br><strong>Pandangan I:</strong> Proklamasi merupakan hasil langsung dari kekalahan Jepang kepada Sekutu; tanpa kekalahan Jepang, Indonesia belum tentu dapat merdeka pada tahun 1945.<br><br><strong>Pandangan II:</strong> Proklamasi merupakan puncak perjuangan panjang seluruh bangsa Indonesia; kekalahan Jepang hanya menjadi momentum yang mempercepat, bukan penyebab utamanya.<br><br>Evaluasi yang paling tepat terhadap kedua pandangan tersebut adalah ....',
    gambar: null,
    tabel:  null,
    list:   null,
    pertanyaan: null,
    opsi: [
      { key: 'A', teks: 'Pandangan I lebih tepat karena secara historis terbukti proklamasi terjadi tepat setelah kekalahan Jepang, sehingga keduanya memiliki hubungan sebab-akibat yang langsung' },
      { key: 'B', teks: 'Pandangan II lebih tepat karena perjuangan bangsa Indonesia sudah berlangsung ratusan tahun sebelum 1945; kekalahan Jepang hanya mempercepat momen yang memang sudah disiapkan' },
      { key: 'C', teks: 'Keduanya salah karena proklamasi terjadi semata-mata karena desakan golongan muda kepada Soekarno-Hatta di Rengasdengklok' },
      { key: 'D', teks: 'Keduanya benar dengan porsi yang benar-benar setara sehingga tidak dapat ditentukan mana yang lebih dominan' }
    ],
    kunci:      'B',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>B</strong>.'
  }

];

window.PAKET_INFO = PAKET_INFO;
window.SOAL_LIST  = SOAL_LIST;