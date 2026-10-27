/* ================================================================
   🌙 CHAND CONNECT · config.js

   ✏️  ONLY CHANGE THE BOX BELOW. That's it.
   Rules: change only the text inside "quotes". Keep the quotes and commas.
   Then put your photos in media/photos (see the README there).
   ================================================================ */
window.CONFIG = {

  /* ┌──────────────────────── ✏️ EASY BOX ─────────────────────────┐ */
  her: { name: "Sweety" },          // her name (or nickname)
  him: { name: "Hubsand" },         // your name (or what she calls you)
  whatsapp: "",                     // your number: 91 + 10 digits, e.g. "919876543210"
  memoryPlace: "cognizant",         // the place in your special memory (shows on the building)
  cheesyLine: "Mummy ji, aapka beta chand se zyada chamakta hai ✨", // a line she says to make you shy
  song: "",
  herCap: true,                     // true = her cartoon wears a backwards cap 🧢 · false = no cap                         // YouTube link of your song, e.g. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
  /* └───────────────────────────────────────────────────────────────┘ */

  /* photos & voice: drop files with THESE exact names. Missing = cartoon shows instead. */
  photos: {
    her:      "media/photos/her.jpg",
    him:      "media/photos/him.jpg",
    together: "media/photos/together.jpg",
    lastYear: "media/photos/last-year.jpg"
  },
  voiceNote: "media/voice/moon.mp3",

  /* ══════════════════════════════════════════════════════════════
     ⬇⬇  BELOW THIS LINE: OPTIONAL. No need to touch.  ⬇⬇
     Want to change a story line or a vachan? Go ahead, but keep the
     "quote marks" and the commas. {HER} and {HIM} become the names above.
     ══════════════════════════════════════════════════════════════ */

  /* ---------- the last button ---------- */
  reply: {
    button: "{HIM} ko jawab do 💌",
    text:   "Chand dikh gaya 🌙 Ab tum bhi dikho, video call karo 📞❤️"
  },

  /* ---------- background music ----------
     YouTube: paste the video id (after watch?v=) + start second.  Or an mp3 in /media via file.
     Empty = built-in soft tune. Suggestions:
       moon / vachan : "Chaudhvin Ka Chand Ho" (1960, Hindi)  or  "Mounamelanoyi" (Saagara Sangamam, 1983, Telugu)
       memory        : "Tere Bina Zindagi Se Koi" (Aandhi, 1975, Hindi)                                      */
  music: {   // file example: "media/songs/moon.mp3"
    fun:    { youtube: "", start: 0, file: "" },
    memory: { youtube: "", start: 0, file: "" },
    moon:   { youtube: "", start: 0, file: "" }
  },

  /* ---------- memes / gifs: drop in media/memes, list here ----------
     scene = subah, villain, meanwhile, katha, cheesy, memory, years, game              */
  media: [
    // { scene: "villain", type: "image", src: "media/memes/samosa.gif", caption: "Main villain" },
    // { scene: "subah",   type: "video", src: "media/memes/sleep.mp4",  caption: "{HER} at 6 AM" },
  ],

  /* ---------- the story ---------- */
  scenes: {
    title:   ["{HER} & {HIM}", "ek Karwa Chauth kahani", "(based on true events. mostly.)"],
    subah:   ["6 AM. {HER}.", "Neend: 100%. Duniya: 0%.", "📞 {HIM} calling…", "*Decline* 🖐️", "Neend > Pati. Har baar. 😴"],
    villain: ["12 PM. Ek SAMOSA prakat hua.", "“Ek bite. Kisi ko pata nahi chalega.” 😈"],
    villainChoices: [
      ["🦵 Laat maaro. (The boy way.)", "K.O.! The boy wins. 🦵"],
      ["📞 {HIM} ko call karo", "Pati-dev shield activated 🛡️❤️"]
    ],
    meanwhile: ["Meanwhile, {HIM}. Fast pe. 💪", "Colleague: “Lemon rice khaoge?”", "{HIM}: “Sirf {HER} ke haath ka.”", "(Pet: “Bhai please.”)"],
    cheesy:  ["{HER} ka special talent:", "Family ke saamne cheesy lines. 🧀", "{HIM}: 🍅", "Aur jab koi nahi dekh raha…", "🦷 *bite*"],
    memory:  ["Flashback.", "Cognizant. 11:47 PM. Bura din.", "Phir… headlights. 🛵", "“Chal. Chai peete hain.”", "Do chai. Sab theek. ☕☕"],
    years: {
      before: ["2025", "Chand dekha… mobile pe. 📱", "Par mera chand mere paas tha."],
      after:  ["2026", "Ab mera chand mobile pe hai…", "…aur tum asli chand dekhogi. 🌙"],
      twist:  "Ulta ho gaya sab. Bas pyaar wahi."
    },
    game:   ["8:15 PM. Chand gayab. 🌫️", "Dhoondo, {HER}. (Nakli chand se bachna.)"],
    found:  ["ASLI CHAND MIL GAYA! 🌕", "Aur us paar?", "{HIM}. Obviously. 😎", "Agle saal saath honge. Pehla ghoont, mere haath se. ❤️"]
  },

  /* ---------- Vachan Patra (his promises) ----------
     items: [icon, line in Hindi/Telugu (use \n for 2 lines), short English]          */
  vachan: {
    doha:   "चंदा चमके चाँदनी, चितवन चंचल चोर।\nदूर देश में दिल बसे, बँधी प्रीत की डोर॥",
    dohaEn: "The moon glows, your glance steals my heart. Miles apart, still tied by one thread.",
    title:  "वचन पत्र",
    intro:  "तूने व्रत रखा मेरे लिए, ये वचन तेरे लिए।",
    items: [
      ["😴", "तेरी नींद पे पहरा मेरा, अलार्म भी अब चुप रहेगा,\nतुझे जो सुबह जगाए, वो सूरज भी मुझसे डरेगा।", "Your sleep is guarded. Even the sun will think twice."],
      ["🦷", "दाँतों के ये निशाँ नहीं, मोहब्बत की मुहर हैं,\nकाटो जितना जी चाहे, ये ज़ख़्म नहीं, ज़ेवर हैं।", "Not bite marks, love stamps. Bite away, I'll wear them like jewellery."],
      ["🍅", "सबके सामने तेरी cheesy line, मेरा चेहरा लाल,\nशर्म मेरी, जीत तेरी, यही तो है कमाल।", "Your cheesy lines, my red face. You win every time."],
      ["🍋", "నీ లెమన్ రైస్, నా సండే దోశ,\nఇదే మన ప్రేమ భాష.", "Your lemon rice, my Sunday dosa. That's our love language."],
      ["🌙", "चाँद को देखो तो समझना, मैं भी उसी को ताक रहा हूँ,\nफ़ासला बस कुछ मीलों का है, दिल से तो पास रहा हूँ।", "When you look at the moon, so am I. Only miles apart."]
    ],
    closing:  "నా చందమామ నువ్వే · मेरा चाँद तुम हो",
    sign:     "— तुम्हारा {HIM}",
    claim:    "Claim 💌"
  },

  songs: [
    { title: "Chaudhvin Ka Chand Ho", lang: "Hindi · 1960", youtube: "" },
    { title: "Mounamelanoyi",         lang: "Telugu · 1983", youtube: "" }
  ]
};
