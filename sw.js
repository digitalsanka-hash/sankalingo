/* ── Pekerja layanan: membuat SankaLingo GO jalan tanpa internet ──────────
   Strategi: JARINGAN DULU untuk semua berkas sendiri, simpanan sebagai
   jaring pengaman. Dengan begitu pengguna daring tidak pernah terjebak
   versi lama, dan pengguna luring tetap mendapat aplikasi utuh.
   · berkas sendiri → coba jaringan (batas 4 detik) → simpanan
   · huruf Google   → simpanan dulu (tidak pernah berubah)                */

const VERSI = 'fasih-v24';
const SHELL = `${VERSI}-shell`;
const ISI   = `${VERSI}-isi`;
const LUAR  = `${VERSI}-luar`;

/* Kerangka minimum supaya aplikasi tetap terbuka walau luring sejak awal.

   PENTING — sempat gagal di sini: daftar ini dulu hanya berisi berkas
   js/ dan css/, TANPA satu pun berkas data/. Padahal js/data.js
   mengimpor seluruh data/*.js saat modul dimuat. Kalau server mati atau
   internet putus sebelum berkas itu sempat tersimpan, impornya gagal,
   boot() di ujung app.js TIDAK PERNAH JALAN, dan yang tampak cuma layar
   "Menyiapkan laboratorium…" selamanya — tanpa pesan apa pun.

   Jadi seluruh data/*.js ikut kerangka: tanpa berkas itu aplikasi tidak
   bisa mulai sama sekali, jadi ia memang bagian dari kerangka, bukan
   bahan tambahan. (data/lang/*.js tetap opsional — bahasa selain
   Inggris dimuat saat dipilih.)

   Aset merek juga ikut, kalau tidak lambangnya tampil sebagai gambar
   rusak persis di layar boot.

   DAFTAR INI DIBANGKITKAN. Jangan disunting dengan tangan — ia menelusuri
   rantai impor statis dari js/app.js:

       node tools/audit-luring.mjs            (periksa)
       node tools/audit-luring.mjs --tulis    (perbarui)

   Alat itu juga yang menjaga daftarnya tidak melenceng saat ada modul
   baru; kelupaan yang dulu terjadi di sini tidak bisa terulang diam-diam.
                                                                        */
const KERANGKA = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/css/tokens.css',
  './assets/css/base.css',
  './assets/css/components.css',
  './assets/css/views.css',
  './assets/css/comfort.css',
  './assets/icon-192.svg',
  './assets/icon-512.svg',
  './assets/merek/maskot-kepala.svg',
  './assets/merek/maskot.svg',
  './data/curriculum-plus.js',
  './data/curriculum.js',
  './data/exam-bank.js',
  './data/exam-ielts.js',
  './data/exam-specs.js',
  './data/exam-tactics.js',
  './data/exam-toefl-toeic.js',
  './data/exam-toefl.js',
  './data/exam-toeic-bank.js',
  './data/grammar-a1.js',
  './data/grammar-a2.js',
  './data/grammar-ajar-a.js',
  './data/grammar-ajar-b.js',
  './data/grammar-ajar-c.js',
  './data/grammar-b1.js',
  './data/grammar-b2.js',
  './data/grammar-c.js',
  './data/grammar-gabung.js',
  './data/grammar-isi-ab.js',
  './data/grammar-isi-c.js',
  './data/grammar-kelompok.js',
  './data/grammar-plus-a.js',
  './data/grammar-plus-b.js',
  './data/grammar-plus-c.js',
  './data/lang/exam-bacaan.js',
  './data/lang/exam-blueprints.js',
  './data/lang/registry.js',
  './data/lexis.js',
  './data/pronunciation.js',
  './data/skills.js',
  './data/study.js',
  './data/tenses-en.js',
  './data/vocab-1.js',
  './data/vocab-2.js',
  './data/vocab-3.js',
  './data/vocab-4.js',
  './data/vocab-5.js',
  './data/vocab-6.js',
  './js/app.js',
  './js/audio.js',
  './js/awan-config.js',
  './js/awan.js',
  './js/comfort.js',
  './js/comfortui.js',
  './js/course.js',
  './js/data.js',
  './js/icons.js',
  './js/langctx.js',
  './js/lisensi.js',
  './js/luring.js',
  './js/mockgen.js',
  './js/quiz.js',
  './js/speech.js',
  './js/srs.js',
  './js/state.js',
  './js/stroke.js',
  './js/teks.js',
  './js/translit.js',
  './js/ui.js',
  './js/views/admin.js',
  './js/views/auditsuara.js',
  './js/views/curriculum.js',
  './js/views/dashboard.js',
  './js/views/exams.js',
  './js/views/grammar.js',
  './js/views/lang.js',
  './js/views/langcourse.js',
  './js/views/langpages.js',
  './js/views/mock.js',
  './js/views/mocklang.js',
  './js/views/onboard.js',
  './js/views/panduan.js',
  './js/views/plan.js',
  './js/views/skills.js',
  './js/views/stats.js',
  './js/views/tenses.js',
  './js/views/vocab.js',
  './js/voice.js'
];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(SHELL);
    /* Satu berkas gagal tidak boleh menggagalkan seluruh pemasangan. */
    await Promise.allSettled(KERANGKA.map(u => c.add(new Request(u, { cache: 'reload' }))));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const nama = await caches.keys();
    await Promise.all(nama.filter(n => !n.startsWith(VERSI)).map(n => caches.delete(n)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', e => {
  if (e.data === 'skipWaiting') self.skipWaiting();
  if (e.data === 'bersihkan') {
    caches.keys().then(ns => Promise.all(ns.map(n => caches.delete(n))));
  }
  if (e.data?.tipe === 'panaskan') hangatkan(e.data.daftar || []);
});

/* Unduh seluruh modul bahasa lebih dulu supaya siap dipakai luring. */
async function hangatkan(daftar) {
  const c = await caches.open(ISI);
  let sukses = 0;
  for (const u of daftar) {
    try {
      const r = await fetch(u, { cache: 'no-cache' });
      if (r.ok) { await c.put(u, r.clone()); sukses++; }
    } catch { /* lanjut */ }
  }
  const klien = await self.clients.matchAll();
  klien.forEach(k => k.postMessage({ tipe: 'panas-selesai', sukses, total: daftar.length }));
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const sendiri = url.origin === self.location.origin;

  /* Navigasi halaman: coba jaringan, kalau putus pakai index tersimpan. */
  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      try {
        const r = await fetch(req);
        const c = await caches.open(SHELL);
        c.put('./index.html', r.clone());
        return r;
      } catch {
        return (await caches.match('./index.html')) ||
               (await caches.match('./')) ||
               new Response('<h1>Luring</h1><p>Buka aplikasi sekali saat ada internet.</p>',
                            { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
      }
    })());
    return;
  }

  /* Audio rekaman: nama berkasnya adalah hash isinya, jadi isinya tidak
     pernah berubah. Ambil dari simpanan dulu — ini yang membuat tombol
     suara tetap seketika, juga saat luring. */
  if (sendiri && /\/audio\/.+\.(opus|ogg|mp3|wav|m4a)$/i.test(url.pathname)) {
    e.respondWith((async () => {
      const c = await caches.open(ISI);
      const simpan = await c.match(req);
      if (simpan) return simpan;
      try {
        const r = await fetch(req);
        if (r.ok) c.put(req, r.clone());
        return r;
      } catch {
        return new Response('', { status: 504, statusText: 'Luring' });
      }
    })());
    return;
  }

  /* Huruf & gaya dari luar: simpan setelah sekali berhasil. */
  if (!sendiri) {
    if (/fonts\.(googleapis|gstatic)\.com/.test(url.hostname)) {
      e.respondWith((async () => {
        const c = await caches.open(LUAR);
        const simpan = await c.match(req);
        if (simpan) return simpan;
        try {
          const r = await fetch(req);
          if (r.ok || r.type === 'opaque') c.put(req, r.clone());
          return r;
        } catch {
          return new Response('', { status: 504 });
        }
      })());
    }
    return;
  }

  /* Berkas sendiri: jaringan dulu supaya versi selalu segar; kalau
     jaringan lambat atau mati, pakai simpanan tanpa membuat pengguna
     menunggu lebih dari empat detik. */
  e.respondWith((async () => {
    const c = await caches.open(ISI);
    let batal;
    const tunggu = new Promise(res => { batal = setTimeout(() => res(null), 4000); });
    try {
      const r = await Promise.race([fetch(req), tunggu]);
      clearTimeout(batal);
      if (r && r.ok) { c.put(req, r.clone()); return r; }
      if (r) return r;
    } catch { clearTimeout(batal); }
    const simpan = await c.match(req, { ignoreSearch: true }) ||
                   await caches.match(req, { ignoreSearch: true });
    return simpan || new Response('', { status: 504, statusText: 'Luring' });
  })());
});
