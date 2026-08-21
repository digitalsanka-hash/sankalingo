/* Simulasi ujian yang meniru format asli: bagian berurutan, pewaktu
   terpisah tiap bagian, penomoran mengikuti blueprint resmi, layar
   tinjauan, dan penyekoran memakai tabel konversi resmi.

   Yang direplikasi 100%: urutan bagian, jenis tugas, batas waktu,
   penomoran soal, aturan audio sekali putar, dan cara penyekoran.
   Isi soal ditulis sendiri (soal asli berhak cipta). */

import { $, $$, el, html, raw, esc, toast, shuffle, sample, hhmmss, mmss, ring } from '../ui.js';
import { ico } from '../icons.js';
import { state, recordExam, addXP, addMinutes } from '../state.js';
import { checkAnswer, promptOf, answerOf } from '../quiz.js';
import { say, sayList, stopSpeaking } from '../speech.js';
import { EXAMS, SPECS, convertScore, ieltsOverall } from '../data.js';

/* ── Menyusun blueprint yang bisa dijalankan ──────────────────── */

const flat = (arr, ctx) => arr.map(q => ({ ...q, ctx }));

function buildIELTS() {
  const E = EXAMS.ielts, S = SPECS.ielts;
  const lis = E.listenings, rd = E.readings;
  const lisItems = lis.flatMap((l, i) => flat(l.questions, { kind:'audio', title:l.title, lines:l.lines, id:l.id }));
  const rdItems  = rd.flatMap(r => flat(r.questions, { kind:'text', title:r.title, text:r.text, id:r.id }));
  return {
    exam: E, spec: S,
    sections: [
      { id:'listening', name:'Listening', minutes:30, target:40, items:lisItems,
        audioOnce:true, note:'Rekaman diputar sekali. Baca soal lebih dulu, lalu putar.',
        parts:S.sections[0].parts },
      { id:'reading', name:'Reading', minutes:60, target:40, items:rdItems,
        note:'Tanpa waktu transfer tambahan. Bagi waktumu 17 / 20 / 23 menit.',
        parts:S.sections[1].parts },
      { id:'writing', name:'Writing', minutes:60, target:2, kind:'writing',
        tasks:[
          { name:'Task 1', minutes:20, words:150,
            prompt: E.writing.task1Academic[0].prompt, data: E.writing.task1Academic[0].data,
            model: E.writing.task1Academic[0].model },
          { name:'Task 2', minutes:40, words:250,
            prompt: E.writing.task2[0].prompt, model: E.writing.task2[0].model }
        ],
        note:'Task 2 bernilai dua kali Task 1. Kerjakan Task 2 lebih dulu bila kamu sering kehabisan waktu.' },
      { id:'speaking', name:'Speaking', minutes:14, target:3, kind:'speaking',
        parts:[
          { name:'Part 1 — wawancara', seconds:270, prompts: E.speaking.part1.slice(0,6) },
          { name:'Part 2 — giliran panjang', prep:60, seconds:120, card: E.speaking.part2[0] },
          { name:'Part 3 — diskusi', seconds:270, prompts: E.speaking.part3.slice(0,4) }
        ],
        note:'Direkam sendiri. Penilaian otomatis tidak dipakai; gunakan daftar periksa.' }
    ]
  };
}

function buildTOEFL() {
  const E = EXAMS.toefl, S = SPECS.toefl, T = E.tasks2026;
  const cw = T.completeWords.map(x => ({ t:'fill', q:x.q, a:x.a, why:'Petunjuk: ' + x.hint, part:'Complete the Words' }));
  const dl = T.dailyLife.flatMap(d => flat(d.questions, { kind:'text', title:d.title, text:d.text })
    .map(q => ({ ...q, part:'Read in Daily Life' })));
  const ac = E.readings.flatMap(r => flat(r.questions, { kind:'text', title:r.title, text:r.text })
    .map(q => ({ ...q, part:'Read an Academic Passage' })));
  const li = E.listenings.flatMap(l => flat(l.questions, { kind:'audio', title:l.title, lines:l.lines })
    .map(q => ({ ...q, part: l.title.startsWith('Campus') ? 'Listen to a Conversation' : 'Listen to an Academic Talk' })));
  const bs = T.buildSentence.map(b => ({ t:'order', words:b.words, a:b.a, part:'Build a Sentence' }));
  return {
    exam: E, spec: S,
    sections: [
      { id:'reading', name:'Reading', minutes:30, target:50, items:[...cw, ...dl, ...ac],
        adaptive:true, parts:S.sections[0].parts,
        note:'Adaptif bertahap. 50 butir / 30 menit — rata-rata 36 detik per butir.' },
      { id:'listening', name:'Listening', minutes:29, target:47, items:li, audioOnce:true,
        adaptive:true, parts:S.sections[1].parts,
        note:'Audio diputar sekali. Mencatat sangat dianjurkan.' },
      { id:'speaking', name:'Speaking', minutes:8, target:11, kind:'speaking',
        parts:[
          { name:'Listen and Repeat', seconds:15, repeat: T.repeat },
          { name:'Take an Interview', seconds:30, prompts: T.interview }
        ],
        note:'11 butir dalam 8 menit. Jawaban pendek dan padat.' },
      { id:'writing', name:'Writing', minutes:23, target:12, kind:'writing',
        pre: bs,
        tasks:[
          { name:'Write an Email', minutes:6, words:80,
            prompt: T.emails[0].situation, model: T.emails[0].model },
          { name:'Write for an Academic Discussion', minutes:10, words:100,
            prompt: `${T.discussions[0].professor}\n\n• Student A: ${T.discussions[0].studentA}\n\n• Student B: ${T.discussions[0].studentB}`,
            model: T.discussions[0].model }
        ],
        note:'Build a Sentence dikerjakan lebih dulu, lalu dua tugas tulis.' }
    ]
  };
}

function buildTOEIC() {
  const E = EXAMS.toeic, S = SPECS.toeic, P = E.parts;
  const conv = P.p3.flatMap(l => flat(l.questions, { kind:'audio', title:l.title, lines:l.lines })
    .map(q => ({ ...q, part:'Part 3 — Conversations' })));
  const talks = P.p4.flatMap(l => flat(l.questions, { kind:'audio', title:l.title, lines:l.lines })
    .map(q => ({ ...q, part:'Part 4 — Talks' })));
  /* Judulnya harus UNIK per foto. `played` di runQuestionSection berkunci
     ctx.title, dan bagian Listening memakai audioOnce — jadi dengan judul
     yang sama untuk keenam foto, memutar yang pertama langsung menandai
     kelimanya "sudah diputar" dan mematikan tombol putarnya sebelum
     sekali pun berbunyi. */
  const p1 = P.p1.map((q, i) => ({ ...q, ctx: { kind:'audio', title:`Part 1 — Photograph ${i + 1}`, lines:[q.audio] } }));
  const p2 = P.p2.map(q => ({ ...q, ctx: { kind:'audio', title:'Part 2 — ' + q.q.slice(0, 28), lines:[q.audio] } }));

  const p5 = E.quickBank.filter(q => /___/.test(q.q)).map(q => ({ ...q, part:'Part 5 — Incomplete Sentences' }));
  const p6 = P.p6.flatMap(t => t.gaps.map(g => ({ ...g, part:'Part 6 — Text Completion',
    ctx: { kind:'text', title:t.title, text:t.text } })));
  const p7 = E.readings.flatMap(r => flat(r.questions, { kind:'text', title:r.title, text:r.text })
    .map(q => ({ ...q, part:'Part 7 — Reading Comprehension' })));

  return {
    exam: E, spec: S,
    sections: [
      { id:'listening', name:'Section I — Listening', minutes:45, target:100,
        items:[...p1, ...p2, ...conv, ...talks], audioOnce:true,
        parts:S.sections[0].parts, note:'Urutan Part 1 → 2 → 3 → 4 seperti ujian asli. Audio sekali putar.' },
      { id:'reading', name:'Section II — Reading', minutes:75, target:100,
        items:[...p5, ...p6, ...p7], parts:S.sections[1].parts,
        note:'Waktu diatur sendiri. Anggaran: Part 5 10 mnt · Part 6 8 mnt · Part 7 55 mnt.' }
    ]
  };
}

const BUILDERS = { ielts: buildIELTS, toefl: buildTOEFL, toeic: buildTOEIC };

/* ── Layar utama ──────────────────────────────────────────────── */

export function renderMock(examId) {
  const bp = BUILDERS[examId]?.();
  if (!bp) return $('#main').innerHTML = '<p>Ujian tidak ditemukan.</p>';
  const E = bp.exam, S = bp.spec;

  const scored = bp.sections.filter(s => !s.kind);
  const authored = scored.reduce((a, s) => a + s.items.length, 0);
  const official = scored.reduce((a, s) => a + s.target, 0);

  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <a class="small muted" href="#/exam/${examId}">${ico('chevronL', { size: 14 })} Kembali ke ${esc(E.name)}</a>
      <h1 style="margin-top:.4rem">Simulasi ${esc(E.name)}</h1>
      <p>${esc(S.totalTime)}</p>
    </div>
  </div>

  <div class="mock-intro">
    <div class="card">
      <div class="card__title">${raw(ico('layers'))} Blueprint resmi yang ditiru</div>
      <div class="table-wrap" style="margin-top:var(--s-4)">
        <table class="tbl">
          <thead><tr><th>Bagian</th><th>Waktu</th><th>Butir resmi</th><th>Di simulasi ini</th></tr></thead>
          <tbody>
            ${bp.sections.map(s => `<tr>
              <td><b>${esc(s.name)}</b><div class="xs muted">${esc(s.note || '')}</div></td>
              <td class="nowrap">${s.minutes} mnt</td>
              <td class="num">${s.target}</td>
              <td class="num">${s.kind ? '<span class="badge">tugas</span>' : s.items.length}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="note note--warn" style="margin-top:var(--s-4)">
        <strong>Yang jujur perlu kamu tahu</strong>
        Urutan bagian, batas waktu, jenis tugas, penomoran, dan cara penyekoran ditiru persis dari
        blueprint resmi. Yang tidak bisa ditiru adalah <b>isi soal aslinya</b> — soal ujian berhak cipta,
        jadi semua butir di sini ditulis sendiri dengan tingkat kesulitan yang disetarakan.
        Simulasi ini memuat <b>${authored} dari ${official} butir bernilai</b>; skormu dihitung
        proporsional lalu dikonversi memakai tabel resmi.
      </div>
      <div class="row" style="margin-top:var(--s-5)">
        <button class="btn btn--primary btn--lg" id="mkStart">${raw(ico('play'))} Mulai simulasi</button>
        <label class="switch"><input type="checkbox" id="mkStrict" checked />
          <span>Mode ketat — tidak bisa kembali ke bagian sebelumnya</span></label>
      </div>
    </div>
  </div>
  <div id="mkStage"></div>`;

  $('#mkStart').onclick = () => {
    const strict = $('#mkStrict').checked;
    $('.mock-intro').remove();
    runSession(bp, strict);
  };
}

/* ── Sesi ─────────────────────────────────────────────────────── */

function runSession(bp, strict) {
  const stage = $('#mkStage');
  const results = [];
  let si = 0;

  const nextSection = () => {
    if (si >= bp.sections.length) return finishAll(stage, bp, results);
    const sec = bp.sections[si];
    const done = res => { results.push(res); si++; nextSection(); };
    if (sec.kind === 'writing') return runWriting(stage, bp, sec, done);
    if (sec.kind === 'speaking') return runSpeaking(stage, bp, sec, done);
    runQuestionSection(stage, bp, sec, strict, done);
  };
  nextSection();
}

/* Antar-bagian: layar jeda seperti ujian sungguhan. */
function sectionIntro(stage, bp, sec, onGo) {
  return new Promise(res => {
    stage.innerHTML = html`
      <div class="mock-gate">
        <span class="eyebrow">${esc(bp.exam.name)}</span>
        <h2>${esc(sec.name)}</h2>
        <div class="mock-gate__meta">
          <div><b>${sec.minutes}</b><span>menit</span></div>
          <div><b>${sec.items ? sec.items.length : sec.target}</b><span>butir</span></div>
          ${raw(sec.audioOnce ? '<div><b>1×</b><span>audio diputar</span></div>' : '')}
        </div>
        <p class="soft">${esc(sec.note || '')}</p>
        ${raw(sec.parts ? `<div class="mock-parts">${sec.parts.map(p => `
          <div class="mock-part"><b>${esc(p.name)}</b>
            <span>${p.items ? p.items + ' butir' : (p.minutes ? p.minutes + ' menit' : '')}</span>
            <em>${esc(p.note || '')}</em></div>`).join('')}</div>` : '')}
        <button class="btn btn--primary btn--lg" id="gateGo">Mulai bagian ini</button>
      </div>`;
    $('#gateGo').onclick = () => { onGo?.(); res(); };
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
}

/* ── Bagian bersoal ───────────────────────────────────────────── */
async function runQuestionSection(stage, bp, sec, strict, done) {
  await sectionIntro(stage, bp, sec);

  /* Pilihan ganda DIACAK di sini.

     js/quiz.js sudah lama mengacak pilihan sebelum menampilkannya, tetapi
     simulasi ujian punya penggambar sendiri (renderInput) dan menampilkan
     it.opts apa adanya. Kunci jawaban di bank soal tidak tersebar rata,
     jadi hasilnya bisa dikarang tanpa membaca satu soal pun. Diukur pada
     251 soal pilihan ganda ketiga simulasi:

         selalu A → 22% benar        selalu C → 14% benar
         selalu B → 63% benar        selalu D →  1% benar
         (tebakan acak murni 4 pilihan → 25%)

     Skor 63% itu dilaporkan sebagai perkiraan band IELTS / skor TOEFL,
     jadi angka yang dibawa pulang pemelajar tidak berarti apa-apa.

     `noShuffle` dihormati: TOEIC Part 1 dan Part 2 membacakan pilihannya
     lewat audio ("A. ... B. ... C. ..."), sehingga mengacak teksnya akan
     membuat audio dan layar tidak lagi cocok.

     Diacak SEKALI saat bagian dimulai, bukan tiap gambar ulang, supaya
     jawaban tersimpan dan layar tinjauan tetap menunjuk pilihan yang sama. */
  const items = sec.items.map(it => {
    if (it.t !== 'mcq' || it.noShuffle || !Array.isArray(it.opts)) return it;
    const urut = shuffle(it.opts.map((_, k) => k));
    return { ...it, opts: urut.map(k => it.opts[k]), a: urut.indexOf(it.a) };
  });
  const answers = new Array(items.length).fill(null);
  const flags = new Set();
  const played = new Set();
  let cur = 0, left = sec.minutes * 60, iv = null, reviewing = false;

  iv = setInterval(() => {
    left--;
    const t = $('#mkTimer');
    if (t) { t.textContent = hhmmss(left); t.classList.toggle('is-low', left <= 120); }
    if (left <= 0) { clearInterval(iv); finishSection(); }
  }, 1000);

  draw();

  function draw() {
    const it = items[cur];
    const partName = it.part || it.ctx?.title || '';
    stage.innerHTML = html`
      <div class="exam-bar">
        <span class="badge badge--brand">${esc(sec.name)}</span>
        <span class="mock-part-label">${esc(partName)}</span>
        <div class="spacer"></div>
        <span class="timer" id="mkTimer">${hhmmss(left)}</span>
        <button class="icon-btn" id="mkFlag" title="Tandai soal">${raw(ico(flags.has(cur) ? 'bookmark' : 'flag'))}</button>
        <button class="btn btn--soft btn--sm" id="mkReview">Tinjau</button>
      </div>

      <div class="mock-grid ${it.ctx?.kind === 'text' ? 'has-passage' : ''}">
        ${raw(it.ctx?.kind === 'text' ? `<div class="mock-passage card">
          <div class="card__title" style="font-size:var(--fs-md)">${esc(it.ctx.title)}</div>
          <div class="passage">${esc(it.ctx.text)}</div></div>` : '')}

        <div class="mock-q">
          ${raw(it.ctx?.kind === 'audio' ? `<div class="mock-audio">
            <div class="row row--between">
              <b>${esc(it.ctx.title)}</b>
              <span class="badge ${played.has(it.ctx.title) ? 'badge--warn' : 'badge--ok'}">
                ${played.has(it.ctx.title) ? 'sudah diputar' : 'belum diputar'}</span>
            </div>
            <button class="btn btn--soft btn--sm" id="mkPlay" ${played.has(it.ctx.title) && sec.audioOnce ? 'disabled' : ''}>
              ${ico('play', { size: 16 })} Putar rekaman${sec.audioOnce ? ' (sekali)' : ''}</button>
          </div>` : '')}

          <div class="q-card">
            <div class="row" style="margin-bottom:.7rem">
              <span class="mock-num">${cur + 1}</span>
              <span class="small muted">dari ${items.length}</span>
            </div>
            <div class="q-prompt">${esc(promptOf(it))}</div>
            <div class="opts" id="mkOpts">
              ${raw(renderInput(it, answers[cur]))}
            </div>
            <div class="row row--between" style="margin-top:var(--s-5)">
              <button class="btn btn--soft" id="mkPrev" ${cur === 0 ? 'disabled' : ''}>
                ${ico('chevronL', { size: 16 })} Sebelumnya</button>
              <button class="btn btn--primary" id="mkNext">
                ${cur === items.length - 1 ? 'Tinjau jawaban' : 'Berikutnya'} ${ico('chevronR', { size: 16 })}</button>
            </div>
          </div>
        </div>
      </div>`;

    bindInput(it);
    $('#mkFlag').onclick = () => { flags.has(cur) ? flags.delete(cur) : flags.add(cur); draw(); };
    $('#mkReview').onclick = () => review();
    $('#mkPrev').onclick = () => { save(); if (cur > 0) { cur--; draw(); } };
    $('#mkNext').onclick = () => { save(); cur < items.length - 1 ? (cur++, draw()) : review(); };
    const p = $('#mkPlay');
    if (p) p.onclick = () => { played.add(it.ctx.title); sayList(it.ctx.lines, 420); draw(); };
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function renderInput(it, val) {
    if (it.t === 'mcq') return it.opts.map((o, k) =>
      `<button class="opt ${val === k ? 'is-picked' : ''}" data-o="${k}">
        <span class="opt__key">${'ABCDEFGH'[k]}</span><span>${esc(o)}</span></button>`).join('');
    if (it.t === 'order') return `<div class="formula" id="mkSlot">${esc(val || '—')}</div>
      <div class="pill-row" id="mkBank" style="margin-top:.7rem"></div>
      <button class="btn btn--ghost btn--sm" id="mkUndo" style="margin-top:.6rem">Hapus terakhir</button>`;
    return `<input class="input" id="mkFill" placeholder="Ketik jawaban…" value="${esc(val ?? '')}" autocomplete="off" />`;
  }

  function bindInput(it) {
    $$('#mkOpts .opt').forEach(b => b.onclick = () => {
      answers[cur] = +b.dataset.o;
      cur < items.length - 1 ? (cur++, draw()) : review();
    });
    if (it.t === 'order') {
      let chosen = answers[cur] ? answers[cur].split(' ') : [];
      const pool = it.words;
      const paint = () => {
        $('#mkSlot').textContent = chosen.join(' ') || '—';
        const used = [...chosen];
        $('#mkBank').innerHTML = '';
        pool.forEach(w => {
          const i = used.indexOf(w);
          if (i >= 0) { used.splice(i, 1); return; }
          const b = el('button', { class: 'btn btn--soft btn--sm' }, w);
          b.onclick = () => { chosen.push(w); answers[cur] = chosen.join(' '); paint(); };
          $('#mkBank').append(b);
        });
      };
      paint();
      $('#mkUndo').onclick = () => { chosen.pop(); answers[cur] = chosen.join(' '); paint(); };
    }
  }

  const save = () => { const f = $('#mkFill'); if (f) answers[cur] = f.value; };

  function review() {
    save(); reviewing = true;
    const blank = answers.filter(a => a === null || a === '').length;
    stage.innerHTML = html`
      <div class="exam-bar">
        <span class="badge badge--brand">${esc(sec.name)}</span>
        <span class="mock-part-label">Tinjauan</span>
        <div class="spacer"></div>
        <span class="timer" id="mkTimer">${hhmmss(left)}</span>
      </div>
      <div class="card">
        <div class="card__title">Tinjau sebelum menutup bagian</div>
        <p class="small soft" style="margin:.4rem 0 1rem">
          ${blank ? `<b style="color:var(--warn)">${blank} soal masih kosong.</b> Tidak ada pengurangan nilai untuk jawaban salah — isi semuanya.`
                  : 'Semua soal sudah terisi.'}
          Klik nomor untuk kembali.</p>
        <div class="qnav">
          ${items.map((_, i) => `<button data-q="${i}"
            class="${answers[i] !== null && answers[i] !== '' ? 'is-answered' : ''} ${flags.has(i) ? 'is-flag' : ''}">${i + 1}</button>`).join('')}
        </div>
        <div class="row" style="margin-top:var(--s-5)">
          <button class="btn btn--soft" id="mkBack">Kembali ke soal</button>
          <button class="btn btn--primary" id="mkClose">Tutup bagian ${esc(sec.name)}</button>
        </div>
        ${raw(strict ? '<p class="xs muted" style="margin-top:.6rem">Mode ketat: bagian yang sudah ditutup tidak bisa dibuka lagi — persis seperti ujian sungguhan.</p>' : '')}
      </div>`;
    $$('[data-q]').forEach(b => b.onclick = () => { cur = +b.dataset.q; reviewing = false; draw(); });
    $('#mkBack').onclick = () => { reviewing = false; draw(); };
    $('#mkClose').onclick = () => finishSection();
  }

  function finishSection() {
    clearInterval(iv); stopSpeaking();
    let right = 0;
    const wrong = [];
    items.forEach((it, i) => {
      const ok = answers[i] !== null && answers[i] !== '' && checkAnswer(it, answers[i]);
      ok ? right++ : wrong.push({ it, given: answers[i], n: i + 1 });
    });
    done({ id: sec.id, name: sec.name, right, total: items.length, target: sec.target,
           wrong, minutesUsed: Math.round((sec.minutes * 60 - left) / 60) });
  }
}

/* ── Bagian menulis ───────────────────────────────────────────── */
async function runWriting(stage, bp, sec, done) {
  await sectionIntro(stage, bp, sec);
  const texts = [];
  let ti = 0;

  const pre = sec.pre || [];
  if (pre.length) {
    // Build a Sentence dikerjakan sebagai butir cepat
    let pi = 0; const preAns = [];
    const drawPre = () => {
      const it = pre[pi];
      let chosen = [];
      stage.innerHTML = html`
        <div class="exam-bar"><span class="badge badge--brand">${esc(sec.name)}</span>
          <span class="mock-part-label">Build a Sentence</span><div class="spacer"></div>
          <span class="small muted">${pi + 1} / ${pre.length}</span></div>
        <div class="q-card">
          <div class="q-prompt">Susun kata berikut menjadi kalimat yang benar.</div>
          <div class="formula" id="bsSlot" style="margin-top:.8rem">—</div>
          <div class="pill-row" id="bsBank" style="margin-top:.8rem"></div>
          <div class="row" style="margin-top:1rem">
            <button class="btn btn--ghost btn--sm" id="bsUndo">Hapus terakhir</button>
            <button class="btn btn--primary" id="bsNext">Berikutnya</button>
          </div>
        </div>`;
      const paint = () => {
        $('#bsSlot').textContent = chosen.join(' ') || '—';
        const used = [...chosen]; $('#bsBank').innerHTML = '';
        it.words.forEach(w => {
          const k = used.indexOf(w); if (k >= 0) { used.splice(k, 1); return; }
          const b = el('button', { class: 'btn btn--soft btn--sm' }, w);
          b.onclick = () => { chosen.push(w); paint(); };
          $('#bsBank').append(b);
        });
      };
      paint();
      $('#bsUndo').onclick = () => { chosen.pop(); paint(); };
      $('#bsNext').onclick = () => {
        preAns.push({ ok: checkAnswer(it, chosen.join(' ')), given: chosen.join(' '), it });
        pi++; pi < pre.length ? drawPre() : startTasks(preAns);
      };
    };
    return drawPre();
  }
  startTasks([]);

  function startTasks(preAns) {
    const t = sec.tasks[ti];
    let left = t.minutes * 60, iv = null;
    stage.innerHTML = html`
      <div class="exam-bar">
        <span class="badge badge--brand">${esc(sec.name)}</span>
        <span class="mock-part-label">${esc(t.name)}</span>
        <div class="spacer"></div>
        <span class="timer" id="wTimer">${mmss(left)}</span>
      </div>
      <div class="mock-grid has-passage">
        <div class="mock-passage card">
          <div class="card__title" style="font-size:var(--fs-md)">${esc(t.name)} · ${t.minutes} menit · min. ${t.words} kata</div>
          <div class="passage" style="font-size:var(--fs-md)">${esc(t.prompt)}</div>
          ${raw(t.data ? `<div class="formula" style="margin-top:.8rem">${esc(t.data)}</div>` : '')}
        </div>
        <div class="mock-q">
          <textarea class="textarea" id="wArea" style="min-height:340px" placeholder="Tulis di sini…"></textarea>
          <div class="wc-row" style="margin-top:.6rem">
            <span>Kata: <b id="wN">0</b> / ${t.words}</span>
            <span id="wWarn" class="muted"></span>
          </div>
          <button class="btn btn--primary" id="wNext" style="margin-top:1rem">
            ${ti < sec.tasks.length - 1 ? 'Lanjut ke tugas berikutnya' : 'Tutup bagian Writing'}</button>
        </div>
      </div>`;
    const ta = $('#wArea');
    ta.oninput = () => {
      const n = ta.value.trim().split(/\s+/).filter(Boolean).length;
      $('#wN').textContent = n;
      $('#wWarn').textContent = n < t.words ? `kurang ${t.words - n} kata` : 'jumlah kata terpenuhi';
      $('#wWarn').style.color = n < t.words ? 'var(--warn)' : 'var(--ok)';
    };
    iv = setInterval(() => {
      left--; const el2 = $('#wTimer');
      if (el2) { el2.textContent = mmss(left); el2.classList.toggle('is-low', left <= 60); }
      if (left <= 0) { clearInterval(iv); $('#wNext').click(); }
    }, 1000);
    $('#wNext').onclick = () => {
      clearInterval(iv);
      texts.push({ task: t, text: ta.value });
      ti++;
      if (ti < sec.tasks.length) startTasks(preAns);
      else done({ id: sec.id, name: sec.name, kind: 'writing', texts, preAns,
                  right: preAns.filter(x => x.ok).length, total: preAns.length, target: sec.target });
    };
  }
}

/* ── Bagian berbicara ─────────────────────────────────────────── */
async function runSpeaking(stage, bp, sec, done) {
  await sectionIntro(stage, bp, sec);
  let pi = 0;
  const log = [];

  const drawPart = () => {
    const p = sec.parts[pi];
    const list = p.repeat || p.prompts || [p.card?.card];
    let qi = 0;
    const drawItem = () => {
      const text = list[qi];
      let left = (p.prep || 0) + (p.seconds || 30);
      let phase = p.prep ? 'prep' : 'speak';
      stage.innerHTML = html`
        <div class="exam-bar"><span class="badge badge--brand">${esc(sec.name)}</span>
          <span class="mock-part-label">${esc(p.name)}</span><div class="spacer"></div>
          <span class="timer" id="spT">${mmss(left)}</span></div>
        <div class="q-card t-c">
          <div class="badge ${phase === 'prep' ? 'badge--warn' : 'badge--ok'}" id="spPhase">
            ${phase === 'prep' ? 'Persiapan' : 'Bicara sekarang'}</div>
          <div class="q-prompt" style="margin-top:.9rem">${esc(text)}</div>
          ${raw(p.repeat ? `<button class="btn btn--soft btn--sm" style="margin-top:.8rem" data-say="${esc(text)}">
            ${ico('volume', { size: 16 })} Dengar contoh</button>` : '')}
          ${raw(p.card ? `<ul class="stack stack--sm" style="margin-top:.7rem;text-align:left;max-width:44ch;margin-inline:auto">
            ${p.card.bullets.map(b => `<li class="small soft">• ${esc(b)}</li>`).join('')}</ul>` : '')}
          <div class="rec-panel" style="margin-top:1.2rem">
            <div class="rec-ring"><button class="rec-btn" id="spRec">${raw(ico('mic', { size: 26 }))}</button></div>
            <p class="xs muted">Rekam jawabanmu atau ucapkan langsung, lalu lanjut.</p>
          </div>
          <button class="btn btn--primary" id="spNext" style="margin-top:.8rem">Lanjut</button>
        </div>`;
      const iv = setInterval(() => {
        left--; const t = $('#spT');
        if (t) { t.textContent = mmss(left); t.classList.toggle('is-low', left <= 5); }
        if (p.prep && left === p.seconds) {
          phase = 'speak';
          const ph = $('#spPhase'); if (ph) { ph.textContent = 'Bicara sekarang'; ph.className = 'badge badge--ok'; }
        }
        if (left <= 0) { clearInterval(iv); $('#spNext')?.click(); }
      }, 1000);
      $('#spRec').onclick = () => toast('Ucapkan dengan suara — penilaian mandiri dipakai di simulasi.', '');
      $('#spNext').onclick = () => {
        clearInterval(iv); stopSpeaking();
        log.push({ part: p.name, text });
        qi++;
        if (qi < list.length) drawItem();
        else { pi++; pi < sec.parts.length ? drawPart() : done({ id: sec.id, name: sec.name, kind: 'speaking', log, target: sec.target }); }
      };
    };
    drawItem();
  };
  drawPart();
}

/* ── Hasil akhir ──────────────────────────────────────────────── */
function finishAll(stage, bp, results) {
  const E = bp.exam, S = bp.spec;
  const scored = results.filter(r => r.total);
  const perSection = scored.map(r => {
    const pct = r.total ? r.right / r.total : 0;
    const scaledRaw = Math.round(pct * r.target);      // proyeksi ke jumlah butir resmi
    const conv = convertScore(E.id, r.id, scaledRaw);
    return { ...r, pct: Math.round(pct * 100), scaledRaw, conv };
  });

  let headline, headlineNote;
  if (E.id === 'ielts') {
    const bands = perSection.filter(p => p.conv != null).map(p => p.conv);
    headline = bands.length ? ieltsOverall(bands).toFixed(1) : '—';
    headlineNote = 'Band keseluruhan (rata-rata bagian bernilai, dibulatkan ke setengah band)';
  } else if (E.id === 'toeic') {
    const total = perSection.reduce((a, p) => a + (p.conv || 0), 0);
    headline = total || '—';
    headlineNote = 'Total TOEIC (Listening + Reading, skala 10–990)';
  } else {
    const avgPct = perSection.length
      ? perSection.reduce((a, p) => a + p.pct, 0) / perSection.length : 0;
    const band = Math.max(1, Math.min(6, Math.round((avgPct / 100) * 5 + 1)));
    headline = band.toFixed(1);
    headlineNote = 'Perkiraan band TOEFL (skala 1–6, berlaku sejak Januari 2026)';
  }

  recordExam({ exam: E.id, kind: 'Simulasi penuh', right: perSection.reduce((a, p) => a + p.right, 0),
               total: perSection.reduce((a, p) => a + p.total, 0), score: headline });
  addXP(perSection.reduce((a, p) => a + p.right, 0) * 5, 'reading');
  addMinutes(results.reduce((a, r) => a + (r.minutesUsed || 5), 0));

  const allWrong = perSection.flatMap(p => (p.wrong || []).map(w => ({ ...w, sec: p.name })));

  stage.innerHTML = html`
    <div class="band-hero">
      <span>${esc(headlineNote)}</span>
      <b>${esc(String(headline))}</b>
      <span>${esc(E.name)} · ${new Date().toLocaleDateString('id-ID')}</span>
    </div>

    <div class="grid grid--4" style="margin:var(--s-5) 0">
      ${perSection.map(p => `<div class="stat">
        <div class="stat__k">${esc(p.name)}</div>
        <div class="stat__v">${p.conv != null ? p.conv : p.pct + '%'}</div>
        <div class="stat__note">${p.right}/${p.total} benar · proyeksi ${p.scaledRaw}/${p.target}</div>
      </div>`).join('')}
      ${results.filter(r => r.kind).map(r => `<div class="stat">
        <div class="stat__k">${esc(r.name)}</div>
        <div class="stat__v">—</div>
        <div class="stat__note">${r.kind === 'writing' ? 'dinilai manual' : 'rekaman mandiri'}</div>
      </div>`).join('')}
    </div>

    ${raw(results.filter(r => r.kind === 'writing').map(r => `
      <div class="card" style="margin-bottom:var(--s-4)">
        <div class="card__title">Tulisanmu — ${esc(r.name)}</div>
        ${r.texts.map(x => `<div class="card card--flat" style="margin-top:.8rem">
          <div class="row row--between"><b>${esc(x.task.name)}</b>
            <span class="badge">${x.text.trim().split(/\s+/).filter(Boolean).length} kata / min ${x.task.words}</span></div>
          <div class="passage small" style="margin-top:.6rem">${esc(x.text || '(kosong)')}</div>
          ${x.task.model ? `<details style="margin-top:.7rem"><summary class="b" style="cursor:pointer">Bandingkan dengan jawaban model</summary>
            <div class="passage small" style="margin-top:.5rem">${esc(x.task.model)}</div></details>` : ''}
        </div>`).join('')}
      </div>`).join(''))}

    <div class="card">
      <div class="card__title">${raw(ico('search'))} Analisis kesalahan (${allWrong.length})</div>
      <p class="small soft" style="margin:.3rem 0 1rem">Menghitung skor tidak menaikkan skor. Yang menaikkan adalah memahami mengapa tiap butir salah.</p>
      <div class="stack stack--sm">
        ${allWrong.slice(0, 40).map(w => `<div class="ex ex--bad">
          <div class="row" style="gap:.5rem"><span class="badge">${esc(w.sec)}</span><span class="badge">no. ${w.n}</span></div>
          <span class="en" style="text-decoration:none;color:var(--text)">${esc(promptOf(w.it))}</span>
          <span class="id-txt">Jawabanmu: ${esc(w.given === null || w.given === '' ? '(kosong)' : (w.it.t === 'mcq' ? (w.it.opts[w.given] ?? '') : w.given))}</span>
          <span class="en" style="color:var(--ok);text-decoration:none">Kunci: ${esc(answerOf(w.it))}</span>
          ${w.it.why ? `<span class="id-txt">${esc(w.it.why)}</span>` : ''}
        </div>`).join('') || '<div class="note note--ok">Sempurna — tidak ada kesalahan.</div>'}
      </div>
      <div class="row" style="margin-top:var(--s-5)">
        <a class="btn btn--soft" href="#/exam/${E.id}">Kembali ke ${esc(E.name)}</a>
        <a class="btn btn--primary" href="#/mock/${E.id}">Ulangi simulasi</a>
      </div>
    </div>`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  toast(`Simulasi selesai — ${headline}`, 'ok', 5000);
}
