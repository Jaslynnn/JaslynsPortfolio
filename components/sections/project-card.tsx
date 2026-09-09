"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { ModalButton } from "@/components/ui/modal-button";
import { caseStudyModals } from "@/components/case-studies/registry";
import type { CaseStudy } from "@/content/types";

// Extracts the id from ...watch?v=ID style URLs used in the content files.
function youtubeEmbed(url?: string): string | null {
  if (!url || !url.includes("youtube.com")) return null;
  const id = url.split("v=")[1]?.split(/[?&/]/)[0];
  return id ? `https://www.youtube.com/embed/${id}` : null;
}

const tryLabel = (url: string) =>
  /itch\.io|github\.io/.test(url) ? "Try it!" : "Visit";

// One card used by both the Work and Craft grids: the dark Work card shell
// (glow border, consistent sizing) with the Craft text layout
// (title / tag line / one-line summary) stacked under the media.
export function ProjectCard({ study }: { study: CaseStudy }) {
  const embed = youtubeEmbed(study.video);
  const image = study.images[0];
  const Modal = study.modalComponent
    ? caseStudyModals[study.modalComponent]
    : undefined;
  const href = study.link ?? study.externalUrl;

  return (
    <Card className="w-full">
      {embed ? (
        <div className="relative w-full aspect-video">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={embed}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={study.title}
          />
        </div>
      ) : image ? (
        <div className="relative w-full aspect-video bg-neutral-900">
          <Image
            src={image}
            alt={study.title}
            fill
            className="object-contain select-none"
            draggable={false}
          />
        </div>
      ) : (
        <div className="flex w-full aspect-video items-center justify-center bg-neutral-900 text-xs text-neutral-600">
          Image coming soon
        </div>
      )}

      <CardContent className="flex flex-1 flex-col gap-2">
        <CardTitle>{study.title}</CardTitle>
        {study.tags[0] && (
          <p className="text-sm text-neutral-400">#{study.tags[0]}</p>
        )}
        <CardDescription className="mt-0">{study.summary}</CardDescription>

        {(href || Modal) && (
          <div className="mt-auto flex flex-wrap gap-3 pt-4">
            {href && (
              <Button
                as={Link}
                href={href}
                target="_blank"
                variant="primary"
                className="w-fit h-fit font-light text-sm rounded-3xl bg-white/1 hover:bg-white/30 text-white border-0"
              >
                {tryLabel(href)}
              </Button>
            )}
            {Modal && (
              <ModalButton
                buttonLabel="How it was made"
                modalTitle={study.modalTitle ?? study.title}
              >
                <div className="bg-black drop-shadow-[0_5px_5px_rgba(0,0,0,100)]">
                  <div className="max-h-[56vh] overflow-y-hidden">
                    <Modal />
                  </div>
                </div>
              </ModalButton>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
