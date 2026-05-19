/* ============================================================
   OSN ACADEMY — app.js
   Logic bersama: auth, session, localStorage, utilities
   ============================================================ */

/* ─── KUNCI STORAGE ──────────────────────────────────────── */
const STORAGE_KEYS = {
  SESSION:   'osn_session',      // { username, role, nama }
  RIWAYAT:   'osn_riwayat',      // array sesi latihan
  PAKET_SEL: 'osn_paket_dipilih' // paket yang sedang dikerjakan
};

/* ─── SESSION ────────────────────────────────────────────── */
const Auth = {
  /** Simpan session setelah login */
  login(username, role, nama) {
    const session = { username, role, nama, loginAt: Date.now() };
    localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(session));
  },

  /** Hapus session */
  logout() {
    localStorage.removeItem(STORAGE_KEYS.SESSION);
    window.location.href = 'index.html';
  },

  /** Ambil session aktif, null jika belum login */
  getSession() {
    const raw = localStorage.getItem(STORAGE_KEYS.SESSION);
    return raw ? JSON.parse(raw) : null;
  },

  /** Cek apakah sudah login; jika belum redirect ke login */
  requireLogin(expectedRole = null) {
    const session = this.getSession();
    if (!session) {
      window.location.href = 'index.html';
      return null;
    }
    if (expectedRole && session.role !== expectedRole) {
      // Role salah, arahkan ke halaman yang sesuai
      if (session.role === 'siswa') {
        window.location.href = 'dashboard-siswa.html';
      } else {
        window.location.href = 'dashboard-tentor.html';
      }
      return null;
    }
    return session;
  }
};

/* ─── RIWAYAT LATIHAN ────────────────────────────────────── */
const Riwayat = {
  /** Ambil semua riwayat */
  getAll() {
    const raw = localStorage.getItem(STORAGE_KEYS.RIWAYAT);
    return raw ? JSON.parse(raw) : [];
  },

  /** Simpan sesi baru */
  simpan(sesi) {
    const semua = this.getAll();
    semua.push(sesi);
    localStorage.setItem(STORAGE_KEYS.RIWAYAT, JSON.stringify(semua));
  },

  /** Ambil riwayat berdasarkan paket tertentu */
  getByPaket(paketId) {
    return this.getAll().filter(s => s.paketId === paketId);
  },

  /** Ambil sesi berdasarkan ID */
  getById(id) {
    return this.getAll().find(s => s.id === id) || null;
  },

  /** Hapus semua riwayat (reset) */
  reset() {
    localStorage.removeItem(STORAGE_KEYS.RIWAYAT);
  },

  /**
   * Buat objek sesi baru
   * @param {string} paketId     - misal 'mi-mudah'
   * @param {string} paketLabel  - misal 'Metode Ilmiah — Mudah'
   * @param {number} skor        - 0–100
   * @param {number} benar       - jumlah soal benar
   * @param {number} salah       - jumlah soal salah
   * @param {number} durasi      - detik yang terpakai
   * @param {Array}  detail      - array { no, soalText, jawaban, kunci, benar }
   */
  buatSesi(paketId, paketLabel, skor, benar, salah, durasi, detail) {
    return {
      id:          'sesi-' + Date.now(),
      paketId,
      paketLabel,
      tanggal:     new Date().toISOString(),
      skor,
      benar,
      salah,
      totalSoal:   benar + salah,
      durasi,      // detik
      detail       // array per soal
    };
  }
};

/* ─── PAKET DIPILIH (antar halaman) ─────────────────────── */
const PaketSession = {
  simpan(paketId, paketLabel, tema) {
    const data = { paketId, paketLabel, tema, dipilihAt: Date.now() };
    localStorage.setItem(STORAGE_KEYS.PAKET_SEL, JSON.stringify(data));
  },

  get() {
    const raw = localStorage.getItem(STORAGE_KEYS.PAKET_SEL);
    return raw ? JSON.parse(raw) : null;
  },

  hapus() {
    localStorage.removeItem(STORAGE_KEYS.PAKET_SEL);
  }
};

/* ─── UTILITAS ───────────────────────────────────────────── */
const Utils = {
  /**
   * Format durasi detik → "MM:SS" atau "X menit Y detik"
   */
  formatDurasi(detik, mode = 'mmss') {
    const m = Math.floor(detik / 60);
    const s = detik % 60;
    if (mode === 'mmss') {
      return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
    if (mode === 'text') {
      if (m === 0) return `${s} detik`;
      if (s === 0) return `${m} menit`;
      return `${m} menit ${s} detik`;
    }
  },

  /**
   * Format tanggal ISO → "Senin, 18 Mei 2025 · 14:32"
   */
  formatTanggal(isoString) {
    const d = new Date(isoString);
    const hari  = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
    const bulan = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
    const jam   = String(d.getHours()).padStart(2, '0');
    const mnt   = String(d.getMinutes()).padStart(2, '0');
    return `${hari[d.getDay()]}, ${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()} · ${jam}:${mnt}`;
  },

  /**
   * Format tanggal pendek → "18 Mei 2025"
   */
  formatTanggalPendek(isoString) {
    const d = new Date(isoString);
    const bulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
    return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
  },

  /**
   * Warna berdasarkan skor
   */
  warnaSkor(skor) {
    if (skor >= 80) return 'var(--success)';
    if (skor >= 60) return 'var(--warning)';
    return 'var(--danger)';
  },

  /**
   * Label predikat berdasarkan skor
   */
  predikat(skor) {
    if (skor >= 90) return { label: 'Luar Biasa!',   emoji: '🏆' };
    if (skor >= 80) return { label: 'Sangat Baik',   emoji: '⭐' };
    if (skor >= 70) return { label: 'Baik',           emoji: '👍' };
    if (skor >= 60) return { label: 'Cukup',          emoji: '📚' };
    return              { label: 'Perlu Berlatih',  emoji: '💪' };
  },

  /**
   * Isi elemen topbar dengan data user
   */
  isiTopbar(session) {
    const elNama = document.getElementById('topbar-nama');
    const elRole = document.getElementById('topbar-role');
    if (elNama) elNama.textContent = session.nama;
    if (elRole) elRole.textContent = session.role === 'tentor' ? 'Tentor' : 'Siswa';
  },

  /**
   * Tampilkan/sembunyikan elemen
   */
  show(el) { if (el) el.style.display = ''; },
  hide(el) { if (el) el.style.display = 'none'; },

  /**
   * Hitung statistik dari semua riwayat
   */
  hitungStatistik(riwayat) {
    if (!riwayat.length) return null;

    const totalSesi  = riwayat.length;
    const rataRata   = Math.round(riwayat.reduce((a, s) => a + s.skor, 0) / totalSesi);
    const skorTinggi = Math.max(...riwayat.map(s => s.skor));
    const skorRendah = Math.min(...riwayat.map(s => s.skor));

    // Hitung per paket
    const perPaket = {};
    riwayat.forEach(s => {
      if (!perPaket[s.paketId]) {
        perPaket[s.paketId] = { label: s.paketLabel, sesi: [], skor: [] };
      }
      perPaket[s.paketId].sesi.push(s);
      perPaket[s.paketId].skor.push(s.skor);
    });

    // Hitung soal yang paling sering salah (berdasarkan nomor soal)
    const salahCount = {};
    riwayat.forEach(s => {
      s.detail.forEach(d => {
        if (!d.benar) {
          const key = `${s.paketId}-${d.no}`;
          salahCount[key] = (salahCount[key] || { count: 0, paket: s.paketLabel, no: d.no });
          salahCount[key].count++;
        }
      });
    });

    const seringGalat = Object.values(salahCount)
      .filter(x => x.count > 0)
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    return { totalSesi, rataRata, skorTinggi, skorRendah, perPaket, seringGalat };
  }
};

/* ─── KONFIRMASI LOGOUT ──────────────────────────────────── */
function handleLogout() {
  if (confirm('Yakin ingin keluar?')) {
    Auth.logout();
  }
}

/* ─── EXPOSE GLOBAL ──────────────────────────────────────── */
window.Auth        = Auth;
window.Riwayat     = Riwayat;
window.PaketSession = PaketSession;
window.Utils       = Utils;
window.handleLogout = handleLogout;
window.STORAGE_KEYS = STORAGE_KEYS;