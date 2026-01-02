"use client";

import {cn} from "@/lib/utils";
import React, {useRef, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/button";
import {AnimatePresence, motion} from "framer-motion";
import { ModalButton } from "./ModalButton";
import  { DocumentWithTOC }  from "./pf-breaking-Interaction";
import {PlantFeelingsTOC} from "@/components/pf-plant-feelings";


import {

    useScroll,
    useMotionValueEvent,
} from "motion/react";
import {TEnumType} from "ts-interface-checker";


export function Testimonials() {

    const ref = useRef<HTMLDivElement>(null);
    const {scrollY} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const [visible, setVisible] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<categories | null>(null);
    const testimonialData = [
        {
            name: "Homewrecker",
            role: "#Breaking Interaction Design | 5 weeks | #Unity | #Maya | #Substance Painter",
            image: "/Homewrecker.jpg",
            quote: "A game about destroying things.",
            type: types.Content,
            category: categories["Interaction Tech Art"],
            videoSrc: "https://www.youtube.com/embed/watch?v=kQOtVj25FLw",
            link: "https://jaslynnn.itch.io/homewrecker",
            extraContent: (<DocumentWithTOC />)

        },
        {
            name: "Plant Feelings",
            role: "#Creative coding | #Arduino | #p5.js",
            image: "/PlantFeelings.png",
            quote: "Visualisation of a plant’s emotional state using live input from a soil moisture sensor, inspired by the debate around bonsai ethics.",
            type: types.Content,
            category: categories["Interaction Tech Art"],
            link: "https://jaslynnn.github.io/PlantFeelingsDemo/",
            extraContent: (<PlantFeelingsTOC />)


        },
        {
            name: "Kindergarden",
            role: "#WaterShader | #Buoyancy | #Unity | #Maya | #Substance Painter",
            image: "/FiendControl.png",
            quote: "Stylised water shader with buoyancy for rubber duckies in a fantasy kindergarden.",
            type: types.Content,
            category: categories["Interaction Tech Art"],
            videoSrc: "https://www.youtube.com/embed/watch?v=8g3Q8hZtQF8"


        },

        {
            name: "Adblocker",
            role: "#Solo project | 7 weeks | #Unity | #Illustrator ",
            image: "/FiendControl.png",
            quote: "A game where you get to delete ads.",
            type: types.Content,
            category: categories["Games/3D"],
            videoSrc: "https://www.youtube.com/embed/watch?v=BwvkwqajtLE?si=NhSi0FJ58xKnPB3_",
            link:"https://jaslynnn.itch.io/adblocker"

        },

        {
            name: "To float",
            role: "#Solo project | 4 weeks | #UnrealEngine | #Maya | #Substance Painter",
            image: "/FiendControl.png",
            quote: "An elff that is determined to float in the water.",
            type: types.Content,
            category: categories["Games/3D"],
            videoSrc: "https://www.youtube.com/embed/watch?v=AnKhqSyEloE"
        },

        {
            name: "RuneSoap",
            role: "2 Weeks | #Animation | #Maya | #Substance Painter",
            image: "/FiendControl.png",
            quote: "An advertisement for a soap company that doesnt exist yet",
            type: types.Content,
            category: categories["Games/3D"],
            videoSrc: "https://www.youtube.com/embed/watch?v=Dhy9HvqzTgY?si=qmCH3mUpDPUwAEay"

        },

        {
            name: "Elff",
            role: "2 Weeks | #Rigged | #Maya | #Substance Painter",
            image: "/RuneSoap2.jpg",
            quote: "Just an elf that wants to take a break",
            type: types.Content,
            category: categories["Games/3D"],


        },

        {
            name: "Bestseller",
            role: "4 Days | #Maya | #Substance Painter",
            image: "/Bestseller.JPG",
            quote: "Inspired by the phrase [Beauty is pain]",
            type: types.Content,
            category: categories["Games/3D"],


        },
        {
            name: "Human Heart",
            role: "1 Week | #Maya | #Substance Painter",
            image: "/Heart2.JPG",
            quote: "The human heart",
            type: types.Content,
            category: categories["Games/3D"],


        },
        {
            name: "UFO Donut",
            role: "3 Days | #Maya | #Substance Painter",
            image: "/UFODonut.png",
            quote: "It always starts with a donut",
            type: types.Content,
            category: categories["Games/3D"],


        },
        /*{
            name: "Zombie",
            role: "3 Weeks | #Maya | #Substance Painter",
            image: "/Zombie.png",
            quote: "Its a Zombie",
            type: types.Content,
            category: categories["Games/3D"],


        },
*/




    {
        name: "Fiend Control UI",
            role: "Pair project | #figma ",
        image: "/FiendControlUI.png",
        quote: "A game about working as pest control, kinda.",
        type: types.Content,
        category: categories["Personal Projects"],
        link: "https://jaslynnn.itch.io/fiend-control"


    },
        {
            name: "Amortis",
            role: " 4 ppl team | #illustrator | #figma",
            image: "/AmortisUI2.png",
            quote: "Inventory and equipment system for a survival game",
            type: types.Content,
            category: categories["Personal Projects"],


        },
        {
            name: "Toyshop complimentary NFC App prototype ",
            role: "#Adobe XD | Illustrator ",
            image: "/FiendControlUI.png",
            quote: "Prototype for a complimentary app that is able to control a game and unlocks various personalisation features using NFC tokens.",
            type: types.Content,
            category: categories["Personal Projects"],
            videoSrc: "https://www.youtube.com/embed/watch?v=JyDijOteFr4"


        },
        {
            name: "NTU App Redesign",
            role: "#figma ",
            image: "/FiendControlUI.png",
            quote: "Not just a lot of Adobe Illustrator",
            type: types.Content,
            category: categories["Personal Projects"],
            videoSrc: "https://www.youtube.com/embed/watch?v=8RC-BkxN1bg"


        },

        {
            name: "NTU App watch design prototype ",
            role: "#figma ",
            image: "/FiendControlUI.png",
            quote: "Not just a lot of Adobe Illustrator",
            type: types.Content,
            category: categories["Personal Projects"],
            videoSrc: "https://www.youtube.com/embed/watch?v=II_dPYzD4mY"


        },

        {
            name: "Can you just come and eat dinner?",
            role: "Solo project | #Aftereffects | #Illustrator ",
            image: "/FiendControl.png",
            quote: "An animation about a video game character Loji, who livestreams a day in its life and gets kidnapped by a villain.",
            type: types.Content,
            category: categories["Personal Projects"],
            videoSrc: "https://www.youtube.com/embed/watch?v=1LvPjJvDuic"

        },
        {
            name: "IMMeta",
            role: " Freelance | #Aftereffects | #Illustrator",
            image: "/IMMeta.PNG",
            quote: "Printed into a wall sticker with 3 screens showing the motion graphics created from it.",
            type: types.Content,
            category: categories["Personal Projects"],

        },
        {
            name: "2009",
            role: "#Illustrator | #Photoshop | #Mockup",
            image: "/MockUpPurpleBG3.png",
            quote: "Inspired by the song Heather by Conan Grey",
            type: types.Content,
            category: categories["Personal Projects"],


        },
        {
            name: "2009 Pattern",
            role: "#Illustrator",
            image: "/2009Tile.png",
            quote: "Inspired by the song Heather by Conan Grey, by the emotion jealousy and my own experiences",
            type: types.Content,
            category: categories["Personal Projects"],


        },

        {
            name: "Sushi Vending Machine",
            role: "#Illustrator",
            image: "/SushiMachine.png",
            quote: "A sushi vending machine that sells isometric sushi",
            type: types.Content,
            category: categories["Personal Projects"],


        },
        {
            name: "Isometric Sushi Cards",
            role: "#Illustrator",
            image: "/SushiCards.png",
            quote: "Cards used to buy sushi from the vending machine.",
            type: types.Content,
            category: categories["Personal Projects"],


        },
        {
            name: "Amphibi",
            role: "#Illustrator",
            image: "/AmphibiPoster.png",
            quote: "Design for a game development club",
            type: types.Content,
            category: categories["Personal Projects"],


        },
        /*
        {
            name: "Choice",
            role: " #ArtGalleryPiece | #Illustrator",
            image: "/Choice.png",
            quote: "Displayed at a gallery in Lasalle for awhile with a huge dice on top. Board game design about how everyone does not start at the same starting line",
            type: types.Content,
            category: categories["Personal Projects"],


        },
        */


    ];

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    return (
        <div className="w-full max-w-7xl mx-auto my-10 lg:py-20 py-10 px-7 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="w-full lg:w-[35%]">
                    <div className="sticky lg:top-20">
                        <h2 className="text-3xl text-center lg:text-left md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-400 to-white leading-tight mb-0">Portfolio</h2>
                        <p className="text-sm text-neutral-400 lg:mt-6 mt-2 mb-3 lg:mb-6 max-w-sm text-center lg:text-left">Click to show items in category.</p>
                        {Object.keys(categories)
                            .filter((key) => isNaN(Number(key))) // ✅ Filter out numeric values
                            .map((cat) => (
                                <Button
                                    key={cat}
                                    variant="secondary"
                                    onClick={() => setSelectedCategory(categories[cat as keyof typeof categories])} // ✅ Correctly maps to enum values
                                    className={`lg:w-5/6 w-full mt-3 lg:mb-5 pl-6 lg:justify-start font-light text-xs rounded-3xl hover:bg-white/80 bg-white/10 text-white  ${
                                        selectedCategory === categories[cat as keyof typeof categories] ? "bg-white/10 " : ""
                                    }`}
                                >
                                    <b className="text-lg font-bold text-left justify-start">{cat}</b> {/* ✅ Displays only the enum names */}
                                </Button>

                            ))}
                    </div>
                </div>

                <div className="col-span-4 w-full">
                    <div className="w-full lg:grid lg:gap-12 grid-cols-1 hidden lg:block lg:grid-cols-2" id="Games/3D Section">
                        <AnimatePresence mode="wait">
                            {testimonialData.filter(t => selectedCategory === null || t.category === selectedCategory).map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.name} // Ensure smooth animations
                                    initial={{opacity: 0, y: 10}} // Start with fade-in & slide-up
                                    animate={{ opacity: 1, y: index % 2 === 0 ? 0 : 50 }} // Shift up by 50px for even-indexed items
                                    exit={{opacity: 0, y: -10}} // Fade out & slide-up when removed
                                    transition={{duration: 0.3}} // Adjust speed as needed

                                >
                                    <TestimonialCard key={index} {...testimonial} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                    <div className="w-full grid gap-12 grid-cols-1 lg:hidden lg:grid-cols-2" id="Games/3DSection">
                        <AnimatePresence mode="wait">
                            {testimonialData.filter(t => selectedCategory === null || t.category === selectedCategory).map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.name} // Ensure smooth animations
                                    initial={{opacity: 0, y: 10}} // Start with fade-in & slide-up
                                    animate={{ opacity: 1 }} // Shift up by 50px for even-indexed items
                                    exit={{opacity: 0, y: -10}} // Fade out & slide-up when removed
                                    transition={{duration: 0.3}} // Adjust speed as needed

                                >
                                    <TestimonialCard key={index} {...testimonial} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}

enum types {
    "Header",
    "Content",
}

enum categories {
    "Interaction Tech Art", 
    "Games/3D",
    "Personal Projects",
}

function StringToList({input}: { input: string }) {
    const items = input.split(",").map((str) => str.trim());
    return (
        <ul className="list-decimal pb-4">
            <p className=" text-neutral-300 leading-relaxed pl-10">
            {items.map((item, index) => (
                <li key={index} className="text-white mb-4 ">{item}</li>
            ))}</p>
        </ul>
    );
}

//Function to only show categories of items only when clicked

const TestimonialCard = ({name, role, image, quote, type , category, videoSrc, link, extraContent}: {
    name: string;
    role: string;
    image: string;
    quote: string;
    type: types
    category: categories;
    videoSrc?: string; // Optional prop for video source
    link?: string;
    extraContent?: React.ReactNode;

}) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play(); // Play video on hover
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause(); // Pause video when not hovering
        }
    };


    return (

        <motion.div whileHover={{y: -5}}
                    className="flex flex-col p-4 rounded-2xl h-full border border-gray-400 bg-white relative"
                    onMouseEnter={handleMouseEnter} // Trigger play on hover
                    onMouseLeave={handleMouseLeave} // Trigger pause on leave
        >


            {/* Embed YouTube video if videoSrc is provided */}
            {videoSrc && videoSrc.includes("youtube.com") && type !== types.Header&&(
                <div className="w-full h-0 pb-[56.25%] relative">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-md border-none"
                        src={`https://www.youtube.com/embed/${videoSrc.split('v=')[1]}`}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="YouTube video"
                    />
                </div>
            )}

            {!videoSrc && type !== types.Header && (
                <Image
                    src={image}
                    alt={name}
                    width={400}
                    height={500}
                    className="w-full rounded-b-md object-contain"
                    draggable={false}
                />
            )}

            <div className="flex items-center gap-4 mb-1">
                <div>
                    <h3 className="text-xl font-semibold text-white pl-4 pt-2">{name}</h3>
                    <p className="text-md text-neutral-400 pl-4 pt-2 pb-2">{role}</p>
                </div>
            </div>
            {type === types.Header && (
                    <StringToList input={quote}/>
                )}
            {type !== types.Header && (<p className="text-sm text-neutral-300 leading-relaxed pl-4"> {quote} </p>)}
            {type !== types.Header && (<div className="flex ml-4 mt-4 mb-4 flex-row gap-4 w-full justify-start items-center m-auto">
                {link && (
                <Button
                as={Link}
                href={link}

                target="_blank"
                variant="primary"
                className=" w-fit h-fit font-light text-sm md:block rounded-3xl bg-white/1 hover:bg-white/30 text-white border-0 text-center"
            >
                Try now
            </Button>)}
                {extraContent && (
                    <div className=" ">
                        <ModalButton
                            buttonLabel="How I Made It"
                            modalTitle={name}
                        >
                            <div className="bg-black drop-shadow-[0_5px_5px_rgba(0,0,0,100)]">
                                <div className=" max-h-[56vh] overflow-y-hidden">
                                    {extraContent}
                                </div>
                            </div>


                        </ModalButton>
                    </div>
                )}


            </div>)}

        </motion.div>
    );
};
