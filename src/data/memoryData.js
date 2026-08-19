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
    photo: "/assets/photos/classmate-1.jpg",
    description: 'The academic weapon, better known as Lhendi, somehow manages to laugh every single time he sits with Yacine—apparently, those two have their own private comedy show. 😂 Known for his legendary "Susem a madame", he studies in the prestigious city of "New York", formerly known as "L7errah". At this point, we\'re still not sure if he\'s preparing for his exams or preparing for his American citizenship. 🇺🇸😭',
    nickname: "Lhendi"
  },
  {
    id: 2,
    name: "Yacine",
    photo: "/assets/photos/classmate-2.jpg",
    description: 'He comes everyday from Tirmitine, he makes the entire class laughing just by saying one single word, professional football player. An absolute engine of pure enthusiasm.',
    nickname: "Bachir / Hadj qachir"
  },
  {
    id: 3,
    name: "Alycia Belkacemi",
    photo: "/assets/photos/classmate-3.jpg",
    description: 'Always ready to help, she\'s one of those people we can truly count on. Honest, and naturally organized, she\'s often the one behind our events and making sure everything goes smoothly. A caring friend with a big heart, she somehow manages to keep everything organized while keeping us all smiling. Some words she uses: "yitt3eth", "awid la balle nni ar da", the famous "3iddagh"...',
    nickname: "Alilou"
  },
  {
    id: 4,
    name: "Sarah",
    photo: "/assets/photos/classmate-4.jpg",
    description: 'Sarah الحراشية brings the ultimate energy to every room, always keeping us laughing with her bold personality and unstoppable humor. With Sarah around, you don\'t need TikTok, Netflix, or any other entertainment—we already have our own show. 😂',
    nickname: "L7arachia"
  },
  {
    id: 5,
    name: "Leila",
    photo: "/assets/photos/classmate-5.jpg",
    description: 'The Unstoppable, the most caring soul we know, whose unstoppable spirit and kindness bring peace and strength to everyone around her. She\'s always there to help everyone, even when the rest of us are already losing our minds. 😂',
    nickname: "Unbreakable Soul"
  },
  {
    id: 6,
    name: "Youcef",
    photo: "/assets/photos/classmate-6.jpg",
    description: 'Youyou is a great leader for the children. He is a carholic and he never goes to sleep. He stays awake all day and night! He loves to tell jokes, but nobody understands them. Even though his jokes are bad, everyone always laughs because he is so silly and fun. He is loyal as he stays always with Ghiles.',
    nickname: "Joseph / Uu"
  },
  {
    id: 7,
    name: "Malak",
    photo: "/assets/photos/classmate-7.jpg",
    description: 'Our effortlessly elegant and calm friend, whose gentle presence brings peace and sweetness to everyone around her. Her quiet kindness and warm personality make her someone truly special to have in our class.',
    nickname: "The Angel"
  },
  {
    id: 8,
    name: "Boudoukha",
    photo: "/assets/photos/classmate-8.jpg",
    description: "A true carholic, he's a 2009 kid, but when you see him, you'd never believe he's the youngest—he carries himself like he's been driving since the 90s. 😂 He's kind to everyone and a little timid, but somehow he managed to become the sworn enemy of Hmrioui. Nobody knows how the rivalry started, but at this point, it's basically a class tradition.",
    nickname: "Many / Doukha / L3ziz / Moment"
  },
  {
    id: 9,
    name: "Basma",
    photo: "/assets/photos/classmate-9.png",
    description: 'Coming all the way from Tirmitine, she brings a vibrant Kabyle spirit with her and is a huge fan of JSK and football, always looking elegant. Basically, if there\'s a JSK match, don\'t even try to talk to her—football comes first. 😂 A huge fan of Matoub Lounes.',
    nickname: "Lberiouch"
  },
  {
    id: 10,
    name: "Ghiles",
    photo: "/assets/photos/classmate-10.jpg",
    description: 'A great philosopher and a future French politician, always ready to help everyone and somehow having an answer for everything. With his dark humor and unexpected jokes, you never know whether he\'s about to give you life advice or traumatize the whole class. 😂',
    nickname: "Le Philosophe"
  },
  {
    id: 11,
    name: "Sabrina",
    photo: "/assets/photos/classmate-11.jpg",
    description: "Always looking elegant, our class بسبوسة really should be making خبز الدار in her kitchen. (Just joking 😭) She looks like she's ready for a fashion show, but deep down we're still waiting for that homemade خبز الدار. 😂",
    nickname: "اكلة الاملاح"
  },
  {
    id: 12,
    name: "Ikram",
    photo: "/assets/photos/classmate-12.jpg",
    description: "Our amazing Tata—the oldest and wisest of the bunch, keeping us all laughing with her strong personality and carrying our entire two years of memories in her phone. At this point, her phone isn't a phone anymore—it's basically the official archive of our class. 😂",
    nickname: "Ikram Akemsignaligh / TaTa"
  },
  {
    id: 13,
    name: "Moussi",
    photo: "/assets/photos/classmate-13.jpg",
    description: "He is literally invisible in darkness, yet somehow he still manages to smile at everyone. 😂 The beloved student of our philosophy teacher who calls him as \"Mousiiiiiiiiiiiiiiiiiiiiiiiii,\" he's also a great swimmer—basically, if you can't find him on land, just check the nearest swimming pool. 🏊‍♂️",
    nickname: "Le Petit Nigga"
  },
  {
    id: 14,
    name: "Alycia Hensal",
    photo: "/assets/photos/classmate-14.jpg",
    description: "The curly-haired chatterbox who always brings good vibes and makes us laugh with her clumsy charm and great energy. Once Alycia starts talking, you better get comfortable because there's absolutely no \"skip intro\" button. 😂",
    nickname: "Tadmait"
  },
  {
    id: 15,
    name: "Ismahane Sellah",
    photo: "/assets/photos/classmate-15.jpg",
    description: "Even though she's the tiniest in the class, Ismahan has a strong personality and is destined to be a brilliant future doctor. She may be the smallest among us, but somehow she has enough personality to control the whole class. 😂",
    nickname: "Dr Sellah SVP"
  },
  {
    id: 16,
    name: "Sirine",
    photo: "/assets/photos/classmate-16.png",
    description: "Calm and peaceful, you will probably never hear her voice unless it's something really important. 😂 She's so quiet that sometimes we wonder if she's actually in the classroom or just a very well-behaved ghost. 👻",
    nickname: "Cheradi"
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
    src: "/assets/photos/souvenir-1.jpg",
    caption: "We stand up"
  },
  {
    id: 2,
    type: "photo",
    src: "/assets/photos/souvenir-2.jpg",
    caption: "We boss picture"
  },
  {
    id: 3,
    type: "video",
    src: "/assets/videos/souvenir-1.mp4",
    caption: "Memories captured"
  },
  {
    id: 4,
    type: "video",
    src: "/assets/videos/souvenir-2.mp4",
    caption: "Memories captured"
  },
  {
    id: 5,
    type: "video",
    src: "/assets/videos/souvenir-3.mp4",
    caption: "Memories captured"
  },
  {
    id: 6,
    type: "video",
    src: "/assets/videos/souvenir-4.mp4",
    caption: "Memories captured"
  },
  {
    id: 7,
    type: "video",
    src: "/assets/videos/souvenir-5.mp4",
    caption: "Memories captured"
  },
  {
    id: 8,
    type: "video",
    src: "/assets/videos/souvenir-6.mp4",
    caption: "Memories captured"
  },
  {
    id: 9,
    type: "photo",
    src: "/assets/photos/souvenir-3.jpg",
    caption: "Dictators"
  },
  {
    id: 10,
    type: "photo",
    src: "/assets/photos/souvenir-4.jpg",
    caption: "A melyuoun inou"
  },
  {
    id: 11,
    type: "photo",
    src: "/assets/photos/souvenir-5.png",
    caption: "Boys picture"
  },
  {
    id: 12,
    type: "photo",
    src: "/assets/photos/souvenir-6.jpg",
    caption: "Friends"
  },
  {
    id: 13,
    type: "photo",
    src: "/assets/photos/souvenir-7.jpg",
    caption: "Girls 2as"
  },
  {
    id: 14,
    type: "photo",
    src: "/assets/photos/souvenir-8.jpg",
    caption: "Yacine Argentina"
  },
  {
    id: 15,
    type: "photo",
    src: "/assets/photos/souvenir-9.jpg",
    caption: "The squad"
  },
  {
    id: 16,
    type: "photo",
    src: "/assets/photos/souvenir-10.png",
    caption: "Girls picture"
  },
  {
    id: 17,
    type: "video",
    src: "/assets/videos/souvenir-7.mp4",
    caption: "Memories captured"
  },
  {
    id: 18,
    type: "video",
    src: "/assets/videos/souvenir-8.mp4",
    caption: "Memories captured"
  },
  {
    id: 19,
    type: "video",
    src: "/assets/videos/souvenir-9.mp4",
    caption: "Memories captured"
  },
  {
    id: 20,
    type: "video",
    src: "/assets/videos/souvenir-10.mp4",
    caption: "Memories captured"
  },
  {
    id: 21,
    type: "photo",
    src: "/assets/photos/souvenir-11.png",
    caption: "Boys picture"
  },
  {
    id: 22,
    type: "photo",
    src: "/assets/photos/souvenir-22.jpg",
    caption: "Memory captured"
  },
  {
    id: 23,
    type: "photo",
    src: "/assets/photos/souvenir-23.jpg",
    caption: "Slept only 3 hours"
  },
  {
    id: 24,
    type: "photo",
    src: "/assets/photos/souvenir-24.jpg",
    caption: "Yummy"
  },
  {
    id: 25,
    type: "photo",
    src: "/assets/photos/souvenir-25.png",
    caption: "Memory captured"
  },
  {
    id: 26,
    type: "photo",
    src: "/assets/photos/souvenir-26.png",
    caption: "Memory captured"
  },
  {
    id: 27,
    type: "photo",
    src: "/assets/photos/souvenir-27.png",
    caption: "Memory captured"
  },
  {
    id: 28,
    type: "photo",
    src: "/assets/photos/souvenir-28.jpg",
    caption: "Memory captured"
  },
  {
    id: 29,
    type: "photo",
    src: "/assets/photos/souvenir-29.png",
    caption: "Memory captured"
  },
  {
    id: 30,
    type: "photo",
    src: "/assets/photos/souvenir-30.jpg",
    caption: "Memory captured"
  },
  {
    id: 31,
    type: "photo",
    src: "/assets/photos/souvenir-31.jpg",
    caption: "Memory captured"
  },
  {
    id: 32,
    type: "photo",
    src: "/assets/photos/souvenir-32.jpg",
    caption: "Memory captured"
  },
  {
    id: 33,
    type: "photo",
    src: "/assets/photos/souvenir-33.jpg",
    caption: "Memory captured"
  },
  {
    id: 34,
    type: "photo",
    src: "/assets/photos/souvenir-34.jpg",
    caption: "Memory captured"
  },
  {
    id: 35,
    type: "video",
    src: "/assets/videos/souvenir-11.mp4",
    caption: "The end"
  },
  {
    id: 36,
    type: "video",
    src: "/assets/videos/souvenir-12.mp4",
    caption: "The end 2"
  },
  {
    id: 37,
    type: "video",
    src: "/assets/videos/souvenir-13.mp4",
    caption: "Memory captured"
  },
  {
    id: 38,
    type: "photo",
    src: "/assets/photos/souvenir-35.jpg",
    caption: "Memory captured"
  },
  {
    id: 39,
    type: "photo",
    src: "/assets/photos/souvenir-36.jpg",
    caption: "Memory captured"
  },
  {
    id: 40,
    type: "photo",
    src: "/assets/photos/souvenir-37.jpg",
    caption: "Memory captured"
  },
  {
    id: 41,
    type: "photo",
    src: "/assets/photos/souvenir-38.jpg",
    caption: "Memory captured"
  },
  {
    id: 42,
    type: "photo",
    src: "/assets/photos/souvenir-39.jpg",
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
