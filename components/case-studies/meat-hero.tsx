"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type SectionId = "introduction" | "design";

interface Section {
    id: SectionId;
    title: string;
}

const SECTIONS: Section[] = [
    { id: "introduction", title: "Introduction" },
    { id: "design", title: "Thought & Design Process" },
];

const textStyle =
    "bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]";

const headingStyle = cn("text-3xl font-bold mb-4", textStyle);

const sectionStyle = cn(
    "flex-1 scrollbar overflow-y-auto lg:px-10 lg:py-2 text-center bg-blend-darken align-items-center justify-center",
    textStyle
);

export function MeatHeroTOC() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const sectionRefs = useMemo(
        () => ({
            introduction: React.createRef<HTMLDivElement>(),
            design: React.createRef<HTMLDivElement>(),
        }),
        []
    );

    const [activeSection, setActiveSection] = useState<SectionId>("introduction");

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
            let current: SectionId = "introduction";

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
                    How to Be a Meat Hero
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
            <main ref={scrollContainerRef} className={cn(sectionStyle, "text-white")}>
                <section
                    id="introduction"
                    ref={sectionRefs.introduction}
                    className="max-w-fit lg:mx-12 lg:mb-16 lg:px-8 px-4 justify-center align-items-center"
                >
                    <h2 className={headingStyle}>Introduction</h2>
                    <br />
                    <p className={textStyle}>
                        The redesign turns on one changed question. The old Roblox prototype
                        asked: <i>&ldquo;can you make the correct cut?&rdquo;</i> The Unity
                        redesign asks: <i>&ldquo;who is affected by the cut you choose to
                        make?&rdquo;</i>
                    </p>
                </section>

                <section id="design" ref={sectionRefs.design} className={sectionStyle}>
                    <h2 className={headingStyle}>Thought &amp; Design Process</h2>

                    <div className="flex flex-wrap items-start justify-center gap-8 py-4">
                        <div className="text-left max-w-sm">
                            <h3 className={cn("text-xl font-semibold mb-2", textStyle)}>
                                Preserved from the prototype
                            </h3>
                            <ul className={cn("space-y-2 list-disc list-inside", textStyle)}>
                                <li>Swipe cutting</li>
                                <li>Limited cuts</li>
                                <li>Hazards</li>
                            </ul>
                        </div>

                        <div className="text-left max-w-sm">
                            <h3 className={cn("text-xl font-semibold mb-2", textStyle)}>
                                Retired in the redesign
                            </h3>
                            <ul className={cn("space-y-2 list-disc list-inside", textStyle)}>
                                <li>Overlapping controllers</li>
                                <li>Hard-coded totals</li>
                                <li>Client-owned scoring</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
