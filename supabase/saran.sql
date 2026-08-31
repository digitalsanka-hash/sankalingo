-- ── Kotak saran ──────────────────────────────────────────────────
--
-- Jalankan di SQL Editor Supabase, sekali saja.
--
-- Tabel ini satu-satunya di aplikasi yang boleh ditulis orang yang
-- BELUM masuk. Itu memang disengaja: saran paling berharga justru
-- datang dari orang yang baru mencoba dan belum punya akun, dan
-- memaksanya mendaftar dulu sama saja dengan tidak menerima saran.
--
-- Karena terbuka, tiga pagar dipasang di sisi basis data, bukan di
-- peramban — sebab siapa pun bisa memanggil REST-nya langsung tanpa
-- lewat aplikasi:
--   1. hanya INSERT yang diizinkan; tidak ada policy SELECT sama
--      sekali, jadi kunci publishable tidak bisa membaca satu baris
--      pun — termasuk saran orang lain.
--   2. panjang isi dibatasi, supaya satu permintaan tidak bisa
--      menanam berkilo-kilo teks.
--   3. kolom status hanya boleh berisi nilai yang dikenal.
--
-- Yang membaca saran adalah Edge Function panel-admin dengan service
-- role, yang memeriksa profil.admin lebih dulu.

create table if not exists public.saran (
  id          bigint generated always as identity primary key,
  dibuat_pada timestamptz not null default now(),
  user_id     uuid references auth.users(id) on delete set null default auth.uid(),
  email       text,
  jenis       text not null default 'saran'
              check (jenis in ('saran', 'masalah', 'kata')),
  isi         text not null check (char_length(isi) between 3 and 2000),
  -- Konteks tempat saran ditulis. Diisi otomatis oleh aplikasi supaya
  -- laporan "ada yang salah di sini" tidak kehilangan kata "di sini".
  bahasa      text check (bahasa is null or char_length(bahasa) <= 8),
  halaman     text check (halaman is null or char_length(halaman) <= 120),
  versi       text check (versi is null or char_length(versi) <= 24),
  perangkat   text check (perangkat is null or char_length(perangkat) <= 200),
  status      text not null default 'baru'
              check (status in ('baru', 'dibaca', 'selesai')),
  catatan     text
);

create index if not exists saran_baru_idx on public.saran (dibuat_pada desc);
create index if not exists saran_status_idx on public.saran (status);

alter table public.saran enable row level security;

drop policy if exists "siapa pun boleh mengirim saran" on public.saran;

-- INSERT saja. Tidak ada policy SELECT/UPDATE/DELETE: dengan RLS
-- menyala, yang tidak punya policy berarti dilarang untuk semua orang
-- yang memakai kunci publishable.
create policy "siapa pun boleh mengirim saran" on public.saran
  for insert to anon, authenticated with check (true);

-- Periksa hasilnya:
--   select policyname, cmd, roles from pg_policies where tablename = 'saran';
-- Harus muncul TEPAT satu baris, cmd = INSERT.
