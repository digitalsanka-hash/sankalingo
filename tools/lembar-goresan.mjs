/* ── Lembar banding goresan: gambar goresan vs huruf sungguhan ─────
   Jalankan: node tools/lembar-goresan.mjs [keluar.png] [kode:huruf ...]
   Tanpa argumen huruf, seluruh 242 huruf dibuat sekaligus.

   MENGAPA ALAT INI BERUPA GAMBAR, BUKAN ANGKA.

   Saya lebih dulu menulis pemeriksa yang MENGHITUNG kemiripan: goresan
   dan huruf sungguhan digambar di kanvas yang sama, lalu diukur berapa
   bagian huruf yang tidak tersentuh goresan. Alat itu gagal, dan
   gagalnya ke dua arah sekaligus:

     · ia menuduh delapan huruf yang ternyata BENAR (Г, Л, М, ㄱ, 丿 …)
       — huruf bertinta tipis selalu terlihat "tidak tertutup";
     · ia MELOLOSKAN sebelas huruf yang benar-benar salah, termasuk
       gugus "sch" Jerman yang menggambar "⌐h" tanpa huruf s sama
       sekali, dan sembilan huruf beraksen yang arah aksennya terbalik.

   Yang menemukan kesebelasnya adalah lembar gambar ini, dilihat mata.
   Jadi angkanya dibuang dan gambarnya yang disimpan. Untuk cacat yang
   memang bisa dipastikan tanpa mata — arah aksen — aturannya dipindah
   ke tools/audit-goresan.mjs, tempat ia bisa menggagalkan pemeriksaan.

   Berpasangan: KIRI goresan yang diajarkan aplikasi, KANAN huruf itu
   menurut font sistem.                                               */
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const AKAR = join(dirname(fileURLToPath(import.meta.url)), '..');
const imp = p => import(pathToFileURL(join(AKAR, p)).href);
const KELUAR = process.argv[2] || join(AKAR, 'output', 'banding-goresan.png');
const MINTA = process.argv.slice(3);

const CHROME = ['C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe']
  .find(p => existsSync(p));

const semua = [];
for (const c of ['ko', 'ja', 'zh', 'ar', 'ru', 'de', 'fr', 'es']) {
  const L = Object.values(await imp(`data/lang/${c}.js`))[0];
  let G = null;
  try { G = Object.values(await imp(`data/lang/${c}-goresan.js`))[0]; } catch {}
  for (const set of (L.scripts || []))
    for (const g of (set.chars || [])) {
      const strokes = (G && G[g.c]) || g.strokes || [];
      if (strokes.length) semua.push({ kode: c, c: g.c, strokes, box: g.box || 100 });
    }
}

const pilih = MINTA.length
  ? MINTA.map(t => { const [k, ch] = t.split(':'); return semua.find(g => g.kode === k && g.c === ch); }).filter(Boolean)
  : semua;

const KOL = 4, SEL = 260;
const baris = Math.ceil(pilih.length / KOL);
const html = `<!doctype html><meta charset="utf-8"><body style="margin:0;background:#fff;font:12px system-ui">
<div style="display:grid;grid-template-columns:repeat(${KOL},${SEL * 2 + 14}px);gap:10px;padding:10px">
${pilih.map(g => `<div style="border:1px solid #ddd;border-radius:6px;padding:4px">
  <div style="text-align:center;color:#555;margin-bottom:2px">${g.kode} · ${g.strokes.length} goresan</div>
  <div style="display:flex;gap:6px;align-items:center;justify-content:center">
    <svg viewBox="0 0 ${g.box} ${g.box}" width="${SEL}" height="${SEL}" style="background:#fafafa;border-radius:4px">
      ${g.strokes.map(d => `<path d="${d}" fill="none" stroke="#1f6f5c" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`).join('')}
    </svg>
    <div style="width:${SEL}px;height:${SEL}px;background:#fafafa;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:${Math.round(SEL * 0.72)}px;line-height:1;color:#111">${g.c}</div>
  </div></div>`).join('')}
</div></body>`;

const tmp = join(AKAR, 'output', '_banding.html');
if (!existsSync(join(AKAR, 'output'))) mkdirSync(join(AKAR, 'output'), { recursive: true });
writeFileSync(tmp, html, 'utf8');
execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--no-sandbox',
  `--screenshot=${KELUAR}`, `--window-size=${KOL * (SEL * 2 + 24) + 30},${baris * (SEL + 46) + 30}`,
  '--virtual-time-budget=8000', pathToFileURL(tmp).href], { stdio: 'ignore' });
console.log('lembar:', KELUAR, '·', pilih.length, 'huruf');
