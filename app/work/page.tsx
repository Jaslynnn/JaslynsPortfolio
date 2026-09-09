import type { Metadata } from "next";
import { WorkGrid } from "@/components/sections/work-grid";

export const metadata: Metadata = {
  title: "Work — Jaslyn Chen",
  description:
    "Case studies where the production-tooling instinct is applied across mediums.",
};

export default function WorkPage() {
  return (
    <main className="pt-20">
      <WorkGrid heading="Work" />
    </main>
  );
}
