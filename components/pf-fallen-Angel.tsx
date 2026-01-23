"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
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



const SECTIONS: Section[] = [
    { id: "introduction", title: "Introduction" },
    { id: "design", title: "Thought & Design Process" },
    { id: "technical", title: "Technical Implementation" },
];

export function FallenAngelTOC() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const sectionRefs = useMemo(
        () => ({
            introduction: React.createRef<HTMLDivElement>(),
            design: React.createRef<HTMLDivElement>(),
            technical: React.createRef<HTMLDivElement>(),
        }),
        []
    );

    const [activeSection, setActiveSection] =
        useState<SectionId>("introduction");


    const scrollToSection = useCallback((id: SectionId) => {
        const container = scrollContainerRef.current;
        const section = sectionRefs[id].current;

        if (!container || !section) return;

        container.scrollTo({
            top: section.offsetTop,
            behavior: "smooth",
        });

        setActiveSection(id); // instant feedback
    }, [sectionRefs]);



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
        <div className="flex max-h-[56vh] w-fitdrop-shadow-[0_10px_10px_rgba(0,0,0,100)] ">
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
                    Falling Interaction Mechanic
                </h2>
                <Image
                    src={"/CoverImage2.png"} alt={"Homewrecker Game ScreenShot"}

                    width={400}
                    height={500}
                    className="w-full max-w-[700px] object-contain select-none filter "
                    draggable={false}
                />

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
                className="flex-1 scrollbar overflow-y-auto lg:px-10 lg:py-2 text-center bg-blend-darken bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)] align-items-center justify-center">
                <section
                    id="introduction"
                    ref={sectionRefs.introduction}
                    className="max-w-fit lg:mx-12 lg:mb-16 lg:px-8 px-4 justify-center align-items-center"
                >
                    <h2 className="text-3xl font-bold mb-4 bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)] ">
                        Introduction
                    </h2>
                    <br></br>
                    <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                        An angel fugitive escaped heaven at the cost of its wings, to survive it must avoid obstacles, collect wing fragments to evolve and adapt to falling. Created by Alexandra Aliana koh and Jaslyn Chen.
                    </p>
                    <br></br>
                    <br></br>
                    <div className="flex flex-wrap items-center justify-center">
                        <video autoPlay loop muted
                               className="w-full max-w-[700px] object-contain select-none filter bg-blend-color">
                            <source src="/videos/FallingAngelIntro.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.

                        </video>
                    </div>
                    <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                        Tech stack: Unity ,Procreate, Figma, c#
                        Duration: 5 weeks
                        <br></br>
                        <br></br>
                        Our Roles:
                        <br></br>
                        Both of us came up with the concept and worked on the game design together.
                        <br></br> Jaslyn: Game Development, UI/UX Design
                        <br></br> Alexandra: 2D Art Assets, Animation
                    </p>
                </section>

                <section
                    id="design"
                    ref={sectionRefs.design}
                    className="flex-1 scrollbar overflow-y-auto lg:px-10 lg:py-2 text-center bg-blend-darken bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)] align-items-center justify-center">

                    <h2 className="text-3xl font-bold mb-4 bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)] ">
                        Thought and Design Process
                    </h2>

                    <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                        This was inspired by swiping games where you could collect items like ice cream flavors or temple run where you move right or left to avoid obstacles.
                        <br></br>Initially, We sketched out an idea of the map to help us better visualise the gameplay, which had eventually changed over time.

                    </p>
                    <div className="flex flex-wrap items-center justify-center">
                        <Image
                            src={"/FallingAngelWIPSketch.png"} alt={"Homewrecker Game ScreenShot"}

                            width={700}
                            height={500}
                            className="w-full max-w-[700px] px-4 object-contain select-none filter py-4 items-center"
                            draggable={false}
                        />
                    <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">

                        <br></br>
                        These were some of the risks we were concerned with at the start of the project and mitigation measures we planned to take .

                    </p>


                        <Image
                            src={"/FallingAngelWIPSketch2.png"} alt={"Homewrecker Game ScreenShot"}

                            width={700}
                            height={500}
                            className="w-full max-w-[700px] px-4 object-contain select-none filter py-4 items-center"
                            draggable={false}
                        />

                        <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">

                            <br></br>
                            We then executed a simple version of our plan, asked for feedback, made more adjustments and iterations until we were satisfied.

                        </p>
                    </div>
                </section>

                <section
                    id="technical"
                    ref={sectionRefs.technical}
                    className="flex-1 scrollbar overflow-y-auto lg:px-10 lg:py-2 text-center bg-blend-darken bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)] align-items-center justify-center">

                    <h2 className="text-3xl font-bold mb-4 bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)] ">
                        Technical Implementation
                    </h2>

                    <div className="flex flex-wrap space-y-4 items-center justify-center">

                        <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                            Firstly, I did a simple prototype of the falling and side movement mechanic using basic shapes in Unity to test out the core gameplay loop.
                        </p>
                        <br></br>
                        <br></br>
                        <video autoPlay loop muted
                               className="w-full max-w-[700px] object-contain select-none filter bg-blend-color">
                            <source src="/videos/FallingAngelWIPShort.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.

                        </video>

                        <div className="flex flex-wrap spac items-center justify-center">
                            <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                               In this version, there was a timer count down and the high score would be how many wings it managed to score while alive. However, after some feedback from our playtesters, this did not seem as exciting as an infinite time mode where players could try to beat their high score. so we removed the time limit.
                            </p>
                        </div>
                    </div>
                    <br></br>

                    <div className="flex flex-wrap space-y-4 items-center justify-center">

                        <div className="flex flex-wrap spac items-center justify-center">
                            <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                               At the same time, Alex was storyboarding the animations and working on the 2D art assets for the game using Figma and Procreate.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap space-y-4 items-center justify-center">

                        <Image
                            src={"/Sketches.png"} alt={"Homewrecker Game ScreenShot"}

                            width={700}
                            height={500}
                            className="w-full max-w-[700px] px-4 object-contain select-none filter py-4 items-center"
                            draggable={false}
                        />

                        <div className="flex flex-wrap spac items-center justify-center">
                            <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                                I then incorporated the 2D art assets into the game.
                            </p>
                        </div>
                    </div>
                    <br></br>
                    <div className="flex flex-wrap space-y-4 items-center justify-center">
                        <video autoPlay loop muted
                               className="w-full max-w-[700px] object-contain select-none filter bg-blend-color">
                            <source src="/videos/FallingVidWip.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.

                        </video>

                    </div>





                    <div className="flex flex-wrap space-y-4 items-center justify-center">

                        <div className="flex flex-wrap spac items-center justify-center">
                            <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                               Complete progress will be updated soon, please stay tuned!
                            </p>



                        </div>
                    </div>

                </section>
            </main>
        </div>
    );
}

