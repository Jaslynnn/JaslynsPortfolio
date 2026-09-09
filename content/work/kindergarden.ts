import type { CaseStudy } from "@/content/types";

const kindergarden: CaseStudy = {
  title: "Kindergarden",
  slug: "kindergarden",
  section: "work",
  tags: ["Water Shader", "Buoyancy", "Unity", "Maya", "Substance Painter"],
  role: "#WaterShader | #Buoyancy | #Unity | #Maya | #Substance Painter",
  summary:
    "Stylised water shader with buoyancy for rubber duckies in a fantasy kindergarden.",
  // No dedicated Kindergarden image yet — using the shared placeholder.
  images: ["/images/placeholder.svg"],
  video: "https://www.youtube.com/embed/watch?v=8g3Q8hZtQF8",
  // No "How it was made" pop-up — this is general technical-art range evidence.
  order: 60,
};

export default kindergarden;
