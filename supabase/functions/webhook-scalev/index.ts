// Supabase Edge Function: webhook-scalev
//
// Pembeli membayar di Scalev → fungsi ini menerima kabarnya, mengambil
// satu kode akses dari stok, dan mengirimkannya lewat email. Tidak ada
// yang perlu kamu buka atau tekan.
//
// Empat keputusan yang menentukan benar-tidaknya alur ini:
//
//   1. TANDA TANGAN DIPERIKSA ATAS RAW BODY. Scalev menandatangani byte
//      mentah permintaan (HMAC-SHA256, base64, header X-Scalev-Hmac-Sha256).
//      Kalau JSON-nya di-parse lalu diserialisasi ulang untuk dihitung,
//      satu spasi yang bergeser sudah cukup membuat tanda tangan yang
//      sah dianggap palsu. Karena itu body dibaca sebagai teks lebih
//      dulu, dan baru di-parse SESUDAH tanda tangannya lolos.
//
//   2. TANPA SECRET, FUNGSI MENOLAK BEKERJA. Endpoint ini terbuka ke
//      internet (Scalev tidak bisa membawa JWT). Kalau secret belum
//      dipasang, satu-satunya jawaban yang benar adalah menolak — bukan
//      "ya sudah, proses saja" yang berarti siapa pun bisa mengarang
//      pesanan dan memanen kode gratismu.
//
//   3. IDEMPOTEN LEWAT UNIQUE, BUKAN LEWAT PEMERIKSAAN. Scalev mengirim
//      ulang webhook yang gagal atau lambat dijawab. Kalau penjagaannya
//      berupa "select dulu, kalau belum ada baru insert", dua kiriman
//      yang tiba bersamaan lolos berdua. Yang menahan di sini adalah
//      UNIQUE pada order_id: percobaan kedua ditolak basis data.
//
//   4. GAGAL KIRIM TETAP DICATAT. Kode yang sudah dipesan atas nama
//      pembeli tetapi emailnya tidak berangkat adalah keadaan yang
//      harus terlihat, bukan hilang ke dalam log. Barisnya ditulis
//      dengan status gagal_kirim supaya kamu bisa mengirim ulang manual
//      dari panel admin.
//
// Pasang:  supabase functions deploy webhook-scalev --no-verify-jwt
//
// Rahasia yang harus dipasang lebih dulu:
//   supabase secrets set SCALEV_WEBHOOK_SIGNING_SECRET=...
//   supabase secrets set RESEND_API_KEY=...
//   supabase secrets set RESEND_FROM="SankaLingo GO <kode@domainmu.com>"
//   supabase secrets set APP_URL=https://sankalingo.vercel.app
// Opsional:
//   supabase secrets set SCALEV_PRODUK="SankaLingo"   (saring nama produk)
//   supabase secrets set ADMIN_EMAIL=kamu@email.com   (peringatan stok habis)

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const jawab = (b: unknown, s = 200) =>
  new Response(JSON.stringify(b), { status: s, headers: { 'Content-Type': 'application/json' } });

/** Perbandingan yang lamanya tidak bergantung pada isi — pembanding
 *  biasa berhenti di byte pertama yang berbeda, dan selisih waktunya
 *  cukup untuk menebak tanda tangan satu byte demi satu byte. */
function samaAman(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  let beda = 0;
  for (let i = 0; i < a.length; i++) beda |= a[i] ^ b[i];
  return beda === 0;
}

async function tandaTanganSah(rahasia: string, mentah: string, kiriman: string): Promise<boolean> {
  try {
    const kunci = await crypto.subtle.importKey(
      'raw', new TextEncoder().encode(rahasia),
      { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'],
    );
    const dihitung = new Uint8Array(
      await crypto.subtle.sign('HMAC', kunci, new TextEncoder().encode(mentah)));
    const diterima = Uint8Array.from(atob(kiriman.trim()), (c) => c.charCodeAt(0));
    return samaAman(dihitung, diterima);
  } catch {
    return false;   // base64 rusak = tanda tangan tidak sah
  }
}

/** Isi email. Sengaja sama isinya dengan pesan manual di panel admin,
 *  supaya pembeli yang dilayani otomatis dan yang dilayani tangan
 *  membaca petunjuk yang persis sama. */
function suratKode(kode: string, nama: string, alamatApp: string, bulan: number | null) {
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

async function kirimEmail(ke: string, subjek: string, isi: { teks: string; html: string }) {
  const kunci = Deno.env.get('RESEND_API_KEY');
  const dari = Deno.env.get('RESEND_FROM');
  if (!kunci || !dari) throw new Error('RESEND_API_KEY / RESEND_FROM belum dipasang.');

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${kunci}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: dari, to: [ke], subject: subjek, text: isi.teks, html: isi.html }),
  });
  if (!r.ok) throw new Error(`Resend menolak (${r.status}): ${(await r.text()).slice(0, 300)}`);
  return r.json();
}

serve(async (req) => {
  if (req.method !== 'POST') return jawab({ error: 'Hanya POST.' }, 405);

  const RAHASIA = Deno.env.get('SCALEV_WEBHOOK_SIGNING_SECRET');
  if (!RAHASIA) return jawab({ error: 'Webhook belum dikonfigurasi.' }, 503);

  const mentah = await req.text();
  const tandaTangan = req.headers.get('X-Scalev-Hmac-Sha256') || '';
  if (!tandaTangan || !(await tandaTanganSah(RAHASIA, mentah, tandaTangan)))
    return jawab({ error: 'Tanda tangan tidak sah.' }, 401);

  let badan: any = null;
  try { badan = JSON.parse(mentah); } catch { return jawab({ error: 'Muatan bukan JSON.' }, 400); }

  const peristiwa = String(badan?.event ?? badan?.type ?? '');
  const d = badan?.data ?? badan ?? {};
  const statusBayar = String(d?.payment_status ?? '').toLowerCase();

  /* Yang diproses hanya pembayaran yang benar-benar masuk. Event lain
     dijawab 200 supaya Scalev berhenti mengirim ulang — bukan error,
     memang bukan urusan kita. */
  const lunas = peristiwa === 'payment.received' || statusBayar === 'paid' || statusBayar === 'settled';
  if (!lunas) return jawab({ ok: true, dilewati: peristiwa || statusBayar || 'tanpa-status' });

  /* Saringan produk untuk toko yang menjual lebih dari satu barang.
     Kosong = semua pesanan dianggap SankaLingo. */
  const saring = (Deno.env.get('SCALEV_PRODUK') || '').trim().toLowerCase();
  if (saring) {
    const baris = [
      ...(Array.isArray(d?.orderlines) ? d.orderlines.map((o: any) => o?.product_name ?? '') : []),
      ...Object.keys(d?.final_variants ?? {}),
    ].join(' ').toLowerCase();
    if (!baris.includes(saring)) return jawab({ ok: true, dilewati: 'produk lain' });
  }

  const orderId = String(d?.order_id ?? d?.id ?? '').trim();
  const tujuan = d?.destination_address ?? {};
  const email = String(tujuan?.email ?? '').trim().toLowerCase();
  const nama = String(tujuan?.name ?? '').trim();
  const telepon = String(tujuan?.phone ?? '').trim();

  if (!orderId) return jawab({ error: 'Pesanan tanpa order_id.' }, 400);
  if (!email.includes('@')) return jawab({ error: 'Pesanan tanpa email pembeli.' }, 400);

  const db = createClient(
    Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    { auth: { persistSession: false } },
  );

  /* Baris pesanan ditulis LEBIH DULU, sebelum kode diambil. Kalau
     kiriman kedua datang, insert-nya ditolak oleh UNIQUE order_id dan
     kita berhenti di sini — sebelum sempat mengambil kode kedua. */
  const { error: galatCatat } = await db.from('pesanan_scalev').insert({
    order_id: orderId, email, nama, telepon, status: 'terkirim', muatan: badan,
  });

  /* Kode yang sudah terlanjur dipesan untuk pesanan ini, kalau ada. */
  let kodeLama: string | null = null;

  if (galatCatat) {
    if (!/duplicate|unique/i.test(galatCatat.message))
      return jawab({ error: galatCatat.message }, 500);

    /* Kiriman kedua. Yang sudah selesai memang harus berhenti di sini,
       tetapi yang GAGAL KIRIM justru sedang menunggu percobaan ulang —
       kalau ia ikut dihentikan, penjagaan anti-kembar berubah jadi
       penjamin bahwa emailnya tidak akan pernah berangkat. */
    const { data: lama } = await db.from('pesanan_scalev')
      .select('status, kode').eq('order_id', orderId).single();

    if (lama?.status === 'terkirim')
      return jawab({ ok: true, dilewati: 'pesanan ini sudah diproses' });

    kodeLama = lama?.kode ?? null;
  }

  /* Pesanan yang gagal kirim memakai kembali kode yang sudah dipesan
     atas namanya — mengambil kode baru berarti membakar dua kode untuk
     satu pembeli. Yang stok_habis mencoba mengambil lagi, sebab stok
     bisa saja sudah dicetak sesudah percobaan pertama. */
  const { data: kodeBaru } = kodeLama
    ? { data: kodeLama }
    : await db.rpc('ambil_kode_siap', { p_untuk: email });
  const kode = kodeBaru;

  if (!kode) {
    await db.from('pesanan_scalev').update({
      status: 'stok_habis',
      catatan: 'Tidak ada kode siap saat pesanan masuk. Cetak kode lalu kirim manual.',
    }).eq('order_id', orderId);

    /* Stok habis adalah keadaan yang harus segera kamu ketahui: uang
       sudah diterima tetapi barangnya belum berangkat. */
    const adminEmail = Deno.env.get('ADMIN_EMAIL');
    if (adminEmail) {
      try {
        await kirimEmail(adminEmail, '⚠ Stok kode SankaLingo habis', {
          teks: `Pesanan ${orderId} dari ${email} masuk tetapi tidak ada kode siap.\n`
              + `Cetak kode baru di panel admin lalu kirim manual.`,
          html: `<p>Pesanan <b>${orderId}</b> dari ${email} masuk tetapi tidak ada kode siap.</p>
                 <p>Cetak kode baru di panel admin lalu kirim manual.</p>`,
        });
      } catch { /* peringatan gagal tidak boleh menutupi masalah aslinya */ }
    }
    /* 200, bukan 500: mengirim ulang webhook tidak akan menerbitkan
       stok baru, dan Scalev akan mencoba berkali-kali tanpa guna. */
    return jawab({ ok: true, status: 'stok_habis' });
  }

  const { data: barisKode } = await db
    .from('kode_lisensi').select('bulan_aktif').eq('kode', kode).single();

  const alamatApp = Deno.env.get('APP_URL') || 'https://sankalingo.vercel.app';
  try {
    await kirimEmail(email, 'Kode akses SankaLingo GO',
      suratKode(kode as string, nama, alamatApp, barisKode?.bulan_aktif ?? null));
  } catch (e) {
    await db.from('pesanan_scalev').update({
      status: 'gagal_kirim', kode,
      catatan: String((e as Error)?.message ?? e).slice(0, 500),
    }).eq('order_id', orderId);
    /* 500 supaya Scalev mengirim ulang: kegagalan kirim email biasanya
       sementara. Kiriman ulang berhenti di penjagaan UNIQUE, jadi
       tidak akan ada kode kedua yang terbakar. */
    return jawab({ error: 'Kode diambil tetapi email gagal dikirim.' }, 500);
  }

  await db.from('pesanan_scalev')
    .update({ kode, status: 'terkirim', catatan: null }).eq('order_id', orderId);
  return jawab({ ok: true, kode });
});
