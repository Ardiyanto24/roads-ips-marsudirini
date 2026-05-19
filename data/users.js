/* ============================================================
   OSN ACADEMY — users.js
   Data akun pengguna (hardcode)
   Untuk menambah akun, tambahkan objek baru ke array USERS
   ============================================================ */

const USERS = [
  {
    username: 'siswa1',
    password: 'siswa123',
    role:     'siswa',
    nama:     'Siswa 1'
  },
  {
    username: 'siswa2',
    password: 'siswa234',
    role:     'siswa',
    nama:     'Siswa 2'
  },
  {
    username: 'siswa3',
    password: 'siswa345',
    role:     'siswa',
    nama:     'Siswa 3'
  },
  {
    username: 'siswa4',
    password: 'siswa456',
    role:     'siswa',
    nama:     'Siswa 4'
  },
  {
    username: 'siswa5',
    password: 'siswa567',
    role:     'siswa',
    nama:     'Siswa 5'
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