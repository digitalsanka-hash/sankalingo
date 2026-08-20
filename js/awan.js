/* ── Penyelarasan kemajuan lewat Supabase ─────────────────────────

   Dipakai untuk memindahkan kemajuan belajar antar perangkat. Seluruh
   berkas ini TIDAK AKTIF sampai js/awan-config.js diisi; aplikasi tetap
   berjalan penuh tanpanya.

   Dua keputusan rancangan yang perlu diketahui sebelum mengubah apa pun:

   1. TANPA SDK. Supabase punya pustaka resmi, tetapi aplikasi ini
      no-build dan tidak memuat satu pun dependensi. Semua di sini
      memakai REST API Supabase lewat fetch biasa — hasilnya sama,
      tanpa menambah satu byte pun dependensi.

   2. MASUK DENGAN KODE, BUKAN TAUTAN AJAIB. Tautan ajaib Supabase
      kembali membawa token di HASH url (#access_token=…), sedangkan
      aplikasi ini memakai hash untuk RUTE (#/de/kurikulum). Keduanya
      akan bertabrakan. Kode enam angka menghindari seluruh masalah itu
      dan tetap jalan walau tautan email diblokir.                      */

import { AWAN, awanSiap } from './awan-config.js';
import { state, importData } from './state.js';

const KUNCI_SESI = 'fasih.awan.sesi';
const KUNCI_SINKRON = 'fasih.awan.terakhir';

export { awanSiap };

/* ── Sesi ─────────────────────────────────────────────────────── */
export function sesi() {
  try { return JSON.parse(localStorage.getItem(KUNCI_SESI) || 'null'); }
  catch { return null; }
}
const simpanSesi = s => localStorage.setItem(KUNCI_SESI, JSON.stringify(s));
export const masukSebagai = () => sesi()?.user?.email || null;

/* ── Pemanggil REST ───────────────────────────────────────────── */
async function panggil(jalur, { metode = 'GET', badan, pakaiToken = true, tambahan = {} } = {}) {
  if (!awanSiap()) throw new Error('Penyelarasan awan belum dikonfigurasi.');
  const kepala = {
    apikey: AWAN.anon,
    'Content-Type': 'application/json',
    ...tambahan
  };
  if (pakaiToken) {
    const s = await sesiSegar();
    /* Hanya dipasang kalau ADA token pengguna sungguhan.
       Dulu di sini ada cadangan `|| AWAN.anon`. Itu peninggalan dari
       kunci anon lama yang berupa JWT sehingga bisa dipakai sebagai
       Bearer. Kunci Publishable yang baru (sb_publishable_…) BUKAN JWT,
       dan mengirimkannya sebagai Bearer menghasilkan 401 yang pesannya
       tidak menjelaskan apa pun.

       Cadangan itu memang tidak pernah terpakai — setiap pemanggil
       jalur /rest/v1 sudah berhenti lebih dulu bila belum ada sesi.
       Tapi kode mati yang salah lebih berbahaya daripada tidak ada:
       ia menunggu sampai ada yang memanggilnya. */
    if (s?.access_token) kepala.Authorization = `Bearer ${s.access_token}`;
  }
  let r;
  try {
    r = await fetch(AWAN.url.replace(/\/+$/, '') + jalur, {
      method: metode,
      headers: kepala,
      body: badan === undefined ? undefined : JSON.stringify(badan)
    });
  } catch {
    /* fetch hanya melempar kalau permintaannya tidak sampai sama sekali:
       tidak ada internet, alamat proyek salah, atau CORS ditolak. Pesan
       bawaannya ("Failed to fetch") tidak memberi tahu apa pun. */
    throw new Error(navigator.onLine
      ? 'Server tidak terjangkau. Periksa alamat proyek Supabase di js/awan-config.js.'
      : 'Tidak ada koneksi internet. Kemajuanmu tetap aman tersimpan di perangkat ini.');
  }
  const teks = await r.text();
  let isi = null;
  try { isi = teks ? JSON.parse(teks) : null; } catch { isi = teks; }
  if (!r.ok) {
    const pesan = isi?.msg || isi?.error_description || isi?.message || isi?.error || r.statusText;
    throw new Error(pesan || `Gagal (${r.status})`);
  }
  return isi;
}

/** Perbarui token kalau sudah hampir kedaluwarsa. */
async function sesiSegar() {
  const s = sesi();
  if (!s) return null;
  const sisa = (s.expires_at || 0) * 1000 - Date.now();
  if (sisa > 60_000) return s;
  if (!s.refresh_token) return s;
  try {
    const baru = await panggil('/auth/v1/token?grant_type=refresh_token',
      { metode: 'POST', badan: { refresh_token: s.refresh_token }, pakaiToken: false });
    const gabung = { ...baru, expires_at: Math.floor(Date.now() / 1000) + (baru.expires_in || 3600) };
    simpanSesi(gabung);
    return gabung;
  } catch { return s; }
}

/* ── Masuk & keluar ───────────────────────────────────────────── */

/** Kirim kode enam angka ke email. Akun dibuat otomatis bila belum ada. */
export async function kirimKode(email) {
  const bersih = String(email || '').trim().toLowerCase();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(bersih)) throw new Error('Alamat email tidak sah.');
  await panggil('/auth/v1/otp', {
    metode: 'POST', pakaiToken: false,
    badan: { email: bersih, create_user: true }
  });
  return bersih;
}

/** Tukar kode enam angka menjadi sesi. */
export async function verifikasiKode(email, kode) {
  const hasil = await panggil('/auth/v1/verify', {
    metode: 'POST', pakaiToken: false,
    badan: { email: String(email).trim().toLowerCase(), token: String(kode).trim(), type: 'email' }
  });
  if (!hasil?.access_token) throw new Error('Kode tidak diterima.');
  simpanSesi({ ...hasil, expires_at: Math.floor(Date.now() / 1000) + (hasil.expires_in || 3600) });
  return hasil;
}

export function keluar() {
  localStorage.removeItem(KUNCI_SESI);
  localStorage.removeItem(KUNCI_SINKRON);
}

/* ── Gabungan dua kemajuan ────────────────────────────────────── */
/* Inilah bagian yang paling menentukan. Menimpa begitu saja (yang
   terbaru menang) akan MENGHAPUS kemajuan yang dibuat di perangkat
   lain — misalnya belajar di ponsel saat laptop sedang mati.

   Karena itu penggabungan dilakukan per bidang, dan dibuat idempoten:
   menggabung dua kali menghasilkan hal yang sama dengan sekali.      */
export function gabungKemajuan(a, b) {
  if (!a) return b; if (!b) return a;
  const baru = (x, y) => ((x?.updatedAt || 0) >= (y?.updatedAt || 0) ? x : y);
  const utama = baru(a, b), sekunder = utama === a ? b : a;
  const g = { ...sekunder, ...utama };

  /* XP diambil yang TERBESAR, bukan dijumlah — kalau dijumlah, tiap
     penyelarasan akan menggandakannya tanpa henti. */
  g.xp = Math.max(a.xp || 0, b.xp || 0);

  g.streak = {
    count: Math.max(a.streak?.count || 0, b.streak?.count || 0),
    best:  Math.max(a.streak?.best  || 0, b.streak?.best  || 0),
    last:  (a.streak?.last || '') > (b.streak?.last || '') ? a.streak.last : (b.streak?.last || '')
  };

  /* Pelajaran: gabungan; kalau sama-sama ada, ambil nilai tertinggi. */
  g.lessons = { ...(b.lessons || {}), ...(a.lessons || {}) };
  for (const k of Object.keys(g.lessons)) {
    const x = a.lessons?.[k], y = b.lessons?.[k];
    if (x && y) g.lessons[k] = { done: Math.min(x.done, y.done), score: Math.max(x.score || 0, y.score || 0) };
  }

  /* Kartu hafalan: ambil yang RIWAYATNYA LEBIH PANJANG. Kartu yang
     sudah diulang sepuluh kali lebih berharga daripada yang baru
     dibuat di perangkat lain, berapa pun cap waktunya. */
  g.srs = { ...(b.srs || {}), ...(a.srs || {}) };
  for (const k of Object.keys(g.srs)) {
    const x = a.srs?.[k], y = b.srs?.[k];
    if (x && y) g.srs[k] = ((x.rep || 0) >= (y.rep || 0)) ? x : y;
  }

  /* Riwayat harian: per tanggal ambil yang tertinggi, JANGAN dijumlah
     — hari yang sama bisa terselaraskan berkali-kali. */
  g.history = { ...(b.history || {}), ...(a.history || {}) };
  for (const k of Object.keys(g.history)) {
    const x = a.history?.[k], y = b.history?.[k];
    if (x && y) g.history[k] = {
      xp:    Math.max(x.xp || 0, y.xp || 0),
      min:   Math.max(x.min || 0, y.min || 0),
      items: Math.max(x.items || 0, y.items || 0)
    };
  }

  g.units     = { ...(b.units || {}),     ...(a.units || {}) };
  g.checklist = { ...(b.checklist || {}), ...(a.checklist || {}) };
  g.notes     = { ...(b.notes || {}),     ...(a.notes || {}) };
  g.drills    = { ...(b.drills || {}),    ...(a.drills || {}) };
  g.last      = { ...(b.last || {}),      ...(a.last || {}) };

  g.quiz = { ...(b.quiz || {}), ...(a.quiz || {}) };
  for (const k of Object.keys(g.quiz)) {
    const x = a.quiz?.[k], y = b.quiz?.[k];
    if (x && y) g.quiz[k] = { best: Math.max(x.best, y.best), tries: Math.max(x.tries, y.tries),
                              last: (x.last ?? y.last) };
  }

  g.skills = {};
  for (const k of new Set([...Object.keys(a.skills || {}), ...Object.keys(b.skills || {})]))
    g.skills[k] = Math.max(a.skills?.[k] || 0, b.skills?.[k] || 0);

  /* Penanda & riwayat ujian: gabungan tanpa kembar. */
  const kunciSimpan = x => x?.id ?? JSON.stringify(x);
  const petaSimpan = new Map();
  [...(b.saved || []), ...(a.saved || [])].forEach(x => petaSimpan.set(kunciSimpan(x), x));
  g.saved = [...petaSimpan.values()];

  const petaUjian = new Map();
  [...(b.exams || []), ...(a.exams || [])].forEach(x => petaUjian.set(`${x.at}|${x.id ?? ''}`, x));
  g.exams = [...petaUjian.values()].sort((x, y) => (y.at || 0) - (x.at || 0)).slice(0, 60);

  g.updatedAt = Math.max(a.updatedAt || 0, b.updatedAt || 0);
  return g;
}

/* ── Naik & turun ─────────────────────────────────────────────── */
async function ambilJauh() {
  const s = await sesiSegar();
  if (!s?.user?.id) return null;
  const baris = await panggil(`/rest/v1/kemajuan?select=data,diperbarui&user_id=eq.${s.user.id}`);
  return Array.isArray(baris) && baris.length ? baris[0].data : null;
}

async function kirimJauh(data) {
  const s = await sesiSegar();
  if (!s?.user?.id) throw new Error('Belum masuk.');
  await panggil('/rest/v1/kemajuan', {
    metode: 'POST',
    tambahan: { Prefer: 'resolution=merge-duplicates,return=minimal' },
    badan: { user_id: s.user.id, data, diperbarui: new Date().toISOString() }
  });
}

/**
 * Selaraskan kemajuan lokal dengan awan.
 * @returns {{status:'sinkron'|'mati'|'gagal', pesan?:string}}
 */
export async function sinkron() {
  if (!awanSiap()) return { status: 'mati' };
  if (!sesi()) return { status: 'mati' };
  try {
    const lokal = { ...state(), updatedAt: state().updatedAt || Date.now() };
    const jauh = await ambilJauh();
    const gabung = gabungKemajuan(lokal, jauh);
    gabung.updatedAt = Date.now();

    /* Tulis balik hanya kalau memang berbeda dari yang sudah di sini. */
    if (JSON.stringify(gabung) !== JSON.stringify(lokal)) importData(gabung);
    await kirimJauh(gabung);
    localStorage.setItem(KUNCI_SINKRON, String(Date.now()));
    return { status: 'sinkron' };
  } catch (e) {
    console.warn('Penyelarasan gagal:', e);
    return { status: 'gagal', pesan: e.message };
  }
}

export const terakhirSinkron = () => Number(localStorage.getItem(KUNCI_SINKRON) || 0) || null;

/* Selaraskan otomatis saat kembali daring dan saat tab ditinggalkan. */
let pasang = false;
export function pasangOtomatis() {
  if (pasang || !awanSiap()) return;
  pasang = true;
  addEventListener('online', () => { if (sesi()) sinkron(); });
  addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden' && sesi() && navigator.onLine) sinkron();
  });
}
