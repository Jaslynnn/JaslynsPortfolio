"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { ProjectCard } from "@/components/sections/project-card";
import { workCaseStudies } from "@/content/work";

export function WorkGrid({
  limit,
  viewMoreHref,
  heading = "Work",
}: {
  limit?: number;
  viewMoreHref?: string;
  heading?: string;
}) {
  const studies = limit ? workCaseStudies.slice(0, limit) : workCaseStudies;

  return (
    <div
      id="portfolio"
      className="w-full max-w-7xl mx-auto mt-0 py-0 px-4 md:px-8 md:my-20 md:py-20"
    >
      {heading && <CardTitle>{heading}</CardTitle>}

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-2xl mx-auto lg:max-w-none">
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
