import { redirect } from "next/navigation";

// The old combined portfolio is now split into /work and /craft.
export default function PortfolioPage() {
  redirect("/work");
}
