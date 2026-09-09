import type { Metadata } from "next";
import { CraftGrid } from "@/components/sections/craft-grid";

export const metadata: Metadata = {
  title: "Craft — Jaslyn Chen",
  description: "Artist-roots pieces — illustration, 3D, animation and games.",
};

export default function CraftPage() {
  return (
    <main className="pt-20">
      <CraftGrid heading="Craft" />
    </main>
  );
}
