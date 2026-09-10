// Shared shape for Work and Play case-study content.
// One file per project under content/work or content/play, named by kebab-case slug.

export interface CaseStudy {
  /** Display title, e.g. "How to Be a Meat Hero" */
  title: string;
  /** kebab-case slug — matches the file name and the public/images subfolder */
  slug: string;
  /** Which grid this piece belongs to */
  section: "work" | "play";
  /** Short descriptors shown as hashtags on the card, e.g. ["Unity", "Maya"] */
  tags: string[];
  /** The role/context line as it currently reads on the card (kept verbatim from the old grid) */
  role?: string;
  /** One or two sentences shown on the card before click-through */
  summary: string;
  /** Ordered image paths relative to /public — first entry is the card image */
  images: string[];
  /**
   * How the card image fills its 16:9 slot. Default "cover" (fills, may crop
   * edges). Use "contain" for square/portrait art that shouldn't be cropped.
   */
  fit?: "cover" | "contain";
  /** Optional hero/preview video: a YouTube embed URL or a path under /public/videos */
  video?: string;
  /** Optional "Try it" / play link */
  link?: string;
  /** Optional external link to a dedicated project site */
  externalUrl?: string;
  /**
   * Name of the React component that renders this piece's "How it was made" pop-up body,
   * from components/case-studies. Absent = no pop-up.
   */
  modalComponent?: string;
  /** Modal heading text, when the pop-up title differs from the plain title */
  modalTitle?: string;
  /** Sort order within its grid — lower shows first */
  order: number;
}
