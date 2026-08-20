/* ── Pemeriksa mutu goresan aksara ────────────────────────────────
   Dijalankan: node tools/audit-goresan.mjs [kode]

   Goresan huruf disimpan sebagai jalur SVG. Yang membuatnya rusak
   bukan sintaks — jalur yang cacat tetap sah sebagai SVG dan tetap
   tergambar. Yang rusak adalah BENTUKNYA, dan itu hanya kelihatan
   kalau ada yang membukanya.

   Contoh nyata yang memicu berkas ini: huruf jim (ج) Arab tergambar
   sebagai gumpalan. Jalurnya satu goresan berisi 30-an titik yang
   berbalik-balik ke koordinat yang hampir sama:

       … L45.3 16.3 L67.1 14.3 L72.6 10.9 L69.1 13.5 L45 16.1 …

   Itu jejak telusur tangan yang direkam mentah, bukan bentuk huruf.

   Yang diperiksa:

   · TITIK BERULANG — jalur yang kembali ke koordinat yang sudah
     dilewatinya. Huruf tidak menggambar ulang bagian yang sama;
     coretan iya.
   · BERBALIK ARAH — berapa kali arah gerak berbalik tajam (> 120°).
     Huruf punya beberapa; coretan punya belasan.
   · KEPADATAN TITIK — jumlah titik dibanding panjang jalurnya. Terlalu
     padat berarti direkam dari gerakan tangan, bukan digambar.
   · GORESAN TANGGUNG — panjangnya antara 2 dan 10. Dengan pena bulat
     setebal 7, panjang segitu tergambar sebagai tunggul gemuk: terlalu
     panjang untuk jadi titik, terlalu pendek untuk jadi goresan.
     Titik huruf yang benar panjangnya ≤ 2 dan tergambar bulat rapi.
   · DI LUAR BINGKAI — titik di luar kotak 0–100 tidak akan terlihat.  */

import { existsSync } from 'node:fs';

const KODE = process.argv[2]
  ? [process.argv[2]]
  : ['ar', 'de', 'es', 'fr', 'ja', 'ko', 'ru', 'zh'];

/* ── Membaca jalur SVG jadi daftar titik ─────────────────────────
   HARUS menangani kurva, dan harus membedakan perintah huruf besar
   (mutlak) dari huruf kecil (relatif).

   Versi pertama berkas ini tidak. Ia mengambil dua angka terakhir tiap
   perintah sebagai koordinat mutlak — benar untuk L, SALAH TOTAL untuk
   "c" relatif. Kana Jepang seluruhnya ditulis dengan "c" relatif,
   sehingga alat ini melaporkan koordinat sampai −46 dan menuduh 90 dari
   92 huruf Jepang cacat. Datanya baik-baik saja; pengukurnya yang rusak.

   Pelajarannya: alat ukur yang salah lebih berbahaya daripada tidak
   ada alat, karena ia menghasilkan angka yang terlihat meyakinkan.

   Kurva diratakan jadi beberapa ruas lurus supaya panjang dan
   belokannya bisa diukur seperti garis biasa.                        */

const bezier3 = (p0, p1, p2, p3, t) => {
  const u = 1 - t;
  return [
    u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0],
    u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1],
  ];
};
const bezier2 = (p0, p1, p2, t) => {
  const u = 1 - t;
  return [
    u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0],
    u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1],
  ];
};

function titikDari(d) {
  const out = [];
  const re = /([MLHVCSQTAZmlhvcsqtaz])([^MLHVCSQTAZmlhvcsqtaz]*)/g;
  let m, x = 0, y = 0, mulaiX = 0, mulaiY = 0;
  /* Titik kendali terakhir, untuk perintah lanjutan S/T. */
  let kx = null, ky = null;

  while ((m = re.exec(d))) {
    const cmd = m[1];
    const rel = cmd === cmd.toLowerCase();
    const c = cmd.toUpperCase();
    const n = (m[2].match(/-?\d*\.?\d+(?:e-?\d+)?/g) || []).map(Number);
    const ax = v => (rel ? x + v : v);
    const ay = v => (rel ? y + v : v);

    if (c === 'M') {
      for (let i = 0; i + 1 < n.length; i += 2) {
        x = ax(n[i]); y = ay(n[i + 1]);
        if (i === 0) { mulaiX = x; mulaiY = y; }
        out.push([x, y]);
      }
      kx = ky = null;
    } else if (c === 'L') {
      for (let i = 0; i + 1 < n.length; i += 2) { x = ax(n[i]); y = ay(n[i + 1]); out.push([x, y]); }
      kx = ky = null;
    } else if (c === 'H') {
      for (const v of n) { x = rel ? x + v : v; out.push([x, y]); }
      kx = ky = null;
    } else if (c === 'V') {
      for (const v of n) { y = rel ? y + v : v; out.push([x, y]); }
      kx = ky = null;
    } else if (c === 'C' || c === 'S') {
      const langkah = c === 'C' ? 6 : 4;
      for (let i = 0; i + langkah - 1 < n.length; i += langkah) {
        const p0 = [x, y];
        let p1, p2, p3;
        if (c === 'C') {
          p1 = [ax(n[i]), ay(n[i + 1])];
          p2 = [ax(n[i + 2]), ay(n[i + 3])];
          p3 = [ax(n[i + 4]), ay(n[i + 5])];
        } else {
          p1 = kx === null ? p0 : [2 * x - kx, 2 * y - ky];
          p2 = [ax(n[i]), ay(n[i + 1])];
          p3 = [ax(n[i + 2]), ay(n[i + 3])];
        }
        for (let s = 1; s <= 6; s++) out.push(bezier3(p0, p1, p2, p3, s / 6));
        kx = p2[0]; ky = p2[1]; x = p3[0]; y = p3[1];
      }
    } else if (c === 'Q' || c === 'T') {
      const langkah = c === 'Q' ? 4 : 2;
      for (let i = 0; i + langkah - 1 < n.length; i += langkah) {
        const p0 = [x, y];
        let p1, p2;
        if (c === 'Q') {
          p1 = [ax(n[i]), ay(n[i + 1])];
          p2 = [ax(n[i + 2]), ay(n[i + 3])];
        } else {
          p1 = kx === null ? p0 : [2 * x - kx, 2 * y - ky];
          p2 = [ax(n[i]), ay(n[i + 1])];
        }
        for (let s = 1; s <= 5; s++) out.push(bezier2(p0, p1, p2, s / 5));
        kx = p1[0]; ky = p1[1]; x = p2[0]; y = p2[1];
      }
    } else if (c === 'A') {
      for (let i = 0; i + 6 < n.length; i += 7) { x = ax(n[i + 5]); y = ay(n[i + 6]); out.push([x, y]); }
      kx = ky = null;
    } else if (c === 'Z') {
      x = mulaiX; y = mulaiY; out.push([x, y]); kx = ky = null;
    }
  }
  return out;
}

const jarak = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);

function ukur(d, box = 100) {
  /* Kotak asal tiap bahasa berbeda — KanjiVG memakai 109, goresan
     tulisan tangan di berkas -goresan.js memakai 100. Semua ambang di
     bawah ditulis dalam satuan kotak 100, jadi titiknya diskalakan dulu;
     tanpa ini "jarak 3" berarti hal yang berbeda untuk tiap bahasa. */
  const skala = 100 / (box || 100);
  const t = titikDari(d).map(([x, y]) => [x * skala, y * skala]);
  if (t.length < 2) return { titik: t.length, panjang: 0, ulang: 0, balik: 0, luar: 0, kerdil: true };

  /* Panjang kumulatif sepanjang jalur, dipakai untuk menilai apakah dua
     titik yang berdekatan di layar juga berdekatan di sepanjang goresan. */
  const s = [0];
  let panjang = 0;
  for (let i = 1; i < t.length; i++) { panjang += jarak(t[i - 1], t[i]); s.push(panjang); }

  /* Menimpa jejak sendiri: dua titik yang JAUH di sepanjang jalur tetapi
     BERDEKATAN di layar.

     Sebelumnya "jauh di sepanjang jalur" diukur dengan selisih INDEKS
     (j >= i+3). Itu keliru: kurva diratakan jadi enam titik per segmen,
     jadi pada jalur dengan banyak segmen pendek — persis seperti data
     KanjiVG — titik i dan i+3 hanya berjarak satu-dua satuan meski
     goresannya lurus sempurna. Empat hanzi (百 山 好 是) tertuduh
     "menimpa jejaknya sendiri" hanya karena datanya bersegmen rapat.

     Yang benar adalah jarak SEPANJANG JALUR: pena harus sudah berjalan
     jauh (>15 satuan, dua kali tebal penanya) lalu kembali ke tempat
     yang sama (<3 satuan) sebelum itu disebut menimpa. Kait yang wajar
     berbelok lalu menjauh, jadi tidak kena. */
  let ulang = 0;
  for (let i = 0; i < t.length; i++)
    for (let j = i + 1; j < t.length; j++) {
      if (s[j] - s[i] < 15) continue;
      if (jarak(t[i], t[j]) < 3) { ulang++; break; }
    }

  /* Berbalik arah tajam. */
  let balik = 0;
  for (let i = 2; i < t.length; i++) {
    const a = [t[i - 1][0] - t[i - 2][0], t[i - 1][1] - t[i - 2][1]];
    const b = [t[i][0] - t[i - 1][0], t[i][1] - t[i - 1][1]];
    const na = Math.hypot(...a), nb = Math.hypot(...b);
    if (na < 0.5 || nb < 0.5) continue;
    const cos = (a[0] * b[0] + a[1] * b[1]) / (na * nb);
    if (cos < -0.5) balik++;          /* lebih tajam dari 120° */
  }

  const luar = t.filter(([x, y]) => x < -2 || x > 102 || y < -2 || y > 102).length;

  /* Panjang goresan dibaca terhadap TEBAL PENANYA, bukan terhadap nol.
     Penggambarnya memakai stroke-linecap bulat setebal 7, sehingga:

       panjang ≤ 2   → tergambar sebagai TITIK BULAT yang rapi.
                       Ini disengaja: titik huruf Arab (nuqta) memang
                       ditulis begitu.
       2 … 10        → tanggung. Terlalu panjang untuk titik, terlalu
                       pendek untuk goresan — tergambar sebagai tunggul
                       gemuk. Hampir selalu kesalahan.
       ≥ 10          → goresan sungguhan.

     Titik jim yang lama panjangnya 9,9 — tepat di tengah pita tanggung
     itu, dan memang begitulah ia tampak di layar. */
  const tanggung = panjang > 2 && panjang < 10;

  return { titik: t.length, panjang, ulang, balik, luar, tanggung };
}

/* ── Periksa ──────────────────────────────────────────────────────── */
const masalah = [];
const ringkas = {};

for (const kode of KODE) {
  const berkas = `../data/lang/${kode}.js`;
  if (!existsSync(new URL(berkas, import.meta.url))) continue;
  const L = Object.values(await import(berkas))[0];
  if (!L?.scripts?.length) continue;

  /* Goresan pengganti ikut dipasang, supaya yang diukur adalah yang
     BENAR-BENAR tergambar di layar — bukan data mentah yang sudah
     ditimpa sebelum sampai ke penggambarnya. */
  const gantiBerkas = `../data/lang/${kode}-goresan.js`;
  if (existsSync(new URL(gantiBerkas, import.meta.url))) {
    const G = Object.values(await import(gantiBerkas))[0];
    for (const S of L.scripts)
      for (const c of S.chars || [])
        if (G[c.c]) c.strokes = G[c.c];
  }

  let huruf = 0, goresan = 0, cacat = 0;

  for (const S of L.scripts) {
    for (const c of S.chars || []) {
      huruf++;
      const g = c.strokes || [];
      if (!g.length) { masalah.push([kode, c.rom || c.c, 'tanpa goresan sama sekali']); cacat++; continue; }

      const u = g.map(x => ukur(x, c.box || S.box || 100));
      goresan += g.length;
      const catat = p => { masalah.push([kode, c.rom || c.c, p]); };
      let burukDi = false;

      u.forEach((m, i) => {
        const n = `goresan ${i + 1}/${g.length}`;
        if (m.luar)   { catat(`${n}: ${m.luar} titik di luar bingkai 0–100`); burukDi = true; }
        if (m.tanggung) { catat(`${n}: panjangnya ${m.panjang.toFixed(1)} — tanggung, tergambar sebagai tunggul gemuk (titik ≤2, goresan ≥10)`); burukDi = true; }

        /* Hitungan titik MENTAH tidak dipakai sebagai penanda.
           Kurva diratakan jadi enam ruas per segmen, jadi kana yang
           benar pun menghasilkan puluhan titik. Yang membedakan coretan
           dari huruf bukan banyaknya titik, melainkan apakah jalurnya
           kembali menimpa jejaknya sendiri dan berapa kali ia berbalik
           tajam — dua hal yang tetap terukur sesudah diratakan.

           Ambang dikalibrasi ke data: Jerman, Spanyol, Prancis, dan
           Rusia (yang tergambar benar) tidak ada yang melewatinya;
           jim Arab yang rusak melewatinya jauh. */
        /* Dibaca sebagai PECAHAN, bukan jumlah mentah. Hanzi rumit
           seperti 好 punya goresan panjang berkait yang wajar
           bersinggungan beberapa kali; yang menandai coretan adalah
           kalau SEBAGIAN BESAR jalurnya menimpa dirinya sendiri. */
        const nisbah = m.titik ? m.ulang / m.titik : 0;
        if (m.ulang > 6 && nisbah > 0.25)
          { catat(`${n}: ${m.ulang} dari ${m.titik} titik menimpa jejaknya sendiri (${(nisbah*100).toFixed(0)}%)`); burukDi = true; }
        if (m.balik > 6)   { catat(`${n}: ${m.balik} kali berbalik arah tajam`); burukDi = true; }
      });
      if (burukDi) cacat++;
    }
  }
  ringkas[kode] = { huruf, goresan, cacat };
}

/* ── Laporan ──────────────────────────────────────────────────────── */
if (masalah.length) {
  const per = {};
  for (const [k, h, p] of masalah) (per[k] ||= []).push(`${h}: ${p}`);
  for (const [k, list] of Object.entries(per)) {
    console.log(`\n[${k}] ${list.length} temuan pada ${new Set(list.map(x => x.split(':')[0])).size} huruf`);
    for (const p of list.slice(0, 25)) console.log('   ' + p);
    if (list.length > 25) console.log(`   … ${list.length - 25} lagi`);
  }
}

console.log('\nkode   huruf  goresan  hurufCacat');
console.log('-'.repeat(36));
let T = { huruf: 0, goresan: 0, cacat: 0 };
for (const [k, s] of Object.entries(ringkas)) {
  console.log(`${k.padEnd(6)} ${String(s.huruf).padStart(5)} ${String(s.goresan).padStart(8)} ${String(s.cacat).padStart(11)}`);
  T.huruf += s.huruf; T.goresan += s.goresan; T.cacat += s.cacat;
}
console.log('-'.repeat(36));
console.log(`${'TOTAL'.padEnd(6)} ${String(T.huruf).padStart(5)} ${String(T.goresan).padStart(8)} ${String(T.cacat).padStart(11)}`);
console.log(`\n${masalah.length} temuan`);
process.exit(masalah.length ? 1 : 0);
