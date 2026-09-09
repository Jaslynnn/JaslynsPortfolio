import type { CaseStudy } from "@/content/types";

// Covers the "Sushi Vending Machine" and its "Isometric Sushi Cards"
// (grouped as "Sushi Vending Machine + Sushi Cards" in the Craft list).
const sushiVendingMachine: CaseStudy = {
  title: "Sushi Vending Machine",
  slug: "sushi-vending-machine",
  section: "craft",
  tags: ["Illustrator"],
  role: "#Illustrator",
  summary:
    "A sushi vending machine that sells isometric sushi, with a set of cards used to buy from it.",
  images: ["/SushiMachine.png", "/SushiCards.png"],
  order: 60,
};

export default sushiVendingMachine;
