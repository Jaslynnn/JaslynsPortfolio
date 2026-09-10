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

function ProblemFix({
    problem,
    fix,
    outcome,
    fixLabel = "Fix",
    className,
}: {
    problem: string[];
    fix: React.ReactNode[];
    outcome?: React.ReactNode[];
    fixLabel?: string;
    className?: string;
}) {
    return (
        <div className={cn("space-y-4 text-left", className)}>
            <div>
                <p className={cn("font-bold", textStyle)}>Problem</p>
                <ul className={cn("mt-1 list-disc pl-5 space-y-1", textStyle)}>
                    {problem.map((p, i) => (
                        <li key={i}>{p}</li>
                    ))}
                </ul>
            </div>
            <div>
                <p className={cn("font-bold", textStyle)}>{fixLabel}</p>
                <ul className={cn("mt-1 list-disc pl-5 space-y-1", textStyle)}>
                    {fix.map((f, i) => (
                        <li key={i}>{f}</li>
                    ))}
                </ul>
            </div>
            {outcome && outcome.length > 0 && (
                <div>
                    <p className={cn("font-bold", textStyle)}>Outcome</p>
                    <ul className={cn("mt-1 list-disc pl-5 space-y-1", textStyle)}>
                        {outcome.map((o, i) => (
                            <li key={i}>{o}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
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
                            the site itself was the starting point. AI tools were used
                            throughout the process, for drafting content and speeding up
                            iteration.
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

                            <p className={cn("mt-6 text-left", textStyle)}>
                                <b>Outcome.</b> The agency&rsquo;s first purpose-built
                                website &mdash; a single-page static site they fully own,
                                on hosting they already had, replacing the old template
                                build. It became the anchor for the tooling work that
                                followed.
                            </p>
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
                            tool. AI tools were used throughout the process, for prototyping
                            and speeding up iteration.
                        </p>
                    ),
                },
                {
                    id: "timeline-builder",
                    title: "Timeline Builder",
                    content: (
                        <>
                            <ProblemFix
                                className="mx-auto max-w-xl"
                                problem={[
                                    "Client timelines rebuilt by hand for every project",
                                    "Slow, and inconsistent from one deck to the next",
                                ]}
                                fix={[
                                    "Enter tasks, owners and dates — the client-ready Gantt PDF and CSV draw themselves",
                                    "One self-contained HTML file; client data never leaves the user's computer",
                                ]}
                                outcome={[
                                    "Making a client timeline went from a manual formatting job to filling in a form",
                                    "Account leads produce them directly — no designer in the loop",
                                    "Every timeline comes out in the same house style",
                                    // TODO: add a real before/after time figure when available
                                ]}
                            />

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
                            <ProblemFix
                                className="mx-auto max-w-xl"
                                problem={[
                                    "Each project's timeline lived on its own",
                                    "No cross-project view of deadlines or load — clashes surfaced late",
                                    "One shared doc would mean pooling client data",
                                ]}
                                fix={[
                                    "Imports the per-project CSVs into one editable deadline list and colour-by-project Gantt",
                                    "Sort by date, project or owner; print the combined view to PDF",
                                    "Still self-contained HTML — no central database, each copy stays local",
                                ]}
                                outcome={[
                                    "The team can see every client's deadlines in one place for the first time",
                                    "Clashing dates and overloaded weeks show up before they become a problem",
                                    "Achieved without any client data leaving each person's machine",
                                ]}
                            />

                            <figure className="mx-auto my-6 max-w-2xl">
                                <Image
                                    src="/images/pr-workflow-tooling/internal-timeline.webp"
                                    alt="The combined cross-project Gantt chart produced by the Internal Timeline"
                                    width={812}
                                    height={1483}
                                    className="h-[460px] w-full rounded-lg border border-white/5 bg-white/[0.02] object-cover object-bottom"
                                />
                                <figcaption className="mt-2 text-sm text-neutral-400">
                                    The combined cross-project Gantt the tool produces from
                                    every client's data — bars coloured by project.
                                </figcaption>
                            </figure>
                        </>
                    ),
                },
                {
                    id: "mass-email",
                    title: "Mass-email tool",
                    content: (
                        <>
                            <ProblemFix
                                className="mx-auto max-w-xl"
                                fixLabel="Fix (in progress)"
                                problem={[
                                    "Ran on a paid external mass-email vendor",
                                    "Client and media contact data leaving for a third party raised privacy concerns",
                                    "A recurring subscription cost",
                                    "Local sync was unreliable, with no clear view of what landed",
                                ]}
                                fix={[
                                    "Personalised mass-send with pre-flight checks and open / reply / bounce tracking",
                                    <>
                                        Built as a <b>Google Workspace add-on</b> — recipient
                                        lists and drafts stay inside the agency's own Google
                                        Workspace, never leaving for an outside service
                                    </>,
                                    "No subscription — it runs on the Workspace they already pay for",
                                ]}
                                outcome={[
                                    "Target: a paid third-party mail step moved in-house, with contact data staying inside the agency's own Google Workspace",
                                ]}
                            />

                            <div className="mx-auto my-6 grid max-w-md grid-cols-2 gap-4">
                                <Image
                                    src="/images/pr-workflow-tooling/mail-merge-1.webp"
                                    alt="Sample: the mass-email add-on send-and-schedule panel"
                                    width={335}
                                    height={874}
                                    className="w-full rounded-lg border border-white/5 bg-white/[0.02]"
                                />
                                <Image
                                    src="/images/pr-workflow-tooling/mail-merge-2.webp"
                                    alt="Sample: the mass-email add-on pre-flight check panel"
                                    width={333}
                                    height={876}
                                    className="w-full rounded-lg border border-white/5 bg-white/[0.02]"
                                />
                            </div>
                            <p className="text-sm text-neutral-400">Sample images.</p>
                        </>
                    ),
                },
            ]}
        />
    );
}
