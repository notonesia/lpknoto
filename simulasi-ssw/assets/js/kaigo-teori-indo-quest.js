

 // Objek
const quiz = [
{
q: 'Cara berpikir tentang kehidupan yang mencakup kekayaan spiritual, seperti rasa puas dan bahagia terhadap kehidupan serta alasan hidup.',
options: ['QOL (Quality of Life)','IADL (Instrumental Activities of Daily Living)','ADL (Activities of Daily Living'],
answer:0
},
{
q: 'Pengertian dari gangguan Inkontinensia yang benar adalah…',
options: ['Tidak bisa mengotrol keinginanan untuk BAB dan BAK sehingga sering BAB dan BAK di luar toilet atau tidak pada tempatnya','Feses sulit keluar atau hanya sedikit saja','Keluar feses dengan kandungan air tinggi, sehingga menyebabkan feses menjadi lembek'],
answer:0
},
{
q: 'Melatih kemampuan gerak seperti berjalan merupakan tugas seorang...',
options: ['Terapis fisik','Terapis Okupasi','Terapis Wicara'],
answer:0
},
{
q: 'Berikut ini yang merupakan gejala perilaku dan mental (BPSD) lansia dengan dementia adalah…',
options: ['Halusinasi','Tidak mampu berhitung','Tidak mampu mengingat sesuatu'],
answer:0
},
{
q: 'Ketika membantu Pengguna dengan tuna netra saat makan, hal yang seharusnya dilakukan adalah?',
options: ['Berbicara dan memberi aba-aba sebelum menyuapinya','Perlihatkan menu makanan','Memberikan penjelasan dengan menggunakan gerakan jari'],
answer:0
},
{
q: 'Cara untuk mencegah terjadinya Pneumonia aspirasi yang tepat adalah?',
options: ['Tidak mengajak berbicara saat lansia sedang mengunyah makanan','Menyuapi Lansia dengan sendok yang besar','Lansia makan dalam posisi duduk dan kaigoshoku menyuapi dengan posisi berdiri'],
answer:0
},
{
q: 'Berapakah jumlah kuantitas urin normal perhari?',
options: ['1000-1500 ml','150-450 ml','2000-3000 ml'],
answer:0
},
{
q: 'Hal-hal yang harus diperhatikan dalam merawat Lansia yang mengalami konstipasi adalah?',
options: ['Memberikan makanan yang berserat','Jangan dekat-dekat toilet','Langsung menidurkan Lansia ketika selesai makan'],
answer:0
},
{
q: 'Di bawah ini yang BUKAN stimulus/penyebab tekanan darah naik adalah?',
options: ['Tertidur','Pergerakan yang tiba-tiba','Perubahan suhu tiba-tiba'],
answer:0
},
{
q: 'Manakah yang termasuk ke dalam pengabaian perawatan lansia?',
options: ['Tidak memberikan makan','Mengatakan hal-hal kasar','Mengambil uang lansia dari dompetnya'],
answer:0
},
{
q: 'Di antara 3 di bawah ini, manakah yang tidak seharusnya dilakukan oleh perawat lansia?',
options: ['Mengambil tindakan medis sendiri','Melakukan perawatan pertama jika terjadi borok pada pasien','Jika keadaan lansia memburuk, segera memanggil dokter'],
answer:0
},
{
q: 'Berikut ini yang bukan gejala-gejala inti yang ditimbulkan pada lansia dengan dementia adalah...',
options: ['Anoreksia','Diorientasi','Disfungsi eksekutif'],
answer:0
},
{
q: 'Kebutuhan untuk tidur dan makan adalah termasuk ke dalam kebutuhan?',
options: ['Kebutuhan fisiologis','Kebutuhan sosial','Kebutuhan akan rasa aman'],
answer:0
},
{
q: 'Pnemonia aspirasi adalah…',
options: ['Komplikasi akibat dari aspirasi ke paru-paru','Penyakit pembuluh darah di otak','Penyakit tulang rapuh'],
answer:0
},
{
q: 'Berikut ini yang bukan merupakan jenis dementia yang  paling banyak ditemui adalah…',
options: ['Dementia temporal','Dementia vascular','Dementia body lewy'],
answer:0
},
{
q: 'Manakah yang tidak termasuk ke dalam jenis sumber infeksi?',
options: ['Sisa makanan','Darah','Dahak (sputum)'],
answer:0
},
{
q: 'Berikut ini yang tidak termasuk dalam TTV (tanda-tanda vital) adalah…',
options: ['Struktur tubuh','Denyut nadi','Tekanan darah'],
answer:0
},
{
q: 'Di antara pilihan di bawah ini, manakah yang TIDAK sesuai dengan prinsip mekanika tubuh?',
options: ['Menggunakan bagian otot yang lebih kecil','Menggunakan prinsip tuas','Memperlebar landasan penopang'],
answer:0
},
{
q: 'Melatih tindakan yang diperlukan untuk menjalani aktivitas keseharian merupakan tugas seorang...',
options: ['Terapis okupasi','Terapis fisik','Terapis wicara'],
answer:0
},
{
q: 'Melatih pengguna yang mengalami kesulitan berbicara dan menelan (deglutisi).',
options: ['Terapis Wicara','Terapis Okupasi','Terapis Fisik'],
answer:0
},
{
q: 'Alur dasar perawatan lansia',
options: ['Penilaian - Penyusunan Rencana - Pelaksanaan - Evaluasi','Penilaian - Penyusunan Rencana - Evaluasi - Pelaksanaan','Evaluasi - Pelaksanaan - Penyusunan rencana - Penilaian'],
answer:0
},
{
q: 'Infeksi Droplet',
options: ['Influenza','Norovirus','Campak'],
answer:0
},
{
q: 'Infeksi Udara',
options: ['Tuberkulosis','Influenza','O157'],
answer:0
},
{
q: 'Infeksi Kontak',
options: ['O157','Tuberkulosis','Campak'],
answer:0
},
{
q: 'Influenza',
options: ['Infeksi Droplet','Infeksi Udara','Infeksi Kontak'],
answer:0
},
{
q: 'Tuberkulosis, Campak',
options: ['Infeksi Udara','Infeksi Droplet','Infeksi Kontak'],
answer:0
},
{
q: 'Norovirus, O157',
options: ['Infeksi Kontak','Infeksi Droplet','Infeksi Udara'],
answer:0
},
{
q: 'Sistem biologi yang bekerja mempertahankan kondisi tubuh sekalipun lingkungan di sekitarnya berubah.',
options: ['Homeostasis','Tuberkulosis','Hemiplegia'],
answer:0
},
{
q: 'Fase Sistolik',
options: ['Tekanan darah : Tinggi (Jantung Berkontraksi)','Tekanan darah : Rendah (Jantung Berelaksasi)'],
answer:0
},
{
q: 'Fase Diastolik',
options: ['Tekanan darah : Rendah (Jantung Berelaksasi)','Tekanan darah : Tinggi (Jantung Berkontraksi)'],
answer:0
},
{
q: 'Saraf Pusat',
options: ['Otak dan Medula Spinalis','Saraf Kranial dan Saraf Spinal'],
answer:0
},
{
q: 'Saraf Tepi',
options: ['Saraf Kranial dan Saraf Spinal','Otak dan Medula Spinalis'],
answer:0
},
{
q: 'Saraf Kranial',
options: ['12 Pasang','31 Pasang'],
answer:0
},
{
q: 'Saraf Spinal',
options: ['31 Pasang','12 Pasang'],
answer:0
},
{
q: 'Fungsi Diensefalon',
options: ['Pusat saraf otonom, mengatur suhu tubuh, tidur, dll.','Fungsi penopang hidup (Mengatur frekuensi detak jantung, mengatur pernapasan, menelan, dll.','(Mengatur keseimbangan tubuh, Mengatur gerakan, dll.'],
answer:0
},
{
q: 'Fungsi Batang Otak',
options: ['Fungsi penopang hidup (Mengatur frekuensi detak jantung, mengatur pernapasan, menelan, dll.','Pusat saraf otonom, mengatur suhu tubuh, tidur, dll.','(Mengatur keseimbangan tubuh, Mengatur gerakan, dll.'],
answer:0
},
{
q: 'Fungsi Otak Kecil',
options: ['(Mengatur keseimbangan tubuh, Mengatur gerakan, dll.','Fungsi penopang hidup (Mengatur frekuensi detak jantung, mengatur pernapasan, menelan, dll.','Pusat saraf otonom, mengatur suhu tubuh, tidur, dll.'],
answer:0
},
{
q: 'Diensefalon',
options: ['Talamus & Hipotalamus','Otak Tengah, Pons & Medula Onglongata'],
answer:0
},
{
q: 'Batang Otak',
options: ['Talamus & Hipotalamus','Otak Tengah, Pons & Medula Onglongata'],
answer:1
},
{
q: 'Saraf yang mengatur fungsi organ internal secara tidak sadar, dan dibagi menjadi saraf simpatik dan saraf parasimpatik.',
options: ['Saraf Otonom','Saraf Simpatik','Saraf Parasimpatik'],
answer:0
},
{
q: 'Saraf yang bekerja pada saat beraktivitas dan mengalami ketegangan, seperti saat merasa khawatir, marah, dan stres.',
options: ['Saraf Simpatik','Saraf Otonom','Saraf Parasimpatik'],
answer:0
},
{
q: 'Saraf yang bekerja pada saat santai, seperti saat tidur dan beristirahat.',
options: ['Saraf parasimpatik','Saraf otonom','Saraf Simpatik'],
answer:0
},
{
q: 'Saraf Otonom',
options: ['Saraf yang mengatur fungsi organ internal secara tidak sadar, dan dibagi menjadi saraf simpatik dan saraf parasimpatik.','Saraf yang bekerja pada saat beraktivitas dan mengalami ketegangan, seperti saat merasa khawatir, marah, dan stres.','Saraf yang bekerja pada saat santai, seperti saat tidur dan beristirahat.'],
answer:0
},
{
q: 'Saraf Simpatik',
options: ['Saraf yang bekerja pada saat beraktivitas dan mengalami ketegangan, seperti saat merasa khawatir, marah, dan stres.','Saraf yang mengatur fungsi organ internal secara tidak sadar, dan dibagi menjadi saraf simpatik dan saraf parasimpatik.','Saraf yang bekerja pada saat santai, seperti saat tidur dan beristirahat.'],
answer:0
},
{
q: 'Saraf Parasimpatik',
options: ['Saraf yang bekerja pada saat santai, seperti saat tidur dan beristirahat.','Saraf yang bekerja pada saat beraktivitas dan mengalami ketegangan, seperti saat merasa khawatir, marah, dan stres.','Saraf yang mengatur fungsi organ internal secara tidak sadar, dan dibagi menjadi saraf simpatik dan saraf parasimpatik.'],
answer:0
},
{
q: 'Menopang Tubuh, Alat Gerak, Melindungi Organ, Menyimpan Kalsium, Hemopoesis/Haematopoiesis',
options: ['Fungsi Tulang','Fungsi Hati','Fungsi Jantung'],
answer:0
},
{
q: 'Peristiwa pembuatan sel darah.',
options: ['Hemopoesis/Haematopoiesis','Homeostasis','Hipotalamus'],
answer:0
},
{
q: 'Hemopoesis/Haematopoiesis',
options: ['Peristiwa pembuatan sel darah','Sistem biologi yang bekerja mempertahankan kondisi tubuh','Mengatur frekuensi detak jantung'],
answer:0
},
{
q: 'Tulang Tengkorak',
options: ['Kranium','Sternum','Kostal'],
answer:0
},
{
q: 'Tulang Dada',
options: ['Sternum','Humerus','Kostal'],
answer:0
},
{
q: 'Tulang Rusuk',
options: ['Kostal','Humerus','Femur'],
answer:0
},
{
q: 'Tulang Lengan Atas',
options: ['Humerus','Kostal','Femur'],
answer:0
},
{
q: 'Tulang Pengumpil',
options: ['Radius','Ulna','Kostal'],
answer:0
},
{
q: 'Tulang Paha',
options: ['Femur','Humerus','Radius'],
answer:0
},
{
q: 'Tulang Leher',
options: ['Servikal','Lumbar','Radius'],
answer:0
},
{
q: 'Tulang Pinggang',
options: ['Lumbar','Servikal','Sternum'],
answer:0
},
{
q: 'Kranium',
options: ['Tulang Tengkorak','Tulang Pinggang','Tulang Leher'],
answer:0
},
{
q: 'Sternum',
options: ['Tulang dada','Tulang Pinggang','Tulang Paha'],
answer:0
},
{
q: 'Kostal',
options: ['Tulang Rusuk','Tulang Paha','Toraks'],
answer:0
},
{
q: 'Humerus',
options: ['Tulang Lengan Atas','Tulang Pengumpil','Toraks'],
answer:0
},
{
q: 'Radius',
options: ['Tulang Pengumpil','Tulang Lengan Atas','Tulang Paha'],
answer:0
},
{
q: 'Tulang Hasta',
options: ['Ulna','Radius','Humerus'],
answer:0
},
{
q: 'Ulna',
options: ['Tulang Hasta','Tulang Paha','Tulang Pinggang'],
answer:0
},
{
q: 'Femur',
options: ['Tulang Paha','Tulang Hasta','Tulang Pinggang'],
answer:0
},
{
q: 'Servikal',
options: ['Tulang Leher','Tulang Pinggang','Toraks'],
answer:0
},
{
q: 'Lumbar',
options: ['Tulang Pinggang','Tulang Leher','Toraks'],
answer:0
},
{
q: 'Lensa Mata',
options: ['Berbentuk bola rugbi transparan. Berfungsi mengatur fokus','Jaringan membran tipis yang melingkupi seluruh permukaan fundus. Berfungsi memproyeksikan gambar','Berfungsi menyampaikan rangsangan pada retina ke otak'],
answer:0
},
{
q: 'Retina',
options: ['Berfungsi mengatur fokus','Jaringan membran tipis yang melingkupi seluruh permukaan fundus. Berfungsi memproyeksikan gambar','Berbentuk bola rugbi transparan. Berfungsi mengatur fokus','Berfungsi menyampaikan rangsangan pada retina ke otak'],
answer:1
},
{
q: 'Saraf Optik',
options: ['Berfungsi menyampaikan rangsangan pada retina ke otak','Berbentuk bola rugbi transparan. Berfungsi mengatur fokus','Berfungsi mengatur fokus','Jaringan membran tipis yang melingkupi seluruh permukaan fundus. Berfungsi memproyeksikan gambar'],
answer:0
},
{
q: 'Berbentuk bola rugbi transparan. Berfungsi mengatur fokus',
options: ['Lensa Mata','Retina','Saraf Otak'],
answer:0
},
{
q: 'Jaringan membran tipis yang melingkupi seluruh permukaan fundus. Berfungsi memproyeksikan gambar',
options: ['Retina','Saraf Optik','Lensa Mata'],
answer:0
},
{
q: 'Berfungsi menyampaikan rangsangan pada retina ke otak',
options: ['Saraf Optik','Retina','Lensa Mata'],
answer:0
},
{
q: 'Gendang Telinga',
options: ['Menerima suara sebagai getaran','Memperkuat Getaran','Mengubah getaran Menjadi sinyal'],
answer:0
},
{
q: 'Tulang Kecil (osikel)',
options: ['Memperkuat Getaran','Menerima suara sebagai getaran','Mengubah getaran Menjadi sinyal'],
answer:0
},
{
q: 'Koklea',
options: ['Mengubah getaran Menjadi sinyal','Menyampaikan sinyal ke korteks auditori di otak besar','Memperkuat Getaran'],
answer:0
},
{
q: 'Saraf Pendengaran',
options: ['Menyampaikan sinyal ke korteks auditori di otak besar','Mengubah getaran Menjadi sinyal','Menerima suara sebagai getaran'],
answer:0
},
{
q: 'Menerima suara sebagai getaran',
options: ['Gendang Telinga','Saraf Pendengaran','Koklea'],
answer:0
},
{
q: 'Memperkuat Getaran',
options: ['Tulang Kecil (osikel)','Gendang Telinga','Saraf Pendengaran'],
answer:0
},
{
q: 'Mengubah getaran Menjadi sinyal',
options: ['Koklea','Saraf Pendengaran','Tulang Kecil (osikel)'],
answer:0
},
{
q: 'Menyampaikan sinyal ke korteks auditori di otak besar',
options: ['Saraf Pendengaran','Koklea','Tulang Kecil (osikel)'],
answer:0
},
{
q: 'Bekerja mengirimkan dan melakukan sirkulasi oksigen, nutrisi, zat buangan, dll. melalui aliran darah dan limfa ke seluruh tubuh.',
options: ['Sistem Kardiovaskular','Sistem Pernapasan','Sistem Otot'],
answer:0
},
{
q: 'Sirkulasi Sistemik',
options: ['Darah bersih mengalir melalui arteri dan darah kotor mengalir melalui vena, dan beredar ke seluruh tubuh.','Peredaran saat darah dari jantung melalui paru-paru kembali ke jantung'],
answer:0
},
{
q: 'Sirkulasi Pulmonal',
options: ['Peredaran saat darah dari jantung melalui paru-paru kembali ke jantung','Darah bersih mengalir melalui arteri dan darah kotor mengalir melalui vena, dan beredar ke seluruh tubuh.'],
answer:0
},
{
q: 'Darah bersih mengalir melalui arteri dan darah kotor mengalir melalui vena, dan beredar ke seluruh tubuh.',
options: ['Sirkulasi Sistemik','Sirkulasi Pulmonal'],
answer:0
},
{
q: 'Peredaran saat darah dari jantung melalui paru-paru kembali ke jantung',
options: ['Sirkulasi Pulmonal','Sirkulasi Sistemik'],
answer:0
},
{
q: 'Tidur Non-REM',
options: ['Tidur Nyenyak','Tidur Dangkal'],
answer:0
},
{
q: 'Tidur REM',
options: ['Tidur Dangkal','Tidur Nyenyak'],
answer:0
},
{
q: 'Tidur Nyenyak',
options: ['Tidur Non-REM','Tidur REM'],
answer:0
},
{
q: 'Tidur Dangkal',
options: ['Tidur REM','Tidur Non-REM'],
answer:0
},
{
q: 'Tidur Non-Rem',
options: ['Otak dalam kondisi tidur & Tidak Bermimpi','Otak tidak dalam kondisi tidur & Bermimpi'],
answer:0
},
{
q: 'Tidur REM',
options: ['Otak tidak dalam kondisi tidur & Bermimpi','Otak dalam kondisi tidur & Tidak Bermimpi'],
answer:0
},
{
q: 'Edema',
options: ['Pembengkakan','Luka Baring','Sulit Menelan'],
answer:0
},
{
q: 'Pembengkakan',
options: ['Edema','Dekubitus','Hipertensi'],
answer:0
},
{
q: 'Hipoakusis',
options: ['Sulit Mendengar bunyi tinggi','Sulit Mengunyah','Sulit Menelan'],
answer:0
},
{
q: 'Mastikasi',
options: ['Sulit Mengunyah','Sulit Menelan','Sulit Mendengar bunyi tinggi'],
answer:0
},
{
q: 'Deglutisi',
options: ['Sulit Menelan','Sulit Mengunyah','Sulit Mendengar bunyi tinggi'],
answer:0
},
{
q: 'Gejala Atipikal',
options: ['Gejala sulit terlihat','Gejala gampang terlihat'],
answer:0
},
{
q: 'Pembuluh darah di otak pecah atau tersumbat',
options: ['Serebrovaskular','Kardiovaskular','Hemiplegia'],
answer:0
},
{
q: 'Infark Serebral',
options: ['Pembuluh darah di Otak tersumbat','Pembuluh darah di otak pecah','Pembuluh darah di jantung tersumbat'],
answer:0
},
{
q: 'Hemorrhagia Intrakranial',
options: ['Pembuluh darah di otak pecah','Pembuluh darah di otak tersumbat','Pembuluh darah di jantung tersumbat'],
answer:0
},
{
q: 'Pembuluh darah di otak tersumbat',
options: ['Infark serebral','Infark miokard','Hemorrhagia Intrakranial'],
answer:0
},
{
q: 'Pembuluh darah di otak pecah',
options: ['Hemorrhagia Intrakranial','Infark Miokard','Infark Serebral'],
answer:0
},
{
q: 'Penyakit penyumbatan pembuluh darah di Jantung',
options: ['Kardiovaskular','Serebrovaskular','Pneumonia'],
answer:0
},
{
q: 'Angina Pektoris',
options: ['Pembuluh darah di Jantung menyempit','Pembuluh darah di Jantung tersumbat','Pembuluh darah di Otak tersumbat'],
answer:0
},
{
q: 'Infark Miokard',
options: ['Pembuluh darah di Jantung tersumbat','Pembuluh darah di Jantung menyempit','Pembuluh darah di Otak tersumbat'],
answer:0
},
{
q: 'Pembuluh darah di Jantung menyempit',
options: ['Angina Pektoris','Hemorrhagia Intrakranial','Infark Miokard'],
answer:0
},
{
q: 'Pembuluh darah di Jantung tersumbat',
options: ['Infark Miokard','Angina Pektoris','Infark Serebral'],
answer:0
},
{
q: 'Penyakit rapuhnya tulang akibat masa tulang berkurang',
options: ['Osteoporosis','Diabetes','Serebrovaskular'],
answer:0
},
{
q: 'Osteoporosis',
options: ['Penyakit rapuhnya tulang akibat masa tulang berkurang','Penyakit Kelainan metabolisme (Kadar gula darah meningkat)','Penyakit penyumbatan pembuluh darah di Jantung'],
answer:0
},
{
q: 'Tulang Punggung',
options: ['Vertebra','Humerus','Radius'],
answer:0
},
{
q: 'Vertebra',
options: ['Tulang Punggung','Tulang Pinggang','Tulang Lengan Atas'],
answer:0
},
{
q: 'Kelainan bawaan lahir',
options: ['Kongenital','Oralism','Stoma'],
answer:0
},
{
q: 'Kongenital',
options: ['Kelainan bawaan lahir','Sulit Berbicara','Kelainan karena kecelakaan'],
answer:0
},
{
q: 'Membaca gerak bibir',
options: ['Oralism','Hipoakusis','Stoma'],
answer:0
},
{
q: 'Afasia',
options: ['Kondisi ingin berbicara tapi tidak bisa melanjutkan kata-kata','Kondisi sulit mengalirkan darah ke seluruh tubuh','Sulit Menelan'],
answer:0
},
{
q: 'Lubang untuk mengeluarkan ekskreta dibuat dengan operasi pada abdomen',
options: ['Stoma','Urostoma','Kolostomi'],
answer:0
},
{
q: 'Kandung kemih buatan',
options: ['Urostoma','Stoma','Kolostomi'],
answer:0
},
{
q: 'Anus buatan',
options: ['Kolostomi','Urostoma','Stoma'],
answer:0
},
{
q: 'Lobus Frontal',
options: ['Penciuman, pengendalian gerakan, emosi, semangat, kemauan, dll.','Indra pengecap, penilaian, pemahaman, dll.','Pendengaran, pemahaman bahasa, pengetahuan, memori, dll.'],
answer:0
},
{
q: 'Lobus Parietal',
options: ['Indra pengecap, penilaian, pemahaman, dll.','Pendengaran, pemahaman bahasa, pengetahuan, memori, dll.','Penciuman, pengendalian gerakan, emosi, semangat, kemauan, dll.'],
answer:0
},
{
q: 'Lobus Temporal',
options: ['Pendengaran, pemahaman bahasa, pengetahuan, memori, dll.','Penglihatan, dll.','Penciuman, pengendalian gerakan, emosi, semangat, kemauan, dll.'],
answer:0
},
{
q: 'Lobus Oksipital',
options: ['Penglihatan, dll.','Indra pengecap, penilaian, pemahaman, dll.','Pendengaran, pemahaman bahasa, pengetahuan, memori, dll.'],
answer:0
},
{
q: 'Penciuman, pengendalian gerakan, emosi, semangat, kemauan, dll.',
options: ['Lobus Frontal','Lobus Temporal','Lobus Parietal'],
answer:0
},
{
q: 'Pendengaran, pemahaman bahasa, pengetahuan, memori, dll.',
options: ['Lobus Temporal','Lobus Frontal','Lobus Oksipital'],
answer:0
},
{
q: 'Indra pengecap, penilaian, pemahaman, dll.',
options: ['Lobus Parietal','Lobus Frontal','Lobus Temporal'],
answer:0
},
{
q: 'Penglihatan, dll.',
options: ['Lobus Oksipital','Otak Temporal','Lobus Frontal'],
answer:0
},
{
q: 'Demensia Alzheimer',
options: ['Otak Menyusut & Muncul plak senilis','Lobus frontal dan lobus temporal menyusut','Muncul badan lewy'],
answer:0
},
{
q: 'Demensia Vaskular',
options: ['Pembuluh darah tersumbat dan sebagian sel otak mati','Otak Menyusut & Muncul plak senilis','Lobus frontal dan lobus temporal menyusut'],
answer:0
},
{
q: 'Demensia Badan Lewy',
options: ['Muncul badan lewy','Lobus frontal dan lobus temporal menyusut','Otak Menyusut & Muncul plak senilis'],
answer:0
},
{
q: 'Demensia Frontotemporal',
options: ['Lobus frontal dan lobus temporal menyusut','Otak Menyusut & Muncul plak senilis','Pembuluh darah tersumbat dan sebagian sel otak mati'],
answer:0
},
{
q: 'Otak Menyusut & Muncul plak senilis',
options: ['Demensia Alzheimer','Demensia badan lewy','Demensia frontotemporal'],
answer:0
},
{
q: 'Lobus frontal dan lobus temporal menyusut',
options: ['Demensia frontotemporal','Demensia Alzheimer','Demensia vaskular'],
answer:0
},
{
q: 'Pembuluh darah tersumbat dan sebagian sel otak mati',
options: ['Demensia Vaskular','Demensia Frontotemporal','Demensi Alzheimer'],
answer:0
},
{
q: 'Muncul badan lewy',
options: ['Demensia badan lewy','Demensia Vaskular','Demensia Alzheimer'],
answer:0
},
{
q: 'Fakta Subjektif',
options: ['Apa yang dilihat pengguna, Keluhan pengguna dan perkataan pengguna','Apa yang dilihat Oleh staf perawat','Angka tekanan darah dan suhu tubuh'],
answer:0
},
{
q: 'Fakta Objektif',
options: ['Apa yang dilihat oleh staf perawat','Keluhan Pengguna','Apa yang dilihat pengguna'],
answer:0
},
{
q: 'Apa yang dilihat pengguna, Keluhan pengguna dan perkataan pengguna',
options: ['Fakta Subjektif','Fakta Objektif'],
answer:0
},
{
q: 'Apa yang dilihat oleh staf perawat',
options: ['Fakta Objektif','Fakta Subjektif'],
answer:0
},
{
q: 'Aktivitas ADL (Activities of Daily Living)',
options: ['Berpindah, makan, berganti pakaian, Ekskresi dan Mandi','manajemen uang, berbelanja, mencuci pakaian, menggunakan kendaraan, dan menggunakan peralatan komunikasi'],
answer:0
},
{
q: 'Aktivitas IADL (Instrumental Activities of Daily Living)',
options: ['Manajemen uang, berbelanja, mencuci pakaian, menggunakan kendaraan, dan menggunakan peralatan komunikasi','Berpindah, makan, berganti pakaian, Ekskresi dan Mandi'],
answer:0
},
{
q: 'ADL (Activities of Daily Living)',
options: ['Rangkaian gerakan tubuh dasar seorang manusia untuk hidup secara mandiri.','kemampuan yang diperlukan untuk mempertahankan hidup dalam rumah tangga dan di tengah masyarakat.'],
answer:0
},
{
q: 'IADL (Instrumental Activities of Daily Living',
options: ['Kemampuan yang diperlukan untuk mempertahankan hidup dalam rumah tangga dan di tengah masyarakat.','rangkaian gerakan tubuh dasar seorang manusia untuk hidup secara mandiri'],
answer:0
},
{
q: 'Posisi Fowler',
options: ['Setengah Duduk','Duduk tegak lurus','Duduk Kursi'],
answer:0
},
{
q: 'Kondisi mental dan fisik yang terjadi saat seseorang beristirahat dalam jangka waktu lama dan atau ketika keaktifannya menurun.',
options: ['Sindrome Disuse','Sindrom Stockholm','Sindrom Turner'],
answer:0
},
{
q: 'Sindrome Disuse',
options: ['kondisi mental dan fisik yang terjadi saat seseorang beristirahat dalam jangka waktu lama dan atau ketika keaktifannya menurun.','gangguan pertumbuhan sejak usia 3 tahun sehingga bertubuh lebih pendek dibanding orang lain','kondisi dimana seseorang memiliki dorongan untuk menarik rambutnya sendiri bahkan sampai rontok'],
answer:0
},
{
q: 'Gangguan sirkulasi pada bagian tonjolan tulang dan nekrosis pada kulit yang terjadi karena berbaring dalam waktu lama.',
options: ['Dekubitus','Hemiplegia','Konstipasi'],
answer:0
},
{
q: 'Dekubitus',
options: ['gangguan sirkulasi pada bagian tonjolan tulang dan nekrosis pada kulit yang terjadi karena berbaring dalam waktu lama.','kondisi kelumpuhan atau hilangnya kemampuan otot untuk bergerak yang terjadi pada salah satu sisi tubuh.','gangguan buang air besar (BAB) yang ditandai dengan berkurangnya frekuensi BAB kurang dari tiga kali dalam seminggu, perasaan sulit saat BAB, atau kombinasi keduanya'],
answer:0
},
{
q: 'Melangkah Kestabilan Tinggi',
options: ['Tongkat - Sisi Sakit - Sisi Sehat','Tongkat dan Sisi sakit - Sisi Sehat','Tongkat - Sisi sehat - Sisi Sakit'],
answer:0
},
{
q: 'Melangkah Kestabilan Rendah',
options: ['Tongkat dan Sisi Sakit - Sisi Sehat','Tongkat - Sisi Sakit - Sisi Sehat','Tongkat dan Sisi Sehat - Sisi Sakit'],
answer:0
},
{
q: 'Tongkat dan Sisi Sakit - Sisi Sehat',
options: ['Melangkah Kestabilan Rendah','Melangkah Kestabilan Tinggi','Naik Tangga'],
answer:0
},
{
q: 'Tongkat - Sisi Sakit - Sisi Sehat',
options: ['Melangkah Kestabilan Tinggi','Melangkah Kestabilan Rendah','Naik Tangga'],
answer:0
},
{
q: 'Naik Tangga',
options: ['Tongkat - Sisi sehat - Sisi Sakit','Tongkat - Sisi Sakit - Sisi Sehat','Tongkat dan Sisi Sakit - Sisi Sehat'],
answer:0
},
{
q: 'Turun Tangga',
options: ['Tongkat - Sisi Sakit - Sisi Sehat','Tongkat dan Sisi Sakit - Sisi Sehat','Tongkat - Sisi sehat - Sisi Sakit'],
answer:0
},
{
q: 'Alur makan (Fase Pendahuluan)',
options: ['Mengenali warna, bentuk, bau, dll. dari makanan & Terjadi sekresi saliva','Mengunyah makanan yang dimasukkan ke mulut, mencampurnya dengan saliva, dan membuat gumpalan makanan (bolus makanan)','Bolus makanan dibawa dari esofagus ke lambung.'],
answer:0
},
{
q: 'Alur makan (Fase Persiapan)',
options: ['Mengunyah makanan yang dimasukkan ke mulut, mencampurnya dengan saliva, dan membuat gumpalan makanan (bolus makanan)','Membawa bolus makanan dari rongga mulut ke laring','Refleks menelan terjadi, dan bolus makanan melewati faring'],
answer:0
},
{
q: 'Alur makan (Fase Rongga Mulut)',
options: ['Membawa bolus makanan dari rongga mulut ke laring & Diangkut terutama dengan lidah','Refleks menelan terjadi, dan bolus makanan melewati faring','Mengunyah makanan yang dimasukkan ke mulut, mencampurnya dengan saliva, dan membuat gumpalan makanan (bolus makanan)'],
answer:0
},
{
q: 'Alur makan (Fase Faring)',
options: ['Refleks menelan terjadi, dan bolus makanan melewati faring & Epiglotis menutup untuk mencegah bolus makanan memasuki trakea','Membawa bolus makanan dari rongga mulut ke laring.','Terjadi sekresi saliva'],
answer:0
},
{
q: 'Alur makan (Fase Esofagus)',
options: ['Bolus makanan dibawa dari esofagus ke lambung','Terjadi sekresi saliva','Epiglotis menutup untuk mencegah bolus makanan memasuki trakea'],
answer:0
},
{
q: 'Terjadi sekresi saliva',
options: ['Alur makan (Fase Pendahuluan)','Alur makan (Fase Esofagus)','Alur makan (Fase Faring)'],
answer:0
},
{
q: 'Mengunyah makanan yang dimasukkan ke mulut, mencampurnya dengan saliva, dan membuat gumpalan makanan (bolus makanan)',
options: ['Alur makan (Fase Persiapan)','Alur makan (Fase Rongga mulut)','Alur makan (Fase Faring)'],
answer:0
},
{
q: 'Membawa bolus makanan dari rongga mulut ke laring & Diangkut terutama dengan lidah',
options: ['Alur makan (Fase Rongga mulut)','Alur makan (Fase Persiapan)','Alur makan (Fase Pendahuluan)'],
answer:0
},
{
q: 'Refleks menelan terjadi, dan bolus makanan melewati faring & Epiglotis menutup untuk mencegah bolus makanan memasuki trakea',
options: ['Alur makan (Fase Faring)','Alur makan (Fase Rongga mulut)','Alur makan (Fase Persiapan)'],
answer:0
},
{
q: 'Bolus makanan dibawa dari esofagus ke lambung',
options: ['Alur makan (Fase Esofagus)','Alur makan (Fase Faring)','Alur makan (Fase Pendahuluan)'],
answer:0
},
{
q: 'Mengeluarkan zat-zat yang tidak diperlukan dari dalam tubuh. Zat-zat yang tidak diperlukan tersebut adalah urine, feses, keringat, karbon dioksida, dll.',
options: ['Ekskresi','Konstipasi','Inkontinensia'],
answer:0
},
{
q: 'Ekskresi',
options: ['Mengeluarkan zat-zat yang tidak diperlukan dari dalam tubuh. Zat-zat yang tidak diperlukan tersebut adalah urine, feses, keringat, karbon dioksida, dll.','gangguan buang air besar (BAB) yang ditandai dengan berkurangnya frekuensi BAB kurang dari tiga kali dalam seminggu, perasaan sulit saat BAB, atau kombinasi keduanya','kondisi hilangnya kontrol kandung kemih'],
answer:0
},
{
q: 'Kelenjar keringat (Ekrin)',
options: ['Tersebar diseluruh tubuh dan tidak berbau','Tersebar di bawah ketiak dan lokasi lainnya, dan berbau'],
answer:0
},
{
q: 'Kelenjar keringat (Apokrin)',
options: ['Tersebar di bawah ketiak dan lokasi lainnya, dan berbau','Tersebar diseluruh tubuh dan tidak berbau'],
answer:0
},
{
q: 'Tersebar di bawah ketiak dan lokasi lainnya, dan berbau',
options: ['Kelenjar keringat (Apokrin)','Kelenjar keringat (Ekrin)'],
answer:0
},
{
q: 'Tersebar diseluruh tubuh dan tidak berbau',
options: ['Kelenjar keringat (Ekrin)','Kelenjar keringat (Apokrin)'],
answer:0
},
{
q: 'Urutan Mandi Seka',
options: ['(1) wajah, (2) lengan, (3) dada (abdomen), (4) punggung, (5) kaki, dan (6) area genital','(1) wajah, (2) Dada (abdomen), (3) Lengan, (4) kaki, (5) punggung, dan (6) area genital.','(1) lengan, (2) wajah, (3) dada (abdomen), (4) punggung, (5) area genital, dan (6) kaki'],
answer:0
},
{
q: 'Memori Episodik',
options: ['Pengalaman dan Kenangan','Pengetahuan','Memori yang diingat tanpa disadari'],
answer:0
},
{
q: 'Memori Semantik',
options: ['Pengetahuan','Pengalaman dan Kenangan','Memori yang diingat oleh tubuh'],
answer:0
},
{
q: 'Memori Priming',
options: ['Memori yang diingat tanpa disadari','Memori yang diingat oleh tubuh','Pengalaman dan Kenangan'],
answer:0
},
{
q: 'Memori Prosedural',
options: ['Memori yang diingat oleh tubuh','Pengalaman dan Kenangan','Memori yang diingat tanpa disadari'],
answer:0
},
{
q: 'Memori Pengalaman dan Kenangan',
options: ['Episodik','Priming','Semantik'],
answer:0
},
{
q: 'Memori Pengetahuan',
options: ['Semantik','Priming','Episodik'],
answer:0
},
{
q: 'Memori yang diingat tanpa disadari',
options: ['Priming','Prosedural','Semantik'],
answer:0
},
{
q: 'Memori yang diingat oleh tubuh',
options: ['Prosedural','Priming','Episodik'],
answer:0
},
{
q: 'Kebutuhan akan rasa aman',
options: ['Kebutuhan dasar','Kebutuhan Sosial'],
answer:0
},
{
q: 'Kebutuhan fisiologis',
options: ['Kebutuhan dasar','Kebutuhan sosial'],
answer:0
},
{
q: 'Orang dewasa (NORMAL) Menghisap dan Menghembuskan napas secara konstan',
options: ['12 - 18 kali/Menit','5 - 10 kali/Menit','25 - 30 kali/Menit'],
answer:0
},
{
q: 'Saraf Pusat (Otak)',
options: ['Mengumpulkan informasi dari seluruh tubuh, menganalisis dan membuat keputusan, lalu mengirimkan perintah ke seluruh tubuh','Berfungsi mentransmisikan informasi dari seluruh tubuh ke otak dan dari otak ke seluruh tubuh, serta melakukan penilaian atas informasi dan memberikan perintah secara mandiri','Berfungsi menyampaikan informasi antara saraf pusat dan organ di seluruh tubuh'],
answer:0
},
{
q: 'Saraf Pusat (Medula Spinalis)',
options: ['Berfungsi mentransmisikan informasi dari seluruh tubuh ke otak dan dari otak ke seluruh tubuh, serta melakukan penilaian atas informasi dan memberikan perintah secara mandiri','Berfungsi menyampaikan informasi antara saraf pusat dan organ di seluruh tubuh','Mengumpulkan informasi dari seluruh tubuh, menganalisis dan membuat keputusan, lalu mengirimkan perintah ke seluruh tubuh'],
answer:0
},
{
q: 'Saraf Tepi (Saraf Kranial & Saraf Spinal)',
options: ['Berfungsi menyampaikan informasi antara saraf pusat dan organ di seluruh tubuh','Berfungsi mentransmisikan informasi dari seluruh tubuh ke otak dan dari otak ke seluruh tubuh, serta melakukan penilaian atas informasi dan memberikan perintah secara mandiri','Mengumpulkan informasi dari seluruh tubuh, menganalisis dan membuat keputusan, lalu mengirimkan perintah ke seluruh tubuh'],
answer:0
},
{
q: 'Mengumpulkan informasi dari seluruh tubuh, menganalisis dan membuat keputusan, lalu mengirimkan perintah ke seluruh tubuh',
options: ['Saraf Pusat (Otak)','Saraf Pusat (Medula Spinalis)','Saraf Tepi (Saraf Kranial & Saraf Spinal)'],
answer:0
},
{
q: 'Berfungsi mentransmisikan informasi dari seluruh tubuh ke otak dan dari otak ke seluruh tubuh, serta melakukan penilaian atas informasi dan memberikan perintah secara mandiri',
options: ['Saraf Pusat (Medula Spinalis)','Saraf Pusat (Otak)','Saraf Tepi (Saraf Kranial & Saraf Spinal)'],
answer:0
},
{
q: 'Berfungsi menyampaikan informasi antara saraf pusat dan organ di seluruh tubuh',
options: ['Saraf Tepi (Saraf Kranial & Saraf Spinal)','Saraf Pusat (Otak)','Saraf Pusat (Medula Spinalis)'],
answer:0
},
{
q: 'Arteri',
options: ['Pembuluh Nadi','Pembuluh Balik','Pembuluh darah halus'],
answer:0
},
{
q: 'Vena',
options: ['Pembuluh Balik','Pembuluh Nadi','Pembuluh darah halus'],
answer:0
},
{
q: 'Kapiler',
options: ['Pembuluh darah halus','Pembuluh balik','Pembuluh nadi'],
answer:0
},
{
q: 'Pembuluh darah yang mengalirkan darah yang kaya oksigen dari jantung ke seluruh tubuh',
options: ['Arteri','Kapiler','Vena'],
answer:0
},
{
q: 'Mengumpulkan darah yang kaya karbon dioksida dan zat buangan dari segala sudut tubuh dan mengembalikannya ke jantung dan paru-paru',
options: ['Vena','Arteri','Kapiler'],
answer:0
},
{
q: 'Merupakan organ dengan kelenjar yang mengeluarkan hormon pengatur berbagai fungsi tubuh',
options: ['Sistem Endokrin','Sistem Kardiovaskular','Sistem Pencernaan'],
answer:0
},
{
q: 'Urine (Poliuria)',
options: ['2000 - 3000 ML/Hari','1000 - 1500 ML/Hari','300 - 500 ML/Hari'],
answer:0
},
{
q: 'Urine (Oliguria)',
options: ['300 - 500 ML/Hari','2000 - 3000 ML/Hari','1000 - 1500 ML/Hari'],
answer:0
}
]