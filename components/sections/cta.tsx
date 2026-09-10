"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandItch,
  IconBrandLinkedin,
  IconBrandMastodon,
  IconBrandTwitter,
} from "@tabler/icons-react";
import {SocialIcon} from "@/components/sections/footer";

const socials = [
  { title: "Instagram", href: "https://www.instagram.com/jjastlyinc/", icon: IconBrandInstagram },
  { title: "Discord", href: "https://discordapp.com/users/451253332741455884", icon: IconBrandDiscord },
  { title: "Github", href: "https://github.com/Jaslynnn", icon: IconBrandGithub},
  { title: "Linkedin", href: "https://www.linkedin.com/in/jaslync", icon: IconBrandLinkedin},
];


const BackgroundGrid = ({ className }: { className?: string }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className={cn("absolute inset-0 overflow-hidden", className)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={controls}
        className="absolute w-full h-full"
        style={{
          background: `radial-gradient(circle at center, rgba(40,40,40,0.8) 0%, rgba(20,20,20,0.6) 30%, rgba(0,0,0,0.4) 70%)`,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "120px 120px",
          }}
        />
      </motion.div>
    </div>
  );
};


export default function CTA() {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      });
    }
  }, [controls, inView]);

  return (
    <div className="w-full max-w-7xl mx-auto min-h-[80vh] md:min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="w-full max-w-4xl mx-auto text-center py-8 md:py-12 lg:py-20 pb-16 md:pb-32 lg:pb-48 relative z-10"
      >
        <div className="relative z-20">
          <h2
            className={cn(
              "inline-block text-3xl md:text-5xl font-bold",
              "text-white",
              "px-4 md:px-8"
            )}
          >
            Contact me
          </h2>


          <p className="max-w-lg text-xs sm:text-sm md:text-base text-neutral-400 text-center mx-auto my-4 md:my-6 lg:my-8 px-4">
            Email: jaslynchenwh@gmail.com <br/>
            Instagram: <a className={"underline"} href = "https://www.instagram.com/jjastlyinc/" target={"_blank"}> @jjastlyinc </a> <br/>
            Discord: @aerynnn07 <br/>
            Github: @Jaslynnn <br/>
            <br/>
            Itch.io: <a className={"underline"} href = "https://jaslynnn.itch.io/" target={"_blank"}> jaslynnn.itch.io </a> <br/>
            Artstation: <a className={"underline"} href = "https://jaslyn.artstation.com" target={"_blank"}> jaslyn.artstation.com</a> <br/>
            Linkedin: <a className={"underline"} href = "https://www.linkedin.com/in/jaslync"target={"_blank"}> https://www.linkedin.com/in/jaslync</a> <br/>
          </p>
        </div>
          <div className="">
            <div className="flex gap-3 mt-6 w-full flex-center justify-center md:justify-center">
              {socials.map((social, idx) => (
                  <SocialIcon key={`social-${idx}`} href={social.href} >
                    <social.icon strokeWidth={1.5} width={20} height={20} />
                  </SocialIcon>
              ))}
            </div>
          </div>
        <br></br>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative z-20"
        >

        </motion.div>
      </motion.div>
    </div>
  );


}
