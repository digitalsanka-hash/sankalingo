/* ── Panel admin ──────────────────────────────────────────────────

   Mengontrol pembeli: mencetak kode akses, menandai kode yang sudah
   diberikan, mengubah masa aktif, dan menghapus akun.

   Halaman ini TIDAK memegang kuasa apa pun. Ia cuma bentuk tampak dari
   Edge Function panel-admin, dan fungsi itulah yang memeriksa apakah
   pemanggilnya benar-benar admin — dengan service role, di sisi server.
   Kalau seseorang memaksa membuka #/admin tanpa hak, yang ia dapat
   hanyalah rentetan 403; tidak ada satu pun data yang ikut terkirim. */

import { $, $$, html, raw, esc, toast, confirmDialog, tanggal } from '../ui.js';
import { ico } from '../icons.js';
import { fungsi, profil } from '../lisensi.js';
import { masukSebagai } from '../awan.js';

const nf = n => new Intl.NumberFormat('id-ID').format(n || 0);

/* Satu-satunya sumber kebenaran di layar ini, supaya angka ringkasan
   dan isi tabel tidak mungkin bercerita berbeda. */
let data = null;
/* Dipisah dari `data` karena bisa gagal sendiri: tabelnya baru ada
   sesudah supabase/saran.sql dijalankan, dan panel pembeli tidak boleh
   ikut kosong hanya karena itu belum dikerjakan. */
let saran = null;

async function muat() {
  data = await fungsi('panel-admin', { tindakan: 'ringkasan' });
  try { saran = await fungsi('panel-admin', { tindakan: 'saran' }); }
  catch (e) { saran = { galat: e.message }; }
  gambar();
}

const chip = (n, teks, warna) =>
  `<div><b style="color:var(--${warna});font-size:var(--fs-xl)">${nf(n)}</b>
     <span class="xs muted" style="display:block">${esc(teks)}</span></div>`;

function barisKode(k) {
  const habis = k.terpakai >= k.maks_pakai;
  const status = habis
    ? '<span class="badge badge--ok">terpakai</span>'
    : k.dipesan_untuk
      ? '<span class="badge badge--warn">sudah dikirim</span>'
      : '<span class="badge">siap</span>';
  return `<tr>
    <td><span class="mono">${esc(k.kode)}</span></td>
    <td>${status}</td>
    <td>${esc(k.dipesan_untuk || '—')}</td>
    <td>${k.bulan_aktif ? esc(String(k.bulan_aktif)) + ' bulan' : 'selamanya'}</td>
    <td class="nowrap">${esc(tanggal(k.dibuat))}</td>
    <td class="nowrap">
      ${habis ? '' : k.dipesan_untuk
        ? `<button class="btn btn--ghost btn--sm" data-batal="${esc(k.kode)}">Batal tanda</button>`
        : `<button class="btn btn--primary btn--sm" data-kirim="${esc(k.kode)}"
                    data-bulan="${esc(String(k.bulan_aktif ?? ''))}">Kirim</button>
           <button class="btn btn--soft btn--sm" data-salin="${esc(k.kode)}">Salin</button>
           <button class="btn btn--ghost btn--sm" data-pesan="${esc(k.kode)}">Tandai terkirim</button>`}
    </td>
  </tr>`;
}

/* ── Seberapa hidup seorang pengguna ──────────────────────────────

   Dibedakan dari kolom "Akses". Akses menjawab sudah bayar atau belum;
   ini menjawab masih dipakai atau tidak — dan dua hal itu sering
   berlawanan. Pembeli yang membayar penuh lalu tidak pernah membuka
   aplikasinya adalah orang yang paling perlu kamu hubungi, dan di
   kolom Akses ia terlihat sama sehatnya dengan pengguna paling rajin.

   Sumber angkanya kemajuan.diperbarui, ditulis tiap kali aplikasi
   ditinggalkan. Jadi "belum pernah" benar-benar berarti belum pernah
   dibuka sesudah mendaftar, bukan sekadar belum mengerjakan latihan. */
const HARI = 24 * 60 * 60 * 1000;

const hitungHidup = (daftar) => daftar.reduce((a, p) => {
  a[hidup(p).kunci]++; return a;
}, { aktif: 0, melambat: 0, hilang: 0, nihil: 0 });

function hidup(p) {
  if (!p.dipakai_terakhir) return { kunci: 'nihil', label: 'belum pernah', warna: 'bad' };
  const hari = Math.floor((Date.now() - new Date(p.dipakai_terakhir)) / HARI);
  if (hari <= 7) return { kunci: 'aktif', label: hari === 0 ? 'hari ini' : `${hari} hari lalu`, warna: 'ok' };
  if (hari <= 30) return { kunci: 'melambat', label: `${hari} hari lalu`, warna: 'warn' };
  return { kunci: 'hilang', label: `${hari} hari lalu`, warna: 'bad' };
}

function barisPengguna(p) {
  const aktif = p.kode && (!p.akses_sampai || new Date(p.akses_sampai) > new Date());
  const h = hidup(p);
  return `<tr data-hidup="${h.kunci}">
    <td>${esc(p.email || '(tanpa email)')}${p.admin ? ' <span class="badge badge--ok">admin</span>' : ''}</td>
    <td>${aktif
      ? '<span class="badge badge--ok">aktif</span>'
      : '<span class="badge badge--warn">belum bayar</span>'}</td>
    <td><span class="badge badge--${h.warna}">${esc(h.label)}</span></td>
    <td>${p.kode ? `<span class="mono">${esc(p.kode)}</span>` : '—'}</td>
    <td>${p.akses_sampai ? esc(tanggal(p.akses_sampai)) : (p.kode ? 'selamanya' : '—')}</td>
    <td class="nowrap">${esc(tanggal(p.dibuat))}</td>
    <td class="nowrap">
      <button class="btn btn--soft btn--sm" data-selamanya="${esc(p.user_id)}">Beri selamanya</button>
      ${p.admin ? '' : `<button class="btn btn--ghost btn--sm" data-hapus="${esc(p.user_id)}"
        data-email="${esc(p.email || '')}">Hapus</button>`}
    </td>
  </tr>`;
}

const LENCANA = {
  baru:    '<span class="badge badge--warn">baru</span>',
  dibaca:  '<span class="badge">dibaca</span>',
  selesai: '<span class="badge badge--ok">selesai</span>',
};
const JENIS_SARAN = { saran: 'Saran', masalah: 'Masalah', kata: 'Isi keliru' };

function barisSaran(s) {
  return `<tr>
    <td class="nowrap">${esc(tanggal(s.dibuat_pada))}</td>
    <td>${esc(JENIS_SARAN[s.jenis] || s.jenis)}</td>
    <td>${LENCANA[s.status] || esc(s.status)}</td>
    <td style="min-width:260px">${esc(s.isi)}</td>
    <td class="xs muted nowrap">${esc(s.bahasa || '—')} · <span class="mono">${esc(s.halaman || '—')}</span></td>
    <td class="xs muted">${esc(s.email || '—')}</td>
    <td class="nowrap">
      ${s.status === 'selesai'
        ? `<button class="btn btn--ghost btn--sm" data-saran="${s.id}" data-status="baru">Buka lagi</button>`
        : `<button class="btn btn--soft btn--sm" data-saran="${s.id}" data-status="selesai">Selesai</button>` +
          (s.status === 'baru'
            ? ` <button class="btn btn--ghost btn--sm" data-saran="${s.id}" data-status="dibaca">Dibaca</button>`
            : '')}
    </td>
  </tr>`;
}

/* Pesan yang dikirim ke pembeli. Ditulis sekali di sini supaya tiga
   salurannya - email, WhatsApp, salin-tempel - tidak pelan-pelan
   berbeda isi. Alamat aplikasinya diambil dari halaman yang sedang
   dibuka, bukan ditulis tetap: panel ini SELALU dibuka dari aplikasi
   yang dimaksud, jadi itu satu-satunya alamat yang pasti benar. */
function pesanKode(kode, bulan, nama = '') {
  const alamat = location.origin + location.pathname;
  const sapaan = nama ? `Halo ${nama}!` : 'Halo!';
  const masa = bulan ? `berlaku ${bulan} bulan` : 'berlaku selamanya';
  return `${sapaan}

Terima kasih sudah membeli SankaLingo GO. Ini kode aksesmu:

${kode}

Cara memakainya:
1. Buka ${alamat}
2. Pilih tab "Daftar"
3. Isi emailmu, buat kata sandi, lalu tempel kode di atas
4. Selesai. Masuk berikutnya cukup email + kata sandi

Kode ini sekali pakai dan ${masa}.
Ada kendala? Balas pesan ini.`;
}

/* ── Kartu kirim email ────────────────────────────────────────────

   Pratinjaunya bukan hiasan. Kode akses dikirim sekali dan tidak bisa
   ditarik kembali; melihat surat yang persis akan diterima pembeli —
   termasuk namanya dan masa aktifnya — adalah satu-satunya kesempatan
   menangkap salah ketik sebelum ia mendarat di kotak masuk orang.

   Teksnya sengaja dijaga sama dengan supabase/functions/_shared/surat.ts.
   Kalau salah satunya diubah, ubah keduanya. */
const MASA = [['', 'Selamanya'], ['1', '1 bulan'], ['3', '3 bulan'], ['6', '6 bulan'], ['12', '12 bulan']];

function kartuKirim() {
  const siap = (data?.kode?.daftar || [])
    .filter(k => !k.dipesan_untuk && k.terpakai < k.maks_pakai);

  if (!siap.length) return `
    <div class="card" style="margin-bottom:var(--s-5)">
      <div class="card__title">${ico('quote')} Kirim kode ke pembeli</div>
      <div class="note note--warn small" style="margin-top:var(--s-4)">
        Tidak ada kode yang siap dikirim. Cetak dulu di kartu di atas.</div>
    </div>`;

  return `
  <div class="card" style="margin-bottom:var(--s-5)">
    <div class="card__title">${ico('quote')} Kirim kode ke pembeli</div>
    <p class="small soft" style="margin:.4rem 0 var(--s-4)">
      Isi nama dan email, pilih kode, periksa pratinjaunya, lalu kirim.
      ${data?.emailOtomatis ? '' : '<b>Pengiriman otomatis belum aktif</b> — yang tersedia baru salin dan draf.'}</p>

    <div class="stack stack--sm">
      <label class="stack stack--sm"><span class="xs muted">Nama pembeli (opsional)</span>
        <input class="input" id="kmNama" placeholder="misal: Reza Asqalani"></label>

      <label class="stack stack--sm"><span class="xs muted">Email pembeli</span>
        <input class="input" id="kmEmail" type="email" inputmode="email" placeholder="pembeli@email.com"></label>

      <label class="stack stack--sm"><span class="xs muted">Pilih kode (${nf(siap.length)} siap)</span>
        <select class="input" id="kmKode">
          ${siap.map(k => `<option value="${esc(k.kode)}" data-bulan="${esc(String(k.bulan_aktif ?? ''))}">
            ${esc(k.kode)} — ${k.bulan_aktif ? k.bulan_aktif + ' bulan' : 'selamanya'}</option>`).join('')}
        </select></label>

      <div class="stack stack--sm"><span class="xs muted">Masa aktif paket pembeli ini</span>
        <div class="pill-row" id="kmMasa">
          ${MASA.map(([v, t]) => `<button class="btn btn--soft btn--sm" data-masa="${v}">${t}</button>`).join('')}
        </div></div>
    </div>

    <div class="row row--between" style="margin-top:var(--s-5)">
      <div class="card__title" style="font-size:var(--fs-md)">Pratinjau email</div>
      <button class="btn btn--ghost btn--sm" id="kmSalin">Salin teks</button>
    </div>
    <div class="passage small" id="kmPratinjau"
         style="margin-top:.5rem;background:var(--bg-2);border-radius:var(--r-md);padding:var(--s-4)"></div>

    <div class="row" style="margin-top:var(--s-5);flex-wrap:wrap">
      <button class="btn btn--soft" id="kmDraf">Buka draf email</button>
      <button class="btn btn--soft" id="kmWa">WhatsApp</button>
      ${data?.emailOtomatis ? '<button class="btn btn--primary" id="kmKirim">Kirim sekarang</button>' : ''}
    </div>
  </div>`;
}

/* Dua cara mengirim, dan yang tersedia ditentukan server.

   "Kirim sekarang" berangkat dari Resend lewat Edge Function — muncul
   hanya kalau RESEND_API_KEY dan RESEND_FROM sudah terpasang, karena
   tombol yang menjanjikan pengiriman lalu gagal jauh lebih buruk
   daripada tombol yang tidak ada.

   Draf manual (email/WhatsApp/salin) tetap disimpan meskipun Resend
   sudah aktif: ia tidak bergantung pada apa pun, jadi ia yang menolong
   waktu Resend bermasalah atau pembeli hanya punya nomor WhatsApp. */
async function layarKirim(kode, bulan) {
  const { modal } = await import('../ui.js');
  const isi = pesanKode(kode, bulan);
  const subjek = 'Kode akses SankaLingo GO';

  modal(`
    <div class="modal__head">
      <h3>${ico('quote', { size: 18 })} Kirim ${esc(kode)}</h3>
      <button class="icon-btn" data-close aria-label="Tutup">✕</button>
    </div>
    <div class="modal__body">
      <label class="xs muted" for="kirimEmail">Email pembeli</label>
      <input id="kirimEmail" class="input" type="email" inputmode="email"
             placeholder="pembeli@email.com" style="width:100%">

      <label class="xs muted" for="kirimWa" style="display:block;margin-top:var(--s-3)">
        Nomor WhatsApp (opsional, format 62…)</label>
      <input id="kirimWa" class="input" inputmode="numeric" placeholder="6281234567890" style="width:100%">

      <label class="xs muted" for="kirimIsi" style="display:block;margin-top:var(--s-3)">Isi pesan</label>
      <textarea id="kirimIsi" class="input" rows="10" style="width:100%;resize:vertical">${esc(isi)}</textarea>
      <p class="xs muted" style="margin:.4rem 0 0">
        Sesudah dikirim, kodenya ditandai "sudah dikirim" ke alamat itu.
        ${raw(data?.emailOtomatis
          ? '<b>Kirim sekarang</b> berangkat langsung dari server; isi kotak di atas tidak ikut — yang dikirim surat baku.'
          : 'Pengiriman otomatis belum aktif, jadi yang ada baru draf.')}</p>
    </div>
    <div class="modal__foot">
      <button class="btn btn--ghost" data-close>Batal</button>
      <button class="btn btn--soft" id="kirimSalin">Salin pesan</button>
      <button class="btn btn--soft" id="kirimWaBtn">WhatsApp</button>
      <button class="btn btn--soft" id="kirimEmailBtn">Buka email</button>
      ${raw(data?.emailOtomatis
        ? '<button class="btn btn--primary" id="kirimLangsung">Kirim sekarang</button>'
        : '')}
    </div>`, {
    wide: true,
    onMount(box, close) {
      const surel = () => box.querySelector('#kirimEmail').value.trim();
      const teks  = () => box.querySelector('#kirimIsi').value;

      /* Penandaan dilakukan sesudah salurannya benar-benar dibuka,
         bukan sebelumnya: kode yang ditandai terkirim padahal
         drafnya batal ditulis akan hilang dari daftar "siap" tanpa
         pernah sampai ke siapa pun. */
      const tandai = async (kepada) => {
        try {
          await fungsi('panel-admin', { tindakan: 'pesan', kode, label: kepada });
          await muat();
        } catch (e) { toast(e.message, 'bad', 4200); }
      };

      /* Kirim sungguhan. Penandaannya dikerjakan server sesudah Resend
         menerima, jadi di sini tidak ada tandai() — kalau gagal, kode
         tetap berstatus siap dan bisa dicoba lagi. */
      box.querySelector('#kirimLangsung')?.addEventListener('click', async (ev) => {
        if (!surel().includes('@')) { toast('Isi dulu email pembelinya.', 'warn'); return; }
        const tbl = ev.currentTarget;
        tbl.disabled = true; tbl.textContent = 'Mengirim…';
        try {
          await fungsi('panel-admin', { tindakan: 'kirim_email', kode, label: surel() });
          toast(`Kode ${kode} terkirim ke ${surel()}.`, 'ok', 4200);
          await muat();
          close();
        } catch (e) {
          toast(e.message, 'bad', 8000);
          tbl.disabled = false; tbl.textContent = 'Kirim sekarang';
        }
      });

      box.querySelector('#kirimEmailBtn').addEventListener('click', async () => {
        if (!surel().includes('@')) { toast('Isi dulu email pembelinya.', 'warn'); return; }
        location.href = `mailto:${encodeURIComponent(surel())}`
          + `?subject=${encodeURIComponent(subjek)}&body=${encodeURIComponent(teks())}`;
        await tandai(surel());
        close();
      });

      box.querySelector('#kirimWaBtn').addEventListener('click', async () => {
        const no = box.querySelector('#kirimWa').value.replace(/[^0-9]/g, '');
        if (!no) { toast('Isi dulu nomor WhatsApp-nya.', 'warn'); return; }
        window.open(`https://wa.me/${no}?text=${encodeURIComponent(teks())}`, '_blank', 'noopener');
        await tandai(surel() || ('wa:' + no));
        close();
      });

      box.querySelector('#kirimSalin').addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(teks());
          toast('Pesan disalin. Tempel di mana pun kamu mengirimnya.');
          if (surel()) await tandai(surel());
        } catch { toast('Gagal menyalin. Salin manual dari kotak isian.', 'bad'); }
      });

      box.querySelector('#kirimEmail').focus();
    }
  });
}

function kartuSaran() {
  if (saran?.galat) return `
    <div class="card" style="margin-bottom:var(--s-5)">
      <div class="card__title">${ico('quote')} Kotak saran</div>
      <div class="note note--warn small" style="margin-top:var(--s-4)">
        Belum bisa dibaca: ${esc(saran.galat)}<br>
        Jalankan <b>supabase/saran.sql</b> di SQL Editor, lalu pasang ulang
        Edge Function panel-admin.
      </div>
    </div>`;

  const daftar = saran?.daftar ?? [];
  return `
  <div class="card" style="margin-bottom:var(--s-5)">
    <div class="row row--between">
      <div class="card__title">${ico('quote')} Kotak saran
        ${saran?.baru ? `<span class="badge badge--warn">${nf(saran.baru)} baru</span>` : ''}</div>
      <input class="input" id="admCariSaran" type="search" placeholder="Cari isi saran…" style="max-width:230px">
    </div>
    ${daftar.length ? `<div class="table-wrap" style="margin-top:var(--s-4)">
      <table class="tbl"><thead><tr>
        <th>Masuk</th><th>Jenis</th><th>Status</th><th>Isi</th><th>Dari halaman</th><th>Email</th><th></th>
      </tr></thead><tbody id="admTSaran">${daftar.map(barisSaran).join('')}</tbody></table>
    </div>`
    : '<p class="small muted" style="margin-top:var(--s-4)">Belum ada saran masuk.</p>'}
  </div>`;
}

function gambar() {
  const k = data.kode, p = data.pengguna;
  const bayar = p.filter(x => x.kode).length;

  $('#adminIsi').innerHTML = `
  <div class="grid grid--2" style="margin-bottom:var(--s-5)">
    <div class="card">
      <div class="card__title">${ico('users')} Pembeli</div>
      <div class="row" style="gap:var(--s-6);margin-top:var(--s-4)">
        ${chip(p.length, 'akun terdaftar', 'info')}
        ${chip(bayar, 'sudah menebus kode', 'ok')}
        ${chip(p.length - bayar, 'belum menebus', 'warn')}
      </div>
    </div>
    <div class="card">
      <div class="card__title">${ico('grammar')} Stok kode</div>
      <div class="row" style="gap:var(--s-6);margin-top:var(--s-4)">
        ${chip(k.siap, 'siap dikirim', 'ok')}
        ${chip(k.dipesan, 'sudah dikirim', 'warn')}
        ${chip(k.terpakai, 'sudah ditebus', 'info')}
      </div>
      ${k.siap < 5 ? `<div class="note note--warn small" style="margin-top:var(--s-4)">
        Stok kode siap tinggal ${nf(k.siap)}. Cetak lagi sebelum ada yang membeli.</div>` : ''}
    </div>
  </div>

  ${kartuSaran()}

  ${kartuKirim()}

  <div class="card" style="margin-bottom:var(--s-5)">
    <div class="card__title">${ico('pen')} Cetak kode baru</div>
    <div class="row" style="gap:var(--s-3);margin-top:var(--s-4);flex-wrap:wrap;align-items:flex-end">
      <label class="stack stack--sm"><span class="xs muted">Berapa kode</span>
        <input class="input" id="admJml" type="number" min="1" max="200" value="10" style="width:110px"></label>
      <label class="stack stack--sm"><span class="xs muted">Masa aktif</span>
        <select class="input" id="admBulan" style="width:170px">
          <option value="">Selamanya</option>
          <option value="12">12 bulan</option>
          <option value="6">6 bulan</option>
          <option value="1">1 bulan</option>
        </select></label>
      <label class="stack stack--sm" style="flex:1;min-width:180px"><span class="xs muted">Catatan (opsional)</span>
        <input class="input" id="admCatat" placeholder="misal: batch Scalev Agustus"></label>
      <button class="btn btn--primary" id="admBuat">Cetak</button>
    </div>
    <div id="admHasil"></div>
  </div>

  <div class="card" style="margin-bottom:var(--s-5)">
    <div class="row row--between">
      <div class="card__title">${ico('grammar')} Kode lisensi</div>
      <input class="input" id="admCariKode" type="search" placeholder="Cari kode / nama…" style="max-width:230px">
    </div>
    <div class="table-wrap" style="margin-top:var(--s-4)">
      <table class="tbl"><thead><tr>
        <th>Kode</th><th>Status</th><th>Dikirim ke</th><th>Masa aktif</th><th>Dibuat</th><th></th>
      </tr></thead><tbody id="admTKode">${k.daftar.map(barisKode).join('')}</tbody></table>
    </div>
  </div>

  <div class="card">
    <div class="row row--between">
      <div class="card__title">${ico('users')} Pengguna</div>
      <input class="input" id="admCariUser" type="search" placeholder="Cari email…" style="max-width:230px">
    </div>

    <div class="row" style="gap:var(--s-6);margin-top:var(--s-4);flex-wrap:wrap">
      ${chip(hitungHidup(p).aktif, 'dipakai ≤7 hari', 'ok')}
      ${chip(hitungHidup(p).melambat, 'melambat 8–30 hari', 'warn')}
      ${chip(hitungHidup(p).hilang, 'hilang >30 hari', 'bad')}
      ${chip(hitungHidup(p).nihil, 'belum pernah dibuka', 'bad')}
    </div>

    <div class="pill-row" id="admSaringHidup" style="margin-top:var(--s-4)">
      ${[['', 'Semua'], ['aktif', 'Aktif'], ['melambat', 'Melambat'],
         ['hilang', 'Hilang'], ['nihil', 'Belum pernah']]
        .map(([v, t]) => `<button class="btn btn--soft btn--sm" data-hidup-saring="${v}">${t}</button>`).join('')}
    </div>

    ${hitungHidup(p).nihil ? `<div class="note note--warn small" style="margin-top:var(--s-4)">
      ${nf(hitungHidup(p).nihil)} orang mendaftar tapi belum pernah membuka aplikasinya.
      Mereka yang paling perlu disapa — bukan yang sudah rajin.</div>` : ''}

    <div class="table-wrap" style="margin-top:var(--s-4)">
      <table class="tbl"><thead><tr>
        <th>Email</th><th>Akses</th><th>Terakhir dipakai</th><th>Kode</th><th>Sampai</th><th>Daftar</th><th></th>
      </tr></thead><tbody id="admTUser">${p.map(barisPengguna).join('')}</tbody></table>
    </div>
  </div>`;

  pasang();
}

/* Satu penangan untuk seluruh tombol tabel. Tabelnya digambar ulang
   tiap kali data berubah, jadi memasang pendengar di tiap tombol akan
   selalu tertinggal satu langkah. */
/* Menyalakan kartu kirim: pratinjau ikut berubah tiap ketikan, dan
   tiga tombol kirim membaca keadaan yang sama. */
function pasangKirim() {
  const kotak = $('#kmPratinjau');
  if (!kotak) return;                       // stok kode habis, kartunya ringkas

  const el = id => $('#' + id);
  /* Masa aktif awal mengikuti kode yang terpilih, bukan dipatok
     'selamanya': kode yang dicetak untuk batch 3 bulan harus muncul
     sebagai 3 bulan, supaya admin tidak diam-diam mengubahnya. */
  let masa = el('kmKode').selectedOptions[0]?.dataset.bulan ?? '';

  const nilai = () => ({
    nama: el('kmNama').value.trim(),
    email: el('kmEmail').value.trim(),
    kode: el('kmKode').value,
    bulan: masa === '' ? null : Number(masa),
  });

  const gambarUlang = () => {
    const v = nilai();
    kotak.textContent = pesanKode(v.kode, v.bulan, v.nama);
    $$('#kmMasa button').forEach(b =>
      b.classList.toggle('btn--primary', (b.dataset.masa ?? '') === masa));
  };

  ['kmNama', 'kmEmail'].forEach(id => el(id).oninput = gambarUlang);
  el('kmKode').onchange = () => {
    masa = el('kmKode').selectedOptions[0]?.dataset.bulan ?? '';
    gambarUlang();
  };
  $('#kmMasa').onclick = e => {
    const b = e.target.closest('[data-masa]');
    if (!b) return;
    masa = b.dataset.masa;
    gambarUlang();
  };

  el('kmSalin').onclick = async () => {
    try { await navigator.clipboard.writeText(kotak.textContent); toast('Teks disalin.'); }
    catch { toast('Gagal menyalin. Sorot teksnya lalu salin manual.', 'bad'); }
  };

  el('kmDraf').onclick = () => {
    const v = nilai();
    if (!v.email.includes('@')) return toast('Isi dulu email pembelinya.', 'warn');
    location.href = `mailto:${encodeURIComponent(v.email)}`
      + `?subject=${encodeURIComponent('Kode akses SankaLingo GO')}`
      + `&body=${encodeURIComponent(kotak.textContent)}`;
  };

  el('kmWa').onclick = () => {
    const no = prompt('Nomor WhatsApp pembeli (format 62…)');
    if (!no) return;
    window.open(`https://wa.me/${no.replace(/[^0-9]/g, '')}`
      + `?text=${encodeURIComponent(kotak.textContent)}`, '_blank', 'noopener');
  };

  /* Kirim sungguhan. Server yang menandai kodenya terkirim, dan hanya
     sesudah Resend menerima — jadi kegagalan meninggalkan kode tetap
     berstatus siap, bukan hilang dari daftar tanpa pernah sampai. */
  el('kmKirim')?.addEventListener('click', async ev => {
    const v = nilai();
    if (!v.email.includes('@')) return toast('Isi dulu email pembelinya.', 'warn');
    const tbl = ev.currentTarget;
    tbl.disabled = true; tbl.textContent = 'Mengirim…';
    try {
      await fungsi('panel-admin', {
        tindakan: 'kirim_email', kode: v.kode, label: v.email,
        nama: v.nama, bulan: v.bulan,
      });
      toast(`${v.kode} terkirim ke ${v.email}.`, 'ok', 4500);
      await muat();
    } catch (e) {
      toast(e.message, 'bad', 8000);
      tbl.disabled = false; tbl.textContent = 'Kirim sekarang';
    }
  });

  gambarUlang();
}

function pasang() {
  const jalankan = async (badan, pesan) => {
    try { await fungsi('panel-admin', badan); toast(pesan); await muat(); }
    catch (e) { toast(e.message, 'bad', 4200); }
  };

  pasangKirim();

  $('#adminIsi').onclick = async e => {
    const t = e.target.closest('button');
    if (!t) return;

    if (t.dataset.salin) {
      try {
        await navigator.clipboard.writeText(t.dataset.salin);
        toast('Kode disalin: ' + t.dataset.salin);
      } catch { toast('Gagal menyalin. Salin manual dari tabel.', 'bad'); }
      return;
    }
    if (t.dataset.kirim)
      return layarKirim(t.dataset.kirim, Number(t.dataset.bulan) || null);

    if (t.dataset.pesan) {
      const nama = prompt('Dikirim ke siapa? (nama atau nomor WA)');
      if (nama === null) return;
      return jalankan({ tindakan: 'pesan', kode: t.dataset.pesan, label: nama },
        'Ditandai sudah dikirim.');
    }
    if (t.dataset.batal)
      return jalankan({ tindakan: 'batal_pesan', kode: t.dataset.batal }, 'Tanda dibatalkan.');

    if (t.dataset.saran)
      return jalankan({ tindakan: 'saran_status', saranId: Number(t.dataset.saran), status: t.dataset.status },
        'Status saran diperbarui.');

    if (t.dataset.selamanya)
      return jalankan({ tindakan: 'akses', userId: t.dataset.selamanya, bulan: null },
        'Akses diberikan selamanya.');

    if (t.dataset.hapus) {
      const ya = await confirmDialog('Hapus pengguna ini?',
        `<p>${esc(t.dataset.email || 'Akun ini')} akan dihapus beserta kemajuan belajarnya. ` +
        'Kode yang ia pakai dikembalikan ke stok.</p>' +
        '<p class="small muted">Tidak bisa dibatalkan.</p>',
        'Ya, hapus');
      if (!ya) return;
      return jalankan({ tindakan: 'hapus', userId: t.dataset.hapus }, 'Pengguna dihapus.');
    }
  };

  $('#admBuat').onclick = async () => {
    const jumlah = Number($('#admJml').value) || 1;
    const b = $('#admBulan').value;
    try {
      const r = await fungsi('panel-admin', {
        tindakan: 'buat', jumlah, bulan: b === '' ? null : Number(b),
        label: $('#admCatat').value.trim() || null
      });
      const daftar = r.dibuat || [];
      toast(`${daftar.length} kode dicetak.`);
      /* Ditampilkan sekaligus supaya bisa disalin dalam satu blok —
         itu bentuk yang paling sering dibutuhkan saat mengirim batch. */
      $('#admHasil').innerHTML = `
        <div class="note note--ok" style="margin-top:var(--s-4)">
          <div class="row row--between">
            <b>${daftar.length} kode baru</b>
            <button class="btn btn--soft btn--sm" id="admSalinSemua">Salin semua</button>
          </div>
          <pre class="formula" style="margin-top:.6rem">${esc(daftar.join('\n'))}</pre>
        </div>`;
      $('#admSalinSemua').onclick = async () => {
        try { await navigator.clipboard.writeText(daftar.join('\n')); toast('Semua kode disalin.'); }
        catch { toast('Gagal menyalin.', 'bad'); }
      };
      await muat();
    } catch (e) { toast(e.message, 'bad', 4200); }
  };

  const saring = (input, tbody, isi) => {
    const el = $(input);
    if (!el) return;
    el.oninput = () => { $(tbody).innerHTML = isi(el.value.trim().toLowerCase()); };
  };
  saring('#admCariKode', '#admTKode', q => data.kode.daftar
    .filter(k => !q || (k.kode + ' ' + (k.dipesan_untuk || '')).toLowerCase().includes(q))
    .map(barisKode).join(''));
  /* Pencarian email dan penyaring keaktifan menulis ke tbody yang sama,
     jadi keduanya harus lewat satu pintu. Dipisah, yang satu akan
     menghapus hasil yang lain tanpa jejak. */
  let hidupTerpilih = '';
  const gambarPengguna = () => {
    const q = ($('#admCariUser')?.value || '').trim().toLowerCase();
    $('#admTUser').innerHTML = data.pengguna
      .filter(p => !q || (p.email || '').toLowerCase().includes(q))
      .filter(p => !hidupTerpilih || hidup(p).kunci === hidupTerpilih)
      .map(barisPengguna).join('') ||
      '<tr><td colspan="7" class="muted small">Tidak ada yang cocok.</td></tr>';
    $$('#admSaringHidup button').forEach(b =>
      b.classList.toggle('btn--primary', b.dataset.hidupSaring === hidupTerpilih));
  };
  if ($('#admCariUser')) $('#admCariUser').oninput = gambarPengguna;
  if ($('#admSaringHidup')) $('#admSaringHidup').onclick = e => {
    const b = e.target.closest('[data-hidup-saring]');
    if (!b) return;
    hidupTerpilih = b.dataset.hidupSaring;
    gambarPengguna();
  };
  gambarPengguna();
  saring('#admCariSaran', '#admTSaran', q => (saran?.daftar ?? [])
    .filter(s => !q || (s.isi + ' ' + (s.email || '') + ' ' + (s.halaman || '')).toLowerCase().includes(q))
    .map(barisSaran).join(''));
}

export async function renderAdmin() {
  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">Admin</span>
      <h1>Kontrol pengguna</h1>
      <p>Masuk sebagai ${esc(masukSebagai() || '—')}.</p>
    </div>
  </div>
  <div id="adminIsi"><div class="empty"><p>Memuat…</p></div></div>`;

  const p = await profil({ segarkan: true });
  if (!p?.admin) {
    $('#adminIsi').innerHTML = `<div class="note note--bad">
      <b>Halaman ini khusus admin.</b>
      <p class="small" style="margin-top:.4rem">Kalau memang kamu pemiliknya, jalankan sekali di
      Supabase → SQL Editor:</p>
      <pre class="formula" style="margin-top:.5rem">update public.profil set admin = true
where email = '${esc(masukSebagai() || 'email-kamu@contoh.com')}';</pre></div>`;
    return;
  }

  try { await muat(); }
  catch (e) {
    $('#adminIsi').innerHTML =
      `<div class="note note--bad"><b>Gagal memuat.</b><p class="small">${esc(e.message)}</p>
       <p class="small muted">Sudah menjalankan supabase/lisensi.sql dan memasang Edge Function
       panel-admin?</p></div>`;
  }
}
