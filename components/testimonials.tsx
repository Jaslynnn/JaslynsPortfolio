"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Testimonials() {
  return (
    <div className="w-full max-w-7xl mx-auto my-20 py-20 px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Title Section - 40% */}
        <div className="w-full lg:w-[40%]">
          <div className="sticky top-20">
            <h2
              className={cn(
                "text-3xl text-center lg:text-left md:text-6xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] ",
                "bg-clip-text text-transparent leading-tight"
              )}
            >
              My Portfolio<br />
              
            </h2>
            <p className="text-sm text-center lg:text-left mx-auto lg:mx-0 text-neutral-400 mt-6 max-w-sm">
              Click an option to find out more.
            </p>
          </div>
        </div>

        {/* Right Testimonials Section - 60% */}
        <div className="w-full grid gap-8 grid-cols-1 lg:grid-cols-2 md:w-[60%] mx-auto">
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
        "flex flex-col h-96 p-8 rounded-[17px]",
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
            className="w-full max-w-[700px] object-contain select-none filter "
            draggable={false}
        />
      <br></br>
      <div className="flex items-center gap-4 mb-8">
        <div className=" h-1/2  opacity-10 border-neutral-700 object-cover bg-cover background-video">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h3 className=" text-xl font-semibold text-white z-20">{name}</h3>
          <p className="text-sm text-neutral-400">{role}</p>
        </div>
      </div>
      <p className="text-lg text-neutral-300 leading-relaxed">
        &quot;{quote}&quot;
      </p>
    </motion.div>
  );
};
