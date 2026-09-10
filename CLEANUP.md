# Cleanup / tidy-up backlog

Audit of the repo done Sep 2026 after the portfolio restructure. Nothing here
has been actioned yet. Roughly ordered by value ÷ risk.

---

## 1. Discard — dead files & assets

### Unused components (never imported)

| File | Notes |
|---|---|
| `components/sections/pricing.tsx` | ~395 lines, fully dead (template leftover) |
| `components/ui/spotlight-new.tsx` | exports `Spotlight`, used nowhere |
| `hooks/use-outside-click.ts` | unused → then the empty `hooks/` folder goes too |
| `icons/scanner.tsx` | unused |
| `icons/gift.tsx` | only used by `pricing.tsx` (dead) |

Inside `components/sections/cta.tsx` there's a `BackgroundGrid` component (~40 lines)
that the `CTA` render never calls.

### Unused dependencies (0 imports — remove from `package.json`)

`class-variance-authority`, `dotted-map` (was for the deleted `MapView`),
`lucide-react`, `next-themes`.

Keep: `tailwindcss-animate` (used in the Tailwind plugin list),
`react-wrap-balancer` (1 use in hero, could inline but low priority).

### Unused public assets

- **Videos (~78 MB dead):** `public/videos/Homewrecker.mp4` (47 MB — only
  `Homewrecker-trimmed.mp4` is used) and `public/videos/cookaiFinal.mp4`
  (31 MB, referenced nowhere).
- **Template / demo leftovers:** `public/next.svg`, `vercel.svg`, `file.svg`,
  `globe.svg`, `window.svg`, `public/manu_arora.jpg`, `kishore_gunnam.jpg`,
  `public/images/person1‑6.png`.
- **Old project art, not referenced:** `Choice.png`, `UFODonut.png`, `Zombie.png`,
  `AmphibiPoster.png`, `AmortisUI.png`, `AmortisUI2.png`, `FiendControlUI.png`,
  `GotHit.png`, `Heart.PNG`, `Heart2.JPG`, `SunnySideUp.PNG`, `SunnySideUp2.png`,
  `StartGamePage.png`, `FallingPageMockup.png`, `Falling.png`, `NormalTexture.jpg`,
  `CoverImage.png`, `Jaslynpfp1.jpg`, `JaslynPfp2.jpeg`, `JaslynPfp3.jpeg`
  (only `JaslynPfp4.jpeg` is used).
- `public/images/Canva.png`, `Houdini.png`, `Nuke.png` — software logos not in
  the About list.

`public/videos/` is ~233 MB total. Even after cleanup, `PlantFeelingsVideo.mp4`
(83 MB) and `MayaDemonWIP.mp4` (20 MB) are used but worth compressing before
anyone clones the repo.

---

## 2. Repo hygiene

- **`.idea/` is committed** (12 files incl. `workspace.xml`,
  `copilot.data.migration.*`). Add to `.gitignore` and `git rm -r --cached .idea`.
- **`public/images/pr-workflow-tooling/.next/trace`** — a stray file from an
  errant build. `git rm` it. `.gitignore` only ignores `/.next/` at the root;
  add `**/.next/`.
- `.DS_Store` files exist on disk but are already gitignored — fine.

---

## 3. Fix — small correctness issues

- **`app/_not-found/page.tsx`** is wrong for App Router — it creates a junk
  `/_not-found` route and does not act as the real 404. Rename to
  `app/not-found.tsx` (default-export the component, no `page.tsx`), drop the
  `NextPage` import (Pages-Router type).
- **No favicon.** `icons/favicon.ico` exists but isn't wired. Move it to
  `app/favicon.ico`.
- **No OpenGraph / social image.** `app/layout.tsx` metadata is title +
  description only; no `metadataBase`. Shared links show a blank card.
- **`next.config.ts`:** `images.remotePatterns` for `assets.aceternity.com` /
  `images.unsplash.com` — no remote images used anymore, remove. And
  `reactStrictMode: false` — re-enable unless there's a specific reason.
- **`--background` / `--foreground`** referenced in `tailwind.config.ts` but
  never defined in CSS → `bg-background` etc. silently produce nothing. Define
  or delete. Same for `--color-primary` / `--color-secondary` in `globals.css`
  (defined, unused).
- **Software-logo `<Image loader={({src}) => src}>`** in `logos-cloud.tsx`
  disables Next image optimization and causes the console warnings. Drop the
  loader or use plain `<img>`.
- `README.md`: typo ("portfoliio") and outdated stack list.

---

## 4. Tidy — messy but working

### `hero.tsx`

- Dead scroll-animation: `containerRef` declared and never used;
  `translateY` / `scale` / `blurPx` / `filterBlurPx` computed and applied to a
  `motion.h2` that only wraps the profile photo.
- The **profile image is inside an `<h2>`** — semantically wrong.
- Empty `motion.h2` / `motion.div` nodes with `exit` / `initial` props that do
  nothing (no `AnimatePresence`).
- `text-gray-500` on the "See the work" button wrapper — dead.
  `ubuntu-mono-bold` class on the `<Image>` — dead. Scattered `<br>` /
  whitespace. Worth a clean rewrite (~150 lines, half cruft).

### `globals.css` dead classes

`.bg-cover` (also a broken `/public/Homewrecker.jpg` path), `.topVidContainer`,
`.modal-backdrop` / `.modal-container` / `.modal-header` / `.modal-footer` /
`.modal-content` / `.close-btn` (superseded by `modal-button.tsx`), and
`.ubuntu-mono-thin` / `.ubuntu-mono-regular` / `.ubuntu-mono-regular-italic` /
`.ubuntu-mono-bold-italic` (only `.ubuntu-mono-bold` is used, once, on the
pointless hero-image class — so the whole set can go).

### Naming that no longer matches reality

- `components/sections/logos-cloud.tsx` / `SpotlightLogoCloud` — it's the entire
  About-page body now, not a logo cloud. Rename file + component (e.g.
  `about-intro.tsx` / `AboutIntro`). Also has an unused
  `import { s } from "motion/react-client"` and an unused `import Link`.
- `components/sections/faq.tsx` / `FrequentlyAskedQuestions` — it's the "Some
  other things" accordion (Education / Experience / Achievements), not an FAQ.
  Rename. `text-white-500` on line ~240 isn't a real class (typo).

### Duplication

- The `socials` array (4 links) is copy-pasted in both `footer.tsx` and
  `cta.tsx`. Extract to one shared const.
- `SocialIcon` lives in `footer.tsx` but `cta.tsx` imports it from there — move
  it to `components/ui/`.

### `motion` import inconsistency

Same library imported three ways: `"motion/react"`, `"motion/react-client"`,
and `"framer-motion"` (not in `package.json`, resolves transitively).
Standardize all to `"motion/react"`.

### Content layer

- **`role` field is dead data.** `content/types.ts` still has `role?`, every
  content file fills it in, nothing renders it anymore (cards show `#tags[0]`).
  Remove from the type and all files, or repurpose.
- **Image path inconsistency.** `content/work/*` uses `/images/<slug>/…`; all of
  `content/play/*` still point at `public/` root (`/Homewrecker.jpg`, etc.).
  Move each into `public/images/<slug>/` and update `images:` paths.
- `content/play/kindergarden.ts` has `images: []` — still showing "Image coming
  soon".

### The three old case-study modals

`breaking-interaction.tsx` (~462 lines), `falling-angel.tsx`,
`plant-feelings.tsx` still carry the original heavy inline styling — the same
long `className` repeated on every `<p>`, `<br></br>` everywhere, image classes
repeated ~10×. `client-work.tsx` / `meat-hero.tsx` already have the clean
pattern (shared style consts + `TocModal` / `Figure` helpers). Porting the three
old ones onto the same shell would cut them ~50–60% and unify all the modals.

---

## 5. Housekeeping

- **`CLAUDE.md`** is ~215 lines of session decision-log — it did its job for the
  refresh. Trim to a lean "current state" reference, or keep as an audit trail.

---

## Suggested order

1. Delete dead components + deps + unused video, gitignore `.idea`, remove the
   stray `.next/trace` — big win, near-zero risk.
2. Fix `not-found`, favicon, `next.config` remote patterns — small, correctness.
3. Rewrite `hero.tsx`, purge `globals.css` dead classes, dedupe `socials`,
   standardize `motion` imports — cleanup.
4. Rename `logos-cloud` / `faq`, drop the dead `role` field, unify image paths,
   refactor the three old modals — polish, bigger effort.
