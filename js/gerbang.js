/* ── Gerbang masuk & daftar ───────────────────────────────────────

   Aplikasi tidak terbuka sebelum pemakainya masuk DAN punya akses.
   Layar ini yang berdiri di depannya.

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

   3. MASUK DAN DAFTAR BERTEMU DI UJUNG YANG SAMA. Supabase membuat
      akun begitu kode OTP dikirim, jadi tidak ada "pendaftaran"
      terpisah secara teknis. Bedanya cuma satu: pendaftar wajib
      menempel kode akses, sedangkan yang sudah pernah menebus
      langsung masuk. Dua tab hanya membedakan kalimat yang dibaca
      orang, bukan jalur yang dijalani mesin.                         */

import { esc, toast } from './ui.js';
import { awanSiap, kirimKode, verifikasiKode, sesi, keluar } from './awan.js';
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

/* ── Layar ────────────────────────────────────────────────────── */

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

function gambar(mode, { pesanAwal = '' } = {}) {
  const lama = document.getElementById('gerbang');
  if (lama) lama.remove();

  const daftar = mode === 'daftar';
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

      <div class="gerbang__tab" role="tablist">
        <button class="gerbang__tabbtn${daftar ? '' : ' is-on'}" data-mode="masuk" role="tab">Masuk</button>
        <button class="gerbang__tabbtn${daftar ? ' is-on' : ''}" data-mode="daftar" role="tab">Daftar</button>
      </div>

      <p class="small soft gerbang__ajak">${daftar
        ? 'Daftar butuh <b>kode akses</b> yang kamu terima setelah membeli. Emailmu dipakai supaya kemajuan belajar bisa dibuka lagi di ponsel lain.'
        : 'Sudah pernah menebus kode? Masukkan email yang sama, kodenya dikirim ke sana.'}</p>

      <label class="xs muted" for="grbEmail">Email</label>
      <input id="grbEmail" class="input" type="email" inputmode="email" autocomplete="email"
             placeholder="nama@email.com" style="width:100%">

      <div id="grbLangkahKode" hidden>
        <label class="xs muted" for="grbOtp" style="display:block;margin-top:var(--s-3)">
          Kode 6 angka dari email</label>
        <input id="grbOtp" class="input" inputmode="numeric" autocomplete="one-time-code"
               maxlength="6" placeholder="123456" style="width:100%;letter-spacing:.3em">
      </div>

      <div id="grbLangkahAkses" hidden>
        <label class="xs muted" for="grbKode" style="display:block;margin-top:var(--s-3)">
          Kode akses</label>
        <input id="grbKode" class="input" placeholder="SL-XXXX-XXXX" autocomplete="off"
               spellcheck="false" style="width:100%;text-transform:uppercase">
      </div>

      <p id="grbPesan" class="small gerbang__pesan">${esc(pesanAwal)}</p>

      <button class="btn btn--primary btn--blok" id="grbLanjut">
        ${daftar ? 'Kirim kode ke email' : 'Kirim kode ke email'}</button>

      ${tautanBantuan()}

      <div class="gerbang__kaki">
        <button class="btn btn--ghost btn--sm" data-act="buka-saran">💬 Ada kendala? Kirim pesan</button>
      </div>
    </div>`;
  document.body.append(wadah);
  return wadah;
}

/** Tampilkan gerbang dan tahan sampai aksesnya beres. */
function tunggu(mode, pesanAwal) {
  return new Promise(selesai => {
    let sekarang = mode;
    let langkah = 'email';          // email → otp → akses
    let box = gambar(sekarang, { pesanAwal });

    const q = sel => box.querySelector(sel);
    const pesan = (teks, jenis = '') => {
      const n = q('#grbPesan');
      n.innerHTML = teks;
      n.style.color = jenis === 'bad' ? 'var(--bad)' : jenis === 'ok' ? 'var(--ok)' : '';
    };

    const pasang = () => {
      box.querySelectorAll('.gerbang__tabbtn').forEach(b =>
        b.addEventListener('click', () => {
          if (b.dataset.mode === sekarang) return;
          sekarang = b.dataset.mode;
          langkah = 'email';
          box = gambar(sekarang);
          pasang();
        }));

      const lanjut = q('#grbLanjut');

      const keLangkah = (baru, label) => {
        langkah = baru;
        q('#grbLangkahKode').hidden = baru === 'email';
        q('#grbLangkahAkses').hidden = baru !== 'akses';
        lanjut.textContent = label;
        lanjut.disabled = false;
        (baru === 'otp' ? q('#grbOtp') : baru === 'akses' ? q('#grbKode') : q('#grbEmail')).focus();
      };

      const jalan = async () => {
        lanjut.disabled = true;
        try {
          if (langkah === 'email') {
            const email = q('#grbEmail').value.trim();
            if (!email.includes('@')) throw new Error('Tulis alamat emailmu dulu.');
            pesan('Mengirim kode…');
            await kirimKode(email);
            pesan('Kode dikirim ke <b>' + esc(email) + '</b>. Periksa juga folder spam.', 'ok');
            keLangkah('otp', 'Masuk');
            return;
          }

          if (langkah === 'otp') {
            pesan('Memeriksa kode…');
            await verifikasiKode(q('#grbEmail').value.trim(), q('#grbOtp').value.trim());
            lupakanProfil();
            const p = await profil({ segarkan: true });

            if (p && (aksesAktif(p) || adalahAdmin(p))) {
              tulisCap(p);
              box.remove();
              selesai(p);
              return;
            }
            /* Masuknya berhasil, aksesnya yang belum ada. Ini juga
               jalur yang dilewati pendaftar baru. */
            pesan(sekarang === 'daftar'
              ? 'Email terverifikasi. Sekarang tempel kode akses yang kamu terima saat membeli.'
              : 'Akun ini belum punya akses. Tempel kode aksesmu untuk mengaktifkannya.', 'ok');
            keLangkah('akses', 'Aktifkan akses');
            return;
          }

          /* langkah === 'akses' */
          const kode = q('#grbKode').value.trim();
          if (!kode) throw new Error('Kode aksesnya belum diisi.');
          pesan('Memeriksa kode akses…');
          const p = await tebus(kode);
          if (!(aksesAktif(p) || adalahAdmin(p)))
            throw new Error('Kode diterima tetapi aksesnya belum aktif. Hubungi penjual.');
          tulisCap(p);
          toast('Akses aktif. Selamat belajar!', 'ok');
          box.remove();
          selesai(p);
        } catch (e) {
          /* Pesan server dipakai apa adanya: ia sudah membedakan "kode
             salah" dari "kode sudah dipakai" dari "sesi kedaluwarsa",
             dan menggantinya dengan satu kalimat umum justru
             menghilangkan petunjuk yang dibutuhkan orangnya. */
          pesan(esc(e.message), 'bad');
          lanjut.disabled = false;
        }
      };

      lanjut.addEventListener('click', jalan);
      box.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); jalan(); } });
      q('#grbEmail').focus();
    };

    pasang();
  });
}

/* ── Pintu utama ──────────────────────────────────────────────── */

/** Tahan boot sampai pemakainya berhak masuk. */
export async function pastikanAkses() {
  const hasil = await periksaAkses();
  if (hasil.boleh) return hasil;

  /* Sesi basi (akun dihapus, atau aksesnya dicabut) dibersihkan dulu,
     supaya layarnya tidak menampilkan "sudah masuk" padahal tidak. */
  if (hasil.alasan === 'belum-akses' && !hasil.profil) { keluar(); lupakanProfil(); }

  const pesanAwal = hasil.alasan === 'luring'
    ? 'Perlu sekali tersambung internet untuk memeriksa aksesmu.'
    : '';
  return tunggu(hasil.alasan === 'belum-akses' ? 'masuk' : 'masuk', pesanAwal);
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
