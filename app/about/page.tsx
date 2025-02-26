import CTA from "@/components/cta";
import { FrequentlyAskedQuestions } from "@/components/faq";

import { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <div >
      <FrequentlyAskedQuestions />
      <CTA />
    </div>
  );
}
export default About;