/* Konteks bahasa aktif.

   Semua bahasa setara. Aplikasi selalu berada DI DALAM satu bahasa,
   dan seluruh menu, rute, serta warna aksen mengikuti bahasa itu.
   Rute berbentuk  #/<kode-bahasa>/<bagian>  — misalnya #/ko/aksara. */

import { LANGS, langByCode } from '../data/lang/registry.js';
import { state, mutate } from './state.js';
import { loadCourse, loadPlus, loadPakai, loadVerba, loadKata, loadGoresan, pasangGoresan, loadContohAksara, mergeCourse, pasangPakai } from './course.js';
import { daftarkanKamus } from './translit.js';

const cache = new Map();

export const LANG_CODES = LANGS.map(l => l.code);
export const isLangCode = c => LANG_CODES.includes(c);

/** Bahasa yang sedang dibuka. */
export function currentLang() {
  const seg = location.hash.replace(/^#\//, '').split('/')[0];
  if (isLangCode(seg)) return seg;
  return state().lang || 'en';
}

export function setLang(code) {
  if (!isLangCode(code)) return;
  mutate(s => { s.lang = code; });
  applyAccent(code);
}

/** Muat modul data bahasa (kecuali Inggris yang punya modulnya sendiri). */
export async function loadLangData(code) {
  if (code === 'en') return null;
  if (cache.has(code)) return cache.get(code);
  try {
    const mod = await import(`../data/lang/${code}.js`);
    const data = mod[code.toUpperCase()] || Object.values(mod)[0];
    const kata = await loadKata(code);
    mergeCourse(data, await loadCourse(code), await loadPlus(code), kata);
    /* Dua sumber contoh pemakaian: berkas -pakai.js untuk kosakata lama,
       dan bagian `pakai` di -kata.js untuk kata yang baru ditambahkan. */
    pasangPakai(data, await loadPakai(code));
    if (kata?.pakai) pasangPakai(data, kata.pakai);
    /* Sistem kata kerja disimpan apa adanya; halaman & menunya
       hanya muncul kalau berkasnya ada. */
    /* muatBerkas() sudah membuka bungkus modulnya (mengembalikan ekspor
       pertamanya), jadi hasilnya SUDAH objek VERBA — bukan modulnya. */
    data.verba = await loadVerba(code);
    /* Goresan aksara yang sudah diperbaiki, kalau ada. */
    pasangGoresan(data, await loadGoresan(code));
    /* Contoh kata untuk aksara yang tak tertutup kosakatanya. */
    data.contohAksara = await loadContohAksara(code);
    /* Kamus alih aksara dibangun dari kosakata & frasa bahasa ini —
       bahan yang dipakai mesin suara saat materi tidak menyertakan
       romanisasi (terutama Mandarin dan kanji Jepang). */
    daftarkanKamus(code, data);
    cache.set(code, data);
    return data;
  } catch (e) {
    /* Jangan gagal diam-diam — modul bahasa yang tidak termuat berarti
       seluruh halaman bahasa itu kosong, dan penyebabnya harus terlihat. */
    console.error('Modul bahasa', code, 'gagal dimuat:', e);
    return null;
  }
}
export const cachedLang = code => cache.get(code) || null;

/** Warna aksen aplikasi mengikuti bahasa aktif. */
export function applyAccent(code) {
  const l = langByCode(code);
  const root = document.documentElement;
  if (!l || code === 'en') {
    root.style.removeProperty('--brand');
    root.style.removeProperty('--brand-soft');
    root.style.removeProperty('--brand-text');
    return;
  }
  root.style.setProperty('--brand', l.accent);
  root.style.setProperty('--brand-soft', l.accent + '2e');
  root.style.setProperty('--brand-text', l.accent);
}

/* ── Menu per bahasa ──────────────────────────────────────────── */

/* Inggris punya kurikulum CEFR penuh dan tiga ujian internasional. */
const NAV_EN = [
  { group: 'Belajar' },
  { to: '', ico: 'home', label: 'Beranda' },
  { to: 'kurikulum', ico: 'map', label: 'Kurikulum' },
  { to: 'grammar', ico: 'grammar', label: 'Tata Bahasa' },
  { to: 'tenses', ico: 'clock', label: '12 Tenses' },
  { to: 'kosakata', ico: 'cards', label: 'Kosakata' },
  { to: 'kartu', ico: 'repeat', label: 'Kartu Hafalan', badge: 'due' },
  { group: 'Keterampilan' },
  { to: 'menyimak', ico: 'headphones', label: 'Menyimak' },
  { to: 'berbicara', ico: 'mic', label: 'Berbicara' },
  { to: 'membaca', ico: 'book', label: 'Membaca' },
  { to: 'menulis', ico: 'pen', label: 'Menulis' },
  { to: 'pelafalan', ico: 'speaker', label: 'Pelafalan' },
  { group: 'Ujian' },
  { to: 'ujian', ico: 'target', label: 'IELTS · TOEFL · TOEIC' },
  { to: 'penempatan', ico: 'compass', label: 'Tes Penempatan' },
  { group: 'Rencana' },
  { to: 'rencana', ico: 'calendar', label: 'Rencana Belajar' },
  { to: 'trik', ico: 'bulb', label: 'Trik & Metode' },
  { group: 'Akun' },
  { to: 'kemajuan', ico: 'chart', label: 'Kemajuan' },
  { to: 'pengaturan', ico: 'settings', label: 'Pengaturan' }
];

/* Bahasa lain: aksara jadi pintu masuk, bukan tambahan. */
const navOther = (L, meta) => {
  const nav = [
    { group: 'Belajar' },
    { to: '', ico: 'home', label: 'Beranda' }
  ];
  if (L?.levels?.length) nav.push({ to: 'kurikulum', ico: 'map', label: 'Kurikulum' });
  if (L?.scripts?.length) nav.push({ to: 'aksara', ico: 'pen', label: labelScript(meta) });
  if (L?.verba) nav.push({ to: 'verba', ico: 'grammar', label: 'Sistem Kata Kerja' });
  nav.push(
    { to: 'grammar', ico: 'grammar', label: 'Tata Bahasa' },
    { to: 'kosakata', ico: 'cards', label: 'Kosakata' },
    { to: 'kartu', ico: 'repeat', label: 'Kartu Hafalan', badge: 'due' },
    { group: 'Keterampilan' },
    { to: 'frasa', ico: 'quote', label: 'Frasa & Angka' },
    { to: 'pelafalan', ico: 'speaker', label: 'Pelafalan' },
    { to: 'menyimak', ico: 'headphones', label: 'Menyimak' },
    { to: 'berbicara', ico: 'mic', label: 'Berbicara' },
    { group: 'Ujian' },
    { to: 'ujian', ico: 'target', label: L?.exam?.name || 'Ujian' },
    { group: 'Rencana' },
    { to: 'trik', ico: 'bulb', label: 'Trik & Metode' },
    { group: 'Akun' },
    { to: 'kemajuan', ico: 'chart', label: 'Kemajuan' },
    { to: 'pengaturan', ico: 'settings', label: 'Pengaturan' }
  );
  return nav;
};

const labelScript = meta => ({
  ko: 'Hangul', ja: 'Kana', zh: 'Hanzi & Pinyin', ar: 'Huruf Hijaiyah',
  ru: 'Abjad Kiril', de: 'Huruf Khusus', fr: 'Huruf Beraksen', es: 'Huruf Khusus'
}[meta.code] || 'Aksara');

export function navFor(code, L) {
  return code === 'en' ? NAV_EN : navOther(L, langByCode(code));
}

/* ── Kartu hafalan lintas bahasa ──────────────────────────────── */

/** Ubah kosakata sebuah bahasa jadi kartu SRS berformat sama.
 *
 *  Satu kata bisa muncul di beberapa paket — misalnya 水 ada di paket
 *  "kata inti" DAN di paket tema "makanan". Itu disengaja: paket inti adalah
 *  cicipan, paket tema adalah kurikulumnya. Tetapi untuk KARTU HAFALAN,
 *  kata yang sama tidak boleh jadi dua kartu; pengulangannya akan terasa
 *  seperti aplikasi yang tidak ingat apa yang sudah diajarkannya.
 *
 *  Kemunculan pertama yang dipertahankan, jadi id kartunya tidak berubah
 *  dan kemajuan yang sudah tersimpan tetap sah. Halaman kosakata sendiri
 *  tetap menampilkan seluruh isi tiap paket. */
export function lexOf(code, L) {
  if (!L?.vocab) return [];
  const sudah = new Set();
  const out = [];
  L.vocab.forEach(p => (p.words || []).forEach((w, i) => {
    const kunci = String(w[0] ?? '').trim();
    if (!kunci || sudah.has(kunci)) return;
    sudah.add(kunci);
    out.push({ id: `${code}-${p.id}-${i}`, pack: p.id, packTitle: p.title,
               level: p.level || 'A1', w: w[0], ipa: '', pos: w[1], id_: w[2],
               /* Unsur ke-4 dan ke-5 adalah CONTOH PEMAKAIAN beserta
                  terjemahannya. Kartu hafalan dan daftar kosakata sudah
                  lama menyediakan tempatnya, tetapi datanya dulu selalu
                  kosong — kata diperlihatkan tanpa pernah menunjukkan
                  bagaimana ia dipakai dalam kalimat. */
               ex: w[3] || '', exId: w[4] || '', exRom: w[5] || '' });
  }));
  return out;
}

/** Kanji juga jadi kartu. Id-nya disamakan dengan yang dipakai halaman
    kanji (js/views/kanji.js) supaya menandai di sana dan mengulang di
    sini menunjuk kartu yang sama. */
export function kanjiLexOf(code, L) {
  if (!L?.kanji) return [];
  return L.kanji.map(k => ({
    id: `${code}:kanji:${k.k}`, pack: 'kanji', packTitle: 'Kanji', level: 'A1',
    w: k.k, ipa: [...k.on, ...k.kun].join(' · '), pos: `${k.coret} coretan`,
    id_: k.arti, ex: k.kata[0]?.[0] || '', exId: k.kata[0]?.[2] || ''
  }));
}

/** Frasa juga bisa dijadikan kartu — sangat efektif untuk bahasa baru. */
export function phraseLexOf(code, L) {
  if (!L?.phrases) return [];
  const sudah = new Set();
  const out = [];
  L.phrases.forEach((g, gi) => (g.items || []).forEach((it, i) => {
    const kunci = String(it[0] ?? '').trim();
    if (!kunci || sudah.has(kunci)) return;
    sudah.add(kunci);
    out.push({ id: `${code}-ph-${gi}-${i}`, pack: 'phrases',
               packTitle: 'Frasa ' + g.g, level: 'A1',
               w: it[0], ipa: '', pos: it[1], id_: it[2], ex: '', exId: '' });
  }));
  return out;
}

export const langMeta = langByCode;
export { LANGS };
