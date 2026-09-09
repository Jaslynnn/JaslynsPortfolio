import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/styles/globals.css'; // Import global styles
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased ubuntu-mono-regular ", inter.className)}>
        <Navbar />
        {children}
        <Footer />
        <div id="modal-root" />
      </body>
    </html>
  );
}
