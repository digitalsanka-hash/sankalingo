/* ── Pemeriksa kontras warna ──────────────────────────────────────
   Dijalankan: node tools/audit-kontras.mjs

   Membaca assets/css/tokens.css langsung, bukan mengukur lewat DOM.
   Pengukuran lewat DOM ternyata menipu: ia hanya melihat
   background-color, sedangkan tombol dan lencana di aplikasi ini
   memakai gradien (background-image). Akibatnya tombol ungu bertulisan
   putih terbaca "rasio 1,08" — padahal sebenarnya terbaca jelas.

   Di sini pasangan warnanya ditulis apa adanya: warna teks apa di atas
   latar apa. Warna beralpha dikomposit dulu ke latar di belakangnya,
   karena --surface memang setengah tembus.

   Ambang WCAG AA: 4.5:1 teks biasa · 3:1 teks besar & unsur bukan teks. */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const akar = join(dirname(fileURLToPath(import.meta.url)), '..');
const css = readFileSync(join(akar, 'assets/css/tokens.css'), 'utf8');

/* ── Membaca token ──────────────────────────────────────────────── */
/* Mengumpulkan SEMUA blok yang cocok, bukan yang pertama saja: warna
   tingkat CEFR tinggal di blok ":root {" kedua di ujung berkas. */
function blok(pilih) {
  const keluar = {};
  let i = 0;
  while ((i = css.indexOf(pilih, i)) >= 0) {
    const mulai = css.indexOf('{', i), henti = css.indexOf('}', mulai);
    for (const baris of css.slice(mulai + 1, henti).split(';')) {
      const m = baris.match(/(--[\w-]+)\s*:\s*([^;]+)/);
      if (m) keluar[m[1]] = m[2].trim();
    }
    i = henti;
  }
  return keluar;
}

const dasar = blok(':root {');
/* Warna teks lencana tingkat ditulis langsung di components.css, bukan
   sebagai token — didaftarkan di sini supaya bisa ikut diuji. */
dasar['--tinta-lencana'] = '#08121f';
const gelap = { ...dasar, ...blok(':root, :root[data-theme="dark"]') };
const terang = { ...dasar, ...blok(':root[data-theme="light"]') };

/* var(--x) ditelusuri sampai ketemu warnanya. */
function nilai(tok, nama, dalam = 0) {
  let v = tok[nama];
  if (!v || dalam > 8) return null;
  const m = v.match(/^var\((--[\w-]+)\)$/);
  return m ? nilai(tok, m[1], dalam + 1) : v;
}

/* ── Warna ──────────────────────────────────────────────────────── */
function urai(c) {
  c = String(c).trim();
  const m = c.match(/^#([0-9a-f]{3,8})$/i);
  if (!m) return null;
  let h = m[1];
  if (h.length === 3 || h.length === 4) h = [...h].map(x => x + x).join('');
  const n = p => parseInt(h.slice(p, p + 2), 16);
  return { r: n(0), g: n(2), b: n(4), a: h.length === 8 ? n(6) / 255 : 1 };
}

/* Warna setengah tembus HARUS dikomposit dulu; kalau tidak, rasionya
   dihitung terhadap warna yang tidak pernah benar-benar tampil. */
const timpa = (atas, bawah) => ({
  r: atas.r * atas.a + bawah.r * (1 - atas.a),
  g: atas.g * atas.a + bawah.g * (1 - atas.a),
  b: atas.b * atas.a + bawah.b * (1 - atas.a),
  a: 1,
});

const cerah = ({ r, g, b }) => {
  const f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};
const rasio = (a, b) => {
  const l1 = cerah(a), l2 = cerah(b);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
};

/* ── Pasangan yang benar-benar dipakai ──────────────────────────── */
/* [token teks, token latar, ambang, keterangan] */
const PASANGAN = [
  ['--text',       '--bg',            4.5, 'teks utama di latar halaman'],
  ['--text',       '--bg-elev',       4.5, 'teks utama di panel'],
  ['--text',       '--surface',       4.5, 'teks utama di kartu'],
  ['--text',       '--surface-solid', 4.5, 'teks utama di kartu padat'],
  ['--text',       '--surface-2',     4.5, 'teks utama di kartu tingkat 2'],
  ['--text',       '--surface-3',     4.5, 'teks utama di kartu tingkat 3'],
  ['--text-soft',  '--bg',            4.5, 'teks lembut di latar halaman'],
  ['--text-soft',  '--surface',       4.5, 'teks lembut di kartu'],
  ['--text-soft',  '--surface-2',     4.5, 'teks lembut di kartu tingkat 2'],
  ['--text-mute',  '--bg',            4.5, 'teks redup di latar halaman'],
  ['--text-mute',  '--surface',       4.5, 'teks redup di kartu'],
  ['--text-mute',  '--surface-2',     4.5, 'teks redup di kartu tingkat 2'],
  ['--text-mute',  '--surface-3',     4.5, 'teks redup di kartu tingkat 3'],
  ['--brand-text', '--bg',            4.5, 'teks merek di latar halaman'],
  ['--brand-text', '--surface',       4.5, 'teks merek di kartu'],
  ['--brand-text', '--brand-soft',    4.5, 'lencana merek'],
  ['--ok',         '--ok-soft',       4.5, 'lencana berhasil'],
  ['--warn',       '--warn-soft',     4.5, 'lencana peringatan'],
  ['--bad',        '--bad-soft',      4.5, 'lencana kesalahan'],
  ['--info',       '--info-soft',     4.5, 'lencana keterangan'],
  ['--ok',         '--bg',            4.5, 'teks berhasil di latar'],
  ['--warn',       '--bg',            4.5, 'teks peringatan di latar'],
  ['--bad',        '--bg',            4.5, 'teks kesalahan di latar'],
  ['--info',       '--bg',            4.5, 'teks keterangan di latar'],
  /* .btn--primary memakai color:#fff di atas gradien violet-400 →
     violet-600. Yang menentukan adalah ujung PALING TERANG. */
  ['--white',      '--violet-500',    4.5, 'teks putih di tombol utama (ujung terterang)'],
  ['--white',      '--violet-600',    4.5, 'teks putih di tombol utama (ujung tergelap)'],
  /* .badge--lv memakai warna tingkat sebagai LATAR dengan teks
     #08121f di atasnya (components.css:75) — jadi yang harus diuji
     adalah teks gelap itu di atas warnanya, bukan warnanya di atas
     latar halaman. */
  ['--tinta-lencana', '--lv-a1', 4.5, 'teks lencana A1'],
  ['--tinta-lencana', '--lv-a2', 4.5, 'teks lencana A2'],
  ['--tinta-lencana', '--lv-b1', 4.5, 'teks lencana B1'],
  ['--tinta-lencana', '--lv-b2', 4.5, 'teks lencana B2'],
  ['--tinta-lencana', '--lv-c1', 4.5, 'teks lencana C1'],
  ['--tinta-lencana', '--lv-c2', 4.5, 'teks lencana C2'],
  /* Garis pembatas di sini tidak membawa informasi (tidak dipakai
     sendirian untuk menandai apa pun), jadi WCAG tidak mensyaratkan
     rasio apa pun untuknya. Diuji sekadar agar tidak lenyap. */
  ['--line-strong', '--bg', 1.2, 'garis pembatas — keterangan saja'],
];

let gagal = 0;
for (const [namaTema, tok] of [['GELAP', gelap], ['TERANG', terang]]) {
  const bg = urai(nilai(tok, '--bg'));
  console.log(`\n── tema ${namaTema} ${'─'.repeat(46)}`);
  const baris = [];
  for (const [depan, belakang, ambang, ket] of PASANGAN) {
    const cd = urai(nilai(tok, depan)), cb = urai(nilai(tok, belakang));
    if (!cd || !cb) { console.log(`   ? ${depan} / ${belakang} — tidak terbaca`); continue; }
    const r = rasio(timpa(cd, bg), timpa(cb, bg));
    const lulus = r >= ambang;
    if (!lulus) gagal++;
    baris.push({ lulus, teks: `${lulus ? '  ok' : ' ✗ '} ${r.toFixed(2).padStart(5)} / ${ambang}  ` +
      `${depan} di ${belakang}  — ${ket}` });
  }
  for (const b of baris.filter(x => !x.lulus)) console.log(b.teks);
  const ok = baris.filter(x => x.lulus).length;
  console.log(`   ${ok}/${baris.length} pasangan lolos`);
}

console.log(`\n${gagal} pasangan di bawah ambang`);
process.exit(gagal ? 1 : 0);
