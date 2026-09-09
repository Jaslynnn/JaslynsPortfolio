"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconArrowRight } from "@/icons/arrow-right";

type ExperienceEntry = {
  role: string;
  org: string;
  dates: string;
  bullets: string[];
};

const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Creative Technologist (Freelance) / PR Intern",
    org: "Gloo Communications Pte. Ltd.",
    dates: "May 2026 – Present (Internship May–Jul 2026; freelance ongoing)",
    bullets: [
      "Identified that internal reporting and coverage tracking were slow and manual; in just under two months, built a Timeline Builder, an email automation tool, and a website for the company — incorporating AI tooling where it sped up the work",
      "Took on freelance work after the internship to continue building on these systems",
    ],
  },
  {
    role: "Project-in-Charge",
    org: "Ngee Ann Polytechnic",
    dates: "Mar 2023 – Jul 2024",
    bullets: [
      "Created various media and set up projects and hardware for Level 4 Immersive Labs in the School of ICT",
    ],
  },
  {
    role: "Developer and Artist Intern",
    org: "Swirly Studios LLC, USA (Silicon Valley)",
    dates: "Sep 2022 – Feb 2023",
    bullets: [
      "Developed a Spanish-language learning web game using TypeScript and Lit.dev",
      "Created codable graphical assets (SVG) and integrated them into the application",
    ],
  },
  {
    role: "Multimedia Intern",
    org: "HelloHolo | Tech Start-Up",
    dates: "Mar 2022",
    bullets: [
      "Animated 3D assets in Maya for an NFT web application",
      "Developed an overseas application for Microsoft HoloLens in Unity (C#) across a team of 5 developers and designers",
    ],
  },
  {
    role: "3D Environment Modeler",
    org: "Istana Animated Video Project",
    dates: "Nov 2021 – Feb 2022",
    bullets: [
      "Created 3D environment models in Maya for an animated video produced for Istana Singapore (Office of the President of the Republic of Singapore), which reached 812 views and was launched on the official Istana website",
    ],
  },
  {
    role: "UI/UX Designer",
    org: "NP Global",
    dates: "Jun 2020, Jun 2021",
    bullets: [
      "Redesigned the Ngee Ann Polytechnic Global website in Adobe XD based on user feedback from 4 focus groups (~50 participants)",
    ],
  },
];

const EDUCATION = [
  {
    school: "Nanyang Technological University",
    detail: "BFA in Art, Design and Media",
    dates: "2023 – Present",
    note: "NTU Koh Boon Hwee Scholarship (beneficiary)",
  },
  {
    school: "Ngee Ann Polytechnic",
    detail: "Diploma in Immersive Media",
    dates: "2020 – 2023",
    note: "Ngee Ann Polytechnic Scholarship",
  },
];

const EducationList = () => (
  <div className="space-y-6">
    {EDUCATION.map((entry, index) => (
      <div key={index}>
        <p className="text-white font-semibold">{entry.school}</p>
        <p className="text-neutral-400 text-sm">
          {entry.detail} | {entry.dates}
        </p>
        <p className="text-neutral-400 text-sm">{entry.note}</p>
      </div>
    ))}
  </div>
);

const ExperienceList = () => (
  <div className="space-y-6">
    {EXPERIENCE.map((entry, index) => (
      <div key={index}>
        <p className="text-white font-semibold">{entry.role}</p>
        <p className="text-neutral-400 text-sm mb-2">
          {entry.org} | {entry.dates}
        </p>
        <ul className="list-disc pl-5 space-y-1">
          {entry.bullets.map((bullet, bulletIndex) => (
            <li key={bulletIndex} className="text-neutral-300">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const FAQs: { question: string; answer: React.ReactNode }[] = [
  {
    question: "Education",
    answer: <EducationList />,
  },
  {
    question: "Experience",
    answer: <ExperienceList />,
  },
  {
    question: "Achievements",
    answer:
    "NTU Koh Boon Hwee Scholarship (beneficiary) [2024] , NP Scholarship [2023] , GEIP (Global Entrepreneurship Internship Program) Award Program [2023] , Unity Certified Associate Game developer - 610/700 [2022], Worldskills Singapore Web Technologies [2021] , TF(Temasek Foundation) Scale Scholarship Award Program - 2021, Director's Honor Roll - 3rd in level [2020]",
  },
];
function StringToList({input}: { input: string }) {
  const items = input.split(",").map((str) => str.trim());

  return (
      <ul className="list-none  ">
        <p className="">
          {items.map((item, index) => (
              <li key={index} className="text-white mb-4 p-0 ">{item} </li>

          ))}</p>

      </ul>
  );
}
export function FrequentlyAskedQuestions() {
  const [open, setOpen] = React.useState<string | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto my-5 md:my-5 py-5 md:py-20 px-4 md:px-8">
      <div className="text-balance relative z-20 mx-auto mb-4 max-w-4xl text-center">
        <h2
          className={cn(
            "inline-block text-3xl md:text-4xl ",
            " text-white"
          )}
        >
          Some other things:
        </h2>
      </div>
      <h4 className="max-w-lg text-m  text-center mx-auto mt-4 text-neutral-400 px-4 md:px-0">
More about me...
    </h4>
      <div className="mt-10 md:mt-20 max-w-2xl mx-auto divide-y divide-neutral-800">
        {FAQs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            open={open}
            setOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
}

const FAQItem = ({
  question,
  answer,
  setOpen,
  open,
}: {
  question: string;
  answer: React.ReactNode;
  open: string | null;
  setOpen: (open: string | null) => void;
}) => {
  const isOpen = open === question;

  return (
    <motion.div
      className="cursor-pointer py-4 md:py-6"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start justify-between">
        <div className="pr-8 md:pr-12">
          <h3 className="text-base md:text-lg font-bold text-neutral-200">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden text-sm md:text-base text-neutral-400 mt-2"
              >
                {typeof answer === "string" ? (
                  <StringToList input={answer} />
                ) : (
                  answer
                )}



              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative mr-2 md:mr-4 mt-1 h-5 w-5 md:h-6 md:w-6 flex-shrink-0">
          <motion.div
            animate={{
              scale: isOpen ? [0, 1] : [1, 0, 1],
              rotate: isOpen ? 90 : 0,
              marginLeft: isOpen ? "1.5rem" : "0rem",
            }}
            initial={{ scale: 0 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <IconArrowRight className="absolute inset-0 h-5 w-5 md:h-6 md:w-6 transform text-white-500" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
