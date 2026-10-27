# 🌙 Chand Connect

A funny, sweet, animated Karwa Chauth film for couples who are far apart.
Make it yours in about **10 minutes**, with no coding. Send one link, and they see everything.

---

## ✅ 3 steps

### 1. Download
Click the green **Code** button → **Download ZIP**, then unzip it on your computer.

### 2. Make it yours
**a) Photos:** open `media/photos/` and add your photos with **exactly** these names:

| File name | What it is |
|---|---|
| `her.jpg` | her photo |
| `him.jpg` | your photo (appears inside the moon 🌕) |
| `together.jpg` | the two of you |
| `last-year.jpg` | last year's Karwa Chauth |

Don't have one? Skip it. A cartoon shows instead.

**b) Voice note (optional):** record 10–20 seconds on your phone and save it as `media/voice/moon.mp3`.

**c) Names:** open `config.js` with Notepad (Windows) or TextEdit (Mac). Change **only the ✏️ EASY BOX at the top**:

```js
her: { name: "Sweety" },          // her name
him: { name: "Hubsand" },         // your name
whatsapp: "919876543210",         // your number: 91 + 10 digits
memoryPlace: "cognizant",         // your special memory place
cheesyLine: "…",                  // a line she says to make you shy
song: "https://www.youtube.com/watch?v=…",   // your song
```

👉 Change only the text **inside the quotes**. Keep the quotes `" "` and the commas. Save.

### 3. Share
Go to **https://app.netlify.com/drop** (free sign-up), then **drag your whole folder** onto the page.
You get a link: send it on WhatsApp. 🎉
They open it on a phone or computer and see **everything**: photos, voice, song and story.

---

## 🔒 Privacy

- The Netlify link isn't listed anywhere, but **anyone who has the link can open it**. Send it only to your partner.
- **Don't upload your photos to GitHub.** A public repo means anyone can see them.
- Want it locked to only their email? Use **Cloudflare Pages + Cloudflare Access** (free; it asks for a one-time email code).

## 🎬 Make an Insta Reel

Open the link → tap **🎬 Insta Reel banao** → the story plays and records (about 2 minutes) → tap **⬇ Reel save karo** → post it as a Reel.
On iPhone: open the saved file → Share → **Save Video**.
The voice note is included. YouTube songs can't be recorded, so put an mp3 in `media/songs/` if you want the song inside the reel.

## 🛠 Something broke?

- **Blank page after editing `config.js`?** A quote `"` or comma is missing. Undo your last change.
- **Photo not showing?** Check the file name. It must be exactly `her.jpg`, not `her.JPG.jpg` or `her.jpeg`.
- **Voice note from iPhone (.m4a)?** In `config.js`, change `voiceNote` to `"media/voice/moon.m4a"`.

---

<details>
<summary>More (optional)</summary>

**Change story lines or vachans:** everything below the "OPTIONAL" line in `config.js`. `{HER}` and `{HIM}` turn into the names automatically.

**Memes or GIFs:** put the file in `media/memes/` and add it to `media` in `config.js`, e.g.
`{ scene: "villain", type: "image", src: "media/memes/samosa.gif", caption: "Main villain" }`
Scenes: `subah, villain, meanwhile, katha, cheesy, memory, years, game`.

**Keep your number out of `config.js`:** copy `config.private.example.js` to `config.private.js` and put private settings there. It's ignored by git.

**For developers:** `.gitignore` blocks everything in `media/*` and `config.private.js`, so you can `git push` your own copy without personal files. GitHub's website "Upload files" button ignores `.gitignore`, so upload only the template files there.

Plain HTML + canvas. No build step, no frameworks. MIT licensed.
</details>
