/* ── Sistem pengulangan berjarak (SM-2 termodifikasi) ────────────
   Kartu jatuh tempo dihitung dari tanggal, bukan jam, supaya sesi
   belajar harian terasa jelas: "hari ini ada 42 kartu".            */

import { state, mutate, todayKey, daysBetween, addXP } from './state.js';

export const GRADES = [
  { g: 0, label: 'Lupa',   hint: 'ulang hari ini' },
  { g: 3, label: 'Sulit',  hint: 'jeda pendek' },
  { g: 4, label: 'Bagus',  hint: 'jeda normal' },
  { g: 5, label: 'Mudah',  hint: 'jeda panjang' }
];

const fresh = () => ({ ef: 2.5, iv: 0, rep: 0, due: todayKey(), lapses: 0, seen: 0 });

export function card(id) { return state().srs[id] || null; }

export function ensure(id) {
  if (!state().srs[id]) mutate(s => { s.srs[id] = fresh(); });
  return state().srs[id];
}

/** Terapkan nilai ingatan. g: 0|3|4|5 */
export function grade(id, g) {
  mutate(s => {
    const c = s.srs[id] || (s.srs[id] = fresh());
    c.seen++;
    if (g < 3) {
      c.rep = 0; c.iv = 0; c.lapses++;
      c.ef = Math.max(1.3, c.ef - 0.2);
      c.due = todayKey();                       // ulang lagi hari ini
    } else {
      c.ef = Math.max(1.3, c.ef + (0.1 - (5 - g) * (0.08 + (5 - g) * 0.02)));
      c.rep++;
      c.iv = c.rep === 1 ? 1 : c.rep === 2 ? 6 : Math.round(c.iv * c.ef);
      if (g === 5) c.iv = Math.round(c.iv * 1.25);
      c.iv = Math.min(c.iv, 365);
      const d = new Date(); d.setDate(d.getDate() + c.iv);
      c.due = todayKey(d);
    }
  });
  addXP(g >= 3 ? 4 : 1, 'vocab');
  return state().srs[id];
}

/** Kartu yang jatuh tempo hari ini atau lebih awal. */
export function dueIds(pool = null) {
  const t = todayKey(), srs = state().srs;
  let ids = Object.keys(srs).filter(id => daysBetween(srs[id].due, t) >= 0);
  if (pool) ids = ids.filter(id => pool.includes(id));
  return ids.sort((a, b) => srs[a].due.localeCompare(srs[b].due));
}

export function dueCount() { return dueIds().length; }

/** Susun antrean sesi: kartu jatuh tempo dulu, lalu kartu baru. */
export function buildQueue(allIds, { newLimit = 20, reviewLimit = 120 } = {}) {
  const srs = state().srs;
  const due = dueIds(allIds).slice(0, reviewLimit);
  const fresh = allIds.filter(id => !srs[id]).slice(0, newLimit);
  return [...due, ...fresh];
}

export function stats() {
  const srs = state().srs, t = todayKey();
  const all = Object.values(srs);
  const mature = all.filter(c => c.iv >= 21).length;
  const young = all.filter(c => c.iv > 0 && c.iv < 21).length;
  const learning = all.filter(c => c.iv === 0).length;
  const due = all.filter(c => daysBetween(c.due, t) >= 0).length;
  const avgEf = all.length ? all.reduce((a, c) => a + c.ef, 0) / all.length : 2.5;
  return { total: all.length, mature, young, learning, due, avgEf: avgEf.toFixed(2) };
}

/** Ramalan beban 14 hari ke depan. */
export function forecast(days = 14) {
  const srs = state().srs, t = todayKey(), out = Array(days).fill(0);
  for (const c of Object.values(srs)) {
    const d = daysBetween(t, c.due);
    if (d < 0) out[0]++; else if (d < days) out[d]++;
  }
  return out;
}
