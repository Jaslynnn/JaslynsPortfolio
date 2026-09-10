"use client";
import React from "react";
import { CardTitle } from "@/components/ui/card";
import { ProjectCard } from "@/components/sections/project-card";
import { playCaseStudies } from "@/content/play";

export function PlayGrid({
  heading = "Play",
  subheading,
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-10 lg:px-16 py-10 md:py-16">
      {(heading || subheading) && (
        <div className="text-center">
          {heading && <CardTitle>{heading}</CardTitle>}
          {subheading && (
            <p className="mt-3 mx-auto max-w-3xl text-neutral-400">{subheading}</p>
          )}
        </div>
      )}

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 max-w-2xl mx-auto lg:max-w-none">
        {playCaseStudies.map((study) => (
          <ProjectCard key={study.slug} study={study} />
        ))}
      </div>
      <br />
    </div>
  );
}
