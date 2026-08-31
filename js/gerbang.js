/* ── Gerbang masuk & daftar ───────────────────────────────────────

   Aplikasi tidak terbuka sebelum pemakainya masuk DAN punya akses.
   Layar ini yang berdiri di depannya.

   Alurnya sengaja tidak simetris, karena dua peristiwa ini memang
   berbeda beratnya:

     DAFTAR  sekali seumur akun: email + kata sandi + KODE AKSES.
             Ketiganya sekaligus, dikerjakan Edge Function
             daftar-lisensi supaya kode diperiksa sebelum akun dibuat
             dan emailnya langsung dianggap terkonfirmasi.
     MASUK   berkali-kali: cukup email + kata sandi. Tidak ada kode
             yang perlu dibuka di email tiap kali mau belajar.

   Yang perlu diketahui sebelum mengubah apa pun di sini:

   1. GERBANG INI SETINGKAT TAMPILAN, BUKAN KUNCI SEBENARNYA. Isi
      pelajaran ada di data/*.js yang diunduh peramban, jadi orang yang
      paham peralatan pengembang tetap bisa mengambilnya. Yang ditahan
      gerbang adalah pemakai biasa — dan itu memang mayoritas. Jangan
      menulis di sini janji keamanan yang tidak dipegangnya.

   2. LURING TIDAK BOLEH MENGUNCI PEMBELI. Aplikasi ini PWA yang
      dipakai di kereta dan di kelas tanpa sinyal. Karena itu hasil
      pemeriksaan terakhir dicatat di localStorage, dan ketika jaringan
      mati catatan itulah yang dipercaya. Kalau tidak, orang yang sudah
      membayar akan terkunci justru saat paling ingin belajar.

   3. KATA SANDI TIDAK PERNAH DISIMPAN. Ia hanya lewat: dari kotak isian
      langsung ke Supabase lewat HTTPS. Yang tersimpan di perangkat
      cuma token sesi, sama seperti sebelumnya.                        */

import { esc, toast } from './ui.js';
import {
  awanSiap, sesi, keluar,
  masukSandi, daftarDenganKode, kirimResetSandi, gantiSandi,
} from './awan.js';
import { profil, aksesAktif, adalahAdmin, tebus, lupakanProfil } from './lisensi.js';
import { tautanBeli, tautanWa } from './jual-config.js';

const KUNCI_CAP = 'fasih.akses.cap';

/* ── Catatan akses untuk keadaan luring ───────────────────────── */

const bacaCap = () => {
  try { return JSON.parse(localStorage.getItem(KUNCI_CAP) || 'null'); }
  catch { return null; }
};

const tulisCap = p => {
  try {
    localStorage.setItem(KUNCI_CAP, JSON.stringify({
      email: p?.email || null,
      sampai: p?.akses_sampai || null,   // null = selamanya
      admin: !!p?.admin,
      dicek: Date.now(),
    }));
  } catch { /* penyimpanan penuh bukan alasan menolak masuk */ }
};

export const hapusCap = () => { try { localStorage.removeItem(KUNCI_CAP); } catch {} };

/* Berapa lama catatan akses boleh dipercaya tanpa diperiksa ulang ke
   server. Dua minggu: cukup panjang untuk perjalanan, liburan, dan
   sekolah tanpa sinyal, tetapi tidak cukup panjang untuk membuat
   catatan yang ditulis tangan di localStorage berlaku selamanya. */
const UMUR_CAP = 14 * 24 * 60 * 60 * 1000;

/** Cap masih boleh dipercaya? Dua syarat, dan keduanya harus lulus:
 *  masa aktif belum lewat (langganan yang habis tidak jadi abadi hanya
 *  karena ponselnya mode pesawat), dan pemeriksaan terakhirnya belum
 *  terlalu tua. */
function capMasihSah() {
  const c = bacaCap();
  if (!c) return false;
  if (!c.dicek || Date.now() - c.dicek > UMUR_CAP) return false;
  if (c.admin) return true;
  return !c.sampai || new Date(c.sampai).getTime() > Date.now();
}

/* ── Pemeriksaan ──────────────────────────────────────────────── */

/** Boleh masuk sekarang? Tidak menggambar apa pun. */
async function periksaAkses() {
  /* Belum dikonfigurasi = ini salinan pengembang, bukan pasang jualan.
     Mengunci di sini hanya akan mengunci pemiliknya sendiri. */
  if (!awanSiap()) return { boleh: true, alasan: 'awan-mati' };

  const s = sesi();
  if (!s?.user?.id) return { boleh: false, alasan: 'belum-masuk' };

  /* Ada sesi tapi jaringan mati: percayai catatan terakhir. */
  if (!navigator.onLine) return { boleh: capMasihSah(), alasan: 'luring' };

  const p = await profil({ segarkan: true });
  if (p && (aksesAktif(p) || adalahAdmin(p))) { tulisCap(p); return { boleh: true, profil: p }; }

  /* profil() menelan galat jaringannya sendiri dan mengembalikan null.
     Null karena itu ambigu: bisa "belum menebus", bisa "server tak
     terjangkau". Kalau catatan lama masih sah, jangan tendang orang
     yang sudah bayar hanya karena satu permintaan gagal. */
  if (!p && capMasihSah()) return { boleh: true, alasan: 'cap-lama' };

  hapusCap();
  return { boleh: false, alasan: 'belum-akses', profil: p };
}

/* ── Potongan layar ───────────────────────────────────────────── */

const tautanBantuan = () => {
  const beli = tautanBeli(), wa = tautanWa();
  const tombol = [
    beli ? `<a class="btn btn--primary" href="${esc(beli)}" target="_blank" rel="noopener">Beli kode akses</a>` : '',
    wa ? `<a class="btn btn--ghost" href="${esc(wa)}" target="_blank" rel="noopener">Tanya lewat WhatsApp</a>` : '',
  ].filter(Boolean).join(' ');
  return tombol
    ? `<div class="gerbang__beli">${tombol}</div>`
    : `<p class="xs muted gerbang__beli">Kode akses diperoleh dari penjual.</p>`;
};

/* Kotak sandi selalu berpasangan dengan tombol "lihat". Mengetik sandi
   panjang di papan ketik ponsel tanpa bisa memeriksanya adalah sebab
   paling sering orang gagal masuk padahal sandinya benar. */
const kotakSandi = (id, label, petunjuk = '') => `
  <label class="xs muted" for="${id}" style="display:block;margin-top:var(--s-3)">${esc(label)}</label>
  <div class="gerbang__sandi">
    <input id="${id}" class="input" type="password" autocomplete="current-password"
           placeholder="••••••••" style="width:100%">
    <button type="button" class="gerbang__lihat" data-lihat="${id}" aria-label="Tampilkan kata sandi">👁</button>
  </div>
  ${petunjuk ? `<p class="xs muted" style="margin:.35rem 0 0">${esc(petunjuk)}</p>` : ''}`;

const ISI = {
  masuk: {
    ajak: 'Masuk dengan email dan kata sandi yang kamu buat saat mendaftar.',
    tombol: 'Masuk',
    badan: `
      <label class="xs muted" for="grbEmail">Email</label>
      <input id="grbEmail" class="input" type="email" inputmode="email" autocomplete="email"
             placeholder="nama@email.com" style="width:100%">
      ${kotakSandi('grbSandi', 'Kata sandi')}
      <button type="button" class="gerbang__tautan" data-ke="lupa">Lupa kata sandi?</button>`,
  },
  daftar: {
    ajak: 'Daftar butuh <b>kode akses</b> yang kamu terima setelah membeli. Sesudah ini, masuk cukup pakai email dan kata sandi.',
    tombol: 'Daftar & aktifkan',
    badan: `
      <label class="xs muted" for="grbEmail">Email</label>
      <input id="grbEmail" class="input" type="email" inputmode="email" autocomplete="email"
             placeholder="nama@email.com" style="width:100%">
      ${kotakSandi('grbSandi', 'Buat kata sandi', 'Minimal 8 huruf. Catat baik-baik — ini yang dipakai tiap kali masuk.')}
      <label class="xs muted" for="grbKode" style="display:block;margin-top:var(--s-3)">Kode akses</label>
      <input id="grbKode" class="input" placeholder="SL-XXXX-XXXX" autocomplete="off"
             spellcheck="false" style="width:100%;text-transform:uppercase">`,
  },
  lupa: {
    ajak: 'Masukkan emailmu. Kami kirim tautan untuk membuat kata sandi baru.',
    tombol: 'Kirim tautan pemulihan',
    badan: `
      <label class="xs muted" for="grbEmail">Email</label>
      <input id="grbEmail" class="input" type="email" inputmode="email" autocomplete="email"
             placeholder="nama@email.com" style="width:100%">
      <button type="button" class="gerbang__tautan" data-ke="masuk">← Kembali ke halaman masuk</button>`,
  },
  sandiBaru: {
    ajak: 'Tautannya sah. Sekarang buat kata sandi baru.',
    tombol: 'Simpan kata sandi baru',
    badan: kotakSandi('grbSandi', 'Kata sandi baru', 'Minimal 8 huruf.'),
  },
  akses: {
    ajak: 'Akun ini belum punya akses. Tempel kode akses untuk mengaktifkannya.',
    tombol: 'Aktifkan akses',
    badan: `
      <label class="xs muted" for="grbKode">Kode akses</label>
      <input id="grbKode" class="input" placeholder="SL-XXXX-XXXX" autocomplete="off"
             spellcheck="false" style="width:100%;text-transform:uppercase">`,
  },
};

function gambar(mode, pesanAwal = '') {
  document.getElementById('gerbang')?.remove();

  const t = ISI[mode];
  const berTab = mode === 'masuk' || mode === 'daftar';
  const wadah = document.createElement('div');
  wadah.id = 'gerbang';
  wadah.className = 'gerbang';
  wadah.innerHTML = `
    <div class="gerbang__kotak">
      <div class="gerbang__merek">
        <img src="./assets/merek/maskot-kepala.svg" alt="" width="40" height="40">
        <div>
          <strong>SankaLingo GO</strong>
          <span class="xs muted">Sembilan bahasa · sekali bayar</span>
        </div>
      </div>

      ${berTab ? `<div class="gerbang__tab" role="tablist">
        <button class="gerbang__tabbtn${mode === 'masuk' ? ' is-on' : ''}" data-ke="masuk" role="tab">Masuk</button>
        <button class="gerbang__tabbtn${mode === 'daftar' ? ' is-on' : ''}" data-ke="daftar" role="tab">Daftar</button>
      </div>` : ''}

      <p class="small soft gerbang__ajak">${t.ajak}</p>
      ${t.badan}
      <p id="grbPesan" class="small gerbang__pesan">${esc(pesanAwal)}</p>
      <button class="btn btn--primary btn--blok" id="grbLanjut">${esc(t.tombol)}</button>

      ${mode === 'daftar' || mode === 'akses' ? tautanBantuan() : ''}

      <div class="gerbang__kaki">
        <button class="btn btn--ghost btn--sm" data-act="buka-saran">💬 Ada kendala? Kirim pesan</button>
      </div>
    </div>`;
  document.body.append(wadah);
  return wadah;
}

/* ── Alur ─────────────────────────────────────────────────────── */

/** Tampilkan gerbang dan tahan sampai aksesnya beres. */
function tunggu(modeAwal, pesanAwal = '') {
  return new Promise(selesai => {
    let mode = modeAwal;
    let box;

    const pasang = (m, pesan = '') => {
      mode = m;
      box = gambar(m, pesan);

      const q = sel => box.querySelector(sel);
      const kabar = (teks, jenis = '') => {
        const n = q('#grbPesan');
        n.innerHTML = teks;
        n.style.color = jenis === 'bad' ? 'var(--bad)' : jenis === 'ok' ? 'var(--ok)' : '';
      };

      box.querySelectorAll('[data-ke]').forEach(b =>
        b.addEventListener('click', () => { if (b.dataset.ke !== mode) pasang(b.dataset.ke); }));

      box.querySelectorAll('[data-lihat]').forEach(b =>
        b.addEventListener('click', () => {
          const isian = q('#' + b.dataset.lihat);
          const tampak = isian.type === 'text';
          isian.type = tampak ? 'password' : 'text';
          b.textContent = tampak ? '👁' : '🙈';
          b.setAttribute('aria-label', tampak ? 'Tampilkan kata sandi' : 'Sembunyikan kata sandi');
          isian.focus();
        }));

      /* Sesudah masuk, aksesnya masih harus diperiksa: akun bisa saja
         ada tetapi kodenya belum pernah ditebus (misalnya dibuat lewat
         panel admin). */
      const lanjutkanSesudahMasuk = async () => {
        lupakanProfil();
        const p = await profil({ segarkan: true });
        if (p && (aksesAktif(p) || adalahAdmin(p))) {
          tulisCap(p);
          box.remove();
          selesai(p);
          return true;
        }
        pasang('akses');
        return false;
      };

      const lanjut = q('#grbLanjut');
      const jalan = async () => {
        lanjut.disabled = true;
        try {
          if (mode === 'masuk') {
            kabar('Memeriksa…');
            await masukSandi(q('#grbEmail').value, q('#grbSandi').value);
            await lanjutkanSesudahMasuk();
            return;
          }

          if (mode === 'daftar') {
            kabar('Memeriksa kode dan membuat akun…');
            await daftarDenganKode(q('#grbEmail').value, q('#grbSandi').value, q('#grbKode').value);
            toast('Akun aktif. Selamat belajar!', 'ok');
            await lanjutkanSesudahMasuk();
            return;
          }

          if (mode === 'lupa') {
            kabar('Mengirim…');
            const surel = await kirimResetSandi(q('#grbEmail').value);
            kabar(`Tautan dikirim ke <b>${esc(surel)}</b>. Periksa juga folder spam.`, 'ok');
            lanjut.disabled = false;
            return;
          }

          if (mode === 'sandiBaru') {
            kabar('Menyimpan…');
            await gantiSandi(q('#grbSandi').value);
            try { sessionStorage.removeItem('fasih.pulihkan'); } catch {}
            toast('Kata sandi diperbarui.', 'ok');
            await lanjutkanSesudahMasuk();
            return;
          }

          /* mode === 'akses' */
          kabar('Memeriksa kode akses…');
          const p = await tebus(q('#grbKode').value.trim());
          if (!(aksesAktif(p) || adalahAdmin(p)))
            throw new Error('Kode diterima tetapi aksesnya belum aktif. Hubungi penjual.');
          tulisCap(p);
          toast('Akses aktif. Selamat belajar!', 'ok');
          box.remove();
          selesai(p);
        } catch (e) {
          /* Pesan server dipakai apa adanya: ia sudah membedakan "email
             sudah terdaftar" dari "kode sudah terpakai" dari "sandi
             salah", dan menggantinya dengan satu kalimat umum justru
             menghilangkan petunjuk yang dibutuhkan orangnya. */
          kabar(esc(e.message), 'bad');
          lanjut.disabled = false;
        }
      };

      lanjut.addEventListener('click', jalan);
      box.addEventListener('keydown', e => {
        if (e.key === 'Enter' && !e.target.closest('[data-ke],[data-lihat]')) { e.preventDefault(); jalan(); }
      });
      (q('#grbEmail') || q('#grbSandi') || q('#grbKode'))?.focus();
    };

    pasang(mode, pesanAwal);
  });
}

/* ── Pintu utama ──────────────────────────────────────────────── */

/** Tahan boot sampai pemakainya berhak masuk. */
export async function pastikanAkses() {
  /* Orang yang baru mengklik tautan pemulihan sudah punya sesi sah,
     tetapi yang ia butuhkan bukan aplikasinya — melainkan kotak untuk
     mengetik sandi barunya. */
  let pulih = false;
  try { pulih = sessionStorage.getItem('fasih.pulihkan') === '1'; } catch {}
  if (pulih && sesi()?.access_token) return tunggu('sandiBaru');

  const hasil = await periksaAkses();
  if (hasil.boleh) return hasil;

  /* Sesi basi (akun dihapus, atau aksesnya dicabut) dibersihkan dulu,
     supaya layarnya tidak menampilkan "sudah masuk" padahal tidak. */
  if (hasil.alasan === 'belum-akses' && !hasil.profil) { keluar(); lupakanProfil(); }

  /* Sudah masuk tapi belum menebus: langsung ke kotak kode akses,
     jangan suruh ia mengetik sandinya lagi. */
  if (hasil.alasan === 'belum-akses' && hasil.profil) return tunggu('akses');

  const pesanAwal = hasil.alasan === 'luring'
    ? 'Perlu sekali tersambung internet untuk memeriksa aksesmu.'
    : '';
  return tunggu('masuk', pesanAwal);
}

/** Dipanggil tombol keluar. Membersihkan jejak akses lalu memuat ulang,
 *  supaya seluruh layar kembali ke keadaan belum masuk — lebih murah
 *  dan lebih pasti daripada membongkar tiap halaman satu per satu. */
export function keluarPenuh() {
  keluar();
  lupakanProfil();
  hapusCap();
  location.reload();
}
