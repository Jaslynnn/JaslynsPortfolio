import type { CaseStudy } from "@/content/types";
import prAgencyWebsite from "./pr-agency-website";
import prWorkflowTooling from "./pr-workflow-tooling";
import homewrecker from "./homewrecker";
import meatHero from "./meat-hero";
import fallingAngel from "./falling-angel";

export const workCaseStudies: CaseStudy[] = [
  prAgencyWebsite,
  prWorkflowTooling,
  homewrecker,
  meatHero,
  fallingAngel,
].sort((a, b) => a.order - b.order);
