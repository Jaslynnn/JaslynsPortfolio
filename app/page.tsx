import { Hero } from "@/components/sections/hero";
import { WorkGrid } from "@/components/sections/work-grid";

export default function Home() {
  return (
    <div>
      <Hero />
      <WorkGrid heading="Work" limit={3} viewMoreHref="/work" />
    </div>
  );
}
