/* ============================================================
   OSN ACADEMY — soal-to1-paket1.js
   Kelompok : Try Out #1
   Paket    : Paket 1 (A)
   Jumlah   : 10 soal pilihan ganda
   Waktu    : 30 menit (1800 detik)
   ============================================================ */

const PAKET_INFO = {
  id:        'to1-paket1',
  label:     'Try Out #1 — Paket 1',
  tema:      'Try Out #1',
  level:     'paket1',
  waktu:     1800,
  totalSoal: 10
};

const SOAL_LIST = [

  /* ── Soal 1 ─────────────────────────────────────────── */
  {
    no:     1,
    level:  'C3',
    format: 'Narasi',
    soal:   'Pak Jono tinggal di dataran rendah dekat rawa-rawa. Tanahnya berwarna gelap kecoklatan, terasa ringan dan berpori, serta mengandung banyak sisa bahan organik yang belum terurai sempurna. Meskipun tampak subur, tanaman padi yang ia tanam sering tumbuh kerdil dan kurang produktif. Jenis tanah yang dimiliki Pak Jono dan alasan paling tepat mengapa padi tumbuh kurang optimal di tanahnya adalah ....',
    gambar: null,
    tabel:  null,
    list:   null,
    pertanyaan: null,
    opsi: [
      { key: 'A', teks: 'tanah vulkanik, karena kekurangan abu mineral dari aktivitas gunung berapi di sekitarnya' },
      { key: 'B', teks: 'tanah gambut, karena bersifat sangat asam dan memiliki aerasi yang buruk sehingga akar padi sulit berkembang' },
      { key: 'C', teks: 'tanah laterit, karena lapisan atasnya telah mengalami pencucian mineral akibat curah hujan yang sangat tinggi' },
      { key: 'D', teks: 'tanah aluvial, karena terlalu banyak mengandung garam mineral dari endapan muara sungai' }
    ],
    kunci:      'B',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>B</strong>.'
  },

  /* ── Soal 2 ─────────────────────────────────────────── */
  {
    no:     2,
    level:  'C4',
    format: 'Multi-pernyataan',
    soal:   'Perhatikan pernyataan berikut!',
    gambar: null,
    tabel:  null,
    list: [
      '(1) Indonesia mendapatkan sinar matahari sepanjang tahun karena terletak di sekitar garis khatulistiwa',
      '(2) Letak astronomis menyebabkan Indonesia memiliki empat musim dalam setahun',
      '(3) Suhu udara di Indonesia cenderung stabil dan hangat sepanjang tahun',
      '(4) Tingginya suhu dan kelembapan udara di Indonesia didukung oleh letak astronomisnya yang berada di sekitar khatulistiwa',
      '(5) Letak astronomis Indonesia menyebabkan terjadinya fenomena aurora borealis di wilayah paling utara Indonesia'
    ],
    pertanyaan: 'Pernyataan yang tepat menggambarkan dampak letak astronomis Indonesia adalah ....',
    opsi: [
      { key: 'A', teks: '(1), (3), dan (4)' },
      { key: 'B', teks: '(1), (2), dan (4)' },
      { key: 'C', teks: '(2), (3), dan (5)' },
      { key: 'D', teks: '(3), (4), dan (5)' }
    ],
    kunci:      'A',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>A</strong>.'
  },

  /* ── Soal 3 ─────────────────────────────────────────── */
  {
    no:     3,
    level:  'C5',
    format: 'Pernyataan A-B',
    soal:   '<strong>Pernyataan A:</strong> Indonesia terletak di antara dua samudra yaitu Samudra Hindia dan Samudra Pasifik, serta di antara dua benua yaitu Benua Asia dan Benua Australia.<br><br><strong>Pernyataan B:</strong> Letak geografis tersebut menjadikan Indonesia sebagai jalur perdagangan dan pelayaran internasional yang strategis, serta mempengaruhi keberagaman budaya masyarakatnya.<br><br>Berdasarkan pernyataan di atas, hubungan dua pernyataan yang tepat adalah ....',
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

  /* ── Soal 4 ─────────────────────────────────────────── */
  {
    no:     4,
    level:  'C4',
    format: 'Narasi',
    soal:   'Bu Sari adalah seorang ibu rumah tangga. Setiap hari ia memasak dan membelikan pakaian serta alat tulis untuk anaknya. Ia juga rutin mengajak anak-anaknya berdoa bersama sebelum tidur setiap malam, serta mengajarkan cara bersikap sopan dan menghormati tetangga. Pernyataan yang paling tepat dalam menganalisis fungsi keluarga yang dijalankan Bu Sari adalah ....',
    gambar: null,
    tabel:  null,
    list:   null,
    pertanyaan: null,
    opsi: [
      { key: 'A', teks: 'Bu Sari hanya menjalankan fungsi ekonomi karena seluruh kegiatannya memenuhi kebutuhan materi keluarga' },
      { key: 'B', teks: 'Bu Sari menjalankan fungsi sosialisasi saja karena fokus utamanya adalah mengajarkan sopan santun' },
      { key: 'C', teks: 'Bu Sari menjalankan fungsi ekonomi dan fungsi afeksi karena memenuhi kebutuhan fisik dan kasih sayang' },
      { key: 'D', teks: 'Bu Sari menjalankan fungsi ekonomi, fungsi sosialisasi, dan fungsi keagamaan secara bersamaan' }
    ],
    kunci:      'D',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>D</strong>.'
  },

  /* ── Soal 5 ─────────────────────────────────────────── */
  {
    no:     5,
    level:  'C5',
    format: 'Pernyataan A-B',
    soal:   '<strong>Pernyataan A:</strong> Lembaga pendidikan formal memiliki fungsi utama memberikan pengetahuan dan keterampilan kepada generasi muda melalui proses pembelajaran yang sistematis dan terstruktur.<br><br><strong>Pernyataan B:</strong> Karena lembaga pendidikan berperan besar dalam membentuk karakter siswa, maka lembaga keluarga tidak lagi memiliki tanggung jawab terhadap sosialisasi nilai dan norma kepada anak.<br><br>Berdasarkan pernyataan di atas, hubungan dua pernyataan yang tepat adalah ....',
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
    kunci:      'C',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>C</strong>.'
  },

  /* ── Soal 6 ─────────────────────────────────────────── */
  {
    no:     6,
    level:  'C4',
    format: 'Narasi',
    soal:   'Bu Ratna memiliki usaha di bidang pangan. Ia membeli gabah langsung dari petani di desa, kemudian menyewakannya ke penggilingan padi untuk dijadikan beras, mengemasnya dalam karung berlabel, lalu mengangkutnya dengan truk untuk dijual kepada pedagang grosir di kota. Analisis kegiatan ekonomi yang paling tepat menggambarkan aktivitas Bu Ratna adalah ....',
    gambar: null,
    tabel:  null,
    list:   null,
    pertanyaan: null,
    opsi: [
      { key: 'A', teks: 'Bu Ratna hanya melakukan distribusi karena kegiatannya berfokus memindahkan beras dari desa ke kota' },
      { key: 'B', teks: 'Bu Ratna melakukan produksi sekunder saja karena mengubah gabah menjadi beras di penggilingan' },
      { key: 'C', teks: 'Bu Ratna melakukan konsumsi antara karena menggunakan gabah sebagai bahan untuk menghasilkan produk lain' },
      { key: 'D', teks: 'Bu Ratna melakukan kegiatan produksi dan distribusi sekaligus — produksi saat mengubah gabah menjadi beras, dan distribusi saat mengangkut serta menjualnya ke pedagang grosir' }
    ],
    kunci:      'D',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>D</strong>.'
  },

  /* ── Soal 7 ─────────────────────────────────────────── */
  {
    no:     7,
    level:  'C5',
    format: 'Pernyataan A-B',
    soal:   '<strong>Pernyataan A:</strong> Koperasi adalah badan usaha yang berasaskan kekeluargaan dan bertujuan untuk meningkatkan kesejahteraan seluruh anggotanya.<br><br><strong>Pernyataan B:</strong> Keuntungan koperasi atau Sisa Hasil Usaha (SHU) dibagikan kepada seluruh anggota berdasarkan besarnya jumlah modal yang disetorkan masing-masing anggota.<br><br>Berdasarkan pernyataan di atas, hubungan dua pernyataan yang tepat adalah ....',
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
    kunci:      'C',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>C</strong>.'
  },

  /* ── Soal 8 ─────────────────────────────────────────── */
  {
    no:     8,
    level:  'C3',
    format: 'Narasi',
    soal:   'Perhatikan tiga kegiatan ekonomi berikut!',
    gambar: null,
    tabel:  null,
    list: [
      '(1) Pak Dono berangkat melaut setiap pagi untuk menangkap ikan di perairan sekitar desanya, kemudian menjual hasil tangkapannya di Tempat Pelelangan Ikan (TPI).',
      '(2) Bu Rani mengambil ikan segar dari TPI setiap pagi dan mengantarkannya ke restoran-restoran di kota menggunakan kendaraan berpendingin.',
      '(3) Pak Wahyu membeli ikan segar dari Bu Rani, kemudian mengolahnya menjadi ikan asap dengan teknik pengasapan tradisional untuk dijual ke berbagai toko oleh-oleh.'
    ],
    pertanyaan: 'Jenis kegiatan ekonomi yang dilakukan oleh tokoh (1), (2), dan (3) secara berurutan adalah ....',
    opsi: [
      { key: 'A', teks: 'produksi, distribusi, konsumsi' },
      { key: 'B', teks: 'produksi, distribusi, produksi' },
      { key: 'C', teks: 'distribusi, produksi, konsumsi' },
      { key: 'D', teks: 'konsumsi, distribusi, produksi' }
    ],
    kunci:      'B',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>B</strong>.'
  },

  /* ── Soal 9 ─────────────────────────────────────────── */
  {
    no:     9,
    level:  'C3',
    format: 'Narasi',
    soal:   'Seorang arkeolog menemukan dua peninggalan sejarah di Jawa Tengah. Peninggalan pertama berupa bangunan berundak yang dihiasi relief yang menggambarkan perjalanan hidup Pangeran Siddharta menuju pencerahan, dengan stupa besar di puncaknya. Peninggalan kedua berupa bangunan yang dihiasi relief kisah Ramayana dan Mahabharata, serta terdapat arca Dewa Siwa sebagai tokoh utama di bilik utamanya. Berdasarkan karakteristik tersebut, peninggalan pertama dan kedua secara berurutan merupakan bukti masuknya pengaruh ....',
    gambar: null,
    tabel:  null,
    list:   null,
    pertanyaan: null,
    opsi: [
      { key: 'A', teks: 'Hindu dan Islam' },
      { key: 'B', teks: 'Buddha dan Hindu' },
      { key: 'C', teks: 'Islam dan Hindu' },
      { key: 'D', teks: 'Hindu dan Buddha' }
    ],
    kunci:      'B',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>B</strong>.'
  },

  /* ── Soal 10 ─────────────────────────────────────────── */
  {
    no:     10,
    level:  'C5',
    format: 'Pernyataan A-B',
    soal:   '<strong>Pernyataan A:</strong> Kerajaan Sriwijaya berhasil menguasai jalur perdagangan di Selat Malaka dan berkembang menjadi kerajaan maritim terbesar di Asia Tenggara karena letaknya yang sangat strategis di jalur pelayaran internasional.<br><br><strong>Pernyataan B:</strong> Kejayaan perdagangan Sriwijaya di Selat Malaka secara langsung menjadikan Sriwijaya memiliki armada militer terkuat sekaligus teknologi pertanian paling maju di seluruh kawasan Asia Tenggara pada masanya.<br><br>Berdasarkan pernyataan di atas, hubungan dua pernyataan yang tepat adalah ....',
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
    kunci:      'C',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>C</strong>.'
  }

];

window.PAKET_INFO = PAKET_INFO;
window.SOAL_LIST  = SOAL_LIST;