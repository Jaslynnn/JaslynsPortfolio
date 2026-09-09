import type { CaseStudy } from "@/content/types";

const meatHero: CaseStudy = {
  title: "How to Be a Meat Hero",
  slug: "meat-hero",
  section: "work",
  tags: ["Systems Design", "Game Design", "Roblox", "Unity"],
  role: "#Systems Design | #Roblox → #Unity | In development",
  summary:
    "A systems-driven butchery game, growing from a Roblox hackathon prototype into a Unity build. Coming soon.",
  // No dedicated image yet — using the shared placeholder.
  images: ["/images/placeholder.svg"],
  // A standalone site for this project is planned; link it here once it exists.
  modalComponent: "MeatHeroTOC",
  modalTitle: "How to Be a Meat Hero: The redesign",
  order: 20,
};

export default meatHero;
