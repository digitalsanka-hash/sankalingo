/* ── Kenyamanan & keterjangkauan (accessibility) ───────────────────
   Satu tempat untuk semua yang membuat aplikasi enak dipakai siapa pun:
   ukuran teks, jenis huruf, kontras, gerak, jarak baris, ukuran tombol,
   mode tenang, dan mode luring. Preferensi disimpan terpisah dari
   kemajuan belajar supaya tidak ikut terhapus saat mengatur ulang data. */

const KEY = 'fasih.comfort';

export const BAWAAN = {
  tema:      'dark',     // dark | light | sistem
  skala:     100,        // 85 … 170  (persen ukuran teks)
  huruf:     'bawaan',   // bawaan | mudah | serif | disleksia
  baris:     'normal',   // rapat | normal | longgar
  kontras:   'normal',   // normal | tinggi
  gerak:     'auto',     // auto | kurangi
  sentuh:    'normal',   // normal | besar   (ukuran tombol)
  fokus:     'normal',   // normal | tebal   (cincin fokus papan tik)
  latar:     'nyala',    // nyala | mati     (gradien latar)
  tenang:    false,      // sembunyikan XP, rentetan, lencana
  lebarBaca: 'normal',   // sempit | normal | lebar
  bantuan:   true        // tampilkan tip bantuan di halaman
};

let P = muat();

function muat() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...BAWAAN, ...JSON.parse(raw) } : { ...BAWAAN };
  } catch { return { ...BAWAAN }; }
}

function simpan() {
  try { localStorage.setItem(KEY, JSON.stringify(P)); } catch { /* penuh */ }
}

const pendengar = new Set();
export const onComfort = fn => { pendengar.add(fn); return () => pendengar.delete(fn); };

export const comfort = () => P;

export function setComfort(patch) {
  P = { ...P, ...patch };
  simpan(); terapkan();
  pendengar.forEach(f => { try { f(P); } catch (e) { console.error(e); } });
}

export function resetComfort() { setComfort({ ...BAWAAN }); }

/* ── Menerapkan ke dokumen ────────────────────────────────────── */
const mediaGelap = window.matchMedia('(prefers-color-scheme: dark)');

export function terapkan() {
  const r = document.documentElement;
  const tema = P.tema === 'sistem' ? (mediaGelap.matches ? 'dark' : 'light') : P.tema;
  r.dataset.theme    = tema;
  r.dataset.huruf    = P.huruf;
  r.dataset.baris    = P.baris;
  r.dataset.kontras  = P.kontras;
  r.dataset.sentuh   = P.sentuh;
  r.dataset.fokus    = P.fokus;
  r.dataset.latar    = P.latar;
  r.dataset.lebar    = P.lebarBaca;
  r.dataset.gerak    = P.gerak;
  r.classList.toggle('mode-tenang', !!P.tenang);
  r.style.setProperty('--fs-scale', (P.skala / 100).toFixed(3));
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = tema === 'dark' ? '#080a14' : '#f6f6fb';
}

mediaGelap.addEventListener('change', () => { if (P.tema === 'sistem') terapkan(); });

/* Hormati setelan sistem saat pertama kali dibuka. */
export function ikutiSistemPertamaKali() {
  if (localStorage.getItem(KEY)) return;
  const kurangiGerak = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const kontrasTinggi = window.matchMedia('(prefers-contrast: more)').matches;
  const patch = {};
  if (kurangiGerak)  patch.gerak = 'kurangi';
  if (kontrasTinggi) patch.kontras = 'tinggi';
  if (Object.keys(patch).length) setComfort(patch);
}

/* ── Daftar pilihan untuk halaman Pengaturan ──────────────────── */
export const PILIHAN = {
  tema: [
    ['dark',   'Gelap',       'Nyaman untuk mata di ruangan redup'],
    ['light',  'Terang',      'Lebih jelas di bawah cahaya matahari'],
    ['sistem', 'Ikut sistem', 'Berubah sendiri mengikuti perangkat']
  ],
  huruf: [
    ['bawaan',    'Bawaan',          'Plus Jakarta Sans — bulat dan modern'],
    ['mudah',     'Mudah dibaca',    'Huruf sistem, jarak antarhuruf dilebarkan'],
    ['serif',     'Serif',           'Berkait — enak untuk membaca teks panjang'],
    ['disleksia', 'Ramah disleksia', 'Jarak huruf & baris lebar, rata kiri, tanpa miring']
  ],
  baris:  [['rapat', 'Rapat', ''], ['normal', 'Normal', ''], ['longgar', 'Longgar', '']],
  kontras:[['normal', 'Normal', ''], ['tinggi', 'Tinggi', 'Teks dan garis dipertegas']],
  gerak:  [['auto', 'Normal', ''], ['kurangi', 'Kurangi gerak', 'Matikan animasi geser dan pudar']],
  sentuh: [['normal', 'Normal', ''], ['besar', 'Besar', 'Tombol minimal 48px — mudah ditekan']],
  fokus:  [['normal', 'Normal', ''], ['tebal', 'Tebal', 'Kotak fokus papan tik lebih terlihat']],
  latar:  [['nyala', 'Nyala', ''], ['mati', 'Polos', 'Hilangkan gradien latar']],
  lebarBaca: [['sempit', 'Sempit', '55 huruf per baris'], ['normal', 'Normal', '72 huruf'],
              ['lebar', 'Lebar', 'Pakai seluruh layar']]
};

/* ── Mode luring ──────────────────────────────────────────────── */
export function pantauJaringan(onChange) {
  const kirim = () => onChange(navigator.onLine);
  window.addEventListener('online', kirim);
  window.addEventListener('offline', kirim);
  kirim();
}

/* ── Pasang sebagai aplikasi (PWA) ────────────────────────────── */
let promptPasang = null;
const pasangListener = new Set();
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  promptPasang = e;
  pasangListener.forEach(f => f(true));
});
window.addEventListener('appinstalled', () => {
  promptPasang = null;
  pasangListener.forEach(f => f(false));
});
export const bisaDipasang = () => !!promptPasang;
export const onBisaDipasang = fn => { pasangListener.add(fn); return () => pasangListener.delete(fn); };
export async function pasangAplikasi() {
  if (!promptPasang) return 'tidak-tersedia';
  promptPasang.prompt();
  const { outcome } = await promptPasang.userChoice;
  if (outcome === 'accepted') promptPasang = null;
  return outcome;
}
export const sudahTerpasang = () =>
  window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;

terapkan();
