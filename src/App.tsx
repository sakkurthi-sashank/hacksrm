import { ContactUs } from "./components/ContactUs";
import { FAQSection } from "./components/FAQSection";
import { HeroSection } from "./components/HeroSection";
import { OrganizersSection } from "./components/Organizers";
import { PrizeWorthSection } from "./components/PrizeWorth";
import { Themes } from "./components/Theme";
import { ThreeJsBackground } from "./components/ThreeJsBackground";
import { WhyHackSRMAp } from "./components/WhyHackSrmApSection";

export const App = () => {
  return (
    <div>
      <ThreeJsBackground />
      <HeroSection />
      <WhyHackSRMAp />
      <PrizeWorthSection />
      <Themes />
      <OrganizersSection />
      <FAQSection />
      <ContactUs />
    </div>
  );
};
