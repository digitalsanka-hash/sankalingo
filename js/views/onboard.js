/* ── Pandu awal ────────────────────────────────────────────────────
   Enam layar singkat yang dijalankan sekali saat aplikasi pertama dibuka.
   Tujuannya satu: setelah menutup layar terakhir, pengguna tahu persis
   tombol mana yang harus ditekan berikutnya. Bisa dilewati kapan saja. */

import { $, $$, esc, toast } from '../ui.js';
import { state, mutate } from '../state.js';
import { comfort, setComfort } from '../comfort.js';
import { LANGS } from '../../data/lang/registry.js';
import { ico } from '../icons.js';

const SUDAH = 'fasih.onboarded';
export const sudahDipandu = () => localStorage.getItem(SUDAH) === '1';
export const tandaiSudah = () => { try { localStorage.setItem(SUDAH, '1'); } catch {} };
export const ulangiPandu = () => { try { localStorage.removeItem(SUDAH); } catch {} };

const TUJUAN = [
  ['general', 'Buat sehari-hari', 'Ngobrol, nonton, baca — tanpa target ujian', '🌱'],
  ['kerja',   'Kerja & karier',   'Email, rapat, wawancara, presentasi',        '💼'],
  ['sekolah', 'Sekolah & kuliah', 'Tugas, jurnal, beasiswa',                    '🎓'],
  ['ujian',   'Ujian resmi',      'IELTS, TOEFL, TOEIC, JLPT, TOPIK, HSK…',     '📜'],
  ['jalan',   'Jalan-jalan',      'Bertahan hidup di negara lain',              '✈️']
];

const AWAL = [
  ['A1', 'Baru mulai',   'Belum tahu apa-apa, atau lupa semua'],
  ['A2', 'Bisa sedikit', 'Paham kata-kata dasar, belum bisa merangkai'],
  ['B1', 'Lumayan',      'Bisa percakapan sederhana, sering macet'],
  ['B2', 'Sudah lancar', 'Nyaman ngobrol, mau mengasah ke tingkat tinggi']
];

const WAKTU = [
  [10, '10 menit', 'Sela waktu — konsisten kecil'],
  [20, '20 menit', 'Satu pelajaran per hari'],
  [30, '30 menit', 'Ritme paling banyak dipilih'],
  [60, '60 menit', 'Serius, kejar target cepat']
];

const UKURAN = [
  [95,  'Kecil'], [100, 'Normal'], [115, 'Besar'], [135, 'Lebih besar'], [160, 'Sangat besar']
];

/* ── Rangka ───────────────────────────────────────────────────── */
export function mulaiPandu({ onSelesai } = {}) {
  if (document.querySelector('.onb')) return;

  const s = state();
  const draf = {
    nama: s.name || '',
    lang: s.lang || 'en',
    goal: 'general',
    level: 'A1',
    menit: 30,
    skala: comfort().skala,
    tema: comfort().tema,
    huruf: comfort().huruf
  };
  const skalaAwal = comfort().skala, temaAwal = comfort().tema, hurufAwal = comfort().huruf;

  const root = document.createElement('div');
  root.className = 'onb';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.setAttribute('aria-label', 'Pengenalan SankaLingo GO');
  root.innerHTML = `
    <div class="onb__card">
      <div class="onb__bar"><i style="width:0%"></i></div>
      <div class="onb__body" id="onbBody" tabindex="-1"></div>
      <div class="onb__foot">
        <button class="btn btn--ghost btn--sm" id="onbSkip">Lewati</button>
        <span class="grow"></span>
        <button class="btn btn--soft" id="onbBack">Kembali</button>
        <button class="btn btn--primary" id="onbNext">Lanjut</button>
      </div>
    </div>`;
  document.body.append(root);
  document.body.style.overflow = 'hidden';

  const langkah = [
    layarSalam, layarBahasa, layarTujuan, layarAwal, layarWaktu, layarNyaman, layarTutup
  ];
  let i = 0;

  const body = () => $('#onbBody', root);

  function gambar() {
    $('.onb__bar i', root).style.width = `${Math.round((i / (langkah.length - 1)) * 100)}%`;
    body().innerHTML = '';
    langkah[i](body(), draf, gambar);
    $('#onbBack', root).disabled = i === 0;
    $('#onbBack', root).style.visibility = i === 0 ? 'hidden' : '';
    $('#onbNext', root).textContent = i === langkah.length - 1 ? 'Mulai belajar' : 'Lanjut';
    $('#onbSkip', root).style.visibility = i === langkah.length - 1 ? 'hidden' : '';
    body().scrollTop = 0;
    body().focus({ preventScroll: true });
  }

  const tutup = (simpan) => {
    if (!simpan) { setComfort({ skala: skalaAwal, tema: temaAwal, huruf: hurufAwal }); }
    document.body.style.overflow = '';
    root.remove();
    tandaiSudah();
    if (simpan) {
      mutate(st => {
        st.name = draf.nama.trim();
        st.lang = draf.lang;
        st.goal = draf.goal === 'ujian' ? (st.goal === 'general' ? 'ielts' : st.goal) : 'general';
        st.level = draf.level;
        st.dailyMin = draf.menit;
        st.onboardGoal = draf.goal;
      });
      setComfort({ skala: draf.skala, tema: draf.tema, huruf: draf.huruf });
    }
    onSelesai?.(simpan ? draf : null);
  };

  $('#onbNext', root).onclick = () => { i < langkah.length - 1 ? (i++, gambar()) : tutup(true); };
  $('#onbBack', root).onclick = () => { if (i > 0) { i--; gambar(); } };
  $('#onbSkip', root).onclick = () => tutup(false);

  /* Kurung fokus di dalam dialog supaya pengguna papan tik tidak tersesat. */
  root.addEventListener('keydown', e => {
    if (e.key === 'Escape') { e.preventDefault(); tutup(false); return; }
    if (e.key !== 'Tab') return;
    const f = $$('button:not([disabled]), input, [href], select', root)
      .filter(n => n.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  gambar();
}

/* ── Alat bantu ───────────────────────────────────────────────── */
function judul(host, step, h, p) {
  host.insertAdjacentHTML('beforeend',
    `<div class="onb__step">Langkah ${step} dari 7</div>
     <h2>${h}</h2><p>${p}</p>`);
}

function pilihan(host, items, aktif, onPilih, { kolom } = {}) {
  const wrap = document.createElement('div');
  wrap.className = 'pick-grid';
  if (kolom) wrap.style.gridTemplateColumns = `repeat(auto-fill,minmax(${kolom}px,1fr))`;
  wrap.setAttribute('role', 'radiogroup');
  items.forEach(it => {
    const b = document.createElement('button');
    b.className = 'pick' + (it.val === aktif ? ' is-on' : '');
    b.type = 'button';
    b.setAttribute('role', 'radio');
    b.setAttribute('aria-checked', String(it.val === aktif));
    b.innerHTML = `<span class="pick__dot" style="background:${it.warna || 'var(--brand)'}">${it.ikon || ''}</span>
      <span class="pick__txt"><b>${esc(it.judul)}</b><em>${esc(it.sub || '')}</em></span>`;
    b.onclick = () => onPilih(it.val);
    wrap.append(b);
  });
  host.append(wrap);
}

/* ── Layar 1 · salam ──────────────────────────────────────────── */
function layarSalam(host, d, ulang) {
  judul(host, 1, 'Selamat datang di SankaLingo GO',
    /* Kalimat lama berbunyi "tidak perlu daftar" - benar sebelum ada
       gerbang, dan langsung terbantah oleh layar masuk yang baru saja
       dilewati orangnya. Yang tetap benar dan tetap layak dijanjikan
       adalah bagian luringnya. */
    'Sembilan bahasa, satu metode. Semua materi tersimpan di perangkatmu sendiri — ' +
    'sesudah dibuka sekali, belajar tetap jalan tanpa internet. ' +
    'Lima pertanyaan singkat dulu, ya.');
  host.insertAdjacentHTML('beforeend', `
    <div class="onb-preview">
      <label class="cf-lbl" for="onbNama">Panggil kamu siapa? (boleh dikosongkan)</label>
      <input class="input" id="onbNama" placeholder="Nama panggilan" maxlength="24"
             value="${esc(d.nama)}" style="margin-top:.5rem;width:100%" autocomplete="given-name" />
      <p class="xs muted">Dipakai hanya untuk menyapa di beranda. Tidak dikirim ke mana pun.</p>
    </div>`);
  $('#onbNama', host).oninput = e => { d.nama = e.target.value; };
}

/* ── Layar 2 · bahasa ─────────────────────────────────────────── */
function layarBahasa(host, d, ulang) {
  judul(host, 2, 'Bahasa apa yang mau kamu pelajari?',
    'Bisa diganti kapan saja lewat tombol di kanan atas. Kemajuan tiap bahasa disimpan terpisah.');
  pilihan(host, LANGS.map(l => ({
    val: l.code, judul: l.name, sub: `${l.native} · ${l.exam.split('·')[0].trim()}`,
    warna: l.accent, ikon: l.native.slice(0, 1)
  })), d.lang, v => { d.lang = v; ulang(); }, { kolom: 200 });
}

/* ── Layar 3 · tujuan ─────────────────────────────────────────── */
function layarTujuan(host, d, ulang) {
  judul(host, 3, 'Buat apa kamu belajar?',
    'Jawaban ini menentukan pelajaran mana yang kami tawarkan lebih dulu di beranda.');
  pilihan(host, TUJUAN.map(([val, judul_, sub, ikon]) =>
    ({ val, judul: judul_, sub, ikon })), d.goal, v => { d.goal = v; ulang(); }, { kolom: 210 });
}

/* ── Layar 4 · titik mulai ────────────────────────────────────── */
function layarAwal(host, d, ulang) {
  judul(host, 4, 'Sudah sejauh mana sekarang?',
    'Tebak saja — tidak ada jawaban salah. Nanti ada tes penempatan kalau kamu mau lebih pasti.');
  pilihan(host, AWAL.map(([val, judul_, sub]) =>
    ({ val, judul: judul_, sub, ikon: val })), d.level, v => { d.level = v; ulang(); }, { kolom: 210 });
}

/* ── Layar 5 · waktu ──────────────────────────────────────────── */
function layarWaktu(host, d, ulang) {
  judul(host, 5, 'Berapa lama sehari?',
    'Sepuluh menit setiap hari mengalahkan tiga jam sekali seminggu. Pilih yang benar-benar sanggup kamu jalani.');
  pilihan(host, WAKTU.map(([val, judul_, sub]) =>
    ({ val, judul: judul_, sub, ikon: '⏱' })), d.menit, v => { d.menit = v; ulang(); }, { kolom: 200 });
}

/* ── Layar 6 · kenyamanan ─────────────────────────────────────── */
function layarNyaman(host, d, ulang) {
  judul(host, 6, 'Biar nyaman di matamu',
    'Atur sekarang atau nanti — semuanya ada di Pengaturan, dan bisa diubah cepat lewat tombol ' +
    'bulat di pojok kanan bawah layar.');

  host.insertAdjacentHTML('beforeend', `
    <div class="cf-row" style="margin-top:var(--s-5)">
      <span class="cf-lbl">Ukuran teks</span>
      <div class="seg" id="onbSkala" role="group" aria-label="Ukuran teks">
        ${UKURAN.map(([v, l]) => `<button type="button" data-v="${v}" class="${d.skala === v ? 'is-on' : ''}">${l}</button>`).join('')}
      </div>
    </div>
    <div class="cf-row" style="margin-top:var(--s-4)">
      <span class="cf-lbl">Tampilan</span>
      <div class="seg" id="onbTema" role="group" aria-label="Tema warna">
        <button type="button" data-v="dark"   class="${d.tema === 'dark' ? 'is-on' : ''}">Gelap</button>
        <button type="button" data-v="light"  class="${d.tema === 'light' ? 'is-on' : ''}">Terang</button>
        <button type="button" data-v="sistem" class="${d.tema === 'sistem' ? 'is-on' : ''}">Ikut sistem</button>
      </div>
    </div>
    <div class="cf-row" style="margin-top:var(--s-4)">
      <span class="cf-lbl">Jenis huruf</span>
      <div class="seg" id="onbHuruf" role="group" aria-label="Jenis huruf">
        <button type="button" data-v="bawaan"    class="${d.huruf === 'bawaan' ? 'is-on' : ''}">Bawaan</button>
        <button type="button" data-v="mudah"     class="${d.huruf === 'mudah' ? 'is-on' : ''}">Mudah dibaca</button>
        <button type="button" data-v="disleksia" class="${d.huruf === 'disleksia' ? 'is-on' : ''}">Ramah disleksia</button>
      </div>
    </div>
    <div class="onb-preview" style="margin-top:var(--s-5)">
      <span class="cf-lbl">Contoh tampilan</span>
      <p><b>Kesalahan paling sering penutur Indonesia:</b> menghilangkan <i>-s</i> pada kata benda jamak,
      karena bahasa Indonesia tidak menandai jumlah pada kata bendanya.</p>
    </div>`);

  const seg = (sel, kunci, ubah) => $$(`${sel} button`, host).forEach(b => b.onclick = () => {
    d[kunci] = ubah(b.dataset.v);
    setComfort({ [kunci]: d[kunci] });
    ulang();
  });
  seg('#onbSkala', 'skala', v => +v);
  seg('#onbTema',  'tema',  v => v);
  seg('#onbHuruf', 'huruf', v => v);
}

/* ── Layar 7 · penutup ────────────────────────────────────────── */
function layarTutup(host, d) {
  const meta = LANGS.find(l => l.code === d.lang) || LANGS[0];
  const nama = d.nama.trim();
  const tujuan = TUJUAN.find(t => t[0] === d.goal);
  judul(host, 7, nama ? `Siap, ${esc(nama)}.` : 'Semuanya siap.',
    'Beginilah aplikasi akan menyesuaikan diri denganmu. Semua masih bisa diubah nanti.');
  host.insertAdjacentHTML('beforeend', `
    <div class="grid grid--2" style="margin-top:var(--s-5);gap:var(--s-3)">
      ${[['Bahasa', `${esc(meta.name)} · ${esc(meta.native)}`],
         ['Tujuan', esc(tujuan ? tujuan[1] : '—')],
         ['Titik mulai', esc(d.level)],
         ['Target harian', `${d.menit} menit`]]
        .map(([k, v]) => `<div class="stat"><div class="stat__k">${k}</div><div class="stat__v" style="font-size:var(--fs-lg)">${v}</div></div>`).join('')}
    </div>
    <div class="onb-preview" style="margin-top:var(--s-5)">
      <b>Tiga hal yang perlu kamu tahu</b>
      <ul class="stack stack--sm" style="margin-top:.6rem;display:grid;gap:.45rem">
        <li class="small soft">🔊 <b>Tombol suara</b> ada di hampir setiap kata. Kalau tidak berbunyi,
          buka <b>Pengaturan → Suara</b> — di sana ada diagnosis otomatis.</li>
        <li class="small soft">🧭 <b>Kurikulum</b> adalah jalur utamanya: tingkat → unit → pelajaran.
          Kalau bingung mau apa, tekan tombol <b>Lanjutkan</b> di beranda.</li>
        <li class="small soft">⚙️ <b>Tombol bulat</b> di pojok kanan bawah mengatur ukuran teks, kontras,
          dan gerak animasi kapan pun tanpa meninggalkan halaman.</li>
      </ul>
    </div>`);
}
