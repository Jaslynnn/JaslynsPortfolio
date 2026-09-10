import type { CaseStudy } from "@/content/types";
import prAgencyWebsite from "./pr-agency-website";
import prWorkflowTooling from "./pr-workflow-tooling";
import homewrecker from "./homewrecker";
import meatHero from "./meat-hero";
import fallingAngel from "./falling-angel";
import plantFeelings from "./plant-feelings";
import kindergarden from "./kindergarden";

export const workCaseStudies: CaseStudy[] = [
  prAgencyWebsite,
  prWorkflowTooling,
  homewrecker,
  meatHero,
  fallingAngel,
  plantFeelings,
  kindergarden,
].sort((a, b) => a.order - b.order);
