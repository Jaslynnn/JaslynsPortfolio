import type { CaseStudy } from "@/content/types";
import adblocker from "./adblocker";
import plantFeelings from "./plant-feelings";
import toFloat from "./to-float";
import runesoap from "./runesoap";
import homewrecker from "./homewrecker";
import fallingAngel from "./falling-angel";
import bestseller from "./bestseller";
import twentyOhNine from "./2009";
import twentyOhNinePattern from "./2009-pattern";
import sushiVendingMachine from "./sushi-vending-machine";
import sushiCards from "./sushi-cards";
import immeta from "./immeta";

export const playCaseStudies: CaseStudy[] = [
  adblocker,
  plantFeelings,
  toFloat,
  runesoap,
  homewrecker,
  fallingAngel,
  bestseller,
  twentyOhNine,
  twentyOhNinePattern,
  sushiVendingMachine,
  sushiCards,
  immeta,
].sort((a, b) => a.order - b.order);
