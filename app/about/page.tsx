import CTA from "@/components/sections/cta";
import { FrequentlyAskedQuestions } from "@/components/sections/faq";
import { SpotlightLogoCloud } from "@/components/sections/logos-cloud";
import { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <div >
      <SpotlightLogoCloud />
      <FrequentlyAskedQuestions />
     
    
    </div>
  );
}
export default About;