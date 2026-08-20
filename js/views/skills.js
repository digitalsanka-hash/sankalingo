/* Empat keterampilan + pelafalan. */

import { $, $$, el, html, raw, esc, toast, sample, shuffle, mmss } from '../ui.js';
import { state, addXP, addMinutes, recordQuiz } from '../state.js';
import { say, sayList, stopSpeaking, listen, stopListening, scoreSpeech, sttReady, similarity } from '../speech.js';
import { runQuiz } from '../quiz.js';
import { DICTATIONS, READINGS, SHADOWING, SPEAKING_PROMPTS, WRITING_TASKS, WRITING_RULES,
         IPA_VOWELS, IPA_CONSONANTS, HARD_SOUNDS, STRESS_RULES, TONGUE_TWISTERS,
         CONNECTED_SPEECH, SENTENCE_FRAMES, IELTS, TOEFL, TOEIC } from '../data.js';

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];

/* ── MENYIMAK ─────────────────────────────────────────────────── */
export function renderListening() {
  const talks = [...IELTS.listenings, ...TOEFL.listenings, ...TOEIC.listenings];

  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">Menyimak</span>
      <h1>Laboratorium Menyimak</h1>
      <p>Semua audio dibangkitkan langsung oleh peramban, jadi kamu bisa mengulang, memperlambat,
         dan mendikte sebanyak yang kamu mau.</p>
    </div>
  </div>

  <div class="tabs" id="lTabs" style="margin-bottom:var(--s-5)">
    <button class="is-active" data-t="dictation">Dikte</button>
    <button data-t="talks">Simakan Panjang</button>
    <button data-t="numbers">Angka & Ejaan</button>
  </div>
  <div id="lBody"></div>`;

  const body = $('#lBody');
  const paint = t => {
    if (t === 'dictation') {
      body.innerHTML = html`
        <div class="card">
          <div class="card__title">Pilih tingkat kesulitan</div>
          <p class="small soft" style="margin:.4rem 0 1rem">Kamu akan mendengar kalimat, lalu menuliskannya persis. Akurasi 88% ke atas dihitung benar.</p>
          <div class="pill-row">${DICTATIONS.map(d =>
            `<button class="btn btn--soft" data-dict="${d.level}">${d.level} · ${d.items.length} kalimat</button>`).join('')}</div>
          <div id="dictBox" style="margin-top:var(--s-5)"></div>
        </div>`;
      $$('[data-dict]', body).forEach(b => b.onclick = () => {
        const set = DICTATIONS.find(d => d.level === b.dataset.dict);
        runQuiz($('#dictBox'), sample(set.items, 8).map(t => ({ t: 'dictate', text: t, level: set.level })),
          { skill: 'listening', quizKey: 'dict:' + set.level });
      });
    }
    if (t === 'talks') {
      body.innerHTML = html`
        <div class="grid grid--2">
          ${talks.map((l, i) => `<div class="card">
            <div class="row row--between">
              <div class="card__title">${esc(l.title)}</div>
              <span class="badge badge--lv lv-${l.level}">${l.level}</span>
            </div>
            <div class="card__sub">${l.lines.length} kalimat · ${l.questions.length} soal</div>
            <div class="row" style="margin-top:.9rem">
              <button class="btn btn--soft btn--sm" data-play="${i}">🔊 Putar</button>
              <button class="btn btn--ghost btn--sm" data-slow="${i}">🐢 Pelan</button>
              <button class="btn btn--primary btn--sm" data-quiz="${i}">Kerjakan soal</button>
              <button class="btn btn--ghost btn--sm" data-script="${i}">Teks</button>
            </div>
            <div id="scr-${i}" class="hide passage small" style="margin-top:.8rem"></div>
          </div>`).join('')}
        </div>
        <div id="talkQuiz" style="margin-top:var(--s-5)"></div>`;

      body.addEventListener('click', async e => {
        const p = e.target.closest('[data-play]'), sl = e.target.closest('[data-slow]');
        const q = e.target.closest('[data-quiz]'), sc = e.target.closest('[data-script]');
        if (p) { const l = talks[+p.dataset.play]; toast('Memutar simakan…'); await sayList(l.lines, 450); }
        if (sl) { const l = talks[+sl.dataset.slow]; for (const line of l.lines) await say(line, { rate: 0.68 }); }
        if (sc) {
          const i = +sc.dataset.script, box = $('#scr-' + i);
          box.classList.toggle('hide');
          box.innerHTML = talks[i].lines.map(x => `<div>${esc(x)}</div>`).join('');
        }
        if (q) {
          const l = talks[+q.dataset.quiz];
          runQuiz($('#talkQuiz'), l.questions.map(x => ({ ...x, level: l.level, tag: l.title })),
            { skill: 'listening', quizKey: 'talk:' + l.id });
          $('#talkQuiz').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
    if (t === 'numbers') {
      const nums = [];
      for (let i = 0; i < 12; i++) {
        const pairs = [[13,30],[14,40],[15,50],[16,60],[17,70],[18,80],[19,90]];
        const [a, b] = pairs[i % pairs.length];
        const pick = Math.random() < 0.5 ? a : b;
        nums.push({ t:'mcq', q:'Angka berapa yang kamu dengar?', audio:String(pick),
                    opts:[String(a), String(b)], a: pick === a ? 0 : 1, noShuffle:true,
                    why:`${a} bertekanan di akhir (thir-TEEN), ${b} di awal (THIR-ty).` });
      }
      const spell = ['Anggraini','Wijayanti','Kusumo','Hartono','Prasetyo','Nugroho']
        .map(n => ({ t:'fill', q:'Tulis nama yang dieja.', a:n,
                     why:`Ejaan: ${n.split('').join('-')}` }));
      body.innerHTML = html`
        <div class="note note--warn" style="margin-bottom:var(--s-4)">
          <strong>Titik bocor nilai terbesar</strong>
          Angka belasan vs puluhan dan ejaan nama menyumbang kehilangan nilai listening terbanyak. Latih khusus di sini.
        </div>
        <div id="numBox"></div>`;
      const items = shuffle([...nums, ...spell.map(s => ({ ...s, audio: s.a }))]).slice(0, 12);
      // untuk soal ejaan, bacakan huruf per huruf
      items.forEach(it => { if (it.t === 'fill') it.audio = it.a.split('').join(', '); });
      runQuiz($('#numBox'), items.map(it => ({
        ...it,
        ...(it.t === 'fill' ? { t: 'dictate', text: it.a, tol: 95 } : {})
      })), { skill: 'listening', quizKey: 'num' });
    }
  };
  paint('dictation');
  $$('#lTabs button').forEach(b => b.onclick = () => {
    $$('#lTabs button').forEach(x => x.classList.remove('is-active'));
    b.classList.add('is-active'); stopSpeaking(); paint(b.dataset.t);
  });
}

/* ── BERBICARA ────────────────────────────────────────────────── */
export function renderSpeaking() {
  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">Berbicara</span>
      <h1>Laboratorium Berbicara</h1>
      <p>Ucapkan, dan aplikasi akan mendengar lalu menandai kata mana yang tertangkap dan mana yang tidak.
         ${sttReady() ? '' : '<b>Peramban ini belum mendukung pengenalan ucapan — pakai Chrome atau Edge.</b>'}</p>
    </div>
  </div>

  <div class="tabs" id="sTabs" style="margin-bottom:var(--s-5)">
    <button class="is-active" data-t="shadow">Shadowing</button>
    <button data-t="prompt">Bicara Bebas</button>
    <button data-t="frames">Pola Kalimat</button>
    <button data-t="cue">Kartu IELTS Part 2</button>
  </div>
  <div id="sBody"></div>`;

  const body = $('#sBody');
  const paint = t => {
    if (t === 'shadow') {
      body.innerHTML = html`
        <div class="note" style="margin-bottom:var(--s-4)">
          <strong>Cara shadowing</strong>
          Putar kalimat, lalu ikuti bicara dengan jeda setengah detik. Tiru irama dan nadanya, bukan hanya kata-katanya.
          Ini metode tunggal paling ampuh untuk pelafalan sekaligus menyimak.
        </div>
        <div class="grid grid--2">
          ${SHADOWING.map((s, i) => `<div class="card">
            <div class="row row--between">
              <div class="card__title">${esc(s.title)}</div>
              <span class="badge badge--lv lv-${s.level}">${s.level}</span>
            </div>
            <div class="stack stack--sm" style="margin-top:.8rem">
              ${s.lines.map(l => `<div class="ex"><span class="en">${esc(l)}
                <button class="speak-btn" data-say="${esc(l)}" style="display:inline-grid;vertical-align:middle">🔊</button>
              </span></div>`).join('')}
            </div>
            <button class="btn btn--primary btn--sm" style="margin-top:.9rem" data-drill="${i}">🎙 Latih & nilai</button>
          </div>`).join('')}
        </div>
        <div id="shDrill" style="margin-top:var(--s-5)"></div>`;
      body.addEventListener('click', e => {
        const d = e.target.closest('[data-drill]');
        if (d) {
          const s = SHADOWING[+d.dataset.drill];
          runQuiz($('#shDrill'), s.lines.map(l => ({ t:'speak', text:l, level:s.level, tag:s.title })),
            { skill:'speaking', quizKey:'shadow:' + s.level });
          $('#shDrill').scrollIntoView({ behavior:'smooth' });
        }
      });
    }
    if (t === 'prompt') {
      body.innerHTML = html`
        <div class="grid grid--2">
          ${SPEAKING_PROMPTS.map(p => `<div class="card">
            <div class="row row--between"><div class="card__title">Level ${p.level}</div>
              <span class="badge badge--lv lv-${p.level}">${p.level}</span></div>
            <div class="stack stack--sm" style="margin-top:.7rem">
              ${p.items.map(x => `<div class="check" style="cursor:default"><span class="check__txt">${esc(x)}</span></div>`).join('')}
            </div>
          </div>`).join('')}
        </div>
        <div class="card" style="margin-top:var(--s-5)">
          <div class="card__title">🎙 Rekam jawaban satu menit</div>
          <p class="small soft" style="margin:.4rem 0 1rem">Pilih satu pertanyaan di atas, tekan tombol, dan bicaralah. Teks yang tertangkap akan muncul agar kamu bisa menilai kejelasanmu sendiri.</p>
          <div class="rec-panel">
            <button class="rec-btn" id="freeRec">🎙</button>
            <div class="heard" id="freeHeard">…</div>
            <div class="row" style="justify-content:center">
              <span class="badge" id="freeStat">siap</span>
            </div>
          </div>
        </div>`;
      const rec = $('#freeRec'), heard = $('#freeHeard'), stat = $('#freeStat');
      rec.onclick = async () => {
        if (!sttReady()) return toast('Peramban ini belum mendukung pengenalan ucapan.', 'bad');
        rec.classList.add('is-rec'); stat.textContent = 'mendengarkan…'; heard.textContent = '';
        try {
          const said = await listen({ onPartial: x => heard.textContent = x });
          heard.textContent = said || '(tidak terdengar)';
          const words = said.trim().split(/\s+/).filter(Boolean).length;
          stat.textContent = `${words} kata tertangkap`;
          addXP(Math.min(20, words), 'speaking');
        } catch (e) { toast(e.message, 'bad'); }
        rec.classList.remove('is-rec');
      };
    }
    if (t === 'frames') {
      body.innerHTML = html`
        <div class="grid grid--2">
          ${SENTENCE_FRAMES.map(g => `<div class="card">
            <div class="row row--between"><div class="card__title">${esc(g.group)}</div>
              <span class="badge badge--lv lv-${g.level}">${g.level}</span></div>
            <div class="ex-list" style="margin-top:.7rem">
              ${g.frames.map(([en, id]) => `<div class="ex">
                <span class="en">${esc(en)}
                  <button class="speak-btn" data-say="${esc(en)}" style="display:inline-grid;vertical-align:middle">🔊</button></span>
                <span class="id-txt">${esc(id)}</span></div>`).join('')}
            </div>
          </div>`).join('')}
        </div>`;
    }
    if (t === 'cue') {
      body.innerHTML = html`
        <div class="grid grid--2">
          ${IELTS.speaking.part2.map((c, i) => `<div class="card">
            <div class="card__title">${esc(c.card)}</div>
            <ul class="stack stack--sm" style="margin-top:.6rem">
              ${c.bullets.map(b => `<li class="small soft">• ${esc(b)}</li>`).join('')}
            </ul>
            <div class="pill-row" style="margin-top:.8rem">
              ${c.lexis.map(l => `<span class="badge badge--brand">${esc(l)}</span>`).join('')}
            </div>
            <button class="btn btn--primary btn--sm" style="margin-top:.9rem" data-cue="${i}">⏱ Latih 1+2 menit</button>
          </div>`).join('')}
        </div>
        <div id="cueBox" style="margin-top:var(--s-5)"></div>`;
      body.addEventListener('click', e => {
        const c = e.target.closest('[data-cue]');
        if (c) cueTimer($('#cueBox'), IELTS.speaking.part2[+c.dataset.cue]);
      });
    }
  };
  paint('shadow');
  $$('#sTabs button').forEach(b => b.onclick = () => {
    $$('#sTabs button').forEach(x => x.classList.remove('is-active'));
    b.classList.add('is-active'); stopSpeaking(); stopListening(); paint(b.dataset.t);
  });
}

function cueTimer(host, card) {
  host.innerHTML = html`
    <div class="card card--pad-lg t-c stack">
      <div class="card__title">${esc(card.card)}</div>
      <div class="timer" id="cueT" style="font-size:3rem">01:00</div>
      <div class="badge badge--warn" id="cuePhase">Persiapan — buat catatan kata kunci</div>
      <textarea class="textarea" id="cueNotes" style="min-height:96px" placeholder="Catatan kata kunci…"></textarea>
      <div class="row" style="justify-content:center">
        <button class="btn btn--soft" id="cueSkip">Lewati ke bicara</button>
        <button class="btn btn--danger btn--sm" id="cueStop">Berhenti</button>
      </div>
    </div>`;
  host.scrollIntoView({ behavior: 'smooth' });
  let t = 60, phase = 'prep', iv;
  const tEl = $('#cueT', host), pEl = $('#cuePhase', host);
  const tick = () => {
    t--; tEl.textContent = mmss(t);
    tEl.classList.toggle('is-low', t <= 10);
    if (t <= 0) {
      if (phase === 'prep') { phase = 'speak'; t = 120;
        pEl.textContent = 'Bicara sekarang — jangan berhenti sebelum waktu habis';
        pEl.className = 'badge badge--ok'; say('You may start speaking now.'); }
      else { clearInterval(iv); pEl.textContent = 'Selesai. Bagus!'; addXP(25, 'speaking'); addMinutes(3); }
    }
  };
  iv = setInterval(tick, 1000);
  $('#cueSkip', host).onclick = () => { if (phase === 'prep') t = 1; };
  $('#cueStop', host).onclick = () => { clearInterval(iv); host.innerHTML = ''; };
}

/* ── MEMBACA ──────────────────────────────────────────────────── */
export function renderReadingIndex() {
  const all = [
    ...READINGS.map(r => ({ ...r, src: 'Umum' })),
    ...IELTS.readings.map(r => ({ ...r, src: 'IELTS' })),
    ...TOEFL.readings.map(r => ({ ...r, src: 'TOEFL' })),
    ...TOEIC.readings.map(r => ({ ...r, src: 'TOEIC' }))
  ];
  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">Membaca</span>
      <h1>Laboratorium Membaca</h1>
      <p>Bacaan bertingkat dari A1 sampai C1, ditambah teks bergaya IELTS, TOEFL, dan TOEIC —
         lengkap dengan pewaktu dan soal pemahaman.</p>
    </div>
  </div>
  <div class="grid grid--2">
    ${all.map(r => `<a class="card card--link" href="#/reading/${r.id}">
      <div class="row row--between">
        <span class="badge badge--lv lv-${r.level}">${r.level}</span>
        <span class="badge badge--brand">${r.src}</span>
      </div>
      <div class="card__title" style="margin-top:.5rem">${esc(r.title)}</div>
      <div class="card__sub">${r.words || '±350'} kata · ${r.questions.length} soal</div>
      <p class="small soft" style="margin-top:.6rem">${esc(r.text.slice(0, 120))}…</p>
    </a>`).join('')}
  </div>`;
}

export function renderReading(id) {
  const all = [...READINGS, ...IELTS.readings, ...TOEFL.readings, ...TOEIC.readings];
  const r = all.find(x => x.id === id);
  if (!r) return $('#main').innerHTML = '<p>Bacaan tidak ditemukan.</p>';

  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <a class="small muted" href="#/reading">← Semua bacaan</a>
      <h1 style="margin-top:.4rem">${esc(r.title)}</h1>
      <p class="small muted">${r.words || '±350'} kata · target ${r.minutes || Math.ceil((r.words || 350) / 90)} menit</p>
    </div>
    <div class="row">
      <span class="badge badge--lv lv-${r.level}">${r.level}</span>
      <span class="timer" id="rdTimer">00:00</span>
      <button class="btn btn--soft btn--sm" id="rdSpeak">🔊 Bacakan</button>
    </div>
  </div>

  <div class="card"><div class="passage">${esc(r.text)}</div></div>
  <div class="row" style="margin:var(--s-5) 0">
    <button class="btn btn--primary btn--lg" id="rdGo">Selesai membaca — kerjakan soal</button>
  </div>
  <div id="rdQuiz"></div>`;

  let sec = 0;
  const iv = setInterval(() => { sec++; $('#rdTimer').textContent = mmss(sec); }, 1000);
  const stop = new MutationObserver(() => {
    if (!document.body.contains($('#rdTimer'))) { clearInterval(iv); stop.disconnect(); }
  });
  stop.observe(document.body, { childList: true, subtree: true });

  $('#rdSpeak').onclick = () => say(r.text.slice(0, 1200));
  $('#rdGo').onclick = () => {
    clearInterval(iv);
    const wpm = Math.round((r.words || 350) / Math.max(0.2, sec / 60));
    toast(`Kecepatan bacamu ${wpm} kata/menit. Target IELTS: 200+`, wpm >= 180 ? 'ok' : 'warn', 5000);
    addMinutes(Math.max(1, Math.round(sec / 60)));
    $('#rdGo').remove();
    runQuiz($('#rdQuiz'), r.questions.map(q => ({ ...q, level: r.level, tag: r.title })),
      { skill: 'reading', quizKey: 'rd:' + r.id });
  };
}

/* ── MENULIS ──────────────────────────────────────────────────── */
export function renderWriting() {
  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">Menulis</span>
      <h1>Laboratorium Menulis</h1>
      <p>Pilih tugas, tulis dengan pewaktu, lalu jalankan pemeriksa. Pemeriksa mencari kesalahan
         yang paling sering dibuat penutur Indonesia dan menandai ragam bahasa yang terlalu santai.</p>
    </div>
  </div>

  <div class="tabs" id="wTabs" style="margin-bottom:var(--s-4)">
    <button class="is-active" data-t="task">Tugas & Model</button>
    <button data-t="free">Pemeriksa Bebas</button>
    <button data-t="check">Daftar Periksa</button>
  </div>
  <div id="wBody"></div>`;

  const body = $('#wBody');
  const paint = t => {
    if (t === 'task') {
      body.innerHTML = html`
        <div class="grid grid--2">
          ${WRITING_TASKS.map((w, i) => `<div class="card">
            <div class="row row--between">
              <div class="card__title">${esc(w.type)}</div>
              <span class="badge badge--lv lv-${w.level}">${w.level}</span>
            </div>
            <div class="card__sub">${w.minutes} menit · target ${w.words} kata</div>
            <p class="small" style="margin:.7rem 0">${esc(w.prompt)}</p>
            <div class="note small"><strong>Kerangka</strong>${w.frame.map(f => `<div>• ${esc(f)}</div>`).join('')}</div>
            <div class="row" style="margin-top:.8rem">
              <button class="btn btn--primary btn--sm" data-write="${i}">✍️ Kerjakan</button>
              ${w.model ? `<button class="btn btn--ghost btn--sm" data-model="${i}">Lihat model</button>` : ''}
            </div>
            <div id="wm-${i}" class="hide" style="margin-top:.8rem"></div>
          </div>`).join('')}
        </div>
        <div id="wEditor" style="margin-top:var(--s-5)"></div>`;
      body.addEventListener('click', e => {
        const m = e.target.closest('[data-model]'), w = e.target.closest('[data-write]');
        if (m) {
          const i = +m.dataset.model, box = $('#wm-' + i);
          box.classList.toggle('hide');
          box.innerHTML = `<div class="note note--ok"><strong>Model</strong>
            <div class="passage" style="font-size:var(--fs-md)">${esc(WRITING_TASKS[i].model)}</div></div>`;
        }
        if (w) { editor($('#wEditor'), WRITING_TASKS[+w.dataset.write]); }
      });
    }
    if (t === 'free') editor(body, null);
    if (t === 'check') {
      body.innerHTML = html`
        <div class="grid grid--2">
          <div class="card">
            <div class="card__title">Daftar periksa IELTS Writing</div>
            <div class="stack stack--sm" style="margin-top:.8rem">
              ${IELTS.writing.checklist.map(c => `<div class="check" style="cursor:default">
                <span class="check__box">✓</span><span class="check__txt">${esc(c)}</span></div>`).join('')}
            </div>
          </div>
          <div class="card">
            <div class="card__title">Daftar periksa TOEFL & TOEIC</div>
            <div class="stack stack--sm" style="margin-top:.8rem">
              ${[...TOEFL.writing.checklist, ...TOEIC.writing.checklist].map(c => `<div class="check" style="cursor:default">
                <span class="check__box">✓</span><span class="check__txt">${esc(c)}</span></div>`).join('')}
            </div>
          </div>
        </div>`;
    }
  };
  paint('task');
  $$('#wTabs button').forEach(b => b.onclick = () => {
    $$('#wTabs button').forEach(x => x.classList.remove('is-active'));
    b.classList.add('is-active'); paint(b.dataset.t);
  });
}

function editor(host, task) {
  host.innerHTML = html`
  <div class="card">
    <div class="row row--between" style="margin-bottom:var(--s-3)">
      <div class="card__title">${task ? esc(task.type) : 'Tulis bebas'}</div>
      <div class="row">
        <span class="timer" id="wTimer">${task ? mmss(task.minutes * 60) : '00:00'}</span>
        <button class="btn btn--soft btn--sm" id="wStart">▶ Mulai</button>
      </div>
    </div>
    ${raw(task ? `<p class="small soft" style="margin-bottom:.8rem">${esc(task.prompt)}</p>` : '')}
    <textarea class="textarea" id="wArea" style="min-height:280px" placeholder="Tulis di sini…"></textarea>
    <div class="wc-row" style="margin-top:.6rem">
      <span>Kata: <b id="wCount">0</b>${task ? ` / ${task.words}` : ''}</span>
      <span>Kalimat: <b id="wSent">0</b></span>
      <span>Rata-rata panjang kalimat: <b id="wAvg">0</b></span>
      <span>Kata unik: <b id="wUniq">0</b></span>
    </div>
    <div class="row" style="margin-top:var(--s-4)">
      <button class="btn btn--primary" id="wCheck">🔍 Periksa tulisan</button>
      ${raw(task?.model ? `<button class="btn btn--ghost" id="wCompare">Bandingkan dengan model</button>` : '')}
    </div>
    <div id="wOut" style="margin-top:var(--s-4)"></div>
  </div>`;
  host.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const ta = $('#wArea', host);
  const upd = () => {
    const txt = ta.value.trim();
    const words = txt ? txt.split(/\s+/).filter(Boolean) : [];
    const sents = txt ? txt.split(/[.!?]+/).filter(s => s.trim()) : [];
    $('#wCount', host).textContent = words.length;
    $('#wSent', host).textContent = sents.length;
    $('#wAvg', host).textContent = sents.length ? Math.round(words.length / sents.length) : 0;
    $('#wUniq', host).textContent = new Set(words.map(w => w.toLowerCase().replace(/\W/g, ''))).size;
  };
  ta.oninput = upd;

  let iv = null, left = task ? task.minutes * 60 : 0;
  $('#wStart', host).onclick = () => {
    if (iv) { clearInterval(iv); iv = null; $('#wStart', host).textContent = '▶ Lanjut'; return; }
    $('#wStart', host).textContent = '⏸ Jeda';
    iv = setInterval(() => {
      task ? left-- : left++;
      $('#wTimer', host).textContent = mmss(left);
      $('#wTimer', host).classList.toggle('is-low', task && left <= 120);
      if (task && left <= 0) { clearInterval(iv); iv = null; toast('Waktu habis!', 'warn'); }
    }, 1000);
  };

  $('#wCheck', host).onclick = () => {
    const txt = ta.value;
    if (txt.trim().length < 40) return toast('Tulis lebih banyak dulu.', 'warn');
    $('#wOut', host).innerHTML = checkWriting(txt, task);
    addXP(15, 'writing'); addMinutes(10);
  };
  const cmp = $('#wCompare', host);
  if (cmp) cmp.onclick = () => {
    $('#wOut', host).innerHTML = `<div class="note note--ok"><strong>Model</strong>
      <div class="passage" style="font-size:var(--fs-md)">${esc(task.model)}</div></div>`;
  };
  upd();
}

export function checkWriting(txt, task) {
  const findings = [];
  WRITING_RULES.forEach(r => {
    if (r.re) {
      const hits = [...txt.matchAll(r.re)].map(m => m[0]);
      if (hits.length) findings.push({ ...r, hits: [...new Set(hits)].slice(0, 6), n: hits.length });
    }
  });
  const sents = txt.split(/(?<=[.!?])\s+/).filter(s => s.trim());
  const longOnes = sents.filter(s => s.split(/\s+/).length > 45);
  if (longOnes.length) findings.push({ kind:'warn', n: longOnes.length,
    msg:'Ada kalimat lebih dari 45 kata — pecah agar tetap jelas.', hits: longOnes.map(s => s.slice(0, 60) + '…') });

  const words = txt.trim().split(/\s+/).filter(Boolean);
  const uniq = new Set(words.map(w => w.toLowerCase().replace(/\W/g, '')));
  const ttr = Math.round((uniq.size / Math.max(1, words.length)) * 100);
  const avg = Math.round(words.length / Math.max(1, sents.length));
  const complex = (txt.match(/\b(although|whereas|which|because|while|despite|however|therefore|if)\b/gi) || []).length;

  const bad = findings.filter(f => f.kind === 'bad').length;
  const warn = findings.filter(f => f.kind === 'warn').length;
  const score = Math.max(30, 100 - bad * 9 - warn * 3
    + (ttr > 45 ? 4 : 0) + (complex >= 4 ? 4 : 0)
    + (task && words.length >= task.words ? 4 : 0));

  return html`
  <div class="grid grid--4" style="margin-bottom:var(--s-4)">
    <div class="stat"><div class="stat__k">Skor pemeriksa</div><div class="stat__v">${Math.min(100, score)}</div>
      <div class="stat__note">heuristik, bukan nilai resmi</div></div>
    <div class="stat"><div class="stat__k">Keragaman kata</div><div class="stat__v">${ttr}%</div>
      <div class="stat__note">${ttr >= 45 ? 'baik' : 'terlalu banyak pengulangan'}</div></div>
    <div class="stat"><div class="stat__k">Rata-rata kalimat</div><div class="stat__v">${avg}</div>
      <div class="stat__note">${avg >= 14 && avg <= 24 ? 'ideal' : avg < 14 ? 'terlalu pendek' : 'terlalu panjang'}</div></div>
    <div class="stat"><div class="stat__k">Penanda kompleks</div><div class="stat__v">${complex}</div>
      <div class="stat__note">${complex >= 4 ? 'ragam struktur baik' : 'tambah kalimat kompleks'}</div></div>
  </div>
  ${raw(findings.length ? findings.map(f => `
    <div class="note note--${f.kind === 'bad' ? 'bad' : 'warn'}" style="margin-bottom:.6rem">
      <strong>${f.kind === 'bad' ? '✕ Perbaiki' : '⚠ Pertimbangkan'} (${f.n}×)</strong>
      ${esc(f.msg)}
      <div class="small muted" style="margin-top:.3rem">Ditemukan: ${f.hits.map(h => `<code>${esc(h)}</code>`).join(' · ')}</div>
    </div>`).join('')
    : '<div class="note note--ok"><strong>Bersih</strong>Pemeriksa tidak menemukan pola kesalahan umum. Periksa manual artikel dan -s jamak.</div>')}
  ${raw(task ? `<div class="note" style="margin-top:.6rem"><strong>Jumlah kata</strong>
    ${words.length} dari target ${task.words}${words.length < task.words ? ' — masih kurang, nilai bisa dipotong.' : ' — cukup.'}</div>` : '')}`;
}

/* ── PELAFALAN ────────────────────────────────────────────────── */
export function renderPronunciation() {
  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">Pelafalan</span>
      <h1>Bunyi, Tekanan, dan Irama</h1>
      <p>Aksen tidak dinilai di ujian mana pun. Yang dinilai adalah kejelasan.
         Delapan kelompok bunyi berikut adalah penyebab utama penutur Indonesia sulit dipahami.</p>
    </div>
  </div>

  <div class="tabs" id="pTabs" style="margin-bottom:var(--s-5)">
    <button class="is-active" data-t="hard">Bunyi Sulit</button>
    <button data-t="ipa">Bagan IPA</button>
    <button data-t="stress">Tekanan Kata</button>
    <button data-t="connected">Bunyi Bersambung</button>
    <button data-t="twist">Pemanasan Lidah</button>
  </div>
  <div id="pBody"></div>`;

  const body = $('#pBody');
  const paint = t => {
    if (t === 'hard') {
      body.innerHTML = HARD_SOUNDS.map(s => `
      <div class="card" style="margin-bottom:var(--s-4)">
        <div class="row row--between">
          <div class="card__title">${esc(s.title)} <span class="ipa">${esc(s.sound)}</span></div>
          <button class="btn btn--soft btn--sm" data-say="${esc(s.words.slice(0, 6).join(', '))}">🔊 Putar contoh</button>
        </div>
        <div class="note note--warn" style="margin-top:.7rem"><strong>Kenapa sulit</strong>${esc(s.why)}</div>
        <ul class="stack stack--sm" style="margin-top:.8rem">
          ${s.how.map(h => `<li class="row" style="align-items:flex-start;gap:.6rem">
            <span style="color:var(--brand-text)">▸</span><span>${esc(h)}</span></li>`).join('')}
        </ul>
        <div class="stack stack--sm" style="margin-top:.9rem">
          ${s.pairs.map(([a, b]) => `<div class="pair">
            <button data-say="${esc(a)}">🔊 <span class="en">${esc(a)}</span></button>
            <span class="pair__vs">vs</span>
            <button data-say="${esc(b)}"><span class="en">${esc(b)}</span> 🔊</button>
          </div>`).join('')}
        </div>
        <div class="pill-row" style="margin-top:.9rem">
          ${s.words.map(w => `<button class="badge" data-say="${esc(w)}">${esc(w)}</button>`).join('')}
        </div>
        <button class="btn btn--primary btn--sm" style="margin-top:.9rem" data-prac="${s.id}">🎙 Uji pengucapanku</button>
      </div>`).join('') + '<div id="pracBox"></div>';

      body.addEventListener('click', e => {
        const p = e.target.closest('[data-prac]');
        if (p) {
          const s = HARD_SOUNDS.find(x => x.id === p.dataset.prac);
          runQuiz($('#pracBox'), sample(s.words, 5).map(w => ({ t:'speak', text:w, tag:s.title, tol:60 })),
            { skill:'speaking', quizKey:'pron:' + s.id, xpPerItem:5 });
          $('#pracBox').scrollIntoView({ behavior:'smooth' });
        }
      });
    }
    if (t === 'ipa') {
      body.innerHTML = html`
        <div class="card"><div class="card__title">Vokal</div>
          <div class="ipa-grid" style="margin-top:.8rem">
            ${IPA_VOWELS.map(([sym, ex, note]) => `<button class="ipa-cell" data-say="${esc(ex.split(' ')[0])}"
              title="${esc(note)}"><b>${esc(sym)}</b><span>${esc(ex)}</span></button>`).join('')}
          </div></div>
        <div class="card" style="margin-top:var(--s-4)"><div class="card__title">Konsonan</div>
          <div class="ipa-grid" style="margin-top:.8rem">
            ${IPA_CONSONANTS.map(([sym, ex, note]) => `<button class="ipa-cell" data-say="${esc(ex)}"
              title="${esc(note)}"><b>${esc(sym)}</b><span>${esc(ex)}</span></button>`).join('')}
          </div></div>`;
    }
    if (t === 'stress') {
      body.innerHTML = STRESS_RULES.map(r => `
        <div class="card" style="margin-bottom:var(--s-3)">
          <div class="card__title" style="font-size:var(--fs-md)">${esc(r.rule)}</div>
          <div class="pill-row" style="margin-top:.6rem">
            ${r.ex.map(x => `<button class="badge badge--brand"
              data-say="${esc(x.replace(/\(.*?\)/g, '').trim().toLowerCase())}">${esc(x)}</button>`).join('')}
          </div>
        </div>`).join('');
    }
    if (t === 'connected') {
      body.innerHTML = html`
        <div class="note" style="margin-bottom:var(--s-4)">
          <strong>Inilah alasan listening terasa cepat</strong>
          Penutur asli tidak mengucapkan kata satu per satu. Mereka menyambung, menghilangkan, dan melemahkan bunyi.
        </div>
        <div class="table-wrap"><table class="tbl">
          <thead><tr><th>Tertulis</th><th>Terdengar</th><th>Aturan</th><th></th></tr></thead>
          <tbody>${CONNECTED_SPEECH.map(([a, b, c]) => `<tr>
            <td class="en">${esc(a)}</td><td class="mono">${esc(b)}</td><td class="small muted">${esc(c)}</td>
            <td><button class="speak-btn" data-say="${esc(a)}">🔊</button></td></tr>`).join('')}
          </tbody></table></div>`;
    }
    if (t === 'twist') {
      body.innerHTML = html`
        <div class="grid grid--2">
          ${TONGUE_TWISTERS.map(([t2, note]) => `<div class="card">
            <div class="en" style="font-size:var(--fs-lg)">${esc(t2)}</div>
            <div class="xs muted" style="margin-top:.4rem">${esc(note)}</div>
            <div class="row" style="margin-top:.8rem">
              <button class="btn btn--soft btn--sm" data-say="${esc(t2)}">🔊 Dengar</button>
              <button class="btn btn--ghost btn--sm" data-slow="${esc(t2)}">🐢 Pelan</button>
            </div>
          </div>`).join('')}
        </div>
        <div class="card" style="margin-top:var(--s-4)">
          <div class="card__title">🎙 Uji semua pemanasan</div>
          <button class="btn btn--primary btn--sm" style="margin-top:.7rem" id="twGo">Mulai uji</button>
          <div id="twBox" style="margin-top:var(--s-4)"></div>
        </div>`;
      $('#twGo', body).onclick = () => runQuiz($('#twBox'),
        sample(TONGUE_TWISTERS, 4).map(([t2]) => ({ t:'speak', text:t2, tag:'Pemanasan', tol:55 })),
        { skill:'speaking', quizKey:'twister' });
    }
    body.addEventListener('click', e => {
      const sl = e.target.closest('[data-slow]');
      if (sl) say(sl.dataset.slow, { rate: 0.6 });
    });
  };
  paint('hard');
  $$('#pTabs button').forEach(b => b.onclick = () => {
    $$('#pTabs button').forEach(x => x.classList.remove('is-active'));
    b.classList.add('is-active'); stopSpeaking(); paint(b.dataset.t);
  });
}
