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
                    id: "tools",
                    title: "The tools",
                    content: (
                        <>
                            <div className="flex flex-wrap items-center justify-center">
                                <ul
                                    className={cn(
                                        "space-y-3 py-4 px-4 text-left list-disc list-inside",
                                        textStyle
                                    )}
                                >
                                    <li>
                                        <b>Timeline Builder</b> <i>(built)</i> &mdash; turns a
                                        project&rsquo;s tasks, owners and dates into a
                                        client-ready Gantt PDF and CSV, all offline in a
                                        single HTML file.
                                    </li>
                                    <li>
                                        <b>Internal Timeline</b> <i>(built)</i> &mdash; merges
                                        those CSV exports into one sortable cross-project view
                                        for the team, without centralising client data.
                                    </li>
                                    <li>
                                        <b>Mass-email tool</b> <i>(in progress)</i> &mdash;
                                        personalised client and media email that fixes
                                        local-sync and bounce-tracking pain.
                                    </li>
                                </ul>
                            </div>

                            <Figure
                                src="/images/pr-workflow-tooling/timeline-builder.webp"
                                alt="The Timeline Builder tool with a project form and the generated Gantt PDF below it"
                                w={1220}
                                h={980}
                                caption="The Timeline Builder in use: an account lead fills in project details and tasks, and the client-ready Gantt PDF draws itself underneath. Export CSV hands the tasks to the cross-project Internal Timeline; Import CSV pulls a selection back the other way."
                            />
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
