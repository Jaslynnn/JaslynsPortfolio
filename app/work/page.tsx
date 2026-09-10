import type { Metadata } from "next";
import { WorkGrid } from "@/components/sections/work-grid";

export const metadata: Metadata = {
  title: "Work — Jaslyn Chen",
  description:
    "Tools built to speed up workflows and game development, plus work for real clients.",
};

export default function WorkPage() {
  return (
    <main className="pt-20">
      <WorkGrid
        heading="Work"
        subheading="Tools I've built to speed up workflows and game development, and work done for real clients."
      />
    </main>
  );
}
