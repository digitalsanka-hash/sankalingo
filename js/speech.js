/* ── Suara: pengucapan (TTS) & pengenalan ucapan (STT) ───────────
   Semua audio dibuat langsung di peramban — tanpa berkas mp3.      */

import { state } from './state.js';

let voices = [];
const synth = window.speechSynthesis;

export function loadVoices() {
  return new Promise(res => {
    const grab = () => {
      voices = synth ? synth.getVoices() : [];
      if (voices.length) res(voices);
    };
    grab();
    if (!voices.length && synth) {
      synth.addEventListener('voiceschanged', grab, { once: true });
      setTimeout(() => res(voices), 1200);
    }
  });
}

export const allVoices = () => voices;
export const englishVoices = () => voices.filter(v => /^en(-|_|$)/i.test(v.lang));

/* Penilaian mutu suara: makin tinggi makin manusiawi.
   Suara "Natural"/"Neural"/"Online" milik Microsoft dan suara Google jauh
   lebih hidup daripada suara SAPI lama (David/Zira/Mark) yang terdengar
   seperti robot. */
export function voiceScore(v) {
  const n = v.name || '';
  let s = 0;
  if (/Natural|Neural/i.test(n)) s += 60;
  if (/Online/i.test(n)) s += 25;
  if (/^Google/i.test(n)) s += 45;
  if (/Samantha|Daniel|Karen|Moira|Serena|Ava|Allison|Evan/i.test(n)) s += 35;  // suara Apple
  if (/Microsoft/i.test(n) && !/Natural|Neural|Online/i.test(n)) s -= 15;       // SAPI lama
  if (/Desktop/i.test(n)) s -= 20;
  if (/en-GB/i.test(v.lang)) s += 6;
  if (/en-US/i.test(v.lang)) s += 5;
  if (/en-AU|en-IE|en-NZ/i.test(v.lang)) s += 3;
  if (v.localService === false) s += 10;   // suara awan biasanya lebih baik
  return s;
}

/** Daftar suara Inggris terurut dari yang paling alami. */
export function rankedEnglishVoices() {
  return englishVoices().slice().sort((a, b) => voiceScore(b) - voiceScore(a));
}

export function voiceQuality(v) {
  const s = voiceScore(v);
  return s >= 45 ? { label: 'Sangat alami', kind: 'ok' }
       : s >= 20 ? { label: 'Alami', kind: 'brand' }
       : s >= 0  ? { label: 'Standar', kind: '' }
                 : { label: 'Robotik', kind: 'warn' };
}

export function pickVoice(pref) {
  const want = pref ?? state().settings.voice;
  if (want) {
    const hit = voices.find(v => v.voiceURI === want);
    if (hit) return hit;
  }
  return rankedEnglishVoices()[0] || null;
}

/* Gaya bicara — mengubah kecepatan, nada, dan panjang jeda.
   "santai" sengaja sedikit lebih cepat dengan nada naik tipis supaya
   tidak terdengar seperti pembaca berita mesin. */
export const VOICE_STYLES = {
  santai:  { label: 'Santai — seperti mengobrol', rate: 1.0,  pitch: 1.04, gap: 260, jitter: 0.05 },
  jelas:   { label: 'Jelas — untuk belajar',      rate: 0.88, pitch: 1.0,  gap: 420, jitter: 0.02 },
  pelan:   { label: 'Pelan — untuk menirukan',    rate: 0.68, pitch: 0.99, gap: 620, jitter: 0 },
  ujian:   { label: 'Kecepatan ujian',            rate: 1.08, pitch: 1.0,  gap: 200, jitter: 0.03 }
};
export const styleOf = name => VOICE_STYLES[name] || VOICE_STYLES.santai;

export const ttsReady = () => !!synth;

/* Chrome punya tiga kebiasaan yang membuat pembacaan sering gagal:
   1. cancel() yang langsung disusul speak() membuat ucapan tidak pernah mulai;
   2. teks panjang terpotong diam-diam di sekitar 200–300 karakter;
   3. mesin ucapan "tertidur" setelah ~15 detik dan perlu resume() berkala.
   Tiga hal itu ditangani di sini. */

/* Potongan dijaga di bawah ~12 detik ucapan supaya tidak kena batas 15 detik
   Chrome — dengan begitu tidak perlu akal-akalan pause()/resume() yang justru
   sering memutus suara pada Windows. */
const CHUNK = 180;
let speakToken = 0;      // menandai sesi ucapan terkini

/** Pecah teks panjang di batas kalimat, lalu di batas koma/spasi. */
export function chunkText(text, max = CHUNK) {
  const parts = String(text).replace(/\s+/g, ' ').trim()
    .split(/(?<=[.!?;:])\s+/).filter(Boolean);
  const out = [];
  for (let p of parts) {
    while (p.length > max) {
      let cut = p.lastIndexOf(',', max);
      if (cut < max * 0.4) cut = p.lastIndexOf(' ', max);
      if (cut <= 0) cut = max;
      out.push(p.slice(0, cut + 1).trim());
      p = p.slice(cut + 1).trim();
    }
    if (!p) continue;
    const last = out[out.length - 1];
    if (last && last.length + p.length + 1 <= max) out[out.length - 1] = last + ' ' + p;
    else out.push(p);
  }
  return out.length ? out : [String(text)];
}

function speakOne(text, opts, token) {
  return new Promise(resolve => {
    const st = styleOf(opts.style ?? state().settings.style);
    const u = new SpeechSynthesisUtterance(text);
    const v = pickVoice(opts.voice);
    if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'en-US';
    // Sedikit variasi acak antar kalimat supaya tidak terdengar monoton.
    const jit = st.jitter ? (Math.random() - 0.5) * 2 * st.jitter : 0;
    const base = opts.rate ?? (state().settings.rate ?? 1) * st.rate;
    u.rate = Math.max(0.4, Math.min(1.6, base + jit));
    u.pitch = opts.pitch ?? (st.pitch + jit * 0.3);
    u.volume = opts.volume ?? 1;

    let done = false;
    const finish = () => { if (!done) { done = true; clearTimeout(guard); resolve(); } };
    u.onend = finish;
    u.onerror = e => { if (e.error && e.error !== 'interrupted' && e.error !== 'canceled')
      console.warn('TTS gagal:', e.error, '→', text.slice(0, 40)); finish(); };

    // pengaman: sebagian peramban tidak pernah memicu onend
    const guard = setTimeout(finish, 3000 + text.length * 110);

    if (token !== speakToken) return finish();
    synth.speak(u);
  });
}

/** Ucapkan teks Inggris. Promise selesai saat audio habis. */
export async function say(text, opts = {}) {
  if (!synth || !text) return;
  if (!voices.length) await loadVoices();

  const token = ++speakToken;
  const wasSpeaking = synth.speaking || synth.pending;
  try { synth.cancel(); } catch {}
  /* Chrome butuh jeda setelah cancel, kalau tidak ucapan berikutnya hilang.
     Diukur di mesin ini: jeda 0 md → mulai 147 md, jeda 25 md → 54 md,
     jeda 120-300 md → 58-75 md. Jadi 25 md sudah cukup; sisanya cuma
     menambah lag yang terasa di setiap klik. */
  if (wasSpeaking) await new Promise(r => setTimeout(r, 25));
  if (token !== speakToken) return;

  const st = styleOf(opts.style ?? state().settings.style);
  const parts = chunkText(text);
  for (let i = 0; i < parts.length; i++) {
    if (token !== speakToken) return;
    await speakOne(parts[i], opts, token);
    // jeda antar kalimat membuat pembacaan terdengar bernapas, bukan diburu
    if (i < parts.length - 1) await new Promise(r => setTimeout(r, st.gap));
  }
}

let listToken = 0;

export function stopSpeaking() {
  speakToken++; listToken++;
  try { synth?.cancel(); } catch {}
}

/** Ucapkan berurutan dengan jeda — dipakai untuk dikte & shadowing.
 *  Berhenti sendiri bila pengguna pindah halaman atau memulai pemutaran lain. */
export async function sayList(list, gapMs = 700, onEach) {
  const mine = ++listToken;
  for (let i = 0; i < list.length; i++) {
    if (mine !== listToken) return;
    onEach?.(i);
    await say(list[i]);
    if (mine !== listToken) return;
    await new Promise(r => setTimeout(r, gapMs));
  }
}

/* ── Pengenalan ucapan ───────────────────────────────────────── */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
export const sttReady = () => !!SR;

/* Pesan galat yang menjelaskan sebab, bukan sekadar kode. */
export const STT_ERRORS = {
  'network': 'Pengenalan ucapan Chrome diproses di server Google, jadi butuh koneksi internet. ' +
             'Periksa koneksi, matikan VPN/proxy, lalu coba lagi. Kalau tetap gagal, pakai tombol ' +
             '“Saya sudah mengucapkannya”.',
  'not-allowed': 'Akses mikrofon ditolak. Klik ikon gembok di bilah alamat → izinkan Mikrofon, lalu muat ulang.',
  'service-not-allowed': 'Layanan pengenalan ucapan diblokir. Coba jalankan lewat http://localhost (bukan alamat IP) dan izinkan mikrofon.',
  'no-speech': 'Tidak ada suara terdengar. Dekatkan mikrofon dan bicara sedikit lebih keras.',
  'audio-capture': 'Mikrofon tidak terdeteksi. Cek perangkat masukan suara di pengaturan Windows.',
  'aborted': 'Rekaman dihentikan.',
  'language-not-supported': 'Bahasa ini tidak didukung mesin pengenalan ucapan.'
};
export const sttMessage = code => STT_ERRORS[code] || ('Gagal merekam (' + code + ').');

export function listen({ lang = 'en-US', interim = true, onPartial, retries = 1 } = {}) {
  return new Promise((resolve, reject) => {
    if (!SR) return reject(Object.assign(
      new Error('Peramban ini belum mendukung pengenalan ucapan. Pakai Chrome atau Edge.'), { code: 'unsupported' }));
    if (!navigator.onLine) return reject(Object.assign(
      new Error(STT_ERRORS.network), { code: 'network' }));

    const r = new SR();
    r.lang = lang; r.interimResults = interim; r.maxAlternatives = 3; r.continuous = false;
    let last = '', failed = null;

    r.onresult = e => {
      let txt = '';
      for (let i = 0; i < e.results.length; i++) txt += e.results[i][0].transcript;
      last = txt.trim();
      if (!e.results[e.results.length - 1].isFinal) onPartial?.(last);
    };
    r.onerror = e => { failed = e.error; };
    r.onend = () => {
      if (!failed) return resolve(last);
      // galat sesaat sering pulih pada percobaan kedua
      if (retries > 0 && (failed === 'network' || failed === 'no-speech') && navigator.onLine) {
        onPartial?.('Mencoba lagi…');
        return setTimeout(() => listen({ lang, interim, onPartial, retries: retries - 1 })
          .then(resolve, reject), 400);
      }
      reject(Object.assign(new Error(sttMessage(failed)), { code: failed }));
    };
    try { r.start(); } catch (e) { reject(Object.assign(e, { code: 'start-failed' })); }
    listen._stop = () => { try { r.stop(); } catch {} };
  });
}
export function stopListening() { listen._stop?.(); }

/** Diagnosis cepat untuk halaman Pengaturan. */
export function speechDiagnostics() {
  return {
    tts: !!synth,
    voices: voices.length,
    english: englishVoices().length,
    stt: !!SR,
    secure: window.isSecureContext,
    online: navigator.onLine,
    host: location.hostname
  };
}

/* ── Penilaian ucapan sederhana ──────────────────────────────── */
const norm = s => String(s).toLowerCase().replace(/[^a-z0-9' ]/g, ' ').replace(/\s+/g, ' ').trim();

/** Bandingkan kalimat target dengan hasil dengar → skor 0-100 + tanda per kata. */
export function scoreSpeech(target, heard) {
  const a = norm(target).split(' ').filter(Boolean);
  const b = norm(heard).split(' ').filter(Boolean);
  const pool = [...b];
  const marks = a.map(w => {
    const i = pool.findIndex(x => x === w);
    if (i >= 0) { pool.splice(i, 1); return { w, ok: true }; }
    const j = pool.findIndex(x => lev(x, w) <= Math.max(1, Math.floor(w.length / 4)));
    if (j >= 0) { pool.splice(j, 1); return { w, ok: true, near: true }; }
    return { w, ok: false };
  });
  const hit = marks.filter(m => m.ok).length;
  const extra = pool.length;
  const score = Math.max(0, Math.round((hit / Math.max(1, a.length)) * 100 - extra * 4));
  return { score, marks, extra };
}

export function lev(a, b) {
  const m = a.length, n = b.length;
  if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, i) => i), cur = new Array(n + 1);
  for (let i = 1; i <= m; i++) {
    cur[0] = i;
    for (let j = 1; j <= n; j++)
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    [prev, cur] = [cur, prev];
  }
  return prev[n];
}

/** Kemiripan teks 0-100 — dipakai dikte & jawaban isian. */
export function similarity(a, b) {
  const x = norm(a), y = norm(b);
  if (!x && !y) return 100;
  const d = lev(x, y);
  return Math.max(0, Math.round((1 - d / Math.max(x.length, y.length, 1)) * 100));
}
