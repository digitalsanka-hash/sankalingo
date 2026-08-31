/* Kemajuan & pengaturan. */

import { $, $$, el, html, raw, esc, toast, ring, radar, heatmap, sparkBars, nf, tanggal, confirmDialog } from '../ui.js';
import { state, mutate, set, xpLevel, liveStreak, todayKey, unitPct, exportData, importData, resetAll,
         ringkasCadangan, ringkasSekarang } from '../state.js';
import * as Awan from '../awan.js';
import { stats as srsStats, forecast } from '../srs.js';
import { englishVoices, rankedEnglishVoices, voiceQuality, VOICE_STYLES, say, loadVoices,
         listen, speechDiagnostics, chunkText, stopSpeaking } from '../speech.js';
import { ico } from '../icons.js';
import { LANGS } from '../../data/lang/registry.js';
import { currentLang } from '../langctx.js';
import { ready as voiceReady, resolve as voiceResolve, suaraUntuk, allVoices as semuaSuara,
         voicePilihan, setVoicePilihan, ucap, namaBahasa, PANDUAN_PASANG } from '../voice.js';
import { LEVELS, ALL_LESSONS, GRAMMAR, ALL_PACKS, CONTENT_STATS } from '../data.js';
import { jumlahPelajaranInggris } from '../course.js';
import { comfort, setComfort, resetComfort, PILIHAN,
         sudahTerpasang, bisaDipasang, pasangAplikasi } from '../comfort.js';
import { lupakanTipTertutup } from '../comfortui.js';
import { ulangiPandu, mulaiPandu } from './onboard.js';
import { didukung as luringDidukung, siapkanLuring, ruangSimpanan,
         amankanPenyimpanan, hapusSimpanan, ukuranBerkas, onPanas, BERKAS_MATERI } from '../luring.js';

export function renderStats() {
  const s = state();
  const lv = xpLevel();
  const st = srsStats();
  /* Lihat catatan yang sama di js/views/dashboard.js: kunci pelajaran
     kedelapan bahasa lain berawalan 'L:' dan tidak boleh ikut dihitung
     sebagai kemajuan kurikulum Inggris. */
  const doneLessons = jumlahPelajaranInggris(s.lessons);
  const last30 = Array.from({ length: 30 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (29 - i));
    return s.history[todayKey(d)]?.xp || 0;
  });
  const totalMin = Object.values(s.history).reduce((a, h) => a + (h.min || 0), 0);
  const activeDays = Object.keys(s.history).length;
  const maxSkill = Math.max(1, ...Object.values(s.skills));
  const skillPct = {
    Simak: Math.round(s.skills.listening / maxSkill * 100),
    Bicara: Math.round(s.skills.speaking / maxSkill * 100),
    Baca: Math.round(s.skills.reading / maxSkill * 100),
    Tulis: Math.round(s.skills.writing / maxSkill * 100),
    Grammar: Math.round(s.skills.grammar / maxSkill * 100),
    Kosakata: Math.round(s.skills.vocab / maxSkill * 100)
  };
  const weakGrammar = GRAMMAR.filter(g => {
    const q = s.quiz['g:' + g.id]; return q && q.best < 80;
  });

  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">Akun</span>
      <h1>Kemajuan Kamu</h1>
      <p>Semua data tersimpan di peramban ini saja. Ekspor berkala kalau kamu ingin memindahkannya.</p>
    </div>
    ${raw(ring(lv.pct, { size: 96, label: 'Lv ' + lv.lv, sub: `${s.xp} XP` }))}
  </div>

  <div class="grid grid--4" style="margin-bottom:var(--s-5)">
    <div class="stat"><div class="stat__k">Rentetan</div><div class="stat__v">${liveStreak()}</div>
      <div class="stat__note">rekor ${s.streak.best} hari</div></div>
    <div class="stat"><div class="stat__k">Total XP</div><div class="stat__v">${nf(s.xp)}</div>
      <div class="stat__note">tingkat ${lv.lv} · ${lv.next - s.xp} lagi ke tingkat berikutnya</div></div>
    <div class="stat"><div class="stat__k">Waktu belajar</div><div class="stat__v">${Math.round(totalMin / 60)}j</div>
      <div class="stat__note">${totalMin} menit di ${activeDays} hari aktif</div></div>
    <div class="stat"><div class="stat__k">Pelajaran</div><div class="stat__v">${doneLessons}</div>
      <div class="stat__note">dari ${ALL_LESSONS.length} (${Math.round(doneLessons / ALL_LESSONS.length * 100)}%)</div></div>
  </div>

  <div class="grid grid--2">
    <div class="card">
      <div class="card__title">Aktivitas 30 hari</div>
      <div style="margin:var(--s-4) 0">${raw(sparkBars(last30, { color: 'var(--brand)' }))}</div>
      <div style="overflow-x:auto">${raw(heatmap(s.history, 119))}</div>
    </div>
    <div class="card">
      <div class="card__title">Peta kemampuan</div>
      <div style="display:grid;place-items:center;margin-top:var(--s-3)">${raw(radar(skillPct, { size: 250 }))}</div>
    </div>
  </div>

  <div class="grid grid--2" style="margin-top:var(--s-4)">
    <div class="card">
      <div class="card__title">Kartu hafalan</div>
      <div class="grid grid--3" style="margin-top:var(--s-4)">
        <div class="stat"><div class="stat__k">Total</div><div class="stat__v">${st.total}</div></div>
        <div class="stat"><div class="stat__k">Matang</div><div class="stat__v">${st.mature}</div></div>
        <div class="stat"><div class="stat__k">Jatuh tempo</div><div class="stat__v">${st.due}</div></div>
      </div>
      <div style="margin-top:var(--s-4)">${raw(sparkBars(forecast(14), { color: 'var(--ok)' }))}</div>
      <p class="xs muted">Perkiraan beban 14 hari ke depan</p>
    </div>
    <div class="card">
      <div class="card__title">Kemajuan per level</div>
      <div class="stack stack--sm" style="margin-top:var(--s-4)">
        ${LEVELS.map(l => {
          const p = Math.round(l.units.reduce((a, u) => a + unitPct(u), 0) / l.units.length);
          return `<div class="row"><span class="badge badge--lv lv-${l.id}" style="width:34px;justify-content:center">${l.id}</span>
            <div class="bar" style="flex:1"><i style="width:${p}%"></i></div>
            <span class="small num muted" style="width:38px;text-align:right">${p}%</span></div>`;
        }).join('')}
      </div>
    </div>
  </div>

  <!-- Tautannya WAJIB berawalan #/en. Topik di daftar ini berasal dari
       GRAMMAR bahasa Inggris, tetapi halaman Kemajuan juga dibuka dari
       dalam delapan bahasa lain, dan tautan tanpa awalan bahasa dialihkan
       ke bahasa yang sedang aktif. ROUTES_LANG hanya punya /^grammar$/ —
       tanpa /^grammar\/(.+)$/ — sehingga dari bahasa mana pun selain
       Inggris tautan ini berujung "Halaman tidak ditemukan". -->
  ${raw(weakGrammar.length ? `<div class="card" style="margin-top:var(--s-4)">
    <div class="card__title">⚠ Topik yang perlu diulang (${weakGrammar.length})</div>
    <p class="small soft" style="margin:.3rem 0 1rem">Skor terbaikmu masih di bawah 80% pada topik berikut.</p>
    <div class="pill-row">${weakGrammar.map(g =>
      `<a class="badge badge--warn" href="#/en/grammar/${g.id}">${esc(g.titleId)} · ${s.quiz['g:' + g.id].best}%</a>`).join('')}</div>
  </div>` : '')}

  ${raw(s.exams.length ? `<div class="card" style="margin-top:var(--s-4)">
    <div class="card__title">Riwayat simulasi ujian</div>
    <div class="table-wrap" style="margin-top:var(--s-4)"><table class="tbl">
      <thead><tr><th>Tanggal</th><th>Ujian</th><th>Benar</th><th>Perkiraan skor</th></tr></thead>
      <tbody>${s.exams.slice(0, 12).map(x => `<tr><td>${tanggal(x.at)}</td>
        <td>${esc((x.exam || '').toUpperCase())}</td><td>${x.right}/${x.total}</td>
        <td><b>${esc(String(x.score))}</b></td></tr>`).join('')}</tbody>
    </table></div></div>` : '')}

  ${raw(s.saved.length ? `<div class="card" style="margin-top:var(--s-4)">
    <div class="card__title">★ Tersimpan</div>
    <div class="pill-row" style="margin-top:.8rem">
      ${s.saved.map(x => `<a class="badge badge--brand" href="${esc(x.href)}">${esc(x.t)}</a>`).join('')}</div>
  </div>` : '')}`;
}

/* ── Pengaturan ───────────────────────────────────────────────── */
/* ── Kartu penyelarasan awan ──────────────────────────────────────
   Seluruhnya menghilang kalau js/awan-config.js belum diisi, supaya
   aplikasi yang dipakai sendirian tidak dibebani pilihan yang tak
   berguna baginya. */
function kartuAwan() {
  if (!Awan.awanSiap()) return '';
  const email = Awan.masukSebagai();
  const kapan = Awan.terakhirSinkron();
  const jarak = kapan ? waktuLalu(kapan) : null;

  /* Sejak ada gerbang, halaman ini hanya bisa dibuka oleh yang sudah
     masuk. Satu-satunya cara sampai ke sini tanpa email adalah sesi
     luring yang belum sempat diperiksa — jadi yang perlu ditawarkan
     bukan formulir masuk, melainkan penjelasan singkat. */
  if (!email) return `
  <div class="card" style="margin-top:var(--s-4)">
    <div class="card__title">Selaraskan antar perangkat</div>
    <p class="small soft" style="margin:.4rem 0 0">
      Sesi ini belum terhubung ke server. Sambungkan internet lalu muat ulang
      halaman untuk menyelaraskan kemajuanmu.</p>
  </div>`;

  return `
  <div class="card" style="margin-top:var(--s-4)">
    <div class="card__title">Selaraskan antar perangkat</div>
    <p class="small soft" style="margin:.4rem 0 1rem">
      Masuk sebagai <b>${esc(email)}</b>${jarak ? ` · terakhir diselaraskan ${esc(jarak)}` : ''}.
      Buka aplikasi ini di perangkat lain dan masuk dengan email yang sama.</p>
    <div class="row">
      <button class="btn btn--primary" id="awanSinkron">Selaraskan sekarang</button>
      <button class="btn btn--soft" id="awanSandi">Ganti kata sandi</button>
      <button class="btn btn--ghost" id="awanKeluar">Keluar</button>
    </div>
    <div id="awanPesan" class="small" style="margin-top:.6rem"></div>
  </div>`;
}

const waktuLalu = t => {
  const d = Math.round((Date.now() - t) / 1000);
  if (d < 60) return 'barusan';
  if (d < 3600) return `${Math.round(d / 60)} menit lalu`;
  if (d < 86400) return `${Math.round(d / 3600)} jam lalu`;
  return `${Math.round(d / 86400)} hari lalu`;
};

/* Kartu admin hanya muncul untuk pemilik. Tidak digabung ke menu
   samping karena menu dibangun serentak sementara profil harus diambil
   dari jaringan; menunggu jaringan cuma untuk menggambar satu tautan
   akan menunda seluruh menu. */
/* Kartu lisensi: tempat pembeli menempel kode aksesnya.

   Diletakkan tepat di bawah kartu penyelarasan karena urutannya memang
   begitu — masuk dulu dengan email, baru kodenya bisa ditempelkan.
   Hak akses menempel pada AKUN, bukan pada kode, jadi tanpa akun tidak
   ada tempat untuk menaruhnya. */
async function isiKartuLisensi() {
  const kotak = $('#kartuLisensi');
  if (!kotak || !Awan.awanSiap()) return;

  const gambar = p => {
    if (!Awan.masukSebagai()) {
      kotak.innerHTML = `
      <div class="card" style="margin-top:var(--s-4)">
        <div class="card__title">Kode akses</div>
        <p class="small soft" style="margin-top:.4rem">
          Sudah beli SankaLingo GO? Masuk dulu dengan emailmu di kotak di atas,
          lalu kode aksesnya bisa ditempelkan di sini.</p>
      </div>`;
      return;
    }
    if (p?.kode) {
      const sampai = p.akses_sampai
        ? `berlaku sampai ${esc(new Date(p.akses_sampai).toLocaleDateString('id-ID',
            { day: 'numeric', month: 'long', year: 'numeric' }))}`
        : 'berlaku selamanya';
      kotak.innerHTML = `
      <div class="card" style="margin-top:var(--s-4)">
        <div class="card__title">Kode akses</div>
        <p class="small soft" style="margin-top:.4rem">
          <span class="badge badge--ok">aktif</span>
          Kode <b>${esc(p.kode)}</b> sudah ditebus — ${sampai}.</p>
      </div>`;
      return;
    }
    kotak.innerHTML = `
    <div class="card" style="margin-top:var(--s-4)">
      <div class="card__title">Kode akses</div>
      <p class="small soft" style="margin:.4rem 0 1rem">
        Tempel kode yang kamu terima setelah membeli. Sekali ditebus, kodenya
        menempel pada akun ini selamanya.</p>
      <div class="row">
        <input type="text" id="lisKode" class="inp" placeholder="SL-XXXX-XXXX"
               autocomplete="off" spellcheck="false"
               style="flex:1;min-width:11rem;text-transform:uppercase" />
        <button class="btn btn--primary" id="lisTebus">Aktifkan</button>
      </div>
      <div id="lisPesan" class="small" style="margin-top:.6rem"></div>
    </div>`;

    const tombol = $('#lisTebus'), isian = $('#lisKode'), pesan = $('#lisPesan');
    const kirim = async () => {
      const kode = isian.value.trim();
      if (!kode) { pesan.textContent = 'Kodenya belum diisi.'; return; }
      tombol.disabled = true;
      pesan.textContent = 'Memeriksa…';
      try {
        const baru = await (await import('../lisensi.js')).tebus(kode);
        toast('Akses aktif. Selamat belajar!');
        gambar(baru);
      } catch (e) {
        /* Pesan dari server dipakai apa adanya: ia sudah membedakan
           "kode tidak sah" dari "sesi kedaluwarsa", dan menggantinya
           dengan satu pesan umum justru menyembunyikan bedanya. */
        pesan.textContent = e.message;
        pesan.style.color = 'var(--bad)';
        tombol.disabled = false;
      }
    };
    tombol.onclick = kirim;
    isian.onkeydown = e => { if (e.key === 'Enter') kirim(); };
  };

  let p = null;
  try { p = await (await import('../lisensi.js')).profil(); } catch { /* biar null */ }
  gambar(p);
}

async function isiKartuAdmin() {
  const kotak = $('#kartuAdmin');
  if (!kotak || !Awan.awanSiap() || !Awan.masukSebagai()) return;
  let p = null;
  try { p = await (await import('../lisensi.js')).profil(); } catch { return; }
  if (!p?.admin) return;
  kotak.innerHTML = `
  <div class="card" style="margin-top:var(--s-4)">
    <div class="card__title">Panel admin</div>
    <p class="small soft" style="margin:.4rem 0 1rem">
      Cetak kode akses, tandai kode yang sudah dikirim, dan atur masa aktif pembeli.</p>
    <a class="btn btn--primary" href="#/admin">Buka panel admin</a>
  </div>`;
}

export function renderSettings() {
  const s = state();
  loadVoices().then(() => { const sel = $('#voiceSel'); if (sel) fillVoices(sel); });

  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">Pengaturan</span>
      <h1>Sesuaikan SankaLingo GO</h1>
      <p>${Awan.awanSiap() ? 'Kemajuanmu tersimpan di peramban ini, dan bisa diselaraskan antar perangkat.' : 'Semua data belajar tersimpan lokal di peramban ini. Tidak ada server, tidak ada akun.'}</p>
    </div>
  </div>

  <div class="grid grid--2">
    <div class="card">
      <div class="card__title">Profil</div>
      <div class="stack" style="margin-top:var(--s-4)">
        <div class="field"><label for="nm">Nama panggilan</label>
          <input class="input" id="nm" value="${esc(s.name)}" placeholder="Namamu" /></div>
        <div class="field"><label for="lvSel">Level saat ini</label>
          <select class="select" id="lvSel">
            ${LEVELS.map(l => `<option value="${l.id}" ${s.level === l.id ? 'selected' : ''}>${l.id} — ${esc(l.nameId)}</option>`).join('')}
          </select></div>
        <div class="field"><label for="goalSel">Target ujian</label>
          <select class="select" id="goalSel">
            ${[['general','Umum / belum ditentukan'],['ielts','IELTS'],['toefl','TOEFL iBT'],['toeic','TOEIC']]
              .map(([v, t]) => `<option value="${v}" ${s.goal === v ? 'selected' : ''}>${t}</option>`).join('')}
          </select></div>
        <div class="field"><label for="tgt">Skor target (opsional)</label>
          <input class="input" id="tgt" value="${esc(s.targetScore)}" placeholder="mis. IELTS 7.0" /></div>
        <div class="field"><label for="dm">Menit belajar per hari: <b id="dmV">${s.dailyMin}</b></label>
          <input type="range" id="dm" min="10" max="180" step="5" value="${s.dailyMin}" /></div>
      </div>
    </div>

    <div class="card">
      <div class="card__title">Suara & tampilan</div>
      <div class="stack" style="margin-top:var(--s-4)">
        <div class="field"><label for="styleSel">Gaya bicara</label>
          <select class="select" id="styleSel">
            ${Object.entries(VOICE_STYLES).map(([k, v]) =>
              `<option value="${k}" ${s.settings.style === k ? 'selected' : ''}>${esc(v.label)}</option>`).join('')}
          </select>
          <p class="xs muted" style="margin-top:.3rem">Gaya mengatur kecepatan, nada, dan panjang jeda antar kalimat.</p></div>
        <div class="field"><label for="voiceSel">Suara pembaca — ${esc(namaBahasa(currentLang()))}</label>
          <select class="select" id="voiceSel"><option>Memuat…</option></select>
          <div id="voiceHint" class="xs muted" style="margin-top:.3rem"></div>
          <button class="btn btn--soft btn--sm" id="testVoice" style="margin-top:.5rem">Uji suara</button></div>
        <div class="field"><label for="rate">Penyetel kecepatan: <b id="rateV">${s.settings.rate}</b>×</label>
          <input type="range" id="rate" min="0.6" max="1.4" step="0.02" value="${s.settings.rate}" />
          <p class="xs muted" style="margin-top:.3rem">Dikalikan dengan gaya bicara di atas. Biarkan 1,00 kecuali perlu.</p></div>
        <label class="switch"><input type="checkbox" id="autoSpk" ${s.settings.autoSpeak ? 'checked' : ''} />
          <span>Bacakan otomatis pada kartu & dikte</span></label>
        <label class="switch"><input type="checkbox" id="snd" ${s.settings.sound ? 'checked' : ''} />
          <span>Bunyi benar/salah saat latihan</span></label>
        <p class="xs muted">Tema, ukuran teks, kontras, dan jenis huruf diatur di kartu
          <b>Kenyamanan &amp; keterjangkauan</b> di bawah.</p>
      </div>
    </div>
  </div>

  ${kartuKenyamanan()}

  <div class="card" style="margin-top:var(--s-4)">
    <div class="card__title">${raw(ico('volume'))} Suara untuk tiap bahasa</div>
    <p class="small soft" style="margin:.4rem 0 0">
      Bila suara asli sebuah bahasa belum terpasang, aplikasi otomatis membacakan
      <b>romanisasinya</b> dengan suara Indonesia — supaya semua tombol suara tetap berguna.
      Kamu juga bisa menunjuk suara tertentu secara manual di sini.</p>
    <div class="voice-rows" id="voiceRows"></div>
    <details style="margin-top:var(--s-4)">
      <summary class="b" style="cursor:pointer">Cara memasang suara asli yang hilang</summary>
      <ol class="stack stack--sm" style="margin:.6rem 0 0 1.1rem">
        ${PANDUAN_PASANG('ko').langkah.map(x => `<li class="small soft">${esc(x)}</li>`).join('')}
      </ol>
    </details>
  </div>

  <div class="card" style="margin-top:var(--s-4)">
    <div class="card__title">${raw(ico('stethoscope'))} Diagnosis suara</div>
    <p class="small soft" style="margin:.4rem 0 1rem">
      Jalankan ini kalau ada tombol suara yang tidak berbunyi atau perekaman gagal.</p>
    <div class="grid grid--4" id="diagBox"></div>
    <div class="row" style="margin-top:var(--s-4)">
      <a class="btn btn--primary" href="#/suara">Audit suara semua bahasa →</a>
      <button class="btn btn--soft" id="diagTts">🔊 Uji pembacaan (teks panjang)</button>
      <button class="btn btn--soft" id="diagStt">🎙 Uji mikrofon</button>
    </div>
    <div id="diagOut" class="small" style="margin-top:var(--s-3)"></div>
  </div>

  ${raw(kartuAwan())}
  <div id="kartuLisensi"></div>
  <div id="kartuAdmin"></div>

  <div class="card" style="margin-top:var(--s-4)">
    <div class="card__title">Data</div>
    <p class="small soft" style="margin:.4rem 0 1rem">
      Ekspor menghasilkan berkas JSON berisi seluruh kemajuanmu — kartu hafalan, skor, rencana, dan catatan.</p>
    <div class="row">
      <button class="btn btn--soft" id="expBtn">⬇ Ekspor kemajuan</button>
      <label class="btn btn--soft" for="impFile">⬆ Impor berkas</label>
      <input type="file" id="impFile" accept="application/json" class="sr-only" />
      <button class="btn btn--danger" id="resetBtn">🗑 Hapus semua data</button>
    </div>
  </div>

  <div class="card" style="margin-top:var(--s-4)">
    <div class="card__title">Tentang isi aplikasi</div>
    <div class="grid grid--4" style="margin-top:var(--s-4)">
      ${[['Entri kosakata', CONTENT_STATS.kata], ['Topik tata bahasa', CONTENT_STATS.grammar],
         ['Butir latihan', CONTENT_STATS.drill], ['Pelajaran', CONTENT_STATS.pelajaran],
         ['Unit', CONTENT_STATS.unit], ['Bacaan', CONTENT_STATS.bacaan],
         ['Butir simakan', CONTENT_STATS.simakan], ['Soal ujian', CONTENT_STATS.soalUjian]]
        .map(([k, v]) => `<div class="stat"><div class="stat__k">${k}</div><div class="stat__v">${nf(v)}</div></div>`).join('')}
    </div>
    <p class="xs muted" style="margin-top:var(--s-4)">
      Pintasan papan tik: <kbd>/</kbd> cari · <kbd>g</kbd> lalu <kbd>h/c/g/v/r/e/p/s</kbd> untuk pindah halaman ·
      <kbd>Spasi</kbd> membalik kartu · <kbd>1</kbd>–<kbd>4</kbd> menilai kartu · <kbd>A</kbd>–<kbd>D</kbd> menjawab pilihan ganda.</p>
  </div>`;

  const on = (id, ev, fn) => { const n = $('#' + id); if (n) n.addEventListener(ev, fn); };
  on('nm', 'input', e => mutate(s2 => { s2.name = e.target.value; }));
  on('lvSel', 'change', e => mutate(s2 => { s2.level = e.target.value; }));
  on('goalSel', 'change', e => mutate(s2 => { s2.goal = e.target.value; }));
  on('tgt', 'input', e => mutate(s2 => { s2.targetScore = e.target.value; }));
  on('dm', 'input', e => { $('#dmV').textContent = e.target.value; mutate(s2 => { s2.dailyMin = +e.target.value; }); });
  on('rate', 'input', e => { $('#rateV').textContent = e.target.value; mutate(s2 => { s2.settings.rate = +e.target.value; }); });
  on('autoSpk', 'change', e => mutate(s2 => { s2.settings.autoSpeak = e.target.checked; }));
  on('snd', 'change', e => mutate(s2 => { s2.settings.sound = e.target.checked; }));
  on('styleSel', 'change', e => {
    mutate(s2 => { s2.settings.style = e.target.value; });
    say('This is how your lessons will sound from now on.');
  });
  on('voiceSel', 'change', e => {
    const code = currentLang();
    /* Inggris memakai jalur speech.js (settings.voice); bahasa lain memakai
       jalur voice.js (pilihan per bahasa). Salah simpan = pilihan diabaikan. */
    if (code === 'en') mutate(s2 => { s2.settings.voice = e.target.value; });
    else setVoicePilihan(code, e.target.value);
    paintVoiceHint();
    cobaSuara();
  });
  on('testVoice', 'click', cobaSuara);

  pasangKendaliKenyamanan();
  gambarPenyimpanan();
  isiKartuLisensi();
  isiKartuAdmin();


  /* daftar suara per bahasa */
  const paintVoiceRows = () => {
    const host = $('#voiceRows');
    if (!host) return;
    const semua = semuaSuara();
    host.innerHTML = LANGS.map(l => {
      const asli = suaraUntuk(l.code);
      const r = voiceResolve(l.code);
      const status = r.mode === 'native' ? ['Asli', 'badge--ok']
        : r.mode === 'roman-id' ? ['Romanisasi · suara Indonesia', 'badge--warn']
        : r.mode === 'roman-en' ? ['Romanisasi · suara Inggris', 'badge--warn']
        : ['Tidak ada suara', 'badge--bad'];
      const pilih = voicePilihan(l.code);
      const opsi = (asli.length ? asli : semua);
      return `<div class="voice-row">
        <span class="voice-row__n"><b>${esc(l.name)}</b><em>${esc(l.native)}</em></span>
        <select class="select" data-vlang="${l.code}" aria-label="Suara untuk bahasa ${esc(l.name)}">
          <option value="">Otomatis${asli.length ? '' : ' (cadangan romanisasi)'}</option>
          ${opsi.map(v => `<option value="${esc(v.voiceURI)}" ${pilih === v.voiceURI ? 'selected' : ''}>
            ${esc(v.name)} — ${esc(v.lang)}</option>`).join('')}
        </select>
        <span class="badge ${status[1]}">${esc(status[0])}</span>
        <button class="btn btn--ghost btn--sm" data-vtest="${l.code}">${ico('volume', { size: 14 })} Uji</button>
      </div>`;
    }).join('');

    $$('[data-vlang]', host).forEach(sel => sel.onchange = () => {
      setVoicePilihan(sel.dataset.vlang, sel.value);
      paintVoiceRows();
      toast('Pilihan suara disimpan.', 'ok');
    });
    $$('[data-vtest]', host).forEach(b => b.onclick = () => {
      const c = b.dataset.vtest;
      const CONTOH = { en:['This is how your lessons will sound.',''],
        id:['Begini bunyinya.',''],
        ko:['안녕하세요','annyeonghaseyo'], ja:['ありがとうございます','arigatou gozaimasu'],
        zh:['你好','ni hao'], ar:['السلام عليكم','assalamu alaikum'],
        ru:['Здравствуйте','zdrastvuyte'], de:['Guten Tag','gutn taak'],
        fr:['Bonjour','bonzyur'], es:['Hola, buenos días','ola buenos dias'] };
      const [t, rom] = CONTOH[c] || ['Test', 'test'];
      ucap(c, { text: t, rom });
    });
  };
  voiceReady().then(paintVoiceRows);

  /* diagnosis suara */
  const paintDiag = () => {
    const d = speechDiagnostics();
    const cell = (k, ok, v) => `<div class="stat">
      <div class="stat__k">${k}</div>
      <div class="stat__v" style="font-size:var(--fs-lg);color:${ok ? 'var(--ok)' : 'var(--bad)'}">${ok ? '✓' : '✕'}</div>
      <div class="stat__note">${esc(v)}</div></div>`;
    $('#diagBox').innerHTML =
      cell('Pembacaan (TTS)', d.tts, d.tts ? 'didukung' : 'tidak didukung peramban') +
      cell('Suara Inggris', d.english > 0, `${d.english} dari ${d.voices} suara`) +
      cell('Pengenalan ucapan', d.stt, d.stt ? 'didukung (butuh internet)' : 'pakai Chrome/Edge') +
      cell('Konteks & jaringan', d.secure && d.online,
        `${d.secure ? 'aman' : 'TIDAK aman'} · ${d.online ? 'daring' : 'luring'} · ${d.host}`);
  };
  paintDiag();
  loadVoices().then(paintDiag);

  on('diagTts', 'click', async () => {
    const teks = 'This is a long sentence used to check whether your browser can read more than a short phrase. '
      + 'If you hear this entire message, including the final words, then long passages will work correctly too.';
    $('#diagOut').innerHTML = `<span class="muted">Memutar ${chunkText(teks).length} potongan…</span>`;
    await say(teks);
    $('#diagOut').innerHTML = '<span class="b" style="color:var(--ok)">Selesai.</span> '
      + 'Kalau kamu mendengar sampai kata terakhir, pembacaan teks panjang berjalan normal.';
  });

  on('diagStt', 'click', async () => {
    const out = $('#diagOut');
    out.innerHTML = '<span class="muted">Mendengarkan… ucapkan: “Hello, my name is…”</span>';
    try {
      const said = await listen({ onPartial: t => out.textContent = t });
      out.innerHTML = said
        ? `<span class="b" style="color:var(--ok)">Terdengar:</span> “${esc(said)}”`
        : '<span style="color:var(--warn)">Tidak ada suara terdengar.</span>';
    } catch (e) {
      out.innerHTML = `<span style="color:var(--bad)">${esc(e.message)}</span>`;
    }
  });

  /* ── Penyelarasan awan ─────────────────────────────────────── */
  const pesanAwan = (teks, jenis = '') => {
    const n = $('#awanPesan');
    if (n) { n.textContent = teks; n.className = 'small ' + (jenis === 'bad' ? 'is-bad' : jenis === 'ok' ? 'is-ok' : 'soft'); }
  };

  on('awanSandi', 'click', async () => {
    const { modal } = await import('../ui.js');
    modal(`
      <div class="modal__head">
        <h3>Ganti kata sandi</h3>
        <button class="icon-btn" data-close aria-label="Tutup">✕</button>
      </div>
      <div class="modal__body">
        <label class="xs muted" for="sandiBaru">Kata sandi baru</label>
        <input id="sandiBaru" class="input" type="password" autocomplete="new-password"
               placeholder="minimal 8 huruf" style="width:100%">
        <p id="sandiPesan" class="small" style="margin:.6rem 0 0"></p>
      </div>
      <div class="modal__foot">
        <button class="btn btn--ghost" data-close>Batal</button>
        <button class="btn btn--primary" id="sandiSimpan">Simpan</button>
      </div>`, {
      onMount(box, close) {
        const pesan = box.querySelector('#sandiPesan');
        box.querySelector('#sandiSimpan').addEventListener('click', async () => {
          try {
            await Awan.gantiSandi(box.querySelector('#sandiBaru').value);
            toast('Kata sandi diperbarui.', 'ok');
            close();
          } catch (e) { pesan.textContent = e.message; pesan.style.color = 'var(--bad)'; }
        });
        box.querySelector('#sandiBaru').focus();
      }
    });
  });

  on('awanSinkron', 'click', async () => {
    const btn = $('#awanSinkron');
    btn.disabled = true; pesanAwan('Menyelaraskan…');
    const r = await Awan.sinkron();
    if (r.status === 'sinkron') { toast('Kemajuan tersimpan di awan.', 'ok'); renderSettings(); }
    else { pesanAwan(r.pesan || 'Penyelarasan gagal.', 'bad'); btn.disabled = false; }
  });

  on('awanKeluar', 'click', async () => {
    /* Sekarang keluar berarti benar-benar keluar: catatan akses ikut
       dihapus dan halaman dimuat ulang, supaya gerbang berdiri lagi.
       Kalau hanya sesinya yang dibuang, isi aplikasi tetap terpampang
       sampai penyegaran berikutnya. */
    toast('Keluar. Kemajuan di perangkat ini tetap utuh.');
    (await import('../gerbang.js')).keluarPenuh();
  });

  on('expBtn', 'click', () => { exportData(); toast('Berkas kemajuan diunduh.', 'ok'); });
  on('impFile', 'change', e => {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader();
    /* Memulihkan cadangan MENGGANTI seluruh kemajuan dan tidak bisa
       dibatalkan. Tombol Hapus semua data di bawah sudah lama meminta
       konfirmasi; jalur ini dulu tidak, padahal akibatnya sama persis —
       satu salah pilih berkas di dialog unggah menghapus semuanya
       sementara aplikasi melaporkan keberhasilan.

       Yang dibandingkan diperlihatkan apa adanya, supaya pemakai bisa
       melihat kalau cadangannya justru lebih kosong daripada kemajuan
       yang sedang berjalan. */
    r.onload = async () => {
      let ringkas;
      try { ringkas = ringkasCadangan(r.result); }
      catch (err) { return toast('Berkas tidak dikenali: ' + err.message, 'bad'); }
      const kini = ringkasSekarang();
      const baris = (j, x) => `${j}: ${x.pelajaran} pelajaran · ${x.kartu} kartu · ${x.xp} XP`;
      const yes = await confirmDialog('Ganti kemajuan dengan isi cadangan?',
        `${baris('Sekarang di perangkat ini', kini)}<br>` +
        `${baris('Isi berkas cadangan', ringkas)} (dibuat ${esc(ringkas.dibuat)})<br><br>` +
        'Kemajuan yang sekarang akan hilang permanen dan tidak bisa dikembalikan. ' +
        'Sebaiknya ekspor dulu.',
        'Ya, ganti');
      if (!yes) { e.target.value = ''; return; }
      try { importData(r.result); toast('Kemajuan dipulihkan.', 'ok'); renderSettings(); }
      catch (err) { toast('Berkas tidak dikenali: ' + err.message, 'bad'); }
    };
    r.readAsText(f);
  });
  on('resetBtn', 'click', async () => {
    const yes = await confirmDialog('Hapus semua data?',
      'Seluruh kemajuan, kartu hafalan, dan rencana akan hilang permanen. Sebaiknya ekspor dulu.', 'Ya, hapus');
    if (yes) { resetAll(); toast('Data dihapus.', 'ok'); location.hash = '#/'; }
  });
}

/* ── Kenyamanan & keterjangkauan ──────────────────────────────── */
function barisPilih(judul, kunci, ket) {
  const c = comfort();
  const opsi = PILIHAN[kunci] || [];
  return `<div class="field">
    <label id="lbl-a-${kunci}">${esc(judul)}</label>
    ${ket ? `<p class="xs muted" style="margin:.15rem 0 .4rem">${esc(ket)}</p>` : ''}
    <div class="seg" role="group" aria-labelledby="lbl-a-${kunci}" data-aseg="${kunci}">
      ${opsi.map(([v, l, d]) => `<button type="button" data-v="${esc(v)}" title="${esc(d || '')}"
         aria-pressed="${String(c[kunci]) === String(v)}"
         class="${String(c[kunci]) === String(v) ? 'is-on' : ''}">${esc(l)}</button>`).join('')}
    </div>
    ${opsi.some(o => o[2]) ? `<p class="xs muted" style="margin-top:.35rem">
       ${esc((opsi.find(o => String(o[0]) === String(c[kunci])) || [])[2] || '')}</p>` : ''}
  </div>`;
}

function kartuKenyamanan() {
  const c = comfort();
  return `
  <div class="card" style="margin-top:var(--s-4)">
    <div class="card__title">${ico('accessible')} Kenyamanan &amp; keterjangkauan</div>
    <p class="small soft" style="margin:.4rem 0 1rem">
      Aplikasi ini dipakai orang dengan mata, tangan, dan perangkat yang berbeda-beda.
      Atur sampai terasa pas — pilihanmu disimpan terpisah dari kemajuan belajar,
      jadi tidak ikut hilang kalau kamu mengatur ulang data.</p>

    <div class="field">
      <label for="cfSkala">Ukuran teks: <b id="cfSkalaV">${c.skala}%</b></label>
      <input type="range" id="cfSkala" min="85" max="170" step="5" value="${c.skala}"
             aria-describedby="cfSkalaKet" />
      <p class="xs muted" id="cfSkalaKet" style="margin-top:.3rem">
        Seluruh tata letak ikut menyesuaikan — kartu, kisi aksara, dan tabel tetap utuh sampai 170%.</p>
    </div>

    <div class="grid grid--2" style="margin-top:var(--s-4)">
      ${barisPilih('Tampilan', 'tema')}
      ${barisPilih('Jenis huruf', 'huruf')}
      ${barisPilih('Jarak antarbaris', 'baris')}
      ${barisPilih('Lebar kolom baca', 'lebarBaca')}
      ${barisPilih('Kontras', 'kontras')}
      ${barisPilih('Gerak & animasi', 'gerak')}
      ${barisPilih('Ukuran tombol', 'sentuh')}
      ${barisPilih('Penanda fokus papan tik', 'fokus')}
      ${barisPilih('Latar belakang', 'latar')}
    </div>

    <div class="stack stack--sm" style="margin-top:var(--s-5);border-top:1px solid var(--line);padding-top:var(--s-4)">
      <label class="switch"><input type="checkbox" id="cfTenang2" ${c.tenang ? 'checked' : ''} />
        <span><b>Mode tenang</b> — sembunyikan XP, rentetan, dan lencana.
        <br><small class="xs muted">Untuk yang merasa angka-angka itu menekan, bukan menyemangati.</small></span></label>
      <label class="switch"><input type="checkbox" id="cfBantuan" ${c.bantuan ? 'checked' : ''} />
        <span><b>Tip bantuan di halaman</b> — kotak penjelasan singkat di atas halaman baru.</span></label>
    </div>

    <div class="row" style="margin-top:var(--s-4);flex-wrap:wrap">
      <button class="btn btn--soft" id="cfUlangTip">Tampilkan lagi semua tip</button>
      <button class="btn btn--soft" id="cfUlangPandu">${ico('refresh', { size: 15 })} Putar ulang pengenalan</button>
      <button class="btn btn--ghost" id="cfResetAll">Kembalikan tampilan ke bawaan</button>
    </div>
  </div>

  <div class="card" style="margin-top:var(--s-4)">
    <div class="card__title">${ico('download')} Pemakaian tanpa internet</div>
    <p class="small soft" style="margin:.4rem 0 1rem">
      Simpan seluruh materi di perangkat supaya pelajaran, kartu, dan ujian tetap jalan
      saat sinyal hilang. Yang tetap butuh internet hanya suara daring dan pengenalan ucapan.</p>
    <div id="simpananBox"></div>
  </div>`;
}

function pasangKendaliKenyamanan() {
  const sk = $('#cfSkala');
  if (sk) sk.oninput = e => {
    $('#cfSkalaV').textContent = e.target.value + '%';
    setComfort({ skala: +e.target.value });
  };

  $$('[data-aseg]').forEach(g => $$('button', g).forEach(b => b.onclick = () => {
    setComfort({ [g.dataset.aseg]: b.dataset.v });
    renderSettings();
  }));

  const on2 = (id, ev, fn) => { const n = $('#' + id); if (n) n.addEventListener(ev, fn); };
  on2('cfTenang2', 'change', e => setComfort({ tenang: e.target.checked }));
  on2('cfBantuan', 'change', e => setComfort({ bantuan: e.target.checked }));
  on2('cfUlangTip', 'click', () => { lupakanTipTertutup(); toast('Semua tip akan muncul lagi.', 'ok'); });
  on2('cfUlangPandu', 'click', () => { ulangiPandu(); mulaiPandu({ onSelesai: () => renderSettings() }); });
  on2('cfResetAll', 'click', async () => {
    const yes = await confirmDialog('Kembalikan tampilan ke bawaan?',
      'Ukuran teks, tema, huruf, kontras, dan pengaturan gerak akan kembali seperti semula. ' +
      'Kemajuan belajarmu tidak tersentuh.', 'Ya, kembalikan');
    if (yes) { resetComfort(); renderSettings(); toast('Tampilan dikembalikan.', 'ok'); }
  });
}

/* ── Penyimpanan luring ───────────────────────────────────────── */
async function gambarPenyimpanan() {
  const box = $('#simpananBox');
  if (!box) return;

  if (!luringDidukung()) {
    box.innerHTML = `<p class="small" style="color:var(--warn)">
      Peramban ini tidak mendukung penyimpanan luring, atau halaman dibuka langsung dari berkas.
      Jalankan lewat <code>node server.js</code> lalu buka <code>http://localhost:4321</code>.</p>`;
    return;
  }

  const r = await ruangSimpanan();
  const terpasang = sudahTerpasang();
  box.innerHTML = `
    <div class="grid grid--3">
      <div class="stat"><div class="stat__k">Berkas materi</div>
        <div class="stat__v" style="font-size:var(--fs-lg)">${BERKAS_MATERI.length}</div>
        <div class="stat__note">modul yang disimpan</div></div>
      <div class="stat"><div class="stat__k">Ruang terpakai</div>
        <div class="stat__v" style="font-size:var(--fs-lg)">${r ? ukuranBerkas(r.pakai) : '—'}</div>
        <div class="stat__note">${r ? `dari ${ukuranBerkas(r.kuota)} tersedia` : 'tidak diketahui'}</div></div>
      <div class="stat"><div class="stat__k">Aplikasi terpasang</div>
        <div class="stat__v" style="font-size:var(--fs-lg)">${terpasang ? 'Ya' : 'Belum'}</div>
        <div class="stat__note">${terpasang ? 'berjalan seperti aplikasi biasa' : 'masih dibuka lewat peramban'}</div></div>
    </div>
    <div class="row" style="margin-top:var(--s-4);flex-wrap:wrap">
      <button class="btn btn--primary" id="spSiapkan">${ico('download', { size: 15 })} Simpan semua materi</button>
      ${!terpasang && bisaDipasang() ? `<button class="btn btn--soft" id="spPasang">Pasang sebagai aplikasi</button>` : ''}
      <button class="btn btn--soft" id="spAman">${ico('shield', { size: 15 })} Amankan penyimpanan</button>
      <button class="btn btn--ghost" id="spHapus">${ico('trash', { size: 15 })} Hapus simpanan</button>
    </div>
    <div class="bar bar--sm" id="spBar" hidden style="margin-top:var(--s-3)"><i style="width:0%"></i></div>
    <p class="xs muted" id="spPesan" style="margin-top:.5rem">
      Cukup sekali saat ada internet. Setelah itu matikan data — semuanya harus tetap terbuka.</p>`;

  const pesan = $('#spPesan'), bar = $('#spBar');
  $('#spSiapkan').onclick = async () => {
    try {
      const n = await siapkanLuring();
      bar.hidden = false; bar.querySelector('i').style.width = '12%';
      pesan.textContent = `Mengunduh ${n} berkas…`;
      const lepas = onPanas(({ sukses, total }) => {
        bar.querySelector('i').style.width = '100%';
        pesan.innerHTML = `<b style="color:var(--ok)">Selesai.</b> ${sukses} dari ${total} berkas tersimpan.`;
        toast('Materi siap dipakai tanpa internet.', 'ok');
        lepas(); gambarPenyimpanan();
      });
    } catch (e) { pesan.innerHTML = `<span style="color:var(--bad)">${esc(e.message)}</span>`; }
  };
  const pasangBtn = $('#spPasang');
  if (pasangBtn) pasangBtn.onclick = async () => {
    const hasil = await pasangAplikasi();
    if (hasil === 'accepted') { toast('SankaLingo GO terpasang.', 'ok'); gambarPenyimpanan(); }
  };
  $('#spAman').onclick = async () => {
    const ok = await amankanPenyimpanan();
    toast(ok ? 'Penyimpanan diamankan — tidak akan dibuang otomatis oleh peramban.'
             : 'Peramban menolak permintaan ini. Kemajuanmu tetap tersimpan seperti biasa.',
          ok ? 'ok' : 'warn', 6000);
  };
  $('#spHapus').onclick = async () => {
    const yes = await confirmDialog('Hapus simpanan luring?',
      'Materi harus diunduh ulang saat ada internet. Kemajuan belajarmu tidak ikut terhapus.', 'Ya, hapus');
    if (!yes) return;
    await hapusSimpanan();
    toast('Simpanan luring dihapus.', 'ok');
    gambarPenyimpanan();
  };
}

/* Dulu kotak ini SELALU berisi suara Inggris, bahkan saat pengguna sedang
   berada di modul Mandarin — jadi memilih apa pun di situ tidak mengubah
   suara yang benar-benar dipakai halaman Mandarin. Sekarang isinya
   mengikuti bahasa yang sedang dipelajari. */
/* Kalimat contoh untuk tombol "Uji suara" — memakai bahasa yang sedang
   dipelajari, bukan selalu Inggris. */
const CONTOH_UJI = {
  en: ['This is how your lessons will sound. Listen carefully, then repeat after me.', ''],
  ko: ['안녕하세요. 앞으로 이 목소리로 배우게 됩니다.', 'annyeonghaseyo. apeuro i moksoriro baeuge doemnida'],
  ja: ['こんにちは。これからこの声で学びます。', 'konnichiwa. korekara kono koe de manabimasu'],
  zh: ['你好。以后就用这个声音学习。', 'ni hao. yihou jiu yong zhege shengyin xuexi'],
  ar: ['السَّلامُ عَلَيْكُم. سَتَتَعَلَّمُ بِهَذا الصَّوْت.', 'assalamu alaikum. satataallamu bihadza as-saut'],
  ru: ['Здравствуйте. Теперь вы будете учиться с этим голосом.', 'zdrastvuyte. teper vy budete uchitsya s etim golosom'],
  de: ['Guten Tag. Ab jetzt lernen Sie mit dieser Stimme.', 'gutn taak. ap yetst lernen zi mit dizer sytime'],
  fr: ['Bonjour. Vous apprendrez désormais avec cette voix.', 'bonzyur. vu zaprandre dezormue avek set vwa'],
  es: ['Hola. A partir de ahora aprenderás con esta voz.', 'ola. a partir de aora aprenderas kon esta bos']
};

async function cobaSuara() {
  const code = currentLang();
  const [teks, rom] = CONTOH_UJI[code] || CONTOH_UJI.en;
  const btn = $('#testVoice');
  if (btn) { btn.disabled = true; btn.textContent = 'Memutar…'; }

  let hasil = null;
  if (code === 'en') await say(teks);
  else hasil = await ucap(code, { text: teks, rom });

  if (btn) { btn.disabled = false; btn.textContent = 'Uji suara'; }

  /* Tombol yang diam tanpa penjelasan adalah bug tersendiri. Kalau tidak
     berbunyi, katakan APA yang terjadi dan apa langkah berikutnya. */
  if (hasil && !hasil.berbunyi) {
    const pesan = {
      none: 'Perangkat ini tidak punya mesin bicara sama sekali.',
      'tak-terbaca': 'Teksnya tidak bisa dibaca suara yang tersedia.',
      kosong: 'Tidak ada teks untuk dibacakan.'
    }[hasil.mode];
    toast(pesan
      ? pesan
      : `Suara tidak keluar padahal <b>${esc(hasil.voice ? hasil.voice.name : 'suara terpilih')}</b> ` +
        `sudah dipilih. Kalau ini suara <i>Online</i>, periksa koneksi internet — suara Online ` +
        `diambil dari server Microsoft. Buka <a href="#/${code}/suara">Audit suara</a> untuk ` +
        `melihat rinciannya.`, 'warn', 11000);
  }
}

function suaraBahasaIni() {
  const code = currentLang();
  const cocok = suaraUntuk(code);
  if (cocok.length) return { code, daftar: cocok, pas: true };
  /* Tidak ada suara asli: tampilkan suara cadangan yang benar-benar dipakai. */
  const cadangan = [...suaraUntuk('id'), ...suaraUntuk('en')];
  return { code, daftar: cadangan, pas: false };
}

function fillVoices(sel) {
  const { code, daftar, pas } = suaraBahasaIni();
  const nama = namaBahasa(code);
  const cur = code === 'en' ? state().settings.voice : voicePilihan(code);

  if (!daftar.length) {
    sel.innerHTML = `<option value="">Tidak ada suara apa pun di perangkat ini</option>`;
    paintVoiceHint();
    return;
  }
  sel.innerHTML =
    `<option value="">Otomatis — pilih yang paling alami</option>` +
    daftar.map(v => {
      const q = voiceQuality(v);
      const tanda = pas ? '' : ' (cadangan)';
      return `<option value="${esc(v.voiceURI)}" ${cur === v.voiceURI ? 'selected' : ''}>` +
             `${esc(v.name)} · ${esc(v.lang)} — ${esc(q.label)}${tanda}</option>`;
    }).join('');
  paintVoiceHint();
}

function paintVoiceHint() {
  const box = $('#voiceHint');
  if (!box) return;
  const code = currentLang();
  const nama = namaBahasa(code);
  const { daftar, pas } = suaraBahasaIni();

  if (!daftar.length) {
    box.innerHTML = `Perangkat ini belum punya suara TTS sama sekali.`;
    return;
  }
  if (!pas) {
    box.innerHTML = `<b>Tidak ada suara ${esc(nama)} di perangkat ini.</b> ` +
      `Yang terdaftar di atas adalah suara cadangan — aplikasi memakainya untuk ` +
      `membacakan <i>romanisasi</i>, bukan pelafalan asli. ` +
      `Cara tercepat memperbaikinya: buka aplikasi ini di <b>Microsoft Edge</b>, ` +
      `yang menyediakan suara ${esc(nama)} "Online (Natural)" gratis.`;
    return;
  }
  const alami = daftar.filter(v => voiceQuality(v).kind === 'ok').length;
  box.innerHTML = alami
    ? `Terbaik untuk ${esc(nama)}: <b>${esc(daftar[0].name)}</b>. ` +
      `Suara berlabel “Sangat alami” terdengar paling manusiawi.`
    : `Suara ${esc(nama)} yang ada di perangkat ini semuanya jenis lama, jadi ` +
      `terdengar agak robotik. Buka di <b>Microsoft Edge</b> untuk mendapat ` +
      `suara <i>Online (Natural)</i> tanpa memasang apa pun.`;
}
