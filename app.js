/* ============================================================
   app.js — builds the page from content.js.
   You normally don't need to touch this file.
   ============================================================ */
(() => {
  const $  = (s, r = document) => r.querySelector(s);
  const el = (t, c, h) => { const n = document.createElement(t); if (c) n.className = c; if (h != null) n.innerHTML = h; return n; };
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const bind = (k, v) => document.querySelectorAll(`[data-bind="${k}"]`).forEach(n => n.textContent = v);
  const arrow = '<span class="arrow">→</span>';

  /* ---------- media / placeholder frame ---------- */
  function gallery(items = []) {
    const g = el("div", "gallery");
    items.forEach(it => {
      const cell = el("figure", "gallery__cell");
      const img = el("img");
      img.src = it.src; img.alt = it.alt || ""; img.loading = "lazy"; img.decoding = "async";
      cell.appendChild(img);
      if (it.caption) cell.appendChild(el("figcaption", null, esc(it.caption)));
      g.appendChild(cell);
    });
    return g;
  }
  /* ---------- media / placeholder frame ---------- */
  function media(m = {}, extraClass = "") {
    const box = el("div", `canvas ${extraClass}`);
    if (m.type === "image" && m.src) {
      const img = el("img");
      img.src = m.src; img.alt = m.alt || ""; img.loading = "lazy"; img.decoding = "async";
      box.appendChild(img);
    } else if (m.type === "video" && m.src) {
      const f = el("iframe");
      f.src = m.src; f.title = m.note || "Video"; f.loading = "lazy";
      f.allow = "accelerometer; clipboard-write; encrypted-media; picture-in-picture";
      f.allowFullscreen = true;
      box.appendChild(f);
    } else if (m.type === "gallery" && m.images) {
      return gallery(m.images);
    } else {
      box.classList.add("canvas--empty");
      box.appendChild(el("div", "canvas__label",
        `<b>Add media here</b>${esc(m.spec || "1600 × 900")}<span>${esc(m.note || "")}</span>`));
    }
    return box;
  }

  /* ---------- head + nav ---------- */
  document.title = `${SITE.name} — ${SITE.role}`;
  bind("navName", SITE.name);
  bind("footerName", SITE.fullName);
  bind("footerNote", SITE.footer.note);
  $("#footerYear").textContent = `© ${new Date().getFullYear()}`;

  /* ---------- hero ---------- */
  bind("heroEyebrow", `${SITE.hero.eyebrow} · ${SITE.location}`);
  bind("heroName", SITE.name);
  bind("heroRole", SITE.role);
  bind("heroDesc", SITE.hero.description);

  const btn = (cfg, cls) => {
    const a = el("a", `btn ${cls}`, `${esc(cfg.label)} ${arrow}`);
    a.href = cfg.target || cfg.href;
    return a;
  };
  $("#heroButtons").append(
    btn(SITE.hero.primaryButton, "btn--primary"),
    btn(SITE.hero.secondaryButton, "btn--ghost")
  );

  $("#heroMedia").appendChild(media(SITE.hero.media));

  $("#heroProof").innerHTML = SITE.hero.proof.map(p => `
    <li>
      <div class="proof__v ${p.value == null ? "proof__v--text" : ""}"
           ${p.value != null ? `data-count="${p.value}" data-suffix="${esc(p.suffix || "")}"` : ""}>
        ${p.value != null ? "0" + esc(p.suffix || "") : esc(p.display)}
      </div>
      <div class="proof__l">${esc(p.label)}</div>
    </li>`).join("");

  /* ---------- about ---------- */
  bind("aboutEyebrow", SITE.about.eyebrow);
  bind("aboutHeading", SITE.about.heading);
  $("#aboutBody").innerHTML = SITE.about.paragraphs.map(p => `<p>${esc(p)}</p>`).join("");
  $("#aboutFacts").innerHTML = SITE.about.facts
    .map(f => `<div><dt>${esc(f.k)}</dt><dd>${esc(f.v)}</dd></div>`).join("");

  /* ---------- results ---------- */
  bind("resultsEyebrow", SITE.results.eyebrow);
  bind("resultsHeading", SITE.results.heading);
  $("#statList").innerHTML = SITE.results.stats.map(s => `
    <li class="reveal">
      <div class="stat__v" data-count="${s.value}" data-suffix="${esc(s.suffix || "")}">0${esc(s.suffix || "")}</div>
      <div class="stat__l">${esc(s.label)}</div>
      <div class="stat__n">${esc(s.note || "")}</div>
    </li>`).join("");

  /* ---------- projects ---------- */
  bind("workEyebrow", SITE.work.eyebrow);
  bind("workHeading", SITE.work.heading);
  bind("workIntro", SITE.work.intro);

  const list = $("#projectList");
  SITE.work.projects.forEach(p => {
    const card = el("article", "card reveal");
    card.appendChild(el("div", "card__body", `
      <span class="card__tag">${esc(p.tag)}</span>
      <h3 class="card__title">${esc(p.title)}</h3>
      <p class="card__desc">${esc(p.description)}</p>
      <dl class="meta">
        <div><dt>Role</dt><dd>${esc(p.role)}</dd></div>
        <div><dt>Result</dt><dd class="is-result">${esc(p.result)}</dd></div>
      </dl>
      ${p.link ? `<a class="card__link" href="${esc(p.link.href)}" target="_blank" rel="noopener">${esc(p.link.label)} ${arrow}</a>` : ""}
    `));
    const wrap = el("div", "card__media");
    wrap.appendChild(media(p.media));
    card.appendChild(wrap);

    if (p.strip) {
      const strip = el("div", "strip");
      strip.appendChild(el("p", "strip__label", esc(p.strip.label)));
      const g = gallery(p.strip.images);
      g.classList.add("gallery--tall");
      strip.appendChild(g);
      card.appendChild(strip);
    }
    list.appendChild(card);
  });

  /* ---------- services ---------- */
  bind("servicesEyebrow", SITE.services.eyebrow);
  bind("servicesHeading", SITE.services.heading);
  $("#serviceList").innerHTML = SITE.services.items.map((s, i) => `
    <div class="service reveal">
      <div class="service__i">/${String(i + 1).padStart(2, "0")}</div>
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.text)}</p>
    </div>`).join("");

  /* ---------- contact ---------- */
  bind("contactEyebrow", SITE.contact.eyebrow);
  bind("contactHeading", SITE.contact.heading);
  bind("contactText", SITE.contact.text);
  $("#contactButtons").appendChild(
    btn({ label: SITE.contact.buttonLabel, href: `mailto:${SITE.email}` }, "btn--primary")
  );

  const channels = [
    { k: "Email", v: SITE.email, href: `mailto:${SITE.email}` },
    { k: "YouTube", v: SITE.links.youtube, href: SITE.links.youtube },
    { k: "LinkedIn", v: SITE.links.linkedin, href: SITE.links.linkedin },
    { k: "Roblox", v: SITE.links.roblox, href: SITE.links.roblox },
  ].filter(c => c.v);

  $("#channels").innerHTML = channels.map(c => `
    <li><a href="${esc(c.href)}" ${c.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>
      <span class="k">${esc(c.k)}</span>
      <span class="v">${esc(c.v.replace(/^https?:\/\//, ""))}</span>
    </a></li>`).join("");

  /* ---------- nav behaviour ---------- */
  const nav = $("#nav"), links = $("#navLinks"), toggle = $("#navToggle");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", e => {
    if (e.target.tagName === "A") { links.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); }
  });
  const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 8);
  onScroll();
  addEventListener("scroll", onScroll, { passive: true });

  /* ---------- motion ---------- */
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const countUp = node => {
    const target = Number(node.dataset.count), suffix = node.dataset.suffix || "";
    if (!Number.isFinite(target)) return;
    if (still) { node.textContent = target + suffix; return; }
    const start = performance.now(), dur = 1100;
    const step = now => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      node.textContent = Math.round(target * eased) + suffix;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const node = entry.target;
      node.classList.add("is-in");
      node.querySelectorAll("[data-count]").forEach(countUp);
      if (node.matches("[data-count]")) countUp(node);
      obs.unobserve(node);
    });
  }, { threshold: .18, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal").forEach((n, i) => {
    n.style.transitionDelay = `${Math.min(i % 6, 5) * 60}ms`;
    io.observe(n);
  });
})();
