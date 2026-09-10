"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { ProjectCard } from "@/components/sections/project-card";
import { workCaseStudies } from "@/content/work";
import type { CaseStudy } from "@/content/types";

export function WorkGrid({
  limit,
  viewMoreHref,
  heading = "Work",
  subheading,
  studies: studiesProp,
}: {
  limit?: number;
  viewMoreHref?: string;
  heading?: string;
  subheading?: string;
  /** Override which case studies to show (e.g. a curated "featured" set). */
  studies?: CaseStudy[];
}) {
  const source = studiesProp ?? workCaseStudies;
  const studies = limit ? source.slice(0, limit) : source;

  return (
    <div
      id="portfolio"
      className="w-full max-w-[1600px] mx-auto px-4 md:px-10 lg:px-16 py-10 md:py-16"
    >
      {heading && <CardTitle>{heading}</CardTitle>}
      {subheading && (
        <p className="mt-2 max-w-xl text-neutral-400">{subheading}</p>
      )}

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 max-w-2xl mx-auto lg:max-w-none">
        {studies.map((study) => (
          <ProjectCard key={study.slug} study={study} />
        ))}
      </div>

      {viewMoreHref && (
        <div className="flex align-middle justify-end">
          <Button
            as={Link}
            href={viewMoreHref}
            variant="secondary"
            className="mt-3 mb-2 font-light text-sm md:block rounded-3xl bg-white/1 hover:bg-white/30 text-white border-0 text-center underline underline-offset-4"
          >
            View More
          </Button>
        </div>
      )}
      <br />
    </div>
  );
}
