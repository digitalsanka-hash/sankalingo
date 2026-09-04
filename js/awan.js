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
/* Diekspor supaya js/lisensi.js bisa memakai kembali penyegaran token,
   penerjemahan galat, dan penyusunan alamat yang sama. Menulis fetch
   sendiri di sana berarti menyalin ketiganya — dan yang tersalin
   biasanya cuma dua. */
export async function panggilAwan(jalur, opsi) { return panggil(jalur, opsi); }

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
/* ── Masuk dengan kata sandi ──────────────────────────────────
   Cara utama sejak pendaftaran memakai kode akses. OTP di bawah tetap
   ada sebagai jalan cadangan (dan dipakai pemulihan sandi), tetapi
   pemakai sehari-hari tidak lagi menyentuhnya: membuka email tiap kali
   mau belajar adalah pajak yang tidak perlu. */

const EMAIL_SAH = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

/** Masuk dengan email + kata sandi. */
export async function masukSandi(email, sandi) {
  const surel = String(email || '').trim().toLowerCase();
  if (!EMAIL_SAH.test(surel)) throw new Error('Alamat email tidak sah.');
  if (!sandi) throw new Error('Kata sandinya belum diisi.');

  let hasil;
  try {
    hasil = await panggil('/auth/v1/token?grant_type=password', {
      metode: 'POST', pakaiToken: false, badan: { email: surel, password: String(sandi) }
    });
  } catch (e) {
    /* Supabase menjawab "Invalid login credentials" untuk email yang
       tidak ada MAUPUN sandi yang salah - disengaja, supaya orang luar
       tidak bisa memetakan siapa saja yang punya akun. Pesannya
       diterjemahkan tanpa membocorkan bedanya. */
    if (/invalid login/i.test(e.message)) throw new Error('Email atau kata sandi salah.');
    if (/not confirmed/i.test(e.message)) throw new Error('Akun ini belum diaktifkan. Hubungi penjual.');
    throw e;
  }
  if (!hasil?.access_token) throw new Error('Masuk gagal.');
  simpanSesi({ ...hasil, expires_at: Math.floor(Date.now() / 1000) + (hasil.expires_in || 3600) });
  return hasil;
}

/** Daftar: email + sandi + kode akses ditukar jadi akun aktif, lalu
 *  langsung masuk. Pembuatan akunnya di Edge Function daftar-lisensi
 *  karena hanya service role yang boleh menyentuh tabel kode. */
export async function daftarDenganKode(email, sandi, kode) {
  const surel = String(email || '').trim().toLowerCase();
  if (!EMAIL_SAH.test(surel)) throw new Error('Alamat email tidak sah.');
  if (String(sandi || '').length < 8) throw new Error('Kata sandi minimal 8 huruf.');
  if (!String(kode || '').trim()) throw new Error('Kode akses wajib diisi.');

  const r = await fetch(`${AWAN.url.replace(/\/+$/, '')}/functions/v1/daftar-lisensi`, {
    method: 'POST',
    headers: { apikey: AWAN.anon, 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: surel, sandi: String(sandi), kode: String(kode).trim() })
  }).catch(e => {
    /* fetch melempar untuk dua sebab yang berbeda jauh: internet mati,
       atau Edge Function-nya belum dipasang sehingga jawabannya datang
       tanpa header CORS. Pembeli tidak bisa membedakannya dan tidak
       perlu tahu; yang memasang aplikasi ini perlu, jadi detailnya
       ditulis ke console. */
    console.error('daftar-lisensi tidak menjawab:', e);
    throw new Error(navigator.onLine
      ? 'Layanan pendaftaran sedang tidak menjawab. Coba lagi sebentar lagi, atau hubungi penjual.'
      : 'Tidak ada koneksi internet.');
  });

  const teks = await r.text();
  let isi = null;
  try { isi = teks ? JSON.parse(teks) : null; } catch { isi = null; }
  if (!r.ok) throw new Error(isi?.error || `Pendaftaran gagal (${r.status})`);

  /* Akunnya sudah jadi dan emailnya sudah dianggap terkonfirmasi, jadi
     masuknya bisa langsung - pembeli tidak perlu mengetik apa pun lagi. */
  await masukSandi(surel, sandi);
  return isi;
}

/** Kirim email pemulihan kata sandi. */
export async function kirimResetSandi(email) {
  const surel = String(email || '').trim().toLowerCase();
  if (!EMAIL_SAH.test(surel)) throw new Error('Alamat email tidak sah.');
  await panggil('/auth/v1/recover', {
    metode: 'POST', pakaiToken: false,
    badan: { email: surel, redirect_to: location.origin + location.pathname }
  });
  return surel;
}

/** Pasang kata sandi baru untuk sesi yang sedang berjalan. Dipakai
 *  sesudah pemakai kembali lewat tautan pemulihan. */
export async function gantiSandi(sandiBaru) {
  if (String(sandiBaru || '').length < 8) throw new Error('Kata sandi minimal 8 huruf.');
  await panggil('/auth/v1/user', { metode: 'PUT', badan: { password: String(sandiBaru) } });
  return true;
}

export async function verifikasiKode(email, kode) {
  const hasil = await panggil('/auth/v1/verify', {
    metode: 'POST', pakaiToken: false,
    badan: { email: String(email).trim().toLowerCase(), token: String(kode).trim(), type: 'email' }
  });
  if (!hasil?.access_token) throw new Error('Kode tidak diterima.');
  simpanSesi({ ...hasil, expires_at: Math.floor(Date.now() / 1000) + (hasil.expires_in || 3600) });
  return hasil;
}

/* ── Masuk lewat tautan email ──────────────────────────────────────

   Aplikasi ini meminta kode enam angka, dan Supabase memang bisa
   mengirimkannya — tapi hanya kalau templat emailnya memuat {{ .Token }}.
   Di paket Free tanpa SMTP sendiri, templat itu TERKUNCI: yang terkirim
   selalu templat bawaan yang cuma berisi tautan.

   Jadi kedua jalan harus dilayani. Kalau yang datang tautan, Supabase
   mengembalikan pengguna ke Site URL dengan sesinya tertempel di hash:

     https://www.sankalingogo.com/#access_token=...&refresh_token=...

   Fungsi ini menangkap hash itu sebelum router sempat membacanya —
   kalau tidak, router melihat rute tak dikenal lalu melempar pengguna ke
   beranda, dan sesinya hilang begitu saja padahal sudah sah.

   Sesudah sesi tersimpan, hash dibersihkan lewat replaceState supaya
   tokennya tidak tertinggal di kotak alamat, tidak masuk riwayat
   peramban, dan tidak ikut terkirim kalau pengguna membagikan URL-nya. */
export function tangkapTautanMasuk() {
  const h = location.hash || '';
  if (!h.includes('access_token=')) return false;

  const p = new URLSearchParams(h.replace(/^#\/?/, ''));
  const access_token = p.get('access_token');
  const refresh_token = p.get('refresh_token');
  if (!access_token) return false;

  /* Payload JWT dibaca sekadar untuk mengambil id dan email pengguna,
     BUKAN untuk memeriksa keabsahannya. Yang memeriksa tanda tangan
     adalah Supabase di tiap permintaan; token palsu tidak akan lolos di
     sana, jadi tidak ada gunanya berpura-pura memeriksanya di sini. */
  let user = null;
  try {
    const badan = JSON.parse(atob(access_token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
    user = { id: badan.sub, email: badan.email };
  } catch { /* biarkan null; sinkron akan gagal dengan pesan yang jelas */ }

  simpanSesi({
    access_token, refresh_token,
    expires_at: Number(p.get('expires_at')) ||
                Math.floor(Date.now() / 1000) + (Number(p.get('expires_in')) || 3600),
    user
  });

  /* Tautan pemulihan sandi memakai jalan masuk yang sama, hanya
     tipenya berbeda. Tandanya dititipkan di sessionStorage karena
     hash-nya harus segera dihapus (ia berisi token) sementara yang
     membaca tanda ini - layar gerbang - baru berjalan sesudahnya. */
  if (p.get('type') === 'recovery') {
    try { sessionStorage.setItem('fasih.pulihkan', '1'); } catch {}
  }

  history.replaceState(null, '', location.pathname + location.search + '#/');
  return true;
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
