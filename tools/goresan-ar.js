/* Pembangkit jalur goresan huruf Arab — DIJALANKAN DI PERAMBAN.

   Data goresan Arab yang lama dijiplak dari rangka huruf Tahoma milik
   Microsoft. Untuk aplikasi yang dijual itu risiko yang tak perlu
   ditanggung, dan NOTICE.md sudah menandainya. Berkas ini membangkitkan
   ulang jalurnya dari Amiri — huruf berlisensi SIL OFL, yang memang
   boleh diturunkan.

   Pipa kerjanya sama seperti dulu:
     render besar → ambang → penipisan Zhang-Suen → telusuri rangka →
     pangkas duri → sederhanakan Ramer-Douglas-Peucker → skala ke kotak 8..92

   Sudah dijalankan sekali; hasilnya terpasang di data/lang/ar.js. Berkas
   ini disimpan sebagai bukti asal-usul data itu — bukan sebagai bagian
   aplikasi. Tidak pernah diimpor saat aplikasi berjalan.

   Cara menjalankannya lagi (misalnya untuk berganti huruf acuan), dari
   konsol peramban dengan server pengembangan menyala:

     const G = await import('/tools/goresan-ar.js');
     G.setel(640, 100, 380);
     G.goresanHuruf('ص', 'Amiri');                                       */

let N = 512;             // sisi kanvas kerja
let AMBANG = 140;        // di bawah ini dianggap tinta
let UKURAN = 300;        // tinggi huruf saat dirender
export function setel(n, ambang, ukuran) { N = n; AMBANG = ambang; UKURAN = ukuran; }

/* ── 1. Render satu huruf jadi peta tinta ─────────────────────── */
function raster(huruf, font) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = N;
  const g = cv.getContext('2d', { willReadFrequently: true });
  g.fillStyle = '#fff'; g.fillRect(0, 0, N, N);
  g.fillStyle = '#000';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.font = `${UKURAN}px "${font}"`;
  g.fillText(huruf, N / 2, N / 2);

  const d = g.getImageData(0, 0, N, N).data;
  const bit = new Uint8Array(N * N);
  let x0 = N, y0 = N, x1 = -1, y1 = -1;
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    if (d[(y * N + x) * 4] < AMBANG) {
      bit[y * N + x] = 1;
      if (x < x0) x0 = x; if (x > x1) x1 = x;
      if (y < y0) y0 = y; if (y > y1) y1 = y;
    }
  }
  return { bit, kotak: { x0, y0, x1, y1 }, ada: x1 >= 0 };
}

/* ── 2. Penipisan Zhang-Suen ──────────────────────────────────── */
function tipiskan(bit) {
  const b = Uint8Array.from(bit);
  const at = (x, y) => (x < 0 || y < 0 || x >= N || y >= N ? 0 : b[y * N + x]);
  let berubah = true, putaran = 0;
  while (berubah && putaran++ < 60) {
    berubah = false;
    for (const langkah of [0, 1]) {
      const buang = [];
      for (let y = 1; y < N - 1; y++) for (let x = 1; x < N - 1; x++) {
        if (!b[y * N + x]) continue;
        const p = [at(x, y - 1), at(x + 1, y - 1), at(x + 1, y), at(x + 1, y + 1),
                   at(x, y + 1), at(x - 1, y + 1), at(x - 1, y), at(x - 1, y - 1)];
        const jumlah = p.reduce((a, v) => a + v, 0);
        if (jumlah < 2 || jumlah > 6) continue;
        let alih = 0;
        for (let i = 0; i < 8; i++) if (!p[i] && p[(i + 1) % 8]) alih++;
        if (alih !== 1) continue;
        const [p2, p3, p4, p5, p6, p7, p8, p9] = p;
        if (langkah === 0) {
          if (p2 * p4 * p6 || p4 * p6 * p8) continue;
        } else {
          if (p2 * p4 * p8 || p2 * p6 * p8) continue;
        }
        buang.push(y * N + x);
      }
      if (buang.length) { berubah = true; buang.forEach(i => { b[i] = 0; }); }
    }
  }
  return b;
}

/* ── 3. Pisahkan komponen bersambung (8-arah) ─────────────────── */
function komponen(b) {
  const label = new Int32Array(N * N).fill(-1);
  const hasil = [];
  for (let i = 0; i < N * N; i++) {
    if (!b[i] || label[i] >= 0) continue;
    const id = hasil.length, isi = [];
    const tumpuk = [i];
    label[i] = id;
    while (tumpuk.length) {
      const j = tumpuk.pop(); isi.push(j);
      const x = j % N, y = (j - x) / N;
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
        if (!dx && !dy) continue;
        const nx = x + dx, ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
        const k = ny * N + nx;
        if (b[k] && label[k] < 0) { label[k] = id; tumpuk.push(k); }
      }
    }
    hasil.push(isi);
  }
  return hasil;
}

/* ── 4. Telusuri satu komponen jadi rangkaian titik ───────────── */
/* Rangka huruf bukan garis tunggal: ada persimpangan dan gelang. Penelusuran
   yang cuma berjalan lurus akan berhenti di percabangan pertama dan membuang
   sisa bentuknya — itulah yang dulu memangkas ص jadi separuh. Di sini rangka
   diurai dulu menjadi RUAS antar-simpul, lalu ruas-ruasnya dirangkai
   berurutan sehingga tidak ada bagian yang tertinggal. */
function telusuri(isi) {
  const ada = new Set(isi);
  const tetangga = j => {
    const x = j % N, y = (j - x) / N, out = [];
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
      if (!dx && !dy) continue;
      const k = (y + dy) * N + (x + dx);
      if (ada.has(k)) out.push(k);
    }
    return out;
  };

  /* Pangkas duri: cabang pendek sisa penipisan, bukan bagian bentuk. */
  const batasDuri = Math.max(4, Math.round(Math.sqrt(isi.length) / 2));
  for (let ulang = 0; ulang < 3; ulang++) {
    let adaPangkas = false;
    for (const u of [...ada].filter(j => tetangga(j).length === 1)) {
      const jalur = []; let kini = u, sblm = -1;
      while (jalur.length <= batasDuri) {
        jalur.push(kini);
        const t = tetangga(kini).filter(k => k !== sblm);
        if (t.length !== 1) break;
        sblm = kini; kini = t[0];
      }
      if (jalur.length <= batasDuri && tetangga(jalur[jalur.length - 1]).length > 2) {
        jalur.slice(0, -1).forEach(j => ada.delete(j));
        adaPangkas = true;
      }
    }
    if (!adaPangkas) break;
  }
  if (ada.size < 2) return [];

  /* Simpul = ujung (1 tetangga) atau persimpangan (≥3 tetangga). */
  const simpul = new Set([...ada].filter(j => tetangga(j).length !== 2));

  /* Kumpulkan ruas: dari tiap simpul, jalan lurus sampai ketemu simpul lagi. */
  const ruas = [];
  const dipakai = new Set();                    // pasangan "a>b" per langkah
  const tandai = (a, b) => dipakai.add(a < b ? a + '>' + b : b + '>' + a);
  const sudah = (a, b) => dipakai.has(a < b ? a + '>' + b : b + '>' + a);

  for (const s0 of simpul) {
    for (const awal of tetangga(s0)) {
      if (sudah(s0, awal)) continue;
      const jalur = [s0]; let sblm = s0, kini = awal;
      tandai(sblm, kini);
      while (true) {
        jalur.push(kini);
        if (simpul.has(kini)) break;
        const t = tetangga(kini).filter(k => k !== sblm);
        if (!t.length) break;
        tandai(kini, t[0]);
        sblm = kini; kini = t[0];
      }
      ruas.push(jalur);
    }
  }
  /* Bentuk gelang murni tidak punya simpul sama sekali. */
  if (!ruas.length) {
    const jalur = []; const lihat = new Set();
    let kini = [...ada][0], sblm = null;
    while (kini !== undefined && !lihat.has(kini)) {
      jalur.push(kini); lihat.add(kini);
      kini = tetangga(kini).find(k => !lihat.has(k));
    }
    return jalur.map(j => [j % N, Math.floor(j / N)]);
  }

  /* Rangkai ruas: mulai dari ujung PALING KANAN — arah menulis Arab —
     lalu tiap kali sambung ruas yang pangkalnya paling dekat ujung kini. */
  const belum = ruas.slice();
  const kanan = j => j % N;
  let mulai = belum.reduce((a, b) =>
    Math.max(kanan(a[0]), kanan(a[a.length - 1])) >= Math.max(kanan(b[0]), kanan(b[b.length - 1])) ? a : b);
  if (kanan(mulai[mulai.length - 1]) > kanan(mulai[0])) mulai = mulai.slice().reverse();
  belum.splice(belum.indexOf(ruas.find(r => r === mulai || r.slice().reverse().join() === mulai.join())), 1);

  const gabung = mulai.slice();
  while (belum.length) {
    const ujung = gabung[gabung.length - 1];
    const ux = ujung % N, uy = Math.floor(ujung / N);
    let terbaik = null, arah = false, jarak = Infinity;
    for (const r of belum) {
      for (const [ttk, balik] of [[r[0], false], [r[r.length - 1], true]]) {
        const d = (ttk % N - ux) ** 2 + (Math.floor(ttk / N) - uy) ** 2;
        if (d < jarak) { jarak = d; terbaik = r; arah = balik; }
      }
    }
    belum.splice(belum.indexOf(terbaik), 1);
    const potong = arah ? terbaik.slice().reverse() : terbaik;
    gabung.push(...potong);
  }
  return gabung.map(j => [j % N, Math.floor(j / N)]);
}

/* ── 5. Ramer-Douglas-Peucker ─────────────────────────────────── */
function rdp(titik, eps) {
  if (titik.length < 3) return titik;
  let maks = 0, idx = 0;
  const [ax, ay] = titik[0], [bx, by] = titik[titik.length - 1];
  const panjang = Math.hypot(bx - ax, by - ay) || 1;
  for (let i = 1; i < titik.length - 1; i++) {
    const [px, py] = titik[i];
    const d = Math.abs((bx - ax) * (ay - py) - (ax - px) * (by - ay)) / panjang;
    if (d > maks) { maks = d; idx = i; }
  }
  if (maks <= eps) return [titik[0], titik[titik.length - 1]];
  return [...rdp(titik.slice(0, idx + 1), eps).slice(0, -1), ...rdp(titik.slice(idx), eps)];
}

/* Jumlah titik tiap huruf hijaiyah — fakta ejaan, bukan ciri satu huruf cetak. */
const TITIK = {
  'ا':0,'ب':1,'ت':2,'ث':3,'ج':1,'ح':0,'خ':1,'د':0,'ذ':1,'ر':0,'ز':1,'س':0,'ش':3,
  'ص':0,'ض':1,'ط':0,'ظ':1,'ع':0,'غ':1,'ف':1,'ق':2,'ك':0,'ل':0,'م':0,'ن':1,'ه':0,
  'و':0,'ي':2
};

/* Huruf yang punya tanda tersendiri di dalam badannya. */
const TANDA_DALAM = { 'ك': 1 };

/** Pecah gugus titik jadi tepat `k` kelompok memakai k-means sederhana. */
function pecahTitik(gugus, k) {
  const piksel = gugus.flat();
  if (k <= 0 || !piksel.length) return [];
  if (k === 1) return [piksel];

  const xy = piksel.map(j => [j % N, Math.floor(j / N)]);
  /* Benih disebar di sepanjang sumbu terpanjang gugusnya supaya
     hasilnya tetap sama tiap kali dijalankan — tanpa unsur acak. */
  const xs = xy.map(p => p[0]), ys = xy.map(p => p[1]);
  const bentangX = Math.max(...xs) - Math.min(...xs);
  const bentangY = Math.max(...ys) - Math.min(...ys);
  const sumbu = bentangX >= bentangY ? 0 : 1;
  const urutSumbu = xy.map((p, i) => [p, i]).sort((a, b) => a[0][sumbu] - b[0][sumbu]);
  let pusat = Array.from({ length: k }, (_, i) =>
    urutSumbu[Math.floor(((i + 0.5) / k) * urutSumbu.length)][0].slice());

  let milik = new Array(xy.length).fill(0);
  for (let ulang = 0; ulang < 40; ulang++) {
    let pindah = false;
    xy.forEach((p, i) => {
      let terbaik = 0, jarak = Infinity;
      pusat.forEach((c, ci) => {
        const d = (p[0] - c[0]) ** 2 + (p[1] - c[1]) ** 2;
        if (d < jarak) { jarak = d; terbaik = ci; }
      });
      if (milik[i] !== terbaik) { milik[i] = terbaik; pindah = true; }
    });
    pusat = pusat.map((_, ci) => {
      const anggota = xy.filter((_, i) => milik[i] === ci);
      if (!anggota.length) return pusat[ci];
      return [anggota.reduce((a, p) => a + p[0], 0) / anggota.length,
              anggota.reduce((a, p) => a + p[1], 0) / anggota.length];
    });
    if (!pindah) break;
  }
  return Array.from({ length: k }, (_, ci) => piksel.filter((_, i) => milik[i] === ci))
              .filter(g => g.length);
}

/** Cari gumpalan tinta yang belum dilewati jalur mana pun; kembalikan satu
    goresan pendek melintasinya, atau null kalau semuanya sudah terwakili. */
let AMBANG_SISA = 64, MIN_SISA = 12;
export function setelSisa(a, m) { AMBANG_SISA = a; MIN_SISA = m; }
function tintaTakTerwakili(bit, kotak, petakan, goresan) {
  const contoh = [];
  for (const d of goresan)
    for (const m of d.matchAll(/(-?[\d.]+) (-?[\d.]+)/g)) contoh.push([+m[1], +m[2]]);
  if (!contoh.length) return null;

  const jauh = [];
  for (let y = kotak.y0; y <= kotak.y1; y += 2) for (let x = kotak.x0; x <= kotak.x1; x += 2) {
    if (!bit[y * N + x]) continue;
    const [px, py] = petakan([x, y]);
    let m = Infinity;
    for (const [cx, cy] of contoh) {
      const dd = (px - cx) ** 2 + (py - cy) ** 2;
      if (dd < m) m = dd;
    }
    if (m > AMBANG_SISA) jauh.push([px, py]);
  }
  if (jauh.length < MIN_SISA) return null;     // terlalu kecil untuk berarti

  /* Ambil gumpalan terbesar, lalu gambar goresan sepanjang sumbu utamanya. */
  const cx = jauh.reduce((a, p) => a + p[0], 0) / jauh.length;
  const cy = jauh.reduce((a, p) => a + p[1], 0) / jauh.length;
  const dekat = jauh.filter(p => Math.hypot(p[0] - cx, p[1] - cy) < 18);
  if (dekat.length < MIN_SISA * 0.8) return null;
  const xs = dekat.map(p => p[0]), ys = dekat.map(p => p[1]);
  const x0 = Math.min(...xs), x1 = Math.max(...xs);
  const y0 = Math.min(...ys), y1 = Math.max(...ys);
  return (x1 - x0) >= (y1 - y0)
    ? `M${x0.toFixed(1)} ${((y0 + y1) / 2).toFixed(1)} L${x1.toFixed(1)} ${((y0 + y1) / 2).toFixed(1)}`
    : `M${((x0 + x1) / 2).toFixed(1)} ${y0.toFixed(1)} L${((x0 + x1) / 2).toFixed(1)} ${y1.toFixed(1)}`;
}

/* ── 6. Rangkai jadi satu huruf ───────────────────────────────── */
export function goresanHuruf(huruf, font = 'Amiri') {
  const { bit, kotak, ada } = raster(huruf, font);
  if (!ada) return null;
  const tipis = tipiskan(bit);
  const komp = komponen(tipis).filter(k => k.length >= 3);
  if (!komp.length) return null;

  /* Peta ke kotak 8..92, nisbah bentuk dijaga. */
  const lebar = kotak.x1 - kotak.x0 || 1, tinggi = kotak.y1 - kotak.y0 || 1;
  const skala = 84 / Math.max(lebar, tinggi);
  const geserX = 50 - ((kotak.x0 + kotak.x1) / 2) * skala;
  const geserY = 50 - ((kotak.y0 + kotak.y1) / 2) * skala;
  const petakan = ([x, y]) => [
    +(x * skala + geserX).toFixed(1),
    +(y * skala + geserY).toFixed(1)
  ];

  /* Badan huruf = komponen terbesar; sisanya titik/hamzah. */
  const urut = komp.slice().sort((a, b) => b.length - a.length);
  const badan = urut[0];

  /* Dalam kaidah Naskh, dua atau tiga titik memang DITULIS MENYAMBUNG —
     jadi penipisan wajar menghasilkan satu komponen saja untuk ت dan ث.
     Menaikkan resolusi tidak menolong karena bentuknya memang begitu.
     Jumlah titik tiap huruf adalah fakta ejaan Arab, bukan tafsir huruf
     cetakan tertentu, jadi gugusnya dipecah menurut jumlah itu. */
  const perlu = TITIK[huruf] ?? urut.length - 1;
  const titik = pecahTitik(urut.slice(1), perlu);

  const jalurBadan = rdp(telusuri(badan).map(petakan), 1.1);

  /* Titik digambar sebagai coretan pendek serong, seperti saat ditulis
     tangan — bukan sebagai lingkaran. Urutannya kanan ke kiri, mengikuti
     arah tulisan Arab. */
  const jalurTitik = titik
    .map(k => {
      const xs = k.map(j => j % N), ys = k.map(j => Math.floor(j / N));
      const [cx, cy] = petakan([xs.reduce((a, v) => a + v, 0) / k.length,
                                ys.reduce((a, v) => a + v, 0) / k.length]);
      return { cx, cy, d: `M${(cx - 3.5).toFixed(1)} ${(cy - 3.5).toFixed(1)} ` +
                          `L${(cx + 3.5).toFixed(1)} ${(cy + 3.5).toFixed(1)}` };
    })
    .sort((a, b) => b.cx - a.cx)
    .map(t => t.d);

  const d = jalurBadan.length < 2 ? null
    : 'M' + jalurBadan.map(([x, y], i) => (i ? `L${x} ${y}` : `${x} ${y}`)).join(' ')
        .replace(/^M?/, '');

  const goresan = [d ? 'M' + d.replace(/^M/, '') : null, ...jalurTitik].filter(Boolean);

  /* ك ditulis dengan DUA goresan — badan lalu tanda kecil di dalamnya —
     tetapi huruf Naskh menyatukan keduanya, jadi penipisan tidak
     memisahkannya. Hanya untuk huruf semacam ini sisa tintanya dicari;
     pada huruf lain, tinta yang jauh dari sumbu itu wajar saja karena
     goresannya memang tebal, dan mencarinya justru melahirkan goresan
     hantu. */
  if (TANDA_DALAM[huruf] && goresan.length < 1 + TANDA_DALAM[huruf]) {
    const sisa = tintaTakTerwakili(bit, kotak, petakan, goresan);
    if (sisa) goresan.push(sisa);
  }

  return { huruf, strokes: goresan, komponen: komp.length };
}

export function semuaHuruf(daftar, font = 'Amiri') {
  return daftar.map(h => goresanHuruf(h, font));
}
