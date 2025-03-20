"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconArrowRight } from "@/icons/arrow-right";

const FAQs = [
  {
    question: "Education",
    answer:
      "Bachelor of Fine Arts in Media, Game Design - Singapore, Nanyang Technological university, School of Art, Design and Media",
    answer2:
      "Diploma in Immersive media - Singapore, Ngee Ann Polytechnic, School of InfoComm Technology",

    },
  {
    question: "Experience",
    answer:
    "Web Developer and Designer - Swirly Studios LLC , Multimedia Intern - HelloHolo , 3D Environment Modeler - Istana animated short film , Web User Interface/ experience designer - OIC Ngee Ann Polytechnic",
  answer2:
  ""
    },
  {
    question: "Achievements",
    answer:
    "GEIP (Global Entrepreneurship Internship Program) Award Program , Unity Certified Associate Game developer , Worldskills Singapore Web Technologies , TF(Temasek Foundation) Scale Scholarship OVerseas Immersion Award Program , Director's Honor Roll, 3rd in level",
      answer2:
  "",
    },


];
export function FrequentlyAskedQuestions() {
  const [open, setOpen] = React.useState<string | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto my-10 md:my-20 py-10 md:py-20 px-4 md:px-8">
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
            answer2={faq.answer2}
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
  answer2,
  setOpen,
  open,
}: {
  question: string;
  answer: string;
  answer2: string;
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
                <p>{answer}</p>
                <br></br>
                <p>{answer2}</p>
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
