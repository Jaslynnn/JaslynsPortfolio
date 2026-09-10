import type { Metadata } from "next";
import { PlayGrid } from "@/components/sections/play-grid";

export const metadata: Metadata = {
  title: "Play — Jaslyn Chen",
  description: "Games, illustration, 3D, animation and visual experiments.",
};

export default function PlayPage() {
  return (
    <main className="pt-20">
      <PlayGrid
        heading="Play"
        subheading="Games and creative pieces — several of them made with the tools over in Work."
      />
    </main>
  );
}
