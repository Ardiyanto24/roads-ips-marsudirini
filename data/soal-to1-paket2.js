/* ============================================================
   OSN ACADEMY — soal-to1-paket2.js
   Kelompok : Try Out #1
   Paket    : Paket 2 (B)
   Jumlah   : 10 soal pilihan ganda
   Waktu    : 30 menit (1800 detik)
   ============================================================ */

const PAKET_INFO = {
  id:        'to1-paket2',
  label:     'Try Out #1 — Paket 2',
  tema:      'Try Out #1',
  level:     'paket2',
  waktu:     1800,
  totalSoal: 10
};

const SOAL_LIST = [

  /* ── Soal 1 ─────────────────────────────────────────── */
  {
    no:     1,
    level:  'C4',
    format: 'Benar-Salah',
    soal:   'Perhatikan tabel berikut!',
    gambar: null,
    tabel:  null,
    list: [
      '(1) Angin muson barat bertiup dari Benua Asia ke arah Australia dan membawa banyak uap air sehingga menyebabkan musim hujan di Indonesia',
      '(2) Angin muson timur bertiup dari Benua Australia ke arah Asia dan membawa sedikit uap air sehingga menyebabkan musim kemarau di Indonesia',
      '(3) Angin muson tidak berpengaruh sama sekali terhadap pola pertanian masyarakat Indonesia',
      '(4) Indonesia memiliki dua musim yang berganti setiap tahunnya karena dipengaruhi oleh perubahan arah angin muson'
    ],
    pertanyaan: 'Urutan benar (B) dan salah (S) berdasarkan tabel di atas adalah ....',
    opsi: [
      { key: 'A', teks: 'B-B-S-B' },
      { key: 'B', teks: 'B-S-B-S' },
      { key: 'C', teks: 'S-B-B-S' },
      { key: 'D', teks: 'B-B-B-S' }
    ],
    kunci:      'A',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>A</strong>.'
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
      '(1) Iklim tropis yang hangat sepanjang tahun mendukung kehidupan berbagai jenis makhluk hidup',
      '(2) Aktivitas gunung berapi menyebabkan punahnya berbagai spesies di sekitarnya',
      '(3) Posisi kepulauan menciptakan isolasi geografis yang mendorong terbentuknya spesies-spesies unik',
      '(4) Curah hujan yang tinggi mendukung pertumbuhan hutan hujan tropis yang kaya keanekaragaman hayati',
      '(5) Kondisi tanah yang kering dan berbatu menyebabkan minimnya vegetasi di Indonesia'
    ],
    pertanyaan: 'Faktor yang mendukung tingginya keanekaragaman hayati di Indonesia adalah ....',
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

  /* ── Soal 3 ─────────────────────────────────────────── */
  {
    no:     3,
    level:  'C4',
    format: 'Narasi',
    soal:   'Seorang peneliti membandingkan dua wilayah pesisir di Jawa. Pantai utara Jawa memiliki perairan yang tenang, dasar laut dangkal, dan banyak muara sungai yang mengendapkan lumpur kaya nutrisi. Sementara itu, pantai selatan Jawa memiliki ombak besar dengan arus laut yang kuat, tebing curam, dan air laut yang jernih. Analisis pemanfaatan yang paling tepat untuk kedua wilayah pesisir tersebut adalah ....',
    gambar: null,
    tabel:  null,
    list:   null,
    pertanyaan: null,
    opsi: [
      { key: 'A', teks: 'Pantai utara lebih cocok untuk wisata selancar, sementara pantai selatan lebih cocok untuk budidaya tambak' },
      { key: 'B', teks: 'Pantai utara lebih cocok untuk pelabuhan kapal besar, sementara pantai selatan lebih cocok untuk nelayan tradisional' },
      { key: 'C', teks: 'Pantai utara lebih cocok untuk budidaya tambak ikan dan udang, sementara pantai selatan lebih cocok untuk wisata alam dan olahraga air' },
      { key: 'D', teks: 'Pantai utara lebih cocok untuk pertanian sawah irigasi, sementara pantai selatan lebih cocok untuk perkebunan karet' }
    ],
    kunci:      'C',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>C</strong>.'
  },

  /* ── Soal 4 ─────────────────────────────────────────── */
  {
    no:     4,
    level:  'C4',
    format: 'Multi-pernyataan',
    soal:   'Perhatikan pernyataan berikut!',
    gambar: null,
    tabel:  null,
    list: [
      '(1) Kelompok pemuda desa A dan desa B bersaing memperebutkan juara pertandingan sepak bola antardesa',
      '(2) Dua suku berperang karena sengketa lahan pertanian yang sudah berlangsung lama',
      '(3) Para siswa dari berbagai daerah bekerja sama menyelesaikan proyek sains lingkungan hidup',
      '(4) Keluarga dari daerah berbeda menikahkan putra-putrinya untuk mempererat hubungan kekeluargaan',
      '(5) Dua toko bersaing menurunkan harga produk untuk menarik lebih banyak pelanggan'
    ],
    pertanyaan: 'Pernyataan yang termasuk contoh proses sosial disosiatif adalah ....',
    opsi: [
      { key: 'A', teks: '(1), (2), dan (3)' },
      { key: 'B', teks: '(2), (3), dan (4)' },
      { key: 'C', teks: '(3), (4), dan (5)' },
      { key: 'D', teks: '(1), (2), dan (5)' }
    ],
    kunci:      'D',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>D</strong>.'
  },

  /* ── Soal 5 ─────────────────────────────────────────── */
  {
    no:     5,
    level:  'C3',
    format: 'Narasi',
    soal:   'Perhatikan tiga kondisi berikut!',
    gambar: null,
    tabel:  null,
    list: [
      '(P) Di Desa Nusantara, warga suku Jawa dan suku Batak yang telah lama hidup bersama mulai mengadopsi beberapa kebiasaan satu sama lain, namun keduanya masih mempertahankan identitas budaya masing-masing.',
      '(Q) Di Kota Bhinneka, komunitas Tionghoa dan Melayu yang menikah campuran selama beberapa generasi menghasilkan tradisi baru yang menggabungkan unsur-unsur dari kedua budaya asalnya dan tidak lagi identik dengan salah satunya.',
      '(R) Di Kelurahan Damai, warga dari berbagai agama dan suku masing-masing menjalankan tradisinya sendiri-sendiri secara berdampingan tanpa saling mempengaruhi satu sama lain.'
    ],
    pertanyaan: 'Pasangan konsep yang paling tepat untuk kondisi P, Q, dan R secara berurutan adalah ....',
    opsi: [
      { key: 'A', teks: 'asimilasi, akulturasi, keragaman budaya' },
      { key: 'B', teks: 'akulturasi, asimilasi, keragaman budaya' },
      { key: 'C', teks: 'keragaman budaya, akulturasi, asimilasi' },
      { key: 'D', teks: 'akulturasi, keragaman budaya, asimilasi' }
    ],
    kunci:      'B',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>B</strong>.'
  },

  /* ── Soal 6 ─────────────────────────────────────────── */
  {
    no:     6,
    level:  'C5',
    format: 'Pernyataan A-B',
    soal:   '<strong>Pernyataan A:</strong> Masuknya budaya asing melalui media sosial dan internet menyebabkan sebagian remaja Indonesia mulai meninggalkan adat istiadat dan bahasa daerah mereka.<br><br><strong>Pernyataan B:</strong> Globalisasi informasi mempercepat penyebaran konten budaya asing yang lebih menarik bagi generasi muda dibandingkan budaya lokal, sehingga memengaruhi identitas budaya mereka.<br><br>Berdasarkan pernyataan di atas, hubungan dua pernyataan yang tepat adalah ....',
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

  /* ── Soal 7 ─────────────────────────────────────────── */
  {
    no:     7,
    level:  'C5',
    format: 'Narasi',
    soal:   'Harga bahan bakar minyak (BBM) naik 30%, menyebabkan biaya transportasi dan distribusi barang meningkat sehingga harga berbagai produk di pasar ikut naik. Pada saat yang sama, pemerintah menaikkan upah minimum regional (UMR) sebesar 15%. Evaluasi yang paling tepat tentang dampak kedua kebijakan tersebut terhadap permintaan barang kebutuhan pokok masyarakat adalah ....',
    gambar: null,
    tabel:  null,
    list:   null,
    pertanyaan: null,
    opsi: [
      { key: 'A', teks: 'Permintaan pasti meningkat karena kenaikan UMR selalu berhasil mendorong daya beli masyarakat melebihi kenaikan harga' },
      { key: 'B', teks: 'Permintaan pasti menurun karena kenaikan harga akibat BBM selalu lebih dominan dibandingkan kenaikan upah dalam kondisi apapun' },
      { key: 'C', teks: 'Dampak terhadap permintaan bergantung pada perbandingan antara besarnya kenaikan daya beli dari UMR dan besarnya kenaikan harga — jika harga naik lebih besar dari upah, permintaan cenderung turun' },
      { key: 'D', teks: 'Permintaan barang kebutuhan pokok tidak pernah dipengaruhi perubahan harga maupun pendapatan karena bersifat kebutuhan dasar yang selalu dibeli' }
    ],
    kunci:      'C',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>C</strong>.'
  },

  /* ── Soal 8 ─────────────────────────────────────────── */
  {
    no:     8,
    level:  'C4',
    format: 'Narasi',
    soal:   'Indonesia mengimpor banyak produk elektronik dari luar negeri karena harganya lebih murah dibandingkan produk buatan dalam negeri. Akibatnya, banyak industri elektronik lokal yang tidak mampu bersaing dan terpaksa gulung tikar. Dampak yang paling tepat dari kondisi tersebut bagi perekonomian nasional adalah ....',
    gambar: null,
    tabel:  null,
    list:   null,
    pertanyaan: null,
    opsi: [
      { key: 'A', teks: 'meningkatnya lapangan kerja di sektor elektronik dalam negeri' },
      { key: 'B', teks: 'berkurangnya cadangan devisa negara dan melemahnya industri lokal' },
      { key: 'C', teks: 'meningkatnya kualitas produk elektronik lokal karena persaingan yang sehat' },
      { key: 'D', teks: 'tumbuhnya semangat kewirausahaan di kalangan pengusaha elektronik nasional' }
    ],
    kunci:      'B',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>B</strong>.'
  },

  /* ── Soal 9 ─────────────────────────────────────────── */
  {
    no:     9,
    level:  'C5',
    format: 'Multi-pernyataan',
    soal:   'Perhatikan pernyataan berikut!',
    gambar: null,
    tabel:  null,
    list: [
      '(1) Ki Hajar Dewantara mendirikan Taman Siswa sebagai upaya mencerdaskan bangsa melalui jalur pendidikan',
      '(2) Pangeran Diponegoro memimpin perlawanan bersenjata terhadap Belanda selama lima tahun dalam Perang Jawa',
      '(3) Budi Utomo menjadi organisasi pergerakan nasional pertama yang didirikan pada tahun 1908',
      '(4) RA Kartini memperjuangkan hak pendidikan kaum perempuan Indonesia melalui surat-menyuratnya',
      '(5) Sultan Hasanuddin memimpin pertempuran di Makassar untuk mengusir kekuatan VOC Belanda'
    ],
    pertanyaan: 'Evaluasi yang paling tepat mengenai perbedaan antara strategi perjuangan tokoh pada pernyataan (1), (3), (4) dibandingkan tokoh pada pernyataan (2) dan (5) adalah ....',
    opsi: [
      { key: 'A', teks: 'Strategi bersenjata (2) dan (5) lebih efektif karena berhasil mengusir penjajah secara langsung dari seluruh wilayah Indonesia' },
      { key: 'B', teks: 'Strategi intelektual dan organisatoris (1), (3), (4) lebih berkelanjutan karena membangun kesadaran nasional yang menjadi fondasi pergerakan kemerdekaan jangka panjang' },
      { key: 'C', teks: 'Strategi bersenjata selalu lebih efektif dari strategi intelektual karena memberikan hasil nyata yang bisa langsung dirasakan rakyat' },
      { key: 'D', teks: 'Perjuangan melalui organisasi seperti Budi Utomo tidak memberikan dampak berarti karena tidak ada konfrontasi langsung dengan penjajah' }
    ],
    kunci:      'B',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>B</strong>.'
  },

  /* ── Soal 10 ─────────────────────────────────────────── */
  {
    no:     10,
    level:  'C4',
    format: 'Narasi',
    soal:   'Sistem tanam paksa (<em>Cultuurstelsel</em>) yang diterapkan Pemerintah Kolonial Belanda mewajibkan petani menyerahkan seperlima lahan pertaniannya atau bekerja 66 hari per tahun di perkebunan Belanda. Akibatnya, lahan untuk tanaman pangan berkurang drastis sementara waktu petani tersita untuk kerja paksa. Analisis rantai dampak yang paling tepat dari kebijakan tanam paksa tersebut adalah ....',
    gambar: null,
    tabel:  null,
    list:   null,
    pertanyaan: null,
    opsi: [
      { key: 'A', teks: 'Tanam paksa → meningkatnya produktivitas pertanian → petani semakin sejahtera → stabilitas sosial terjaga' },
      { key: 'B', teks: 'Tanam paksa → berkurangnya lahan dan waktu bertani → gagal panen tanaman pangan → kelaparan dan kematian massal' },
      { key: 'C', teks: 'Tanam paksa → meningkatnya nilai ekspor Belanda → petani memperoleh upah tambahan → ekonomi pedesaan berkembang' },
      { key: 'D', teks: 'Tanam paksa → petani beralih ke sektor industri → urbanisasi meningkat pesat → kemiskinan kota bertambah' }
    ],
    kunci:      'B',
    konsep:     null,
    pembahasan: 'Jawaban yang benar adalah <strong>B</strong>.'
  }

];

window.PAKET_INFO = PAKET_INFO;
window.SOAL_LIST  = SOAL_LIST;