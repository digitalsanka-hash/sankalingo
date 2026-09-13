/* Mencocokkan nama kolom yang dipakai Edge Function dengan skema SQL.

   Ada satu kesalahan yang lolos sampai ke tangan pemakai: kolom
   `kode_lisensi.dipakai_oleh` dipanggil padahal tidak pernah ada di
   tabelnya. TypeScript tidak menangkapnya — bagi TypeScript itu cuma
   string. Basis data baru mengeluh saat baris itu benar-benar
   dijalankan, yaitu ketika seseorang menekan tombol.

   Berkas ini membaca definisi tabel dari supabase/*.sql, lalu memeriksa
   tiap .select(), .update(), .insert(), dan .eq() di supabase/functions.

   Jalankan:  node tools/cek-kolom.mjs                                  */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const AKAR = join(dirname(fileURLToPath(import.meta.url)), '..');
const SQL = join(AKAR, 'supabase');
const FUNGSI = join(SQL, 'functions');

/* ── Skema: nama tabel → himpunan kolom ──────────────────────────── */
const skema = new Map();
for (const berkas of readdirSync(SQL).filter(f => f.endsWith('.sql'))) {
  const teks = readFileSync(join(SQL, berkas), 'utf8');
  const re = /create table if not exists\s+public\.(\w+)\s*\(([\s\S]*?)\n\);/gi;
  let m;
  while ((m = re.exec(teks))) {
    const [, tabel, badan] = m;
    const kolom = new Set();
    for (const baris of badan.split('\n')) {
      const bersih = baris.replace(/--.*$/, '').trim();
      if (!bersih) continue;
      /* Baris batasan tabel bukan kolom. */
      if (/^(primary|foreign|unique|check|constraint)\b/i.test(bersih)) continue;
      const nama = bersih.match(/^(\w+)\s/);
      if (nama) kolom.add(nama[1]);
    }
    /* Kolom yang ditambahkan belakangan lewat ALTER. */
    const alter = new RegExp(`alter table (?:if exists )?public\\.${tabel}\\s+add column (?:if not exists )?(\\w+)`, 'gi');
    let a;
    while ((a = alter.exec(teks))) kolom.add(a[1]);
    skema.set(tabel, kolom);
  }
}
/* ALTER di berkas lain dari tabelnya. */
for (const berkas of readdirSync(SQL).filter(f => f.endsWith('.sql'))) {
  const teks = readFileSync(join(SQL, berkas), 'utf8');
  const re = /alter table (?:if exists )?public\.(\w+)\s+add column (?:if not exists )?(\w+)/gi;
  let m;
  while ((m = re.exec(teks))) skema.get(m[1])?.add(m[2]);
}

/* ── Berkas fungsi ──────────────────────────────────────────────── */
const berkasTs = [];
const telusur = (d) => {
  for (const n of readdirSync(d)) {
    const p = join(d, n);
    if (statSync(p).isDirectory()) telusur(p);
    else if (n.endsWith('.ts')) berkasTs.push(p);
  }
};
telusur(FUNGSI);

const BAWAAN = new Set(['count', '*']);
let cacat = 0;

for (const p of berkasTs) {
  const teks = readFileSync(p, 'utf8');
  const temuan = [];

  /* Tiap .from('tabel') diikuti rangkaian pemanggilan sampai titik koma. */
  const re = /\.from\(\s*['"](\w+)['"]\s*\)([\s\S]{0,700}?);/g;
  let m;
  while ((m = re.exec(teks))) {
    const [, tabel, ekor] = m;
    const kolom = skema.get(tabel);
    if (!kolom) { temuan.push(`tabel tidak dikenal: ${tabel}`); continue; }

    const baris = teks.slice(0, m.index).split('\n').length;

    /* .select('a, b, c') */
    for (const s of ekor.matchAll(/\.select\(\s*['"]([^'"]*)['"]/g)) {
      for (const k of s[1].split(',').map(x => x.trim().split(/[:(\s]/)[0]).filter(Boolean)) {
        if (BAWAAN.has(k) || kolom.has(k)) continue;
        temuan.push(`${baris}: select ${tabel}.${k} — kolom tidak ada`);
      }
    }
    /* .eq('kolom', …) dan saudaranya */
    for (const s of ekor.matchAll(/\.(eq|neq|gt|gte|lt|lte|like|ilike|is|in|order)\(\s*['"](\w+)['"]/g)) {
      if (!kolom.has(s[2])) temuan.push(`${baris}: ${s[1]}(${tabel}.${s[2]}) — kolom tidak ada`);
    }
    /* .update({ a: …, b: … }) dan .insert({ … }) */
    for (const s of ekor.matchAll(/\.(update|insert|upsert)\(\s*\{([\s\S]*?)\}/g)) {
      for (const k of s[2].matchAll(/(?:^|[,{\s])(\w+)\s*:/g)) {
        if (!kolom.has(k[1])) temuan.push(`${baris}: ${s[1]} ${tabel}.${k[1]} — kolom tidak ada`);
      }
    }
    /* baris.kolom sesudah select — dipakai membaca hasilnya. */
  }

  const nama = relative(AKAR, p).replace(/\\/g, '/');
  if (temuan.length) {
    cacat += temuan.length;
    console.log(`\n${nama}`);
    [...new Set(temuan)].forEach(t => console.log('  · ' + t));
  } else {
    console.log(`OK  ${nama}`);
  }
}

console.log(`\nTabel diketahui: ${[...skema.keys()].join(', ')}`);
console.log(`${berkasTs.length} berkas diperiksa, ${cacat} rujukan kolom bermasalah.`);
process.exit(cacat ? 1 : 0);
