"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { ModalButton } from "@/components/ui/modal-button";
import { caseStudyModals } from "@/components/case-studies/registry";
import { workCaseStudies } from "@/content/work";
import type { CaseStudy } from "@/content/types";

const tryLabel = (url: string) =>
  /itch\.io|github\.io/.test(url) ? "Try it!" : "Visit";

function WorkCard({ study }: { study: CaseStudy }) {
  const Modal = study.modalComponent
    ? caseStudyModals[study.modalComponent]
    : undefined;
  const href = study.link ?? study.externalUrl;

  return (
    <Card className="relative isolate w-full overflow-hidden px-4 py-20 md:py-40 pt-10 md:pt-8 lg:px-4">
      <div>
        <Image
          src={study.images[0] ?? "/images/placeholder.svg"}
          alt={study.title}
          width={400}
          height={500}
          className="w-full max-w-[700px] object-contain select-none filter"
          draggable={false}
        />
      </div>
      <CardContent className="relative mb-3">
        <CardTitle>{study.title}</CardTitle>
        <CardDescription>
          {study.role && (
            <>
              <i className="text-sm">{study.role}</i>
              <br />
            </>
          )}
          {study.summary}
        </CardDescription>
        <div className="flex flex-wrap justify-items-start gap-3 mt-4 my-6">
          {href && (
            <Button
              as={Link}
              href={href}
              target="_blank"
              variant="primary"
              className="w-fit h-fit font-light text-sm md:block rounded-3xl bg-white/1 hover:bg-white/30 text-white border-0 text-center"
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
      </CardContent>
    </Card>
  );
}

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

      <div className="mt-2 grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-2xl mx-auto lg:max-w-none">
        {studies.map((study) => (
          <WorkCard key={study.slug} study={study} />
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
