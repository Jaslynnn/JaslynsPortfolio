import type { CaseStudy } from "@/content/types";
import glooTooling from "./gloo-tooling";
import homewrecker from "./homewrecker";
import fallingAngel from "./falling-angel";
import plantFeelings from "./plant-feelings";
import kindergarden from "./kindergarden";

// How to Be a Meat Hero (order 20) is net-new content added in a later step.
export const workCaseStudies: CaseStudy[] = [
  glooTooling,
  homewrecker,
  fallingAngel,
  plantFeelings,
  kindergarden,
].sort((a, b) => a.order - b.order);
