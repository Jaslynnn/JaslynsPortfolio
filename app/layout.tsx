import type { Metadata } from "next";
import '@/styles/globals.css'; // Import global styles
import { cn } from "@/lib/utils";
import { neueMexicoMono } from "./fonts";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Jaslyn Chen — Creative Technologist",
  description:
    "I create the systems ideas need, whether they're brand new or already running. Creative Technologist working across production tooling, technical game design, and 3D/technical art.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(neueMexicoMono.variable)}
      suppressHydrationWarning
    >
      <body className={cn("subpixel-antialiased font-mono")}>
        <Navbar />
        {children}
        <Footer />
        <div id="modal-root" />
      </body>
    </html>
  );
}
