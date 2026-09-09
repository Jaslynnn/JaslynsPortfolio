"use client";
import React from "react";
import { CardTitle } from "@/components/ui/card";
import { ProjectCard } from "@/components/sections/project-card";
import { craftCaseStudies } from "@/content/craft";

export function CraftGrid({ heading = "Craft" }: { heading?: string }) {
  return (
    <div className="w-full max-w-7xl mx-auto mt-0 py-0 px-4 md:px-8 md:my-20 md:py-20">
      {heading && <CardTitle>{heading}</CardTitle>}

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-2xl mx-auto lg:max-w-none">
        {craftCaseStudies.map((study) => (
          <ProjectCard key={study.slug} study={study} />
        ))}
      </div>
      <br />
    </div>
  );
}
