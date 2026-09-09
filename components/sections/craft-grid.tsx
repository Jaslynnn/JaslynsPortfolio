"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { craftCaseStudies } from "@/content/craft";
import type { CaseStudy } from "@/content/types";

// Extracts the YouTube id from the ...watch?v=ID style URLs used in the content files.
function youtubeEmbed(url?: string): string | null {
  if (!url || !url.includes("youtube.com")) return null;
  const id = url.split("v=")[1];
  return id ? `https://www.youtube.com/embed/${id}` : null;
}

function CraftCard({ study }: { study: CaseStudy }) {
  const embed = youtubeEmbed(study.video);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col p-4 rounded-2xl h-full border border-gray-400 bg-white relative"
    >
      {embed ? (
        <div className="w-full h-0 pb-[56.25%] relative">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-md border-none"
            src={embed}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={study.title}
          />
        </div>
      ) : (
        <Image
          src={study.images[0] ?? "/images/placeholder.svg"}
          alt={study.title}
          width={400}
          height={500}
          className="w-full rounded-b-md object-contain"
          draggable={false}
        />
      )}

      <div className="flex items-center gap-4 mb-1">
        <div>
          <h3 className="text-xl font-semibold text-white pl-4 pt-2">
            {study.title}
          </h3>
          {study.role && (
            <p className="text-md text-neutral-400 pl-4 pt-2 pb-2">{study.role}</p>
          )}
        </div>
      </div>

      <p className="text-sm text-neutral-300 leading-relaxed pl-4">
        {study.summary}
      </p>

      {study.link && (
        <div className="flex ml-4 mt-4 mb-4 flex-row gap-4 w-full justify-start items-center m-auto">
          <Button
            as={Link}
            href={study.link}
            target="_blank"
            variant="primary"
            className="w-fit h-fit font-light text-sm md:block rounded-3xl bg-white/1 hover:bg-white/30 text-white border-0 text-center"
          >
            Try now
          </Button>
        </div>
      )}
    </motion.div>
  );
}

export function CraftGrid({ heading = "Craft" }: { heading?: string }) {
  return (
    <div className="w-full max-w-7xl mx-auto my-10 lg:py-20 py-10 px-7 lg:px-8">
      {heading && (
        <h2 className="text-3xl text-center lg:text-left md:text-6xl text-white leading-tight mb-8">
          {heading}
        </h2>
      )}
      <div className="w-full grid gap-12 grid-cols-1 lg:grid-cols-2">
        {craftCaseStudies.map((study) => (
          <div
            key={study.slug}
            className={
              craftCaseStudies.indexOf(study) % 2 === 0 ? "" : "lg:mt-12"
            }
          >
            <CraftCard study={study} />
          </div>
        ))}
      </div>
    </div>
  );
}
