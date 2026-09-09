// Shared shape for Work and Craft case-study content.
// One file per project under content/work or content/craft, named by kebab-case slug.

export interface CaseStudyFrontmatter {
  /** Display title, e.g. "How to Be a Meat Hero" */
  title: string;
  /** kebab-case slug — matches the file name and the public/images subfolder */
  slug: string;
  /** Which grid this piece belongs to */
  section: "work" | "craft";
  /** Short descriptors, e.g. ["Production Tooling", "Unity"] */
  tags: string[];
  /** One or two sentences shown on the card before click-through */
  summary: string;
  /** Longer card-level narrative (plain language, pre-modal) */
  description?: string;
  /** Ordered image paths relative to /public — first entry is the card image */
  images: string[];
  /** Optional hero/preview video path relative to /public */
  video?: string;
  /** Whether this piece has a "How it was made" pop-up */
  hasModal?: boolean;
  /** Optional external link, e.g. a dedicated project site */
  externalUrl?: string;
  /** Sort order within its grid — lower shows first */
  order: number;
}

export interface CaseStudy extends CaseStudyFrontmatter {
  /** Rendered body / modal content */
  body: string;
}
