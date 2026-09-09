import type { CaseStudy } from "@/content/types";
import adblocker from "./adblocker";
import toFloat from "./to-float";
import runesoap from "./runesoap";
import bestseller from "./bestseller";
import twentyOhNine from "./2009";
import sushiVendingMachine from "./sushi-vending-machine";
import immeta from "./immeta";

export const craftCaseStudies: CaseStudy[] = [
  adblocker,
  toFloat,
  runesoap,
  bestseller,
  twentyOhNine,
  sushiVendingMachine,
  immeta,
].sort((a, b) => a.order - b.order);
