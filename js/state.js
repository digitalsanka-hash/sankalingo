/* ── Penyimpanan & keadaan aplikasi ──────────────────────────────
   Semua data belajar disimpan di localStorage. Tanpa server.        */

const KEY = 'fasih.v1';
const listeners = new Set();

export const todayKey = (d = new Date()) => {
  const t = new Date(d.getTime() - d.getTimezoneOffset() * 6e4);
  return t.toISOString().slice(0, 10);
};
export const daysBetween = (a, b) =>
  Math.round((new Date(b + 'T00:00') - new Date(a + 'T00:00')) / 864e5);

const blank = () => ({
  v: 1,
  createdAt: todayKey(),
  name: '',
  lang: 'en',            // bahasa yang sedang dipelajari
  level: 'A1',            // perkiraan level CEFR pengguna
  placed: false,          // sudah ikut tes penempatan?
  goal: 'general',        // general | ielts | toefl | toeic
  targetScore: '',
  dailyMin: 30,
  xp: 0,
  streak: { count: 0, best: 0, last: '' },
  history: {},            // { '2026-08-15': { xp, min, cards, items } }
  lessons: {},            // { lessonId: { done:ts, score } }
  units: {},              // { unitId: pctSelesai }
  srs: {},                // { cardId: { ef, iv, rep, due, lapses, seen } }
  quiz: {},               // { key: { best, tries, last } }
  exams: [],              // riwayat simulasi ujian
  drills: {},             // { grammarId: { right, wrong } }
  plan: null,             // { id, start, done:{ '3':[0,2] } }
  checklist: {},          // centang manual { key:true }
  notes: {},              // catatan pribadi per materi
  saved: [],              // penanda / bookmark
  skills: { listening: 0, speaking: 0, reading: 0, writing: 0, grammar: 0, vocab: 0 },
  last: {},               // { <kode>: { hash, label, at } } — untuk tombol "Lanjutkan"
  settings: { theme: 'dark', voice: '', rate: 1, style: 'santai',
              autoSpeak: true, sound: true, romanIPA: true },
  updatedAt: 0            // cap waktu perubahan — dipakai penyelaras awan
});

let S = load();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return blank();
    const parsed = JSON.parse(raw);
    return { ...blank(), ...parsed, settings: { ...blank().settings, ...(parsed.settings || {}) },
             skills: { ...blank().skills, ...(parsed.skills || {}) },
             streak: { ...blank().streak, ...(parsed.streak || {}) } };
  } catch { return blank(); }
}

let saveTimer = null;
let gagalSimpan = false;
const gagalListener = new Set();
/** Dipanggil sekali kalau localStorage penuh / diblokir, supaya pengguna
    tahu kemajuannya berhenti tersimpan — bukan gagal diam-diam. */
export const onGagalSimpan = fn => { gagalListener.add(fn); return () => gagalListener.delete(fn); };

function persist() {
  clearTimeout(saveTimer);
  /* Cap waktu perubahan dipakai penyelaras awan (js/awan.js) untuk
     menentukan sisi mana yang lebih baru saat menggabungkan dua
     perangkat. Distempel di sini supaya tidak ada jalur penyimpanan
     yang bisa lupa memperbaruinya. */
  S.updatedAt = Date.now();
  saveTimer = setTimeout(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(S));
      gagalSimpan = false;
    } catch (e) {
      console.warn('Gagal menyimpan:', e);
      if (!gagalSimpan) {
        gagalSimpan = true;
        gagalListener.forEach(f => { try { f(e); } catch {} });
      }
    }
  }, 120);
}

export const state = () => S;
export function set(patch) {
  S = typeof patch === 'function' ? patch(S) : { ...S, ...patch };
  persist(); emit();
}
export function mutate(fn) { fn(S); persist(); emit(); }
export function onChange(fn) { listeners.add(fn); return () => listeners.delete(fn); }
function emit() { listeners.forEach(f => { try { f(S); } catch (e) { console.error(e); } }); }

/* ── XP, rentetan (streak), riwayat harian ───────────────────── */
export const LEVEL_STEPS = [0, 150, 400, 800, 1400, 2200, 3200, 4500, 6100, 8000, 10500,
  13500, 17000, 21000, 26000, 32000, 39000, 47000, 56000, 66000, 78000];

export function xpLevel(xp = S.xp) {
  let lv = 1;
  for (let i = 0; i < LEVEL_STEPS.length; i++) if (xp >= LEVEL_STEPS[i]) lv = i + 1;
  const cur = LEVEL_STEPS[lv - 1] ?? 0;
  const next = LEVEL_STEPS[lv] ?? cur + 12000;
  return { lv, cur, next, pct: Math.min(100, Math.round(((xp - cur) / (next - cur)) * 100)) };
}

export function addXP(amount, kind = '') {
  const k = todayKey();
  mutate(s => {
    s.xp += amount;
    const h = s.history[k] || (s.history[k] = { xp: 0, min: 0, items: 0 });
    h.xp += amount; h.items += 1;
    if (kind && s.skills[kind] !== undefined) s.skills[kind] += amount;
    touchStreak(s, k);
  });
  return amount;
}

export function addMinutes(min) {
  const k = todayKey();
  mutate(s => {
    const h = s.history[k] || (s.history[k] = { xp: 0, min: 0, items: 0 });
    h.min += min; touchStreak(s, k);
  });
}

function touchStreak(s, k) {
  if (s.streak.last === k) return;
  const gap = s.streak.last ? daysBetween(s.streak.last, k) : 999;
  s.streak.count = gap === 1 ? s.streak.count + 1 : 1;
  s.streak.last = k;
  if (s.streak.count > s.streak.best) s.streak.best = s.streak.count;
}

/* Rentetan bisa basi kalau pengguna bolos; hitung tampilannya di sini. */
export function liveStreak() {
  const k = todayKey();
  if (!S.streak.last) return 0;
  const gap = daysBetween(S.streak.last, k);
  return gap <= 1 ? S.streak.count : 0;
}

/* ── Kemajuan pelajaran ──────────────────────────────────────── */
export function markLesson(id, score = 100) {
  mutate(s => {
    const prev = s.lessons[id];
    s.lessons[id] = { done: Date.now(), score: Math.max(score, prev?.score || 0) };
  });
}
export const lessonDone = id => !!S.lessons[id];

export function unitPct(unit) {
  if (!unit?.lessons?.length) return 0;
  const n = unit.lessons.filter(l => S.lessons[l.id]).length;
  return Math.round((n / unit.lessons.length) * 100);
}

/* ── Catatan hasil kuis ──────────────────────────────────────── */
export function recordQuiz(key, pct) {
  mutate(s => {
    const q = s.quiz[key] || (s.quiz[key] = { best: 0, tries: 0, last: 0 });
    q.tries++; q.last = pct; q.best = Math.max(q.best, pct);
  });
}
export function recordDrill(topicId, ok) {
  mutate(s => {
    const d = s.drills[topicId] || (s.drills[topicId] = { right: 0, wrong: 0 });
    ok ? d.right++ : d.wrong++;
  });
}
export function recordExam(entry) {
  mutate(s => { s.exams.unshift({ ...entry, at: Date.now() }); s.exams = s.exams.slice(0, 60); });
}

/* ── Checklist & catatan ─────────────────────────────────────── */
export function toggleCheck(key) {
  mutate(s => { s.checklist[key] ? delete s.checklist[key] : (s.checklist[key] = Date.now()); });
  return !!S.checklist[key];
}
export const isChecked = key => !!S.checklist[key];
export function setNote(key, text) { mutate(s => { text ? (s.notes[key] = text) : delete s.notes[key]; }); }
export const getNote = key => S.notes[key] || '';

export function toggleSave(item) {
  mutate(s => {
    const i = s.saved.findIndex(x => x.id === item.id);
    i >= 0 ? s.saved.splice(i, 1) : s.saved.unshift({ ...item, at: Date.now() });
  });
  return S.saved.some(x => x.id === item.id);
}
export const isSaved = id => S.saved.some(x => x.id === id);

/* ── Rencana belajar ─────────────────────────────────────────── */
export function startPlan(id) {
  mutate(s => { s.plan = { id, start: todayKey(), done: {} }; });
}
export function planDay() {
  if (!S.plan) return 0;
  return Math.max(1, daysBetween(S.plan.start, todayKey()) + 1);
}
export function togglePlanTask(day, idx) {
  mutate(s => {
    if (!s.plan) return;
    const arr = s.plan.done[day] || (s.plan.done[day] = []);
    const i = arr.indexOf(idx);
    i >= 0 ? arr.splice(i, 1) : arr.push(idx);
  });
}
export const planTaskDone = (day, idx) => !!S.plan?.done?.[day]?.includes(idx);

/* ── Jejak terakhir — bahan tombol "Lanjutkan" ───────────────── */
const TAK_DILANJUT = /\/(pengaturan|panduan|kemajuan|trik)$/;

export function recordVisit(code, hash, label) {
  if (!code || !hash || TAK_DILANJUT.test(hash)) return;
  const sekarang = S.last?.[code];
  if (sekarang?.hash === hash) return;
  mutate(s => {
    s.last = s.last || {};
    s.last[code] = { hash, label: label || '', at: Date.now() };
  });
}
export const lastVisit = code => S.last?.[code] || null;

/* ── Ekspor / impor / reset ──────────────────────────────────── */
export function exportData() {
  const blob = new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `fasih-progress-${todayKey()}.json`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  mutate(s => { s.lastExport = todayKey(); });
}

/** Kemajuan hanya ada di peramban ini. Ingatkan menyalin sebelum hilang —
    tapi hanya kalau memang sudah ada yang layak diselamatkan. */
export function perluCadangan() {
  const nilai = Object.keys(S.lessons).length + Object.keys(S.srs).length;
  if (nilai < 25) return null;
  const acuan = S.lastExport || S.createdAt;
  const umur = daysBetween(acuan, todayKey());
  return umur >= 30 ? { hari: umur, pernah: !!S.lastExport, butir: nilai } : null;
}
/** Ringkas isi sebuah cadangan, untuk diperlihatkan sebelum memulihkan. */
export function ringkasCadangan(json) {
  const p = typeof json === 'string' ? JSON.parse(json) : json;
  return {
    dibuat: p?.createdAt || '(tidak tercatat)',
    xp: Number(p?.xp) || 0,
    pelajaran: Object.keys(p?.lessons || {}).length,
    kartu: Object.keys(p?.srs || {}).length,
    nama: String(p?.name || '').trim()
  };
}

/** Ringkas kemajuan yang ADA SEKARANG, untuk dibandingkan dengannya. */
export function ringkasSekarang() { return ringkasCadangan(S); }

export function importData(json) {
  const parsed = typeof json === 'string' ? JSON.parse(json) : json;
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed))
    throw new Error('Berkas tidak dikenali');

  /* Bentuknya HARUS diperiksa, bukan cuma "objek".
     Sebelumnya baris di bawah langsung menyebar apa pun ke atas blank(),
     sehingga JSON apa saja — berkas setelan aplikasi lain, satu berkas
     data yang salah pilih di dialog unggah — diterima, menghapus seluruh
     kartu hafalan, XP, rentetan, dan pelajaran secara permanen, lalu
     aplikasi melaporkan "Kemajuan dipulihkan." Tidak ada undo.

     Cadangan yang sah selalu punya penanda versi `v` dan sekurangnya satu
     wadah kemajuan yang benar-benar berupa objek. */
  const wadah = ['lessons', 'srs', 'units', 'quiz', 'history', 'drills'];
  const punyaWadah = wadah.some(k =>
    parsed[k] && typeof parsed[k] === 'object' && !Array.isArray(parsed[k]));
  if (parsed.v === undefined || !punyaWadah)
    throw new Error('bukan berkas cadangan SankaLingo GO');

  S = { ...blank(), ...parsed };
  persist(); emit();
}
export function resetAll() { S = blank(); persist(); emit(); }
