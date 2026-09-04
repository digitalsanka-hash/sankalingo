// Supabase Edge Function: pembelian-terakhir
//
// Memberi halaman jualan daftar pembelian TERBARU YANG SUNGGUHAN, untuk
// ditampilkan sebagai notifikasi kecil di pojok layar.
//
// Tiga keputusan yang membuat fungsi ini layak dipublikasikan:
//
//   1. TANPA NAMA. Yang keluar hanya kota dan berapa lama lalu. Nama
//      pembeli — bahkan nama depan — adalah data orang yang tidak
//      pernah setuju dipajang di halaman jualan. Kota saja sudah cukup
//      membuat notifikasinya terasa hidup, dan tidak menunjuk siapa pun.
//
//   2. TANPA ANGKA TOTAL. Fungsi ini tidak mengembalikan jumlah pembeli
//      keseluruhan. Halaman jualan tidak boleh menyiratkan skala yang
//      tidak bisa dibuktikan.
//
//   3. HANYA YANG BENAR-BENAR TERKIRIM, dan hanya dari tujuh hari
//      terakhir. Pesanan yang gagal kirim atau kehabisan stok bukan
//      pembelian yang selesai, dan pembelian bulan lalu bukan "baru
//      saja".
//
// Kalau belum ada pembeli, jawabannya larik kosong — dan halaman
// jualan tidak menampilkan apa pun. Itu memang yang benar: lebih baik
// tidak ada notifikasi daripada notifikasi yang dikarang.
//
// Pasang:  supabase functions deploy pembelian-terakhir --no-verify-jwt

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });

  try {
    const db = createClient(
      Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
      { auth: { persistSession: false } },
    );

    const seminggu = new Date(Date.now() - 7 * 24 * 3600 * 1000).toISOString();
    const { data, error } = await db
      .from('pesanan_scalev')
      .select('dibuat, muatan')
      .eq('status', 'terkirim')
      .gte('dibuat', seminggu)
      .order('dibuat', { ascending: false })
      .limit(8);

    if (error) throw error;

    const daftar = (data ?? []).map((b: any) => {
      const alamat = b?.muatan?.data?.destination_address ?? {};
      const kota = String(alamat.city ?? alamat.regency ?? alamat.province ?? '').trim();
      return {
        kota: kota || null,
        menitLalu: Math.max(1, Math.round((Date.now() - new Date(b.dibuat).getTime()) / 60000)),
      };
    }).filter((b) => b.kota);   // tanpa kota, notifikasinya tidak bercerita apa-apa

    return new Response(JSON.stringify({ pembelian: daftar }), {
      headers: {
        ...cors,
        'Content-Type': 'application/json',
        /* Satu menit cukup: notifikasi ini tidak perlu real-time, dan
           cache mencegah halaman jualan yang ramai memukuli basis data. */
        'Cache-Control': 'public, max-age=60',
      },
    });
  } catch (e) {
    /* Notifikasi hiasan tidak boleh menjatuhkan halaman jualan. Gagal
       diam-diam dengan larik kosong: pengunjung tidak melihat apa pun,
       tombol belinya tetap bekerja. */
    console.error('pembelian-terakhir gagal:', e);
    return new Response(JSON.stringify({ pembelian: [] }), {
      headers: { ...cors, 'Content-Type': 'application/json' },
    });
  }
});
