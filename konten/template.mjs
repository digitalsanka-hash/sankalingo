/* ── Template gambar konten ───────────────────────────────────────

   Semua gambar konten lahir dari berkas ini, bukan dari 240 berkas
   HTML yang ditulis satu per satu. Alasannya bukan kemalasan: kalau
   suatu hari warnanya berubah, atau logonya diganti, atau harganya
   naik, satu tempat yang harus disunting — bukan dua ratus.

   Ukurannya 1080x1350 (4:5) untuk semuanya, termasuk slide carousel.
   Rasio ini memakan ruang layar paling banyak di feed Instagram, dan
   memakai satu rasio untuk semua membuat grid profil terlihat rapi.  */

export const WARNA = {
  malam: '#0a0f1f', malam2: '#111a33', malam3: '#18243f', garis: '#24334f',
  teks: '#f3f6ff', teks2: '#9aabcd', api: '#ff4b1f', api2: '#ff7a4d',
  emas: '#ffc531', lumut: '#35d07f', putih: '#ffffff',
};

const FONT = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;600;800&family=JetBrains+Mono:wght@400;700&family=Noto+Sans+JP:wght@700&family=Noto+Sans+KR:wght@700&family=Noto+Sans+Arabic:wght@700&family=Noto+Sans+SC:wght@700&display=swap">`;

const DASAR = `
* { margin:0; padding:0; box-sizing:border-box; }
body { width:1080px; height:1350px; background:${WARNA.malam}; color:${WARNA.teks};
  font-family:Inter,sans-serif; overflow:hidden; position:relative; }
/* Merek dipaku di atas, kaki dipaku di bawah, dan isinya mengambang
   di tengah ruang sisa. Tanpa ini, konten pendek menempel ke atas dan
   meninggalkan sepertiga gambar kosong — yang di feed terbaca sebagai
   gambar yang belum selesai, bukan sebagai ruang napas. */
.isi { padding:150px 68px 140px; height:100%; display:flex; flex-direction:column;
  justify-content:center; position:relative; z-index:2; }
.merek { position:absolute; top:64px; left:68px; display:flex; align-items:center; gap:14px; }
.merek svg { width:56px; height:56px; flex:0 0 auto; }
.merek span { font-family:Anton,sans-serif; font-size:27px; color:${WARNA.teks}; }
.merek b { color:${WARNA.api2}; font-weight:400; }
.pita { align-self:flex-start; font-family:'JetBrains Mono',monospace; font-size:20px;
  letter-spacing:.16em; text-transform:uppercase; color:${WARNA.api2}; }
h1 { font-family:Anton,Impact,sans-serif; font-size:76px; line-height:1.06;
  text-transform:uppercase; margin-top:20px; }
h1 .api { background:${WARNA.api}; padding:2px 12px 6px; display:inline-block; }
h1 .emas { color:${WARNA.emas}; }
.kaki { position:absolute; left:68px; right:68px; bottom:60px; display:flex; align-items:flex-end; justify-content:space-between; gap:20px; }
.kaki-teks { font-size:24px; color:${WARNA.teks2}; line-height:1.4; }
.kaki-teks b { color:${WARNA.teks}; }
.geser { font-family:Anton,sans-serif; font-size:26px; color:${WARNA.api};
  display:flex; align-items:center; gap:10px; white-space:nowrap; }
.nomor { position:absolute; top:60px; right:68px; font-family:Anton,sans-serif;
  font-size:30px; color:${WARNA.teks2}; z-index:3; }
.glif-latar { position:absolute; inset:0; overflow:hidden; pointer-events:none; }
.glif-latar span { position:absolute; font-family:'Noto Sans JP',sans-serif; font-weight:700;
  color:${WARNA.api}; opacity:.06; line-height:1; }
`;

/* Logo disisipkan sebagai SVG utuh, bukan lewat <img src="...">.
   Berkas HTML-nya lahir di folder sementara, jadi tiap path relatif
   akan menunjuk ke tempat yang salah — dan gambar yang gagal dimuat
   di Chrome headless tidak menimbulkan galat apa pun, cuma kotak
   kosong yang baru ketahuan sesudah dua ratus gambar jadi. */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SVG_MASKOT = readFileSync(
  join(dirname(fileURLToPath(import.meta.url)), '..', 'assets', 'merek', 'maskot-kepala.svg'),
  'utf8').replace(/<\?xml[^>]*\?>/, '').trim();

const MEREK = `<div class="merek">${SVG_MASKOT}<span>SankaLingo <b>GO</b></span></div>`;

/** Bungkus satu halaman lengkap. */
function halaman(gaya, badan, { nomor = '', latar = '' } = {}) {
  return `<!doctype html><html lang="id"><head><meta charset="utf-8">${FONT}
<style>${DASAR}${gaya}</style></head><body>
${latar}
${nomor ? `<div class="nomor">${nomor}</div>` : ''}
<div class="isi">${MEREK}${badan}</div>
</body></html>`;
}

const latarGlif = (glif = 'あ') => `<div class="glif-latar">
  <span style="font-size:400px;top:-70px;left:-50px">${glif}</span></div>`;

/* ── Tipe 1: pernyataan besar ─────────────────────────────────────
   Untuk pembuka carousel dan konten satu-gambar yang mengandalkan
   satu kalimat kuat. */
export function kartuHook({ pita, judul, isi, kaki, geser, nomor, glif }) {
  const gaya = `
    .badan { margin-top:30px; font-size:31px; line-height:1.45; color:${WARNA.teks2}; }
    .badan b { color:${WARNA.teks}; }`;
  return halaman(gaya, `
    <span class="pita">${pita}</span>
    <h1>${judul}</h1>
    ${isi ? `<p class="badan">${isi}</p>` : ''}
    <div class="kaki">
      <span class="kaki-teks">${kaki || ''}</span>
      ${geser ? `<span class="geser">${geser}</span>` : ''}
    </div>`, { nomor, latar: latarGlif(glif) });
}

/* ── Tipe 2: salah → benar ────────────────────────────────────────
   Bentuk paling khas produk ini: menunjukkan kesalahan, lalu
   menyebut kebiasaan berbahasa Indonesia yang menyebabkannya. */
export function kartuKoreksi({ pita, judul, salah, benar, sebab, kaki, geser, nomor }) {
  const gaya = `
    .kotak { margin-top:34px; background:${WARNA.malam2}; border:2px solid ${WARNA.garis};
      border-radius:24px; padding:38px 40px; }
    .baris { display:flex; align-items:center; gap:20px; font-family:'JetBrains Mono',monospace;
      font-size:38px; line-height:1.3; }
    .baris + .baris { margin-top:22px; }
    .tanda { font-size:34px; font-weight:700; flex:0 0 auto; }
    .salah { color:${WARNA.api2}; text-decoration:line-through; text-decoration-thickness:3px; }
    .benar { color:${WARNA.lumut}; }
    .sebab { margin-top:30px; font-size:29px; line-height:1.45; color:${WARNA.teks2}; }
    .sebab b { color:${WARNA.teks}; }`;
  return halaman(gaya, `
    <span class="pita">${pita}</span>
    <h1>${judul}</h1>
    <div class="kotak">
      <div class="baris"><span class="tanda" style="color:${WARNA.api2}">✕</span><span class="salah">${salah}</span></div>
      <div class="baris"><span class="tanda" style="color:${WARNA.lumut}">✓</span><span class="benar">${benar}</span></div>
    </div>
    <p class="sebab">${sebab}</p>
    <div class="kaki">
      <span class="kaki-teks">${kaki || ''}</span>
      ${geser ? `<span class="geser">${geser}</span>` : ''}
    </div>`, { nomor });
}

/* ── Tipe 3: papan aksara ─────────────────────────────────────── */
export function kartuAksara({ pita, judul, huruf, ket, kaki, geser, nomor, fontKelas = '' }) {
  /* Kolomnya mengikuti jumlah huruf: lima huruf dalam grid empat
     kolom meninggalkan satu sel yatim di baris kedua, dan ruang
     kosong di tengah gambar terbaca sebagai kesalahan cetak. */
  const kolom = huruf.length <= 5 ? huruf.length : (huruf.length > 20 ? 5 : 4);
  const besar = huruf.length <= 5;
  const gaya = `
    .papan { margin-top:34px; display:grid; grid-template-columns:repeat(${kolom},1fr); gap:14px; }
    .papan { flex:0 0 auto; }
    .sel { background:${WARNA.malam3}; border:1px solid ${WARNA.garis}; border-radius:16px;
      padding:${besar ? 30 : 18}px 10px; text-align:center; }
    .sel .g { font-size:${besar ? 74 : (huruf.length > 20 ? 46 : 58)}px; font-weight:700; line-height:1.1; }
    .sel .r { font-family:'JetBrains Mono',monospace; font-size:19px; color:${WARNA.teks2}; margin-top:6px; }
    .ja .g { font-family:'Noto Sans JP',sans-serif; }
    .ko .g { font-family:'Noto Sans KR',sans-serif; }
    .ar .g { font-family:'Noto Sans Arabic',sans-serif; }
    .zh .g { font-family:'Noto Sans SC',sans-serif; }
    .ket { margin-top:28px; font-size:27px; line-height:1.45; color:${WARNA.teks2}; }
    .ket b { color:${WARNA.teks}; }`;
  return halaman(gaya, `
    <span class="pita">${pita}</span>
    <h1>${judul}</h1>
    <div class="papan ${fontKelas}">
      ${huruf.map(([g, r]) => `<div class="sel ${fontKelas}"><div class="g">${g}</div><div class="r">${r}</div></div>`).join('')}
    </div>
    ${ket ? `<p class="ket">${ket}</p>` : ''}
    <div class="kaki">
      <span class="kaki-teks">${kaki || ''}</span>
      ${geser ? `<span class="geser">${geser}</span>` : ''}
    </div>`, { nomor });
}

/* ── Tipe 4: daftar bernomor ──────────────────────────────────── */
export function kartuDaftar({ pita, judul, butir, kaki, geser, nomor }) {
  const gaya = `
    .daftar { margin-top:34px; display:flex; flex-direction:column; gap:20px; }
    .item { background:${WARNA.malam2}; border-left:5px solid ${WARNA.api};
      border-radius:14px; padding:24px 28px; }
    .item .jd { font-family:Anton,sans-serif; font-size:34px; }
    .item .ket { font-size:25px; color:${WARNA.teks2}; margin-top:8px; line-height:1.4; }
    .item .ket b { color:${WARNA.teks}; }`;
  return halaman(gaya, `
    <span class="pita">${pita}</span>
    <h1>${judul}</h1>
    <div class="daftar">
      ${butir.map(b => `<div class="item"><div class="jd">${b[0]}</div><div class="ket">${b[1]}</div></div>`).join('')}
    </div>
    <div class="kaki">
      <span class="kaki-teks">${kaki || ''}</span>
      ${geser ? `<span class="geser">${geser}</span>` : ''}
    </div>`, { nomor });
}

/* ── Tipe 5: penawaran ────────────────────────────────────────── */
export function kartuJual({ pita, judul, isi, harga = 'Rp199.000', hargaKet = 'sekali bayar · 9 bahasa · selamanya', cta = 'Ambil sekarang →', nomor }) {
  const gaya = `
    .badan { margin-top:30px; font-size:30px; line-height:1.45; color:${WARNA.teks2}; }
    .badan b { color:${WARNA.teks}; }
    .harga { display:flex; align-items:baseline; gap:20px; margin-top:38px; flex-wrap:wrap; }
    .rp { font-family:Anton,sans-serif; font-size:88px; color:${WARNA.emas}; line-height:1; }
    .rp-ket { font-size:25px; color:${WARNA.teks2}; }
    .cta { margin-top:26px; align-self:flex-start; background:${WARNA.api}; color:#fff;
      font-weight:800; font-size:32px; padding:22px 42px; border-radius:14px; }
    .alamat { margin-top:18px; font-family:'JetBrains Mono',monospace; font-size:22px; color:${WARNA.teks2}; }`;
  return halaman(gaya, `
    <span class="pita">${pita}</span>
    <h1>${judul}</h1>
    ${isi ? `<p class="badan">${isi}</p>` : ''}
    <div class="harga"><span class="rp">${harga}</span><span class="rp-ket">${hargaKet}</span></div>
    <div class="cta">${cta}</div>
    <div class="alamat">sankalingogo.com</div>`, { nomor });
}

/* ── Tipe 6: dua kolom pembanding ─────────────────────────────── */
export function kartuBanding({ pita, judul, kiri, kanan, kaki, geser, nomor }) {
  const gaya = `
    .dua { margin-top:34px; display:grid; grid-template-columns:1fr 1fr; gap:24px; }
    .kol { background:${WARNA.malam2}; border:1px solid ${WARNA.garis}; border-radius:20px; padding:28px 26px; }
    .kol.buruk { border-color:${WARNA.api}; }
    .kol.baik { border-color:${WARNA.lumut}; }
    .kol .jd { font-family:Anton,sans-serif; font-size:30px; }
    .kol .isi { margin-top:16px; font-size:24px; line-height:1.45; color:${WARNA.teks2}; }
    .kol .isi b { color:${WARNA.teks}; }
    .kol .cap { margin-top:18px; font-family:'JetBrains Mono',monospace; font-size:20px; }
    .buruk .cap { color:${WARNA.api2}; }
    .baik .cap { color:${WARNA.lumut}; }`;
  return halaman(gaya, `
    <span class="pita">${pita}</span>
    <h1>${judul}</h1>
    <div class="dua">
      <div class="kol buruk"><div class="jd">${kiri.judul}</div><div class="isi">${kiri.isi}</div><div class="cap">${kiri.cap}</div></div>
      <div class="kol baik"><div class="jd">${kanan.judul}</div><div class="isi">${kanan.isi}</div><div class="cap">${kanan.cap}</div></div>
    </div>
    <div class="kaki">
      <span class="kaki-teks">${kaki || ''}</span>
      ${geser ? `<span class="geser">${geser}</span>` : ''}
    </div>`, { nomor });
}

export const TIPE = {
  hook: kartuHook, koreksi: kartuKoreksi, aksara: kartuAksara,
  daftar: kartuDaftar, jual: kartuJual, banding: kartuBanding,
};
