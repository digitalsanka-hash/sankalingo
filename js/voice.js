/* Mesin suara multibahasa dengan cadangan berlapis.

   Kenyataannya sebagian besar perangkat Windows hanya punya suara Inggris
   (dan sering suara Indonesia). Tanpa cadangan, seluruh tombol suara di
   delapan modul bahasa jadi mati. Lapisannya:

     1. suara asli bahasa target        — paling tepat
     2. romanisasi + suara INDONESIA    — pendekatan terbaik berikutnya,
                                          karena romanisasi di aplikasi ini
                                          memang ditulis dengan ejaan Indonesia
     3. romanisasi + suara Inggris      — masih terpakai
     4. tidak ada suara sama sekali     — beri pesan yang jelas, bukan diam

   Lapisan yang sedang dipakai selalu diberitahukan ke pengguna, jadi tidak
   ada yang mengira pelafalan cadangan itu pelafalan asli. */

import { keLatin, perluAlih } from './translit.js';
import { putar as putarRekaman, hentikan as hentikanRekaman,
         muatManifes, punyaAudio, manifesTersimpan } from './audio.js';

const TAGS = {
  en: ['en-us', 'en-gb', 'en'],
  id: ['id-id', 'id'],
  ko: ['ko-kr', 'ko'],
  ja: ['ja-jp', 'ja'],
  zh: ['zh-cn', 'zh-tw', 'zh-hk', 'cmn', 'zh'],
  ar: ['ar-sa', 'ar-eg', 'ar-ae', 'ar'],
  ru: ['ru-ru', 'ru'],
  de: ['de-de', 'de-at', 'de-ch', 'de'],
  fr: ['fr-fr', 'fr-ca', 'fr'],
  es: ['es-es', 'es-mx', 'es-us', 'es']
};

const NAMA = { en:'Inggris', id:'Indonesia', ko:'Korea', ja:'Jepang', zh:'Mandarin',
               ar:'Arab', ru:'Rusia', de:'Jerman', fr:'Prancis', es:'Spanyol' };


const synth = window.speechSynthesis;
let voices = [];
let readyP = null;

/** Pastikan daftar suara sudah terisi — getVoices() bersifat asinkron. */
export function ready() {
  if (readyP) return readyP;
  readyP = new Promise(res => {
    const grab = () => {
      voices = synth ? synth.getVoices() : [];
      if (voices.length) { res(voices); return true; }
      return false;
    };
    if (grab()) return;
    let tries = 0;
    const iv = setInterval(() => {
      if (grab() || ++tries > 20) { clearInterval(iv); res(voices); }
    }, 150);
    synth?.addEventListener?.('voiceschanged', () => { if (grab()) clearInterval(iv); });
  });
  return readyP;
}
export const allVoices = () => voices;
export const ttsAda = () => !!synth;

const cocok = code => {
  const tags = TAGS[code] || [];
  return voices.filter(v => {
    const l = (v.lang || '').replace('_', '-').toLowerCase();
    return tags.some(t => l === t || l.startsWith(t + '-') || l.startsWith(t));
  });
};

/** Urutkan dari yang paling manusiawi. */
function skor(v) {
  const n = v.name || '';
  let s = 0;
  if (/Natural|Neural/i.test(n)) s += 60;
  if (/Online/i.test(n)) s += 25;
  if (/^Google/i.test(n)) s += 45;
  if (v.localService === false) s += 10;
  if (/Desktop/i.test(n)) s -= 20;
  return s;
}
export const suaraUntuk = code => cocok(code).slice().sort((a, b) => skor(b) - skor(a));

/* Pilihan manual pengguna per bahasa, disimpan di localStorage. */
const KEY = 'fasih.voices';
const pilihan = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
export const voicePilihan = code => pilihan()[code] || '';
export function setVoicePilihan(code, uri) {
  const p = pilihan();
  uri ? (p[code] = uri) : delete p[code];
  localStorage.setItem(KEY, JSON.stringify(p));
}

/**
 * Tentukan lapisan mana yang akan dipakai untuk sebuah bahasa.
 * @returns {{mode:'native'|'roman-id'|'roman-en'|'none', voice:SpeechSynthesisVoice|null,
 *            label:string, note:string, akurat:boolean}}
 */
export function resolve(code) {
  const manual = voicePilihan(code);
  if (manual) {
    const v = voices.find(x => x.voiceURI === manual);
    /* Kalau pengguna menunjuk suara yang bahasanya lain — misalnya suara
       Indonesia untuk Korea — aksara aslinya tidak akan terbaca. Pakai
       romanisasi, jangan biarkan tombolnya diam. */
    if (v) {
      const sesuai = cocok(code).some(x => x.voiceURI === v.voiceURI);
      return sesuai
        ? { mode: 'native', voice: v, akurat: true,
            label: `Suara pilihanmu: ${v.name}`,
            note: 'Kamu memilih suara ini sendiri di Pengaturan.' }
        : { mode: 'roman-id', voice: v, akurat: false,
            label: `Suara pilihanmu: ${v.name}`,
            note: `Suara ini bukan suara ${NAMA[code] || code}, jadi yang dibacakan ` +
                  `adalah romanisasinya — bukan pelafalan asli.` };
    }
  }
  const asli = suaraUntuk(code)[0];
  if (asli) return { mode: 'native', voice: asli, akurat: true,
    label: `Suara ${NAMA[code] || code}: ${asli.name}`,
    note: 'Pelafalan asli tersedia di perangkat ini.' };

  if (code === 'en' || code === 'id') {
    const alt = suaraUntuk(code === 'en' ? 'id' : 'en')[0];
    return alt
      ? { mode: 'roman-en', voice: alt, akurat: false,
          label: `Tidak ada suara ${NAMA[code]}`, note: `Sementara dibacakan suara ${alt.name}.` }
      : { mode: 'none', voice: null, akurat: false,
          label: 'Tidak ada suara sama sekali', note: 'Perangkat ini belum punya suara TTS.' };
  }

  const id = suaraUntuk('id')[0];
  if (id) return { mode: 'roman-id', voice: id, akurat: false,
    label: `Suara ${NAMA[code]} belum terpasang`,
    note: `Sementara ini aplikasi membacakan ROMANISASI-nya dengan suara Indonesia ` +
          `(${id.name}). Ejaan romanisasi di aplikasi ini memang ditulis gaya Indonesia, ` +
          `jadi hasilnya cukup mendekati — tetapi ini BUKAN pelafalan asli.` };

  const en = suaraUntuk('en')[0];
  if (en) return { mode: 'roman-en', voice: en, akurat: false,
    label: `Suara ${NAMA[code]} belum terpasang`,
    note: `Sementara ini aplikasi membacakan romanisasinya dengan suara Inggris (${en.name}). ` +
          `Ini pendekatan kasar, bukan pelafalan asli.` };

  return { mode: 'none', voice: null, akurat: false,
    label: `Suara ${NAMA[code]} belum terpasang`,
    note: 'Perangkat ini belum punya suara TTS sama sekali.' };
}

/* ── Membersihkan romanisasi agar terbaca mesin ───────────────── */
const GANTI = [
  [/[ʿʾ‘’'`]/g, ''],           // hamzah & ain
  [/ø/gi, 'e'], [/ə/gi, 'e'],  // vokal Prancis/schwa
  [/ŋ/gi, 'ng'], [/ɲ/gi, 'ny'],
  [/ʃ/gi, 'sy'], [/ʒ/gi, 'zy'], [/θ/gi, 'th'], [/ð/gi, 'dh'],
  [/ɛ/gi, 'e'], [/ɔ/gi, 'o'], [/ɑ/gi, 'a'], [/ɯ/gi, 'e'], [/ʌ/gi, 'a'],
  [/œ/gi, 'e'], [/ʊ/gi, 'u'], [/ɪ/gi, 'i'], [/ʁ/gi, 'r'], [/ɡ/gi, 'g'],
  [/ɥ/gi, 'w'], [/ɸ/gi, 'f'], [/ɾ/gi, 'r'], [/ʔ/g, ''],
  [/ː/g, ''], [/[·•]/g, ' '],
  [/\s*\/\s*/g, ' atau '],     // "g / k" → "g atau k"
  [/[()[\]{}]/g, ' '],
  [/\s{2,}/g, ' ']
];

/** Buang tanda diakritik & lambang fonetik supaya suara Indonesia bisa membacanya. */
export function bersihkanRom(s) {
  let t = String(s ?? '');
  t = t.normalize('NFD').replace(/[̀-ͯ]/g, '');   // buang tanda nada & macron
  for (const [re, rep] of GANTI) t = t.replace(re, rep);
  return t.trim();
}

/* ── Berbicara ────────────────────────────────────────────────────
   Tiga hal yang membuat tombol suara terasa rusak, dan penawarnya:

   1. LAG. cancel() lalu menunggu selalu 120 md membuat tiap klik terasa
      berat. Sekarang hanya menunggu kalau memang ada yang sedang bunyi,
      dan hanya 25 md — cukup untuk Chrome melepas antreannya.
   2. KALIMAT PANJANG DIPOTONG. Chrome berhenti diam-diam di sekitar 200
      huruf. Teks dipecah di batas kalimat sebelum diucapkan.
   3. CHROME TIDUR. Mesin bicara berhenti sendiri setelah ±15 detik.
      Denyut pause/resume menjaganya tetap hidup selama pemutaran.        */

let token = 0;

export function stop() {
  token++;
  hentikanRekaman();
  try { synth?.cancel(); } catch {}
}

/** Tidak melakukan apa-apa — dan itu memang disengaja.
 *
 * Dulu di sini ada "pemanasan": satu ucapan senyap dikirim lebih dulu supaya
 * mesin bicara sudah siap saat tombol ditekan. Diukur langsung, hasilnya
 * KEBALIKANNYA:
 *
 *     tanpa pemanasan          58, 59, 58, 58, 59 md
 *     pemanasan 500 md sebelum 645, 313, 317, 306 md
 *
 * Ucapan senyap itu meninggalkan mesin dalam keadaan sibuk, dan ucapan
 * sungguhan berikutnya harus mengantre di belakangnya. Fungsinya dikosongkan,
 * bukan dihapus, supaya pemanggil lama tidak pecah — dan supaya alasannya
 * tercatat kalau ada yang tergoda menambahkannya lagi. */
export function hangatkan() { /* sengaja kosong — lihat catatan di atas */ }

/** Pecah di batas kalimat; Chrome memotong ucapan yang terlalu panjang. */
export function potong(teks, maks = 180) {
  const t = String(teks).trim();
  if (t.length <= maks) return [t];
  const kalimat = t.match(/[^.!?。！？…\n]+[.!?。！？…]*\s*/g) || [t];
  const hasil = [];
  let buf = '';
  for (const k of kalimat) {
    if ((buf + k).length > maks && buf) { hasil.push(buf.trim()); buf = ''; }
    if (k.length > maks) {
      for (const bagian of k.match(new RegExp(`[\\s\\S]{1,${maks}}(\\s|$)`, 'g')) || [k])
        hasil.push(bagian.trim());
    } else buf += k;
  }
  if (buf.trim()) hasil.push(buf.trim());
  return hasil.filter(Boolean);
}

/** Ucapkan satu potongan; selesai saat suara benar-benar berhenti.
    Antrean Chrome sesekali macet: speak() diterima, tetapi onstart tidak
    pernah datang dan tidak ada galat apa pun. Pengawas di bawah mendeteksi
    itu lalu mengulang sekali — inilah beda antara "tombol kadang bisu" dan
    "tombol selalu bunyi". */
function ucapkanSatu(potongan, r, rate, my, onMulai, jauh = false) {
  return new Promise(res => {
    let done = false, denyut = null, jaga = null, awas = null, ulang = 0, mulai = false;

    const fin = ok => {
      if (done) return;
      done = true;
      clearTimeout(jaga); clearTimeout(awas); clearInterval(denyut);
      res({ ok, mulai });
    };

    const kirim = () => {
      const u = new SpeechSynthesisUtterance(potongan);
      u.voice = r.voice;
      u.lang = r.voice.lang;
      u.rate = rate;
      u.onstart = () => { if (!mulai) { mulai = true; clearTimeout(awas); onMulai?.(); } };
      u.onend = () => fin(true);
      u.onerror = e => {
        /* "interrupted"/"canceled" berarti kita sendiri yang menghentikan. */
        if (e.error === 'interrupted' || e.error === 'canceled') return fin(true);
        if (!mulai && ulang < 1) { ulang++; setTimeout(cobaLagi, 60); return; }
        fin(false);
      };
      try { synth.speak(u); } catch { fin(false); return; }

      /* Pengawas antrean macet.
         Ambangnya HARUS jauh di atas waktu nyala mesin bicara. Suara SAPI
         Windows (Andika) diukur butuh sampai 360 md untuk mulai berbunyi;
         ambang 400 md membuat pengawas ini membatalkan ucapan yang
         sebenarnya baik-baik saja lalu mengulanginya — persis penyebab lag
         yang dikeluhkan. Sekarang 1600 md, dan hanya kalau antreannya
         benar-benar kosong (bukan sekadar belum berbunyi). */
      clearTimeout(awas);
      awas = setTimeout(() => {
        if (done || mulai || my !== token) return;
        if (synth.speaking || synth.pending || synth.paused) return;
        if (ulang < 1) { ulang++; cobaLagi(); } else fin(false);
      }, jauh ? 6000 : 1600);
    };

    const cobaLagi = () => {
      if (done || my !== token) return;
      /* Untuk suara daring, cancel() sebelum mengulang justru membunuh
         percobaan kedua. Cukup bangunkan antreannya. */
      try { if (!jauh) synth.cancel(); synth.resume(); } catch {}
      kirim();
    };

    /* Batas aman kalau peramban tidak pernah mengirim onend sama sekali. */
    jaga = setTimeout(() => fin(mulai), (jauh ? 9000 : 3500) + potongan.length * 130);
    kirim();

    /* Chrome menidurkan mesin bicara setelah ±15 detik. Denyut menjaganya. */
    /* Denyut pause/resume adalah penawar untuk Chrome yang menidurkan mesin
       bicara LOKAL setelah ±15 detik. Pada suara daring, pause() justru
       memutus aliran audionya — jadi denyutnya dimatikan di sana. */
    if (!jauh) {
      denyut = setInterval(() => {
        if (my !== token) { fin(false); return; }
        if (synth.speaking && !synth.paused) { try { synth.pause(); synth.resume(); } catch {} }
      }, 5000);
    }
  });
}

/**
 * Ucapkan satu potong dalam bahasa tertentu.
 * @param {string} code kode bahasa
 * @param {{text?:string, rom?:string, rate?:number, onMulai?:Function}} isi
 */
export async function ucap(code, { text = '', rom = '', rate = 0.9, onMulai } = {}) {
  /* Lapisan nol: rekaman asli. Kalau teks ini sudah pernah direkam,
     itu selalu lebih baik daripada apa pun yang bisa dibuat peramban —
     pelafalannya benar dan tidak ada waktu inferensi sama sekali. */
  if (text) {
    const r = await putarRekaman(code, text, { rate: Math.min(1.6, Math.max(0.6, rate + 0.1)), onMulai });
    if (r.ada) {
      return { mode: 'rekaman', voice: null, akurat: true, berbunyi: true, ms: r.ms,
               label: `Rekaman ${NAMA[code] || code}`,
               note: 'Suara rekaman asli — bukan pembaca teks bawaan peramban.' };
    }
  }

  if (!synth) return { mode: 'none', voice: null, label: 'Peramban ini tidak punya pembaca suara' };
  if (!voices.length) await ready();
  const r = resolve(code);
  if (r.mode === 'none' || !r.voice) return { ...r, mode: 'none' };

  let ucapan;
  if (r.mode === 'native') {
    ucapan = text || bersihkanRom(rom);
  } else {
    /* Lapisan cadangan hanya bisa bekerja kalau ada teks Latin. Kalau
       materinya tidak menyertakan romanisasi, bangkitkan sendiri dari
       aksaranya — tanpa ini tombolnya diam untuk sebagian besar materi. */
    let latin = rom;
    if (!latin && perluAlih(code, text)) latin = keLatin(code, text);
    ucapan = bersihkanRom(latin || text);
    if (perluAlih(code, ucapan)) return { ...r, mode: 'tak-terbaca' };
  }
  ucapan = String(ucapan || '').trim();
  if (!ucapan) return { ...r, mode: 'kosong' };

  const my = ++token;
  /* Suara "Online (Natural)" milik Edge diambil lewat jaringan. Jeda 25 md
     yang pas untuk suara SAPI lokal terlalu pendek untuk suara daring —
     permintaan jaringannya keburu diputus dan tombolnya diam. */
  const jauh = r.voice.localService === false;
  const sedang = synth.speaking || synth.pending;
  /* Hanya batalkan kalau memang ada yang sedang berbunyi. Dulu cancel()
     dipanggil TANPA SYARAT — dan untuk suara "Online (Natural)" milik Edge
     itu memutus permintaan jaringan yang baru saja diantre, sehingga
     tombolnya diam meski semua setelan benar. */
  if (sedang) {
    try { synth.cancel(); } catch {}
    await new Promise(res => setTimeout(res, jauh ? 160 : 25));
  }
  if (my !== token) return { ...r, mode: 'batal' };

  let mulai = false;
  const tandaiMulai = () => { if (!mulai) { mulai = true; onMulai?.(); } };
  for (const bagian of potong(ucapan)) {
    if (my !== token) break;
    const h = await ucapkanSatu(bagian, r, rate, my, tandaiMulai, jauh);
    if (h.mulai) mulai = true;
  }
  return { ...r, berbunyi: mulai };
}

/** Uji cepat satu bahasa: benar-benar berbunyi atau tidak. Dipakai halaman audit. */
export async function ujiBahasa(code, contoh) {
  const mulai = performance.now();
  const r = await ucap(code, { ...contoh, rate: 1.6 });
  return { code, mode: r.mode, berbunyi: !!r.berbunyi,
           suara: r.voice ? `${r.voice.name} (${r.voice.lang})` : '—',
           ms: Math.round(performance.now() - mulai) };
}

/** Ucapkan berurutan dengan jeda — dipakai dikte & shadowing. */
let listToken = 0;
export async function ucapDaftar(code, list, jeda = 700, onEach) {
  const my = ++listToken;
  for (let i = 0; i < list.length; i++) {
    if (my !== listToken) return;
    onEach?.(i);
    await ucap(code, list[i]);
    if (my !== listToken) return;
    await new Promise(r => setTimeout(r, jeda));
  }
}
export function stopDaftar() { listToken++; stop(); }

/* ── Saran peramban ───────────────────────────────────────────────
   Chrome di Windows hanya menampilkan suara SAPI yang terpasang di sistem —
   di mesin biasa itu berarti Inggris saja, kadang plus Indonesia. Microsoft
   Edge menambahkan suara "Online (Natural)" miliknya sendiri untuk puluhan
   bahasa, tanpa perlu memasang apa pun. Untuk pengguna Chrome di Windows,
   berpindah peramban adalah perbaikan suara paling murah yang ada. */
export function peramban() {
  const u = navigator.userAgent;
  if (/Edg\//.test(u)) return 'edge';
  if (/OPR\//.test(u)) return 'opera';
  if (/Firefox\//.test(u)) return 'firefox';
  if (/Chrome\//.test(u)) return 'chrome';
  if (/Safari\//.test(u)) return 'safari';
  return 'lain';
}

const diWindows = () =>
  /Windows/i.test(navigator.userAgent) || /Win/i.test(navigator.platform || '');

/**
 * Apakah pindah ke Edge kemungkinan besar memperbaiki suara bahasa ini?
 * @returns {{layak:boolean, alasan:string, ajakan:string}}
 */
export function saranEdge(code) {
  const r = resolve(code);
  if (r.mode === 'rekaman' || r.mode === 'native')
    return { layak: false, alasan: '', ajakan: '' };
  if (!diWindows() || peramban() === 'edge')
    return { layak: false, alasan: '', ajakan: '' };
  return {
    layak: true,
    alasan: `${peramban() === 'chrome' ? 'Chrome' : 'Peramban ini'} hanya memakai suara yang ` +
            `terpasang di Windows, dan suara ${NAMA[code] || code} tidak ada di antaranya.`,
    ajakan: `Microsoft Edge menyediakan suara ${NAMA[code] || code} "Online (Natural)" secara ` +
            `gratis tanpa memasang apa pun. Buka alamat yang sama di Edge, dan halaman ini ` +
            `akan memakai suara aslinya sendiri.`
  };
}

/* ── Petunjuk pemasangan suara ────────────────────────────────── */
export const PANDUAN_PASANG = code => ({
  judul: `Cara memasang suara ${NAMA[code] || code} yang asli`,
  langkah: [
    'Cara tercepat: buka aplikasi ini di Microsoft Edge. Edge menyediakan suara ' +
    '"Online (Natural)" untuk puluhan bahasa tanpa perlu memasang apa pun.',
    'Cara permanen di Windows: Settings → Time & language → Language & region → ' +
    'Add a language → pilih bahasanya → centang "Text-to-speech" saat memilih fitur.',
    'Lalu Settings → Time & language → Speech → Manage voices → Add voices → pilih bahasanya.',
    'Tutup dan buka lagi peramban, kemudian muat ulang halaman ini.'
  ],
  catatan: 'Sampai suara aslinya terpasang, aplikasi tetap bisa dipakai — hanya pelafalannya ' +
           'memakai pendekatan romanisasi.'
});

export const namaBahasa = code => NAMA[code] || code;
