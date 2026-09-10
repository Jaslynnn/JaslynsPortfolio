# Jaslyn Chen — Portfolio Site: Restructure & Content Refresh

Reference this file at the start of any session working on this repo. It covers brand content, target structure, and the migration plan for the current refresh.

---

## Project Overview

Personal portfolio site for Jaslyn Chen, a Creative Technologist. Existing stack (keep as-is, do not swap frameworks):
- Next.js 15 (App Router), React 19
- Tailwind CSS 3
- Framer Motion (`motion` package)
- Currently hosted on Vercel, deployed automatically on push to the connected domain — no hosting changes needed as part of this refresh

**Goal of this pass:** reorganize the codebase for clarity and modularity, migrate in new brand content, apply newly licensed fonts, and restructure the portfolio grid per the finalized Work/Craft split below. This is a content + structure refresh, not a rebuild from scratch.

---

## Design Constraint — Do Not Change the Visual Design

**Jaslyn likes the current visual design and wants it kept, not redesigned.** Every existing component — layout, spacing, animations, colors, video placements, hero treatment — is the template to reuse structurally when migrating content into the new folder organization. This restructure is about code organization and content, not a visual redesign.

**The only visual change in this entire pass is the font swap** (see Fonts section below). Specifically:
- **Homewrecker's video is already the current homepage hero — no change needed here.** It's already the first thing a visitor sees at the top of Home today; this refresh just needs to preserve that exactly as-is, not move or rebuild it.
- **Hero composition (video, title text, positioning line) stays as currently laid out** — don't redesign how these elements sit together; only the text content and font change, the existing layout/composition is the template.
- Card layouts, grid arrangements, animation/motion behavior, and existing styling all carry over unchanged — only reorganized into cleaner code and updated with new copy/content.

---

## Brand Reference (source of truth for all copy)

**Title:** Creative Technologist
**Specialization:** Production Tooling — the connective layer between design and engineering; building tools that make workflows around the work function (distinct from visible technical art like shaders/VFX).

**Hero/title text on the site** (replaces the current "TECHNICAL ARTIST" in the header/hero area):
> Creative Technologist | Production Tooling | Game Design and Dev

**Positioning line (use everywhere — hero, name card, meta description):**
> "I create the systems ideas need, whether they're brand new or already running."

**Bio (About page / meta):**
> I create the systems ideas need, whether they're brand new or already running. I sit between design and development, I diagnose where a workflow or concept falls short, then build the tool, prototype, or architecture that gets it working. My background spans production tooling, technical game design, and 3D/technical art, with hands-on experience designing custom AI workflows where they genuinely speed things up.

**Company names:** kept general in bio copy (no explicit "Gloo Communications" mention in web-facing bio, per standing decision) — but do name it explicitly in the Work case study itself.

---

## Sitemap

`Home / Work / Play / About / Contact`  (the artist-roots section is now called **Play**; the folder/route were renamed from `craft` -> `play`)

**Home** — portfolio-first landing. The hero (Homewrecker's video, title text, positioning line) stays exactly as currently composed — see Design Constraint above. Below the hero, case studies appear in this order:
1. **PR Agency Website** then **PR Workflow Tooling** — the Gloo client work, split into two cards (see below)
2. **Homewrecker** — its full case-study write-up appears here in the card sequence

Home shows the first three cards only (through Homewrecker) with a "View More" link. Everything below — How to Be a Meat Hero, Falling Angel, Plant Feelings, Kindergarden — appears on `/work` only.

Positioning line sits as a caption/subhead within the existing hero composition, not a big standalone hero statement. Scrolls into Work/Craft for the rest.

**Work** — case studies demonstrating the production-tooling instinct applied across mediums:
1. **Gloo client work — split into two cards** (Jaslyn's decision, Sep 2026). The work is for Gloo Communications, but **"Gloo" does not appear in either card title** — the titles are descriptive so the work reads as real client work rather than a personal product. The client *is* named inside the write-ups / `role` field.

   **1a. PR Agency Website** (`content/work/pr-agency-website.ts`, `PrAgencyWebsiteTOC`, order 10)
   - Card summary: "A PR agency's company website, built from scratch — sketches on paper to a full working site on their existing hosting."
   - Pop-up: *How it started* (brought in to redesign the site) → *From paper to launch* (sketches → Figma wireframe iteration → dated stakeholder critiques mid-May to late June → before/after screenshots).
   - **Website framing:** a **complete build from scratch**, hosted on the client's **existing hosting service**. NOT a "WordPress-to-static rebuild/migration" — that earlier framing is wrong, do not use it.
   - External link: gloopr.biz. Images: `public/images/pr-agency-website/`.

   **1b. PR Workflow Tooling** (`content/work/pr-workflow-tooling.ts`, `PrWorkflowToolingTOC`, order 15)
   - Card summary: "Internal tools for a PR agency: a client-timeline generator and a personalised mass-email tool."
   - Pop-up: *How it started* (website was going well, founder asked for "nicer" timelines → built a generative tool → others brought their own problems) → *The tools* → *AI tooling & what it took*.
   - **Tools:** Timeline Builder (built, shown with screenshot) → Internal Timeline (built) → mass-email tool / "Gloo Mail / Mergo" (in progress). **Coverage Report Automation and Gloo Portal are removed — not featured.**
   - Images: `public/images/pr-workflow-tooling/`.

   **Do not overstate completion status** — Timeline Builder and Internal Timeline are finished and demoable; the mass-email tool is honestly in progress.
2. **Homewrecker** — breaking-interaction mechanic. Frame the scriptable-object system explicitly as production-tooling-in-miniature: not just designing the mechanic, but building the tool that let values be tagged and swapped without touching code. The site already has a strong "How it was made" breakdown (Introduction / Thought & Design Process / Technical Implementation) — adapt rather than rewrite from scratch. Its video stays at the top of this section on the Work page, exactly as it currently is. **Last card shown on Home.**
3. **How to Be a Meat Hero** — see dedicated section below for full content plan. `/work` only (not on Home). **Gets a new "How it was made" pop-up — see dedicated section below.**
4. **Falling Angel** — already has an existing "How it was made" pop-up on the current site (same Introduction / Thought & Design Process / Technical Implementation structure, via `pf-fallen-Angel.tsx`). **Keep this pop-up — adapt/migrate it into the new structure, do not remove it.**
5. **Plant Feelings** — already has an existing "How it was made" pop-up on the current site (`pf-plant-feelings.tsx`, same three-section structure). **Keep this pop-up — adapt/migrate it into the new structure, do not remove it.**
6. **Kindergarden** — stylised water shader + buoyancy system (rubber duckies). This is general technical-art range evidence, not production-tooling evidence — keep the framing distinct from Homewrecker. **Does not currently have a "How it was made" pop-up — do not add one.**

**Pop-up policy, stated plainly:** pieces that already have a "How it was made" pop-up on the current site (Homewrecker, Falling Angel, Plant Feelings) keep that treatment. Kindergarden does not currently have one and does not get one added. New pop-ups built for this refresh: **How to Be a Meat Hero** (see dedicated section below), **PR Agency Website**, and **PR Workflow Tooling** (see the Gloo split above).

**Play** — games and visual work, no systems framing needed:
Adblocker, To Float, RuneSoap, Bestseller, 2009 / 2009 Pattern, Sushi Vending Machine + Sushi Cards, IMMeta

**Cut from the site entirely** (do not migrate):
Amortis, Toyshop NFC app prototype, NTU App Redesign, NTU App watch design, Fiend Control UI, "Can you just come and eat dinner?", Amphibi, Human Heart, UFO Donut, Elff

**About** — full story/arc, tools list, education. Experience list below, pulled directly from the locked resume (source: personal branding doc) so this file is self-contained:

**Experience list for About page:**

**Creative Technologist (Freelance) / PR Intern**
Gloo Communications Pte. Ltd. | May 2026 – Present *(Internship May–Jul 2026; freelance ongoing)*
- Identified that internal reporting and coverage tracking were slow and manual; in just under two months, built a Timeline Builder, an email automation tool, and a website for the company — incorporating AI tooling where it sped up the work
- Took on freelance work after the internship to continue building on these systems

**Project-in-Charge**
Ngee Ann Polytechnic | Mar 2023 – Jul 2024
- Created various media and set up projects and hardware for Level 4 Immersive Labs in the School of ICT

**Developer and Artist Intern**
Swirly Studios LLC, USA (Silicon Valley) | Sep 2022 – Feb 2023
- Developed a Spanish-language learning web game using TypeScript and Lit.dev
- Created codable graphical assets (SVG) and integrated them into the application

**Multimedia Intern**
HelloHolo | Tech Start-Up | Mar 2022
- Animated 3D assets in Maya for an NFT web application
- Developed an overseas application for Microsoft HoloLens in Unity (C#) across a team of 5 developers and designers

**3D Environment Modeler**
Istana Animated Video Project | Nov 2021 – Feb 2022
- Created 3D environment models in Maya for an animated video produced for Istana Singapore (Office of the President of the Republic of Singapore), which reached 812 views and was launched on the official Istana website

**UI/UX Designer** — NP Global | Jun 2020, Jun 2021
Redesigned the Ngee Ann Polytechnic Global website in Adobe XD based on user feedback from 4 focus groups (~50 participants)

**Education:**

**Nanyang Technological University** — BFA in Art, Design and Media | 2023 – Present | NTU Koh Boon Hwee Scholarship (beneficiary)
**Ngee Ann Polytechnic** — Diploma in Immersive Media | 2020 – 2023 | Ngee Ann Polytechnic Scholarship

**Note:** the Gloo entry here uses the resume's simplified "built a website for the company" phrasing — this is fine for a bio/experience-list context. The Work case study (above) is where the more accurate/detailed breakdown (rebuild vs. from-scratch, per-tool status) belongs; don't mix the two levels of detail.

**Contact** — mirrors name card contact info.

---

## How to Be a Meat Hero (FYP) — Updated Handling

**This supersedes the earlier "placeholder only, wait until complete" decision.** Jaslyn now wants real content live on this site, positioned before Homewrecker.

**Structure mirrors Homewrecker's existing pattern** — a simple card-level narrative, plus a deeper "How it was made" pop-up (same UI component/pattern as Homewrecker's existing modal):

**Card-level narrative** (plain-language, no jargon — this is what's visible before anyone clicks in; exact copy provided by Jaslyn, supersedes the earlier draft):
> "How to be a meat hero" started as a Roblox hackathon experiment called "Meat Lover" that won Representative's Choice on the strength of one mechanic. It is currently in development to become a bigger game in Unity. Coming soon.

**"How it was made" pop-up content** — trimmed to two short sections only (FYP consultation content and a Technical Implementation section have been removed per Jaslyn's request):

- *Introduction (keep very concise):* The reframed core question driving the redesign — the old prototype asked "can you make the correct cut?"; the Unity redesign asks "who is affected by the cut you choose to make?"
- *Thought & Design Process:* What was preserved vs. adapted vs. retired from the Roblox prototype (swipe cutting, limited cuts, and hazards preserved; overlapping controllers, hard-coded totals, and client-owned scoring retired).

**Do not include:** FYP consultation details, the "experience-first integrator" coding-profile framing, or a Technical Implementation section (architecture, `ProcessingResult`, assembly boundaries, etc.) — all removed from this pop-up per Jaslyn's latest direction. This is a lighter-touch pop-up than Homewrecker's, by design.

**Separate dedicated site:** Jaslyn is also planning a separate, standalone website for this project. Once that exists, the on-site card can additionally link out to it for the fuller experience (trailer, deeper documentation, playtesting/booth info). The on-site card and pop-up above should stand on their own regardless — not just function as a teaser waiting on the external site to be built.

---

## Target Folder Structure

```
/app                      ← routes only (home, work, craft, about, contact)
/components/ui            ← reusable primitives (buttons, cards, nav)
/components/sections       ← page-level sections (hero, work-grid, craft-grid, footer)
/content                  ← case study content as MDX or structured JSON/TS — one file per project
/public/fonts             ← self-hosted licensed font files
/public/images            ← project imagery, organized by project slug subfolder
```

**Content-per-file principle:** each Work/Craft case study lives as its own file under `/content` (e.g. `/content/work/gloo-tooling.mdx`, `/content/work/homewrecker.mdx`, `/content/craft/adblocker.mdx`), with a consistent frontmatter shape (title, tags, summary, images, body). Do not embed case study copy inline inside page/component files — this is the change that makes future edits (via Claude Code or otherwise) safe and fast.

---

## Naming Conventions

- Files: kebab-case (`breaking-interaction.tsx`, not `pf-breaking-Interaction.tsx`)
- Components: PascalCase inside the file, matching kebab-case filename
- Content slugs: kebab-case, matching the project name (`gloo-tooling`, `homewrecker`, `to-float`)
- Fix known inconsistencies while migrating: `HelloHolo` (not "Hello holo"), `NP Global` (not "NP global") — apply consistent capitalization throughout all copy

---

## Fonts

New fonts are commercially/web licensed — safe to self-host directly in the project.
- Use `next/font/local` to load font files from `/public/fonts`
- Self-hosting via `next/font/local` avoids external requests and layout shift — no CDN/Google Fonts linking needed
- Once font files are added to the repo, wire them into the Tailwind config as custom font-family tokens rather than hardcoding font names in components

---

## Migration Checklist (suggested order)

All steps below completed on branch `portfolio-restructure` (one commit per step).

1. ✅ Set up new folder structure (`/content`, reorganized `/components` into `ui/`, `sections/`, `case-studies/`)
2. ✅ Migrate case study content into individual `/content` files per the Work/Craft split — Cut list applied. `features.tsx` / `testimonials.tsx` later deleted in step 9.
3. ✅ Rewrite bio, About (incl. Experience + Education list), hero title, and meta copy from the Brand Reference
4. ✅ Gloo tooling case study card + new `GlooToolingTOC` pop-up (net-new)
5. ✅ Reframe Homewrecker's write-up around the production-tooling angle; video placements untouched
6. ✅ How to Be a Meat Hero card + new `MeatHeroTOC` pop-up (two-section, lighter touch)
7. ✅ Fonts self-hosted via `next/font/local` + Tailwind tokens. Now **Neue Mexico Mono** site-wide (Karla + Ubuntu Mono removed per later decision).
8. ✅ Naming fixed: `pf-*` / `ModalButton` files → kebab-case; `DocumentWithTOC`→`BreakingInteractionTOC`, `FallenAngelTOC`→`FallingAngelTOC`
9. ✅ Grids render from `/content` via `work-grid.tsx` / `play-grid.tsx`. Routes `/work` + `/play` (`/portfolio` and `/craft` redirect in); navbar = Work / Play / About / Contact. Order: PR Agency Website → PR Workflow Tooling → Homewrecker → Meat Hero → Falling Angel → Plant Feelings → Kindergarden. Home shows the first 3 (through Homewrecker); Meat Hero and below appear on /work only.
10. ✅ `next build` + `next lint` pass clean (9 routes). Vercel deploys on push to the connected branch — no config changes needed.

### Later tweaks (post-checklist, same branch)
- Hero title shortened to "Creative Technologist | Production Tooling | Game Design and Dev"
- 2009 / 2009 Pattern and Sushi Machine / Sushi Cards kept as separate cards (not grouped)
- Body text made fully opaque (`#ffffff`); the grey `bg-clip-text` heading gradient removed everywhere — headings are solid white

### Known follow-ups (not blocking)
- Card images still needed for **Gloo tooling** and **Meat Hero** (cards show an "Image coming soon" block until `images` is filled). Kindergarden shows its YouTube video.
- Neue Mexico Mono ships Regular + Italic only — bold is browser-synthesised; add a bold file if desired
- Meat Hero: link out to its dedicated site once that exists (`content/work/meat-hero.ts`)
- `pricing.tsx` is now unused (kept, not deleted)
- Pre-existing `next/image` loader warnings in `logos-cloud.tsx`

---

*This file should be updated as decisions change — treat it as the current source of truth for this project, not a one-time brief.*
