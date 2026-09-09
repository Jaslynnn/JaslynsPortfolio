"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
    "flex-1 min-w-0 scrollbar overflow-y-auto bg-[#0b0b0e] px-5 md:px-12 py-8 text-center",
    textStyle
);
const sectionCls = cn("mb-12 last:mb-0 text-center", textStyle);

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
      px-2 pr-24 py-4
      bg-black
      border-r-2 border-white
      drop-shadow-[0_10px_10px_rgba(0,0,0,1)]
    "
            >
                <h2 className="text-lg font-extrabold tracking-wide mb-6 drop-shadow-[0_5px_5px_rgba(0,0,0,100)]">
                    Gloo Communications Tooling
                </h2>

                <ul className="space-y-4 py-4">
                    {SECTIONS.map((section) => (
                        <li
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={cn(
                                "cursor-pointer text-sm transition-all",
                                activeSection === section.id
                                    ? "font-semibold text-white border-l-2 border-white pl-3"
                                    : "text-neutral-400 hover:text-white pl-4"
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
                </section>

                <section id="website" ref={sectionRefs.website} className={sectionCls}>
                    <h2 className={headingStyle}>The website</h2>

                    <p className={textStyle}>
                        A rebuild, not a from-scratch build: a WordPress-to-static migration
                        of gloopr.biz, done wireframe-first and content-first via a PDF-crop
                        workflow. Now live at high fidelity.
                    </p>
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
