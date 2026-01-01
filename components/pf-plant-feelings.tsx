"use client";
import React, {useEffect, useRef, useState} from "react";
import {cn} from "@/lib/utils";
import Image from "next/image";

type SectionId =
    | "introduction"
    | "design"
    | "technical";

interface Section {
    id: SectionId;
    title: string;
}


const sections: Section[] = [
    {id: "introduction", title: "Introduction"},
    {id: "design", title: "Thought & Design Process"},
    {id: "technical", title: "Technical Implementation"},
];

const PlantFeelingsTOC: React.FC = () => {
    const [activeSection, setActiveSection] =
        useState<SectionId>("introduction");
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);


    const sectionRefs: Record<
        SectionId,
        React.RefObject<HTMLDivElement | null>
    > = {
        introduction: useRef<HTMLDivElement>(null),
        design: useRef<HTMLDivElement>(null),
        technical: useRef<HTMLDivElement>(null),
    };


    const scrollToSection = (id: SectionId) => {
        const container = scrollContainerRef.current;
        const section = sectionRefs[id].current;

        sectionRefs[id].current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        if (!container || !section) return;
        setActiveSection(id); // immediate visual feedback
    };


    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollTop = container.scrollTop;
            let current: SectionId = "introduction";


            let minDistance = Infinity;

            Object.entries(sectionRefs).forEach(([id, ref]) => {
                const el = ref.current;
                if (!el) return;

                // offsetTop relative to scroll container
                if (el.offsetTop - container.offsetTop <= scrollTop + 150) {
                    current = id as SectionId;
                }
            });

            setActiveSection(current);
        };

        container.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => container.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className="flex max-h-[56vh]  w-fitdrop-shadow-[0_10px_10px_rgba(0,0,0,100)]">
            {/* TOC */}
            <aside
                className="
      sticky top-0 z-50
      max-h-xl
      max-w-96 shrink-0
      px-2 pr-24 py-4
      border-r-2 border-white
      drop-shadow-[0_10px_10px_rgba(0,0,0,1)]
    "
            >
                <h2 className="text-lg font-extrabold tracking-wide mb-6 drop-shadow-[0_5px_5px_rgba(0,0,0,100)]">
                    Plant Feelings
                </h2>
                <Image
                    src={"/PlantFeelings.png"} alt={"Homewrecker Game ScreenShot"}

                    width={400}
                    height={500}
                    className="w-full max-w-[700px] object-contain select-none filter "
                    draggable={false}
                />


                <ul className="space-y-4 py-4">
                    {sections.map((section) => (
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
            </aside>

            {/* Content */}
            <main
                ref={scrollContainerRef}
                className="flex-1 scrollbar overflow-y-auto px-10 py-2 text-center bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)] align-items-center justify-center">
                <section
                    id="introduction"
                    ref={sectionRefs.introduction}
                    className="max-w-fit mx-12 mb-16 px-8 justify-center align-items-center"
                >

                    <h2 className="text-3xl font-bold mb-4 bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)] ">
                        Introduction
                    </h2>
                    <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                        Plant Feelings is an interactive artwork that visualizes a plant’s emotional state using live input from a soil moisture sensor, inspired by the debate around bonsai ethics.
   <br></br>
                        <br></br>
                        The plant is represented as a pixel-art character that walks, idles, follows the mouse, reacts to attention, and displays different emotional states based on real humidity levels.
                        <br></br>

                    </p>
                    <br></br>
                    <br></br>
                    <div className="flex flex-wrap items-center justify-center">
                        <video autoPlay loop muted className="w-full max-w-[700px] object-contain select-none filter bg-blend-color">
                            <source src="/videos/PlantFeelingsVideo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.

                        </video>
                    </div>
                    <br></br>
                    <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">

                        Duration: 3 weeks
                    </p>
                    <div className="flex flex-wrap justify-items-center align-items-center justify-evenly">


                        <ul className="space-y-2 py-4 px-4 justify-items-start list-disc list-inside bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                            <b>Hardware</b>
                            <li>
                                Arduino board
                            </li>
                            <li>
                                Soil moisture sensor
                            </li>
                            <li>
                                Serial communication to browser
                            </li>


                        </ul>

                        <ul className="space-y-2 py-4 px-4 justify-items-start list-disc list-inside bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                            <b>Software</b>
                            <li>
                                Penpot (for UI mockups and html/css prototyping/code)
                            </li>
                            <li>
                                JavaScript
                            </li>
                            <li>
                                p5.js (or HTML/JS canvas)
                            </li>
                            <li>
                                Aesprite (Pixel animations)
                            </li>

                        </ul>

                    </div>
                </section>

                <section
                    id="design"
                    ref={sectionRefs.design}
                    className="max-w-fit mx-12 mb-32 px-8 justify-center align-items-center"
                >
                    <h2 className="text-3xl font-bold mb-4 bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)] ">
                        Thought and Design Process
                    </h2>

                    <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                        This work is inspired by the ongoing debate surrounding bonsai and the ethics of shaping nature for aesthetics. Some argue that shaping and pruning a bonsai is cruel because it forces a plant into an unnatural form.
                        <br></br>
                        <br></br>
                        Yet at the same time, mowing a lawn, trimming hedges, or cutting houseplants is considered normal—even though these also involve cutting and shaping plants. This contradiction raises the central question of the project: Why do we feel empathy toward some manipulated plants, but not others?
                        <br></br>

                        Plant Feelings exaggerates the idea that plants have emotions in order to highlight this inconsistency.
                        <br></br>
                        <br></br>

                            <b>By giving the plant:</b>


                    </p>
                    <div className="flex flex-wrap items-center justify-center">

                        <ul className="space-y-2 py-4 px-4 justify-items-start list-disc list-inside bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                            <li>
                                A sad animation when under-watered/ignored
                            </li>
                            <li>
                                A happy animation when healthy
                            </li>
                            <li>
                                Physical reactions to the mouse
                            </li>
                            <li>
                                Pop-up “feeling windows” representing attention or warnings
                            </li>

                        </ul>

                    </div>
                    <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                        this system playfully exposes how easily humans project emotions onto non-human life. The work invites viewers to reflect on how cultural narratives but not biology shape our perception of nature, cruelty, and empathy.
                    </p>
                </section>

                <section
                    id="technical"
                    ref={sectionRefs.technical}
                    className="max-w-fit mx-12 mb-32 px-8 justify-center align-items-center"
                >
                    <h2 className="text-3xl font-bold mb-4 bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)] ">
                        Technical Implementation
                    </h2>
                    <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                        I started by conceptualizing plant feelings as something that would appeal to the audience's emotions, and I felt that people tend to feel a closeness to things that are cute or simple.
                    </p>
                    <br></br>
                    <br></br>
                    <div className="flex flex-wrap items-center justify-center">
                        <Image
                            src= {"/Doc1Concept.png"} alt= {"Homewrecker Game ScreenShot"}

                            width={400}
                            height={500}
                            className="w-full max-w-[700px] object-contain select-none filter bg-blend-color "
                            draggable={false}
                        />
                    </div>
                    <br></br>
                    <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                        Afterwards, I did a mock up of the final and created the art assets for interaction.
                    </p>
                    <br></br>
                    <br></br>
                    <div className="flex flex-wrap items-center justify-center">
                        <Image
                            src= {"/Doc2Art.png"} alt= {"Homewrecker Game ScreenShot"}

                            width={400}
                            height={500}
                            className="w-full max-w-[700px] object-contain select-none filter bg-blend-color "
                            draggable={false}
                        />
                    </div>
                    <br></br>
                    <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                        Afterwards, I implemented the code using p5.js and Arduino to connect the soil moisture sensor to the visual output, creating an interactive experience that responds to the plant's needs.
                        <br></br>
                        During that process, I faced a problem in which my temperature sensor was not reading , so I had to quickly rework the code to only use the soil moisture sensor for the plant's emotional states.
                    </p>
                    <br></br>
                    <br></br>
                    <div className="flex flex-wrap items-center justify-center">
                        <Image
                            src= {"/Doc3Code.png"} alt= {"Homewrecker Game ScreenShot"}

                            width={400}
                            height={500}
                            className="w-full max-w-[700px] object-contain select-none filter bg-blend-color "
                            draggable={false}
                        />
                    </div>
                    <br></br>
                    <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                        For this project, I attempted to try something new and use penpot to speed up the UI frontend, I was able to quickly prototype, however, it was not very media responsive and difficult to navigate to change certain styles and elements as it gave elements very long names even if you name them well.

                        <br></br>
                        <br></br>

                        Anyways, the final idea was to have a small screen beside my plant one day when I have the budget for that. Unfortunately, My plant has passed away due to an unfortunate repotting incident.:( This will be reserved for my future plant friends.
                    </p>
                    <br></br>
                    <br></br>
                    <div className="flex flex-wrap items-center justify-center">
                        <Image
                            src= {"/Doc4Presentation.png"} alt= {"Homewrecker Game ScreenShot"}

                            width={400}
                            height={500}
                            className="w-full max-w-[700px] object-contain select-none filter bg-blend-color "
                            draggable={false}
                        />
                    </div>
                </section>
            </main>
        </div>
    );
};

export {PlantFeelingsTOC};
