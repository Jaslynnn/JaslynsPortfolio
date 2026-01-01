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

export function DocumentWithTOC() {
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
        <div className="flex max-h-[56vh] w-fitdrop-shadow-[0_10px_10px_rgba(0,0,0,100)]">
            {/* TOC */}
            <aside
                className="
      sticky top-0 z-50
      max-h-xl
      max-w-96 shrink-0
      px-2 pr-24 py-4
      bg-black
      border-r-2 border-white
      drop-shadow-[0_10px_10px_rgba(0,0,0,1)]
    "
            >
                <h2 className="text-lg font-extrabold tracking-wide mb-6 drop-shadow-[0_5px_5px_rgba(0,0,0,100)]">
                    Breaking Interaction Mechanic
                </h2>
                <Image
                    src={"/Homewrecker.jpg"} alt={"Homewrecker Game ScreenShot"}

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
            </aside>

            {/* Content */}
            <main
                ref={scrollContainerRef}
                className="flex-1 scrollbar overflow-y-auto px-10 py-2 text-center bg-blend-darken bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)] align-items-center justify-center">
                <section
                    id="introduction"
                    ref={sectionRefs.introduction}
                    className="max-w-fit mx-12 mb-16 px-8 justify-center align-items-center"
                >
                    <h2 className="text-3xl font-bold mb-4 bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)] ">
                        Introduction
                    </h2>
                    <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                        In my game Homewrecker, player can break objects near them in the game world by double clicking with their mouse.
                    </p>
                    <br></br>
                    <br></br>
                    <div className="flex flex-wrap items-center justify-center">
                        <video autoPlay loop muted
                               className="w-full max-w-[700px] object-contain select-none filter bg-blend-color">
                            <source src="/videos/Homewrecker-trimmed.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.

                        </video>
                    </div>
                    <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                        Tech stack: Maya , Unity , Substance, Illustrator, c#
                        Duration: 5 weeks
                    </p>
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
                        This was inspired by the intrusive thoughts of can I break this every time
                        I enter a game.
                        <br></br>
                        <br></br>
                        After some research, breaking things fulfil the human need to feel powerful and in charge,
                        which creates adrenaline and taps into the players intrinsic motivation by creating a <b>powerful,
                        immediate sense of achievement.</b>

                        <br></br>
                        However, in order to create this powerful sense of achievement, the destruction has to
                        be <i><b>satisfying</b></i>.
                        <br></br>
                        <br></br>

                        <b>Factors I analysed that contributed to a satisfying breaking interaction</b>


                    </p>
                    <div className="flex flex-wrap items-center justify-center">

                        <ul className="space-y-2 py-4 px-4 justify-items-start list-disc list-inside bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                            <li>
                                Realistic fragmentation from point of contact
                            </li>
                            <li>
                                Particle effects to layer the fragmentation
                            </li>
                            <li>
                                Sound effects
                            </li>
                            <li>
                                Timing(Player Percieved timing and Systemic data timing)
                            </li>

                        </ul>

                    </div>

                    <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">

                        As breaking could be done with many different ways, I wanted to make it a interaction that uniquely suited the theme of fantasy and not just generic fragments flying everywhere.
                        <br></br> I experimented with the factors above, asked for feedback, made more adjustments and iterations until I was satisfied.
<br></br>
                        <br></br>
                        The style that I was going for was rather stylised; an isometric, toon shaded style which was inspired by Tunic. Hence the breaking animation could be slightly exaggerated to fit the art style and to create an impact.


                    </p>
                </section>

                <section
                    id="technical"
                    ref={sectionRefs.technical}
                    className="max-w-fit mx-12 mb-16 px-8 justify-center align-items-center"
                >
                    <h2 className="text-3xl font-bold mb-4 bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)] ">
                        Technical Implementation
                    </h2>

                    <div className="flex flex-wrap space-y-4 items-center justify-center">

                        <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                            Firstly, I created custom particle effects in unity using my own 2D assets to test the breaking effect
                        </p>
                        <br></br>
                        <br></br>
                        <video autoPlay loop muted
                               className="w-full max-w-[700px] object-contain select-none filter bg-blend-color">
                            <source src="/videos/CustomParticalEffectTrimmed.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.

                        </video>

                        <div className="flex flex-wrap spac items-center justify-center">
                            <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                               I created the custom assets in Illustrator to achieve clean lines using vectors.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap space-y-4 items-center justify-center">
                        <Image
                            src={"/FlashTexture.png"} alt={"Homewrecker Game ScreenShot"}

                            width={100}
                            height={500}
                            className="w-full max-w-[150px] px-4 object-contain select-none filter py-4 "
                            draggable={false}
                        />
                        <Image
                            src={"/FlashbackTexture.png"} alt={"Homewrecker Game ScreenShot"}

                            width={100}
                            height={500}
                            className="w-full max-w-[150px] px-4 object-contain select-none filter py-4 "
                            draggable={false}
                        />
                        <Image
                            src={"/FlashPiecesTexture.png"} alt={"Homewrecker Game ScreenShot"}

                            width={100}
                            height={500}
                            className="w-full max-w-[150px] px-4 object-contain select-none filter py-4 "
                            draggable={false}
                        />
                        <Image
                            src={"/FogTexture.png"} alt={"Homewrecker Game ScreenShot"}

                            width={100}
                            height={500}
                            className="w-full max-w-[150px] px-4 object-contain select-none filter py-4 "
                            draggable={false}
                        />

                        <Image
                            src={"/CircleTexture.png"} alt={"Homewrecker Game ScreenShot"}

                            width={100}
                            height={500}
                            className="w-full max-w-[150px] px-4 object-contain select-none filter py-4 "
                            draggable={false}
                        />



                        <div className="flex flex-wrap spac items-center justify-center">
                            <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                                Afterwards, I coded scalable metrics via scriptable objects which would help optimise user testing and scalability.
                                <br></br>
                                The number of points players can get from destroying an item can be modified easily just by assigning a tag of "basic", "intermediate", "advanced" to the item or even creating a custom category and data set to test out different point systems.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap space-y-4 items-center justify-center">

                            <Image
                                src={"/ItemScriptObj.png"} alt={"Homewrecker Game ScreenShot"}

                                width={300}
                                height={500}
                                className="w-full max-w-[350px] px-4 object-contain select-none filter py-4 "
                                draggable={false}
                            />
                        <Image
                            src={"/XPScriptObj.png"} alt={"Homewrecker Game ScreenShot"}

                            width={300}
                            height={500}
                            className="w-full max-w-[350px] px-4 object-contain select-none filter py-4 "
                            draggable={false}
                        />

                        <div className="flex flex-wrap spac items-center justify-center">
                            <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                                The same for the increase in stats as players level up.
                                <br></br>
                                I modelled some assets in Maya and created a toon shader in unity shader graphs to create the art style I was going for.

                            </p>
                        </div>
                    </div>
                    <br></br>
                    <div className="flex flex-wrap space-y-4 items-center justify-center">
                        <Image
                            src={"/ToonShader.png"} alt={"Homewrecker Game ScreenShot"}

                            width={700}
                            height={500}
                            className="w-full max-w-[700px] px-4 object-contain select-none filter py-4 "
                            draggable={false}
                        />
                        <p>This is before and after the toon shader was applied.</p>
                        <br></br>
                        <br></br>
                        <Image
                            src={"/BeforeToonShader.jpg"} alt={"Homewrecker Game ScreenShot"}

                            width={200}
                            height={500}
                            className="w-full max-w-[410px] px-4 object-contain select-none filter py-4 "
                            draggable={false}
                        />
                        <Image
                            src={"/AfterToonShader.jpg"} alt={"Homewrecker Game ScreenShot"}

                            width={200}
                            height={500}
                            className="w-full max-w-[410px] px-4 object-contain select-none filter py-4 "
                            draggable={false}
                        />
                        <div className="flex flex-wrap spac items-center justify-center">
                            <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                                Afterwards, I modelled the character, textured it in substance painter, rigged it and animated the animations needed for the Character in Maya.
                            </p>
                            <br></br>
                        </div>
                    </div>
                    <div className="flex flex-wrap space-y-4 items-center justify-center">
                        <video autoPlay loop muted
                               className="w-full max-w-[700px] object-contain select-none filter bg-blend-color">
                            <source src="/videos/MayaDemonWIP.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.

                        </video>
                        <br></br>
                        <div className="flex flex-wrap spac items-center justify-center">
                            <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                               I also experimented with the character getting bigger upon destroying more objects, inspired by hole.io where the hole gets bigger as it consumes more objects.
                                <br></br>
                            </p>
                        </div>
                    </div>
                    <br></br>
                    <div className="flex flex-wrap space-y-4 items-center justify-center">
                       <video autoPlay loop muted
                                   className="w-full max-w-[700px] object-contain select-none filter bg-blend-color">
                                <source src="/videos/GrowExperiment.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.

                            </video>
                        <div className="flex flex-wrap spac items-center justify-center">
                            <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                                But I decided that it looked kind of weird so gave up on that.
                                <br></br>
                                At this point, the theme which was initially about a demon destroying things and escaping from a fried rice pan did not seem to make sense so I changed it and completely redid the environmental assets.
                                <br></br>
                                <br></br>
                                I fractured the assets in maya into irregular shaped pieces.

                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap space-y-4 items-center justify-center">
                        <aside>
                            <Image
                                src={"/FracturedSofa.png"} alt={"Homewrecker Game ScreenShot"}

                                width={600}
                                height={500}
                                className="w-full max-w-[650px] px-4 object-contain select-none filter py-4 "
                                draggable={false}
                            />
                        </aside>
                        <div className="flex flex-wrap spac items-center justify-center">
                            <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                                Finally, I used raytracing to select an item fragment within attack range,
                                When an item is hit, I get the parent object and give every fragment a rigidbody component, applying the force in the direction of the ray from the piece that was hit.


                            </p>
                            <br></br>
                        </div>
                    </div>
                    <div className="flex flex-wrap space-y-4 items-center justify-center">
                        <video autoPlay loop muted
                               className="w-full max-w-[700px] object-contain select-none filter bg-blend-color">
                            <source src="/videos/RayTracingFinal.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.

                        </video>
                        <div className="flex flex-wrap spac items-center justify-center">
                            <p className=" bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent inline-block text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                                I also implemented a shooting hand sculpture that acted like security lasers for the house to suit the whole intruder theme.
                                That's all for this game!

                                <br></br>
                                <br></br>
                               This project was a great way to challenge myself technically and learn more about creating satisfying interactions in games.
                                <br></br>
                                <br></br>
                                Here is the gameplay video on Youtube
                                <div className="relative w-full pb-[56.25%]">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full rounded-xl"
                                        src="https://www.youtube.com/embed/kQOtVj25FLw"
                                        frameBorder="0"
                                        allowFullScreen>
                                    </iframe>
                                </div>


                            </p>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    );
};

