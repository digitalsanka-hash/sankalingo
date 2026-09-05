/* Hitung kata tiap naskah VO dan bandingkan dengan durasi yang
   dijanjikan judulnya, pada tempo 2,3 kata per detik.

   Yang dihitung adalah blok "Salin ini" — teks polos yang benar-benar
   dibacakan — bukan arahan visual atau rincian waktu di bawahnya.

   Jalankan:  node tools/cek-vo.mjs iklan/VOICE-OVER.md               */

import { readFileSync } from 'node:fs';

const TEMPO = 2.3;
const baris = readFileSync(process.argv[2], 'utf8').split(/\r?\n/);

const hasil = [];
let vo = null;
let dalamBlok = false;

for (const b of baris) {
  const judul = b.match(/^# VO (\d+) — (.+)$/);
  if (judul) {
    vo = { no: judul[1], nama: judul[2], detik: null, kata: 0, selesai: false };
    hasil.push(vo);
    dalamBlok = false;
    continue;
  }
  if (!vo) continue;

  const dur = b.match(/^\*\*(\d+) detik/);
  if (dur) { vo.detik = Number(dur[1]); continue; }

  /* Hanya blok berpagar pertama sesudah judul yang dihitung. */
  if (b.trim() === '```') {
    if (dalamBlok) { dalamBlok = false; vo.selesai = true; }
    else if (!vo.selesai) dalamBlok = true;
    continue;
  }
  if (!dalamBlok) continue;

  vo.kata += b.split(/\s+/).filter(w => /[a-zA-Z0-9]/.test(w)).length;
}

let cacat = 0;
console.log('VO   kata   target   perkiraan   selisih');
for (const v of hasil) {
  const perkiraan = v.kata / TEMPO;
  const selisih = perkiraan - v.detik;
  const pas = Math.abs(selisih) <= 1.5;
  if (!pas) cacat++;
  console.log(
    `${v.no.padEnd(4)} ${String(v.kata).padStart(4)}   ${String(v.detik).padStart(3)}s   ` +
    `${perkiraan.toFixed(1).padStart(7)}s   ${selisih >= 0 ? '+' : ''}${selisih.toFixed(1)}s  ` +
    `${pas ? 'pas' : (selisih > 0 ? 'KEPANJANGAN' : 'kependekan')}  ${v.nama}`
  );
}

console.log(`\n${hasil.length} naskah, ${cacat} di luar toleransi 1,5 detik.`);
process.exit(cacat ? 1 : 0);
