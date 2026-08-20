/* Mesin kurikulum berjenjang untuk semua bahasa.

   Tiap bahasa punya berkas kursus terpisah (data/lang/<kode>-course.js)
   yang berisi: tingkatan, unit, tambahan tata bahasa, paket kosakata, dan
   frasa. Berkas itu digabung ke modul bahasa saat dimuat, lalu mesin ini
   membangkitkan daftar pelajaran yang seragam — sama seperti kurikulum
   bahasa Inggris, sehingga tidak ada bahasa yang terasa kelas dua. */

import { state } from './state.js';

const cacheKursus = new Map();

/** Muat satu berkas data bahasa; ketiadaan berkas bukan kesalahan. */
async function muatBerkas(nama) {
  if (cacheKursus.has(nama)) return cacheKursus.get(nama);
  let data = null;
  try {
    const mod = await import(`../data/lang/${nama}.js`);
    data = mod.COURSE || mod.PLUS || Object.values(mod)[0] || null;
  } catch { data = null; }
  cacheKursus.set(nama, data);
  return data;
}

/** Muat berkas kursus bila ada; bahasa tanpa kursus tetap jalan. */
export const loadCourse = code => muatBerkas(`${code}-course`);

/** Muat berkas perluasan materi bila ada.
 *
 *  Materi tambahan ditaruh di berkas terpisah (`<kode>-plus.js`) dan BUKAN
 *  disisipkan ke berkas aslinya. Alasannya praktis: berkas asli tetap kecil
 *  dan bisa dibaca manusia, penambahan bisa dibatalkan dengan menghapus satu
 *  berkas, dan penulisan materi baru tidak pernah berisiko merusak yang lama. */
export const loadPlus = code => muatBerkas(`${code}-plus`);
export const loadPakai = code => muatBerkas(`${code}-pakai`);
/* Sistem kata kerja/kala bahasa ini. Boleh tidak ada — halamannya
   hanya muncul di menu kalau berkasnya benar-benar termuat. */
export const loadVerba = code => muatBerkas(`${code}-verba`);

/* Paket kosakata tambahan. Berisi dua bagian sekaligus: paket kata
   baru (vocab) DAN contoh pemakaiannya (pakai) — ditaruh dalam satu
   berkas supaya kata dan contohnya tidak bisa terpisah. */
export const loadKata = code => muatBerkas(`${code}-kata`);

/* Goresan aksara pengganti. Hanya ada untuk bahasa yang goresan
   aslinya perlu ditulis ulang; sisanya memakai yang di berkas
   bahasanya sendiri. */
export const loadGoresan = code => muatBerkas(`${code}-goresan`);

/** Timpa goresan huruf dengan versi yang sudah diperbaiki.
 *
 *  Menimpa, bukan menyambung: yang lama memang salah, jadi tidak ada
 *  yang perlu dipertahankan. Huruf yang tidak ada di berkas pengganti
 *  dibiarkan apa adanya. */
export function pasangGoresan(L, goresan) {
  if (!L?.scripts || !goresan) return L;
  for (const S of L.scripts)
    for (const c of S.chars || [])
      if (goresan[c.c]) c.strokes = goresan[c.c];
  return L;
}

/** Tempelkan contoh pemakaian ke tiap kata yang punya.

    Datanya disimpan TERPISAH di data/lang/<kode>-pakai.js, bukan
    disisipkan ke berkas kosakata aslinya. Alasannya dua: berkas asli
    tidak perlu disentuh sama sekali (jadi tidak ada risiko merusak yang
    sudah benar), dan seluruh penambahan bisa dibatalkan hanya dengan
    menghapus satu berkas.                                             */
export function pasangPakai(L, pakai) {
  if (!L?.vocab || !pakai) return L;
  for (const paket of L.vocab)
    for (const w of paket.words || []) {
      const c = pakai[w[0]];
      if (!c) continue;
      w[3] = c[0] || '';        // contoh kalimat
      w[4] = c[1] || '';        // terjemahan Indonesia
      w[5] = c[2] || '';        // romanisasi contoh (aksara non-Latin)
    }
  return L;
}

/** Gabungkan satu bundel materi ke modul bahasa. Aman dipanggil berkali-kali. */
function gabung(L, b) {
  if (!b) return;
  /* Level yang ID-nya SUDAH ADA tidak digandakan — unitnya disambung ke
     level itu. Tanpa ini, berkas <kode>-plus.js yang memperluas B2/C1
     akan memunculkan kartu tingkat kembar di halaman kurikulum. */
  if (b.levels?.length) {
    L.levels = L.levels || [];
    for (const lv of b.levels) {
      const ada = L.levels.find(x => x.id === lv.id);
      if (!ada) { L.levels.push(lv); continue; }
      ada.units = [...(ada.units || []), ...(lv.units || [])];
      /* Bidang lain hanya ditimpa kalau bundel perluasan memang mengisinya. */
      for (const k of ['name', 'nameId', 'exam', 'hours', 'target'])
        if (lv[k] !== undefined) ada[k] = lv[k];
      if (lv.cando?.length) ada.cando = [...(ada.cando || []), ...lv.cando];
    }
  }
  if (b.grammar?.length) L.grammar = [...(L.grammar || []), ...b.grammar];
  if (b.vocab?.length)   L.vocab   = [...(L.vocab || []), ...b.vocab];
  if (b.phrases?.length) L.phrases = [...(L.phrases || []), ...b.phrases];
}

/** Gabungkan kursus + perluasan ke modul bahasa (idempoten). */
export function mergeCourse(L, course, plus, kata) {
  if (!L || L.__merged) return L;
  L.levels = course?.levels || [];
  gabung(L, { ...(course || {}), levels: null });
  gabung(L, plus);
  /* Paket kosakata tambahan menyusul paling akhir supaya urutan paket
     lama tidak bergeser — halaman kosakata menampilkannya berurutan. */
  if (kata?.vocab) gabung(L, { vocab: kata.vocab });
  L.__merged = true;
  return L;
}

/* ── Membangkitkan pelajaran ──────────────────────────────────── */

const IKON = {
  script:  'pen',    grammar: 'grammar', vocab: 'cards',
  phrase:  'quote',  listen:  'headphones', speak: 'mic',
  write:   'pen',    test:    'flag'
};

const JUDUL = {
  script:  'Aksara',        grammar: 'Tata Bahasa',  vocab: 'Kosakata',
  phrase:  'Frasa',         listen:  'Menyimak',     speak: 'Berbicara',
  write:   'Menulis Aksara', test:   'Ujian Unit'
};

/** Bangun daftar pelajaran satu unit. */
export function lessonsOf(L, unit) {
  const out = [];
  const push = (type, ref, extra = {}) => out.push({
    id: `${unit.id}-${type}${out.length + 1}`, type, ref,
    ico: IKON[type], title: JUDUL[type], xp: extra.xp || 25, ...extra
  });

  (unit.script || []).forEach(sid => {
    const s = (L.scripts || []).find(x => x.id === sid);
    push('script', sid, { title: s ? s.name : 'Aksara', xp: 35 });
  });
  (unit.grammar || []).forEach(gid => {
    const g = (L.grammar || []).find(x => x.id === gid);
    push('grammar', gid, { title: g ? g.titleId : 'Tata Bahasa', xp: 25 });
  });
  (unit.vocab || []).forEach(vid => {
    const v = (L.vocab || []).find(x => x.id === vid);
    push('vocab', vid, { title: v ? v.title : 'Kosakata', xp: 30 });
  });
  (unit.phrases || []).forEach(pg => push('phrase', pg, { title: 'Frasa: ' + pg, xp: 25 }));
  (unit.skills || []).forEach(sk => push(sk, unit.id, { xp: 30 }));
  push('test', unit.id, { xp: 60 });
  return out;
}

/** Semua unit sebuah bahasa, sudah lengkap dengan pelajarannya. */
export function unitsOf(L) {
  if (!L?.levels?.length) return [];
  return L.levels.flatMap((lv, li) =>
    (lv.units || []).map((u, ui) => ({
      ...u, n: ui + 1, level: lv.id, levelName: lv.name,
      lessons: lessonsOf(L, u)
    })));
}

export const unitById = (L, id) => unitsOf(L).find(u => u.id === id);

/* ── Kemajuan ─────────────────────────────────────────────────── */
export const lessonKey = (code, unitId, lessonId) => `L:${code}:${unitId}:${lessonId}`;

export function lessonDone(code, unitId, lessonId) {
  return !!state().lessons[lessonKey(code, unitId, lessonId)];
}

export function unitPct(code, unit) {
  if (!unit?.lessons?.length) return 0;
  const n = unit.lessons.filter(l => lessonDone(code, unit.id, l.id)).length;
  return Math.round((n / unit.lessons.length) * 100);
}

export function levelPct(code, L, lv) {
  const us = unitsOf(L).filter(u => u.level === lv.id);
  if (!us.length) return 0;
  return Math.round(us.reduce((a, u) => a + unitPct(code, u), 0) / us.length);
}

export function coursePct(code, L) {
  const us = unitsOf(L);
  if (!us.length) return 0;
  return Math.round(us.reduce((a, u) => a + unitPct(code, u), 0) / us.length);
}

/** Pelajaran berikutnya yang belum selesai. */
export function nextLesson(code, L) {
  for (const u of unitsOf(L))
    for (const l of u.lessons)
      if (!lessonDone(code, u.id, l.id)) return { unit: u, lesson: l };
  return null;
}
