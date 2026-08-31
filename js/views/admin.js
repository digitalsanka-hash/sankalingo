/* ── Panel admin ──────────────────────────────────────────────────

   Mengontrol pembeli: mencetak kode akses, menandai kode yang sudah
   diberikan, mengubah masa aktif, dan menghapus akun.

   Halaman ini TIDAK memegang kuasa apa pun. Ia cuma bentuk tampak dari
   Edge Function panel-admin, dan fungsi itulah yang memeriksa apakah
   pemanggilnya benar-benar admin — dengan service role, di sisi server.
   Kalau seseorang memaksa membuka #/admin tanpa hak, yang ia dapat
   hanyalah rentetan 403; tidak ada satu pun data yang ikut terkirim. */

import { $, html, esc, toast, confirmDialog, tanggal } from '../ui.js';
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
        : `<button class="btn btn--soft btn--sm" data-salin="${esc(k.kode)}">Salin</button>
           <button class="btn btn--ghost btn--sm" data-pesan="${esc(k.kode)}">Tandai terkirim</button>`}
    </td>
  </tr>`;
}

function barisPengguna(p) {
  const aktif = p.kode && (!p.akses_sampai || new Date(p.akses_sampai) > new Date());
  return `<tr>
    <td>${esc(p.email || '(tanpa email)')}${p.admin ? ' <span class="badge badge--ok">admin</span>' : ''}</td>
    <td>${aktif
      ? '<span class="badge badge--ok">aktif</span>'
      : '<span class="badge badge--warn">belum bayar</span>'}</td>
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
    <div class="table-wrap" style="margin-top:var(--s-4)">
      <table class="tbl"><thead><tr>
        <th>Email</th><th>Akses</th><th>Kode</th><th>Sampai</th><th>Daftar</th><th></th>
      </tr></thead><tbody id="admTUser">${p.map(barisPengguna).join('')}</tbody></table>
    </div>
  </div>`;

  pasang();
}

/* Satu penangan untuk seluruh tombol tabel. Tabelnya digambar ulang
   tiap kali data berubah, jadi memasang pendengar di tiap tombol akan
   selalu tertinggal satu langkah. */
function pasang() {
  const jalankan = async (badan, pesan) => {
    try { await fungsi('panel-admin', badan); toast(pesan); await muat(); }
    catch (e) { toast(e.message, 'bad', 4200); }
  };

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
  saring('#admCariUser', '#admTUser', q => data.pengguna
    .filter(p => !q || (p.email || '').toLowerCase().includes(q))
    .map(barisPengguna).join(''));
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
