import type { CaseStudy } from "@/content/types";
import prAgencyWebsite from "./pr-agency-website";
import prWorkflowTooling from "./pr-workflow-tooling";
import immeta from "./immeta";

export const workCaseStudies: CaseStudy[] = [
  prAgencyWebsite,
  prWorkflowTooling,
  immeta,
].sort((a, b) => a.order - b.order);
