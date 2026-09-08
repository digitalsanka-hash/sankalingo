/* Simulasi TOEFL ITP — Set 3
   Semua teks karangan sendiri, mengikuti blueprint ITP Level 1:
   50 Listening (30 + 8 + 12) · 40 Structure & Written Expression (15 + 25) · 50 Reading (5 × 10).
   Periksa: node tools/cek-itp.mjs data/itp/itp-03.js                                   */

export const ITP_03 = {
  id: "itp-03",
  judul: "Set 3",

  listening: {
    /* ── Part A · 30 dialog pendek (mudah → sulit) ─────────────────────── */
    partA: [
      /* 1–8: makna langsung, distraktor bunyi mirip / kata yang terdengar */
      {
        lines: [
          "M: Did you finish the reading for tomorrow's history seminar?",
          "W: I got through most of it, but the last chapter is still waiting.",
          "N: What does the woman mean?",
        ],
        q: "What does the woman mean?",
        opts: [
          "She has read the last chapter twice.",
          "She has not finished the reading yet.",
          "She is waiting for the history seminar to begin.",
          "She lost the last chapter of the book.",
        ],
        a: 1,
        why: "“The last chapter is still waiting” = bab terakhir belum dibaca. Pilihan C menangkap kata “waiting” tapi dengan arti harfiah yang keliru; A dan D tidak disebut sama sekali.",
      },
      {
        lines: [
          "W: The weather forecast says it will be clear all weekend.",
          "M: Great, then the hiking trip is still on.",
          "N: What does the man mean?",
        ],
        q: "What does the man mean?",
        opts: [
          "The hike will take place as planned.",
          "The forecast is not clear to him.",
          "The trip has been moved to next weekend.",
          "He plans to hike alone.",
        ],
        a: 0,
        why: "“Still on” = tetap jadi/berlangsung. Pilihan B memelintir kata “clear” menjadi “jelas”; C dan D tidak disebut.",
      },
      {
        lines: [
          "M: Is the campus bookstore open this late?",
          "W: It closes at nine, so you've got about half an hour.",
          "N: What time is it now?",
        ],
        q: "What time is it now?",
        opts: [
          "About nine o'clock.",
          "About nine-thirty.",
          "About eight o'clock.",
          "About eight-thirty.",
        ],
        a: 3,
        why: "Toko tutup pukul sembilan dan masih tersisa sekitar setengah jam → sekarang kira-kira 8.30. Pilihan B membalik hitungannya (setengah jam sesudah tutup), A adalah jam tutupnya.",
      },
      {
        lines: [
          "W: I heard the pool will be closed for repairs next week.",
          "M: Yes, they're replacing the tiles along the deep end.",
          "N: What are the speakers discussing?",
        ],
        q: "What are the speakers discussing?",
        opts: [
          "A plan to go swimming next week.",
          "A sale on tiles at a hardware store.",
          "Maintenance work at the pool.",
          "The depth of the swimming pool.",
        ],
        a: 2,
        why: "Kolam ditutup untuk perbaikan ubin = pekerjaan pemeliharaan. Pilihan D menangkap kata “deep end” tetapi bukan topiknya; A justru mustahil karena kolamnya tutup.",
      },
      {
        lines: [
          "M: Could you lend me your notes from Tuesday's lecture?",
          "W: Sure, but I'll need them back by Thursday.",
          "N: What will the woman probably do?",
        ],
        q: "What will the woman probably do?",
        opts: [
          "Borrow the man's notes on Thursday.",
          "Give the man her notes for a short time.",
          "Attend the lecture again on Tuesday.",
          "Ask the man to take notes for her.",
        ],
        a: 1,
        why: "“Sure, but I'll need them back by Thursday” = meminjamkan sebentar. Pilihan A membalik siapa yang meminjam; C dan D tidak disebut.",
      },
      {
        lines: [
          "W: Have you seen my umbrella? I left it by the door this morning.",
          "M: I think Karen took it by mistake when she left for class.",
          "N: What does the man say about the umbrella?",
        ],
        q: "What does the man say about the umbrella?",
        opts: [
          "It is still by the door.",
          "He borrowed it for class.",
          "The woman lost it this morning.",
          "Someone else took it accidentally.",
        ],
        a: 3,
        why: "“Took it by mistake” = terbawa tanpa sengaja oleh Karen, bukan oleh si pria (B). Pilihan A bertentangan dengan dialog; C hanya dugaan si wanita, bukan keterangan si pria.",
      },
      {
        lines: [
          "M: That new café on Elm Street has really good sandwiches, and the prices are fair.",
          "W: I'll have to try it. I usually just grab something from the vending machine.",
          "N: What does the woman imply?",
        ],
        q: "What does the woman imply?",
        opts: [
          "She has not eaten at the café.",
          "She thinks the café is too expensive.",
          "She prefers the food from the vending machine.",
          "She works at the café on Elm Street.",
        ],
        a: 0,
        why: "“I'll have to try it” berarti ia belum pernah mencoba. Pilihan B bertentangan dengan “prices are fair”; C keliru karena ia membeli dari mesin bukan karena lebih suka, melainkan karena praktis.",
      },
      {
        lines: [
          "W: Where did you put the receipt for the printer?",
          "M: It's in the top drawer of the desk, under the stapler.",
          "N: What does the man say about the receipt?",
        ],
        q: "What does the man say about the receipt?",
        opts: [
          "It was thrown away with the printer box.",
          "He gave it to the woman earlier.",
          "It is inside the desk.",
          "It is on top of the stapler.",
        ],
        a: 2,
        why: "“In the top drawer of the desk” = di dalam laci meja. Pilihan D membalik posisi (di bawah stapler, bukan di atasnya); A dan B tidak disebut.",
      },

      /* 9–18: idiom & ungkapan; distraktor menafsirkan harfiah */
      {
        lines: [
          "M: Are we still meeting at the library tonight to go over the statistics problems?",
          "W: Actually, I'm feeling a bit under the weather, so let's do it tomorrow.",
          "N: Why does the woman want to postpone the meeting?",
        ],
        q: "Why does the woman want to postpone the meeting?",
        opts: [
          "She is worried about the weather tonight.",
          "She is not feeling well.",
          "She has finished the statistics problems.",
          "She wants to meet outdoors instead.",
        ],
        a: 1,
        why: "“Under the weather” = kurang sehat. Pilihan A menafsirkan “weather” secara harfiah; C dan D tidak disebut.",
      },
      {
        lines: [
          "W: How did the presentation go? You looked nervous beforehand.",
          "M: Honestly, it was a piece of cake once I got started.",
          "N: What does the man say about the presentation?",
        ],
        q: "What does the man say about the presentation?",
        opts: [
          "He served cake to the audience.",
          "He was too nervous to begin.",
          "It took longer than he expected.",
          "It turned out to be easy.",
        ],
        a: 3,
        why: "“A piece of cake” = sangat mudah. Pilihan A harfiah; B keliru karena gugupnya hanya sebelum mulai, dan ia tetap memulai.",
      },
      {
        lines: [
          "M: Has the department decided who will teach the summer course?",
          "W: As far as I know, it's still up in the air.",
          "N: What does the woman mean?",
        ],
        q: "What does the woman mean?",
        opts: [
          "No decision has been made yet.",
          "The course will be taught outdoors.",
          "The department has cancelled the course.",
          "The instructor is away on a flight.",
        ],
        a: 0,
        why: "“Up in the air” = belum pasti, belum diputuskan. Pilihan B dan D menafsirkan “air” secara harfiah; C tidak disebut.",
      },
      {
        lines: [
          "W: I've been working on this lab report since eight this morning.",
          "M: Why don't you call it a day and finish tomorrow?",
          "N: What does the man suggest the woman do?",
        ],
        q: "What does the man suggest the woman do?",
        opts: [
          "Telephone the lab in the morning.",
          "Work on the report until midnight.",
          "Stop working for now.",
          "Rewrite the report from the beginning.",
        ],
        a: 2,
        why: "“Call it a day” = menyudahi pekerjaan untuk hari ini. Pilihan A menafsirkan “call” sebagai menelepon; B justru kebalikannya.",
      },
      {
        lines: [
          "M: Do you remember the name of the author who wrote that article on coral reefs?",
          "W: It's on the tip of my tongue, but I just can't come up with it.",
          "N: What does the woman mean?",
        ],
        q: "What does the woman mean?",
        opts: [
          "She wrote the article on coral reefs herself.",
          "She has never read the article.",
          "She will look up the name later.",
          "She almost remembers the name but not quite.",
        ],
        a: 3,
        why: "“On the tip of my tongue” = hampir teringat tetapi belum keluar. Pilihan C mungkin saja, tetapi tidak dikatakan; B bertentangan karena ia jelas pernah tahu namanya.",
      },
      {
        lines: [
          "W: I can't believe how much the professor assigned for next week. I'll never get through it all.",
          "M: Don't worry, we're all in the same boat.",
          "N: What does the man mean?",
        ],
        q: "What does the man mean?",
        opts: [
          "The class will take a boat trip next week.",
          "Everyone has the same heavy workload.",
          "The professor will reduce the assignment.",
          "He has already finished the reading.",
        ],
        a: 1,
        why: "“In the same boat” = mengalami keadaan yang sama. Pilihan A harfiah; C dan D bertentangan dengan nada pasrah si pria.",
      },
      {
        lines: [
          "M: Do you think Professor Lin will let me hand in my essay a week late?",
          "W: You can ask, but it's a long shot. She's pretty strict about deadlines.",
          "N: What does the woman imply?",
        ],
        q: "What does the woman imply?",
        opts: [
          "The professor is unlikely to agree.",
          "The essay should be much longer.",
          "The man should ask the professor in person.",
          "The professor will probably extend the deadline.",
        ],
        a: 0,
        why: "“A long shot” = kemungkinannya kecil. Pilihan D kebalikannya; B menafsirkan “long” secara harfiah; C tidak disebut.",
      },
      {
        lines: [
          "W: How's the new editing software working out for you?",
          "M: It took a few days, but I'm finally getting the hang of it.",
          "N: What does the man mean?",
        ],
        q: "What does the man mean?",
        opts: [
          "He has decided to stop using the software.",
          "He needs a few more days to install it.",
          "He is learning how to use it.",
          "He thinks the software is poorly designed.",
        ],
        a: 2,
        why: "“Getting the hang of it” = mulai menguasai. Pilihan A dan D bernada negatif padahal si pria puas; B salah menafsirkan “took a few days” (itu waktu belajar, bukan waktu memasang).",
      },
      {
        lines: [
          "M: I need to know by Friday whether you can help with the fundraiser. Please just tell me yes or no.",
          "W: Okay, I'll stop beating around the bush. I can't make it.",
          "N: What does the woman mean?",
        ],
        q: "What does the woman mean?",
        opts: [
          "She will help on Friday after all.",
          "She will answer directly: she is unavailable.",
          "She needs to trim the bushes before the fundraiser.",
          "She does not know what the fundraiser is for.",
        ],
        a: 1,
        why: "“Stop beating around the bush” = berhenti berputar-putar, bicara langsung; jawabannya “I can't make it” = tidak bisa datang. Pilihan A kebalikan; C harfiah.",
      },
      {
        lines: [
          "W: Did you pass the chemistry exam?",
          "M: Barely. I made it by the skin of my teeth.",
          "N: What does the man mean?",
        ],
        q: "What does the man mean?",
        opts: [
          "He failed the exam by a small margin.",
          "He hurt his teeth during the exam.",
          "He passed the exam easily.",
          "He passed the exam, but only just.",
        ],
        a: 3,
        why: "“By the skin of my teeth” = nyaris saja, tetapi berhasil. Pilihan A membalik hasilnya; C membalik derajatnya; B harfiah.",
      },

      /* 19–24: implikasi, nada, maksud tersirat */
      {
        lines: [
          "M: I'm thinking of taking five courses next semester so I can graduate early.",
          "W: Five? With your part-time job? Good luck with that.",
          "N: What does the woman imply?",
        ],
        q: "What does the woman imply?",
        opts: [
          "The man's plan is unrealistic.",
          "She wishes she could graduate early too.",
          "The man should quit his job.",
          "Five courses is a normal load.",
        ],
        a: 0,
        why: "Pengulangan “Five?” dan “Good luck with that” bernada sangsi → rencananya dianggap tidak realistis. Pilihan C tidak pernah dikatakan; D bertentangan dengan nadanya.",
      },
      {
        lines: [
          "W: The art museum is offering free admission on Sunday. Want to go?",
          "M: I'd love to, but Sunday is the only day I have to work on my thesis.",
          "N: What will the man probably do on Sunday?",
        ],
        q: "What will the man probably do on Sunday?",
        opts: [
          "Go to the museum with the woman.",
          "Ask the woman to help with his thesis.",
          "Stay in and write.",
          "Visit the museum on a different day.",
        ],
        a: 2,
        why: "“I'd love to, but…” adalah penolakan halus; alasannya harus mengerjakan tesis. Pilihan D tidak disebut; A kebalikannya.",
      },
      {
        lines: [
          "M: Everyone says the new statistics professor is really hard to follow.",
          "W: That's what I'd heard too, but I found her explanations perfectly clear.",
          "N: What does the woman mean?",
        ],
        q: "What does the woman mean?",
        opts: [
          "She has not attended the professor's class yet.",
          "She agrees with what everyone says.",
          "The professor speaks too softly.",
          "Her experience differed from what others said.",
        ],
        a: 3,
        why: "“That's what I'd heard too, but…” = pengalamannya sendiri tidak sama dengan rumor. Pilihan B kebalikannya; C salah menafsirkan “hard to follow” sebagai sulit didengar.",
      },
      {
        lines: [
          "W: Aren't you going to sign up for the campus tennis tournament?",
          "M: After the way I played last year? I think I'll just watch this time.",
          "N: What does the man imply?",
        ],
        q: "What does the man imply?",
        opts: [
          "He won the tournament last year.",
          "He did not play well last year.",
          "He is too busy to watch the tournament.",
          "He wants the woman to play instead.",
        ],
        a: 1,
        why: "Pertanyaan retoris “After the way I played last year?” ditambah keputusan hanya menonton → tahun lalu ia bermain buruk. Pilihan A kebalikannya; C dan D tidak disebut.",
      },
      {
        lines: [
          "M: Did you get a chance to look at the draft of my grant proposal?",
          "W: I read it last night. The methods section is solid, but the budget still needs quite a bit of work.",
          "N: What does the woman think about the proposal?",
        ],
        q: "What does the woman think about the proposal?",
        opts: [
          "Part of it is good, but part of it needs revision.",
          "It is ready to be submitted.",
          "The methods section should be rewritten.",
          "She has not had time to read it.",
        ],
        a: 0,
        why: "Pujian untuk bagian metode ditambah kritik untuk anggaran = sebagian baik, sebagian perlu diperbaiki. Pilihan C membalik bagian yang dikritik; D bertentangan dengan “I read it last night”.",
      },
      {
        lines: [
          "W: I was surprised to see Tom at the chess club meeting. I thought he had no interest in chess.",
          "M: Neither did I, but he ended up staying the whole evening.",
          "N: What does the man mean?",
        ],
        q: "What does the man mean?",
        opts: [
          "He left the meeting early.",
          "He knew Tom liked chess.",
          "Tom did not stay long at the meeting.",
          "He also had thought Tom was uninterested.",
        ],
        a: 3,
        why: "“Neither did I” = ia pun mengira Tom tidak berminat. Pilihan B kebalikannya; C bertentangan dengan “staying the whole evening”.",
      },

      /* 25–30: struktur tersirat — pengandaian, penyesalan, perbandingan, past intention */
      {
        lines: [
          "M: How was the calculus midterm?",
          "W: Not nearly as hard as I'd expected, to be honest.",
          "N: What does the woman mean?",
        ],
        q: "What does the woman mean?",
        opts: [
          "The exam was harder than she thought it would be.",
          "She had not expected to take the exam.",
          "The exam was easier than she thought it would be.",
          "She expects the final exam to be hard.",
        ],
        a: 2,
        why: "“Not nearly as hard as I'd expected” = jauh lebih mudah daripada perkiraan. Pilihan A membalik perbandingannya; B dan D tidak disebut.",
      },
      {
        lines: [
          "W: You missed a great concert last night.",
          "M: I know. I would have gone if my car hadn't broken down on the way.",
          "N: What does the man mean?",
        ],
        q: "What does the man mean?",
        opts: [
          "He arrived at the concert late.",
          "He did not attend the concert.",
          "His car broke down after the concert.",
          "He did not want to go to the concert.",
        ],
        a: 1,
        why: "“I would have gone if…” = pengandaian tipe 3: kenyataannya ia tidak pergi. Pilihan A dan C keliru soal urutan waktu; D bertentangan dengan nada menyesal “I know”.",
      },
      {
        lines: [
          "M: I was going to return these library books yesterday, but I got caught up in the lab.",
          "W: Well, they'll charge you a fine for every day they're overdue.",
          "N: What can be inferred about the man?",
        ],
        q: "What can be inferred about the man?",
        opts: [
          "He returned the books yesterday.",
          "He has already paid a fine.",
          "He lost the books in the lab.",
          "He still has the books.",
        ],
        a: 3,
        why: "“I was going to…, but…” = niat yang tidak terlaksana, jadi buku masih di tangannya. Pilihan A membalik maknanya; B dan C tidak disebut.",
      },
      {
        lines: [
          "W: Should I have told Professor Adams that I'd be missing the seminar?",
          "M: It would have been a good idea, but it's too late now.",
          "N: What does the man imply?",
        ],
        q: "What does the man imply?",
        opts: [
          "The woman did not inform the professor.",
          "The woman told the professor in time.",
          "The seminar was cancelled.",
          "The professor is not strict about attendance.",
        ],
        a: 0,
        why: "“It would have been a good idea, but it's too late” = seharusnya diberi tahu, tetapi ternyata tidak dilakukan. Pilihan B kebalikannya; C dan D tidak disebut.",
      },
      {
        lines: [
          "M: Did Maria finally decide to take the internship in Chicago?",
          "W: If only she had. She turned it down to stay closer to home.",
          "N: What does the woman mean?",
        ],
        q: "What does the woman mean?",
        opts: [
          "Maria accepted the internship.",
          "Maria is still deciding about the internship.",
          "The woman wishes Maria had accepted the internship.",
          "Maria's home is in Chicago.",
        ],
        a: 2,
        why: "“If only she had” = penyesalan atas hal yang tidak terjadi; Maria menolak, dan si wanita berharap sebaliknya. Pilihan A dan B bertentangan dengan “turned it down”.",
      },
      {
        lines: [
          "W: This report is due at noon, and I still haven't run the final numbers.",
          "M: Had you asked me earlier, I could have done them for you this morning.",
          "N: What does the man mean?",
        ],
        q: "What does the man mean?",
        opts: [
          "He ran the numbers for the woman this morning.",
          "The woman did not ask him for help in time.",
          "He will run the numbers before noon.",
          "The woman should have finished the report earlier.",
        ],
        a: 1,
        why: "“Had you asked me earlier, I could have…” = inversi pengandaian tipe 3: ia tidak diminta, jadi tidak membantu. Pilihan A membalik kenyataan; C tidak pernah dijanjikan.",
      },
    ],

    /* ── Part B · 2 percakapan panjang × 4 soal ───────────────────────── */
    partB: [
      {
        title: "Conversation 1 — A student and an academic adviser",
        lines: [
          "W: Thanks for seeing me, Dr. Patel. I'm a second-year student, and I still haven't declared a major. I'm starting to worry about it.",
          "M: You're not alone. What courses have you enjoyed most so far?",
          "W: Honestly, the two economics classes and an environmental science course. I liked the data analysis in all of them.",
          "M: That's a useful pattern. Have you looked at the environmental economics track? It combines both fields, and it has a strong quantitative core.",
          "W: I didn't know that existed. Would I need to start from scratch?",
          "M: No. Your economics credits and the environmental science course would all count toward it. You'd need to add a statistics course next semester.",
          "W: That sounds manageable. Is there a deadline for declaring?",
          "M: The registrar wants declarations from second-year students by the end of March. Before that, I'd suggest talking with Professor Ruiz, who directs the track.",
          "W: Could you help me set that up?",
          "M: I'll send her an email this afternoon and copy you. Bring your transcript when you meet her.",
        ],
        questions: [
          {
            q: "Why does the student go to see the adviser?",
            opts: [
              "To drop an economics course.",
              "To ask for a letter of recommendation.",
              "To get help choosing a field of study.",
              "To complain about a statistics requirement.",
            ],
            a: 2,
            why: "Ia belum memilih jurusan (major) dan cemas → butuh bantuan memilih bidang studi. Pilihan A, B, dan D tidak disebut sama sekali.",
          },
          {
            q: "What does the adviser recommend?",
            opts: [
              "A program that combines economics and environmental science.",
              "Starting over with a new set of courses.",
              "Postponing the decision until next year.",
              "Taking two more environmental science courses.",
            ],
            a: 0,
            why: "Penasihat menyarankan jalur environmental economics yang menggabungkan kedua bidang. Pilihan B bertentangan dengan jawabannya “No” (tidak perlu mulai dari nol); C bertentangan dengan tenggat Maret.",
          },
          {
            q: "What must the student do by the end of March?",
            opts: [
              "Complete a statistics course.",
              "Meet with the registrar in person.",
              "Submit her transcript to the adviser.",
              "Officially declare her major.",
            ],
            a: 3,
            why: "Registrar menginginkan deklarasi jurusan dari mahasiswa tahun kedua sebelum akhir Maret. Pilihan A dijadwalkan semester depan; C keliru karena transkrip dibawa ke Profesor Ruiz.",
          },
          {
            q: "What will the adviser probably do next?",
            opts: [
              "Register the student for statistics.",
              "Contact Professor Ruiz by email.",
              "Review the student's transcript.",
              "Change the declaration deadline.",
            ],
            a: 1,
            why: "“I'll send her an email this afternoon” → ia akan menghubungi Profesor Ruiz. Pilihan C keliru: transkrip diminta dibawa saat bertemu Ruiz, bukan diperiksa penasihat.",
          },
        ],
      },
      {
        title: "Conversation 2 — Two students discussing a study-abroad application",
        lines: [
          "M: Hey, Lena. Did you finish the study-abroad application for the program in Lisbon?",
          "W: Almost. I've written the personal statement, but I still need one more faculty recommendation, and the deadline is next Friday.",
          "M: Who did you ask?",
          "W: Professor Okafor agreed right away. I was going to ask Dr. Bennett, but she's on leave this semester.",
          "M: What about Professor Haas? You did really well in his urban planning seminar, and the Lisbon program is about city design.",
          "W: That's true. I was worried he wouldn't remember me, though. The seminar was last spring.",
          "M: He will. He mentioned your final project in class just last week as an example of good fieldwork.",
          "W: Really? Then I'll email him tonight. Is there anything else I'm forgetting?",
          "M: The language section. The program requires proof that you've completed at least one semester of Portuguese.",
          "W: I took two semesters, so I just need to attach the transcript.",
          "M: Good. And don't forget the housing form. Last year some students got accepted but lost their spots because the form was late.",
          "W: I'll print everything tonight and drop it off at the international office tomorrow morning.",
        ],
        questions: [
          {
            q: "What are the speakers mainly discussing?",
            opts: [
              "The remaining steps in the woman's application.",
              "The woman's grade in an urban planning seminar.",
              "Whether the man should apply to the program in Lisbon.",
              "How to learn Portuguese before next Friday.",
            ],
            a: 0,
            why: "Seluruh percakapan mengecek apa saja yang masih kurang dalam lamaran si wanita: rekomendasi, bukti bahasa, formulir asrama. Pilihan B hanya disinggung sepintas; C dan D tidak dibahas.",
          },
          {
            q: "Why does the woman decide not to ask Dr. Bennett?",
            opts: [
              "Dr. Bennett does not remember her.",
              "Dr. Bennett teaches a different subject.",
              "Dr. Bennett has already written a letter.",
              "Dr. Bennett is away this semester.",
            ],
            a: 3,
            why: "“She's on leave this semester” = sedang cuti. Pilihan A adalah kekhawatiran si wanita tentang Profesor Haas, bukan Bennett.",
          },
          {
            q: "What does the man say about Professor Haas?",
            opts: [
              "He is directing the Lisbon program.",
              "He recently praised the woman's work.",
              "He taught the woman two semesters of Portuguese.",
              "He is too busy to write a recommendation.",
            ],
            a: 1,
            why: "Haas menyebut proyek akhir si wanita di kelas minggu lalu sebagai contoh kerja lapangan yang baik = memuji. Pilihan A dan C mencampur detail lain; D bertentangan.",
          },
          {
            q: "What will the woman probably do tomorrow?",
            opts: [
              "Register for another Portuguese course.",
              "Meet Professor Haas in his office.",
              "Deliver her documents to the international office.",
              "Submit the housing form online.",
            ],
            a: 2,
            why: "“Drop it off at the international office tomorrow morning.” Pilihan D keliru karena ia mencetak dan mengantar langsung, bukan mengirim daring; B keliru karena ia mengirim email malam ini.",
          },
        ],
      },
    ],

    /* ── Part C · 3 ceramah × 4 soal ──────────────────────────────────── */
    partC: [
      {
        title: "Talk 1 — A lecture in an American history class",
        lines: [
          "N: Listen to part of a lecture in an American history class.",
          "M: Today I want to talk about the Pony Express, a mail service that lasted only eighteen months but became one of the best-known episodes of the American West. It began in April 1860, when a freight company set up a relay of riders between Missouri and California, a distance of nearly two thousand miles.",
          "M: The idea was simple. A rider carried a leather pouch of letters at full gallop, switching to a fresh horse at stations spaced roughly ten to fifteen miles apart.",
              "M: After riding about seventy-five miles, he handed the pouch to the next rider. In this way a letter could cross the country in about ten days, less than half the time the stagecoach took.",
          "M: The service was expensive, though. Sending a single letter cost five dollars at first, which was more than many workers earned in a week. The company never made a profit.",
          "M: What ended it was not competition from another mail carrier but a new technology. In October 1861 the transcontinental telegraph line was completed, and messages that had taken ten days now took minutes. The Pony Express shut down two days later.",
        ],
        questions: [
          {
            q: "What is the lecture mainly about?",
            opts: [
              "The construction of the transcontinental telegraph.",
              "The cost of sending letters in the 1860s.",
              "The training of horses for long-distance riding.",
              "The brief history of a fast mail service.",
            ],
            a: 3,
            why: "Seluruh ceramah membahas Pony Express dari awal hingga tutup. Telegraf (A) dan ongkos (B) hanya bagian kecil; C tidak dibahas.",
          },
          {
            q: "According to the professor, how far apart were the stations where riders changed horses?",
            opts: [
              "About two miles.",
              "About ten to fifteen miles.",
              "About seventy-five miles.",
              "About two thousand miles.",
            ],
            a: 1,
            why: "Stasiun ganti kuda berjarak 10–15 mil. Pilihan C adalah jarak tempuh satu penunggang sebelum menyerahkan kantong; D adalah panjang seluruh rute.",
          },
          {
            q: "What does the professor say about the price of the service?",
            opts: [
              "It was higher than a typical weekly wage.",
              "It was lower than the stagecoach rate.",
              "It rose sharply after the first year.",
              "It was paid by the federal government.",
            ],
            a: 0,
            why: "Lima dolar per surat “more than many workers earned in a week”. Pilihan B, C, dan D tidak disebut; yang dibandingkan dengan kereta pos adalah waktunya, bukan harganya.",
          },
          {
            q: "Why does the professor mention the telegraph?",
            opts: [
              "To show that Pony Express riders also carried telegrams.",
              "To compare the wages of riders and telegraph operators.",
              "To explain what caused the Pony Express to close.",
              "To argue that the telegraph was slower than expected.",
            ],
            a: 2,
            why: "Telegraf disebut sebagai teknologi baru yang mengakhiri layanan itu: “shut down two days later”. Pilihan D kebalikannya (telegraf jauh lebih cepat).",
          },
        ],
      },
      {
        title: "Talk 2 — An announcement from the campus career center",
        lines: [
          "N: Listen to an announcement from the campus career center.",
          "W: Good afternoon, everyone. Before you head to your next class, I'd like to tell you about a résumé workshop the career center is running next Wednesday from four to six in Room 210 of the student union.",
          "W: The workshop is aimed at juniors and seniors who will be applying for internships or full-time positions this spring, but any student is welcome.",
              "W: We'll start with a short presentation on what recruiters actually look at in the first thirty seconds, and then you'll work in small groups with a career counselor to revise your own document.",
          "W: Please bring a printed copy of your current résumé. If you don't have one yet, come anyway; we'll have templates you can fill in on the spot. Laptops are helpful but not required.",
          "W: Space is limited to forty participants, so you'll need to register on the career center website by Monday evening. Students who complete the workshop can also sign up for a fifteen-minute individual review the following week. Thanks, and I hope to see many of you there.",
        ],
        questions: [
          {
            q: "What is the main purpose of the announcement?",
            opts: [
              "To describe internship openings for the spring.",
              "To invite students to an upcoming workshop.",
              "To explain how recruiters interview candidates.",
              "To announce a change in the career center's hours.",
            ],
            a: 1,
            why: "Pengumuman mengajak mahasiswa mengikuti lokakarya résumé hari Rabu. Pilihan A dan C hanya konteks; D tidak disebut.",
          },
          {
            q: "According to the speaker, what will happen after the presentation?",
            opts: [
              "Recruiters will interview the participants.",
              "Students will fill out internship applications.",
              "Students will revise their résumés in small groups.",
              "The counselor will collect the printed résumés.",
            ],
            a: 2,
            why: "“Then you'll work in small groups with a career counselor to revise your own document.” Pilihan A keliru: perekrut hanya dibahas dalam presentasi, tidak hadir.",
          },
          {
            q: "What must students do by Monday evening?",
            opts: [
              "Print a copy of their résumé.",
              "Choose a template on the website.",
              "Schedule an individual review.",
              "Sign up for the workshop online.",
            ],
            a: 3,
            why: "“Register on the career center website by Monday evening.” Pilihan A dilakukan saat datang; C dilakukan sesudah lokakarya selesai.",
          },
          {
            q: "What does the speaker say about students who do not have a résumé?",
            opts: [
              "They can use a template at the workshop.",
              "They should attend the individual review instead.",
              "They must bring a laptop.",
              "They are not eligible to register.",
            ],
            a: 0,
            why: "“Come anyway; we'll have templates you can fill in on the spot.” Pilihan D kebalikannya; C keliru karena laptop tidak wajib.",
          },
        ],
      },
      {
        title: "Talk 3 — A talk in a botany class",
        lines: [
          "N: Listen to part of a talk in a botany class.",
          "W: Last week we looked at how flowers are pollinated. Today we move to the next stage: how plants spread their seeds.",
              "W: A seed that simply drops beneath its parent has to compete with it for light and water, so most plants have evolved ways to send seeds farther away.",
          "W: The most familiar method uses wind. Dandelion seeds carry a tuft of fine hairs that acts like a parachute, and maple seeds have a single wing that makes them spin as they fall, slowing their descent so a breeze can carry them.",
          "W: A second method relies on animals. Fleshy fruits such as berries attract birds, which eat the fruit and later deposit the seeds, undamaged, some distance away. Other seeds have tiny hooks that catch on fur, hitching a ride without being eaten.",
          "W: Some plants do the work themselves. The seed pod of the touch-me-not builds up tension as it dries and then bursts, flinging seeds several feet. And a few, like the coconut, float, allowing them to travel across water to new shores.",
        ],
        questions: [
          {
            q: "What is the talk mainly about?",
            opts: [
              "The ways plants move their seeds to new locations.",
              "How flowers attract pollinating insects.",
              "Why maple trees lose their seeds in autumn.",
              "The diet of birds that feed on berries.",
            ],
            a: 0,
            why: "Topik hari ini adalah penyebaran biji (seed dispersal). Pilihan B adalah topik minggu lalu; C dan D hanya contoh kecil.",
          },
          {
            q: "According to the speaker, why is it a disadvantage for a seed to fall directly below the parent plant?",
            opts: [
              "The soil there is usually too dry.",
              "Birds are more likely to eat it.",
              "The parent plant releases a harmful chemical.",
              "The seed must compete with the parent for resources.",
            ],
            a: 3,
            why: "“Has to compete with it for light and water.” Pilihan A, B, dan C tidak disebut sama sekali.",
          },
          {
            q: "What does the speaker say about maple seeds?",
            opts: [
              "They have hooks that attach to animal fur.",
              "They float across bodies of water.",
              "They spin as they fall, which slows them down.",
              "They burst out of a pod when it dries.",
            ],
            a: 2,
            why: "Biji maple bersayap tunggal yang membuatnya berputar dan jatuh lebih lambat. Pilihan A (kait) untuk biji lain, B untuk kelapa, D untuk touch-me-not.",
          },
          {
            q: "Why does the speaker mention the coconut?",
            opts: [
              "To show that some seeds are eaten by birds.",
              "To give an example of a seed carried by water.",
              "To explain how seed pods build up tension.",
              "To compare the size of different seeds.",
            ],
            a: 1,
            why: "Kelapa disebut sebagai contoh biji yang mengapung dan berpindah lewat air. Ukuran (D) tidak dibahas; A dan C merujuk mekanisme lain.",
          },
        ],
      },
    ],
  },

  /* ── Section 2 · Structure (15) ───────────────────────────────────────── */
  structure: [
    {
      q: "In the desert, ___ survive on the small amount of moisture that collects on their bodies overnight.",
      opts: ["beetles that", "some beetles", "some beetles they", "which beetles"],
      a: 1,
      why: "Kalimat memerlukan subjek untuk verba utama “survive”. Pilihan A membuat klausa relatif tanpa verba utama; C punya subjek ganda (beetles + they); D mengubah kalimat menjadi klausa relatif yang menggantung.",
    },
    {
      q: "Only after the last ice sheets retreated ___ to settle in the northern parts of the continent.",
      opts: ["humans began", "began humans", "humans beginning", "did humans begin"],
      a: 3,
      why: "“Only after…” di awal kalimat memaksa inversi: did + subjek + verba dasar. Pilihan A tanpa inversi; B membalik urutan tanpa kata kerja bantu; C tidak punya verba berhingga.",
    },
    {
      q: "Jane Addams, ___ of Hull House in Chicago, was awarded the Nobel Peace Prize in 1931.",
      opts: ["the founder", "she founded", "who the founder", "founded it"],
      a: 0,
      why: "Appositive berupa frasa nomina di antara dua koma yang menerangkan subjek. Pilihan B dan D menambahkan verba kedua tanpa penghubung; C klausa relatif tanpa verba.",
    },
    {
      q: "The Mississippi River drains a basin ___ covers about forty percent of the continental United States.",
      opts: ["it", "where", "that", "what"],
      a: 2,
      why: "Diperlukan pronomina relatif sebagai subjek klausa “covers…”: that/which. Pilihan A menghasilkan dua klausa tanpa penghubung; “where” menuntut klausa lengkap bersubjek; “what” tidak merujuk kata benda sebelumnya.",
    },
    {
      q: "___ mostly of calcium carbonate, coral skeletons dissolve slowly when ocean water becomes more acidic.",
      opts: ["Composed", "They are composed", "Composing", "To be composed"],
      a: 0,
      why: "Frasa partisipel pasif “Composed of…” menerangkan subjek “coral skeletons”. Pilihan B membentuk klausa terpisah tanpa konjungsi; C aktif dan salah makna (kerangka tidak “menyusun”); D infinitif tidak lazim di posisi ini.",
    },
    {
      q: "The new bridge was designed not only to carry heavier traffic ___ to withstand earthquakes of considerable magnitude.",
      opts: ["and also", "but", "as well", "but also"],
      a: 3,
      why: "Korelatif “not only … but also” harus lengkap dan sejajar (to carry … to withstand). Pilihan A, B, dan C bukan pasangan korelatif yang benar untuk “not only”.",
    },
    {
      q: "The deeper a submarine descends, ___ the pressure exerted on its hull.",
      opts: ["the greatest", "the greater", "greater is", "the more great"],
      a: 1,
      why: "Pola “the + komparatif …, the + komparatif …”. Pilihan A superlatif; C tanpa “the”; D bentuk komparatif salah (greater, bukan more great).",
    },
    {
      q: "The safety board recommended that every passenger ferry ___ with an additional set of life rafts.",
      opts: ["is equipped", "equips", "be equipped", "was equipped"],
      a: 2,
      why: "Sesudah “recommend that”, verba memakai subjunctive (bentuk dasar): be equipped. Pilihan A dan D berbentuk berhingga; B aktif, padahal kapal “dilengkapi” (pasif).",
    },
    {
      q: "___ for the timely arrival of the supply ships, the colony would not have survived its first winter.",
      opts: ["If it was not", "Were it not", "Unless", "Had it not been"],
      a: 3,
      why: "Klausa hasil “would not have survived” menunjukkan pengandaian tipe 3 → “Had it not been for…”. Pilihan B (Were it not) untuk tipe 2; A bentuknya salah; C memerlukan klausa lengkap.",
    },
    {
      q: "Because the region receives ___ rainfall, farmers depend heavily on irrigation canals fed by mountain snowmelt.",
      opts: ["very little", "very few", "a few", "many"],
      a: 0,
      why: "“Rainfall” kata benda tak terhitung → “little”. “Few”, “a few”, dan “many” hanya untuk kata benda terhitung; “a few” pun bermakna positif, tidak cocok dengan konteks ketergantungan pada irigasi.",
    },
    {
      q: "Early photographers were accustomed ___ several minutes for a single exposure.",
      opts: ["to wait", "to waiting", "waiting", "for waiting"],
      a: 1,
      why: "“Be accustomed to” diikuti gerund karena “to” di sini preposisi, bukan penanda infinitif. Pilihan A menyamakannya dengan infinitif; C tanpa “to”; D preposisinya salah.",
    },
    {
      q: "It was not until 1920 ___ the right to vote in all federal and state elections in the United States.",
      opts: ["when women were granted", "women granting", "that women were granted", "that women granted"],
      a: 2,
      why: "Struktur cleft “It was not until … that …”. Pilihan A memakai “when”, bukan “that”; B tanpa verba berhingga; D aktif, padahal wanita “diberi” hak (pasif).",
    },
    {
      q: "___ its enormous size, the blue whale feeds almost exclusively on tiny shrimplike animals called krill.",
      opts: ["Although", "Even though", "Nevertheless", "Despite"],
      a: 3,
      why: "Yang mengikuti adalah frasa nomina “its enormous size” → preposisi “Despite”. “Although/Even though” konjungsi yang membutuhkan klausa; “Nevertheless” adverbia penghubung yang tidak bisa mengawali frasa nomina.",
    },
    {
      q: "___ the pyramids were built without the wheel continues to impress modern engineers.",
      opts: ["Because", "That", "Whether or", "It is"],
      a: 1,
      why: "Klausa nomina “That the pyramids were built…” berfungsi sebagai subjek verba “continues”. Pilihan A menghasilkan kalimat tanpa subjek; C tidak lengkap; D menciptakan dua verba utama tanpa penghubung.",
    },
    {
      q: "The eruption of Mount Tambora in 1815 threw ___ ash into the atmosphere that global temperatures dropped the following year.",
      opts: ["so much", "too much", "such much", "as much"],
      a: 0,
      why: "Pola “so much + kata benda + that + klausa akibat”. “Too much” tidak berpasangan dengan klausa “that” akibat; “such much” tidak gramatikal; “as much” menuntut “as”.",
    },
  ],

  /* ── Section 2 · Written Expression (25) ─────────────────────────────── */
  written: [
    /* 1–8: kesalahan yang jelas */
    {
      q: "The {{students}} in the advanced chemistry course {{usually}} {{spends}} several hours {{each week}} in the laboratory.",
      a: 2,
      fix: "spend",
      why: "Subjek jamak “students” menuntut verba jamak “spend”. Frasa “in the advanced chemistry course” hanya keterangan, bukan subjek, jadi tidak boleh mengecoh.",
    },
    {
      q: "The {{extreme}} cold temperatures of the Antarctic interior {{make}} it {{one of the}} least hospitable {{places}} on Earth.",
      a: 0,
      fix: "extremely",
      why: "Yang diterangkan adalah kata sifat “cold”, jadi diperlukan adverbia: extremely cold. “Make” benar karena subjeknya “temperatures” (jamak).",
    },
    {
      q: "Visitors to the national park {{must}} {{obtain}} a permit {{before}} they can {{camped}} overnight.",
      a: 3,
      fix: "camp",
      why: "Sesudah modal “can” verba harus berbentuk dasar: can camp. “Must obtain” di awal sudah benar.",
    },
    {
      q: "The Pacific Ocean is {{far}} {{more larger}} than the Atlantic, {{covering}} nearly a third {{of}} the planet's surface.",
      a: 1,
      fix: "larger",
      why: "“Larger” sudah komparatif; “more larger” komparatif ganda. “Far” sah sebagai penguat komparatif (far larger).",
    },
    {
      q: "Bats, {{which}} are {{an}} only mammals capable of true flight, navigate {{mainly}} by echolocation {{rather than}} by sight.",
      a: 1,
      fix: "the",
      why: "“Only” menunjuk satu-satunya kelompok → artikel definit: the only mammals. “Which” benar untuk hewan; “rather than” benar sebagai pembanding.",
    },
    {
      q: "{{One of}} the {{most}} important {{reason}} for the decline of the species {{was}} the loss of wetland habitat.",
      a: 2,
      fix: "reasons",
      why: "Sesudah “one of the” kata benda harus jamak: reasons. “Was” tetap benar karena subjek sebenarnya adalah “One”.",
    },
    {
      q: "The committee {{returned back}} to the original proposal {{after}} {{rejecting}} two {{alternatives}}.",
      a: 0,
      fix: "returned",
      why: "“Return” sudah mengandung makna “kembali”, sehingga “back” redundan. “After rejecting” benar: preposisi diikuti gerund.",
    },
    {
      q: "The telescope's mirror {{was}} {{polished}} {{so carefully}} that even {{tiny very}} flaws could be detected.",
      a: 3,
      fix: "very tiny",
      why: "Penguat “very” harus mendahului kata sifat yang diterangkannya: very tiny flaws. “So carefully that” adalah pola akibat yang benar.",
    },

    /* 9–18: menengah */
    {
      q: "{{Contrary with}} popular belief, lightning {{frequently}} strikes the same tall structure {{more than}} once {{during}} a single storm.",
      a: 0,
      fix: "Contrary to",
      why: "Ungkapan bakunya “contrary to”, bukan “contrary with”. “More than once” dan “during a single storm” keduanya benar.",
    },
    {
      q: "When {{a}} glacier retreats {{across}} a valley, {{they often leave}} behind ridges of gravel {{known as}} moraines.",
      a: 2,
      fix: "it often leaves",
      why: "“A glacier” tunggal, jadi pronominanya “it” dan verbanya “leaves”. “They” tidak punya rujukan jamak dalam kalimat.",
    },
    {
      q: "By the time the expedition {{reached}} the coast, most of the supplies {{have been}} {{either}} consumed or {{abandoned}}.",
      a: 1,
      fix: "had been",
      why: "Dua peristiwa lampau yang berurutan dengan “by the time … reached” menuntut past perfect: had been consumed. “Either … or” sudah sejajar.",
    },
    {
      q: "{{Much of}} the fossil evidence {{for}} early mammals {{was found}} in rock layers that {{laid}} beneath ancient lake beds.",
      a: 3,
      fix: "lay",
      why: "“Laid” adalah bentuk lampau dari “lay” (meletakkan, transitif). Untuk “terletak” dipakai lie → lay → lain, jadi: layers that lay beneath. “Much of … was” benar karena “evidence” tak terhitung.",
    },
    {
      q: "The {{scientist}} {{whose}} name is most closely associated with the theory was a chemist {{which}} {{had trained}} in Germany.",
      a: 2,
      fix: "who",
      why: "“Which” tidak dipakai untuk orang; a chemist who had trained. “Whose” di segmen kedua benar untuk kepemilikan.",
    },
    {
      q: "{{To prepare}} the soil, {{planting}} the seeds, and {{watering}} the young plants {{are}} the three tasks assigned to first-year students.",
      a: 0,
      fix: "Preparing",
      why: "Unsur dalam daftar harus sejajar: tiga gerund (Preparing, planting, watering). “Are” benar karena subjeknya tiga kegiatan.",
    },
    {
      q: "The museum director {{agreed}} {{allowing}} the fragile manuscripts {{to be photographed}} {{under}} controlled lighting.",
      a: 1,
      fix: "to allow",
      why: "“Agree” diikuti to-infinitive: agreed to allow. “To be photographed” pasif benar karena manuskrip difoto.",
    },
    {
      q: "{{Although}} the volcano {{has not}} erupted {{in}} more than two centuries, {{but geologists}} still classify it as active.",
      a: 3,
      fix: "geologists",
      why: "“Although” sudah menghubungkan dua klausa; menambah “but” membuat konjungsi ganda. Hapus “but”.",
    },
    {
      q: "{{Because}} the instruments {{were}} so primitive, the astronomers {{could}} {{not hardly}} distinguish the planet from nearby stars.",
      a: 3,
      fix: "hardly",
      why: "“Hardly” sudah bermakna negatif (nyaris tidak); “not hardly” adalah negatif ganda. Cukup: could hardly distinguish.",
    },
    {
      q: "{{It's}} shell, {{which}} {{consists}} of overlapping plates, {{protects}} the armadillo from most predators.",
      a: 0,
      fix: "Its",
      why: "Kepemilikan memakai “its” tanpa apostrof; “it's” = it is. “Consists of” dan “protects” benar (subjek tunggal “shell”).",
    },

    /* 19–25: halus */
    {
      q: "{{Over}} the past decade, the number of students {{majoring}} in marine biology {{have}} nearly {{doubled}}.",
      a: 2,
      fix: "has",
      why: "Subjek kalimat adalah “the number” (tunggal), bukan “students” yang hanya objek preposisi → has nearly doubled. Bandingkan: “a number of students have”.",
    },
    {
      q: "Neither the {{original}} manuscript {{or}} the early printed copies {{contain}} {{any}} reference to the author's birthplace.",
      a: 1,
      fix: "nor",
      why: "Pasangan korelatif yang benar adalah “neither … nor”. “Contain” benar karena verba mengikuti unsur terdekat (“copies”, jamak).",
    },
    {
      q: "{{Capable to survive}} for months without water, the camel {{was}} essential to trade {{across}} the Sahara {{for}} centuries.",
      a: 0,
      fix: "Capable of surviving",
      why: "“Capable” berpasangan dengan preposisi “of” + gerund, bukan infinitif: capable of surviving. Segmen lain benar.",
    },
    {
      q: "Archaeologists {{have}} {{unearthed}} a {{surprisingly}} large {{amount of}} coins at the site, suggesting it was once a busy port.",
      a: 3,
      fix: "number of",
      why: "“Coins” terhitung, jadi kuantornya “number of”; “amount of” hanya untuk kata benda tak terhitung (a large amount of money).",
    },
    {
      q: "The {{rapid}} {{expand}} of the railroad network {{transformed}} the economy of the {{Midwest}} in the 1870s.",
      a: 1,
      fix: "expansion",
      why: "Sesudah artikel dan kata sifat (“the rapid”) diperlukan kata benda: expansion. “Expand” adalah verba.",
    },
    {
      q: "{{Since}} the dam {{was completed}} in 1936, the reservoir {{supplied}} water to {{more than}} twenty million people.",
      a: 2,
      fix: "has supplied",
      why: "“Since” + titik waktu lampau menuntut present perfect pada klausa utama: has supplied. “Was completed” dalam klausa “since” benar (peristiwa selesai).",
    },
    {
      q: "{{Whom}} first domesticated the horse {{remains}} {{a matter}} of debate {{among}} archaeologists.",
      a: 0,
      fix: "Who",
      why: "Kata tanya itu berfungsi sebagai subjek klausa nomina (“… domesticated the horse”), jadi bentuk subjek “who”, bukan objek “whom”. “Remains” benar karena seluruh klausa nomina dianggap tunggal.",
    },
  ],

  /* ── Section 3 · Reading (5 bacaan × 10 soal, mudah → sulit) ─────────── */
  reading: [
    {
      title: "How Hurricanes Form",
      text: `Hurricanes are among the most powerful storms on Earth, yet they begin quietly, as clusters of thunderstorms drifting over warm tropical seas. For such a cluster to grow into a hurricane, several conditions must be present at the same time. The surface water must be at least 26 degrees Celsius to a depth of about 50 meters, the air above it must be moist, and winds at different heights must blow at roughly the same speed and in the same direction. If any one of these conditions is missing, the storm usually weakens and dies.

The process starts when warm, humid air rises from the ocean surface. As the air climbs, it cools, and the water vapor it carries condenses into clouds and rain. Condensation releases heat, and this heat warms the surrounding air, causing it to rise even faster. More air is drawn in at the surface to replace what has risen, and a cycle begins that feeds on itself. Meteorologists describe the hurricane as a heat engine because it converts the warmth of the ocean into the energy of wind.

The rotation of the Earth gives the storm its spin. Air flowing toward the low-pressure center is deflected to the right in the Northern Hemisphere, so the storm turns counterclockwise. This deflection is too weak near the equator, which is why hurricanes almost never form within about five degrees of it. As the spinning column tightens, a calm, cloud-free eye develops at the center, surrounded by the eyewall, where the strongest winds and heaviest rain are found.

A storm is officially called a hurricane when its sustained winds reach 119 kilometers per hour. Once it moves over cooler water or crosses onto land, it loses its supply of warm moisture and begins to break apart, although it can still cause serious flooding far inland.`,
      questions: [
        {
          q: "What does the passage mainly discuss?",
          opts: [
            "The damage caused by hurricanes on land.",
            "The conditions and processes that produce hurricanes.",
            "Why hurricanes rotate in different directions.",
            "How meteorologists measure wind speed.",
          ],
          a: 1,
          why: "Bacaan menguraikan syarat (paragraf 1) dan proses (paragraf 2–4) terbentuknya badai. Kerusakan di darat (A) hanya disinggung di kalimat terakhir; C hanya satu paragraf; D tidak dibahas.",
        },
        {
          q: "According to the passage, what is the minimum sea-surface temperature needed for a hurricane to develop?",
          opts: ["5 degrees Celsius.", "50 degrees Celsius.", "119 degrees Celsius.", "26 degrees Celsius."],
          a: 3,
          why: "“At least 26 degrees Celsius.” Angka 50 adalah kedalaman dalam meter, 119 adalah kecepatan angin dalam km/jam, dan 5 adalah derajat lintang dari khatulistiwa.",
        },
        {
          q: "The word “humid” in paragraph 2 is closest in meaning to",
          opts: ["moist", "still", "heavy", "cold"],
          a: 0,
          why: "“Humid” = lembap = moist; paragraf 1 pun memakai “moist” untuk syarat yang sama. “Cold” bertentangan dengan “warm”; “still” dan “heavy” tidak bermakna kelembapan.",
        },
        {
          q: "According to the passage, what happens when water vapor condenses?",
          opts: [
            "The ocean surface cools.",
            "The wind changes direction.",
            "Heat is released into the air.",
            "The storm's eye disappears.",
          ],
          a: 2,
          why: "“Condensation releases heat, and this heat warms the surrounding air.” Pilihan A, B, dan D tidak dikaitkan dengan kondensasi dalam teks.",
        },
        {
          q: "The word “it” in paragraph 2 (“the water vapor it carries”) refers to",
          opts: ["the air", "the ocean surface", "the rain", "the cloud"],
          a: 0,
          why: "Yang membawa uap air saat naik dan mendingin adalah udara (“As the air climbs, it cools, and the water vapor it carries…”).",
        },
        {
          q: "It can be inferred from the passage that hurricanes rarely form near the equator because",
          opts: [
            "the water there is too cold.",
            "the Earth's rotation has little effect on air movement there.",
            "there are few thunderstorms in that region.",
            "winds at different heights blow in opposite directions.",
          ],
          a: 1,
          why: "Pembelokan akibat rotasi Bumi “too weak near the equator”, sehingga badai tidak mendapat putaran. Air di khatulistiwa justru hangat (A salah); C dan D tidak disebut.",
        },
        {
          q: "The word “sustained” in paragraph 4 is closest in meaning to",
          opts: ["sudden", "measured", "maximum", "continuous"],
          a: 3,
          why: "“Sustained winds” = angin yang bertahan terus-menerus (bukan hembusan sesaat) = continuous. “Sudden” justru kebalikannya; “maximum” dan “measured” tidak sama maknanya.",
        },
        {
          q: "All of the following are mentioned as conditions needed for a hurricane to form EXCEPT",
          opts: [
            "warm surface water.",
            "moist air.",
            "a nearby land mass.",
            "consistent winds at different heights.",
          ],
          a: 2,
          why: "Tiga syarat di paragraf 1: air hangat, udara lembap, angin seragam di berbagai ketinggian. Daratan justru melemahkan badai (paragraf 4).",
        },
        {
          q: "Why does the author describe the hurricane as a “heat engine”?",
          opts: [
            "To explain why hurricanes are hotter than other storms.",
            "To illustrate how the storm turns ocean warmth into wind energy.",
            "To compare hurricanes with machines built by engineers.",
            "To show that hurricanes can be predicted mechanically.",
          ],
          a: 1,
          why: "Kalimatnya sendiri menjelaskan: “because it converts the warmth of the ocean into the energy of wind”. Pilihan C menangkap kata “engine” secara harfiah.",
        },
        {
          q: "According to the passage, where are a hurricane's strongest winds found?",
          opts: ["In the eye.", "Near the equator.", "Over land.", "In the eyewall."],
          a: 3,
          why: "“The eyewall, where the strongest winds and heaviest rain are found.” Mata badai (A) justru tenang; di darat (C) badai melemah.",
        },
      ],
    },
    {
      title: "The Hudson River School of Painters",
      text: `In the decades before the Civil War, a group of American painters turned away from portraits and historical scenes to make the landscape itself their subject. They are known today as the Hudson River School, though the name was not chosen by the artists and was applied only later, at first with a hint of mockery. The painters did not form a school in the sense of an academy; rather, they shared a set of ideas about nature and a set of places, above all the Hudson River valley and the Catskill Mountains of New York, to which they returned again and again.

The movement is usually said to begin with Thomas Cole, an English-born painter who traveled up the Hudson in 1825 and exhibited a series of views of the valley that attracted immediate attention. Cole believed that the American wilderness, unlike the settled countryside of Europe, was still untouched, and that a painter who depicted it faithfully was recording something both beautiful and fleeting. Many of his canvases include a small human figure or a distant farm, reminders that the wilderness was already being cleared.

A second generation, including Frederic Church and Albert Bierstadt, expanded the movement's range. Church journeyed to South America and the Arctic; Bierstadt followed survey expeditions into the Rocky Mountains and painted enormous canvases of peaks and waterfalls that many Easterners had never seen. Their pictures were exhibited as public spectacles, sometimes in darkened rooms with dramatic lighting, and admission was charged.

The paintings share several conventions. Light is treated with great care, often glowing from a low sun behind clouds. Details of leaves, rocks, and water are rendered precisely, reflecting the influence of the English critic John Ruskin, who urged artists to study nature closely. At the same time, the compositions are idealized; a painter might combine features from several different sites into a single imaginary valley.

By the 1880s, taste had shifted toward the looser, more intimate style of French painting, and the grand American landscape fell out of fashion. Only in the twentieth century were the Hudson River painters reassessed as founders of a distinctly national art.`,
      questions: [
        {
          q: "The author's main purpose in the passage is to",
          opts: [
            "compare American and European landscape painting.",
            "describe the life of Thomas Cole.",
            "give an overview of a nineteenth-century American art movement.",
            "explain why landscape painting lost popularity.",
          ],
          a: 2,
          why: "Bacaan menyajikan asal nama, pendiri, generasi kedua, ciri, dan nasib gerakan → gambaran umum. Cole (B) hanya satu paragraf; D hanya paragraf terakhir; A hanya perbandingan sepintas.",
        },
        {
          q: "According to the passage, the name “Hudson River School”",
          opts: [
            "was given to the painters by others.",
            "was chosen by Thomas Cole.",
            "referred to an academy in New York.",
            "was first used in the twentieth century.",
          ],
          a: 0,
          why: "“The name was not chosen by the artists and was applied only later, at first with a hint of mockery.” Pilihan C bertentangan dengan “did not form a school in the sense of an academy”.",
        },
        {
          q: "The word “fleeting” in paragraph 2 is closest in meaning to",
          opts: ["distant", "temporary", "valuable", "unusual"],
          a: 1,
          why: "“Fleeting” = sekejap, tidak bertahan lama = temporary; konteksnya hutan yang “already being cleared”. “Valuable” dan “unusual” masuk akal secara tata bahasa, tetapi bukan sinonimnya.",
        },
        {
          q: "Why did Cole include small human figures or farms in his paintings?",
          opts: [
            "To show the scale of the mountains.",
            "To attract wealthy buyers.",
            "To follow the conventions of European art.",
            "To suggest that the wilderness was disappearing.",
          ],
          a: 3,
          why: "Figur dan ladang itu adalah “reminders that the wilderness was already being cleared”. Skala (A) tidak disebut; B dan C tidak dibahas.",
        },
        {
          q: "According to the passage, what did Bierstadt do?",
          opts: [
            "He traveled to South America and the Arctic.",
            "He wrote criticism urging painters to study nature.",
            "He painted scenes of the Rocky Mountains.",
            "He introduced French painting to America.",
          ],
          a: 2,
          why: "Bierstadt “followed survey expeditions into the Rocky Mountains”. Pilihan A adalah Church; B adalah Ruskin; D tidak disebut.",
        },
        {
          q: "The word “their” in paragraph 3 (“Their pictures were exhibited”) refers to",
          opts: ["Church and Bierstadt", "survey expeditions", "many Easterners", "peaks and waterfalls"],
          a: 0,
          why: "Yang punya lukisan (pictures) untuk dipamerkan adalah kedua pelukis generasi kedua, Church dan Bierstadt.",
        },
        {
          q: "The word “rendered” in paragraph 4 is closest in meaning to",
          opts: ["hidden", "chosen", "enlarged", "depicted"],
          a: 3,
          why: "“Rendered precisely” = digambarkan dengan teliti = depicted. “Hidden” kebalikannya; “chosen” dan “enlarged” tidak sepadan.",
        },
        {
          q: "All of the following are mentioned as characteristics of Hudson River School paintings EXCEPT",
          opts: [
            "careful treatment of light.",
            "loose, rapid brushwork.",
            "precise natural details.",
            "idealized compositions.",
          ],
          a: 1,
          why: "Sapuan kuas yang longgar justru ciri lukisan Prancis yang menggantikannya (paragraf 5). Tiga ciri lain disebut di paragraf 4.",
        },
        {
          q: "It can be inferred from the passage that John Ruskin",
          opts: [
            "was not himself a member of the Hudson River School.",
            "painted with Frederic Church in South America.",
            "disapproved of the exhibitions in darkened rooms.",
            "preferred French painting to American painting.",
          ],
          a: 0,
          why: "Ruskin disebut sebagai “English critic” yang “mempengaruhi” para pelukis → ia berada di luar kelompok itu. B, C, dan D tidak didukung teks.",
        },
        {
          q: "Why does the author mention the 1880s?",
          opts: [
            "To identify when Thomas Cole died.",
            "To date the founding of the movement.",
            "To mark the point when the movement's popularity declined.",
            "To show when the Rocky Mountains were first surveyed.",
          ],
          a: 2,
          why: "“By the 1880s … the grand American landscape fell out of fashion.” Gerakan ini dimulai 1825 (B salah); kematian Cole dan survei pegunungan tidak diberi tanggal.",
        },
      ],
    },
    {
      title: "The Women's Suffrage Movement in the United States",
      text: `The campaign to secure voting rights for American women lasted more than seventy years and drew on the energy of several generations of activists. It is conventionally dated from 1848, when a convention at Seneca Falls, New York, issued a declaration listing the grievances of women and demanding, among other reforms, the right to vote. The demand was considered so radical that some delegates hesitated to endorse it, and newspapers treated the gathering with ridicule.

In the years after the Civil War, the movement divided over strategy. One faction argued that the constitutional amendments extending citizenship and the vote to formerly enslaved men should also include women, and refused to support those amendments when they did not. A rival faction accepted the amendments as a necessary first step and concentrated on persuading individual states to enfranchise women. The two organizations, competing for members and funds, did not reunite until 1890.

The state-by-state approach yielded its first successes in the West. Wyoming Territory granted women full voting rights in 1869, and by 1914 eleven states, nearly all of them west of the Mississippi, had followed. Historians have offered several explanations for this regional pattern: sparsely populated territories hoped to attract settlers, legislators wished to add voters who would support temperance laws, and the small size of frontier legislatures made lobbying more effective. Whatever the mix of motives, the western victories demonstrated that women voters did not, as opponents had predicted, disrupt public life.

In the 1910s the movement adopted more visible tactics. Large parades were organized in New York and Washington, and a militant wing began picketing the White House, an unprecedented act that led to arrests and, for some, imprisonment. Meanwhile, the more moderate leadership pursued what its president called the “winning plan”: coordinated pressure on Congress combined with continued state campaigns.

The federal amendment passed Congress in 1919 and was ratified by the required thirty-six states in August 1920, when Tennessee approved it by a single vote. The struggle's end, however, was not universal: many Black women in the South remained effectively barred from voting for decades by other legal devices.`,
      questions: [
        {
          q: "What does the passage mainly discuss?",
          opts: [
            "The Seneca Falls convention of 1848.",
            "The reasons western states were the first to grant women the vote.",
            "The disagreement between two rival suffrage organizations.",
            "The long campaign for women's voting rights in the United States.",
          ],
          a: 3,
          why: "Bacaan merentang dari 1848 sampai 1920 dan sesudahnya → keseluruhan kampanye. Pilihan A, B, dan C masing-masing hanya satu paragraf.",
        },
        {
          q: "According to the passage, why did the movement divide after the Civil War?",
          opts: [
            "Leaders disagreed about whether to hold parades.",
            "Activists disagreed about supporting amendments that excluded women.",
            "Western states refused to cooperate with eastern states.",
            "One faction wanted to focus on temperance laws.",
          ],
          a: 1,
          why: "Satu kubu menolak amendemen yang tidak memasukkan wanita, kubu lain menerimanya sebagai langkah awal. Parade (A) baru muncul di 1910-an; temperance (D) adalah motif legislator Barat, bukan faksi.",
        },
        {
          q: "The word “enfranchise” in paragraph 2 is closest in meaning to",
          opts: ["educate", "employ", "give the vote to", "free from slavery"],
          a: 2,
          why: "“Enfranchise” = memberi hak pilih; konteksnya membujuk negara bagian agar wanita boleh memilih. Pilihan D mengacaukannya dengan pembebasan budak yang disebut di kalimat sebelumnya.",
        },
        {
          q: "According to the passage, which of the following was the first to grant women full voting rights?",
          opts: ["Wyoming Territory.", "New York.", "Tennessee.", "Washington."],
          a: 0,
          why: "“Wyoming Territory granted women full voting rights in 1869.” Tennessee (C) adalah negara bagian ke-36 yang meratifikasi pada 1920; New York dan Washington disebut sebagai tempat parade.",
        },
        {
          q: "All of the following are mentioned as possible explanations for early western successes EXCEPT",
          opts: [
            "a desire to attract settlers.",
            "pressure from the federal government.",
            "support for temperance legislation.",
            "the small size of legislatures.",
          ],
          a: 1,
          why: "Tiga penjelasan di paragraf 3: menarik pendatang, dukungan undang-undang temperance, dan legislatif kecil yang mudah dilobi. Tekanan federal tidak disebut.",
        },
        {
          q: "The word “it” in paragraph 5 (“when Tennessee approved it”) refers to",
          opts: ["Congress", "the state campaign", "the winning plan", "the federal amendment"],
          a: 3,
          why: "Yang diratifikasi oleh 36 negara bagian dan disetujui Tennessee adalah amendemen federal, subjek kalimat tersebut.",
        },
        {
          q: "It can be inferred from the passage that opponents of women's suffrage had claimed that",
          opts: [
            "allowing women to vote would harm public life.",
            "women in the West were different from women in the East.",
            "the Seneca Falls declaration was too moderate.",
            "picketing the White House was legal.",
          ],
          a: 0,
          why: "“Women voters did not, as opponents had predicted, disrupt public life” → lawan pernah meramalkan gangguan. Pilihan C kebalikan (deklarasi dianggap terlalu radikal).",
        },
        {
          q: "The word “unprecedented” in paragraph 4 is closest in meaning to",
          opts: ["illegal", "peaceful", "never done before", "widely reported"],
          a: 2,
          why: "“Unprecedented” = belum pernah terjadi sebelumnya. Meski berujung penangkapan, teks tidak menyebutnya “illegal” (A); B dan D tidak sepadan.",
        },
        {
          q: "Why does the author mention the “winning plan”?",
          opts: [
            "To explain how women won the vote in Wyoming.",
            "To criticize the militant wing of the movement.",
            "To describe the tactics used at Seneca Falls.",
            "To contrast a moderate strategy with more confrontational tactics.",
          ],
          a: 3,
          why: "Kata “Meanwhile” menempatkan rencana kepemimpinan moderat itu berhadapan dengan sayap militan yang berdemo di Gedung Putih. Wyoming (A) sudah lama menang; Seneca Falls (C) terjadi 1848.",
        },
        {
          q: "According to the passage, what happened in August 1920?",
          opts: [
            "The first suffrage parade was held in Washington.",
            "The amendment received the approval of enough states to take effect.",
            "The two rival organizations reunited.",
            "Black women in the South gained the right to vote.",
          ],
          a: 1,
          why: "Amendemen “was ratified by the required thirty-six states in August 1920”. Reuni organisasi (C) terjadi 1890; D justru bertentangan dengan kalimat terakhir.",
        },
      ],
    },
    {
      title: "Antibiotic Resistance in Bacteria",
      text: `Antibiotics, the drugs that kill bacteria or halt their growth, rank among the most consequential medical discoveries of the twentieth century. Within a decade of their introduction, however, physicians began to observe infections that no longer responded to treatment. The bacteria had become resistant, and the phenomenon has since grown into what many public health authorities regard as one of the gravest threats to modern medicine.

Resistance is not a new invention on the part of bacteria; it is the outcome of ordinary natural selection operating at extraordinary speed. In any large bacterial population, a few cells carry random mutations that happen to make them less vulnerable to a particular drug. When the drug is applied, susceptible cells die while the mutant cells survive and multiply, and within a matter of days the population may consist largely of resistant descendants. The antibiotic does not create the resistance; it merely removes the competition.

Bacteria possess an additional advantage that most organisms lack: they can exchange genes directly with one another, even across species. Small rings of DNA called plasmids, which often carry resistance genes, can pass from one cell to another through a process known as conjugation. A gene that confers resistance to a drug may therefore spread horizontally through a hospital ward or a farm rather than only vertically from parent to offspring. This explains why resistance to a new antibiotic can appear in organisms that were never directly exposed to it.

The mechanisms of resistance are varied. Some bacteria produce enzymes that break the antibiotic apart before it can act. Others alter the molecular target the drug is designed to attack, so that the drug no longer fits. Still others pump the drug out of the cell as fast as it enters, or thicken their outer membrane to keep it from entering at all.

Human behavior accelerates the process. Antibiotics prescribed for viral illnesses, against which they are useless, and courses of treatment abandoned before completion both expose bacteria to the drug without eliminating them. The routine addition of antibiotics to livestock feed to promote growth has a similar effect on an enormous scale. Reducing such misuse, rather than merely discovering new drugs, is now widely seen as the more urgent task.`,
      questions: [
        {
          q: "What does the passage mainly discuss?",
          opts: [
            "How bacteria develop and spread resistance to antibiotics.",
            "The discovery of the first antibiotics.",
            "The use of antibiotics in livestock feed.",
            "The structure of bacterial DNA.",
          ],
          a: 0,
          why: "Bacaan menjelaskan asal resistensi (seleksi alam), cara menyebar (plasmid), mekanismenya, dan pemicunya. Pilihan B hanya kalimat pembuka; C hanya satu contoh; D tidak dibahas.",
        },
        {
          q: "According to the passage, what happens when an antibiotic is applied to a bacterial population?",
          opts: [
            "All of the cells develop new mutations.",
            "The drug changes the genes of the surviving cells.",
            "Susceptible cells die and resistant cells multiply.",
            "The population stops exchanging plasmids.",
          ],
          a: 2,
          why: "“Susceptible cells die while the mutant cells survive and multiply.” Pilihan A dan B bertentangan dengan “the antibiotic does not create the resistance”; D tidak disebut.",
        },
        {
          q: "The word “consequential” in paragraph 1 is closest in meaning to",
          opts: ["recent", "controversial", "expensive", "important"],
          a: 3,
          why: "“Consequential” = berdampak besar, penting. “Recent” salah karena penemuannya dari abad ke-20; “controversial” dan “expensive” tidak sepadan.",
        },
        {
          q: "The word “it” in paragraph 2 (“it merely removes the competition”) refers to",
          opts: ["the resistance", "the antibiotic", "the population", "the mutation"],
          a: 1,
          why: "Kalimatnya: “The antibiotic does not create the resistance; it merely removes the competition” → yang menyingkirkan pesaing adalah antibiotiknya.",
        },
        {
          q: "According to the passage, what is conjugation?",
          opts: [
            "A mutation that makes a cell less vulnerable to a drug.",
            "An enzyme that breaks an antibiotic apart.",
            "The passing of resistance from parent to offspring.",
            "The transfer of DNA from one bacterial cell to another.",
          ],
          a: 3,
          why: "Plasmid “can pass from one cell to another through a process known as conjugation”. Pilihan C adalah penyebaran vertikal, yang justru dibedakan dari konjugasi.",
        },
        {
          q: "The author implies that resistance can appear in bacteria that were never exposed to a drug because",
          opts: [
            "resistance genes can be acquired from other bacteria.",
            "those bacteria have thicker outer membranes.",
            "viral illnesses weaken the bacteria.",
            "the drug has been added to livestock feed.",
          ],
          a: 0,
          why: "Kalimat “This explains why…” merujuk pada pertukaran gen horizontal lewat plasmid. Membran tebal (B) adalah mekanisme, bukan sebab penyebaran; C dan D tidak relevan.",
        },
        {
          q: "All of the following are mentioned as mechanisms of resistance EXCEPT",
          opts: [
            "producing enzymes that destroy the drug.",
            "changing the drug's molecular target.",
            "growing more slowly to avoid detection.",
            "pumping the drug out of the cell.",
          ],
          a: 2,
          why: "Paragraf 4 menyebut enzim, perubahan target, pompa keluar, dan penebalan membran. Pertumbuhan lambat tidak disebut.",
        },
        {
          q: "The word “confers” in paragraph 3 is closest in meaning to",
          opts: ["removes", "gives", "requires", "tests"],
          a: 1,
          why: "“A gene that confers resistance” = gen yang memberikan resistensi. “Removes” kebalikannya; “requires” dan “tests” tidak cocok.",
        },
        {
          q: "Why does the author mention viral illnesses in paragraph 5?",
          opts: [
            "To explain how viruses become resistant.",
            "To show that antibiotics can cure some viruses.",
            "To give an example of antibiotics being used inappropriately.",
            "To compare bacteria with viruses.",
          ],
          a: 2,
          why: "Antibiotik untuk penyakit virus disebut “useless” dan menjadi contoh penyalahgunaan yang mempercepat resistensi. Pilihan B kebalikannya.",
        },
        {
          q: "According to the passage, what do many experts now consider the more urgent task?",
          opts: [
            "Reducing the misuse of existing antibiotics.",
            "Discovering new antibiotics.",
            "Studying the structure of plasmids.",
            "Increasing the dose given to livestock.",
          ],
          a: 0,
          why: "“Reducing such misuse, rather than merely discovering new drugs, is now widely seen as the more urgent task.” Pilihan B justru yang dianggap kurang mendesak.",
        },
      ],
    },
    {
      title: "Urban Heat Islands",
      text: `That cities are warmer than the countryside surrounding them has been recognized since the early nineteenth century, when an amateur meteorologist compared thermometer readings taken inside and outside London and found the city consistently warmer at night. The phenomenon, now termed the urban heat island, has since been documented in settlements of nearly every size and climate, with temperature differences that commonly reach three to five degrees Celsius and, under calm, clear conditions, may exceed ten.

The causes are several and interlocking. Asphalt, concrete, and brick absorb far more solar radiation than vegetation does, and, having a high capacity to store heat, release it slowly after sunset; the result is that the nocturnal cooling on which rural areas depend is markedly attenuated in the urban core. The geometry of streets compounds the effect, since tall buildings trap radiation that would otherwise escape to the sky and simultaneously shelter the ground from wind. Vegetation, which cools its surroundings through the evaporation of water from leaves, is scarce; and waste heat from vehicles, air conditioners, and industry adds a contribution that, in dense districts during winter, can rival the energy received from the sun.

The consequences extend well beyond discomfort. Elevated nighttime temperatures deprive residents of the physiological recovery that cooler hours normally afford, and mortality during heat waves is disproportionately concentrated in the hottest neighborhoods, which, not coincidentally, tend also to be the poorest and least shaded. Demand for electricity rises, and with it emissions from power plants; ground-level ozone, whose formation is accelerated by heat, becomes more prevalent. Even rainfall patterns are altered, as the rising column of warm air over a city can trigger thunderstorms downwind.

Mitigation strategies are, for the most part, the causes reversed. Roofs painted with reflective coatings return sunlight rather than storing it; pavements engineered to remain porous allow water to evaporate from below; and the planting of street trees, though slow to take effect, addresses shade, evaporation, and air quality at once. Notwithstanding their modest cost, such measures have been adopted unevenly, in part because their benefits accrue to the public at large whereas their expense falls on individual property owners, a mismatch that municipal incentives have only begun to correct.`,
      questions: [
        {
          q: "What does the passage mainly discuss?",
          opts: [
            "The history of meteorology in London.",
            "The causes, effects, and remedies of a temperature difference between cities and their surroundings.",
            "The relationship between poverty and heat-wave mortality.",
            "Methods of measuring temperature in urban areas.",
          ],
          a: 1,
          why: "Empat paragraf berturut-turut membahas fenomena, sebab, akibat, dan penanggulangan pulau panas kota. London (A) hanya pembuka; C hanya satu kalimat; D tidak dibahas.",
        },
        {
          q: "According to the passage, how was the urban heat island first identified?",
          opts: [
            "By comparing temperature readings inside and outside a city.",
            "By measuring the heat stored in asphalt and concrete.",
            "By recording electricity demand during heat waves.",
            "By observing thunderstorms downwind of cities.",
          ],
          a: 0,
          why: "Seorang meteorolog amatir “compared thermometer readings taken inside and outside London”. Pilihan B, C, dan D adalah sebab atau akibat yang dibahas belakangan, bukan cara penemuan.",
        },
        {
          q: "The word “attenuated” in paragraph 2 is closest in meaning to",
          opts: ["delayed", "measured", "reversed", "weakened"],
          a: 3,
          why: "“Attenuated” = dilemahkan, dikurangi; pendinginan malam di kota berkurang, bukan terbalik (C) atau sekadar tertunda (A).",
        },
        {
          q: "According to the passage, how do tall buildings contribute to the heat island effect?",
          opts: [
            "They produce waste heat from air conditioning.",
            "They absorb more sunlight than pavement does.",
            "They trap radiation and block the wind.",
            "They prevent rainfall from reaching the ground.",
          ],
          a: 2,
          why: "“Tall buildings trap radiation that would otherwise escape to the sky and simultaneously shelter the ground from wind.” Pendingin udara (A) disebut terpisah sebagai sumber panas buangan.",
        },
        {
          q: "All of the following are mentioned as consequences of urban heat islands EXCEPT",
          opts: [
            "a decline in the population of large cities.",
            "higher electricity consumption.",
            "increased ground-level ozone.",
            "changes in rainfall patterns.",
          ],
          a: 0,
          why: "Paragraf 3 menyebut kematian saat gelombang panas, permintaan listrik, ozon permukaan, dan pola hujan. Penurunan penduduk tidak disebut.",
        },
        {
          q: "The word “which” in paragraph 3 (“which, not coincidentally, tend also to be”) refers to",
          opts: ["residents", "the hottest neighborhoods", "heat waves", "cooler hours"],
          a: 1,
          why: "Yang “cenderung juga paling miskin dan paling sedikit naungan” adalah lingkungan terpanas, kata benda tepat sebelum “which”.",
        },
        {
          q: "It can be inferred from the passage that the benefits of planting street trees",
          opts: [
            "are limited to improving air quality.",
            "are greater than those of reflective roofs.",
            "are not felt immediately.",
            "fall mainly on property owners.",
          ],
          a: 2,
          why: "Penanaman pohon disebut “slow to take effect” → manfaatnya tidak segera terasa. Pilihan A bertentangan dengan “addresses shade, evaporation, and air quality at once”; B tidak dibandingkan; D kebalikan dari kalimat terakhir.",
        },
        {
          q: "The word “accrue” in paragraph 4 is closest in meaning to",
          opts: ["appeal", "return", "apply", "flow"],
          a: 3,
          why: "“Benefits accrue to the public” = manfaat mengalir/jatuh kepada masyarakat. Keempat pilihan bisa diikuti “to”, tetapi hanya “flow” yang sepadan maknanya.",
        },
        {
          q: "Why does the author mention the winter energy of dense districts in paragraph 2?",
          opts: [
            "To show that heat islands disappear in winter.",
            "To emphasize how large the contribution of waste heat can be.",
            "To explain why cities receive less sunlight than rural areas.",
            "To argue that industry should move out of cities.",
          ],
          a: 1,
          why: "Panas buangan “can rival the energy received from the sun” di distrik padat saat musim dingin → menekankan besarnya sumbangan panas buangan. Pilihan A kebalikannya.",
        },
        {
          q: "According to the passage, why have mitigation measures been adopted unevenly?",
          opts: [
            "They are too expensive for most cities.",
            "Their effects on rainfall are uncertain.",
            "Reflective coatings are difficult to apply.",
            "Those who pay for them are not the ones who benefit most.",
          ],
          a: 3,
          why: "“Their benefits accrue to the public at large whereas their expense falls on individual property owners.” Biaya disebut “modest” (A salah); B dan C tidak disebut.",
        },
      ],
    },
  ],
};
