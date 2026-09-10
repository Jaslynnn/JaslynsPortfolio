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
    <div className="relative border-t border-white/5 px-8 py-1 w-full overflow-hidden">
      <div className="max-w-[1600px] my-16 mx-auto text-sm text-neutral-400 flex flex-col md:px-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-8">
          <div className="flex gap-3">
            {socials.map((social, idx) => (
              <SocialIcon
                key={`social-${idx}`}
                href={social.href}
                label={social.title}
              >
                <social.icon strokeWidth={1.75} width={20} height={20} />
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
  label?: string;
  children: React.ReactNode;
}

export function SocialIcon({ href, label, children }: SocialIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-colors hover:border-white/25 hover:bg-white/5 hover:text-white"
    >
      {children}
    </Link>
  );
}
