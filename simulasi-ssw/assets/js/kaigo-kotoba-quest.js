

 // Objek
const quiz = [
{
q: 'あたま',
options: ['Kepala','Rambut','Muka'],
answer:0
},
{
q: 'ひたい',
options: ['Dahi','Pipi','Hidung'],
answer:0
},
{
q: 'め',
options: ['Mata','Telinga','Mulut'],
answer:0
},
{
q: 'みみ',
options: ['Telinga','Bibir','Mata'],
answer:0
},
{
q: 'はな',
options: ['Hidung','Mulut','Bibir'],
answer:0
},
{
q: 'くち',
options: ['Mulut','Gigi','Bibir'],
answer:0
},
{
q: 'くちびる',
options: ['Bibir','Mata','Mulut'],
answer:0
},
{
q: 'あご',
options: ['Dagu','Dahi','Hidung'],
answer:0
},
{
q: 'くび',
options: ['Leher','Tenggorokan','Jari'],
answer:0
},
{
q: 'のど',
options: ['Tenggorokan','Leher','Siku'],
answer:0
},
{
q: 'うで',
options: ['Lengan','Siku','Lutut'],
answer:0
},
{
q: 'こし',
options: ['Pinggang','Lengan','Bahu'],
answer:0
},
{
q: 'てくび',
options: ['Pergelangan tangan','Pergelangan Kaki','Telapak tangan'],
answer:0
},
{
q: 'てのひら',
options: ['Telapak tangan','Punggung tangan','Telapak kaki'],
answer:0
},
{
q: 'ゆび',
options: ['Jari','Leher','Tenggorokan'],
answer:0
},
{
q: 'てのこう',
options: ['Punggung tangan','Ujung jari','Pergelangan tangan'],
answer:0
},
{
q: 'あしくび',
options: ['Pergelangan kaki','Telapak tangan','Pergelangan tangan'],
answer:0
},
{
q: 'つまさき',
options: ['Ujung jari kaki','Telapak kaki','Pergelangan kaki'],
answer:0
},
{
q: 'ゆびさき',
options: ['Ujung jari','Telapak tangan','Pergelangan tangan'],
answer:0
},
{
q: 'かた',
options: ['Bahu','Punggung','Pinggang'],
answer:0
},
{
q: 'せなか',
options: ['Punggung','Bahu','Pantat'],
answer:0
},
{
q: 'むね',
options: ['Dada','Perut','Pinggang'],
answer:0
},
{
q: 'でんぶ  (しり)',
options: ['Pantat','Pinggang','Telinga'],
answer:0
},
{
q: 'はら',
options: ['Perut','Dada','Puting'],
answer:0
},
{
q: 'ひざ',
options: ['Lutut','Tumit','Telapak kaki'],
answer:0
},
{
q: 'かかと',
options: ['Tumit','Lutut','Pinggang'],
answer:0
},
{
q: 'そくてい  (あしのうら)',
options: ['Telapak kaki','Tumit','Lutut'],
answer:0
},
{
q: 'かおいろ',
options: ['Air muka','Muka','Leher'],
answer:0
},
{
q: 'かんそく',
options: ['Sisi sakit','Sisi sehat','Kesehatan'],
answer:0
},
{
q: 'けんそく',
options: ['Sisi sehat','Sisi sakit','Kesehatan'],
answer:0
},
{
q: 'けんこう',
options: ['Kesehatan','Keamanan','Sisi sehat'],
answer:0
},
{
q: 'たいちょう',
options: ['Kondisi fisik','Tanda-tanda vital','Gejala'],
answer:0
},
{
q: 'バイタルサイン',
options: ['Tanda-tanda vital','Kondisi fisik','Sakit'],
answer:0
},
{
q: 'ひじ',
options: ['Siku','Jari','Lutut'],
answer:0
},
{
q: 'ぎょうがい',
options: ['Posisi supinasi','Posisi lateral','Posisi pronasi'],
answer:0
},
{
q: 'そくがい',
options: ['Posisi lateral','Posisi Pronasi','Posisi supinasi'],
answer:0
},
{
q: 'ふくがい',
options: ['Posisi pronasi','Posisi lateral','Posisi supinasi'],
answer:0
},
{
q: 'たんざい',
options: ['Duduk tegak lurus','Berdiri','Posisi'],
answer:0
},
{
q: 'りつい',
options: ['Berdiri','Duduk kursi','Postur'],
answer:0
},
{
q: 'いざい　(ざい)',
options: ['Duduk kursi','Berdiri','Posisi'],
answer:0
},
{
q: 'たいい',
options: ['Posisi','Berdiri','Postur'],
answer:0
},
{
q: 'たいいへんかん',
options: ['Mengubah posisi','Postur','Berpindah'],
answer:0
},
{
q: 'しせい',
options: ['Postur','Duduk kursi','Berdiri'],
answer:0
},
{
q: 'インフルエンザ',
options: ['Influenza','Dekubitus','Demensia'],
answer:0
},
{
q: 'かいせん',
options: ['Skabies','Dekubitus','Hipertensi'],
answer:0
},
{
q: 'かぜ',
options: ['Masuk angin','Muntah','Mual'],
answer:0
},
{
q: 'こうけつあつしょう',
options: ['Hipertensi','Masuk angin','Dekubitus'],
answer:0
},
{
q: 'しょくちゅうどく',
options: ['Keracunan makanan','Hipertensi','Skabies'],
answer:0
},
{
q: 'にんちしょう',
options: ['Demensia','Dekubitus','Katarak'],
answer:0
},
{
q: 'ノロウイルス',
options: ['Norovirus','Katarak','Asshole'],
answer:0
},
{
q: 'はくないしょう',
options: ['Katarak','Hipertensi','Gejala'],
answer:0
},
{
q: 'いたい',
options: ['Sakit/Nyeri','Muntah','Mual'],
answer:0
},
{
q: 'おうと',
options: ['Muntah','Mual','Sakit perut'],
answer:0
},
{
q: 'かたまひ',
options: ['Hemiplegia','Kontraktur','Diare'],
answer:0
},
{
q: 'かゆい',
options: ['Gatal','Nyeri','Lecet'],
answer:0
},
{
q: 'くるしい',
options: ['Menderita','Gatal','Hemiplegia'],
answer:0
},
{
q: 'げり',
options: ['Diare','Muntah','Mual'],
answer:0
},
{
q: 'こうしゅく',
options: ['Kontraktur','Fraktur','Diare'],
answer:0
},
{
q: 'こっせつ',
options: ['Fraktur','Kontraktur','Diare'],
answer:0
},
{
q: 'しょうじょう',
options: ['Gejala','Fraktur','Keracunan Makanan'],
answer:0
},
{
q: 'じょくそう',
options: ['Dekubitus','Skabies','Demensia'],
answer:0
},
{
q: 'せき',
options: ['Batuk','Aspirasi','Demam'],
answer:0
},
{
q: 'はきけ',
options: ['Mual','Diare','Muntah'],
answer:0
},
{
q: 'はっかん',
options: ['Keringat','Dekubitus','Gejala'],
answer:0
},
{
q: 'ほっしん',
options: ['Ruam','Gejala','Mual'],
answer:0
},
{
q: 'はつねつ',
options: ['Demam','Aspirasi','Konstipasi'],
answer:0
},
{
q: 'べんぴ',
options: ['Konstipasi','Demam','Ruam'],
answer:0
},
{
q: 'めまい',
options: ['Pusing','Mual','Fraktur'],
answer:0
},
{
q: 'いじょう',
options: ['Beralih','Berpindah','Bangkit'],
answer:0
},
{
q: 'いどう',
options: ['Berpindah','Bangkit','Berbaring'],
answer:0
},
{
q: 'おきあがる',
options: ['Bangkit','Berbaring','Beralih'],
answer:0
},
{
q: '(ブレーキを)　かける',
options: ['Mengerem','Drifting','Gaspol'],
answer:0
},
{
q: 'がしょう',
options: ['Berbaring','Bangkit','Sapaan'],
answer:0
},
{
q: 'くるまいす',
options: ['Kursi Roda','Toyota Supra','Kursi Mobil'],
answer:0
},
{
q: 'こえかけ',
options: ['Sapaan','Bangkit','Berbaring'],
answer:0
},
{
q: 'ささえる',
options: ['Mendukung','Sapaan','Berpegangan'],
answer:0
},
{
q: 'つえ',
options: ['Tongkat','Susuran','Kursi roda'],
answer:0
},
{
q: 'つかまる',
options: ['Berpegangan','Susuran','Tongkat'],
answer:0
},
{
q: 'てすり',
options: ['Susuran','Berpegangan','Tongkat'],
answer:0
},
{
q: 'ブレーキ',
options: ['rem','kupling','nitro'],
answer:0
},
{
q: 'ほこうき',
options: ['Alat bantu jalan','susuran','tongkat'],
answer:0
},
{
q: 'ゆうどう',
options: ['Panduan','Bangkit','Berbaring'],
answer:0
},
{
q: 'りしょう',
options: ['Beranjak dari tempat tidur','Bangkit','Berpindah'],
answer:0
},
{
q: 'かいごしょく',
options: ['Staf Perawat','Beranjak dari tempat tidur','Pengguna'],
answer:0
},
{
q: 'エプロン',
options: ['Celemek','Aspirasi','Deglutisi'],
answer:0
},
{
q: 'えんげ',
options: ['Deglutisi','Aspirasi','Kekentalan'],
answer:0
},
{
q: 'ごえん',
options: ['Aspirasi','Konstipasi','Batuk'],
answer:0
},
{
q: 'しょくひん',
options: ['Makanan','Keracunan makanan','Beranjak dari tempat tidur'],
answer:0
},
{
q: 'すいぶんほきゅう',
options: ['Asupan cairan','Beranjak dari tempat tidur','Menelan'],
answer:0
},
{
q: 'せきこむ',
options: ['Batuk','Dahak','Makanan'],
answer:0
},
{
q: 'とろみ',
options: ['Kekentalan','Asupan cairan','Batuk'],
answer:0
},
{
q: 'のみこみ',
options: ['Menelan','Kekentalan','Aspirasi'],
answer:0
},
{
q: 'むせる',
options: ['Tersedak','Menelan','Deglutisi'],
answer:0
},
{
q: 'りょう',
options: ['Jumlah','Makanan','Deglutisi'],
answer:0
},
{
q: 'リーダー',
options: ['Kepala Team','Staf Perawat','Pengguna'],
answer:0
},
{
q: 'あげもの',
options: ['Gorengan','Tumis','Acar'],
answer:0
},
{
q: 'いためもの',
options: ['Tumis','Gorengan','Acar'],
answer:0
},
{
q: 'おちゃ',
options: ['Teh hijau','Teh Sosro','Teh pucuk'],
answer:0
},
{
q: 'カレーライス',
options: ['Nasi kari','Nasi uduk','Nasi kucing'],
answer:0
},
{
q: 'ごはん',
options: ['Nasi Putih','Nasi padang','Nasi uduk'],
answer:0
},
{
q: 'こんだて',
options: ['Daftar makanan','Nasi putih','Tabel daftar makanan'],
answer:0
},
{
q: 'こんだてひょう',
options: ['Tabel daftar makanan','Daftar makanan','Ahli gizi'],
answer:0
},
{
q: 'しゅしょく',
options: ['Makanan pokok','Sup','Acar'],
answer:0
},
{
q: 'しるもの',
options: ['Sup','Sirup','Air'],
answer:0
},
{
q: 'つけもの',
options: ['Acar','Gorengan','Rebusan'],
answer:0
},
{
q: 'とうふ',
options: ['Tahu','Tempe','Kedelai'],
answer:0
},
{
q: 'どんぶり',
options: ['Nasi mangkuk','Nasi goreng','Nasi kepal'],
answer:0
},
{
q: 'につけ',
options: ['Semur','Rebusan','Ketoprak'],
answer:0
},
{
q: 'にもの',
options: ['Rebusan','Air','Air minun'],
answer:0
},
{
q: 'ふくしょく',
options: ['Lauk pauk','Nasi','Sup'],
answer:0
},
{
q: 'むぎちゃ',
options: ['Teh gandum','Teh hijau','Teh hitam'],
answer:0
},
{
q: 'メニュー',
options: ['Menu','Makanan','Makanan pokok'],
answer:0
},
{
q: 'やきざかな',
options: ['Ikan bakar','Ikan','Sup'],
answer:0
},
{
q: 'ヨーグルト',
options: ['Yoghurt','Minuman','Air'],
answer:0
},
{
q: 'あしもと',
options: ['Kaki','Tangan','Perut'],
answer:0
},
{
q: 'いんぶ',
options: ['Area genital','Kaki','Lutut'],
answer:0
},
{
q: 'かんちょう',
options: ['Enema','Hemiplegia','Dekubitus'],
answer:0
},
{
q: 'きがえる',
options: ['Berganti pakaian','Berpindah','Beralih'],
answer:0
},
{
q: 'さげる',
options: ['Menurunkan','Menaikkan','Melepas'],
answer:0
},
{
q: 'しっきん',
options: ['Inkontinensia','Skabies','Konstipasi'],
answer:0
},
{
q: 'しゅうちしん',
options: ['Rasa malu','Rasa ingin','berganti pakaian'],
answer:0
},
{
q: 'つかいすててぶくろ',
options: ['Sarung tangan sekali pakai','Tangan','Rasa malu'],
answer:0
},
{
q: 'にょう',
options: ['Urine','Ekskresi','Konstipasi'],
answer:0
},
{
q: 'にょうい',
options: ['Keinginan berkemih','Konstipasi','Sarung tangan sekali pakai'],
answer:0
},
{
q: 'はいせつ',
options: ['Ekskresi','Konstipasi','Inkontinensia'],
answer:0
},
{
q: 'べん',
options: ['Feses','Urine','Konstipasi'],
answer:0
},
{
q: 'べんい',
options: ['Keinginan defekasi','Feses','Ekskresi'],
answer:0
},
{
q: 'べんざ',
options: ['Toilet duduk','Toilet Portabel','Kamar mandi'],
answer:0
},
{
q: 'ポータブルトイレ',
options: ['Toilet Portabel','Toilet duduk','Kamar mandi'],
answer:0
},
{
q: 'かんごしょく',
options: ['Perawat','Pengguna','Dokter'],
answer:0
},
{
q: 'しょくいん',
options: ['Staf','Dokter','Pengguna'],
answer:0
},
{
q: 'パジャマ',
options: ['Piyama','Celana','Celana Dalam'],
answer:0
},
{
q: 'よびだしぼたん',
options: ['Tombol panggil','Toilet portabel','Tombol nuklir'],
answer:0
},
{
q: 'いるい',
options: ['Pakaian','Air muka','Tombol panggil'],
answer:0
},
{
q: 'いれば',
options: ['Gigi tiruan','Gigi','Keringat'],
answer:0
},
{
q: 'うがい',
options: ['Berkumur','Baju atasan','Pakaian'],
answer:0
},
{
q: 'うわぎ',
options: ['Baju atasan','Pakaian','Berkumur'],
answer:0
},
{
q: 'ぎし',
options: ['Gigi palsu/buatan','Gigi','Pasta gigi'],
answer:0
},
{
q: 'きしょう',
options: ['Bangun tidur','Beralih','Bangkit'],
answer:0
},
{
q: 'くし',
options: ['Sisir','Mencuci Rambut','Mencukur rambut'],
answer:0
},
{
q: 'こうい',
options: ['Berganti pakaian','Menurunkan','Menaikkan'],
answer:0
},
{
q: 'こうくうけあ',
options: ['Perawatan rongga mulut','Berganti pakaian','Bangun tidur'],
answer:0
},
{
q: 'したぎ',
options: ['Pakaian dalam','Bangkit','Air muka'],
answer:0
},
{
q: 'スカート',
options: ['Rok','Celana pendek','Celana panjang'],
answer:0
},
{
q: 'はいしゃ',
options: ['Doket gigi','Sikat gigi','Sakit gigi'],
answer:0
},
{
q: '歯ブラシ',
options: ['Sikat gigi','Pasta gigi','Sakit gigi'],
answer:0
},
{
q: 'はみがき',
options: ['Pasta gigi','Sikat gigi','Sakit gigi'],
answer:0
},
{
q: 'パンツ',
options: ['Celana dalam','Piyama','Baju'],
answer:0
},
{
q: 'ひげそり',
options: ['Pisau cukur','Pisau dapur','Pisau daging'],
answer:0
},
{
q: 'みじたく',
options: ['Merapikan diri','Bersih-bersih','Merapikan barang'],
answer:0
},
{
q: 'ようふく',
options: ['Pakaian','Celana dalam','Pakaian dalam'],
answer:0
},
{
q: 'しんさつ',
options: ['Pemeriksaan medis','Staf profesional medis','Tindakan medis'],
answer:0
},
{
q: 'ひだりがわ',
options: ['Sisi kiri','Sisi kanan','Tengah'],
answer:0
},
{
q: 'みぎがわ',
options: ['Sisi kanan','Sisi kiri','Tengah'],
answer:0
},
{
q: 'みる',
options: ['Memeriksa','Mengambil','Membantu'],
answer:0
},
{
q: 'よなか',
options: ['Tengah malam','Siang hari','Pagi hari'],
answer:0
},
{
q: 'おんど',
options: ['Suhu','Berkeringat','Keramas'],
answer:0
},
{
q: '(あせを)　かく',
options: ['Berkeringat','Suhu','Mandi'],
answer:0
},
{
q: 'シャンプー',
options: ['Sampo','Mandi','Rambut'],
answer:0
},
{
q: 'しょうどく',
options: ['Disinfeksi','Virus','Bakteri'],
answer:0
},
{
q: 'しょうどくえき',
options: ['Larutan antiseptik','Disinfeksi','Virus'],
answer:0
},
{
q: 'せいけつほじ',
options: ['Menjaga kebersihan tubuh','Merapikan diri','Infeksi'],
answer:0
},
{
q: 'せいしき',
options: ['Mandi seka','Kamar mandi','Menyeka'],
answer:0
},
{
q: 'せんぱつ',
options: ['Keramas','Sampo','Mandi'],
answer:0
},
{
q: 'せんめん',
options: ['Cuci muka','Cuci tangan','Baskom'],
answer:0
},
{
q: 'せんめんき',
options: ['Baskom','Cuci muka','Cuci tangan'],
answer:0
},
{
q: 'だついしつ',
options: ['Ruang ganti pakaian','Merapikan diri','Cuci muka'],
answer:0
},
{
q: 'にゅうよく',
options: ['Mandi','Cuci tangan','Cuci muka'],
answer:0
},
{
q: 'ふく',
options: ['Menyeka','Demam','Dingin'],
answer:0
},
{
q: 'よくしつ',
options: ['Kamar mandi','Ruang makan','Kamar tidur'],
answer:0
},
{
q: 'よくそう',
options: ['Bak mandi','Shower','Air hangat'],
answer:0
},
{
q: 'リンス',
options: ['Kondisioner','Sampo','Sabun badan'],
answer:0
},
{
q: 'かくにん',
options: ['Memeriksa/Memastikan','Sakit','Gejala'],
answer:0
},
{
q: 'おしぼり',
options: ['Lap tangan basah','Handuk','Baju'],
answer:0
},
{
q: 'カーテン',
options: ['Tirai','Handuk','Lap tangan basah'],
answer:0
},
{
q: 'かじ',
options: ['Pekerjaan rumah','Staf perawat','Pengguna'],
answer:0
},
{
q: 'かたづける',
options: ['Membereskan','Menyeka','Mandi'],
answer:0
},
{
q: 'かわかす',
options: ['Mengeringkan','Mencuci','Membereskan'],
answer:0
},
{
q: 'かわく',
options: ['Mengering','Membereskan','Mencuci'],
answer:0
},
{
q: 'かんき',
options: ['Pergantian udara','Ganti Pakaian','Ruang makan'],
answer:0
},
{
q: 'ごみばこ',
options: ['Kotak sampah','Kotak saran','Kotak surat'],
answer:0
},
{
q: 'せいそう',
options: ['Membersihkan','Membereskan','Mencuci'],
answer:0
},
{
q: 'せんたく',
options: ['Mencuci pakaian','Memandikan','Membantu'],
answer:0
},
{
q: 'せんたくもの',
options: ['Cucian','Pakaian','Perlengkapan'],
answer:0
},
{
q: 'そうじ',
options: ['Membersihkan','Memandikan','Melaporkan'],
answer:0
},
{
q: 'たたむ',
options: ['Melipat','Menjemur','Mencuci'],
answer:0
},
{
q: 'ちょうり',
options: ['Memasak','Melihat','Memegang'],
answer:0
},
{
q: 'ふとん',
options: ['Kasur','Bantal','Meja'],
answer:0
},
{
q: 'ほす',
options: ['Menjemur','Mencuci','Merapikan'],
answer:0
},
{
q: 'まくら',
options: ['Bantal','Kasur','Kursi'],
answer:0
},
{
q: 'アルコール',
options: ['Alkohol','Parfum','Pewarna makanan'],
answer:0
},
{
q: 'かくにん',
options: ['Memeriksa','Mandi','Melaporkan'],
answer:0
},
{
q: 'かんさつ',
options: ['Mengamati','Melaporkan','Membantu'],
answer:0
},
{
q: 'ぎょうじ',
options: ['Acara','Laporan','Jatuh'],
answer:0
},
{
q: 'きろく',
options: ['Catatan','Acara','Jatuh'],
answer:0
},
{
q: 'きんえん',
options: ['Dilarang merokok','Dilarang masuk','Dilarang berisik'],
answer:0
},
{
q: 'きんし',
options: ['Larangan','Keahlian','Kelemahan'],
answer:0
},
{
q: 'けいかく',
options: ['Rencana','Larangan','Kelemahan'],
answer:0
},
{
q: 'けいじ',
options: ['Pengumuman','Melaporkan','Catatan'],
answer:0
},
{
q: 'ケース',
options: ['Kasus','Laporan','Pengumuman'],
answer:0
},
{
q: 'けん',
options: ['Prefektur','Kontaktur','Fraktur'],
answer:0
},
{
q: 'げんかん',
options: ['Area pintu masuk','Pintu darurat','Dilarang masuk'],
answer:0
},
{
q: 'さんかしゃ',
options: ['Peserta','Pengguna','Staf Perawat'],
answer:0
},
{
q: 'さんか',
options: ['Partisipasi','Acara','Rencana'],
answer:0
},
{
q: 'じこ',
options: ['Kecelakaan','Kebakaran','Gempa'],
answer:0
},
{
q: 'しせつ',
options: ['Fasilitas','Kecelakaan','Gempa'],
answer:0
},
{
q: 'しゅうしん',
options: ['Pergi tidur','Pergi kerja','Pulang'],
answer:0
},
{
q: 'しゅっきん',
options: ['Pergi bekerja','Pergi tidur','Patroli'],
answer:0
},
{
q: 'じゅんし',
options: ['Patroli','Pergi bekerja','Pergi pulang'],
answer:0
},
{
q: 'しよう',
options: ['Menggunakan','Kondisi','Tanda-tanda vital'],
answer:0
},
{
q: 'じょうきょう',
options: ['Kondisi','Patroli','Menggunakan'],
answer:0
},
{
q: 'ショートステイ',
options: ['Short stay','Kondisi','Menggunakan'],
answer:0
},
{
q: 'じりつ',
options: ['Kemandirian','Kondisi','Patroli'],
answer:0
},
{
q: 'スケジュール',
options: ['Jadwal','Laporan','Melaporkan'],
answer:0
},
{
q: 'そうげいしゃ',
options: ['Mobil antar jemput','Siang hari','Malam hari'],
answer:0
},
{
q: 'たいきん',
options: ['Pulang kerja','Pergi kerja','Pergi tidur'],
answer:0
},
{
q: 'タイヤ',
options: ['Roda','Rem','Kupling'],
answer:0
},
{
q: 'たてもの',
options: ['Bangunan','Rumah','Panti Jompo'],
answer:0
},
{
q: 'たんとうしゃ',
options: ['Staf penanggung jawab','Dokter','Staf Perawat'],
answer:0
},
{
q: 'ちょうりいん',
options: ['Juru masak','Ahli gizi','Medis'],
answer:0
},
{
q: 'てんとう',
options: ['Terjatuh','Bangkit','Tidur'],
answer:0
},
{
q: 'ナースコール',
options: ['Alat pemanggil perawat','Melaporkan','Terjatuh'],
answer:0
},
{
q: 'にっきん',
options: ['Shift Siang','Shift Malam','Shift Pagi'],
answer:0
},
{
q: 'ぬれる',
options: ['Basah','Kering','Mengering'],
answer:0
},
{
q: 'はく',
options: ['Muntah','Mual','Ruam'],
answer:0
},
{
q: 'はずす',
options: ['Melepas','Menurunkan','Menaikkan'],
answer:0
},
{
q: 'ひじょうべる',
options: ['Alarm darurat','alat pemanggil perawat','Melepas'],
answer:0
},
{
q: '119番',
options: ['Panggilan 119','Gedung WTC','Terorism'],
answer:0
},
{
q: 'ふくやく',
options: ['Minum obat','Minum Yakult','Minum Teh sisri'],
answer:0
},
{
q: 'ほうこく',
options: ['Laporan','Catatan','Rencana'],
answer:0
},
{
q: 'ホール',
options: ['Aula','Lapangan','Kelas'],
answer:0
},
{
q: 'まつり',
options: ['Festival','Panas','Dingin'],
answer:0
},
{
q: 'ミーティング',
options: ['Pertemuan','Laporan','Melaporkan'],
answer:0
},
{
q: 'みまもり',
options: ['Mengawasi','Besuk','Serah terima'],
answer:0
},
{
q: 'めんかい',
options: ['Besuk','Mengawasi','Melaporkan'],
answer:0
},
{
q: 'やきん',
options: ['Shift Malam','Shift siang','Shift Pagi'],
answer:0
},
{
q: 'りゅうこう',
options: ['Wabah','Norovirus','Skabies'],
answer:0
},
{
q: 'りようしゃ',
options: ['Pengguna','Staf Perawat','Dokter gigi'],
answer:0
}
]