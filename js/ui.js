/* ── Perkakas antarmuka: DOM, toast, modal, grafik SVG ────────── */

export const $  = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

export const esc = s => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

/** Tag template literal untuk merakit HTML.
 *  Nilai TIDAK di-escape otomatis — pakai esc() pada setiap data yang berasal
 *  dari pengguna atau berkas data. raw() dipertahankan sebagai penanda niat
 *  bahwa nilainya memang sudah berupa HTML. */
export function html(strings, ...vals) {
  return strings.reduce((out, s, i) => {
    const v = vals[i - 1];
    return out + (v === undefined || v === null || v === false ? ''
      : (v && v.__raw ? v.value : Array.isArray(v) ? v.join('') : v)) + s;
  });
}
/* raw() menandai nilai yang memang sudah berupa HTML.
 *
 * toString() BUKAN hiasan. Tanpa itu, raw() hanya bekerja di dalam tag
 * html`` — dan begitu dipakai di dalam template literal biasa (yang
 * bertebaran di tiap .map() penyusun daftar), hasilnya "[object
 * Object]" tercetak di layar. Kesalahan itu tidak menimbulkan galat
 * apa pun, jadi baru ketahuan kalau ada yang membaca halamannya.
 *
 * Dengan toString(), raw() berperilaku benar di KEDUA tempat, dan
 * seluruh golongan kesalahan itu hilang. */
export const raw = value => ({
  __raw: true,
  value,
  toString() { return this.value == null || this.value === false ? '' : String(this.value); },
});

export function el(tag, attrs = {}, ...kids) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') n.className = v;
    else if (k === 'html') n.innerHTML = v;
    else if (k.startsWith('on') && typeof v === 'function') n.addEventListener(k.slice(2), v);
    else if (v !== null && v !== false && v !== undefined) n.setAttribute(k, v === true ? '' : v);
  }
  kids.flat().forEach(k => n.append(k?.nodeType ? k : document.createTextNode(k)));
  return n;
}

/* ── acak & sampel ───────────────────────────────────────────── */
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
export const sample = (arr, n = 1) => shuffle(arr).slice(0, n);
export const pick = arr => arr[Math.floor(Math.random() * arr.length)];

/* ── format ──────────────────────────────────────────────────── */
export const pad2 = n => String(n).padStart(2, '0');
export const mmss = sec => `${pad2(Math.floor(Math.max(0, sec) / 60))}:${pad2(Math.max(0, Math.floor(sec % 60)))}`;
export const hhmmss = sec => {
  const s = Math.max(0, Math.floor(sec));
  return s >= 3600 ? `${Math.floor(s / 3600)}:${pad2(Math.floor(s % 3600 / 60))}:${pad2(s % 60)}` : mmss(s);
};
export const nf = n => new Intl.NumberFormat('id-ID').format(Math.round(n));
export const tanggal = ts => new Date(ts).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });

/* ── toast ───────────────────────────────────────────────────── */
export function toast(msg, kind = '', ms = 2800) {
  const box = $('#toasts'); if (!box) return;
  const ico = { ok: '✓', bad: '✕', warn: '!', '': '›' }[kind] || '›';
  const t = el('div', { class: `toast toast--${kind}` },
    el('span', { class: 'toast__ico' }, ico),
    el('div', { html: msg }));
  box.append(t);
  setTimeout(() => { t.classList.add('is-out'); setTimeout(() => t.remove(), 260); }, ms);
}

/* ── modal ───────────────────────────────────────────────────── */
export function modal(contentHtml, { onMount, wide } = {}) {
  const root = $('#modalRoot');
  const wrap = el('div', { class: 'modal' });
  const box = el('div', { class: 'modal__box', style: wide ? 'width:min(920px,100%)' : '' , html: contentHtml });
  wrap.append(box);
  const close = () => { wrap.remove(); document.removeEventListener('keydown', onKey); };
  const onKey = e => { if (e.key === 'Escape') close(); };
  wrap.addEventListener('click', e => { if (e.target === wrap) close(); });
  document.addEventListener('keydown', onKey);
  root.append(wrap);
  box.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', close));
  onMount?.(box, close);
  return close;
}

/** Pasang penangan sekali saja pada elemen yang dipakai berulang.
 *
 *  Beberapa halaman menggambar ulang isi SATU wadah tetap setiap kali tab
 *  berganti, dan memasang addEventListener di dalam fungsi penggambar itu.
 *  Kembali ke tab yang sama berarti penangan kedua ikut menempel: klik
 *  "Lihat model" lalu menjalankan toggle('hide') DUA kali, sehingga
 *  kotaknya terbuka dan langsung tertutup lagi — tombolnya tampak mati,
 *  lalu hidup lagi pada kunjungan ketiga.
 *
 *  `kunci` memisahkan penangan milik tab yang berbeda pada wadah yang
 *  sama, sehingga tiap tab tetap mendapat penangannya sendiri — tepat
 *  satu.  */
/** Susun pilihan ganda yang dijamin unik, sudah teracak, dengan indeks
 *  kunci yang benar.
 *
 *  Tiga pembangkit soal berbeda pernah salah dengan cara yang sama:
 *
 *    · js/views/langcourse.js menyaring pengecoh berdasarkan KATA
 *      (`w[0] !== t`) lalu memetakannya ke ARTI (`w[2]`). Dua kata yang
 *      berbeda bisa berarti sama, sehingga pengecohnya sama persis dengan
 *      kunci — dan `opts.indexOf(arti)` lalu menunjuk salinan pertama,
 *      yang belum tentu yang dimaksud.
 *    · js/mockgen.js menyaring pengecoh terhadap kunci, tetapi tidak
 *      terhadap SESAMA pengecoh, jadi dua pilihan bisa kembar.
 *    · js/views/kanji.js menyaring "kanji yang berbeda", padahal dua kanji
 *      bisa berbagi kata majemuk dengan bacaan yang sama.
 *
 *  Semuanya menghasilkan soal yang mustahil dijawab dengan pasti:
 *  pemelajar menekan pilihan yang teksnya sama dengan kunci lalu dinilai
 *  SALAH.
 *
 *  Karena itu penyaringannya dilakukan atas TEKS PILIHAN, dan indeks
 *  kuncinya diambil dari posisinya sesudah diacak — bukan lewat indexOf,
 *  yang justru rusak persis ketika ada yang kembar.
 *
 *  @returns {{opts:string[], a:number}|null} null kalau pengecohnya kurang.
 */
export function buatPilihan(kunci, calon, jumlah = 3) {
  const teksKunci = String(kunci ?? '').trim();
  if (!teksKunci) return null;
  const dipakai = new Set([teksKunci]);
  const pengecoh = [];
  for (const c of calon) {
    const teks = String(c ?? '').trim();
    if (!teks || dipakai.has(teks)) continue;
    dipakai.add(teks);
    pengecoh.push(teks);
    if (pengecoh.length === jumlah) break;
  }
  if (pengecoh.length < jumlah) return null;
  const urut = shuffle([teksKunci, ...pengecoh].map((teks, i) => ({ teks, kunci: i === 0 })));
  return { opts: urut.map(x => x.teks), a: urut.findIndex(x => x.kunci) };
}

const penangganTerpasang = new WeakMap();
export function pasangSekali(elemen, tipe, kunci, fn) {
  if (!elemen) return;
  let punya = penangganTerpasang.get(elemen);
  if (!punya) penangganTerpasang.set(elemen, punya = new Set());
  const tanda = tipe + ':' + kunci;
  if (punya.has(tanda)) return;
  punya.add(tanda);
  elemen.addEventListener(tipe, fn);
}

export function confirmDialog(title, body, okLabel = 'Ya, lanjut') {
  return new Promise(res => {
    const close = modal(html`
      <h3>${title}</h3>
      <p class="soft" style="margin:.6rem 0 1.3rem">${raw(body)}</p>
      <div class="row row--end">
        <button class="btn btn--ghost" data-no>Batal</button>
        <button class="btn btn--primary" data-yes>${okLabel}</button>
      </div>`, {
      onMount(box, close) {
        box.querySelector('[data-no]').onclick = () => { close(); res(false); };
        box.querySelector('[data-yes]').onclick = () => { close(); res(true); };
      }
    });
  });
}

/* ── grafik SVG ringan ───────────────────────────────────────── */
export function ring(pct, { size = 92, stroke = 9, color = 'var(--brand)', label = '', sub = '' } = {}) {
  const r = (size - stroke) / 2, c = 2 * Math.PI * r;
  const off = c * (1 - Math.min(100, Math.max(0, pct)) / 100);
  return `<div class="ring" style="width:${size}px;height:${size}px">
    <svg width="${size}" height="${size}" aria-hidden="true">
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="var(--surface-3)" stroke-width="${stroke}"/>
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${color}" stroke-width="${stroke}"
        stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${off}"
        style="transition:stroke-dashoffset .8s cubic-bezier(.16,1,.3,1)"/>
    </svg>
    <div class="ring__val"><b>${label || pct + '%'}</b>${sub ? `<span>${esc(sub)}</span>` : ''}</div>
  </div>`;
}

export function radar(data, { size = 260, max = 100 } = {}) {
  const keys = Object.keys(data), n = keys.length, cx = size / 2, cy = size / 2, R = size / 2 - 34;
  const pt = (i, v) => {
    const a = (Math.PI * 2 * i) / n - Math.PI / 2, r = (Math.min(v, max) / max) * R;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  };
  const grid = [0.25, 0.5, 0.75, 1].map(f =>
    `<polygon points="${keys.map((_, i) => pt(i, max * f).join(',')).join(' ')}"
      fill="none" stroke="var(--line)" stroke-width="1"/>`).join('');
  const axes = keys.map((k, i) => {
    const [x, y] = pt(i, max);
    const [lx, ly] = pt(i, max * 1.22);
    return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="var(--line)"/>
      <text x="${lx}" y="${ly}" font-size="10" fill="var(--text-mute)" text-anchor="middle"
        dominant-baseline="middle">${esc(k)}</text>`;
  }).join('');
  const poly = keys.map((k, i) => pt(i, data[k]).join(',')).join(' ');
  const dots = keys.map((k, i) => { const [x, y] = pt(i, data[k]);
    return `<circle cx="${x}" cy="${y}" r="3" fill="var(--brand)"/>`; }).join('');
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="Radar kemampuan">
    ${grid}${axes}
    <polygon points="${poly}" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2" stroke-linejoin="round"/>
    ${dots}</svg>`;
}

export function sparkBars(values, { w = 260, h = 62, color = 'var(--brand)' } = {}) {
  const max = Math.max(1, ...values), n = values.length;
  const bw = w / n;
  return `<svg width="100%" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true">
    ${values.map((v, i) => {
      const bh = Math.max(2, (v / max) * (h - 6));
      return `<rect x="${i * bw + bw * 0.16}" y="${h - bh}" width="${bw * 0.68}" height="${bh}"
        rx="2" fill="${color}" opacity="${0.35 + 0.65 * (v / max)}"/>`;
    }).join('')}</svg>`;
}

export function heatmap(history, days = 91) {
  const cells = [];
  const d = new Date();
  for (let i = days - 1; i >= 0; i--) {
    const dd = new Date(d); dd.setDate(d.getDate() - i);
    const k = new Date(dd.getTime() - dd.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
    const xp = history[k]?.xp || 0;
    const lvl = xp === 0 ? 0 : xp < 30 ? 1 : xp < 80 ? 2 : xp < 160 ? 3 : 4;
    cells.push(`<i data-l="${lvl}" title="${k}: ${xp} XP"></i>`);
  }
  return `<div class="heat">${cells.join('')}</div>`;
}

/* ── lain-lain ───────────────────────────────────────────────── */
export function tabs(items, active, onPick) {
  const wrap = el('div', { class: 'tabs' });
  items.forEach(it => {
    const b = el('button', { class: it.id === active ? 'is-active' : '', type: 'button' }, it.label);
    b.onclick = () => onPick(it.id);
    wrap.append(b);
  });
  return wrap;
}

export function copyText(t) {
  navigator.clipboard?.writeText(t).then(() => toast('Disalin ke papan klip', 'ok'))
    .catch(() => toast('Gagal menyalin', 'bad'));
}

/** Efek naik-angka kecil untuk XP di topbar. */
export function bump(node) {
  if (!node) return;
  node.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.24)' }, { transform: 'scale(1)' }],
    { duration: 380, easing: 'cubic-bezier(.16,1,.3,1)' });
}

/** Bunyi pendek benar/salah tanpa berkas audio. */
let actx;
export function beep(ok = true) {
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const o = actx.createOscillator(), g = actx.createGain();
    o.connect(g); g.connect(actx.destination);
    o.type = 'sine';
    o.frequency.setValueAtTime(ok ? 660 : 240, actx.currentTime);
    if (ok) o.frequency.exponentialRampToValueAtTime(990, actx.currentTime + 0.11);
    g.gain.setValueAtTime(0.06, actx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + 0.22);
    o.start(); o.stop(actx.currentTime + 0.23);
  } catch {}
}
