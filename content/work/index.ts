import type { CaseStudy } from "@/content/types";
import glooTooling from "./gloo-tooling";
import meatHero from "./meat-hero";
import homewrecker from "./homewrecker";
import fallingAngel from "./falling-angel";
import plantFeelings from "./plant-feelings";
import kindergarden from "./kindergarden";

export const workCaseStudies: CaseStudy[] = [
  glooTooling,
  meatHero,
  homewrecker,
  fallingAngel,
  plantFeelings,
  kindergarden,
].sort((a, b) => a.order - b.order);
