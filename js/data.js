/* Kumpulan seluruh data + indeks pencarian. */

import { PACKS_1 } from '../data/vocab-1.js';
import { PACKS_2 } from '../data/vocab-2.js';
import { PACKS_3 } from '../data/vocab-3.js';
import { PACKS_4 } from '../data/vocab-4.js';
import { PACKS_5 } from '../data/vocab-5.js';
import { PACKS_6 } from '../data/vocab-6.js';
import { IELTS_BANK, TOEFL_BANK, TOEIC_BANK } from '../data/exam-bank.js';
import { TOEIC_P1, TOEIC_P2, TOEIC_P3, TOEIC_P4, TOEIC_P6 } from '../data/exam-toeic-bank.js';
import { PHRASAL_VERBS, IDIOMS, COLLOCATIONS, SENTENCE_FRAMES } from '../data/lexis.js';
/* Materi tata bahasa digabung di satu tempat (data/grammar-gabung.js)
   supaya aplikasi dan tools/validasi-grammar.mjs membaca susunan yang
   PERSIS sama. */
import { SEMUA as GRAMMAR_SEMUA } from '../data/grammar-gabung.js';
import { LEVELS, ALL_UNITS, ALL_LESSONS, CEFR_CANDO, levelById, unitById } from '../data/curriculum.js';
import { IELTS } from '../data/exam-ielts.js';
import { TOEFL } from '../data/exam-toefl.js';
import { TOEIC } from '../data/exam-toefl-toeic.js';
import { SPECS, SOURCES, VERIFIED_ON, convertScore, ieltsOverall } from '../data/exam-specs.js';
import { TACTICS, TIME_BUDGET } from '../data/exam-tactics.js';
import { READINGS, DICTATIONS, SHADOWING, SPEAKING_PROMPTS, WRITING_TASKS, WRITING_RULES } from '../data/skills.js';
import { IPA_VOWELS, IPA_CONSONANTS, HARD_SOUNDS, STRESS_RULES, TONGUE_TWISTERS, CONNECTED_SPEECH } from '../data/pronunciation.js';
import { TRICKS, PLANS, PLACEMENT, placementResult } from '../data/study.js';

export {
  LEVELS, ALL_UNITS, ALL_LESSONS, CEFR_CANDO, levelById, unitById,
  IELTS, TOEFL, TOEIC,
  SPECS, SOURCES, VERIFIED_ON, convertScore, ieltsOverall, TACTICS, TIME_BUDGET,
  READINGS, DICTATIONS, SHADOWING, SPEAKING_PROMPTS, WRITING_TASKS, WRITING_RULES,
  IPA_VOWELS, IPA_CONSONANTS, HARD_SOUNDS, STRESS_RULES, TONGUE_TWISTERS, CONNECTED_SPEECH,
  TRICKS, PLANS, PLACEMENT, placementResult,
  PHRASAL_VERBS, IDIOMS, COLLOCATIONS, SENTENCE_FRAMES
};

/* ── Kosakata ─────────────────────────────────────────────────── */
export const VOCAB_PACKS = [...PACKS_1, ...PACKS_2, ...PACKS_3, ...PACKS_4,
                            ...PACKS_5, ...PACKS_6].map(p => ({
  ...p,
  items: p.words.map((w, i) => ({
    id: `${p.id}-${i}`, pack: p.id, packTitle: p.title, level: p.level,
    w: w[0], ipa: w[1], pos: w[2], id_: w[3], ex: w[4], exId: w[5]
  }))
}));

export const ALL_VOCAB = VOCAB_PACKS.flatMap(p => p.items);
export const packById = id => VOCAB_PACKS.find(p => p.id === id);

/* Frasa kerja, idiom, kolokasi dibungkus jadi kartu hafalan juga. */
const wrapLex = (arr, prefix, label, level) => arr.map((x, i) => ({
  id: `${prefix}-${i}`, pack: prefix, packTitle: label, level,
  w: x[0], ipa: '', pos: label, id_: x[1], ex: x[2], exId: x[3]
}));

export const PHRASAL_ITEMS = wrapLex(PHRASAL_VERBS, 'pv', 'Phrasal Verb', 'B1');
export const IDIOM_ITEMS = wrapLex(IDIOMS, 'idm', 'Idiom', 'B2');
export const COLLOC_ITEMS = wrapLex(COLLOCATIONS, 'col', 'Collocation', 'B2');

export const LEX_PACKS = [
  { id:'pv', title:'Phrasal Verbs', titleId:'Frasa Kerja', icon:'🔗', level:'B1',
    blurb:'120 frasa kerja terpenting — kunci memahami percakapan sehari-hari penutur asli.', items: PHRASAL_ITEMS },
  { id:'idm', title:'Idioms', titleId:'Idiom', icon:'💬', level:'B2',
    blurb:'70 idiom yang benar-benar dipakai, bukan idiom buku kuno.', items: IDIOM_ITEMS },
  { id:'col', title:'Collocations', titleId:'Kolokasi', icon:'🧲', level:'B2',
    blurb:'78 pasangan kata yang harus dihafal bersama agar terdengar alami.', items: COLLOC_ITEMS }
];

export const ALL_LEX = [...ALL_VOCAB, ...PHRASAL_ITEMS, ...IDIOM_ITEMS, ...COLLOC_ITEMS];
export const ALL_PACKS = [...VOCAB_PACKS, ...LEX_PACKS];
export const lexById = id => ALL_LEX.find(x => x.id === id);

/* ── Tata bahasa ──────────────────────────────────────────────── */
export const GRAMMAR = GRAMMAR_SEMUA;
export const grammarById = id => GRAMMAR.find(g => g.id === id);
export const grammarByLevel = lv => GRAMMAR.filter(g => g.level === lv);

/* ── Ujian ────────────────────────────────────────────────────── */

/* Bank TOEIC per bagian → dijadikan butir soal siap pakai. */
TOEIC.parts = {
  p1: TOEIC_P1.map((x, i) => ({
    t:'mcq', part:'Part 1 — Photographs', tag:'Part 1',
    q:`Foto: ${x.scene}\nPilih kalimat yang paling tepat menggambarkannya.`,
    audio:x.opts.map((o, k) => `${'ABCD'[k]}. ${o}`).join(' '),
    opts:x.opts, a:x.a, why:x.why, noShuffle:true, id:`t1-${i}`
  })),
  p2: TOEIC_P2.map(([q, opts, a], i) => ({
    t:'mcq', part:'Part 2 — Question-Response', tag:'Part 2',
    q, audio:`${q} ${opts.map((o, k) => `${'ABC'[k]}. ${o}`).join(' ')}`,
    opts, a, noShuffle:true, id:`t2-${i}`
  })),
  p3: TOEIC_P3, p4: TOEIC_P4, p6: TOEIC_P6
};
TOEIC.listenings = [...TOEIC.listenings, ...TOEIC_P3, ...TOEIC_P4]
  .filter((l, i, arr) => arr.findIndex(x => x.id === l.id) === i);

IELTS.quickBank = [...IELTS.quickBank, ...IELTS_BANK];
TOEFL.quickBank = [...TOEFL.quickBank, ...TOEFL_BANK];
TOEIC.quickBank = [...TOEIC.quickBank, ...TOEIC_BANK];

export const EXAMS = { ielts: IELTS, toefl: TOEFL, toeic: TOEIC };
export const EXAM_LIST = [IELTS, TOEFL, TOEIC];

/* ── Statistik isi (dipakai di beranda) ───────────────────────── */
export const CONTENT_STATS = {
  kata: ALL_LEX.length,
  grammar: GRAMMAR.length,
  drill: GRAMMAR.reduce((a, g) => a + (g.drills?.length || 0), 0),
  pelajaran: ALL_LESSONS.length,
  unit: ALL_UNITS.length,
  bacaan: READINGS.length + IELTS.readings.length + TOEFL.readings.length + TOEIC.readings.length,
  simakan: DICTATIONS.reduce((a, d) => a + d.items.length, 0)
    + IELTS.listenings.length + TOEFL.listenings.length + TOEIC.listenings.length,
  trik: TRICKS.length,
  rencana: PLANS.length,
  soalUjian: EXAM_LIST.reduce((a, e) =>
    a + (e.quickBank?.length || 0)
      + e.readings.reduce((s, r) => s + r.questions.length, 0)
      + e.listenings.reduce((s, l) => s + l.questions.length, 0), 0)
};

/* ── Indeks pencarian ─────────────────────────────────────────── */
export const SEARCH_INDEX = [
  ...GRAMMAR.map(g => ({ t: `${g.title} — ${g.titleId}`, k: 'Grammar ' + g.level, href: `#/grammar/${g.id}` })),
  ...ALL_PACKS.map(p => ({ t: `${p.title} — ${p.titleId}`, k: 'Kosakata', href: `#/vocab/${p.id}` })),
  ...ALL_UNITS.map(u => ({ t: `${u.title} — ${u.titleId}`, k: 'Unit ' + u.level, href: `#/unit/${u.id}` })),
  ...READINGS.map(r => ({ t: r.title, k: 'Bacaan ' + r.level, href: `#/reading/${r.id}` })),
  ...EXAM_LIST.map(e => ({ t: e.name, k: 'Ujian', href: `#/exam/${e.id}` })),
  ...PLANS.map(p => ({ t: p.name, k: 'Rencana', href: `#/plan/${p.id}` })),
  ...TRICKS.map((t, i) => ({ t: t.t, k: 'Trik ' + t.g, href: `#/tricks#t${i}` })),
  { t: 'Kartu Hafalan (SRS)', k: 'Latihan', href: '#/review' },
  { t: 'Tes Penempatan', k: 'Mulai', href: '#/placement' },
  { t: 'Pelafalan & IPA', k: 'Keterampilan', href: '#/pronunciation' },
  { t: 'Laboratorium Menulis', k: 'Keterampilan', href: '#/writing' },
  { t: 'Laboratorium Berbicara', k: 'Keterampilan', href: '#/speaking' },
  { t: 'Laboratorium Menyimak', k: 'Keterampilan', href: '#/listening' },
  { t: 'Statistik & Kemajuan', k: 'Akun', href: '#/stats' },
  { t: 'Pengaturan', k: 'Akun', href: '#/settings' }
];

export function search(q) {
  const s = q.trim().toLowerCase();
  if (!s) return [];
  const hits = SEARCH_INDEX.filter(x => x.t.toLowerCase().includes(s) || x.k.toLowerCase().includes(s));
  const words = ALL_LEX.filter(x => x.w.toLowerCase().includes(s) || x.id_.toLowerCase().includes(s))
    .slice(0, 12)
    .map(x => ({ t: `${x.w} — ${x.id_}`, k: x.packTitle, href: `#/vocab/${x.pack}?q=${encodeURIComponent(x.w)}` }));
  return [...hits, ...words].slice(0, 40);
}
