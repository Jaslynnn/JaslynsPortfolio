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

const sectionStyle = cn(
    "flex-1 scrollbar overflow-y-auto lg:px-10 lg:py-2 text-center align-items-center justify-center",
    textStyle
);

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
        <div className="flex max-h-[56vh] w-fit drop-shadow-[0_10px_10px_rgba(0,0,0,100)]">
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
                className={cn(sectionStyle, "text-white")}
            >
                <section
                    id="origin"
                    ref={sectionRefs.origin}
                    className="max-w-fit lg:mx-12 lg:mb-16 lg:px-8 px-4 justify-center align-items-center"
                >
                    <h2 className={headingStyle}>How it started</h2>
                    <br />
                    <p className={textStyle}>
                        Gin, the founder, asked whether client timelines could look
                        &ldquo;nicer&rdquo; &mdash; expecting something simple, like a Canva
                        template. Instead of a template, I built an actual generative tool
                        that produces the timelines from data.
                        <br />
                        <br />
                        Everything after that came about informally. Once people saw the
                        Timeline Builder in use, team members started bringing me their own
                        workflow problems, and each one turned into another tool.
                    </p>
                </section>

                <section id="tools" ref={sectionRefs.tools} className={sectionStyle}>
                    <h2 className={headingStyle}>The tools</h2>

                    <div className="flex flex-wrap items-center justify-center">
                        <ul className={cn("space-y-4 py-4 px-4 text-left list-disc list-inside", textStyle)}>
                            <li>
                                <b>Timeline Builder</b> &mdash; <i>built and in use.</i> A
                                project-facing tool where an account lead enters tasks, owners,
                                and dates for a single client project; it generates a
                                client-ready Gantt PDF plus a CSV export. Built as a
                                self-contained HTML file so all data stays on the user&rsquo;s
                                own computer &mdash; a deliberate choice for client-data
                                privacy.
                            </li>
                            <li>
                                <b>Internal Timeline</b> &mdash; <i>built and in use.</i>
                                Imports the CSV exports from any number of project timelines
                                into one combined, sortable, cross-project view for the team
                                &mdash; without centralising raw client data. Same
                                self-contained HTML approach as the Timeline Builder, for the
                                same data-locality reason.
                            </li>
                            <li>
                                <b>Gloo Mail / Mergo</b> &mdash; <i>in progress.</i> A
                                personalised mass-email tool for client and media
                                communications, addressing local-sync and bounce-tracking pain
                                points.
                            </li>
                            <li>
                                <b>Coverage Report Automation</b> &mdash; <i>in progress.</i>
                                Aimed at reducing the manual screenshot-and-format cycle behind
                                client coverage decks.
                            </li>
                            <li>
                                <b>Gloo Portal</b> &mdash; <i>concept stage.</i> A consolidated
                                internal chatbot-style interface for admin functions like leave
                                applications. Not a deliverable yet &mdash; included here as a
                                sense of where the tooling could go next.
                            </li>
                        </ul>
                    </div>

                    <p className={textStyle}>
                        The Timeline Builder and Internal Timeline are the two that are
                        actually finished and demoable. The rest are honestly still in
                        progress or conceptual &mdash; being precise about that matters more
                        than implying everything shipped.
                    </p>
                </section>

                <section id="website" ref={sectionRefs.website} className={sectionStyle}>
                    <h2 className={headingStyle}>The website</h2>

                    <p className={textStyle}>
                        The company site was a rebuild, not a from-scratch build &mdash; a
                        WordPress-to-static migration of gloopr.biz. I worked wireframe-first
                        and content-first, using a PDF-crop workflow to carry the existing
                        content across, and it&rsquo;s now live at high fidelity.
                    </p>
                </section>

                <section
                    id="resources"
                    ref={sectionRefs.resources}
                    className={sectionStyle}
                >
                    <h2 className={headingStyle}>AI tooling &amp; what it took</h2>

                    <p className={textStyle}>
                        I used AI tooling throughout for prototyping and drafting wherever it
                        genuinely sped up iteration &mdash; the same &ldquo;custom AI
                        workflows&rdquo; instinct that shows up elsewhere in my work.
                        <br />
                        <br />
                        Worth naming, because the work needed it: alignment time with Chong
                        and Gin on priority and scope, and buy-in from account leads on
                        exactly what client data could safely be shared across tools.
                    </p>
                </section>
            </main>
        </div>
    );
}
