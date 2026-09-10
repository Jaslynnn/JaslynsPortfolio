import Link from "next/link";
import React from "react";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export function Footer() {
  const socials = [
    { title: "Instagram", href: "https://www.instagram.com/jjastlyinc/", icon: IconBrandInstagram },
    { title: "Discord", href: "https://discordapp.com/users/451253332741455884", icon: IconBrandDiscord },
    { title: "Github", href: "https://github.com/Jaslynnn", icon: IconBrandGithub },
    { title: "Linkedin", href: "https://www.linkedin.com/in/jaslync", icon: IconBrandLinkedin },
  ];

  return (
    <div className="relative border-t border-white/5 px-8 py-1 bg-black w-full overflow-hidden">
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 -mb-px flex h-8 items-end overflow-hidden">
        <div className="flex -mb-px h-[2px] w-56">
          <div className="w-full flex-none [background-image:linear-gradient(90deg,rgba(255,255,255,0)_0%,#FFFFFF_32.29%,rgba(255,255,255,0.3)_67.19%,rgba(255,255,255,0)_100%)] blur-xs" />
        </div>
      </div>

      <div className="max-w-[1600px] my-16 mx-auto text-sm text-neutral-400 flex flex-col md:px-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-8">
          <div className="flex gap-3">
            {socials.map((social, idx) => (
              <SocialIcon key={`social-${idx}`} href={social.href}>
                <social.icon strokeWidth={1.5} width={15} height={15} />
              </SocialIcon>
            ))}
          </div>

          <p className="text-white font-semibold md:text-end">
            @2026 Jaslyn Chen | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

interface SocialIconProps {
  href: string;
  children: React.ReactNode;
}

export function SocialIcon({ href, children }: SocialIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center hover:bg-neutral-700/20 transition-all border border-neutral-700/50 shadow-[2px_-2px_15px_rgba(0,0,0,0.2)] hover:shadow-[4px_-4px_20px_rgba(0,0,0,0.3)] relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:rounded-full"
    >
      <div className="w-5 h-5 text-neutral-400 hover:text-white transition-colors flex justify-center items-center">
        {children}
      </div>
    </Link>
  );
}
