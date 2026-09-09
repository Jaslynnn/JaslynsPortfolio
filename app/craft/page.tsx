import { redirect } from "next/navigation";

// "Craft" was renamed to "Play"; keep the old path working.
export default function CraftPage() {
  redirect("/play");
}
