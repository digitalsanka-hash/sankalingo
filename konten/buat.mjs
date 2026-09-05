/* ── Pembangun gambar konten ──────────────────────────────────────

   Membaca rencana konten, menulis HTML sementara, lalu merendernya
   jadi PNG lewat Chrome headless. Caption dan tagar ditulis ke berkas
   markdown per hari, supaya yang mengunggah tinggal salin-tempel
   tanpa membuka berkas ini.

   Jalankan:  node konten/buat.mjs           (semua pekan)
              node konten/buat.mjs 1 2       (pekan tertentu)          */

import { writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { TIPE } from './template.mjs';

const DIR = dirname(fileURLToPath(import.meta.url));
const AKAR = join(DIR, '..');
const KELUAR = join(AKAR, 'output', 'konten');
const SEMENTARA = join(DIR, '_render');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

/* Pekan dimuat dinamis supaya menambah pekan baru tidak menuntut
   berkas ini ikut disunting. */
const PEKAN = [];
for (const n of [1, 2, 3, 4, 5]) {
  const jalur = join(DIR, `pekan${n}.mjs`);
  if (!existsSync(jalur)) continue;
  const modul = await import(`./pekan${n}.mjs`);
  PEKAN.push({ n, isi: modul[`PEKAN${n}`] ?? [] });
}

const diminta = process.argv.slice(2).map(Number).filter(Boolean);
const dipakai = diminta.length ? PEKAN.filter(p => diminta.includes(p.n)) : PEKAN;

const dua = (n) => String(n).padStart(2, '0');

mkdirSync(SEMENTARA, { recursive: true });
let jumlahGambar = 0;

for (const pekan of dipakai) {
  /* Konten dikelompokkan per hari supaya foldernya sejajar dengan cara
     orang mengunggah: satu hari, satu folder, buka, unggah, selesai. */
  const perHari = new Map();
  for (const k of pekan.isi) {
    if (!perHari.has(k.hari)) perHari.set(k.hari, []);
    perHari.get(k.hari).push(k);
  }

  for (const [hari, daftar] of [...perHari].sort((a, b) => a[0] - b[0])) {
    const folder = join(KELUAR, `hari-${dua(hari)}`);
    mkdirSync(folder, { recursive: true });

    const catatan = [`# Hari ${hari} — SankaLingo GO\n`];

    for (const k of daftar.sort((a, b) => a.slot - b.slot)) {
      const banyak = k.gambar.length > 1;

      k.gambar.forEach((g, i) => {
        const nama = banyak
          ? `slot${k.slot}-${k.nama}-${dua(i + 1)}`
          : `slot${k.slot}-${k.nama}`;

        const html = TIPE[g.tipe](g);
        const berkasHtml = join(SEMENTARA, `${nama}.html`);
        writeFileSync(berkasHtml, html, 'utf8');

        execFileSync(CHROME, [
          '--headless=old', '--disable-gpu', '--hide-scrollbars',
          '--window-size=1080,1350', '--virtual-time-budget=9000',
          `--screenshot=${join(folder, nama + '.png')}`,
          'file:///' + berkasHtml.replace(/\\/g, '/').replace(/ /g, '%20'),
        ], { stdio: 'ignore' });

        jumlahGambar++;
      });

      catatan.push(
        `## Slot ${k.slot} · ${k.jenis === 'carousel' ? `Carousel (${k.gambar.length} slide)` : 'Gambar tunggal'}`,
        '',
        '**Berkas:** ' + (banyak
          ? `\`slot${k.slot}-${k.nama}-01.png\` … \`-${dua(k.gambar.length)}.png\` (unggah berurutan)`
          : `\`slot${k.slot}-${k.nama}.png\``),
        '',
        '**Caption:**', '', '```', k.caption, '```', '',
        '**Tagar:**', '', '```', k.tagar, '```', '', '---', '',
      );
    }

    writeFileSync(join(folder, 'caption.md'), catatan.join('\n'), 'utf8');
    console.log(`hari ${dua(hari)} · ${daftar.length} konten`);
  }
}

rmSync(SEMENTARA, { recursive: true, force: true });
console.log(`\nselesai — ${jumlahGambar} gambar di output/konten/`);
