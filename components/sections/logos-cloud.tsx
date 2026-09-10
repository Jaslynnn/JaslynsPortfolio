"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { s } from "motion/react-client";

export function SpotlightLogoCloud() {
  const logos = [
    {
      name: "Unity",
      src: "/images/Unity.png",
    },
    {
      name: "Unreal Engine",
      src: "/images/Unreal.png",
    },
    
    {
      name:"Visual Studio",
      src:"/images/VisualStudio.png",
    },
    {
      name: "Maya",
      src: "/images/Maya.png",
    },
    {
      name: "ZBrush",
      src: "/images/Zbrush.png",
    },
    {
      name: "Substance Painter",
      src: "/images/Substance.png",
    },
    {
      name: "Illustrator",
      src: "/images/Illustrator.png",
    },
    {
      name: "Photoshop",
      src: "/images/Photoshop.png",
    },
    {
      name: "Premiere Pro",
      src: "/images/Premier.png",
      
    },
    {
      name: "After Effects",
      src: "/images/Aftereffects.png",
    },
    {
      name:"XD",
      src:"/images/Xd.png",
    },
    {
      name: "Figma",
      src: "/images/Figma.png",
    },

  
    
    

  ];

  return (
    <div className="w-full max-w-7xl mx-auto pt-24 md:pt-32 pb-0 px-4 md:px-8">
      <h2
        className={cn(
          "block text-center text-3xl md:text-5xl mb-6",
          "text-white"
        )}
      >
        About me
      </h2>
      <p className="max-w-3xl text-center mx-auto mt-4 text-neutral-400 px-4 md:px-0">
          I create the systems ideas need, whether they&rsquo;re brand new or already running. I sit between design and development, I diagnose where a workflow or concept falls short, then build the tool, prototype, or architecture that gets it working.
        </p>
        <p className="max-w-3xl text-center mx-auto mt-4 text-neutral-400 px-4 md:px-0">
          My background spans production tooling, technical game design, and 3D/technical art, with hands-on experience designing custom AI workflows where they genuinely speed things up.
        </p>

        <h4
          className={cn(
            "block text-center text-xl md:text-2xl mt-16 md:mt-24 mb-8",
            "text-white"
          )}
        >
          Software I work in
        </h4>

        <div className="grid items-center grid-cols-6 sm:grid-cols-9 md:grid-cols-6 gap-6 md:gap-8 w-full max-w-2xl mx-auto relative px-4 justify-center align-middle">
          {logos.map((logo, idx) => (
            <div className="relative w-full h-full" key={logo.src + idx}>
              <Image
                src={logo.src}
                loader={({ src }) => src}
                alt={logo.name}
                width={100}
                height={100}
                className="w-full max-w-[60px] object-contain select-none filter"
                draggable={false}
              />
            </div>
          ))}
        </div>

        <p className="max-w-2xl text-center mx-auto mt-8 text-sm text-neutral-500 px-4 md:px-0">
          Also coding in C#, TypeScript / JavaScript, React, p5.js and Unity shader graphs.
        </p>
    </div>

  );
}
