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
            "inline-block text-3xl md:text-5xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)]",
            "bg-clip-text text-transparent"
          )}
        >
          About me
        </h2>
      </div>
        </Balancer>
      </div>
      <h4 className="max-w-lg text-m  text-center mx-auto mt-4 text-neutral-400 px-4 md:px-0">
          Im Jaslyn Chen, a technical artist passionate about interaction design, pipeline optimisation, 3D and game development.
        <br></br>
        <br></br>
        My favourite themes are fantasy, toys and physics based simulations.  
        
        
        
        
        </h4>
        <br></br>
        <br></br>
        <br></br>
      
 <div className="text-balance relative z-20 mx-auto mb-4 max-w-4xl text-center">
        <h4
          className={cn(
            "inline-block text-center text-1xl md:text-3xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)]",
            "bg-clip-text text-transparent"
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
            "inline-block text-center text-1xl md:text-3xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)]",
            "bg-clip-text text-transparent"
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
            "inline-block text-center text-1xl md:text-3xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)]",
            "bg-clip-text text-transparent"
          )}
        >
          Version control & IDE Knowledge:
        </h4>
        <h4 className="max-w-lg text-m  text-center mx-auto mt-4 text-neutral-400 px-4 md:px-0 ">
          Git , Github , Visual Studio, Visual Studio Code, Jetbrains Rider, Webstorm , SourceTree, Bitbucket
        </h4>




      </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="text-balance relative z-20 mx-auto mb-4 max-w-4xl text-center">
            <h4
                className={cn(
                    "inline-block text-center text-1xl md:text-3xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)]",
                    "bg-clip-text text-transparent"
                )}
            >
               Currently Learning:
            </h4>
            <h4 className="max-w-lg text-m  text-center mx-auto mt-4 text-neutral-400 px-4 md:px-0">
                Nuke, Houdini, Rigging, Mocap [ Vicon, Xsense ], Arduino and others.
            </h4>
        </div>
    </div>
    
  );
}
