// Supabase Edge Function: tebus-lisensi
//
// Pembeli sudah masuk lewat kode OTP email (js/awan.js), lalu menempel
// KODE AKSES yang ia terima. Fungsi ini yang menukarnya jadi hak akses.
//
// Berbeda dengan Finplan yang sekalian membuatkan akun: di sini akunnya
// sudah ada lebih dulu, karena SankaLingo memakai OTP email dan bukan
// kata sandi. Jadi fungsi ini butuh JWT — memang begitu maunya, sebab
// hak akses harus menempel pada akun yang jelas.
//
// Pasang:  supabase functions deploy tebus-lisensi

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
    const ANON = Deno.env.get('SUPABASE_ANON_KEY')!;

    const jwt = (req.headers.get('Authorization') || '').replace('Bearer ', '');
    if (!jwt) return jawab({ error: 'Masuk dulu dengan emailmu.' }, 401);

    const sebagai = createClient(URL_, ANON, {
      global: { headers: { Authorization: `Bearer ${jwt}` } },
    });
    const { data: u } = await sebagai.auth.getUser();
    if (!u?.user) return jawab({ error: 'Sesi tidak sah. Masuk ulang.' }, 401);

    const { kode } = await req.json().catch(() => ({}));
    const bersih = String(kode ?? '').trim().toUpperCase();
    if (!bersih) return jawab({ error: 'Kode akses wajib diisi.' }, 400);

    const db = createClient(URL_, SERVICE, { auth: { persistSession: false } });

    /* Sudah punya akses? Jangan biarkan ia membakar kode kedua. */
    const { data: prof } = await db
      .from('profil').select('kode, akses_sampai').eq('user_id', u.user.id).single();
    if (prof?.kode) {
      return jawab({ ok: true, sudah: true, sampai: prof.akses_sampai ?? null });
    }

    /* Penambahan pemakaian dan pemasangan hak dilakukan di dalam satu
       fungsi SQL, supaya dua penukaran serentak tidak bisa keduanya
       lolos melewati batas maks_pakai. */
    const { data, error } = await db.rpc('tebus_kode', {
      p_kode: bersih, p_user: u.user.id,
    });
    if (error) return jawab({ error: 'Gagal memeriksa kode.' }, 500);
    if (!data?.ok) return jawab({ error: 'Kode tidak sah atau sudah terpakai.' }, 400);

    return jawab({ ok: true, sampai: data.sampai ?? null });
  } catch (e) {
    return jawab({ error: String((e as Error)?.message ?? e) }, 500);
  }
});
