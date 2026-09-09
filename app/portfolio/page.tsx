import { redirect } from "next/navigation";

// The old combined portfolio is now split into /work and /play.
export default function PortfolioPage() {
  redirect("/work");
}
