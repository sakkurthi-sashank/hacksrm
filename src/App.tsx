import { ContactUs } from "./components/ContactUs";
import { FAQSection } from "./components/FAQSection";
import { HeroSection } from "./components/HeroSection";
import { OrganizersSection } from "./components/Organizers";
import { PrizeWorthSection } from "./components/PrizeWorth";
import { Themes } from "./components/Theme";
import { ThreeJsBackground } from "./components/ThreeJsBackground";
import { WhyHackSRMAp } from "./components/WhyHackSrmApSection";
import { Sponsors } from "./components/Sponsors";
import { Schedule } from "./components/Schedule";
import { Tracks } from "./components/Tracks";

export const App = () => {
  return (
    <div className="">
      <ThreeJsBackground />
      <HeroSection />
      <WhyHackSRMAp />
      <PrizeWorthSection />
      <Tracks />
      <Themes />
      <Sponsors />
      <Schedule />
      <OrganizersSection />
      <FAQSection />
      <ContactUs />
    </div>
  );
};
