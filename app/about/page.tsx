import CTA from "@/components/cta";
import { FrequentlyAskedQuestions } from "@/components/faq";
import { SpotlightLogoCloud } from "@/components/logos-cloud";
import { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <div >
      <FrequentlyAskedQuestions />
      <SpotlightLogoCloud />
     
      <CTA />
    </div>
  );
}
export default About;