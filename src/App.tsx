import { ChallengesSection } from "./components/ChallengesSection";
import { ContactUs } from "./components/ContactUsSection";
import { FAQSection } from "./components/FAQSection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { OrganizersSection } from "./components/OrganizersSeaction";
import { PrizeWorthSection } from "./components/PrizeWorthSection";
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
      <OrganizersSection />
      <ChallengesSection />
      <FAQSection />
      <ContactUs />
    </div>
  );
};
