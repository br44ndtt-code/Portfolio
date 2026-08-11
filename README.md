# Portfolio site — how to use it

Four files, no build step, no framework. Open `index.html` in a browser and it works.

```
index.html    the page shell (rarely touched)
content.js    ← ALL your text, links and projects live here
styles.css    colours, fonts, spacing
app.js        builds the page from content.js (don't touch)
images/       put your screenshots and photos here
```

---

## 1. Edit your name, email, links and projects

Everything is in **`content.js`**. Open it in any text editor (Notepad, VS Code, or straight on GitHub) and change the text between the quotes.

**Basics** — at the top:
```js
name: "Brandt",
fullName: "Jonas Hansen",
email: "br44ndtt@gmail.com",
links: {
  youtube:  "https://www.youtube.com/@BerryBaconReal",
  linkedin: "https://linkedin.com/in/yourprofile",
  roblox:   "https://www.roblox.com/users/yourprofile",
},
```

**Projects** — each one is a `{ ... }` block inside `work.projects`. To add a project, copy a whole block (from `{` to `},`) and paste it below. To remove one, delete the block. To reorder, move the blocks around.

**Rules that will save you an hour:**
- Keep the quotes `"` around text and the comma `,` at the end of each line.
- If you need an apostrophe inside text, it's fine: `"I'm available"` — just don't use a `"` inside a `"..."`.
- If the page ever goes blank after an edit, you deleted a quote, comma or bracket. Undo and try again.

**Before you publish:** the last three numbers in the `results` section are placeholders (Fortnite projects, Roblox projects, paid creator jobs). They're marked with `←` comments. Put your real counts in — the subscriber and view numbers are the ones doing the heavy lifting anyway, and a wrong number is the fastest way to lose trust.

---

## 2. Add your own images and videos

Drop the file into the `images/` folder, then point at it in `content.js`.

**Image:**
```js
media: { type: "image", src: "images/roblox-game.jpg", alt: "Gameplay screenshot" },
```

**YouTube video** — use the *embed* URL, not the normal one. If your video is `youtube.com/watch?v=ABC123`, the embed URL is `https://www.youtube.com/embed/ABC123`:
```js
media: { type: "video", src: "https://www.youtube.com/embed/ABC123" },
```

**Back to a placeholder:**
```js
media: { type: "placeholder", spec: "1600 × 900", note: "Gameplay screenshot" },
```

Sizing: everything is a 16:9 frame. Export at **1600 × 900**, save as JPG, keep files under ~300 KB so the page stays fast. Your thumbnails are already 1920 × 1080 — that's the same shape, so they drop straight in.

Also add `images/og.jpg` (1200 × 630) — that's the preview image people see when your link is shared in Discord, WhatsApp or X.

---

## 3. Put it online for free

**Easiest — Netlify Drop (2 minutes, no account needed to test):**
1. Go to **app.netlify.com/drop**
2. Drag the whole project folder onto the page.
3. It's live. Create a free account to keep the link permanently.

**Better long-term — GitHub Pages (free, and you can edit files in the browser):**
1. Create a free account at github.com.
2. New repository → name it `portfolio` → Public → Create.
3. Upload all the files (`index.html`, `content.js`, `styles.css`, `app.js`, `images/`) — drag them into the upload box.
4. Repository → **Settings → Pages** → under *Branch* choose `main` / `root` → Save.
5. Wait about a minute. Your site is live.

After that, editing `content.js` directly on GitHub and hitting *Commit* updates the live site automatically.

---

## 4. Your public URL

- Netlify gives you something like `random-name-123.netlify.app` — rename it under *Site settings → Change site name* to get `brandt.netlify.app`.
- GitHub Pages gives you `yourusername.github.io/portfolio`.

Both are free and fine to send to clients. When you want a real domain (`brandtcreative.com`, ~€10/year from Namecheap or Simply.com), both Netlify and GitHub Pages let you connect it in a few clicks — the free HTTPS certificate is automatic.

---

## Changing the look

In `styles.css`, the top block controls everything:
```css
--ink:    #08090C;   /* background */
--accent: #4C6BFF;   /* cobalt blue — buttons, links, tags */
--signal: #FFC24B;   /* amber — used only on numbers */
```
Change those two accent values and the whole site re-themes. Keep the amber restricted to numbers; that's what makes the results section land.
