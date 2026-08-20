/* ── Sambungan awan (Supabase) — OPSIONAL ─────────────────────────

   Aplikasi ini jalan PENUH tanpa berkas ini diisi. Seluruh kemajuan
   belajar disimpan di localStorage peramban, dan itu sudah cukup untuk
   satu perangkat.

   Yang ditambahkan Supabase cuma satu hal, tetapi hal itu tidak bisa
   dikerjakan localStorage: memindahkan kemajuan ANTAR PERANGKAT. Tanpa
   ini, pengguna yang berganti ponsel kehilangan seluruh riwayatnya.

   Cara mengisi:
     1. Buat proyek di https://supabase.com (gratis)
     2. Settings → API → salin "Project URL" dan kunci "anon public"
     3. Tempel di bawah, lalu jalankan supabase/skema.sql di SQL Editor

   AMANKAH kunci ini ditulis di berkas yang bisa dilihat pengunjung?
   Ya — kunci "anon" memang dirancang untuk itu. Yang menjaga data
   adalah Row Level Security di sisi Supabase, bukan kerahasiaan kunci.
   Skema di supabase/skema.sql sudah menyalakan RLS sehingga tiap
   pengguna hanya bisa membaca dan menulis barisnya sendiri.

   JANGAN pernah menempel kunci "service_role" di sini. Kunci itu
   menembus seluruh RLS dan hanya boleh hidup di sisi server.          */

export const AWAN = {
  url:  '',   // contoh: 'https://abcdefghijkl.supabase.co'
  anon: ''    // kunci anon public — bukan service_role
};

/** Apakah penyelarasan awan sudah dikonfigurasi? */
export const awanSiap = () => !!(AWAN.url && AWAN.anon);
