import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'; // Import global styles
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jaslyn Chen",
  description:
    "Technical artist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased bg-black ", inter.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
