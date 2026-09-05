/* Hitung kata tiap naskah VO dan bandingkan dengan durasi yang
   dijanjikan judulnya, pada tempo 2,3 kata per detik. */

import { readFileSync } from 'node:fs';

const TEMPO = 2.3;
const teks = readFileSync(process.argv[2], 'utf8');

const baris = teks.split(/\r?\n/);
let vo = null;
const hasil = [];

for (const b of baris) {
  const judul = b.match(/^# VO (\d+) — (.+)$/);
  if (judul) {
    vo = { no: judul[1], nama: judul[2], detik: null, kata: 0 };
    hasil.push(vo);
    continue;
  }
  if (!vo) continue;

  const dur = b.match(/^\*\*(\d+) detik/);
  if (dur) { vo.detik = Number(dur[1]); continue; }

  /* Baris naskah: diawali "> " dan bukan penanda bagian "**0:00–..." */
  if (!b.startsWith('> ')) continue;
  if (/^> \*\*\d+:\d\d/.test(b)) continue;

  const bersih = b.slice(2)
    .replace(/\/\//g, ' ')          // penanda jeda
    .replace(/\*+/g, '')            // penebalan
    .replace(/[*_`]/g, '');
  vo.kata += bersih.split(/\s+/).filter(w => /[a-zA-Z0-9À-ſ]/.test(w)).length;
}

console.log('VO   kata   target   perkiraan   selisih');
for (const v of hasil) {
  const perkiraan = v.kata / TEMPO;
  const selisih = perkiraan - v.detik;
  const tanda = Math.abs(selisih) <= 3 ? 'pas' : (selisih > 0 ? 'KEPANJANGAN' : 'kependekan');
  console.log(
    `${v.no.padEnd(4)} ${String(v.kata).padStart(4)}   ${String(v.detik).padStart(3)}s   ` +
    `${perkiraan.toFixed(1).padStart(7)}s   ${selisih >= 0 ? '+' : ''}${selisih.toFixed(1)}s  ${tanda}  ${v.nama}`
  );
}
