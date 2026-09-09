"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconArrowRight } from "@/icons/arrow-right";

const FAQs = [
  {
    question: "Education",
    answer:
      `Bachelor of Fine Arts in Media - Game Design ,
      \n [Singapore | Nanyang Technological University - School of Art. Design and Media], Diploma in Immersive media, [Singapore | Ngee Ann Polytechnic | School of InfoComm Technology]`,

    },
  {
    question: "Experience",
    answer:
    `Project Manager [Motion Graphics]  Ngee Ann polytechnic, Web Developer and Designer - Swirly Studios LLC USA , Multimedia Intern - HelloHolo , 3D Environment Modeler - Istana animated short film , Web User Interface/ experience designer - OIC Ngee Ann Polytechnic`,

    },
  {
    question: "Achievements",
    answer:
    "NTU Koh Boon Hwee Scholarship [2024] , NP Scholarship [2023] , GEIP (Global Entrepreneurship Internship Program) Award Program [2023] , Unity Certified Associate Game developer - 610/700 [2022], Worldskills Singapore Web Technologies [2021] , TF(Temasek Foundation) Scale Scholarship Award Program - 2021, Director's Honor Roll - 3rd in level [2020]",

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
            "inline-block text-3xl md:text-4xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)]",
            "bg-clip-text text-transparent"
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
  answer: string;
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
                <StringToList input={answer} />



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
