"use client";
import React, { useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionTemplate,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "motion/react";


import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { Button } from "./button";
import { GlowingEffect } from "./ui/glowing-effect";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const parentRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

  const { scrollY } = useScroll({
    target: parentRef,
  });

  const translateY = useTransform(scrollY, [0, 100], [0, -20]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.96]);
  const blurPx = useTransform(scrollY, [0, 100], [0, 5]);
  const filterBlurPx = useMotionTemplate`blur(${blurPx}px)`;

  return (
    <div
      ref={parentRef}
      className="relative flex flex-col items-start justify-start overflow-hidden px-4 pt-20 md:px-8 md:pt-40 bg-black"
    >
      <div className="text-balance relative z-20 mx-auto mb-3 mt-1 max-w-4xl text-center text-2xl font-normal tracking-tight text-neutral-300 md:text-7xl">
        <h2>
        <Balancer>
          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              y: translateY,
              scale,
              filter: filterBlurPx,
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              "inline-block bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)]",
              "bg-clip-text text-transparent"
            )}
          >
            Jaslyn Chen
          </motion.h4>
        </Balancer>
        </h2>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.5 }}
        className="relative z-20 mx-auto mt-4 max-w-xl px-4 text-center text-base/6 text-gray-500  sm:text-base"
      >
        Technical Artist | Dev | 3D | Shaders 
        
      </motion.p>
      
     
            <motion.div className="text-balance relative z-20 mx-auto mb-3 mt-6 max-w-4xl text-center text-2xl font-normal text-neutral-300 md:text-7xl"
              initial={{ opacity: 0, y: 10 }}
             
              transition={{ duration: 0.2, delay: 0.6 }}
              
              animate={{
                scale: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                },
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <Button
                as={Link}
                href="/#portfolio"
                variant="primary"
                className="font-light text-sm hidden md:block rounded-full bg-white/1 hover:bg-white/30 text-white border-0"
              >
                View works
              </Button>
            </motion.div>
          
        
      </div>
    
      
  );
}
