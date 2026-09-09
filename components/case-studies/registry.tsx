import React from "react";
import { BreakingInteractionTOC } from "./breaking-interaction";
import { FallingAngelTOC } from "./falling-angel";
import { PlantFeelingsTOC } from "./plant-feelings";
import { GlooToolingTOC } from "./gloo-tooling";
import { MeatHeroTOC } from "./meat-hero";

// Maps a CaseStudy.modalComponent string to its "How it was made" pop-up body.
export const caseStudyModals: Record<string, React.ComponentType> = {
  BreakingInteractionTOC,
  FallingAngelTOC,
  PlantFeelingsTOC,
  GlooToolingTOC,
  MeatHeroTOC,
};
