import type { CaseStudy } from "@/content/types";
import prAgencyWebsite from "./pr-agency-website";
import prWorkflowTooling from "./pr-workflow-tooling";
import immeta from "./immeta";
import meatHero from "./meat-hero";
import kindergarden from "./kindergarden";

export const workCaseStudies: CaseStudy[] = [
  prAgencyWebsite,
  prWorkflowTooling,
  immeta,
  meatHero,
  kindergarden,
].sort((a, b) => a.order - b.order);
