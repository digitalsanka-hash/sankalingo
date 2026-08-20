/* ── Mode luring ───────────────────────────────────────────────────
   Mendaftarkan pekerja layanan, menyiapkan seluruh materi supaya bisa
   dibuka tanpa internet, dan memberitahu kalau ada versi baru.          */

import { toast } from './ui.js';

/* Semua berkas materi & tampilan. Dipakai untuk "siapkan mode luring". */
export const BERKAS_MATERI = [
  ...['curriculum', 'curriculum-plus', 'exam-bank', 'exam-ielts', 'exam-specs', 'exam-tactics',
      'exam-toefl-toeic', 'exam-toefl', 'exam-toeic-bank', 'grammar-a1', 'grammar-a2',
      'grammar-b1', 'grammar-b2', 'grammar-c',
      'grammar-gabung', 'grammar-kelompok',
      'grammar-plus-a', 'grammar-plus-b', 'grammar-plus-c',
      'grammar-isi-ab', 'grammar-isi-c',
      'lexis', 'pronunciation', 'skills', 'study',
      'vocab-1', 'vocab-2', 'vocab-3', 'vocab-4', 'vocab-5', 'vocab-6']
    .map(n => `./data/${n}.js`),
  ...['ar', 'de', 'es', 'fr', 'ja', 'ko', 'ru', 'zh']
    .flatMap(c => [`./data/lang/${c}.js`, `./data/lang/${c}-course.js`,
                   `./data/lang/${c}-plus.js`, `./data/lang/${c}-pakai.js`,
                   `./data/lang/${c}-verba.js`, `./data/lang/${c}-kata.js`]),
  './data/lang/registry.js',
  './data/lang/exam-blueprints.js',
  './data/lang/exam-bacaan.js',
  './data/lang/strokes-kana.js',
  './data/lang/strokes-hanzi.js',
  './data/lang/ja-kanji.js',
  ...['curriculum', 'dashboard', 'exams', 'grammar', 'lang', 'langcourse', 'langpages',
      'mock', 'plan', 'skills', 'stats', 'vocab', 'onboard', 'panduan',
      'auditsuara', 'mocklang', 'kanji']
    .map(n => `./js/views/${n}.js`),
  ...['app', 'course', 'data', 'icons', 'langctx', 'quiz', 'speech', 'srs', 'state',
      'stroke', 'ui', 'voice', 'comfort', 'comfortui', 'luring', 'translit', 'mockgen',
      'audio']
    .map(n => `./js/${n}.js`),
  ...['tokens', 'base', 'components', 'views', 'comfort'].map(n => `./assets/css/${n}.css`),
  /* Lambang aplikasi. Sempat terlewat, akibatnya di layar boot lambangnya
     muncul sebagai kotak gambar rusak begitu jaringan mati. */
  './assets/merek/maskot-kepala.svg', './assets/merek/maskot.svg',
  './assets/icon-192.svg', './assets/icon-512.svg',
  './index.html', './manifest.webmanifest'
];

let reg = null;
const pendengarPanas = new Set();
export const onPanas = fn => { pendengarPanas.add(fn); return () => pendengarPanas.delete(fn); };

export const didukung = () => 'serviceWorker' in navigator && location.protocol !== 'file:';

export async function daftarkan() {
  if (!didukung()) return null;
  try {
    reg = await navigator.serviceWorker.register('./sw.js', { scope: './' });

    /* Versi baru menunggu → tawarkan muat ulang, jangan paksa. */
    reg.addEventListener('updatefound', () => {
      const baru = reg.installing;
      if (!baru) return;
      baru.addEventListener('statechange', () => {
        if (baru.state === 'installed' && navigator.serviceWorker.controller) {
          toast('Versi baru SankaLingo GO sudah siap. <a href="#" data-muat-ulang>Muat ulang sekarang</a>', '', 12000);
        }
      });
    });

    navigator.serviceWorker.addEventListener('message', e => {
      if (e.data?.tipe === 'panas-selesai') {
        pendengarPanas.forEach(f => f(e.data));
      }
    });

    document.addEventListener('click', e => {
      if (e.target.closest('[data-muat-ulang]')) {
        e.preventDefault();
        reg.waiting?.postMessage('skipWaiting');
        setTimeout(() => location.reload(), 260);
      }
    });

    return reg;
  } catch (e) {
    console.warn('Pekerja layanan gagal didaftarkan:', e);
    return null;
  }
}

/** Unduh seluruh materi ke simpanan supaya siap dipakai tanpa internet. */
export async function siapkanLuring() {
  if (!didukung()) throw new Error('Peramban ini tidak mendukung mode luring.');
  const aktif = (await navigator.serviceWorker.ready).active;
  if (!aktif) throw new Error('Pekerja layanan belum aktif. Muat ulang halaman dulu.');
  aktif.postMessage({ tipe: 'panaskan', daftar: BERKAS_MATERI });
  return BERKAS_MATERI.length;
}

/** Perkiraan ruang simpanan yang dipakai. */
export async function ruangSimpanan() {
  if (!navigator.storage?.estimate) return null;
  try {
    const { usage = 0, quota = 0 } = await navigator.storage.estimate();
    return { pakai: usage, kuota: quota,
             persen: quota ? Math.min(100, Math.round((usage / quota) * 100)) : 0 };
  } catch { return null; }
}

/** Minta agar data tidak dibuang otomatis saat ruang menipis. */
export async function amankanPenyimpanan() {
  if (!navigator.storage?.persist) return false;
  try {
    if (await navigator.storage.persisted?.()) return true;
    return await navigator.storage.persist();
  } catch { return false; }
}

export async function hapusSimpanan() {
  const aktif = (await navigator.serviceWorker.ready).active;
  aktif?.postMessage('bersihkan');
  if (window.caches) {
    const n = await caches.keys();
    await Promise.all(n.map(k => caches.delete(k)));
  }
}

export const ukuranBerkas = n =>
  n < 1024 ? `${n} B`
  : n < 1048576 ? `${(n / 1024).toFixed(0)} KB`
  : n < 1073741824 ? `${(n / 1048576).toFixed(1)} MB`
  : `${(n / 1073741824).toFixed(1)} GB`;
