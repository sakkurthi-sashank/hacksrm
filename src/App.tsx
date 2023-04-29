import { ChallengesSection } from "./components/ChallengesSection";
import { ContactUs } from "./components/ContactUsSection";
import { FAQSection } from "./components/FAQSection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { OrganizersSection } from "./components/OrganizersSeaction";
import { PrizeWorthSection } from "./components/PrizeWorthSection";
import { Themes } from "./components/ThemeSection";
import { ThreeJsBackground } from "./components/ThreeJsBackground";
import { WhyHackSRMAp } from "./components/WhyHackSrmApSection";

export const App = () => {
  return (
    <div>
      <ThreeJsBackground />
      <Header />
      <HeroSection />
      <WhyHackSRMAp />
      <PrizeWorthSection />
      <ChallengesSection />
      <Themes />
      <OrganizersSection />
      <FAQSection />
      <ContactUs />
    </div>
  );
};
