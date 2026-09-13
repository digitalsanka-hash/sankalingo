// Pengiriman email — satu-satunya tempat surat ke pembeli ditulis.
//
// Dua jalur mengirim kode yang sama: webhook Scalev (otomatis begitu
// pembayaran masuk) dan tombol Kirim di panel admin (manual, untuk
// pesanan yang masuk lewat jalan lain atau perlu dikirim ulang).
// Sebelum berkas ini ada, isi suratnya ditulis dua kali — dan dua
// salinan yang harus diubah berbarengan selalu berakhir berbeda.
//
// Rahasia yang dibaca:
//   RESEND_API_KEY  wajib. Diawali "re_".
//   RESEND_FROM     wajib. Contoh: SankaLingo GO <kode@sankalingogo.com>
//                   Domainnya harus berstatus Verified di Resend;
//                   kalau belum, Resend menolak dengan 403.

const ALAMAT_APP = 'https://www.sankalingogo.com';

/** Isi surat kode akses, versi teks dan HTML sekaligus. */
export function suratKode(
  kode: string,
  nama: string,
  bulan: number | null,
  alamatApp: string = ALAMAT_APP,
) {
  const sapaan = nama ? `Halo ${nama}!` : 'Halo!';
  const masa = bulan ? `berlaku ${bulan} bulan` : 'berlaku selamanya';

  const teks = `${sapaan}

Terima kasih sudah membeli SankaLingo GO. Ini kode aksesmu:

${kode}

Cara memakainya:
1. Buka ${alamatApp}
2. Pilih tab "Daftar"
3. Isi emailmu, buat kata sandi, lalu tempel kode di atas
4. Selesai. Masuk berikutnya cukup email + kata sandi

Kode ini sekali pakai dan ${masa}.
Ada kendala? Balas email ini.`;

  const html = `<div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;line-height:1.6;color:#1a1a2e">
    <p>${sapaan}</p>
    <p>Terima kasih sudah membeli <b>SankaLingo GO</b>. Ini kode aksesmu:</p>
    <p style="font-size:22px;font-weight:700;letter-spacing:2px;background:#f4f4fb;
              border:1px solid #ddd;border-radius:10px;padding:14px 18px;text-align:center">${kode}</p>
    <p><b>Cara memakainya:</b></p>
    <ol>
      <li>Buka <a href="${alamatApp}">${alamatApp}</a></li>
      <li>Pilih tab <b>Daftar</b></li>
      <li>Isi emailmu, buat kata sandi, lalu tempel kode di atas</li>
      <li>Selesai. Masuk berikutnya cukup email + kata sandi</li>
    </ol>
    <p style="color:#555">Kode ini sekali pakai dan ${masa}. Ada kendala? Balas email ini.</p>
  </div>`;

  return { teks, html };
}

/** Resend sudah siap dipakai? Dipakai untuk memberi tahu panel admin
 *  supaya tombolnya tidak menjanjikan sesuatu yang pasti gagal. */
export const emailSiap = () =>
  !!(Deno.env.get('RESEND_API_KEY') && Deno.env.get('RESEND_FROM'));

/** Kirim satu email lewat Resend.
 *
 *  Galatnya sengaja dibawa apa adanya, bukan diringkas jadi "gagal
 *  mengirim": tiga kegagalan yang paling sering terjadi — kunci salah
 *  (401), domain belum diverifikasi (403), dan alamat pengirim tidak
 *  cocok dengan domain (422) — tidak bisa dibedakan tanpa pesan
 *  aslinya, dan menebaknya memakan waktu berjam-jam. */
export async function kirimEmail(
  ke: string,
  subjek: string,
  isi: { teks: string; html: string },
) {
  const kunci = Deno.env.get('RESEND_API_KEY');
  const dari = Deno.env.get('RESEND_FROM');
  if (!kunci || !dari) {
    throw new Error(
      'RESEND_API_KEY / RESEND_FROM belum dipasang. Jalankan: ' +
      'npx supabase secrets set RESEND_API_KEY=re_xxx RESEND_FROM="SankaLingo GO <kode@sankalingogo.com>"',
    );
  }

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${kunci}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: dari, to: [ke], subject: subjek, text: isi.teks, html: isi.html }),
  });

  const badan = await r.text();
  if (!r.ok) {
    const petunjuk =
      r.status === 401 ? ' — RESEND_API_KEY salah atau sudah dicabut.'
      : r.status === 403 ? ' — domain di RESEND_FROM belum Verified di Resend.'
      : r.status === 422 ? ' — alamat pengirim tidak cocok dengan domain yang terverifikasi.'
      : '';
    throw new Error(`Resend menolak (${r.status})${petunjuk} ${badan.slice(0, 300)}`);
  }
  return JSON.parse(badan || '{}');
}
