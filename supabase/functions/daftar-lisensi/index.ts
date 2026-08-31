// Supabase Edge Function: daftar-lisensi
//
// Pendaftaran satu langkah: email + kata sandi + KODE AKSES ditukar
// jadi akun yang langsung bisa dipakai masuk.
//
// Kenapa harus di server, bukan signUp biasa dari peramban:
//
//   1. Kodenya diperiksa SEBELUM akun dibuat. Kalau dibalik, orang yang
//      salah ketik kode meninggalkan akun yatim yang tidak punya akses
//      dan tidak bisa didaftarkan ulang dengan email yang sama.
//   2. email_confirm langsung true. Tanpa itu Supabase menuntut
//      verifikasi email dulu, dan pembeli yang baru saja membayar
//      disuruh membuka email hanya untuk masuk — persis kerepotan yang
//      ingin dihilangkan dengan pindah dari OTP ke kata sandi.
//   3. Hanya service role yang boleh menyentuh kode_lisensi. Kalau
//      peramban diizinkan menukar kode sendiri, siapa pun bisa mencoba
//      menebak kode sebanyak yang ia mau langsung ke basis data.
//
// Fungsi ini SATU-SATUNYA di aplikasi yang tidak menuntut JWT — memang
// harus begitu, sebab pemanggilnya belum punya akun. Karena terbuka,
// urutannya dijaga: kode diperiksa dulu, akun dibuat belakangan, dan
// kalau penukaran gagal akun yang baru dibuat dihapus lagi.
//
// Pasang:  supabase functions deploy daftar-lisensi --no-verify-jwt

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
const jawab = (b: unknown, s = 200) =>
  new Response(JSON.stringify(b), { status: s, headers: { ...cors, 'Content-Type': 'application/json' } });

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  try {
    const URL_ = Deno.env.get('SUPABASE_URL')!;
    const SERVICE = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const db = createClient(URL_, SERVICE, { auth: { persistSession: false } });

    const { email, sandi, kode } = await req.json().catch(() => ({}));
    const surel = String(email ?? '').trim().toLowerCase();
    const kata = String(sandi ?? '');
    const kunci = String(kode ?? '').trim().toUpperCase();

    if (!surel.includes('@')) return jawab({ error: 'Alamat email belum benar.' }, 400);
    if (kata.length < 8) return jawab({ error: 'Kata sandi minimal 8 huruf.' }, 400);
    if (!kunci) return jawab({ error: 'Kode akses wajib diisi.' }, 400);

    /* ── 1. Kode dulu ────────────────────────────────────────────
       Diperiksa tanpa dipakai, supaya kode tidak terbakar oleh
       percobaan yang gagal di langkah berikutnya. */
    const { data: baris } = await db
      .from('kode_lisensi').select('kode, terpakai, maks_pakai').eq('kode', kunci).single();
    if (!baris) return jawab({ error: 'Kode tidak dikenal. Periksa lagi hurufnya.' }, 400);
    if (baris.terpakai >= baris.maks_pakai)
      return jawab({ error: 'Kode ini sudah terpakai.' }, 400);

    /* ── 2. Akun ─────────────────────────────────────────────────
       Email yang sudah terdaftar ditolak dengan pesannya sendiri:
       "sudah ada, silakan masuk" jauh lebih berguna daripada galat
       mentah dari Supabase. */
    const { data: buat, error: galatBuat } = await db.auth.admin.createUser({
      email: surel,
      password: kata,
      email_confirm: true,
    });
    if (galatBuat || !buat?.user) {
      const pesan = String(galatBuat?.message ?? '');
      const sudahAda = /already|registered|exists/i.test(pesan);
      return jawab({
        error: sudahAda
          ? 'Email ini sudah terdaftar. Masuk saja dengan kata sandimu.'
          : (pesan || 'Gagal membuat akun.'),
      }, sudahAda ? 409 : 500);
    }

    /* ── 3. Tukar kodenya ────────────────────────────────────────
       Penambahan pemakaian dan pemasangan hak ada di dalam satu fungsi
       SQL, supaya dua pendaftaran serentak dengan kode yang sama tidak
       bisa keduanya lolos. */
    const { data: hasil, error: galatTebus } = await db.rpc('tebus_kode', {
      p_kode: kunci, p_user: buat.user.id,
    });

    if (galatTebus || !hasil?.ok) {
      /* Akun tanpa akses tidak berguna dan menghalangi pendaftaran
         ulang dengan email yang sama — jadi dibatalkan, bukan
         ditinggalkan. */
      await db.auth.admin.deleteUser(buat.user.id);
      return jawab({ error: 'Kode tidak sah atau sudah terpakai.' }, 400);
    }

    return jawab({ ok: true, sampai: hasil.sampai ?? null });
  } catch (e) {
    return jawab({ error: String((e as Error)?.message ?? e) }, 500);
  }
});
