import type { CaseStudy } from "@/content/types";

const glooTooling: CaseStudy = {
  title: "Gloo Communications Tooling",
  slug: "gloo-tooling",
  section: "work",
  tags: ["Production Tooling", "Internal Tools", "Web", "Custom AI Workflows"],
  role: "Gloo Communications Pte. Ltd. | Internship + freelance",
  summary:
    "Internal tooling for a PR agency — timeline generators, email automation, and a company-site rebuild.",
  // No dedicated Gloo image yet — using the shared placeholder until one is supplied.
  images: ["/images/placeholder.svg"],
  externalUrl: "https://gloopr.biz",
  modalComponent: "GlooToolingTOC",
  modalTitle: "Gloo Communications: How it was made",
  order: 10,
};

export default glooTooling;
