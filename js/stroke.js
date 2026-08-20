/* Mesin animasi urutan goresan aksara.

   Tiap aksara disimpan sebagai kumpulan garis tengah (centerline) dalam
   kotak 100×100. Mesin ini:
     · menggambar goresan satu per satu sesuai urutan yang benar
     · menandai titik MULAI tiap goresan dengan nomor
     · menjalankan mode LATIH: pengguna menelusuri dengan jari/tetikus,
       lalu dinilai dari kedekatan jalur, arah, dan kelengkapan.

   Penilaian sengaja longgar pada ketepatan bentuk tetapi ketat pada
   URUTAN dan ARAH — dua hal itulah yang benar-benar salah kalau
   seseorang belajar menulis aksara tanpa panduan. */

const NS = 'http://www.w3.org/2000/svg';

const svgEl = (tag, attrs = {}) => {
  const n = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
  return n;
};

/** Panjang sebuah path. */
function pathLen(d) {
  const p = svgEl('path', { d });
  const holder = svgEl('svg');
  holder.append(p);
  document.body.append(holder);
  const L = p.getTotalLength();
  holder.remove();
  return L;
}

/** Titik-titik sampel di sepanjang path (koordinat 0–100). */
export function samplePath(d, n = 24, box = 100) {
  const holder = svgEl('svg', { viewBox: `0 0 ${box} ${box}` });
  const p = svgEl('path', { d });
  holder.append(p);
  holder.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
  document.body.append(holder);
  const L = p.getTotalLength();
  const pts = Array.from({ length: n }, (_, i) => {
    const pt = p.getPointAtLength((L * i) / (n - 1));
    return [pt.x, pt.y];
  });
  holder.remove();
  return pts;
}

/* ── Penggambar ───────────────────────────────────────────────── */

/**
 * Bangun papan aksara.
 * @param {HTMLElement} host
 * @param {{c:string, strokes:string[], hints?:string[]}} glyph
 * @param {{size?:number, guide?:boolean, ghost?:boolean, numbers?:boolean}} opts
 */
export function buildBoard(host, glyph, opts = {}) {
  const { size = 200, guide = true, ghost = true, numbers = true } = opts;
  const box = glyph.box || opts.box || 100;      // KanjiVG memakai 109
  const k = box / 100;                            // faktor skala terhadap 100
  host.innerHTML = '';
  const svg = svgEl('svg', {
    viewBox: `0 0 ${box} ${box}`, width: size, height: size, class: 'glyph-svg'
  });
  svg.dataset.box = box;

  if (guide) {
    const g = svgEl('g', { class: 'glyph-guide' });
    g.append(svgEl('rect', { x: 2 * k, y: 2 * k, width: 96 * k, height: 96 * k, rx: 4 * k }));
    g.append(svgEl('line', { x1: 50 * k, y1: 2 * k, x2: 50 * k, y2: 98 * k }));
    g.append(svgEl('line', { x1: 2 * k, y1: 50 * k, x2: 98 * k, y2: 50 * k }));
    g.append(svgEl('line', { x1: 2 * k, y1: 2 * k, x2: 98 * k, y2: 98 * k, class: 'diag' }));
    g.append(svgEl('line', { x1: 98 * k, y1: 2 * k, x2: 2 * k, y2: 98 * k, class: 'diag' }));
    svg.append(g);
  }

  const ghostG = svgEl('g', { class: 'glyph-ghost' });
  const inkG = svgEl('g', { class: 'glyph-ink' });
  const markG = svgEl('g', { class: 'glyph-marks' });
  if (ghost) glyph.strokes.forEach(d => ghostG.append(svgEl('path', { d })));
  svg.append(ghostG, inkG, markG);
  host.append(svg);

  const paths = glyph.strokes.map(d => {
    const p = svgEl('path', { d });
    const L = p.getTotalLength ? 0 : 0;
    inkG.append(p);
    const len = p.getTotalLength();
    p.style.strokeDasharray = len;
    p.style.strokeDashoffset = len;
    return { el: p, len, d };
  });

  if (numbers) {
    glyph.strokes.forEach((d, i) => {
      const [x, y] = samplePath(d, 2, box)[0];
      const dot = svgEl('circle', { cx: x, cy: y, r: 6.5 * k, class: 'glyph-start' });
      const t = svgEl('text', { x, y: y + 2.4 * k, class: 'glyph-num',
                                style: `font-size:${7 * k}px` });
      t.textContent = i + 1;
      markG.append(dot, t);
    });
  }

  svg.style.setProperty('--gw', (7 * k).toFixed(2));
  return { svg, paths, inkG, markG, ghostG, box };
}

/** Jalankan animasi goresan satu per satu. */
export function animateStrokes(board, { speed = 1, onStroke } = {}) {
  return new Promise(resolve => {
    board.paths.forEach(p => { p.el.style.transition = 'none'; p.el.style.strokeDashoffset = p.len; });
    let i = 0;
    const step = () => {
      if (i >= board.paths.length) return resolve();
      const p = board.paths[i];
      onStroke?.(i);
      const ms = Math.max(260, p.len * 14 / speed);
      p.el.style.transition = `stroke-dashoffset ${ms}ms linear`;
      requestAnimationFrame(() => { p.el.style.strokeDashoffset = 0; });
      i++;
      setTimeout(step, ms + 180);
    };
    setTimeout(step, 120);
  });
}

/** Tampilkan seluruh goresan tanpa animasi. */
export function showAll(board) {
  board.paths.forEach(p => { p.el.style.transition = 'none'; p.el.style.strokeDashoffset = 0; });
}

/* ── Mode latih menulis ───────────────────────────────────────── */

/**
 * Aktifkan penelusuran. Pengguna menggambar goresan satu per satu; tiap
 * goresan dinilai lalu digantikan bentuk bersihnya.
 */
export function enableTracing(board, glyph, { onProgress, onDone } = {}) {
  const svg = board.svg;
  const traceG = svgEl('g', { class: 'glyph-trace' });
  svg.append(traceG);
  showAllGhostOnly(board);

  let idx = 0, drawing = false, pts = [], live = null;
  const results = [];

  const box = board.box || 100;
  const toLocal = e => {
    const r = svg.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * box;
    const y = ((e.clientY - r.top) / r.height) * box;
    return [x, y];
  };

  const start = e => {
    if (idx >= glyph.strokes.length) return;
    e.preventDefault();
    drawing = true; pts = [toLocal(e)];
    live = svgEl('polyline', { points: pts.map(p => p.join(',')).join(' ') });
    traceG.append(live);
    svg.setPointerCapture?.(e.pointerId);
  };
  const move = e => {
    if (!drawing) return;
    pts.push(toLocal(e));
    live.setAttribute('points', pts.map(p => p.join(',')).join(' '));
  };
  const end = () => {
    if (!drawing) return;
    drawing = false;
    const target = glyph.strokes[idx];
    const res = scoreStroke(target, pts, box);
    results.push(res);
    live.classList.add(res.ok ? 'is-ok' : 'is-bad');
    setTimeout(() => live.remove(), 420);
    if (res.ok) {
      const p = board.paths[idx];
      p.el.style.transition = 'stroke-dashoffset .28s ease-out';
      p.el.style.strokeDashoffset = 0;
      idx++;
      onProgress?.(idx, glyph.strokes.length, res);
      if (idx >= glyph.strokes.length) {
        const avg = Math.round(results.reduce((a, r) => a + r.score, 0) / results.length);
        onDone?.({ score: avg, tries: results.length, results });
      }
    } else {
      onProgress?.(idx, glyph.strokes.length, res);
    }
  };

  svg.addEventListener('pointerdown', start);
  svg.addEventListener('pointermove', move);
  svg.addEventListener('pointerup', end);
  svg.addEventListener('pointerleave', end);
  svg.style.touchAction = 'none';
  svg.classList.add('is-tracing');

  return {
    reset() {
      idx = 0; results.length = 0; traceG.innerHTML = '';
      board.paths.forEach(p => { p.el.style.transition = 'none'; p.el.style.strokeDashoffset = p.len; });
      onProgress?.(0, glyph.strokes.length, null);
    },
    destroy() {
      svg.removeEventListener('pointerdown', start);
      svg.removeEventListener('pointermove', move);
      svg.removeEventListener('pointerup', end);
      svg.removeEventListener('pointerleave', end);
      svg.classList.remove('is-tracing');
    }
  };
}

function showAllGhostOnly(board) {
  board.paths.forEach(p => { p.el.style.transition = 'none'; p.el.style.strokeDashoffset = p.len; });
}

/** Nilai satu goresan terhadap jalur target. */
export function scoreStroke(targetD, pts, box = 100) {
  if (pts.length < 3) return { ok: false, score: 0, reason: 'Goresan terlalu pendek.' };
  const target = samplePath(targetD, 24, box);
  const user = resample(pts, 24);
  const norm = 100 / box;   // samakan ambang toleransi ke skala 100

  // 1. arah: bandingkan titik awal & akhir
  const dStart = dist(target[0], user[0]);
  const dEnd = dist(target[23], user[23]);
  const reversed = dist(target[0], user[23]) + dist(target[23], user[0]) < dStart + dEnd;
  if (reversed) return { ok: false, score: 25, reason: 'Arah goresan terbalik — mulai dari titik bernomor.' };

  // 2. kedekatan jalur
  const err = (target.reduce((a, t, i) => a + dist(t, user[i]), 0) / 24) * norm;
  const score = Math.max(0, Math.round(100 - err * 3.2));

  if (dStart * norm > 26) return { ok: false, score, reason: 'Titik mulai terlalu jauh dari lingkaran bernomor.' };
  if (err > 17) return { ok: false, score, reason: 'Jalur goresan menyimpang terlalu jauh.' };
  return { ok: true, score, reason: score >= 85 ? 'Rapi sekali.' : score >= 70 ? 'Bagus.' : 'Diterima — coba lebih rapi.' };
}

const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);

/** Ubah rangkaian titik bebas jadi n titik berjarak sama. */
function resample(pts, n) {
  const segs = [];
  let total = 0;
  for (let i = 1; i < pts.length; i++) {
    const d = dist(pts[i - 1], pts[i]);
    segs.push(d); total += d;
  }
  if (total === 0) return Array.from({ length: n }, () => pts[0]);
  const out = [pts[0]];
  let target = total / (n - 1), acc = 0, i = 1;
  while (out.length < n && i < pts.length) {
    const d = segs[i - 1];
    if (acc + d >= target) {
      const t = (target - acc) / d;
      out.push([pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * t,
                pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * t]);
      target += total / (n - 1);
    }
    acc += d; i++;
  }
  while (out.length < n) out.push(pts[pts.length - 1]);
  return out;
}
