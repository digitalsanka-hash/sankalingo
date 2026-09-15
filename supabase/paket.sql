-- ── Dua paket: Esensi (5 bahasa) dan Lengkap (9 bahasa) ───────────
--
-- Sebelum berkas ini, dua paket itu hanya ada di halaman jualan. Di
-- dalam aplikasi semua orang mendapat sembilan bahasa, siapa pun dan
-- apa pun yang dibayar. Jadi yang dikerjakan di sini bukan menambah
-- fitur, melainkan membuat yang sudah dijual benar-benar berbeda.
--
-- KENAPA BAWAANNYA 'lengkap', BUKAN 'esensi'
--
-- Kolom baru diberi default 'lengkap' supaya setiap baris yang SUDAH
-- ada — kode yang sudah dicetak dan orang yang sudah menebus — tetap
-- memegang sembilan bahasa. Mereka membeli ketika aplikasi memang
-- memberikan sembilan, dan mengambilnya kembali sekarang berarti
-- mengurangi barang yang sudah dibayar. Pembatasan hanya berlaku bagi
-- kode yang dicetak SESUDAH ini dan ditandai 'esensi' dengan sengaja.
--
-- Jalankan sekali di Supabase → SQL Editor.

alter table public.kode_lisensi
  add column if not exists paket text not null default 'lengkap';

alter table public.profil
  add column if not exists paket text not null default 'lengkap';

-- Kapan pembeli menekan "sudah bayar" di layar naik paket. Null =
-- tidak sedang meminta apa-apa. Dikosongkan lagi sesudah admin
-- menaikkan paketnya, supaya daftar permintaan tidak menumpuk selamanya.
alter table public.profil
  add column if not exists upgrade_diminta timestamptz;

-- Hanya dua nilai yang sah. Tanpa ini, satu salah ketik di panel admin
-- ('Lengkap', 'full', 'lengkao') menghasilkan akun yang tidak cocok
-- dengan cabang mana pun di aplikasi, dan orangnya kehilangan bahasa
-- tanpa ada yang tahu sebabnya.
do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'kode_lisensi_paket_sah') then
    alter table public.kode_lisensi
      add constraint kode_lisensi_paket_sah check (paket in ('esensi', 'lengkap'));
  end if;
  if not exists (select 1 from pg_constraint where conname = 'profil_paket_sah') then
    alter table public.profil
      add constraint profil_paket_sah check (paket in ('esensi', 'lengkap'));
  end if;
end $$;

comment on column public.kode_lisensi.paket is 'esensi = 5 bahasa, lengkap = 9 bahasa';
comment on column public.profil.paket is 'Disalin dari kode saat ditebus; dinaikkan admin saat pembeli naik paket.';

-- ── Penebusan ikut membawa paketnya ───────────────────────────────
-- Tanpa perubahan ini, kode bertanda 'esensi' tetap memberi sembilan
-- bahasa: paketnya tercatat di kodenya tetapi tidak pernah sampai ke
-- profil, dan yang dibaca aplikasi adalah profil.
create or replace function public.tebus_kode(p_kode text, p_user uuid)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  k       public.kode_lisensi%rowtype;
  sampai  timestamptz;
begin
  update public.kode_lisensi
     set terpakai         = terpakai + 1,
         terakhir_dipakai = now()
   where kode = upper(trim(p_kode))
     and terpakai < maks_pakai
  returning * into k;

  if not found then
    return jsonb_build_object('ok', false, 'sebab', 'tidak-sah');
  end if;

  sampai := case when k.bulan_aktif is null
                 then null
                 else now() + (k.bulan_aktif || ' months')::interval end;

  update public.profil
     set kode = k.kode, akses_sampai = sampai, paket = k.paket
   where user_id = p_user;

  return jsonb_build_object('ok', true, 'sampai', sampai, 'paket', k.paket);
end;
$$;
