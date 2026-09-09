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
    " inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]";

const headingStyle = cn("text-3xl font-bold mb-4", textStyle);

const mainStyle = cn(
    "flex-1 min-w-0 scrollbar overflow-y-auto bg-[#0b0b0e] px-5 md:px-12 py-8 text-center",
    textStyle
);
const sectionCls = cn("mb-12 last:mb-0 text-center", textStyle);

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
        <div className="flex max-h-[68vh] w-full">
            {/* TOC */}
            <div
                className="
      sticky top-0 z-50
      max-h-xl
      max-w-96
      max-[800px]:hidden
      px-6 py-6
      bg-black
      border-r border-white/5
    "
            >
                <h2 className="text-lg font-extrabold tracking-wide mb-4">
                    How to Be a Meat Hero
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
            <main ref={scrollContainerRef} className={cn(mainStyle, "text-white")}>
                <section
                    id="introduction"
                    ref={sectionRefs.introduction}
                    className={sectionCls}
                >
                    <h2 className={headingStyle}>Introduction</h2>
                    <br />
                    <p className={textStyle}>
                        &ldquo;How to be a meat hero&rdquo; started as a Roblox hackathon
                        experiment called &ldquo;Meat Lover&rdquo; that won Representative&rsquo;s
                        Choice on the strength of one mechanic. It&rsquo;s currently in
                        development to become a bigger game in Unity. Coming soon.
                    </p>
                    <br />
                    <p className={textStyle}>
                        The redesign turns on one changed question. The old Roblox prototype
                        asked: <i>&ldquo;can you make the correct cut?&rdquo;</i> The Unity
                        redesign asks: <i>&ldquo;who is affected by the cut you choose to
                        make?&rdquo;</i>
                    </p>
                </section>

                <section id="design" ref={sectionRefs.design} className={sectionCls}>
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
