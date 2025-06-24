const famousPeople = [
{
    "fullName": "Emil Gasarayev",
    "age": 27,
    "nickname": "Gasar",
    "img": "https://emilgasarayev.com/assets/img/gsr-header-copy.webp",
    "city": "Baku",
    "description": "Mən Emil Qasarayev, \"Shaftali.az\", \"DamYagmuru.az\", \"Morooq.com\", \"Barattson.com\" kimi layihələrdə frontend developer və ya SEO mütəxəssisi olaraq iştirak etmişəm. Hal-hazırda Code Academy-də Frontend əsaslı FullStack tədrisində müəllim köməkçisi kimi fəaliyyət göstərirəm.",
    "id": "1",
    "gender": "kişi"
  },
  {
    "fullName": "Leonardo DiCaprio",
    "age": 50,
    "nickname": "Leo",
    "img": "https://goldenglobes.com/wp-content/uploads/2023/10/leo-2023.jpg",
    "city": "Los Angeles",
    "description": "Leonardo DiCaprio, dünya miqyasında məşhur amerikalı aktyordur. \"Titanic\", \"Inception\", \"The Revenant\" kimi filmlərdəki rolu ilə tanınır.",
    "id": "2",
    "gender": "kişi"
  },
  {
    "fullName": "Scarlett Johansson",
    "age": 38,
    "nickname": "ScarJo",
    "img": "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@.V1.jpg",
    "city": "New York",
    "description": "Scarlett Johansson, məşhur amerikalı aktrisa və müğənnidir. Marvel-un \"Avengers\" seriyasında Black Widow obrazı ilə məşhurdur.",
    "id": "3",
    "gender": "qadın"
  },
  {
    "fullName": "Ariana Grande",
    "age": 30,
    "nickname": "Ari",
    "img": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Ariana_Grande_interview_2016.png",
    "city": "Los Angeles",
    "description": "Ariana Grande, dünyaca məşhur amerikalı müğənni və aktyordur. Onun hit mahnıları arasında \"Thank U, Next\" və \"Problem\" yer alır.",
    "id": "4",
    "gender": "qadın"
  },
  {
    "fullName": "Beyoncé Knowles",
    "age": 43,
    "nickname": "Queen B",
    "img": "https://media1.popsugar-assets.com/files/thumbor/-yHEeO5rjmY5ERJHQXegW-ZZG08/9x192:2244x2427/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/11/900/n/1922398/112085525e431065dba032.37867622_/i/Beyonc%C3%A9-Knowles.jpg",
    "city": "Houston",
    "description": "Beyoncé, dünyaca məşhur amerikalı müğənni və aktyordur. O, həmçinin aktiv xeyriyyə işləri ilə tanınır.",
    "id": "5",
    "gender": "qadın"
  },
  {
    "fullName": "Tom Hanks",
    "age": 68,
    "nickname": "Tom",
    "img": "https://upload.wikimedia.org/wikipedia/commons/3/39/TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg",
    "city": "Los Angeles",
    "description": "Tom Hanks, məşhur amerikalı aktyordur. \"Forrest Gump\", \"Saving Private Ryan\" və \"Cast Away\" kimi filmlərlə tanınır.",
    "id": "6",
    "gender": "kişi"
  },
  {
    "fullName": "Taylor Swift",
    "age": 35,
    "nickname": "Tay",
    "img": "https://m.media-amazon.com/images/M/MV5BYWYwYzYzMjUtNWE0MS00NmJlLTljNGMtNzliYjg5NzQ1OWY5XkEyXkFqcGc@.V1.jpg",
    "city": "Nashville",
    "description": "Taylor Swift, amerikalı müğənni və mahnı yazarıdır. O, pop, country və indie musiqi janrlarında çoxlu hitlərə imza atmışdır.",
    "id": "7",
    "gender": "qadın"
  },
  {
    "fullName": "Brad Pitt",
    "age": 60,
    "nickname": "Brad",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/960px-Brad_Pitt_2019_by_Glenn_Francis.jpg",
    "city": "Los Angeles",
    "description": "Brad Pitt, məşhur amerikalı aktyordur. \"Fight Club\", \"Ocean's Eleven\" və \"Once Upon a Time in Hollywood\" kimi filmlərdəki rolu ilə tanınır.",
    "id": "8",
    "gender": "kişi"
  },
  {
    "fullName": "Jennifer Lopez",
    "age": 54,
    "nickname": "JLo",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Jennifer_Lopez_at_the_2025_Sundance_Film_Festival_%28cropped_3%29.jpg/1200px-Jennifer_Lopez_at_the_2025_Sundance_Film_Festival_%28cropped_3%29.jpg",
    "city": "New York",
    "description": "Jennifer Lopez, məşhur amerikalı müğənni, aktrisa və iş qadınıdır. Onun ən məşhur mahnıları arasında \"On The Floor\" və \"Jenny from the Block\" yer alır.",
    "id": "9",
    "gender": "qadın"
  },
  {
    "fullName": "Shakira",
    "age": 46,
    "nickname": "Shaki",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2023-11-16_Gala_de_los_Latin_Grammy%2C_03_%28cropped%2902.jpg/1200px-2023-11-16_Gala_de_los_Latin_Grammy%2C_03_%28cropped%2902.jpg",
    "city": "Barranquilla",
    "description": "Shakira, Kolumbiyalı məşhur müğənni və rəqqasədir. Onun \"Hips Don't Lie\" mahnısı bütün dünyada böyük uğur qazanmışdır.",
    "id": "10",
    "gender": "qadın"
  },
  {
    "fullName": "Will Smith",
    "age": 55,
    "nickname": "Will",
    "img": "https://m.media-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@.V1_FMjpg_UX1000.jpg",
    "city": "Los Angeles",
    "description": "Will Smith, məşhur amerikalı aktyordur. O, \"Men in Black\", \"The Pursuit of Happyness\" və \"Bad Boys\" kimi filmlərlə tanınır.",
    "id": "11",
    "gender": "kişi"
  },
  {
    "fullName": "Lady Gaga",
    "age": 38,
    "nickname": "Gaga",
    "img": "https://hips.hearstapps.com/hmg-prod/images/lady-gaga-attends-the-64th-annual-grammy-awards-at-mgm-news-photo-1727455427.jpg",
    "city": "New York",
    "description": "Lady Gaga, amerikalı müğənni, bəstəkar və aktrisadır. O, \"Poker Face\" və \"Bad Romance\" kimi hit mahnıları ilə məşhurdur.",
    "id": "12",
    "gender": "qadın"
  },
  {
    "fullName": "Keanu Reeves",
    "age": 59,
    "nickname": "Keanu",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%2846806576944%29_%28cropped%29.jpg/1200px-Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%2846806576944%29_%28cropped%29.jpg",
    "city": "Beirut",
    "description": "Keanu Reeves, məşhur kanadalı aktyordur. \"The Matrix\" və \"John Wick\" kimi aksiyon filmlərindəki rolu ilə tanınır.",
    "id": "13",
    "gender": "kişi"
  },
  {
    "fullName": "Rihanna",
    "age": 35,
    "nickname": "RiRi",
    "img": "https://cdn.britannica.com/83/211883-050-46933F1A/Rihanna-Barbadian-singer-Robyn-Fenty.jpg",
    "city": "Barbados",
    "description": "Rihanna, Barbadoslu müğənni, bəstəkar və iş qadınıdır. Onun \"Umbrella\" və \"Diamonds\" kimi mahnıları dünyada hit olmuşdur.",
    "id": "14",
    "gender": "qadın"
  },
  {
    "fullName": "Kıvanç Tatlıtuğ",
    "age": 39,
    "nickname": "Kıvanç",
    "img": "https://tr.web.img4.acsta.net/c_310_420/pictures/23/04/28/10/21/5825394.png",
    "city": "Istanbul",
    "description": "Kıvanç Tatlıtuğ, məşhur türk aktyoru və modelidir. \"Aşk-ı Memnu\" və \"Kurt Seyit ve Şura\" kimi seriallarla tanınır.",
    "id": "15",
    "gender": "kişi"
  },
  {
    "fullName": "Beren Saat",
    "age": 40,
    "nickname": "Beren",
    "img": "https://tr.web.img4.acsta.net/pictures/20/09/15/17/53/3721941.jpg",
    "city": "Ankara",
    "description": "Beren Saat, türkiyənin məşhur aktrisalarından biridir. O, \"Aşk-ı Memnu\" və \"Fatmagül'ün Suçu Ne?\" kimi seriallarda baş rolda çıxış etmişdir.",
    "id": "16",
    "gender": "qadın"
  },
  {
    "fullName": "Tarkan",
    "age": 51,
    "nickname": "The King of Pop",
    "img": "https://images.genius.com/8a8a732d77098720ae6eb1b11714168b.900x900x1.webp",
    "city": "West Germany",
    "description": "Tarkan, türkiyənin ən məşhur pop müğənnisidir. Onun \"Şımarık\" və \"Kuzu Kuzu\" kimi hit mahnıları ilə dünya çapında məşhurdur.",
    "id": "17",
    "gender": "kişi"
  },
  {
    "fullName": "Sezen Aksu",
    "age": 70,
    "nickname": "Minik Serçe",
    "img": "https://yt3.googleusercontent.com/ytc/AIdro_mShBj21garvRP0LB71w-rzz25gDEoMyLdl66gyCcrqt38=s900-c-k-c0x00ffffff-no-rj",
    "city": "Izmir",
    "description": "Sezen Aksu, türkiyənin ən əfsanəvi müğənnilərindən biridir. O, pop müziğin öncüllərindən olub, çoxlu hit mahnılarla tanınır.",
    "id": "18",
    "gender": "qadın"
  },
  {
    "fullName": "Kenan İmirzalioğlu",
    "age": 49,
    "nickname": "Kenan",
    "img": "https://tr.web.img4.acsta.net/c_310_420/medias/nmedia/18/96/31/86/20459415.jpg",
    "city": "Ankara",
    "description": "Kenan İmirzalioğlu, məşhur türk aktyoru və modelidir. O, \"Ezel\" və \"Karadayı\" kimi seriallarla tanınır.",
    "id": "19",
    "gender": "kişi"
  },
  {
    "fullName": "Cem Yılmaz",
    "age": 50,
    "nickname": "Cem",
    "img": "https://m.media-amazon.com/images/M/MV5BMTU5NzYxMDM3N15BMl5BanBnXkFtZTgwMDEzMTE4MTE@.V1.jpg",
    "city": "Istanbul",
    "description": "Cem Yılmaz, türkiyənin ən məşhur komediyanlarındandır. O, həmçinin film rejissoru və senaristidir. \"G.O.R.A.\" və \"A.R.O.G.\" kimi filmlərlə tanınır.",
    "id": "20",
    "gender": "kişi"
  },
  {
    "fullName": "Hülya Avşar",
    "age": 60,
    "nickname": "Hülya",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jbXfHgPACNxvPtwkSysJHoM1cwN8cOiB0g&s",
    "city": "Istanbul",
    "description": "Hülya Avşar, məşhur türk müğənnisi və aktrisadır. O, həmçinin bir televiziya aparıcısı və iş qadınıdır.",
    "id": "21",
    "gender": "qadın"
  },
  {
    "fullName": "Büşra Pekin",
    "age": 41,
    "nickname": "Büşra",
    "img": "https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2Fc%2Fpeople%2Fcdb18c90d2e6a263881adac853c6e485.jpg",
    "city": "Istanbul",
    "description": "Büşra Pekin, məşhur türk aktrisadır. O, komediya janrında tanınır və bir çox televiziya və film layihələrində iştirak edib.",
    "id": "22",
    "gender": "qadın"
  },
  {
    "fullName": "Orhan Gencebay",
    "age": 73,
    "nickname": "Beyefendi",
    "img": "https://m.media-amazon.com/images/M/MV5BN2Q0NTFjYzMtZjFkNy00MzQ0LTk3MjgtYzdiZDgwNTIwNGEzXkEyXkFqcGc@.V1.jpg",
    "city": "Istanbul",
    "description": "Orhan Gencebay, türkiyənin ən məşhur arabesk müğənnisi və bəstəkarıdır. O, musiqi dünyasında böyük bir mirasa sahibdir.",
    "id": "23",
    "gender": "kişi"
  },
  {
    "fullName": "Ajda Pekkan",
    "age": 78,
    "nickname": "Süperstar",
    "img": "https://m.media-amazon.com/images/M/MV5BOWIyYzUzYmEtNjQwMS00YjkyLTgwMjktNWUzNzkxNDY5Yjg2XkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
    "city": "Istanbul",
    "description": "Ajda Pekkan, türkiyənin ən məşhur müğənnisi və aktrisalarından biridir. Onun karyerası 1960-cı illərdən bəri davam edir.",
    "id": "24",
    "gender": "qadın"
  },
  {
    "fullName": "Burak Özçivit",
    "age": 39,
    "nickname": "Burak",
    "img": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Burak_%C3%96z%C3%A7ivit_2023.jpg",
    "city": "Istanbul",
    "description": "Burak Özçivit, məşhur türk aktyorudur. O, \"Kara Sevda\" və \"Çalıkuşu\" kimi seriallarda baş rolda çıxış edib.",
    "id": "25",
    "gender": "kişi"
  },
  {
    "fullName": "Sertab Erener",
    "age": 58,
    "nickname": "Sertab",
    "img": "https://sertab.com/wp-content/uploads/2024/10/IMG_3440.jpg",
    "city": "Istanbul",
    "description": "Sertab Erener, türkiyənin məşhur pop müğənnisi və bəstəkarıdır. Onun \"Rengârenk\" və \"Sertab\" kimi albomları çox böyük uğur qazanmışdır.",
    "id": "26",
    "gender": "qadın"
  },
  {
    "fullName": "Nigar Camal",
    "age": 44,
    "nickname": "Nigar",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Nigar_Camal_2022.jpg/250px-Nigar_Camal_2022.jpg",
    "city": "London / Bakı",
    "description": "Eurovision 2011 qalibi. Müğənni və televiziya aparıcısı.",
    "id": "27",
    "gender": "qadın"
  },
  {
    "fullName": "Teymur Məmmədov",
    "age": 35,
    "nickname": "Teymur",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Teymur_Mammadov_Rio2016.jpg/1200px-Teymur_Mammadov_Rio2016.jpg",
    "city": "Sumqayıt",
    "description": "Boks üzrə dünya çempionu və Olimpiya medalçısı.",
    "id": "28",
    "gender": "kişi"
  },
  {
    "fullName": "Çingiz Fuad oğlu Mustafayev",
    "age": 31,
    "nickname": "Çingiz",
    "img": "https://upload.wikimedia.org/wikipedia/az/8/89/%C3%87ingiz_Mustafayev2.jpg",
    "city": "Bakı",
    "description": "Azərbaycanlı jurnalist, Milli Qəhrəman. Qarabağ müharibəsində çəkiliş apararkən şəhid olub. 1992-ci ildə Xocalı soyqırımı haqqında çəkdiyi film dünya mediasında geniş əks-səda doğurmuşdur. Eyni zamanda Azərbaycanda ilk rep mahnısını səsləndirən sənətçidir.",
    "id": "29",
    "gender": "kişi"
  },
  {
    "fullName": "Afaq Bəşirqızı",
    "age": 68,
    "nickname": "Afag xanım",
    "img": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Afaq_B%C9%99%C5%9Firq%C4%B1z%C4%B1_01.03.2019.jpg",
    "city": "Bakı",
    "description": "Azərbaycanın Xalq artisti. Teatr və televiziya sahəsində tanınmış aktrisa.",
    "id": "31",
    "gender": "qadın"
  },
  {
    "fullName": "Aysel Teymurzadə",
    "age": 35,
    "nickname": "Aysel",
    "img": "https://upload.wikimedia.org/wikipedia/commons/3/38/AySel.jpg",
    "city": "Bakı",
    "description": "Müğənni. Eurovision 2009-da Arash ilə duet şəklində çıxış edib və üçüncü yer qazanıb.",
    "id": "33",
    "gender": "qadın"
  },
  {
    "fullName": "Zeynəb Xanlarova",
    "age": 87,
    "nickname": "Xanlarova",
    "img": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Zeynab_Khanlarova.jpg",
    "city": "Bakı",
    "description": "Azərbaycanın xalq artisti, dünya şöhrətli muğam və estrada müğənnisi. SSRİ xalq artisti fəxri adını almış ilk azərbaycanlı qadın müğənni.",
    "id": "34",
    "gender": "qadın"
  }
];

module.exports = famousPeople;
