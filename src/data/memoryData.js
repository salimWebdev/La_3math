/*
  ============================================
  MEMORY BOOK - DATA CONFIGURATION
  ============================================
  
  ASSET FOLDER STRUCTURE:
  Create these folders inside the "memory-book" project:
  
  public/
  └── assets/
      ├── photos/
      │   ├── classmate-1.jpg    ← Your classmate photos
      │   ├── classmate-2.jpg
      │   ├── classmate-3.jpg
      │   └── ...
      ├── videos/
      │   ├── souvenir-1.mp4     ← Memory videos
      │   ├── souvenir-2.mp4
      │   └── ...
      └── audio/
          └── bg-music.mp3       ← Background music file

  FILE NAMING RULES:
  - Photos: classmate-{number}.jpg (e.g., classmate-1.jpg)
  - Videos: souvenir-{number}.mp4 (e.g., souvenir-1.mp4)
  - Audio: bg-music.mp3 (exactly this name)
  
  SUPPORTED FORMATS:
  - Photos: .jpg, .jpeg, .png, .webp
  - Videos: .mp4, .webm
  - Audio: .mp3, .wav, .ogg

  HOW TO ADD YOUR CLASSMATES:
  1. Add their photo to public/assets/photos/ as "classmate-N.jpg"
  2. Edit the classmates array below with their details
  3. Update the photo path to match your filename
  
  ============================================
*/

export const classmates = [
  {
    id: 1,
    name: "Salim",
    photo: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178109/wzrhbgbelj435pj0azuj.jpg",
    description: 'The academic weapon, better known as Lhendi, somehow manages to laugh every single time he sits with Yacine—apparently, those two have their own private comedy show. 😂 Known for his legendary "Susem a madame", he studies in the prestigious city of "New York", formerly known as "L7errah". At this point, we\'re still not sure if he\'s preparing for his exams or preparing for his American citizenship. 🇺🇸😭',
    nickname: "Lhendi"
  },
  {
    id: 2,
    name: "Yacine",
    photo: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178128/ly6c9hlygokmw9oybaon.jpg",
    description: 'He comes everyday from Tirmitine, he makes the entire class laughing just by saying one single word, professional football player. An absolute engine of pure enthusiasm.',
    nickname: "Bachir / Hadj qachir"
  },
  {
    id: 3,
    name: "Alycia Belkacemi",
    photo: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178130/mfzvcyp66sgujfp19swv.jpg",
    description: 'Always ready to help, she\'s one of those people we can truly count on. Honest, and naturally organized, she\'s often the one behind our events and making sure everything goes smoothly. A caring friend with a big heart, she somehow manages to keep everything organized while keeping us all smiling. Some words she uses: "yitt3eth", "awid la balle nni ar da", the famous "3iddagh"...',
    nickname: "Alilou"
  },
  {
    id: 4,
    name: "Sarah",
    photo: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178131/b6zehbhwb4ulid5nv4p7.jpg",
    description: 'Sarah الحراشية brings the ultimate energy to every room, always keeping us laughing with her bold personality and unstoppable humor. With Sarah around, you don\'t need TikTok, Netflix, or any other entertainment—we already have our own show. 😂',
    nickname: "L7arachia"
  },
  {
    id: 5,
    name: "Leila",
    photo: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178132/wbp62hc5nerb4ht1iu9l.jpg",
    description: 'The Unstoppable, the most caring soul we know, whose unstoppable spirit and kindness bring peace and strength to everyone around her. She\'s always there to help everyone, even when the rest of us are already losing our minds. 😂',
    nickname: "Unbreakable Soul"
  },
  {
    id: 6,
    name: "Youcef",
    photo: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178133/wbzglgeprhg4sfug4x9w.jpg",
    description: 'Youyou is a great leader for the children. He is a carholic and he never goes to sleep. He stays awake all day and night! He loves to tell jokes, but nobody understands them. Even though his jokes are bad, everyone always laughs because he is so silly and fun. He is loyal as he stays always with Ghiles.',
    nickname: "Joseph / Uu"
  },
  {
    id: 7,
    name: "Malak",
    photo: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178135/h6mz0kzct7vpk2owsdmm.jpg",
    description: 'Our effortlessly elegant and calm friend, whose gentle presence brings peace and sweetness to everyone around her. Her quiet kindness and warm personality make her someone truly special to have in our class.',
    nickname: "The Angel"
  },
  {
    id: 8,
    name: "Boudoukha",
    photo: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178136/dl8xk6uv3q0ueb250wtj.jpg",
    description: "A true carholic, he's a 2009 kid, but when you see him, you'd never believe he's the youngest—he carries himself like he's been driving since the 90s. 😂 He's kind to everyone and a little timid, but somehow he managed to become the sworn enemy of Hmrioui. Nobody knows how the rivalry started, but at this point, it's basically a class tradition.",
    nickname: "Many / Doukha / L3ziz / Moment"
  },
  {
    id: 9,
    name: "Basma",
    photo: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178137/xchak7bcrftnznhttjxf.png",
    description: 'Coming all the way from Tirmitine, she brings a vibrant Kabyle spirit with her and is a huge fan of JSK and football, always looking elegant. Basically, if there\'s a JSK match, don\'t even try to talk to her—football comes first. 😂 A huge fan of Matoub Lounes.',
    nickname: "Lberiouch"
  },
  {
    id: 10,
    name: "Ghiles",
    photo: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178115/eencdv98u2fe4vper2he.jpg",
    description: 'A great philosopher and a future French politician, always ready to help everyone and somehow having an answer for everything. With his dark humor and unexpected jokes, you never know whether he\'s about to give you life advice or traumatize the whole class. 😂',
    nickname: "Le Philosophe"
  },
  {
    id: 11,
    name: "Sabrina",
    photo: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178118/smcj6hogl3p2w0sbrt5d.jpg",
    description: "Always looking elegant, our class بسبوسة really should be making خبز الدار in her kitchen. (Just joking 😭) She looks like she's ready for a fashion show, but deep down we're still waiting for that homemade خبز الدار. 😂",
    nickname: "اكلة الاملاح"
  },
  {
    id: 12,
    name: "Ikram",
    photo: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178120/otw4bwoks2zdufioggfc.jpg",
    description: "Our amazing Tata—the oldest and wisest of the bunch, keeping us all laughing with her strong personality and carrying our entire two years of memories in her phone. At this point, her phone isn't a phone anymore—it's basically the official archive of our class. 😂",
    nickname: "Ikram Akemsignaligh / TaTa"
  },
  {
    id: 13,
    name: "Moussi",
    photo: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178122/kxa5fkhrevfrglww2sb5.jpg",
    description: "He is literally invisible in darkness, yet somehow he still manages to smile at everyone. 😂 The beloved student of our philosophy teacher who calls him as \"Mousiiiiiiiiiiiiiiiiiiiiiiiii,\" he's also a great swimmer—basically, if you can't find him on land, just check the nearest swimming pool. 🏊‍♂️",
    nickname: "Le Petit Nigga"
  },
  {
    id: 14,
    name: "Alycia Hensal",
    photo: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178125/b5gbwy2apugdd0hnokzy.jpg",
    description: "The curly-haired chatterbox who always brings good vibes and makes us laugh with her clumsy charm and great energy. Once Alycia starts talking, you better get comfortable because there's absolutely no \"skip intro\" button. 😂",
    nickname: "Tadmait"
  },
  {
    id: 15,
    name: "Ismahane Sellah",
    photo: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178126/tw5bqxdgu9kqvhog2jnx.jpg",
    description: "Even though she's the tiniest in the class, Ismahan has a strong personality and is destined to be a brilliant future doctor. She may be the smallest among us, but somehow she has enough personality to control the whole class. 😂",
    nickname: "Dr Sellah SVP"
  },
  {
    id: 16,
    name: "Sirine",
    photo: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178127/cnvsaxotebdbocpjifii.png",
    description: "Calm and peaceful, you will probably never hear her voice unless it's something really important. 😂 She's so quiet that sometimes we wonder if she's actually in the classroom or just a very well-behaved ghost. 👻",
    nickname: "Cheradi"
  },
  {
    id: 17,
    name: "Adel",
    photo: "/assets/photos/adel-lhacker.png",
    description: "Adel is a silent person, but whenever he finally talks, everyone listens—his words hit like a bullet. 🎯 He's the class hacker; he might literally be sitting right behind you, and you wouldn't even notice. 😂💻",
    nickname: "Lhacker"
  }
  // Add more classmates as needed...
];

/*
  ============================================
  SOUVENIRS / MEMORIES DATA
  ============================================
  
  Add your memory photos and videos here.
  Each souvenir can be an image or video.
  
  ============================================
*/

export const souvenirs = [
  {
    id: 1,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178152/kbvm9mseaujtsmtgxnj5.jpg",
    caption: "We stand up"
  },
  {
    id: 2,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178166/ckmfgtuowlthumlmcyfx.jpg",
    caption: "We boss picture"
  },
  {
    id: 3,
    type: "video",
    src: "https://res.cloudinary.com/gdbmrkzo/video/upload/v1787178022/lqbpamr8dmotq8qjfm2z.mp4",
    caption: "Memories captured"
  },
  {
    id: 4,
    type: "video",
    src: "https://res.cloudinary.com/gdbmrkzo/video/upload/v1787178098/pbjah3dhwnrq3jk7wabu.mp4",
    caption: "Memories captured"
  },
  {
    id: 5,
    type: "video",
    src: "https://res.cloudinary.com/gdbmrkzo/video/upload/v1787178103/lp7mhzr1n4vij2ddbmhj.mp4",
    caption: "Memories captured"
  },
  {
    id: 6,
    type: "video",
    src: "https://res.cloudinary.com/gdbmrkzo/video/upload/v1787178130/bwvnfuxld6sg7kjgtbqx.mp4",
    caption: "Memories captured"
  },
  {
    id: 7,
    type: "video",
    src: "https://res.cloudinary.com/gdbmrkzo/video/upload/v1787178145/oryrkhn57gaxb6ym2dcj.mp4",
    caption: "Memories captured"
  },
  {
    id: 8,
    type: "video",
    src: "https://res.cloudinary.com/gdbmrkzo/video/upload/v1787178150/bxggge7xwxsf8yvk2kjl.mp4",
    caption: "Memories captured"
  },
  {
    id: 9,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178206/jyi3sgfkt5abuy1vi39r.jpg",
    caption: "Dictators"
  },
  {
    id: 10,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178286/zl5dsf05haimfj5jcdsc.jpg",
    caption: "A melyuoun inou"
  },
  {
    id: 11,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178287/igwrbisd1zf7fzszolqn.png",
    caption: "Boys picture"
  },
  {
    id: 12,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178291/m76kj1zynbs7gxvlgzms.jpg",
    caption: "Friends"
  },
  {
    id: 13,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178293/ixgsdrbcpl48rhgx7yds.jpg",
    caption: "Girls 2as"
  },
  {
    id: 14,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178294/v1ftpjaf9adnj6euiycj.jpg",
    caption: "Yacine Argentina"
  },
  {
    id: 15,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178295/jfromrqyz9sznpnpq3zg.jpg",
    caption: "The squad"
  },
  {
    id: 16,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178157/vobmwgfz1io0ovrhzmoz.png",
    caption: "Girls picture"
  },
  {
    id: 17,
    type: "video",
    src: "https://res.cloudinary.com/gdbmrkzo/video/upload/v1787178151/hyqwgidluuxx79lyb9xe.mp4",
    caption: "Memories captured"
  },
  {
    id: 18,
    type: "video",
    src: "https://res.cloudinary.com/gdbmrkzo/video/upload/v1787178160/nw2vccmexwowoygshm33.mp4",
    caption: "Memories captured"
  },
  {
    id: 19,
    type: "video",
    src: "https://res.cloudinary.com/gdbmrkzo/video/upload/v1787178162/s3w4af0mhdmamcurb9ix.mp4",
    caption: "Memories captured"
  },
  {
    id: 20,
    type: "video",
    src: "https://res.cloudinary.com/gdbmrkzo/video/upload/v1787178025/oci5gmzlfspoestqdikd.mp4",
    caption: "Memories captured"
  },
  {
    id: 21,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178164/junsapu4uir9lwfksofm.png",
    caption: "Boys picture"
  },
  {
    id: 22,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178169/g07zn0bzbqcau17hxlbj.jpg",
    caption: "Memory captured"
  },
  {
    id: 23,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178172/dx3jepxh0iv3gjgbl3le.jpg",
    caption: "Slept only 3 hours"
  },
  {
    id: 24,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178174/iyoiraylmlytpj8xyp2w.jpg",
    caption: "Yummy"
  },
  {
    id: 25,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178178/bp58yywsfrxzcqx1k2oy.png",
    caption: "Memory captured"
  },
  {
    id: 26,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178185/qnk89bmq8zbhtap4oc5b.png",
    caption: "Memory captured"
  },
  {
    id: 27,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178187/kkjeuvhfctpaj6zrrqaq.png",
    caption: "Memory captured"
  },
  {
    id: 28,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178188/adloisgh4z18ec0wwvws.jpg",
    caption: "Memory captured"
  },
  {
    id: 29,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178205/zx5fmnbvfcn72lwpfxyk.png",
    caption: "Memory captured"
  },
  {
    id: 30,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178208/obyfirqoftotixwlqcxl.jpg",
    caption: "Memory captured"
  },
  {
    id: 31,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178214/bszi0bsnqkxzpz2iacbn.jpg",
    caption: "Memory captured"
  },
  {
    id: 32,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178259/mkhvo48nvwmy7kdeaz1n.jpg",
    caption: "Memory captured"
  },
  {
    id: 33,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178271/elcas1d35em98qlz7ru5.jpg",
    caption: "Memory captured"
  },
  {
    id: 34,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178274/x9bmcpg05ug1dpzusit6.jpg",
    caption: "Memory captured"
  },
  {
    id: 35,
    type: "video",
    src: "https://res.cloudinary.com/gdbmrkzo/video/upload/v1787178067/tma4z0znfod2bvyqti4e.mp4",
    caption: "The end"
  },
  {
    id: 36,
    type: "video",
    src: "https://res.cloudinary.com/gdbmrkzo/video/upload/v1787178069/ug6g6w6ergh06njzmhll.mp4",
    caption: "The end 2"
  },
  {
    id: 37,
    type: "video",
    src: "https://res.cloudinary.com/gdbmrkzo/video/upload/v1787178073/degtaqpz580jfyxdwzqo.mp4",
    caption: "Memory captured"
  },
  {
    id: 38,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178277/gk3njjy4ry7bgu6ixjdf.jpg",
    caption: "Memory captured"
  },
  {
    id: 39,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178279/xgzqfc69qmrok1ic02ql.jpg",
    caption: "Memory captured"
  },
  {
    id: 40,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178280/w2x9q0g2uhlmpe6kosgf.jpg",
    caption: "Memory captured"
  },
  {
    id: 41,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178282/ky4uoz6k5mjjhx3lxs3d.jpg",
    caption: "Memory captured"
  },
  {
    id: 42,
    type: "photo",
    src: "https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178285/d8bnm6mbbhg2mtcagwaw.jpg",
    caption: "Memory captured"
  }
];

/*
  ============================================
  ACHIEVEMENTS DATA
  ============================================
  
  Add your class achievements and milestones here.
  Each achievement has a title, description, date, and optional icon.
  
  ============================================
*/

export const achievements = [
  {
    id: 1,
    title: "Class Formation",
    description: "Our journey began! 15 students from different backgrounds came together to form the most amazing class. We were too serious btw 😅",
    date: "19 September 2024",
    icon: "🏫"
  },
  {
    id: 2,
    title: "End of First Year Celebration",
    description: "On a fait une petite fête pendant la séance de français, on n3ridh ara thachikhett n Histoire geo, thz3ef. We took some pictures and we ate the cake made by Alycia Belk. That was the end of our first year.",
    date: "May 2025",
    icon: "🎂"
  },
  {
    id: 3,
    title: "Signing the Report",
    description: "One of the biggest achievements that we will regret après is signing the report against one of the best teachers 😭 Hmrioui",
    date: "May 2025",
    icon: "📝"
  },
  {
    id: 4,
    title: "New Year, New Challenges",
    description: "Over time, we realized it wasn't an achievement—the new teacher was just as horrible as the last one. Still, it was a good start since the math teacher mazalitt. As the final year begins, everyone knows it marks the start of a challenging journey—one full of emotions that will demand strong endurance. To top it off, Alycia Hensal joined our class.",
    date: "September 2025",
    icon: "📚"
  },
  {
    id: 5,
    title: "Celebrating Leila's Recovery",
    description: "On February 5th we held a small celebration for Leila to honor her recovery. Her unbreakable spirit showed incredible strength and she has been a true inspiration of patience, hope and resilience to all of us.",
    date: "February 2026",
    icon: "💛"
  },
  {
    id: 6,
    title: "Graduation Day",
    description: "Graduation was on July 12, 2026. The wait is finally over after a year of non-stop stress and patience! The results dropped and we got the Bac... Alhamdulillah! A major weight is lifted but now comes the bittersweet start of the ending.",
    date: "July 12, 2026",
    icon: "🎓"
  }
  // Add more achievements as needed...
];

/*
  ============================================
  CLASS INFO
  ============================================
*/

export const classInfo = {
  className: "Class of 2026",
  schoolName: "Our Beloved School",
  motto: "Together We Shined",
  yearRange: "2024 - 2026"
};
