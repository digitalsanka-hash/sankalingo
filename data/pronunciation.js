/* Pelafalan: bagan IPA, bunyi yang menyulitkan penutur Indonesia,
   pasangan minimal, tekanan kata, dan latihan lidah. */

export const IPA_VOWELS = [
['iː','see /siː/','panjang seperti "i" pada "biji" tapi lebih lama'],
['ɪ','sit /sɪt/','pendek, antara i dan e — TIDAK sama dengan iː'],
['e','bed /bed/','seperti "e" pada "enak"'],
['æ','cat /kæt/','antara a dan e, mulut lebar — tak ada di bahasa Indonesia'],
['ɑː','car /kɑːr/','a panjang, rahang turun'],
['ɒ','hot /hɒt/','o pendek British'],
['ɔː','saw /sɔː/','o panjang, bibir bulat'],
['ʊ','book /bʊk/','u pendek, bibir agak longgar'],
['uː','food /fuːd/','u panjang, bibir bulat'],
['ʌ','cup /kʌp/','seperti "a" pada "sabar" tapi pendek'],
['ɜː','bird /bɜːd/','e panjang netral'],
['ə','about /əˈbaʊt/','schwa — bunyi paling sering, sangat lemah'],
['eɪ','day /deɪ/','diftong e→i'],
['aɪ','my /maɪ/','diftong a→i'],
['ɔɪ','boy /bɔɪ/','diftong o→i'],
['aʊ','now /naʊ/','diftong a→u'],
['əʊ','go /ɡəʊ/','diftong schwa→u'],
['ɪə','here /hɪə/','diftong i→schwa'],
['eə','hair /heə/','diftong e→schwa'],
['ʊə','tour /tʊə/','diftong u→schwa']
];

export const IPA_CONSONANTS = [
['p','pen','tanpa suara, berembus'],['b','bad','bersuara'],
['t','tea','ujung lidah di gusi'],['d','did','bersuara'],
['k','cat','pangkal lidah'],['ɡ','get','bersuara'],
['f','fall','bibir bawah + gigi atas'],['v','van','bersuara — BUKAN "f"'],
['θ','think','lidah di antara gigi, tanpa suara'],['ð','this','lidah di antara gigi, bersuara'],
['s','see','desis'],['z','zoo','desis bersuara'],
['ʃ','she','seperti "sy"'],['ʒ','vision','seperti "zy"'],
['h','how','embusan'],['m','man','sengau bibir'],
['n','no','sengau gusi'],['ŋ','sing','sengau belakang — "ng"'],
['l','leg','lidah ke gusi'],['r','red','lidah melengkung, tidak bergetar'],
['w','wet','bibir bulat'],['j','yes','seperti "y"'],
['tʃ','chair','seperti "c"'],['dʒ','job','seperti "j"']
];

/* Bunyi yang paling menyulitkan penutur bahasa Indonesia. */
export const HARD_SOUNDS = [
{ id:'th', sound:'/θ/ dan /ð/', title:'Bunyi "TH"',
  why:'Tidak ada di bahasa Indonesia, sehingga sering diganti /t/, /d/, atau /s/.',
  how:['Julurkan ujung lidah sedikit di antara gigi atas dan bawah.','Untuk /θ/ (think): embuskan udara tanpa suara.','Untuk /ð/ (this): getarkan pita suara.','Latih di depan cermin — kalau lidah tidak terlihat, kemungkinan salah.'],
  words:['think','thank','three','through','birthday','month','this','that','they','there','mother','weather'],
  pairs:[['think','sink'],['three','tree'],['thin','tin'],['they','day'],['breathe','breeze']] },
{ id:'v-f', sound:'/v/ vs /f/', title:'V dan F',
  why:'Huruf "v" dalam bahasa Indonesia dibaca /f/, sehingga "very" jadi "fery".',
  how:['Keduanya: bibir bawah menyentuh gigi atas.','/f/ tanpa suara, /v/ bersuara — pegang tenggorokan, harus bergetar untuk /v/.','Tahan bunyi /v/ selama dua detik untuk membiasakan getaran.'],
  words:['very','video','value','visit','love','five','have','improve','available','servive'],
  pairs:[['very','ferry'],['van','fan'],['leave','leaf'],['save','safe'],['vile','file']] },
{ id:'p-f', sound:'/p/ vs /f/', title:'P dan F',
  why:'Sebagian penutur menukar keduanya, terutama di akhir kata.',
  how:['/p/ = dua bibir bertemu lalu meledak.','/f/ = bibir bawah dan gigi, udara mengalir terus.'],
  words:['pull','full','pan','fan','cup','cuff'],
  pairs:[['pull','full'],['pan','fan'],['cup','cuff'],['pin','fin']] },
{ id:'final', sound:'Konsonan akhir', title:'Bunyi Akhir Kata',
  why:'Bahasa Indonesia tidak melepaskan konsonan akhir, sehingga "want" terdengar "wan" dan makna hilang.',
  how:['Selesaikan setiap konsonan akhir, terutama -t, -d, -k, -s, -z.','Latih pasangan: "wan / want", "car / card", "bee / beat".','Akhiran -ed dan -s membawa informasi tata bahasa — kalau hilang, tata bahasamu terdengar salah.'],
  words:['want','worked','asked','stopped','friends','books','watched','planned','cats','dogs'],
  pairs:[['wan','want'],['car','card'],['bee','beat'],['sea','seat'],['play','played']] },
{ id:'schwa', sound:'/ə/ schwa', title:'Bunyi Lemah Schwa',
  why:'Penutur Indonesia mengucapkan setiap suku kata sama kuat; bahasa Inggris melemahkan yang tak bertekanan.',
  how:['Kata fungsi (to, of, and, for, a) hampir selalu dilemahkan jadi /ə/.','"I want to go" → "I wanna go" (santai) atau "I want tə go".','Latih: BAnana bukan ba-na-na, tapi bə-NA-nə.'],
  words:['banana','about','support','computer','together','problem','doctor','police','again','photograph'],
  pairs:[['photograph','photographer'],['REcord (n)','reCORD (v)']] },
{ id:'l-r', sound:'/l/ dan /r/', title:'L dan R',
  why:'"r" Inggris tidak bergetar seperti "r" Indonesia.',
  how:['/r/ Inggris: lidah melengkung ke atas TANPA menyentuh langit-langit, tidak bergetar.','/l/: ujung lidah menempel di gusi belakang gigi atas.','Latih perlahan: "red — led — red — led".'],
  words:['red','read','right','really','world','girl','problem','library','regular','February'],
  pairs:[['light','right'],['lead','read'],['collect','correct'],['glass','grass']] },
{ id:'sh-s', sound:'/ʃ/ vs /s/', title:'SH dan S',
  why:'Keduanya ada di bahasa Indonesia tetapi sering tertukar dalam kata pinjaman.',
  how:['/ʃ/: bibir sedikit maju dan bulat.','/s/: bibir melebar, lidah lebih dekat gigi.'],
  words:['ship','sip','she','sea','wash','was','shoes','choose'],
  pairs:[['ship','sip'],['she','sea'],['shore','sore'],['wash','watch']] },
{ id:'i-long', sound:'/iː/ vs /ɪ/', title:'Vokal Panjang & Pendek',
  why:'Bahasa Indonesia tidak membedakan panjang vokal, padahal ini mengubah makna total.',
  how:['/iː/ panjang, bibir melebar seperti tersenyum: "sheep".','/ɪ/ pendek dan longgar, rahang lebih rileks: "ship".','Latih dengan menghitung: iiii-ship, iiii-sheep.'],
  words:['sheep','ship','beach','bitch','leave','live','feel','fill','seat','sit'],
  pairs:[['sheep','ship'],['seat','sit'],['feel','fill'],['leave','live'],['heat','hit']] }
];

/* Aturan tekanan kata — sering menentukan apakah kamu dipahami. */
export const STRESS_RULES = [
{ rule:'Kata benda dua suku kata → tekanan di suku pertama',
  ex:['TAble','DOCtor','WAter','PROblem','MARket'] },
{ rule:'Kata kerja dua suku kata → tekanan di suku kedua',
  ex:['beGIN','forGET','deCIDE','reLAX','aRRIVE'] },
{ rule:'Pasangan benda/kerja yang sama ejaannya berbeda tekanan',
  ex:['REcord (n) / reCORD (v)','PREsent (n) / preSENT (v)','INcrease (n) / inCREASE (v)','CONtract (n) / conTRACT (v)'] },
{ rule:'Akhiran -tion, -sion, -cian → tekanan tepat SEBELUM akhiran',
  ex:['inforMAtion','deCIsion','ediTION','muSIcian','educaTION'] },
{ rule:'Akhiran -ity, -ical, -ify, -graphy → tekanan dua suku sebelum akhiran',
  ex:['aBIlity','ecoNOmical','iDENtify','phoTOgraphy'] },
{ rule:'Akhiran -ee, -eer, -ese, -ette → tekanan PADA akhiran',
  ex:['employEE','engiNEER','JapaNESE','cigaRETTE'] },
{ rule:'Kata majemuk (compound noun) → tekanan pada kata pertama',
  ex:['BLACKboard','BUS stop','CREDIT card','AIRport'] }
];

/* Pemanasan lidah — dibacakan mesin suara lalu ditirukan. */
export const TONGUE_TWISTERS = [
['She sells sea shells by the sea shore.','Latih /ʃ/ dan /s/'],
['Three thin thieves thought a thousand thoughts.','Latih /θ/'],
['The weather is worse than whether we know.','Latih /ð/ dan /w/'],
['Very well, the visitor valued the vivid view.','Latih /v/'],
['Red lorry, yellow lorry.','Latih /r/ dan /l/'],
['I scream, you scream, we all scream for ice cream.','Latih bunyi bersambung'],
['A proper cup of coffee from a proper copper coffee pot.','Latih /p/ dan /k/'],
['Six sleek swans swam swiftly southwards.','Latih gugus konsonan /sw/ /sl/'],
['Peter Piper picked a peck of pickled peppers.','Latih /p/ berembus'],
['Fresh fried fish, fish fresh fried.','Latih /f/ dan /r/']
];

/* Pola bunyi bersambung yang membuat listening terasa cepat. */
export const CONNECTED_SPEECH = [
['an apple','a-NA-pple','Konsonan akhir menyambung ke vokal berikutnya'],
['want to','WAN-na','Penyederhanaan lazim dalam ucapan santai'],
['going to','GON-na','Sama, jangan dipakai di tulisan formal'],
['got to','GOT-ta',''],
['did you','DI-juh','/d/ + /j/ melebur jadi /dʒ/'],
['would you','WOO-juh',''],
['what do you','WHAD-dya',''],
['next day','NEX-day','/t/ hilang di antara dua konsonan'],
['last night','LAS-night',''],
['ten boys','TEM-boys','/n/ berubah jadi /m/ sebelum /b/'],
['a cup of tea','a CUP-pə-tea','"of" melemah jadi /əv/ atau /ə/'],
['for a moment','fə-rə-MOment','"for" melemah jadi /fə/']
];
