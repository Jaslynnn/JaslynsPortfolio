# /public/fonts

Self-hosted fonts, loaded in **`app/fonts.ts`** via `next/font/local` and
exposed to Tailwind in **`tailwind.config.ts`**.

Current: **Neue Mexico Mono** is the only typeface — used site-wide.
`font-sans` and `font-mono` both resolve to it (via `--font-neue-mexico-mono`).

Files here:
- `NeueMexicoMono-Regular.woff2` / `.woff`
- `NeueMexicoMono-Italic.woff2` / `.woff`

`.woff2` is the primary web format (smallest, supported everywhere modern);
`.woff` is the older-browser fallback. `.otf`/`.ttf` are not used on the web.
Neue Mexico Mono ships Regular + Italic only — bold text is synthesised.

## Swapping fonts later

1. Add the new files here (`.woff2` + `.woff`, one per weight/style you use).
2. Tell Claude the file names and each font's role (display / body / mono).
3. Claude updates `app/fonts.ts` + `tailwind.config.ts` and removes the old files.
