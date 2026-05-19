/* ============================================================
   OSN ACADEMY — users.js
   Data akun pengguna (hardcode)
   Untuk menambah akun, tambahkan objek baru ke array USERS
   ============================================================ */

const USERS = [
  {
    username: 'Kanaya',
    password: 'Kanaya123',
    role:     'siswa',
    nama:     'Kanaya'
  },
  {
    username: 'Jorrel',
    password: 'Jorrel123',
    role:     'siswa',
    nama:     'Jorrel'
  },
  {
    username: 'Satrio',
    password: 'Satrio123',
    role:     'siswa',
    nama:     'Satrio'
  },
  {
    username: 'Keenan',
    password: 'Keenan123',
    role:     'siswa',
    nama:     'Keenan'
  },
  {
    username: 'Arjuna',
    password: 'Arjuna123',
    role:     'siswa',
    nama:     'Arjuna'
  },
  {
    username: 'tentor1',
    password: 'tentor123',
    role:     'tentor',
    nama:     'Tentor'
  }
];

/**
 * Cek login
 * @returns objek user jika cocok, null jika tidak
 */
function cekLogin(username, password) {
  return USERS.find(
    u => u.username === username.trim() && u.password === password
  ) || null;
}

window.USERS    = USERS;
window.cekLogin = cekLogin;