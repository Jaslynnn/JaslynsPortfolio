import type { CaseStudy } from "@/content/types";
import homewrecker from "./homewrecker";
import fallingAngel from "./falling-angel";
import plantFeelings from "./plant-feelings";
import kindergarden from "./kindergarden";

// Gloo Communications tooling (order 10) and How to Be a Meat Hero (order 20)
// are net-new content added in later steps of the refresh.
export const workCaseStudies: CaseStudy[] = [
  homewrecker,
  fallingAngel,
  plantFeelings,
  kindergarden,
].sort((a, b) => a.order - b.order);
