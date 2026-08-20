/* ── Pemutar audio rekaman ─────────────────────────────────────────
   Suara terbaik untuk aplikasi belajar bahasa bukan yang dibangkitkan
   saat tombol ditekan, melainkan yang SUDAH ADA sebelum tombol ditekan.

   Materi SankaLingo GO tetap: 2.749 potong teks. Semuanya dirender sekali di luar
   aplikasi (tools/render_f5.py memakai F5-TTS), disimpan sebagai berkas,
   lalu di sini tinggal diputar. Akibatnya:

     · jeda klik→bunyi tinggal waktu decode berkas, bukan waktu inferensi
     · pelafalannya benar, bukan romanisasi yang dibaca suara Indonesia
     · jalan penuh saat luring, karena berkasnya ikut disimpan
     · bunyinya sama di semua perangkat, tidak bergantung suara bawaan

   Kunci berkas = 16 hex pertama SHA-256 dari teks yang dinormalkan.
   Rumus yang sama dipakai tools/dump-corpus.mjs dan tools/render_f5.py,
   jadi tidak ada daftar perantara yang bisa basi.                        */

const BASIS = './audio';
const manifes = new Map();     // code → { format, kunci:Set }
const janjiManifes = new Map();
const cacheKunci = new Map();  // "code teks" → kunci

export const normalkan = s => String(s ?? '').normalize('NFC').replace(/\s+/g, ' ').trim();

/** Hitung kunci audio. Sama persis dengan sisi Node dan Python. */
export async function kunciAudio(teks) {
  const t = normalkan(teks);
  if (!t) return '';
  const simpan = cacheKunci.get(t);
  if (simpan) return simpan;
  const buf = new TextEncoder().encode(t);
  const hash = await crypto.subtle.digest('SHA-256', buf);
  const hex = [...new Uint8Array(hash)].map(b => b.toString(16).padStart(2, '0')).join('');
  const k = hex.slice(0, 16);
  cacheKunci.set(t, k);
  return k;
}

/** Muat daftar berkas audio yang tersedia untuk satu bahasa. */
export function muatManifes(code) {
  if (janjiManifes.has(code)) return janjiManifes.get(code);
  const p = (async () => {
    try {
      const r = await fetch(`${BASIS}/${code}/manifest.json`, { cache: 'no-cache' });
      if (!r.ok) throw new Error('tidak ada');
      const j = await r.json();
      const m = { format: j.format || 'opus', mesin: j.mesin || '',
                  model: j.model || '', dibuat: j.dibuat || '',
                  kunci: new Set(j.kunci || []) };
      manifes.set(code, m);
      return m;
    } catch {
      const kosong = { format: 'opus', mesin: '', model: '', kunci: new Set() };
      manifes.set(code, kosong);
      return kosong;
    }
  })();
  janjiManifes.set(code, p);
  return p;
}

export const manifesTersimpan = code => manifes.get(code) || null;
export const punyaAudio = code => (manifes.get(code)?.kunci.size || 0) > 0;

/** URL berkas audio untuk sebuah teks, atau '' bila belum direkam. */
export async function urlAudio(code, teks) {
  const m = manifes.get(code) || await muatManifes(code);
  if (!m.kunci.size) return '';
  const k = await kunciAudio(teks);
  return k && m.kunci.has(k) ? `${BASIS}/${code}/${k}.${m.format}` : '';
}

/* ── Pemutaran ────────────────────────────────────────────────────
   Satu elemen Audio dipakai ulang. Membuat elemen baru tiap klik
   memaksa peramban menyiapkan pipeline audio dari nol — itu terasa
   sebagai jeda, persis keluhan yang ingin dihilangkan.                */
let el = null;
let seri = 0;

function elemen() {
  if (el) return el;
  el = new Audio();
  el.preload = 'auto';
  el.crossOrigin = 'anonymous';
  return el;
}

export function hentikan() {
  seri++;
  if (el) { try { el.pause(); el.currentTime = 0; } catch {} }
}

/**
 * Putar rekaman sebuah teks.
 * @returns {Promise<{ada:boolean, ms:number}>} ada=false bila belum direkam
 */
export async function putar(code, teks, { rate = 1, onMulai } = {}) {
  const t0 = performance.now();
  const url = await urlAudio(code, teks);
  if (!url) return { ada: false, ms: 0 };

  const aku = ++seri;
  const a = elemen();
  try { a.pause(); } catch {}
  a.src = url;
  a.playbackRate = rate;
  a.currentTime = 0;

  return await new Promise(res => {
    let sudah = false;
    const tutup = ok => {
      if (sudah) return;
      sudah = true;
      a.onended = a.onerror = a.onplaying = null;
      clearTimeout(jaga);
      res({ ada: ok, ms: Math.round(performance.now() - t0) });
    };
    a.onplaying = () => { if (aku === seri) onMulai?.(); };
    a.onended = () => tutup(true);
    a.onerror = () => tutup(false);
    /* Berkas rusak atau hilang tidak boleh menggantung tombolnya. */
    const jaga = setTimeout(() => tutup(true), 30000);
    a.play().catch(() => tutup(false));
  });
}

/* ── Pramuat ──────────────────────────────────────────────────────
   Menyiapkan berkas di simpanan peramban sebelum diklik. Dipakai
   halaman yang menampilkan banyak tombol suara sekaligus.             */
const sudahDiambil = new Set();

export async function pramuat(code, daftarTeks, batas = 24) {
  const m = manifes.get(code) || await muatManifes(code);
  if (!m.kunci.size) return 0;
  let n = 0;
  for (const teks of daftarTeks.slice(0, batas)) {
    const k = await kunciAudio(teks);
    if (!k || !m.kunci.has(k)) continue;
    const url = `${BASIS}/${code}/${k}.${m.format}`;
    if (sudahDiambil.has(url)) continue;
    sudahDiambil.add(url);
    fetch(url, { cache: 'force-cache' }).catch(() => {});
    n++;
  }
  return n;
}

/** Berapa persen materi bahasa ini sudah punya rekaman. */
export async function cakupan(code, semuaTeks) {
  const m = manifes.get(code) || await muatManifes(code);
  if (!m.kunci.size) return { ada: 0, total: semuaTeks.length, persen: 0 };
  let ada = 0;
  for (const t of semuaTeks) {
    const k = await kunciAudio(t);
    if (k && m.kunci.has(k)) ada++;
  }
  return { ada, total: semuaTeks.length,
           persen: semuaTeks.length ? Math.round((ada / semuaTeks.length) * 100) : 0 };
}
