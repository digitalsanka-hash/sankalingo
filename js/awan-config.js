/* ── Sambungan awan (Supabase) — OPSIONAL ─────────────────────────

   Aplikasi ini jalan PENUH tanpa berkas ini diisi. Seluruh kemajuan
   belajar disimpan di localStorage peramban, dan itu sudah cukup untuk
   satu perangkat.

   Yang ditambahkan Supabase cuma satu hal, tetapi hal itu tidak bisa
   dikerjakan localStorage: memindahkan kemajuan ANTAR PERANGKAT. Tanpa
   ini, pengguna yang berganti ponsel kehilangan seluruh riwayatnya.

   Cara mengisi:
     1. Buat proyek di https://supabase.com (gratis)
     2. Jalankan supabase/skema.sql di SQL Editor, lalu supabase/periksa.sql
     3. Settings → API Keys → salin PUBLISHABLE KEY (sb_publishable_…)

   Nama kuncinya berganti. Supabase dulu menyebutnya "anon public" berupa
   JWT panjang berawalan eyJ…; sekarang namanya "Publishable key" dan
   bentuknya sb_publishable_… Keduanya berperan sama dan sama-sama aman
   dipasang di peramban. Yang lama masih ada di tab "Legacy anon,
   service_role API keys".

   Project URL tidak ada di halaman API Keys — ambil di Settings → General,
   atau susun dari alamat dasbornya:
   dashboard/project/ABCDEFG/... → https://ABCDEFG.supabase.co

   AMANKAH kunci ini ditulis di berkas yang bisa dilihat pengunjung?
   Ya — kunci "anon" memang dirancang untuk itu. Yang menjaga data
   adalah Row Level Security di sisi Supabase, bukan kerahasiaan kunci.
   Skema di supabase/skema.sql sudah menyalakan RLS sehingga tiap
   pengguna hanya bisa membaca dan menulis barisnya sendiri.

   JANGAN pernah menempel kunci rahasia di sini — dulu bernama
   "service_role", sekarang "Secret key" (sb_secret_…). Kunci itu
   menembus seluruh RLS dan hanya boleh hidup di sisi server.          */

export const AWAN = {
  url:  '',   // contoh: 'https://abcdefghijkl.supabase.co'
  anon: ''    // Publishable key (sb_publishable_…) — BUKAN Secret key
};

/** Apakah penyelarasan awan sudah dikonfigurasi? */
export const awanSiap = () => !!(AWAN.url && AWAN.anon);
