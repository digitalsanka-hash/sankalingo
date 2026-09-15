// Supabase Edge Function: minta-upgrade
//
// Pembeli paket Esensi menekan "Saya sudah bayar" sesudah membayar
// kenaikan paket di Scalev. Fungsi ini hanya MENCATAT permintaannya —
// ia tidak pernah menaikkan paket sendiri.
//
// Kenapa tidak otomatis: tombol ini ada di peramban, dan apa pun yang
// ada di peramban bisa ditekan siapa saja, berkali-kali, tanpa pernah
// membayar. Kalau ia langsung memberi sembilan bahasa, paket Lengkap
// berhenti punya arti pada hari pertama. Yang memberi akses tetap
// admin, sesudah melihat pembayarannya masuk di Scalev.
//
// Jadi tugas fungsi ini cuma satu: menaruh nama orangnya di daftar
// tunggu panel admin, dan memberi tahu admin lewat email supaya
// pembeli tidak menunggu sampai ada yang kebetulan membuka panel.
//
// Pasang:  supabase functions deploy minta-upgrade

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { kirimEmail, emailSiap } from '../_shared/surat.ts';

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
    if (!jwt) return jawab({ error: 'Belum masuk.' }, 401);

    const sebagai = createClient(URL_, ANON, {
      global: { headers: { Authorization: `Bearer ${jwt}` } },
    });
    const { data: u } = await sebagai.auth.getUser();
    if (!u?.user) return jawab({ error: 'Sesi tidak sah.' }, 401);

    const db = createClient(URL_, SERVICE, { auth: { persistSession: false } });
    const { data: prof } = await db.from('profil')
      .select('email, paket, upgrade_diminta').eq('user_id', u.user.id).single();

    if (!prof) return jawab({ error: 'Profil tidak ditemukan.' }, 404);
    /* Sudah Lengkap: bukan galat, tetapi jangan dicatat sebagai
       permintaan — daftar tunggu admin harus berisi pekerjaan nyata. */
    if (prof.paket !== 'esensi') return jawab({ ok: true, sudahLengkap: true });

    /* Menekan dua kali tidak membuat dua baris; yang dicatat cuma
       kapan terakhir ia meminta. */
    const { error } = await db.from('profil')
      .update({ upgrade_diminta: new Date().toISOString() })
      .eq('user_id', u.user.id);
    if (error) return jawab({ error: error.message }, 500);

    /* Kabari admin. Gagal mengirim email TIDAK boleh membatalkan
       permintaannya — catatannya sudah tersimpan, dan itu yang
       menentukan. Emailnya cuma mempercepat. */
    const adminEmail = Deno.env.get('ADMIN_EMAIL');
    if (adminEmail && emailSiap()) {
      const isi = `${prof.email ?? u.user.email} menyatakan sudah membayar kenaikan ke paket Lengkap.

Buka Panel Admin → Pengguna → cari alamat itu → tekan "Jadikan Lengkap".

Periksa dulu pembayarannya masuk di Scalev sebelum menaikkan.`;
      try {
        await kirimEmail(adminEmail, 'Ada yang minta naik ke paket Lengkap',
          { teks: isi, html: `<pre style="font-family:system-ui,sans-serif;white-space:pre-wrap">${isi}</pre>` });
      } catch (e) {
        console.warn('Gagal mengabari admin:', (e as Error).message);
      }
    }

    return jawab({ ok: true });
  } catch (e) {
    return jawab({ error: String((e as Error)?.message ?? e) }, 500);
  }
});
