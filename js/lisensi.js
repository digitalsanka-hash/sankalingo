/* ── Hak akses & lisensi ──────────────────────────────────────────

   Pembagiannya begini:

     profil    dibaca langsung dari peramban (RLS hanya mengizinkan
               barisnya sendiri, dan hanya select — jadi tidak ada yang
               bisa mengangkat dirinya jadi admin)
     lisensi   ditukar lewat Edge Function tebus-lisensi
     admin     seluruh tindakannya lewat Edge Function panel-admin

   PENTING — apa yang dijaga berkas ini dan apa yang tidak.

   Fungsi bolehMasuk() di bawah dipakai untuk MENYEMBUNYIKAN menu dan
   menampilkan ajakan membeli. Itu kenyamanan, bukan penjagaan: siapa
   pun yang membuka DevTools bisa mengubah nilainya. Selama isi
   pelajaran masih berupa berkas statis di /data/*.js, ia memang bisa
   diambil tanpa membayar.

   Penjagaan yang sesungguhnya ada di sisi Supabase — RLS dan kedua
   Edge Function — dan itu menjaga hal yang berbeda: stok kode, data
   pengguna lain, dan kemampuan admin. Jangan tertukar. */

import { panggilAwan, sesi } from './awan.js';
import { AWAN, awanSiap } from './awan-config.js';

let simpanan = null;      // profil yang sudah terambil
let sedang = null;        // permintaan yang sedang berjalan

/** Panggil Edge Function. Butuh sesi; tanpa itu fungsinya menolak 401. */
export async function fungsi(nama, badan = {}) {
  const s = sesi();
  if (!s?.access_token) throw new Error('Masuk dulu dengan emailmu.');
  const r = await fetch(`${AWAN.url.replace(/\/+$/, '')}/functions/v1/${nama}`, {
    method: 'POST',
    headers: {
      apikey: AWAN.anon,
      Authorization: `Bearer ${s.access_token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(badan)
  });
  const teks = await r.text();
  let isi = null;
  try { isi = teks ? JSON.parse(teks) : null; } catch { isi = teks; }
  if (!r.ok) throw new Error(isi?.error || `Gagal (${r.status})`);
  return isi;
}

/** Profil pengguna yang sedang masuk. null kalau belum masuk. */
export async function profil({ segarkan = false } = {}) {
  if (!awanSiap()) return null;
  const s = sesi();
  if (!s?.user?.id) { simpanan = null; return null; }
  if (simpanan && !segarkan) return simpanan;
  if (sedang && !segarkan) return sedang;

  sedang = (async () => {
    try {
      const baris = await panggilAwan(
        `/rest/v1/profil?select=*&user_id=eq.${encodeURIComponent(s.user.id)}`);
      simpanan = Array.isArray(baris) ? (baris[0] ?? null) : null;
      return simpanan;
    } catch {
      /* Tabelnya belum dibuat, atau internet mati. Keduanya bukan alasan
         untuk mengunci aplikasi — bagian gratisnya tetap harus jalan. */
      return null;
    } finally { sedang = null; }
  })();
  return sedang;
}

export const lupakanProfil = () => { simpanan = null; };

/** Apakah aksesnya masih berlaku? akses_sampai null = selamanya. */
export function aksesAktif(p) {
  if (!p?.kode) return false;
  if (!p.akses_sampai) return true;
  return new Date(p.akses_sampai).getTime() > Date.now();
}

export const adalahAdmin = p => !!p?.admin;

/** Tukar kode akses. Mengembalikan profil terbaru. */
export async function tebus(kode) {
  await fungsi('tebus-lisensi', { kode });
  return profil({ segarkan: true });
}
