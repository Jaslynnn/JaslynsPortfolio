"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
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
    <div className="w-full max-w-7xl mx-auto my-10 md:my-20 py-10 md:py-20 px-4 md:px-8 pb-0 mb-0">
      <div className="text-balance relative z-20 mx-auto mb-0 max-w-4xl text-center text-lg tracking-tight text-neutral-300 md:text-3xl px-4">
        <Balancer>
 <div className="text-balance relative z-20 mx-auto mb-0 max-w-4xl text-center">
        <h2
          className={cn(
            "inline-block text-3xl md:text-5xl ",
            " text-white"
          )}
        >
          About me
        </h2>
      </div>
        </Balancer>
      </div>
      <p className="max-w-3xl text-center mx-auto mt-4 text-neutral-400 px-4 md:px-0">
          I create the systems ideas need, whether they&rsquo;re brand new or already running. I sit between design and development, I diagnose where a workflow or concept falls short, then build the tool, prototype, or architecture that gets it working.
        </p>
        <p className="max-w-3xl text-center mx-auto mt-4 text-neutral-400 px-4 md:px-0">
          My background spans production tooling, technical game design, and 3D/technical art, with hands-on experience designing custom AI workflows where they genuinely speed things up.
        </p>
        <br></br>
        <br></br>
        <br></br>

 <div className="text-balance relative z-20 mx-auto mb-4 max-w-4xl text-center">
        <h4
          className={cn(
            "inline-block text-center text-1xl md:text-3xl ",
            " text-white"
          )}
        >
          Software knowledge
        </h4>
      </div>
       
        <br></br>
        
      
      
      
      <div className=" grid items-center grid-cols-6 sm:grid-cols-9 md:grid-cols-6 gap-6 md:gap-8 w-full max-w-2xl mx-auto relative px-4 justify-center align-middle">
       

        {logos.map((logo, idx) => (
          <div className="relative w-full h-full"  
            key={logo.src + idx}
          >
            
            <Image
              src={logo.src}
              loader={({ src }) => src}
              alt={logo.name}
              width={100}
              height={100}
              className="w-full max-w-[60px] object-contain select-none filter "
              draggable={false}
            />
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
      
      <div className="text-balance relative z-20 mx-auto mb-4 max-w-4xl text-center">
        <h4
          className={cn(
            "inline-block text-center text-1xl md:text-3xl ",
            " text-white"
          )}
        >
          Coding Experience:
        </h4>
        <h4 className="max-w-lg text-m  text-center mx-auto mt-4 text-neutral-400 px-4 md:px-0">
          C#, Typescript, Javascript, p5.js, CSS, HTML, React.js, Lit.dev, SVG, Json, Nosql, OOP, MVC, Firebase, VR, AR[Vuforia], MR
        
        
        </h4>

      </div>
<br></br>
<br></br>
<br></br>
      <div className="text-balance relative z-20 mx-auto mb-4 max-w-4xl text-center">
        <h4
          className={cn(
            "inline-block text-center text-1xl md:text-3xl ",
            " text-white"
          )}
        >
          Version control & IDE Knowledge:
        </h4>
        <h4 className="max-w-lg text-m  text-center mx-auto mt-4 text-neutral-400 px-4 md:px-0 ">
          Git , Github , Visual Studio, Visual Studio Code, Jetbrains Rider, Webstorm , SourceTree, Bitbucket
        </h4>




      </div>
    </div>

  );
}
