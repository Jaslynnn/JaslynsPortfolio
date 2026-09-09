import type { CaseStudy } from "@/content/types";

// Covers both the "2009" mockup piece and the "2009 Pattern" tile
// (grouped as "2009 / 2009 Pattern" in the Craft list).
const twentyOhNine: CaseStudy = {
  title: "2009",
  slug: "2009",
  section: "craft",
  tags: ["Illustrator", "Photoshop", "Mockup"],
  role: "#Illustrator | #Photoshop | #Mockup",
  summary:
    "Inspired by the song “Heather” by Conan Gray — the emotion of jealousy, and my own experiences. Includes a companion repeating pattern.",
  images: ["/MockUpPurpleBG3.png", "/2009Tile.png"],
  order: 50,
};

export default twentyOhNine;
