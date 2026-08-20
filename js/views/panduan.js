/* ── Panduan pemakaian ─────────────────────────────────────────────
   Satu halaman yang menjawab "aplikasi ini dipakai bagaimana?" tanpa
   mengharuskan siapa pun bertanya. Ditulis untuk pembaca yang belum
   pernah memakai aplikasi belajar bahasa mana pun.                     */

import { $, $$, esc, toast } from '../ui.js';
import { ico } from '../icons.js';
import { comfort, setComfort } from '../comfort.js';
import { ulangiPandu, mulaiPandu } from './onboard.js';
import { lupakanTipTertutup } from '../comfortui.js';
import { didukung as luringDidukung, siapkanLuring, ruangSimpanan,
         amankanPenyimpanan, hapusSimpanan, ukuranBerkas, onPanas, BERKAS_MATERI } from '../luring.js';
import { currentLang } from '../langctx.js';
import { langByCode } from '../../data/lang/registry.js';

const main = () => $('#main');

const LANGKAH = [
  ['map', 'Kurikulum — jalur utama',
   'Buka <b>Kurikulum</b>. Isinya bertingkat: <i>tingkat → unit → pelajaran</i>. ' +
   'Kerjakan dari atas. Setiap unit ditutup ujian kecil; kalau lulus, unit berikutnya terbuka rasanya wajar. ' +
   'Tidak ada yang dikunci — kalau kamu sudah tahu, lompat saja.'],
  ['cards', 'Kartu — supaya tidak lupa',
   'Kata yang sudah kamu pelajari masuk ke <b>Kartu</b> secara otomatis. ' +
   'Setiap hari muncul kartu yang <i>hampir</i> kamu lupakan — itu saat terbaik untuk mengulang. ' +
   'Cukup 5–10 menit sehari. Angka di lonceng menandakan berapa yang jatuh tempo.'],
  ['pen', 'Aksara — kalau hurufnya beda',
   'Untuk Korea, Jepang, Mandarin, Arab, dan Rusia, mulailah dari <b>Aksara</b>. ' +
   'Tekan sebuah huruf, tonton animasi urutan goresannya, lalu tirukan di kotak latihan. ' +
   'Setiap huruf punya jembatan ingatan — biasanya bentuk benda sehari-hari.'],
  ['headphones', 'Menyimak & Berbicara',
   '<b>Menyimak</b> memutar kalimat lalu kamu ketik yang kamu dengar. ' +
   '<b>Berbicara</b> memutar kalimat lalu kamu tirukan; mikrofon menilai kemiripannya. ' +
   'Tidak punya mikrofon? Ada tombol “Saya sudah mengucapkannya” — pelajaran tetap bisa selesai.'],
  ['target', 'Ujian — kalau kamu mengejar sertifikat',
   'Menu <b>Ujian</b> berisi format resmi (IELTS, TOEFL, TOEIC, JLPT, TOPIK, HSK, dan lainnya): ' +
   'jumlah soal, durasi, cara penilaian, taktik per bagian, dan simulasi bertimer.'],
  ['calendar', 'Rencana — kalau bingung mulai dari mana',
   'Pilih satu <b>rencana harian</b>, lalu ikuti daftar centangnya. ' +
   'Rencana mengatur urutannya untukmu supaya tidak perlu memutuskan apa-apa tiap hari.']
];

const PINTASAN = [
  ['/', 'Buka pencarian'],
  ['Ctrl + K', 'Buka pencarian'],
  ['Ctrl + L', 'Ganti bahasa'],
  ['Alt + K', 'Panel kenyamanan tampilan'],
  ['Alt + 1 … 5', 'Lompat ke menu ke-1 sampai ke-5'],
  ['Spasi', 'Balik kartu hafalan'],
  ['1 – 4', 'Nilai kartu: lupa · sulit · bisa · gampang'],
  ['A – D', 'Jawab soal pilihan ganda'],
  ['Enter', 'Lanjut ke soal / pelajaran berikutnya'],
  ['Esc', 'Tutup jendela yang terbuka'],
  ['Tab', 'Pindah antar tombol tanpa tetikus'],
  ['Shift + ?', 'Buka halaman panduan ini']
];

const ISTILAH = [
  ['CEFR (A1–C2)', 'Tangga kemampuan bahasa standar Eropa. A1 baru mulai, C2 setara penutur terdidik. ' +
   'Kebanyakan orang butuh B2 untuk kuliah atau kerja memakai bahasa asing.'],
  ['SRS / pengulangan berjarak', 'Cara mengatur jadwal mengulang: kata yang gampang muncul makin jarang, ' +
   'kata yang sulit muncul makin sering. Menghemat waktu sampai berkali lipat dibanding menghafal biasa.'],
  ['Kartu jatuh tempo', 'Kartu yang menurut jadwal harus diulang hari ini. Kalau menumpuk, kerjakan ' +
   '20 dulu — sisanya besok. Tidak apa-apa.'],
  ['XP & rentetan', 'Angka penyemangat, bukan nilai. Kalau justru bikin tertekan, nyalakan ' +
   '<b>Mode tenang</b> — semuanya disembunyikan.'],
  ['Romanisasi', 'Cara menulis bunyi bahasa asing dengan huruf Latin, misalnya 안녕 → <i>annyeong</i>. ' +
   'Dipakai sebagai jembatan, bukan pengganti aksara asli.'],
  ['TTS & STT', 'TTS membacakan teks (tombol 🔊). STT mendengarkan suaramu (tombol 🎙). ' +
   'Keduanya milik peramban, bukan rekaman kami — karena itu kualitasnya beda-beda per perangkat.']
];

const MASALAH = [
  ['Tombol suara ditekan tapi diam saja',
   'Sebagian peramban baru mengizinkan suara setelah kamu mengeklik sesuatu di halaman — klik sekali lalu coba lagi. ' +
   'Kalau masih diam, buka <a href="#/suara"><b>Audit suara semua bahasa</b></a>: halaman itu benar-benar ' +
   'memutar contoh di tiap bahasa dan menunjukkan mana yang berbunyi dan mana yang tidak. ' +
   'Di Windows, suara paling manusiawi ada di Microsoft Edge (label <i>Online Natural</i>).'],
  ['Suara bahasa asing terdengar seperti orang Indonesia membaca',
   'Memang begitu jika perangkatmu belum punya suara bahasa itu. Aplikasi otomatis membacakan ' +
   'romanisasinya memakai suara Indonesia supaya kamu tetap mendengar sesuatu. ' +
   'Pasang paket suara asli lewat <b>Pengaturan → Suara per bahasa</b> untuk hasil tepat.'],
  ['Mikrofon menolak / muncul “network”',
   'Pengenalan ucapan hanya jalan di Chrome dan Edge, dan butuh internet. ' +
   'Kalau tetap gagal, pakai tombol “Saya sudah mengucapkannya” — pelajaran tidak akan menghalangimu.'],
  ['Kemajuan saya hilang',
   'Semua tersimpan di peramban ini saja. Mode penyamaran, membersihkan data situs, atau berganti ' +
   'peramban akan mengosongkannya. Biasakan <b>Pengaturan → Ekspor kemajuan</b> sebulan sekali.'],
  ['Teksnya terlalu kecil / silau / bergoyang',
   'Tekan tombol bulat di pojok kanan bawah. Di situ ada ukuran teks, kontras tinggi, ' +
   'huruf ramah disleksia, dan tombol untuk mematikan animasi.'],
  ['Aplikasi lambat di ponsel lama',
   'Matikan gerak (panel kenyamanan → Gerak → Kurangi) dan pilih latar Polos di Pengaturan. ' +
   'Keduanya mematikan efek blur dan gradien yang paling berat.']
];

export function renderPanduan() {
  const code = currentLang();
  const meta = langByCode(code);
  const c = comfort();

  main().innerHTML = `
    <div class="page-head">
      <div>
        <div class="eyebrow">${ico('compass', { size: 14 })} Panduan</div>
        <h1>Cara memakai SankaLingo GO</h1>
        <p class="lede">Semua yang perlu kamu tahu ada di halaman ini. Tidak perlu menghafalnya —
        cukup tahu halaman ini ada, dan kembali ke sini kapan pun bingung.</p>
      </div>
      <div class="row">
        <button class="btn btn--soft" id="ulangPandu">${ico('refresh', { size: 15 })} Putar ulang pengenalan</button>
      </div>
    </div>

    <section class="card" style="margin-bottom:var(--s-6)">
      <div class="card__title">${ico('route')} Kalau kamu belum tahu harus mulai dari mana</div>
      <p class="small soft" style="margin:.5rem 0 1rem">
        Tiga langkah ini cukup untuk hari pertama. Sisanya menyusul sendiri.</p>
      <ol class="stack" style="display:grid;gap:var(--s-3);counter-reset:l">
        <li class="tile" style="display:flex;gap:var(--s-3);align-items:flex-start">
          <span class="pick__dot" style="background:var(--brand)">1</span>
          <span><b>Buka Kurikulum, kerjakan pelajaran paling atas.</b>
          <div class="xs muted">Kira-kira 10 menit. Jangan lompat-lompat dulu.</div></span></li>
        <li class="tile" style="display:flex;gap:var(--s-3);align-items:flex-start">
          <span class="pick__dot" style="background:var(--ok)">2</span>
          <span><b>Besoknya, buka Kartu sebelum apa pun.</b>
          <div class="xs muted">Ini bagian yang membuat kata tidak menguap. Lima menit saja.</div></span></li>
        <li class="tile" style="display:flex;gap:var(--s-3);align-items:flex-start">
          <span class="pick__dot" style="background:var(--warn)">3</span>
          <span><b>Ulangi tujuh hari. Baru nilai hasilnya.</b>
          <div class="xs muted">Belajar bahasa tidak terasa berhasil di hari ke-2. Terasa di hari ke-7.</div></span></li>
      </ol>
      <div class="row" style="margin-top:var(--s-4)">
        <a class="btn btn--primary" href="#/${code}/kurikulum">${ico('map', { size: 15 })} Buka kurikulum</a>
        <a class="btn btn--soft" href="#/${code}/kartu">${ico('cards', { size: 15 })} Buka kartu</a>
      </div>
    </section>

    <h2 style="margin-bottom:var(--s-4)">Isi tiap menu</h2>
    <div class="grid grid--2" style="gap:var(--s-3);margin-bottom:var(--s-8)">
      ${LANGKAH.map(([i, j, t]) => `
        <div class="tile">
          <div class="tile__top">${ico(i, { size: 18 })}<b>${esc(j)}</b></div>
          <p class="small soft" style="margin-top:.45rem">${t}</p>
        </div>`).join('')}
    </div>

    <h2 style="margin-bottom:var(--s-4)">${ico('accessible', { size: 20 })} Kalau membaca layar itu melelahkan</h2>
    <section class="card" style="margin-bottom:var(--s-8)">
      <p class="small soft">Semua ini bisa dinyalakan sekarang juga dan langsung terasa.
      Pilihanmu tersimpan terpisah dari kemajuan belajar, jadi tidak akan hilang saat mengatur ulang data.</p>
      <div class="grid grid--2" style="gap:var(--s-3);margin-top:var(--s-4)">
        ${[
          ['text-size', 'Teks lebih besar', 'Sampai 170%. Seluruh tata letak ikut menyesuaikan, tidak ada yang terpotong.', 'skala', 130],
          ['book', 'Huruf ramah disleksia', 'Jarak huruf dan baris dilebarkan, teks dirata kiri, huruf miring dihilangkan.', 'huruf', 'disleksia'],
          ['contrast', 'Kontras tinggi', 'Teks putih pekat, garis tegas — untuk mata lelah atau layar yang silau.', 'kontras', 'tinggi'],
          ['eye', 'Kurangi gerak', 'Mematikan animasi geser dan pudar. Membantu kalau kamu mudah pusing.', 'gerak', 'kurangi'],
          ['hand', 'Tombol besar', 'Semua tombol minimal 48 piksel — lebih mudah bagi jari besar atau tangan gemetar.', 'sentuh', 'besar'],
          ['keyboard', 'Fokus tebal', 'Kotak penanda saat berpindah dengan tombol Tab dibuat jelas terlihat.', 'fokus', 'tebal']
        ].map(([i, j, t, kunci, nilai]) => `
          <div class="tile">
            <div class="tile__top">${ico(i, { size: 18 })}<b>${esc(j)}</b></div>
            <p class="small soft" style="margin:.45rem 0 .7rem">${esc(t)}</p>
            <button class="btn btn--soft btn--sm" data-cf="${kunci}" data-cfv="${nilai}">
              ${String(c[kunci]) === String(nilai) ? '✓ Sedang aktif' : 'Coba sekarang'}</button>
          </div>`).join('')}
      </div>
      <div class="switch-row" style="margin-top:var(--s-4);border-top:1px solid var(--line);padding-top:var(--s-4)">
        <span><b>Mode tenang</b><br><small class="xs muted">Sembunyikan XP, rentetan, dan lencana.
          Untuk yang merasa dikejar-kejar angka.</small></span>
        <input type="checkbox" id="cfTenang" aria-label="Mode tenang" ${c.tenang ? 'checked' : ''} />
      </div>
    </section>

    <h2 style="margin-bottom:var(--s-4)">${ico('download', { size: 20 })} Belajar tanpa internet</h2>
    <section class="card" style="margin-bottom:var(--s-8)">
      <p class="small soft">SankaLingo GO tidak butuh server. Setelah materi tersimpan di perangkat,
      seluruh pelajaran, kartu, dan ujian tetap jalan di pesawat atau di daerah tanpa sinyal.
      Yang butuh internet hanya suara daring dan pengenalan ucapan.</p>
      <div id="luringBox" style="margin-top:var(--s-4)"></div>
    </section>

    <h2 style="margin-bottom:var(--s-4)">${ico('keyboard', { size: 20 })} Pintasan papan tik</h2>
    <div class="table-wrap" style="margin-bottom:var(--s-8)">
      <table class="tbl"><thead><tr><th style="width:180px">Tombol</th><th>Fungsi</th></tr></thead>
        <tbody>${PINTASAN.map(([k, v]) =>
          `<tr><td>${k.split(' ').map(x => /^[+…–]$/.test(x) ? x : `<kbd>${esc(x)}</kbd>`).join(' ')}</td>
               <td class="small soft">${esc(v)}</td></tr>`).join('')}</tbody></table>
    </div>

    <h2 style="margin-bottom:var(--s-4)">Istilah yang dipakai di aplikasi</h2>
    <div class="stack" style="display:grid;gap:var(--s-2);margin-bottom:var(--s-8)">
      ${ISTILAH.map(([k, v]) => `
        <details class="tile"><summary class="b" style="cursor:pointer">${esc(k)}</summary>
          <p class="small soft" style="margin-top:.55rem">${v}</p></details>`).join('')}
    </div>

    <h2 style="margin-bottom:var(--s-4)">${ico('stethoscope', { size: 20 })} Kalau ada yang tidak beres</h2>
    <div class="stack" style="display:grid;gap:var(--s-2);margin-bottom:var(--s-8)">
      ${MASALAH.map(([k, v]) => `
        <details class="tile"><summary class="b" style="cursor:pointer">${esc(k)}</summary>
          <p class="small soft" style="margin-top:.55rem">${v}</p></details>`).join('')}
    </div>

    <section class="card" style="margin-bottom:var(--s-4)">
      <div class="card__title">${ico('info')} Sumber & lisensi</div>
      <p class="small soft" style="margin:.5rem 0 .8rem">
        SankaLingo GO berdiri di atas karya orang lain. Ini daftarnya, berikut kewajiban
        yang menyertainya.</p>
      <ul class="stack stack--sm" style="display:grid;gap:.55rem">
        <li class="small soft"><b>Urutan goresan kana &amp; aksara Han</b> dari
          <a href="http://kanjivg.tagaini.net" target="_blank" rel="noopener">KanjiVG</a>
          (Ulrich Apel dkk.), berlisensi
          <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener">CC BY-SA 3.0</a>.
          Bentuk penyimpanan datanya kami ubah; data goresan itu beserta perubahannya
          tetap berlisensi CC BY-SA 3.0.</li>
        <li class="small soft"><b>Aksara 你</b> dari
          <a href="https://github.com/chanind/hanzi-writer-data" target="_blank" rel="noopener">hanzi-writer-data</a> (MIT).</li>
        <li class="small soft"><b>Huruf</b> Plus Jakarta Sans, Fraunces, dan JetBrains Mono —
          SIL Open Font License 1.1.</li>
      </ul>
      <div class="note" style="margin-top:var(--s-4)">
        <strong>Nama ujian</strong>
        TOEFL, IELTS, TOEIC, JLPT, TOPIK, HSK, DELE, DELF, Goethe-Zertifikat, dan TORFL
        adalah merek dagang penyelenggaranya masing-masing. SankaLingo GO tidak berafiliasi,
        tidak disponsori, dan tidak disahkan oleh mereka. Seluruh soal di aplikasi ini
        ditulis sendiri — tidak ada soal ujian resmi yang disalin.
      </div>
    </section>

    <section class="card">
      <div class="card__title">${ico('shield')} Data & privasi</div>
      <ul class="stack stack--sm" style="display:grid;gap:.5rem;margin-top:.7rem">
        <li class="small soft">Tidak ada akun, tidak ada kata sandi, tidak ada server. Semua tersimpan
          di peramban perangkat ini.</li>
        <li class="small soft">Nama panggilan, catatan, dan skormu tidak pernah dikirim ke mana pun.</li>
        <li class="small soft">Suara dan mikrofon memakai layanan bawaan peramban. Di Chrome, pengenalan
          ucapan diproses di server Google — jangan ucapkan hal rahasia saat memakainya.</li>
        <li class="small soft">Menghapus data situs di peramban akan menghapus kemajuanmu.
          <a href="#/${code}/pengaturan">Ekspor cadangan</a> sebelum itu terjadi.</li>
      </ul>
    </section>`;

  /* aksi */
  $$('[data-cf]', main()).forEach(b => b.onclick = () => {
    const kunci = b.dataset.cf;
    const nilai = b.dataset.cfv;
    const aktif = String(comfort()[kunci]) === String(nilai);
    const bawaan = { skala: 100, huruf: 'bawaan', kontras: 'normal',
                     gerak: 'auto', sentuh: 'normal', fokus: 'normal' };
    setComfort({ [kunci]: aktif ? bawaan[kunci] : (kunci === 'skala' ? +nilai : nilai) });
    renderPanduan();
    toast(aktif ? 'Dikembalikan ke bawaan.' : 'Aktif. Bisa dimatikan lagi di sini atau lewat tombol bulat.', 'ok');
  });

  $('#cfTenang').onchange = e => setComfort({ tenang: e.target.checked });

  $('#ulangPandu').onclick = () => {
    ulangiPandu();
    lupakanTipTertutup();
    mulaiPandu({ onSelesai: () => location.reload() });
  };

  gambarLuring();
}

/* ── Kotak mode luring ────────────────────────────────────────── */
async function gambarLuring() {
  const box = $('#luringBox');
  if (!box) return;

  if (!luringDidukung()) {
    box.innerHTML = `<p class="small" style="color:var(--warn)">
      Peramban ini tidak mendukung penyimpanan luring (atau halaman dibuka langsung dari berkas).
      Jalankan lewat <code>node server.js</code> dan buka <code>http://localhost:4321</code>.</p>`;
    return;
  }

  const r = await ruangSimpanan();
  box.innerHTML = `
    <div class="grid grid--3" style="gap:var(--s-3)">
      <div class="stat"><div class="stat__k">Berkas materi</div>
        <div class="stat__v" style="font-size:var(--fs-lg)">${BERKAS_MATERI.length}</div></div>
      <div class="stat"><div class="stat__k">Ruang terpakai</div>
        <div class="stat__v" style="font-size:var(--fs-lg)">${r ? ukuranBerkas(r.pakai) : '—'}</div>
        <div class="stat__note">${r ? `dari ${ukuranBerkas(r.kuota)} tersedia` : 'tidak diketahui'}</div></div>
      <div class="stat"><div class="stat__k">Status</div>
        <div class="stat__v" style="font-size:var(--fs-lg)" id="luringStat">
          ${navigator.serviceWorker.controller ? 'Aktif' : 'Belum aktif'}</div></div>
    </div>
    <div class="row" style="margin-top:var(--s-4);flex-wrap:wrap">
      <button class="btn btn--primary" id="siapkanBtn">${ico('download', { size: 15 })} Siapkan mode luring</button>
      <button class="btn btn--soft" id="amankanBtn">${ico('shield', { size: 15 })} Amankan penyimpanan</button>
      <button class="btn btn--ghost" id="bersihBtn">${ico('trash', { size: 15 })} Hapus simpanan</button>
    </div>
    <div class="bar bar--sm" id="luringBar" hidden style="margin-top:var(--s-3)"><i style="width:0%"></i></div>
    <p class="xs muted" id="luringPesan" style="margin-top:.5rem">
      Unduh sekali saat ada internet, lalu aplikasi bisa dibuka kapan pun tanpa sinyal.</p>`;

  const pesan = $('#luringPesan');
  const bar = $('#luringBar');

  $('#siapkanBtn').onclick = async () => {
    try {
      const n = await siapkanLuring();
      bar.hidden = false;
      bar.querySelector('i').style.width = '12%';
      pesan.textContent = `Mengunduh ${n} berkas materi…`;
      const lepas = onPanas(({ sukses, total }) => {
        bar.querySelector('i').style.width = '100%';
        pesan.innerHTML = `<b style="color:var(--ok)">Siap.</b> ${sukses} dari ${total} berkas tersimpan. ` +
          `Coba matikan internet lalu muat ulang — semuanya harus tetap jalan.`;
        toast('Materi siap dipakai tanpa internet.', 'ok');
        lepas();
      });
    } catch (e) {
      pesan.innerHTML = `<span style="color:var(--bad)">${esc(e.message)}</span>`;
    }
  };

  $('#amankanBtn').onclick = async () => {
    const ok = await amankanPenyimpanan();
    toast(ok ? 'Penyimpanan diamankan — peramban tidak akan membuangnya otomatis.'
             : 'Peramban menolak. Kemajuanmu tetap tersimpan, hanya tanpa jaminan tambahan.',
          ok ? 'ok' : 'warn', 6000);
  };

  $('#bersihBtn').onclick = async () => {
    await hapusSimpanan();
    toast('Simpanan luring dihapus. Kemajuan belajarmu tidak ikut terhapus.', 'ok');
    gambarLuring();
  };
}
