import type { CaseStudy } from "@/content/types";
import homewrecker from "./homewrecker";
import fallingAngel from "./falling-angel";
import adblocker from "./adblocker";
import meatHero from "./meat-hero";
import kindergarden from "./kindergarden";
import plantFeelings from "./plant-feelings";
import toFloat from "./to-float";
import runesoap from "./runesoap";
import bestseller from "./bestseller";
import twentyOhNine from "./2009";
import twentyOhNinePattern from "./2009-pattern";
import sushiVendingMachine from "./sushi-vending-machine";
import sushiCards from "./sushi-cards";

export const playCaseStudies: CaseStudy[] = [
  homewrecker,
  fallingAngel,
  adblocker,
  meatHero,
  kindergarden,
  plantFeelings,
  toFloat,
  runesoap,
  bestseller,
  twentyOhNine,
  twentyOhNinePattern,
  sushiVendingMachine,
  sushiCards,
].sort((a, b) => a.order - b.order);
