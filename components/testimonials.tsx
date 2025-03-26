"use client";

import { cn } from "@/lib/utils";
import React, {useRef, useState} from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/button";
import {

  useScroll,
  useMotionValueEvent,
} from "motion/react";



export function Testimonials() {

const ref = useRef<HTMLDivElement>(null);
const { scrollY } = useScroll({
  target: ref,
  offset: ["start start", "end start"],
});
const [visible, setVisible] = useState<boolean>(false);
useMotionValueEvent(scrollY, "change", (latest) => {
  if (latest > 100) {
    setVisible(true);
  } else {
    setVisible(false);
  }
});
  return (

    <div className="w-full max-w-7xl mx-auto my-10 py-20 px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Title Section - 40% */}
        <div className="w-full lg:w-[40%]">
          <div className="sticky top-20 ">
            <h2
              className={cn(
                "text-3xl text-center lg:text-left md:text-6xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] ",
                "bg-clip-text text-transparent leading-tight"
              )}
            >
              Portfolio<br />
              
            </h2>
            <p className="text-sm text-left lg:text-left mx-auto lg:mx-0 text-neutral-400 mt-6 max-w-sm md:text-center text-center" >
              Click to navigate to category.
            </p>
            <br></br>
            <Button
                as={Link}
                href="#gameSection"
                variant="secondary"
                className=" lg:text-left lg:w-5/6 w-full  mt-3 mb-5 font-light text-xs md:block rounded-3xl hover:bg-white/30 text-white ps-8 text-center "
            >
              <b className={"text-lg font-bold"}>Games </b> <br/>

              <span className={"w-full"}> Shaders | Development | VFX</span>
            </Button>
            <Button
                as={Link}
                href="#gameSection"
                variant="secondary"
                className=" lg:text-left lg:w-5/6 w-full  mt-3 mb-5 font-light text-xs md:block rounded-3xl hover:bg-white/30 text-white ps-8 text-center "
            >
              <b className={"text-lg font-bold"}>3D </b> <br/>

              <span className={"w-full"}> Models | Sculpting | Animation </span>
            </Button>
            <Button
                as={Link}
                href="#gameSection"
                variant="secondary"
                className=" lg:text-left lg:w-5/6 w-full  mt-3 mb-5 font-light text-xs md:block rounded-3xl hover:bg-white/30 text-white ps-8 text-center "
            >
              <b className={"text-lg font-bold"}>UI/UX Design </b> <br/>

              <span className={"w-full"}> Game | Website | Mobile</span>
            </Button>
            <Button
                as={Link}
                href="#gameSection"
                variant="secondary"
                className=" lg:text-left lg:w-5/6 w-full  mt-3 mb-5 font-light text-xs md:block rounded-3xl hover:bg-white/30 text-white ps-8 text-center "
            >
              <b className={"text-lg font-bold"}>Graphic design </b> <br/>

              <span className={"w-full"}> Illustration | Motion Graphics </span>
            </Button>

          </div>
        </div>
        <div>

        </div>
<div className = "col-span-4 w-full">

        {/* Right Testimonials Section - 60% */}
        <div className="w-full grid gap-8 grid-cols-1 lg:grid-cols-2 md:w-[100%] mx-auto" id="gamesSection">
          <TestimonialCard
            name="Games"
            role="Shaders | Development | VFX"
            image="/Homewrecker.jpg"
            quote="Games games games games"
          />
          <TestimonialCard
            name="Homewrecker"
            role="#BreakStuff | #ToonShader | #Dev"
            image="/Homewrecker.jpg"
            quote="A game about destroying things"
            className="lg:mt-[50px]"
          />
          <TestimonialCard
            name="UI/UX design"
            role="Game | Website | Mobile"
            image="/FiendControl.png"
            quote="Missed only when its gone"
            className="lg:mt-[-50px]"
          />
          <TestimonialCard
            name="Graphic design"
            role="Illustration | Motion Graphics "
            image="/FiendControl.png"
            quote="Not just alot of adobe illustrator"
          />
        </div>
  <div className="w-full grid gap-8 grid-cols-1 lg:grid-cols-2 md:w-[100%] mx-auto" id="_3DSection">
    <TestimonialCard
        name="Games"
        role="Shaders | Development | VFX"
        image="/Homewrecker.jpg"
        quote="Ok so like I decided not to UV unwrap"
    />
    <TestimonialCard
        name="3D"
        role="Models | Sculpting | Animation"
        image="/RuneSoap.jpg"
        quote="Pretty UV Unwrapped stuff"
        className="lg:mt-[50px]"
    />
    <TestimonialCard
        name="UI/UX design"
        role="Game | Website | Mobile"
        image="/FiendControl.png"
        quote="Missed only when its gone"
        className="lg:mt-[-50px]"
    />
    <TestimonialCard
        name="Graphic design"
        role="Illustration | Motion Graphics "
        image="/FiendControl.png"
        quote="Not just alot of adobe illustrator"
    />
  </div>
      </div>

    </div>
    </div>
  );
}

const TestimonialCard = ({
  name,
  role,
  image,
  quote,
  className,
}: {
  name: string;
  role: string;
  image: string;
  quote: string;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "flex flex-col md:max-h-[700px] h-96 p-2 rounded-[17px]",
        "border border-[#474747]",
        "bg-white",
        "relative isolate",
        className
      )}
    >
        <Image
            src= {image} alt= {name}
            width={400}
            height={500}
            className="w-full rounded-b-md max-w-[700px] object-contain select-none filter "
            draggable={false}
        />
      <br></br>
      <div className="flex items-center gap-4 mb-8">
        <div className=" h-1/2  opacity-10 border-neutral-700 object-cover bg-cover background-video rounded-full">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h3 className=" text-xl font-semibold text-white z-20 pl-4">{name}</h3>
          <p className="text-sm text-neutral-400 pl-4">{role}</p>
        </div>
      </div>
      <p className="text-lg text-neutral-300 leading-relaxed pl-4">
        &quot;{quote}&quot;
      </p>
    </motion.div>
  );
};
