/* ── Penyusun soal simulasi ────────────────────────────────────────
   Merakit satu paket ujian utuh dari materi bahasa yang sudah ada:
   kosakata, tata bahasa berlatihan, frasa, dan bacaan ujian.

   Cetak biru (jumlah soal, durasi, bobot) berasal dari ketentuan resmi
   penyelenggara; isi soalnya dari materi SankaLingo GO sendiri. Dengan begitu
   simulasinya menekan seperti ujian asli tanpa menyalin soal berhak cipta. */

import { shuffle, sample, buatPilihan } from './ui.js';
import { bacaanUntuk } from '../data/lang/exam-bacaan.js';
import { keLatin, perluAlih } from './translit.js';

/* Acak berulang (deterministik) supaya satu sesi tidak berubah saat
   halaman digambar ulang, tetapi sesi baru tetap berbeda. */
function acakan(benih) {
  let x = benih >>> 0 || 1;
  return () => {
    x ^= x << 13; x >>>= 0;
    x ^= x >> 17;
    x ^= x << 5;  x >>>= 0;
    return x / 4294967296;
  };
}
const ambil = (arr, n, rnd) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
};

const rom = (code, teks, sudah) => sudah || (perluAlih(code, teks) ? keLatin(code, teks) : '');

/* Acak posisi pilihan dan pindahkan kunci jawabannya.
   Soal yang ditulis tangan cenderung menaruh jawaban benar di posisi yang
   itu-itu saja — audit menemukan 16 dari 20 latihan Spanyol berkunci B,
   sehingga peserta yang asal memilih B bisa dapat 80% tanpa tahu bahasanya.
   Latihan lewat runQuiz sudah diacak; simulasi ujian dulu belum. */
function acakPilihan(it, rnd) {
  if (it.t !== 'mcq' || !Array.isArray(it.opts) || it.opts.length < 2) return it;
  const urut = it.opts.map((_, i) => i);
  for (let i = urut.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [urut[i], urut[j]] = [urut[j], urut[i]];
  }
  return { ...it, opts: urut.map(i => it.opts[i]), a: urut.indexOf(it.a) };
}

/* ── Bahan mentah dari modul bahasa ───────────────────────────── */
function bahan(code, L) {
  const arr = x => (Array.isArray(x) ? x : []);
  const kata = [];
  arr(L.vocab).forEach(p => arr(p.words).forEach(w => {
    if (w[0] && w[2]) kata.push({ t: w[0], r: w[1] || '', arti: w[2], pak: p.title, lv: p.level });
  }));
  const frasa = [];
  arr(L.phrases).forEach(g => arr(g.items).forEach(it => {
    if (it[0] && it[2]) frasa.push({ t: it[0], r: it[1] || '', arti: it[2], g: g.g });
  }));
  const drill = [];
  arr(L.grammar).forEach(g => arr(g.drills).forEach(d => {
    if (d.t === 'mcq' && Array.isArray(d.opts)) drill.push({ ...d, topik: g.titleId, id: g.id });
  }));
  const contoh = [];
  arr(L.grammar).forEach(g => arr(g.ex).forEach(e => {
    if (e[0] && e[1]) contoh.push({ t: e[0], arti: e[1], r: e[2] || '', topik: g.titleId, id: g.id });
  }));
  return { kata, frasa, drill, contoh };
}

/* ── Kosakata ─────────────────────────────────────────────────── */
function soalKata(code, b, n, rnd) {
  const out = [];
  const pilih = ambil(b.kata, Math.min(n, b.kata.length), rnd);
  pilih.forEach((k, i) => {
    const lain = ambil(b.kata.filter(x => x.arti !== k.arti), 10, rnd);
    if (lain.length < 3) return;
    if (i % 3 === 2) {
      /* arah balik: dari arti ke kata targetnya */
      const pil = buatPilihan(k.t, lain.map(x => x.t));
      if (!pil) return;
      out.push({ t: 'mcq', q: `Kata mana yang berarti “${k.arti}”?`, opts: pil.opts,
        a: pil.a, why: `${k.t}${k.r ? ' (' + k.r + ')' : ''} = ${k.arti}`,
        tag: k.pak, romOpsi: true });
    } else {
      const pil = buatPilihan(k.arti, lain.map(x => x.arti));
      if (!pil) return;
      out.push({ t: 'mcq', q: `Apa arti ${k.t}${k.r ? ` (${k.r})` : ''}?`, opts: pil.opts,
        a: pil.a, why: `${k.t} = ${k.arti}`, tag: k.pak });
    }
  });
  return out;
}

/* ── Tata bahasa ──────────────────────────────────────────────── */
function soalGrammar(code, b, n, rnd) {
  const out = [];
  ambil(b.drill, Math.min(n, b.drill.length), rnd).forEach(d => {
    out.push(acakPilihan({ t: 'mcq', q: d.q, opts: d.opts, a: d.a,
      why: d.why || `Topik: ${d.topik}`, tag: d.topik }, rnd));
  });
  /* Kalau latihan tata bahasanya kurang, buat soal rumpang dari contoh kalimat. */
  if (out.length < n) {
    ambil(b.contoh, n - out.length, rnd).forEach(c => {
      const kata2 = c.t.split(/(\s+)/).filter(x => x.trim().length > 1);
      if (kata2.length < 2) return;
      const target = kata2[Math.floor(rnd() * kata2.length)];
      const bolong = c.t.replace(target, '_____');
      const salah = ambil(b.contoh.filter(x => x !== c), 10, rnd)
        .map(x => (x.t.split(/\s+/).find(w => w.length > 1) || x.t).slice(0, 12));
      if (salah.length < 3) return;
      const pil = buatPilihan(target, salah);
      if (!pil) return;
      out.push({ t: 'mcq', q: `Lengkapi: ${bolong}`, opts: pil.opts, a: pil.a,
        why: `Kalimat utuh: ${c.t} — ${c.arti}`, tag: c.topik });
    });
  }
  return out.slice(0, n);
}

/* ── Menyimak ─────────────────────────────────────────────────── */
function soalSimak(code, b, n, rnd) {
  const sumber = [...b.frasa, ...b.kata].filter(x => x.t && x.arti);
  const out = [];
  ambil(sumber, Math.min(n, sumber.length), rnd).forEach((s, i) => {
    const audio = { text: s.t, rom: rom(code, s.t, s.r) };
    if (i % 2 === 0) {
      const lain = ambil(sumber.filter(x => x.arti !== s.arti), 10, rnd);
      if (lain.length < 3) return;
      const pil = buatPilihan(s.arti, lain.map(x => x.arti));
      if (!pil) return;
      out.push({ t: 'mcq', q: 'Dengarkan, lalu pilih artinya.', opts: pil.opts,
        a: pil.a, audio, why: `Yang diputar: ${s.t} = ${s.arti}`, tag: 'Menyimak' });
    } else {
      const lain = ambil(sumber.filter(x => x.t !== s.t), 10, rnd);
      if (lain.length < 3) return;
      const pil = buatPilihan(s.t, lain.map(x => x.t));
      if (!pil) return;
      out.push({ t: 'mcq', q: 'Dengarkan, lalu pilih yang kamu dengar.', opts: pil.opts,
        a: pil.a, audio, why: `Yang diputar: ${s.t} = ${s.arti}`,
        tag: 'Menyimak', romOpsi: true });
    }
  });
  return out;
}

/* ── Membaca ──────────────────────────────────────────────────── */
function soalBaca(code, b, n, rnd) {
  const out = [];
  const teks = bacaanUntuk(code);
  teks.forEach(bc => {
    bc.soal.forEach((s, i) => {
      out.push(acakPilihan({ t: 'mcq', q: s.q, opts: s.opts, a: s.a, why: s.why,
        tag: bc.judul, bacaan: i === 0 ? bc : null, bacaanId: bc.id }, rnd));
    });
  });
  /* Sisanya: pemahaman kalimat pendek dari contoh tata bahasa & frasa. */
  if (out.length < n) {
    const kalimat = [...b.contoh, ...b.frasa].filter(x => x.arti);
    ambil(kalimat, n - out.length, rnd).forEach(k => {
      const lain = ambil(kalimat.filter(x => x.arti !== k.arti), 10, rnd);
      if (lain.length < 3) return;
      const pil = buatPilihan(k.arti, lain.map(x => x.arti));
      if (!pil) return;
      out.push({ t: 'mcq', q: `Apa maksud kalimat berikut?\n\n${k.t}`, opts: pil.opts,
        a: pil.a, why: `${k.t} — ${k.arti}`, tag: k.topik || 'Pemahaman' });
    });
  }
  return out.slice(0, n);
}

/* ── Menulis ──────────────────────────────────────────────────── */
const TUGAS_TULIS = {
  ko: [['자기소개를 쓰세요.', 'Perkenalkan dirimu: nama, asal, pekerjaan, dan satu hal yang kamu suka.', 80],
       ['주말에 무엇을 했습니까?', 'Ceritakan akhir pekanmu dalam bentuk lampau.', 150],
       ['환경을 지키기 위해 개인이 할 수 있는 일에 대해 쓰십시오.',
        'Tulis esai: apa yang bisa dilakukan perorangan untuk menjaga lingkungan.', 600]],
  ja: [['自己紹介を書いてください。', 'Tulis perkenalan diri memakai です/ます.', 80],
       ['昨日したことを書いてください。', 'Ceritakan kegiatan kemarin dengan bentuk lampau.', 150],
       ['インターネットの利点と欠点について書いてください。',
        'Tulis pendapatmu tentang untung rugi internet.', 400]],
  zh: [['请介绍你自己。', 'Perkenalkan dirimu: nama, negara, pekerjaan, hobi.', 60],
       ['请写一写你的一天。', 'Ceritakan satu harimu dari pagi sampai malam.', 120],
       ['请就"网上购物"写一篇短文。', 'Tulis karangan pendek tentang belanja daring.', 300]],
  ar: [['اُكْتُبْ تَعْريفاً عَنْ نَفْسِك.', 'Perkenalkan dirimu: nama, negara, keluarga, pekerjaan.', 60],
       ['اُكْتُبْ عَنْ يَوْمِكَ الدِّراسِيّ.', 'Ceritakan harimu di sekolah atau kampus.', 120],
       ['اُكْتُبْ رَأْيَكَ في أَهَمِّيَّةِ تَعَلُّمِ اللُّغات.',
        'Tulis pendapatmu tentang pentingnya belajar bahasa.', 250]],
  ru: [['Напишите о себе.', 'Perkenalkan dirimu: nama, kota, pekerjaan, keluarga.', 60],
       ['Опишите свой обычный день.', 'Gambarkan hari biasamu.', 120],
       ['Напишите письмо другу о своём городе.', 'Tulis surat kepada teman tentang kotamu.', 200]],
  de: [['Stellen Sie sich vor.', 'Perkenalkan dirimu: nama, tempat tinggal, pekerjaan, hobi.', 50],
       ['Schreiben Sie eine E-Mail: Sie sagen einen Termin ab.',
        'Tulis surel membatalkan janji, sertakan alasan dan tawaran waktu baru.', 120],
       ['Schreiben Sie einen Forumsbeitrag: Sollten Städte autofrei werden?',
        'Tulis komentar forum: haruskah pusat kota bebas mobil?', 200]],
  fr: [['Présentez-vous.', 'Perkenalkan dirimu: nama, kota, pekerjaan, minat.', 50],
       ['Écrivez un message pour inviter un ami au cinéma.',
        'Tulis pesan mengajak teman ke bioskop: hari, jam, tempat bertemu.', 100],
       ['Donnez votre opinion : faut-il interdire les téléphones à l’école ?',
        'Tulis pendapatmu: perlukah ponsel dilarang di sekolah?', 180]],
  es: [['Preséntate.', 'Perkenalkan dirimu: nama, asal, pekerjaan, keluarga.', 50],
       ['Escribe un correo para reservar una habitación de hotel.',
        'Tulis surel memesan kamar hotel: tanggal, jumlah orang, permintaan khusus.', 100],
       ['Escribe tu opinión sobre el trabajo desde casa.',
        'Tulis pendapatmu tentang bekerja dari rumah.', 180]]
};

const RUBRIK = [
  'Menjawab semua yang diminta soal',
  'Kalimatnya tersusun rapi dan mudah diikuti',
  'Kosakata sesuai tingkat, tidak berulang-ulang',
  'Tata bahasa dan ejaan sebagian besar tepat',
  'Panjangnya memenuhi ketentuan'
];

function soalTulis(code, n, tingkatIdx) {
  const daftar = TUGAS_TULIS[code] || TUGAS_TULIS.de;
  const out = [];
  for (let i = 0; i < n; i++) {
    const [q, petunjuk, min] = daftar[Math.min(i + (tingkatIdx > 1 ? 1 : 0), daftar.length - 1)];
    out.push({ t: 'write', q, petunjuk, min, rubrik: RUBRIK, tag: 'Menulis' });
  }
  return out;
}

/* ── Perakitan ────────────────────────────────────────────────── */
/**
 * Rakit satu paket simulasi.
 * @param {string} code kode bahasa
 * @param {object} L modul bahasa
 * @param {object} tingkat satu entri dari BLUEPRINTS[..].tingkat
 * @param {number} benih angka acak; sesi berbeda → paket berbeda
 * @param {boolean} ringkas pangkas jumlah soal jadi ±30% (mode latihan singkat)
 */
export function bangunUjian(code, L, tingkat, benih = 1, ringkas = false) {
  const rnd = acakan(benih);
  const b = bahan(code, L);
  const idx = tingkat.__idx || 0;

  const sections = tingkat.sections.map(sec => {
    const n = ringkas && sec.kind !== 'write'
      ? Math.max(5, Math.round(sec.count * 0.3))
      : sec.count;
    let items = [];
    if (sec.kind === 'vocab')   items = soalKata(code, b, n, rnd);
    if (sec.kind === 'grammar') items = soalGrammar(code, b, n, rnd);
    if (sec.kind === 'listen')  items = soalSimak(code, b, n, rnd);
    if (sec.kind === 'read')    items = soalBaca(code, b, n, rnd);
    if (sec.kind === 'write')   items = soalTulis(code, ringkas ? 1 : sec.count, idx);
    /* Kalau bahan pilihan ganda tidak cukup, ulangi dengan susunan pilihan
       berbeda — lebih baik daripada bagian yang jumlah soalnya meleset dari
       format aslinya. Tugas menulis tidak pernah digandakan begini. */
    if (sec.kind !== 'write') {
      let putar = 0;
      while (items.length && items.length < n && putar < n * 2) {
        const asal = items[putar % items.length];
        putar++;
        if (!Array.isArray(asal.opts)) continue;
        /* Indeks kunci diambil dari POSISI setelah diacak, bukan lewat
           indexOf — indexOf menunjuk salinan pertama, jadi ia rusak persis
           ketika ada dua pilihan bertulisan sama. */
        const urut = shuffle(asal.opts.map((teks, k) => ({ teks, kunci: k === asal.a })));
        items.push({ ...asal, opts: urut.map(x => x.teks), a: urut.findIndex(x => x.kunci) });
      }
    }
    const menit = ringkas && sec.kind !== 'write'
      ? Math.max(3, Math.round(sec.minutes * 0.35)) : sec.minutes;
    return { ...sec, count: items.length, minutes: menit, items };
  });

  return { code, tingkat, sections, ringkas,
           totalSoal: sections.reduce((a, s) => a + s.items.length, 0),
           totalMenit: sections.reduce((a, s) => a + s.minutes, 0) };
}

/* ── Penilaian ────────────────────────────────────────────────── */
/**
 * Hitung skor mengikuti skala resmi ujiannya.
 * @param paket hasil bangunUjian
 * @param jawaban { 'sec:idx': number|string }
 */
export function nilai(paket, jawaban) {
  const perBagian = paket.sections.map(sec => {
    const soalNilai = sec.items.filter(x => x.t === 'mcq');
    let benar = 0;
    soalNilai.forEach((it, i) => { if (jawaban[`${sec.id}:${i}`] === it.a) benar++; });
    /* Tugas menulis dinilai sendiri oleh peserta lewat rubrik. */
    const tulis = sec.items.filter(x => x.t === 'write');
    let poinTulis = 0, maksTulis = 0;
    tulis.forEach((_, i) => {
      const c = jawaban[`${sec.id}:tulis:${i}`];
      maksTulis += 5;
      poinTulis += Array.isArray(c) ? c.filter(Boolean).length : 0;
    });
    const bobotObjektif = soalNilai.length ? benar / soalNilai.length : 0;
    const bobotTulis = maksTulis ? poinTulis / maksTulis : 0;
    const porsi = soalNilai.length && maksTulis ? 0.5 : (soalNilai.length ? 1 : 0);
    const rasio = soalNilai.length && maksTulis
      ? bobotObjektif * porsi + bobotTulis * (1 - porsi)
      : (soalNilai.length ? bobotObjektif : bobotTulis);
    return { id: sec.id, nama: sec.name, benar, dari: soalNilai.length,
             tulis: tulis.length, rasio, poin: Math.round(rasio * sec.points) };
  });

  const t = paket.tingkat;
  const poin = perBagian.reduce((a, s) => a + s.poin, 0);
  const maks = paket.sections.reduce((a, s) => a + s.points, 0);
  const skala = t.total || maks;
  const skor = Math.round((poin / maks) * skala);

  let lulus = null, catatan = '';
  if (t.ambang) {                       /* TOPIK: tingkat dari total skor */
    let capai = null;
    t.ambang.forEach(([nama, batas]) => { if (skor >= batas) capai = nama; });
    lulus = !!capai;
    catatan = capai ? `Skor ini setara ${capai}.`
                    : `Belum mencapai ${t.ambang[0][0]} (butuh ${t.ambang[0][1]} dari ${skala}).`;
  } else if (t.lulus) {
    const bagianKurang = t.minBagian
      ? perBagian.filter(s => {
          const sec = paket.sections.find(x => x.id === s.id);
          const minimal = t.minBagian <= 100 && t.minBagian > 20
            ? (t.minBagian / 100) * sec.points        /* TORFL: persen */
            : t.minBagian;                            /* JLPT/DELF: poin */
          return s.poin < minimal;
        })
      : [];
    lulus = skor >= t.lulus && bagianKurang.length === 0;
    catatan = bagianKurang.length
      ? `Total cukup, tetapi bagian ${bagianKurang.map(s => s.nama).join(', ')} di bawah ambang minimum.`
      : (lulus ? `Lulus — ambangnya ${t.lulus} dari ${skala}.`
               : `Belum lulus — butuh ${t.lulus} dari ${skala}.`);
  }

  return { perBagian, skor, skala, lulus, catatan,
           persen: Math.round((poin / maks) * 100) };
}
