/* ============================================================
   CONTENT — this is the only file you need to edit for text,
   links, projects and images. Everything below is plain text.
   Keep the quotes "" and the commas , where they are.
   ============================================================ */

const SITE = {

  /* ---------- 1. THE BASICS ---------- */
  name: "Brandt",                      // ← big name in the hero
  fullName: "Jonas Hansen",            // ← real name, shown in the footer
  role: "Creative Developer & Digital Creator",
  location: "Denmark — working worldwide",
  email: "br44ndtt@gmail.com",
  links: {
    youtube:  "https://www.youtube.com/@BerryBaconReal",
    linkedin: "https://linkedin.com/in/yourprofile",   // ← YOUR LINKEDIN (or delete this line)
    roblox:   "",                                      // ← your Roblox profile, or leave empty to hide
  },

  /* ---------- 2. HERO ---------- */
  hero: {
    eyebrow: "Available for freelance work",
    description:
      "I build digital products, games and content — from idea to finished product. I develop in Roblox and Fortnite, and I run a 215K Roblox channel, so I know that audience from both sides of the screen.",
    primaryButton:   { label: "View my work",        target: "#work" },
    secondaryButton: { label: "Let's work together", target: "#contact" },
    proof: [
      { value: 215, suffix: "K+", label: "YouTube subscribers" },
      { value: 25,  suffix: "M+", label: "Views generated" },
      { value: null, display: "Fortnite & Roblox", label: "Games shipped" },
    ],
    // Add a file to /images and put the path here, e.g.
    // media: { type: "image", src: "images/hero.jpg" }
    // media: { type: "video", src: "https://www.youtube.com/embed/VIDEO_ID" }
    media: { type: "placeholder", spec: "1600 × 900", note: "Best-performing Short, or a game screenshot" },
  },

  /* ---------- 3. ABOUT ---------- */
  about: {
    eyebrow: "About",
    heading: "I build for the Roblox audience — and I am part of it.",
    paragraphs: [
      "Most developers build games and hope an audience shows up. I grew one first. My channel, BerryBacon, hit 215,000 subscribers off 32 Roblox Shorts and 25 million views — which means every design decision I make is backed by direct evidence of what this audience actually clicks, watches and shares.",
      "That runs both ways. I develop multiplayer games in Roblox and Fortnite (UEFN), design the UI and thumbnails, and use AI-assisted development to go from idea to playable prototype in days instead of months. Same person, whole pipeline: concept, build, package, publish.",
    ],
    facts: [
      { k: "Name", v: "Jonas Hansen, working as Brandt" },
      { k: "Based in", v: "Denmark, working remotely worldwide" },
      { k: "Working in", v: "Roblox (Luau), UEFN (Verse), web, design" },
      { k: "Good for", v: "Creators, startups, game studios, brands" },
      { k: "Speed", v: "Idea to playable prototype in days" },
    ],
  },

  /* ---------- 4. RESULTS ---------- */
  /* The first three are real. Replace the last three numbers with
     your own real counts before you publish. */
  results: {
    eyebrow: "Results",
    heading: "Numbers, not adjectives.",
    stats: [
      { value: 215, suffix: "K+", label: "YouTube subscribers", note: "@BerryBaconReal, built from zero" },
      { value: 25,  suffix: "M+", label: "Views generated",     note: "Across published Shorts" },
      { value: 32,  suffix: "",   label: "Videos published",    note: "That is 215K subscribers from 32 uploads" },
      { value: 3,   suffix: "+",  label: "Fortnite projects",   note: "Built and published in UEFN" },      // ← your real number
      { value: 4,   suffix: "+",  label: "Roblox projects",     note: "Designed, built and shipped" },      // ← your real number
      { value: 50,  suffix: "+",  label: "Paid creator jobs",   note: "Thumbnails for other YouTubers" },   // ← your real number
    ],
  },

  /* ---------- 5. PROJECTS ---------- */
  /* Copy a whole { ... } block to add a project. Delete one to remove it.
     media: { type: "placeholder" } → grey frame
             { type: "image", src: "images/my-shot.jpg" }
             { type: "video", src: "https://www.youtube.com/embed/VIDEO_ID" }
     link:   set to null to hide the button. */
  work: {
    eyebrow: "Selected work",
    heading: "Things I've actually built.",
    intro: "Screenshots and links are still going in — the marked frames below show where each one lands.",
    projects: [
      {
        tag: "YouTube",
        title: "BerryBacon — 215K subscribers from 32 Shorts",
        description:
          "A Roblox Shorts channel built from zero. Every video is played, edited and packaged by me. The channel reached 215,000 subscribers and 25 million views on 32 uploads, which is roughly 6,700 subscribers per video.",
        role: "Concept, gameplay capture, editing, packaging, channel strategy",
        result: "215K+ subscribers · 25M+ views · 32 videos",
        media: { type: "placeholder", spec: "1600 × 900", note: "Channel page screenshot, or embed your best Short" },
        link: { label: "Watch the channel", href: "https://www.youtube.com/@BerryBaconReal" },
      },
      {
        tag: "Roblox",
        title: "Multiplayer Roblox games",
        description:
          "Round-based multiplayer games built end to end: gameplay systems, UI and VFX, data saving, monetisation and the polish that makes a session feel good enough to replay.",
        role: "Game design, Luau development, UI/UX, live ops",
        result: "Live games with returning players",
        media: { type: "placeholder", spec: "1600 × 900", note: "Gameplay screenshot" },
        link: { label: "Play on Roblox", href: "#" },   // ← paste your game link
      },
      {
        tag: "Fortnite / UEFN",
        title: "Fortnite Creative maps",
        description:
          "Playable Fortnite experiences designed and shipped in UEFN — level design, game loop, Verse scripting and balancing against how real players actually behave.",
        role: "Game design, level design, Verse scripting",
        result: "Published and playable in-game",
        media: { type: "placeholder", spec: "1600 × 900", note: "Map screenshot or gameplay clip" },
        link: { label: "Play the map", href: "#" },     // ← paste your island code link
      },
      {
        tag: "Design",
        title: "Thumbnails for creators",
        description:
          "Paid thumbnail work for other YouTubers. Bold, readable frames built to win the click at phone size — designed with the click-through data from my own channel behind them.",
        role: "Concept, composition, retouching, A/B variants",
        result: "Repeat paid client work",
        media: { type: "placeholder", spec: "1600 × 900", note: "Grid of your six best thumbnails" },
        link: null,
      },
      {
        tag: "AI / Product",
        title: "AI-assisted product prototypes",
        description:
          "Digital products taken from idea to working build using AI-assisted development — fast prototyping, tight iteration loops, and a finished thing at the end instead of a pitch deck.",
        role: "Concept, prototyping, development, launch",
        result: "Multiple projects shipped end to end",
        media: { type: "placeholder", spec: "1600 × 900", note: "Product screenshot or short demo video" },
        link: null,
      },
    ],
  },

  /* ---------- 6. SERVICES ---------- */
  services: {
    eyebrow: "Services",
    heading: "How I can help.",
    items: [
      {
        title: "YouTube & content creative",
        text: "Formats, hooks and packaging for channels that need to grow — especially in gaming and Roblox. I've done it on my own channel at 215K, and I know what that audience clicks.",
      },
      {
        title: "Thumbnail & visual design",
        text: "Thumbnails, key art and channel identity built for click-through: bold, readable at phone size, and consistent across a whole library.",
      },
      {
        title: "Game design & development",
        text: "Roblox (Luau) and Fortnite (UEFN / Verse) experiences: game loop, systems, UI and the moment-to-moment feel that keeps players in the session.",
      },
      {
        title: "AI-assisted prototyping & digital products",
        text: "Idea to working prototype in days, not months. Useful when you need to see and test the thing before committing a full budget to it.",
      },
    ],
  },

  /* ---------- 7. CONTACT ---------- */
  contact: {
    eyebrow: "Contact",
    heading: "Have a project in mind?",
    text: "I'm available for freelance projects and creative collaborations. Tell me what you're building and I'll tell you honestly whether I'm the right person for it.",
    buttonLabel: "Send me an email",
  },

  /* ---------- 8. FOOTER ---------- */
  footer: {
    note: "Built and designed by me.",
  },
};
