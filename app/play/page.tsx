import type { Metadata } from "next";
import { PlayGrid } from "@/components/sections/play-grid";

export const metadata: Metadata = {
  title: "Play — Jaslyn Chen",
  description: "Games, illustration, 3D, animation and visual experiments.",
};

export default function PlayPage() {
  return (
    <main className="pt-20">
      <PlayGrid heading="Play" />
    </main>
  );
}
