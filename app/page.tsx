import { Hero } from "@/components/sections/hero";
import { WorkGrid } from "@/components/sections/work-grid";
import { featuredCaseStudies } from "@/content/featured";

export default function Home() {
  return (
    <div>
      <Hero />
      <WorkGrid
        heading="Featured Work"
        studies={featuredCaseStudies}
        viewMoreHref="/work"
      />
    </div>
  );
}
