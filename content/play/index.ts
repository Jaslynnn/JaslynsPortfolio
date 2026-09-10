import type { CaseStudy } from "@/content/types";
import plantFeelings from "./plant-feelings";
import kindergarden from "./kindergarden";
import adblocker from "./adblocker";
import toFloat from "./to-float";
import runesoap from "./runesoap";
import bestseller from "./bestseller";
import twentyOhNine from "./2009";
import twentyOhNinePattern from "./2009-pattern";
import sushiVendingMachine from "./sushi-vending-machine";
import sushiCards from "./sushi-cards";
import immeta from "./immeta";

export const playCaseStudies: CaseStudy[] = [
  plantFeelings,
  kindergarden,
  adblocker,
  toFloat,
  runesoap,
  bestseller,
  twentyOhNine,
  twentyOhNinePattern,
  sushiVendingMachine,
  sushiCards,
  immeta,
].sort((a, b) => a.order - b.order);
