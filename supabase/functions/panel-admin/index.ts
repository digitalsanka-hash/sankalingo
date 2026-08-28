// Supabase Edge Function: panel-admin
//
// Satu-satunya pintu ke stok kode lisensi dan daftar pengguna.
//
// Kenapa lewat Edge Function dan bukan langsung dari peramban:
// tabel kode_lisensi sengaja punya RLS menyala TANPA kebijakan, jadi
// kunci publishable tidak bisa menyentuhnya sama sekali. Yang boleh
// hanya service role, dan service role tidak boleh pernah sampai ke
// peramban — ia tinggal di variabel lingkungan fungsi ini.
//
// Setiap permintaan diperiksa dua lapis:
//   1. JWT pemanggil harus sah (siapa dia)
//   2. profil.admin miliknya harus true (boleh apa dia)
// Menyembunyikan menu di sisi peramban BUKAN pengaman; ini yang menjaga.
//
// Pasang:  supabase functions deploy panel-admin

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const jawab = (badan: unknown, status = 200) =>
  new Response(JSON.stringify(badan), {
    status,
    headers: { ...cors, 'Content-Type': 'application/json' },
  });

/* Kode dibaca manusia lewat WhatsApp, jadi huruf yang mudah tertukar
   dibuang: I/1, O/0, S/5. Sisanya 29 lambang. */
const LAMBANG = 'ABCDEFGHJKLMNPQRTUVWXYZ234689';
const acak = (n: number) => {
  const b = new Uint32Array(n);
  crypto.getRandomValues(b);
  return Array.from(b, (x) => LAMBANG[x % LAMBANG.length]).join('');
};
const kodeBaru = () => `SL-${acak(4)}-${acak(4)}`;

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
    const { data: prof } = await db
      .from('profil').select('admin').eq('user_id', u.user.id).single();
    if (!prof?.admin) return jawab({ error: 'Khusus admin.' }, 403);

    const badan = await req.json().catch(() => ({ tindakan: 'ringkasan' }));
    const { tindakan, jumlah, bulan, kode, label, userId } = badan;

    switch (tindakan) {
      /* ── Ringkasan: stok kode + daftar pengguna ─────────────── */
      case 'ringkasan': {
        const { data: kodes } = await db
          .from('kode_lisensi').select('*').order('dibuat', { ascending: false });
        const { data: profil } = await db
          .from('profil').select('*').order('dibuat', { ascending: false });

        const semua = kodes ?? [];
        return jawab({
          kode: {
            total: semua.length,
            terpakai: semua.filter((k) => k.terpakai >= k.maks_pakai).length,
            dipesan: semua.filter((k) => k.dipesan_untuk && k.terpakai < k.maks_pakai).length,
            siap: semua.filter((k) => !k.dipesan_untuk && k.terpakai < k.maks_pakai).length,
            daftar: semua,
          },
          pengguna: profil ?? [],
        });
      }

      /* ── Cetak kode baru ─────────────────────────────────────── */
      case 'buat': {
        const n = Math.min(Math.max(Number(jumlah) || 1, 1), 200);
        const bln = bulan === null || bulan === undefined ? null : Number(bulan);
        const baris = Array.from({ length: n }, () => ({
          kode: kodeBaru(), bulan_aktif: bln, catatan: label ?? null,
        }));
        const { data, error } = await db
          .from('kode_lisensi').insert(baris).select('kode');
        if (error) return jawab({ error: error.message }, 500);
        return jawab({ dibuat: (data ?? []).map((d) => d.kode) });
      }

      /* ── Tandai kode sudah diberikan ke seseorang ───────────── */
      case 'pesan': {
        if (!kode) return jawab({ error: 'Kode wajib diisi.' }, 400);
        const { error } = await db.from('kode_lisensi')
          .update({ dipesan_untuk: label ?? '(tanpa nama)', dipesan_pada: new Date().toISOString() })
          .eq('kode', String(kode).toUpperCase());
        if (error) return jawab({ error: error.message }, 500);
        return jawab({ ok: true });
      }

      case 'batal_pesan': {
        if (!kode) return jawab({ error: 'Kode wajib diisi.' }, 400);
        const { error } = await db.from('kode_lisensi')
          .update({ dipesan_untuk: null, dipesan_pada: null })
          .eq('kode', String(kode).toUpperCase());
        if (error) return jawab({ error: error.message }, 500);
        return jawab({ ok: true });
      }

      /* ── Ubah masa aktif satu pengguna. bulan null = selamanya ─ */
      case 'akses': {
        if (!userId) return jawab({ error: 'Pengguna wajib dipilih.' }, 400);
        const sampai = bulan === null || bulan === undefined
          ? null
          : new Date(Date.now() + Number(bulan) * 30 * 864e5).toISOString();
        const { error } = await db.from('profil')
          .update({ akses_sampai: sampai }).eq('user_id', userId);
        if (error) return jawab({ error: error.message }, 500);
        return jawab({ ok: true });
      }

      /* ── Hapus pengguna ──────────────────────────────────────
         Kode yang dipakainya dikembalikan ke stok, kalau tidak ia
         hangus tanpa pernah dipakai siapa pun. */
      case 'hapus': {
        if (!userId) return jawab({ error: 'Pengguna wajib dipilih.' }, 400);
        if (userId === u.user.id) return jawab({ error: 'Tidak bisa menghapus dirimu sendiri.' }, 400);
        const { data: p } = await db
          .from('profil').select('kode').eq('user_id', userId).single();
        if (p?.kode) await db.rpc('kembalikan_kode', { p_kode: p.kode });
        const { error } = await db.auth.admin.deleteUser(userId);
        if (error) return jawab({ error: error.message }, 500);
        return jawab({ ok: true });
      }

      default:
        return jawab({ error: 'Tindakan tidak dikenal.' }, 400);
    }
  } catch (e) {
    return jawab({ error: String((e as Error)?.message ?? e) }, 500);
  }
});
