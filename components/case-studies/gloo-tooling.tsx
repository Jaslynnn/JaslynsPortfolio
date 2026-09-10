"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type SectionId = "origin" | "tools" | "website" | "resources";

interface Section {
    id: SectionId;
    title: string;
}

const SECTIONS: Section[] = [
    { id: "origin", title: "How it started" },
    { id: "tools", title: "The tools" },
    { id: "website", title: "The website" },
    { id: "resources", title: "AI tooling & what it took" },
];

const textStyle =
    " inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]";

const headingStyle = cn("text-3xl font-bold mb-4", textStyle);

const mainStyle = cn(
    "flex-1 min-w-0 scrollbar overflow-y-auto px-5 md:px-12 py-8 text-center",
    textStyle
);
const sectionCls = cn("mb-12 last:mb-0 text-center", textStyle);

function Figure({
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
            <figcaption className="mt-2 text-sm text-neutral-400">
                {caption}
            </figcaption>
        </figure>
    );
}

export function GlooToolingTOC() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const sectionRefs = useMemo(
        () => ({
            origin: React.createRef<HTMLDivElement>(),
            tools: React.createRef<HTMLDivElement>(),
            website: React.createRef<HTMLDivElement>(),
            resources: React.createRef<HTMLDivElement>(),
        }),
        []
    );

    const [activeSection, setActiveSection] = useState<SectionId>("origin");

    const scrollToSection = useCallback(
        (id: SectionId) => {
            const container = scrollContainerRef.current;
            const section = sectionRefs[id].current;

            if (!container || !section) return;

            container.scrollTo({
                top: section.offsetTop,
                behavior: "smooth",
            });

            setActiveSection(id);
        },
        [sectionRefs]
    );

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollTop = container.scrollTop;
            let current: SectionId = "origin";

            for (const section of SECTIONS) {
                const el = sectionRefs[section.id].current;
                if (!el) continue;

                if (scrollTop >= el.offsetTop - 120) {
                    current = section.id;
                }
            }

            setActiveSection(current);
        };

        container.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => container.removeEventListener("scroll", handleScroll);
    }, [sectionRefs]);

    return (
        <div className="flex max-h-[68vh] w-full">
            {/* TOC */}
            <div
                className="
      sticky top-0 z-50
      max-h-xl
      max-w-96
      max-[800px]:hidden
      px-6 py-6
      border-r border-white/5
    "
            >
                <h2 className="text-lg font-extrabold tracking-wide mb-4">
                    Gloo Communications Tooling
                </h2>

                <ul className="space-y-4 py-4">
                    {SECTIONS.map((section) => (
                        <li
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={cn(
                                "cursor-pointer text-sm transition-all rounded px-2 -mx-2 py-1",
                                activeSection === section.id
                                    ? "font-semibold text-white bg-white/[0.07]"
                                    : "text-neutral-400 hover:text-white"
                            )}
                        >
                            {section.title}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Content */}
            <main
                ref={scrollContainerRef}
                className={cn(mainStyle, "text-white")}
            >
                <section
                    id="origin"
                    ref={sectionRefs.origin}
                    className={sectionCls}
                >
                    <h2 className={headingStyle}>How it started</h2>
                    <br />
                    <p className={textStyle}>
                        Gin, the founder, asked whether client timelines could look
                        &ldquo;nicer&rdquo; &mdash; expecting a Canva template. I built a
                        generative tool instead. Once people saw it in use, they brought me
                        their own workflow problems, and each turned into another tool.
                    </p>
                </section>

                <section id="tools" ref={sectionRefs.tools} className={sectionCls}>
                    <h2 className={headingStyle}>The tools</h2>

                    <div className="flex flex-wrap items-center justify-center">
                        <ul className={cn("space-y-3 py-4 px-4 text-left list-disc list-inside", textStyle)}>
                            <li>
                                <b>Timeline Builder</b> <i>(built)</i> &mdash; turns a
                                project&rsquo;s tasks, owners and dates into a client-ready
                                Gantt PDF and CSV, all offline in a single HTML file.
                            </li>
                            <li>
                                <b>Internal Timeline</b> <i>(built)</i> &mdash; merges those
                                CSV exports into one sortable cross-project view, without
                                centralising client data.
                            </li>
                            <li>
                                <b>Gloo Mail / Mergo</b> <i>(in progress)</i> &mdash;
                                personalised mass email that fixes local-sync and
                                bounce-tracking pain.
                            </li>
                            <li>
                                <b>Coverage Report Automation</b> <i>(in progress)</i> &mdash;
                                cuts the manual screenshot-and-format cycle behind coverage
                                decks.
                            </li>
                            <li>
                                <b>Gloo Portal</b> <i>(concept)</i> &mdash; one internal
                                chatbot-style interface for admin tasks like leave
                                applications.
                            </li>
                        </ul>
                    </div>

                    <Figure
                        src="/images/gloo-tooling/timeline-builder.webp"
                        alt="The Timeline Builder tool with a project form and the generated Gantt PDF below it"
                        w={1220}
                        h={980}
                        caption="The Timeline Builder in use: an account lead fills in project details and tasks, and the client-ready Gantt PDF draws itself underneath. Export CSV hands the tasks to the cross-project Internal Timeline; Import CSV pulls a selection back the other way."
                    />
                </section>

                <section id="website" ref={sectionRefs.website} className={sectionCls}>
                    <h2 className={headingStyle}>The website</h2>

                    <p className={textStyle}>
                        The company site was a rebuild, not a from-scratch build &mdash; a
                        WordPress-to-static migration of gloopr.biz. The path from paper to
                        launch:
                    </p>

                    <Figure
                        src="/images/gloo-tooling/website-sketch.webp"
                        alt="Hand-drawn wireframe sketches of the website pages on paper"
                        w={681}
                        h={936}
                        caption="1 · Sketches. The client handed over content and rough page flows on paper — webpage flow, featured work, media wall, contact. Everything started here."
                    />

                    <Figure
                        src="/images/gloo-tooling/website-redesign.webp"
                        alt="A Figma canvas showing about twenty wireframe iterations of the homepage"
                        w={1568}
                        h={733}
                        caption="2 · Redesign. Wireframe-first in Figma, iterating layout and hierarchy across roughly twenty frames before any styling went on."
                    />

                    <Figure
                        src="/images/gloo-tooling/stakeholder-critiques.webp"
                        alt="Six dated review rounds of the homepage side by side with margin notes"
                        w={1568}
                        h={450}
                        caption="3 · Stakeholder critiques. Weekly review rounds with the team from mid-May to late June — each version marked up and revised against feedback."
                    />

                    <p className={textStyle}>Before and after:</p>

                    <div className="mx-auto my-6 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
                        <Figure
                            src="/images/gloo-tooling/website-before.webp"
                            alt="Full-page screenshot of the old lime-green WordPress site"
                            w={199}
                            h={1568}
                            tall
                            className="my-0"
                            caption="Before — the old WordPress site."
                        />
                        <Figure
                            src="/images/gloo-tooling/website-after.png"
                            alt="Full-page screenshot of the rebuilt gloopr.biz site"
                            w={1194}
                            h={4949}
                            tall
                            className="my-0"
                            caption="After — now live at gloopr.biz."
                        />
                    </div>
                </section>

                <section
                    id="resources"
                    ref={sectionRefs.resources}
                    className={sectionCls}
                >
                    <h2 className={headingStyle}>AI tooling &amp; what it took</h2>

                    <p className={textStyle}>
                        AI tooling ran throughout for prototyping and drafting wherever it
                        sped up iteration. Beyond that, the work needed alignment with Chong
                        and Gin on priority and scope, and account-lead buy-in on what client
                        data could safely be shared across tools.
                    </p>
                </section>
            </main>
        </div>
    );
}
