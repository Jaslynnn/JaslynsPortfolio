import localFont from "next/font/local";

// Self-hosted, licensed fonts loaded from /public/fonts via next/font/local.
// Exposed to Tailwind as CSS variables (see tailwind.config.ts).

export const ubuntuMono = localFont({
  src: [
    { path: "../public/fonts/UbuntuMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/UbuntuMono-Italic.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/UbuntuMono-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/UbuntuMono-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-ubuntu-mono",
  display: "swap",
});

export const karla = localFont({
  src: [
    { path: "../public/fonts/Karla-VariableFont_wght.ttf", weight: "200 800", style: "normal" },
    { path: "../public/fonts/Karla-Italic-VariableFont_wght.ttf", weight: "200 800", style: "italic" },
  ],
  variable: "--font-karla",
  display: "swap",
});
