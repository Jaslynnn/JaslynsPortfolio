import type { CaseStudy } from "@/content/types";

const meatHero: CaseStudy = {
  title: "How to Be a Meat Hero",
  slug: "meat-hero",
  section: "play",
  tags: ["Systems Design", "Game Design", "Roblox", "Unity"],
  role: "#Systems Design | #Roblox → #Unity | In development",
  summary: "A game about saving the world by cutting meat. Coming soon.",
  images: ["/images/meat-hero/card.png"],
  // A standalone site for this project is planned; link it here once it exists.
  modalComponent: "MeatHeroTOC",
  modalTitle: "How to Be a Meat Hero: The redesign",
  order: 6,
};

export default meatHero;
