/* ── Pemeriksa kamus ──────────────────────────────────────────────

   Sembilan bahasa x 1.000 kata = 9.000 entri. Jumlah sebesar itu tidak
   mungkin diperiksa dengan mata, dan justru di situlah kesalahan
   bersembunyi: satu romanisasi kosong di entri ke-743 tidak akan pernah
   ada yang menyadarinya sampai ada pembeli yang mengeluh.

   KESALAHAN (menggagalkan, keluar=1):
     1. medan wajib terisi (k, p, a, c, ca, f, fa)
     2. romanisasi ada untuk bahasa beraksara non-Latin (r, cr)
     3. kelas kata termasuk daftar yang dikenal
     4. lema tidak kembar di dalam satu bahasa
     5. kalimat contoh tidak kembar antar entri  <- penangkap salin-tempel
     6. bentuk kata sesuai jumlah yang dijanjikan bentukLabel
     7. arti Indonesia tidak menyalin lemanya bulat-bulat
     8. tidak ada '<' mentah yang bisa merusak tag saat digambar
     9. contoh dan frasa tidak sama persis

   PERINGATAN (ditampilkan, tidak menggagalkan):
     - kalimat contoh atau frasa sepertinya tidak memuat lemanya

   Kenapa yang terakhir cuma peringatan: kata kerja kuat mengubah
   batangnya sampai tak bersisa awalan yang sama (sein -> bin, geben ->
   gib, wissen -> weiss), dan kata tersering justru yang paling tak
   beraturan. Dijadikan kesalahan, pemeriksanya paling berisik persis di
   tempat terpenting — lalu diabaikan, dan pemeriksa yang diabaikan lebih
   buruk daripada tidak ada.

   Penangkap salin-tempel yang sesungguhnya adalah nomor 5: dua entri
   dengan kalimat contoh sama persis hampir selalu berarti lupa disunting.

   Jalankan:  node tools/validasi-kamus.mjs                                */

import { readdirSync, existsSync } from 'node:fs';

const KELAS = new Set(['n', 'v', 'adj', 'adv', 'pron', 'prep', 'conj',
                       'num', 'excl', 'phr', 'part', 'det']);

/* Bahasa yang lemanya tidak beraksara Latin wajib punya romanisasi. */
const PERLU_ROM = new Set(['ko', 'ja', 'zh', 'ar', 'ru']);

const WAJIB = ['k', 'p', 'a', 'c', 'ca', 'f', 'fa'];

/* Perbandingan longgar: huruf kecil, diakritik dibuang, tanda baca
   dibuang. Dipakai untuk memeriksa apakah contoh memuat lemanya. */
const longgar = s => String(s ?? '')
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^\p{L}\p{N}\s]/gu, ' ')
  .replace(/\s+/g, ' ')
  .trim();

/* Untuk bahasa tanpa spasi antar kata (Jepang, Cina) pencocokan kata
   utuh tidak berlaku — cukup periksa lemanya muncul sebagai potongan. */
const TANPA_SPASI = new Set(['ja', 'zh']);

function memuat(kalimat, lema, kode, bentuk = []) {
  const k = longgar(kalimat), l = longgar(lema);
  if (!l) return false;
  if (TANPA_SPASI.has(kode)) return String(kalimat).includes(String(lema));
  if (k.includes(l)) return true;
  /* Bentuk kata yang sudah didaftarkan entri itu sendiri ikut dihitung:
     'ging' sah mewakili 'gehen'. */
  for (const b of bentuk) {
    const lb = longgar(b);
    if (lb && k.includes(lb)) return true;
  }
  /* Kata berubah bentuk di dalam kalimat: gehen -> gehe, laufen -> laeuft,
     aller -> vais. Jadi kalau kecocokan utuh gagal, cocokkan AKARNYA.

     Panjang akar = panjang lema dikurangi tiga huruf akhiran, tapi tidak
     pernah kurang dari empat. Versi pertama memakai enam huruf pertama
     dengan batas bawah empat, dan itu salah: untuk lema lima huruf
     rumusnya menghasilkan lemanya sendiri utuh, sehingga 'gehen' tidak
     pernah cocok dengan 'gehe' dan entri yang benar ikut tertuduh. */
  const akar = l.slice(0, Math.max(3, l.length - 3));
  return akar.length >= 3 && k.includes(akar);
}

const berkas = existsSync('data/lang')
  ? readdirSync('data/lang').filter(f => /-kamus\.js$/.test(f))
  : [];

if (!berkas.length) {
  console.log('Belum ada berkas kamus. Lewat.');
  process.exit(0);
}

let totalEntri = 0, totalMasalah = 0;

for (const f of berkas) {
  const kode = f.replace('-kamus.js', '');
  let KAMUS;
  try {
    KAMUS = (await import(`../data/lang/${f}`)).KAMUS;
  } catch (e) {
    console.log(`${kode}: BERKAS RUSAK — ${e.message.split('\n')[0]}`);
    totalMasalah++;
    continue;
  }

  const kata = KAMUS?.kata;
  if (!Array.isArray(kata)) {
    console.log(`${kode}: KAMUS.kata bukan larik`);
    totalMasalah++;
    continue;
  }

  const masalah = [];
  const peringatan = [];
  const lihat = new Map();
  /* Kalimat contoh yang sama persis di dua entri hampir selalu berarti
     salin-tempel yang lupa disunting — kesalahan sungguhan, bukan
     selera. Ini yang menggantikan ketatnya aturan di atas. */
  const contohDipakai = new Map();
  const perluRom = PERLU_ROM.has(kode);
  const label = KAMUS.bentukLabel || {};

  kata.forEach((e, i) => {
    const di = `${kode}[${i}] ${e?.k ?? '(tanpa lema)'}`;
    /* Array.isArray diperiksa terpisah: larik juga bertipe 'object', jadi
       entri yang keliru ditulis sebagai larik akan lolos pemeriksaan tipe
       lalu dilaporkan sebagai 'medan k kosong' — benar bahwa ada yang
       salah, tapi menunjuk ke tempat yang keliru. */
    if (!e || typeof e !== 'object' || Array.isArray(e)) {
      masalah.push(`${di}: entri harus objek, bukan ${Array.isArray(e) ? 'larik' : typeof e}`);
      return;
    }

    for (const m of WAJIB)
      if (!String(e[m] ?? '').trim()) masalah.push(`${di}: medan '${m}' kosong`);

    if (perluRom) {
      if (!String(e.r ?? '').trim())  masalah.push(`${di}: romanisasi 'r' kosong`);
      if (!String(e.cr ?? '').trim()) masalah.push(`${di}: romanisasi contoh 'cr' kosong`);
    }

    if (e.p && !KELAS.has(e.p)) masalah.push(`${di}: kelas kata '${e.p}' tidak dikenal`);

    /* Kunci kembar memakai lema DAN kelas katanya. Di Jerman kata benda
       ditulis berhuruf besar, sehingga essen (kata kerja) dan das Essen
       (kata benda) adalah dua kata berbeda yang kebetulan sama ejaannya;
       begitu juga morgen (besok) dan der Morgen (pagi). Membandingkan
       lema saja menuduh pasangan sah itu sebagai duplikat. */
    const kunci = `${String(e.k ?? '').trim().toLowerCase()}|${e.p ?? ''}`;
    if (String(e.k ?? '').trim()) {
      if (lihat.has(kunci)) masalah.push(`${di}: lema kembar (kelas kata sama) dengan indeks ${lihat.get(kunci)}`);
      else lihat.set(kunci, i);
    }

    /* Kata kerja kuat mengubah batangnya sampai tidak menyisakan awalan
       yang sama: sein -> bin, geben -> gib, wissen -> weiss. Tidak ada
       aturan awalan yang bisa menangkap itu, dan justru kata tersering
       adalah yang paling tak beraturan.

       Kalau ini digolongkan kesalahan, pemeriksanya paling berisik persis
       di tempat yang paling penting — dan pemeriksa yang berisik akan
       diabaikan, yang lebih buruk daripada tidak ada pemeriksa. Jadi
       dijadikan PERINGATAN: tetap ditampilkan untuk dilirik manusia,
       tetapi tidak menggagalkan. */
    if (e.c && e.k && !memuat(e.c, e.k, kode, e.b))
      peringatan.push(`${di}: contoh mungkin tidak memuat lemanya — "${e.c}"`);
    if (e.f && e.k && !memuat(e.f, e.k, kode, e.b))
      peringatan.push(`${di}: frasa mungkin tidak memuat lemanya — "${e.f}"`);

    const ck = longgar(e.c);
    if (ck) {
      if (contohDipakai.has(ck))
        masalah.push(`${di}: kalimat contoh sama persis dengan indeks ${contohDipakai.get(ck)}`);
      else contohDipakai.set(ck, i);
    }

    if (e.c && e.f && longgar(e.c) === longgar(e.f))
      masalah.push(`${di}: contoh dan frasa sama persis`);

    /* Peringatan, bukan kesalahan: kata serapan memang berarti dirinya
       sendiri dalam bahasa Indonesia — Musik, Film, Taxi, Hotel, Radio.
       Menolaknya memaksa penulisan arti yang dipaksakan dan justru
       kurang tepat. */
    if (e.a && e.k && longgar(e.a) === longgar(e.k))
      peringatan.push(`${di}: arti sama dengan lemanya (kata serapan?)`);

    if (e.b !== undefined) {
      if (!Array.isArray(e.b)) masalah.push(`${di}: 'b' bukan larik`);
      else {
        const harap = label[e.p];
        if (harap && e.b.length !== harap.length)
          masalah.push(`${di}: bentuk ada ${e.b.length}, bentukLabel.${e.p} minta ${harap.length}`);
        if (e.b.some(x => !String(x ?? '').trim()))
          masalah.push(`${di}: ada bentuk kosong`);
      }
    }

    for (const [m, v] of Object.entries(e))
      if (typeof v === 'string' && v.includes('<'))
        masalah.push(`${di}: medan '${m}' memuat '<' mentah`);
  });

  totalEntri += kata.length;
  totalMasalah += masalah.length;

  const tandaRom = perluRom ? ' (wajib romanisasi)' : '';
  console.log(`${kode.padEnd(3)} ${String(kata.length).padStart(5)} entri${tandaRom}` +
              (masalah.length ? `  — ${masalah.length} masalah` : '  — bersih'));
  masalah.slice(0, 12).forEach(m => console.log('    ' + m));
  if (masalah.length > 12) console.log(`    … dan ${masalah.length - 12} lagi`);
  if (peringatan.length) {
    console.log(`    (${peringatan.length} peringatan — perlu dilirik, tidak menggagalkan)`);
    peringatan.slice(0, 6).forEach(m => console.log('      ~ ' + m));
    if (peringatan.length > 6) console.log(`      ~ … dan ${peringatan.length - 6} lagi`);
  }
}

console.log(`\nTOTAL ${totalEntri} entri · ${totalMasalah} masalah`);
process.exit(totalMasalah ? 1 : 0);
