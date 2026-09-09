import localFont from "next/font/local";

// Self-hosted, licensed font loaded from /public/fonts via next/font/local.
// Neue Mexico Mono is the single typeface used across the whole site.
// woff2 is the primary web format (smallest, universally supported);
// woff is listed as a fallback for older browsers.
// Only Regular (400) + Italic ship — bold text is synthesised by the browser.

export const neueMexicoMono = localFont({
  src: [
    {
      path: "../public/fonts/NeueMexicoMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMexicoMono-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMexicoMono-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/NeueMexicoMono-Italic.woff",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-neue-mexico-mono",
  display: "swap",
});
