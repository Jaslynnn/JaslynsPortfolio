"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Shared "How it was made" pop-up used by the two client-work case studies
// (PR Agency Website, PR Workflow Tooling).

const textStyle =
    "inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]";
const headingStyle = cn("text-3xl font-bold mb-4", textStyle);
const mainStyle = cn(
    "flex-1 min-w-0 scrollbar overflow-y-auto px-5 md:px-12 py-8 text-center text-white",
    textStyle
);
const sectionCls = cn("mb-12 last:mb-0 text-center", textStyle);

export function Figure({
    src,
    alt,
    caption,
    w,
    h,
    tall,
    className,
}: {
    src: string;
    alt: string;
    caption: string;
    w: number;
    h: number;
    tall?: boolean;
    className?: string;
}) {
    return (
        <figure className={cn("mx-auto my-6 max-w-2xl", className)}>
            <Image
                src={src}
                alt={alt}
                width={w}
                height={h}
                className={cn(
                    "w-full rounded-lg border border-white/5 bg-white/[0.02]",
                    tall ? "max-h-[420px] object-cover object-top" : "h-auto"
                )}
            />
            <figcaption className="mt-2 text-sm text-neutral-400">{caption}</figcaption>
        </figure>
    );
}

type Section = { id: string; title: string; content: React.ReactNode };

function TocModal({
    title,
    sections,
    thumbnail,
}: {
    title: string;
    sections: Section[];
    thumbnail?: { src: string; alt: string; w: number; h: number };
}) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const els = useRef<Record<string, HTMLElement | null>>({});
    const [active, setActive] = useState(sections[0]?.id);

    const scrollTo = useCallback((id: string) => {
        const c = scrollRef.current;
        const s = els.current[id];
        if (!c || !s) return;
        c.scrollTo({ top: s.offsetTop, behavior: "smooth" });
        setActive(id);
    }, []);

    useEffect(() => {
        const c = scrollRef.current;
        if (!c) return;
        const onScroll = () => {
            let cur = sections[0]?.id;
            for (const s of sections) {
                const el = els.current[s.id];
                if (el && c.scrollTop >= el.offsetTop - 120) cur = s.id;
            }
            setActive(cur);
        };
        c.addEventListener("scroll", onScroll);
        onScroll();
        return () => c.removeEventListener("scroll", onScroll);
    }, [sections]);

    return (
        <div className="flex max-h-[68vh] w-full">
            {/* TOC */}
            <div className="sticky top-0 z-50 max-w-96 max-[800px]:hidden px-6 py-6 border-r border-white/5">
                <h2 className="text-lg font-extrabold tracking-wide mb-4">{title}</h2>
                {thumbnail && (
                    <Image
                        src={thumbnail.src}
                        alt={thumbnail.alt}
                        width={thumbnail.w}
                        height={thumbnail.h}
                        className="w-full max-w-[300px] rounded-lg border border-white/5 select-none"
                        draggable={false}
                    />
                )}
                <ul className="space-y-4 py-4">
                    {sections.map((s) => (
                        <li
                            key={s.id}
                            onClick={() => scrollTo(s.id)}
                            className={cn(
                                "cursor-pointer text-sm transition-all rounded px-2 -mx-2 py-1",
                                active === s.id
                                    ? "font-semibold text-white bg-white/[0.07]"
                                    : "text-neutral-400 hover:text-white"
                            )}
                        >
                            {s.title}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Content */}
            <main ref={scrollRef} className={mainStyle}>
                {sections.map((s) => (
                    <section
                        key={s.id}
                        ref={(el) => {
                            els.current[s.id] = el;
                        }}
                        className={sectionCls}
                    >
                        <h2 className={headingStyle}>{s.title}</h2>
                        {s.content}
                    </section>
                ))}
            </main>
        </div>
    );
}

export function PrAgencyWebsiteTOC() {
    return (
        <TocModal
            title="PR Agency Website"
            thumbnail={{
                src: "/images/pr-agency-website/card.png",
                alt: "The rebuilt company website homepage",
                w: 1194,
                h: 708,
            }}
            sections={[
                {
                    id: "origin",
                    title: "How it started",
                    content: (
                        <p className={textStyle}>
                            The agency brought me in for one thing: redesign their website.
                            It went well, and the scope kept growing from there &mdash; but
                            the site itself was the starting point.
                        </p>
                    ),
                },
                {
                    id: "process",
                    title: "From paper to launch",
                    content: (
                        <>
                            <p className={textStyle}>
                                The new company website was a complete build from scratch
                                &mdash; starting from sketches on paper and ending with a
                                full working site, hosted on the client&rsquo;s existing
                                hosting service.
                            </p>

                            <Figure
                                src="/images/pr-agency-website/website-sketch.webp"
                                alt="Hand-drawn wireframe sketches of the website pages on paper"
                                w={681}
                                h={936}
                                caption="1 · Sketches. The client handed over content and rough page flows on paper — webpage flow, featured work, media wall, contact. Everything started here."
                            />
                            <Figure
                                src="/images/pr-agency-website/website-redesign.webp"
                                alt="A Figma canvas showing about twenty wireframe iterations of the homepage"
                                w={1568}
                                h={733}
                                caption="2 · Redesign. Wireframe-first in Figma, iterating layout and hierarchy across roughly twenty frames before any styling went on."
                            />
                            <Figure
                                src="/images/pr-agency-website/stakeholder-critiques.webp"
                                alt="Six dated review rounds of the homepage side by side with margin notes"
                                w={1568}
                                h={450}
                                caption="3 · Stakeholder critiques. Weekly review rounds with the team from mid-May to late June — each version marked up and revised against feedback."
                            />

                            <p className={textStyle}>Before and after:</p>
                            <div className="mx-auto my-6 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
                                <Figure
                                    src="/images/pr-agency-website/website-before.webp"
                                    alt="Full-page screenshot of the old website"
                                    w={199}
                                    h={1568}
                                    tall
                                    className="my-0"
                                    caption="Before — the site they had."
                                />
                                <Figure
                                    src="/images/pr-agency-website/website-after.png"
                                    alt="Full-page screenshot of the new site built from scratch"
                                    w={1194}
                                    h={4949}
                                    tall
                                    className="my-0"
                                    caption="After — the new site, built from scratch and now live."
                                />
                            </div>
                        </>
                    ),
                },
            ]}
        />
    );
}

export function PrWorkflowToolingTOC() {
    return (
        <TocModal
            title="PR Workflow Tooling"
            thumbnail={{
                src: "/images/pr-workflow-tooling/card.png",
                alt: "A client-ready Gantt timeline generated by the Timeline Builder",
                w: 1134,
                h: 715,
            }}
            sections={[
                {
                    id: "origin",
                    title: "How it started",
                    content: (
                        <p className={textStyle}>
                            The website redesign was going well, so the scope grew. The
                            founder asked whether client timelines could look
                            &ldquo;nicer&rdquo; &mdash; expecting a Canva template. I built a
                            generative tool instead. Once people saw it in use, they brought
                            me their own workflow problems, and each turned into another
                            tool.
                        </p>
                    ),
                },
                {
                    id: "timeline-builder",
                    title: "Timeline Builder",
                    content: (
                        <>
                            <p className={cn("text-left", textStyle)}>
                                <b>The problem.</b> Client timelines were rebuilt by hand for
                                every project &mdash; slow to make, inconsistent from one
                                deck to the next, and dependent on whoever happened to be
                                formatting it that week.
                            </p>
                            <p className={cn("mt-4 text-left", textStyle)}>
                                <b>The fix.</b> A generative tool. An account lead types in
                                the tasks, owners and dates; the client-ready Gantt PDF draws
                                itself, with a CSV export alongside. It&rsquo;s a single
                                self-contained HTML file, so the client&rsquo;s data never
                                leaves that person&rsquo;s own computer.
                            </p>

                            <Figure
                                src="/images/pr-workflow-tooling/timeline-builder.webp"
                                alt="The Timeline Builder tool with a project form and the generated Gantt PDF below it"
                                w={1220}
                                h={980}
                                caption="Fill in the project details and tasks; the client-ready Gantt PDF renders underneath. Export CSV hands the tasks to the Internal Timeline; Import CSV pulls a selection back."
                            />
                        </>
                    ),
                },
                {
                    id: "internal-timeline",
                    title: "Internal Timeline",
                    content: (
                        <>
                            <p className={cn("text-left", textStyle)}>
                                <b>The problem.</b> Every project&rsquo;s timeline lived on
                                its own. There was no single view of what was due across all
                                the clients at once, so cross-project load and clashing
                                deadlines only surfaced late. Pooling everything into one
                                shared document would have meant centralising client data.
                            </p>
                            <p className={cn("mt-4 text-left", textStyle)}>
                                <b>The fix.</b> It imports the CSV exports from any number of
                                Timeline Builder files into one combined, sortable deadline
                                list and cross-project Gantt. Dates stay editable in place.
                                Same self-contained HTML approach &mdash; no central
                                database, each person&rsquo;s copy stays local. Ticking a
                                subset of tasks exports them back to CSV to build one
                                client&rsquo;s PDF.
                            </p>

                            <Figure
                                src="/images/pr-workflow-tooling/internal-timeline.webp"
                                alt="The Internal Timeline tool: CSV upload, a combined editable deadline list, and a cross-project Gantt below"
                                w={812}
                                h={1483}
                                tall
                                caption="Upload the per-project CSVs, and every client's deadlines land in one editable list plus a colour-by-project Gantt. Sort by date, project or owner; print the whole cross-project view to PDF."
                            />
                        </>
                    ),
                },
                {
                    id: "mass-email",
                    title: "Mass-email tool",
                    content: (
                        <>
                            <p className={cn("text-left", textStyle)}>
                                <b>The problem.</b> Client and media emails went out one by
                                one, or through a mail-merge that fell out of sync locally
                                and gave no way to tell which messages actually landed.
                            </p>
                            <p className={cn("mt-4 text-left", textStyle)}>
                                <b>The fix</b> <i>(in progress)</i>. A personalised
                                mass-email tool that keeps its data in sync and tracks
                                bounces, so a send is auditable.
                            </p>
                        </>
                    ),
                },
                {
                    id: "resources",
                    title: "AI tooling & what it took",
                    content: (
                        <p className={textStyle}>
                            AI tooling ran throughout for prototyping and drafting wherever
                            it sped up iteration. Beyond that, the work needed alignment with
                            the leads on priority and scope, and buy-in from account leads on
                            what client data could safely be shared across tools.
                        </p>
                    ),
                },
            ]}
        />
    );
}
