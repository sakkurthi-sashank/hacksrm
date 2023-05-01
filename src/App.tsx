import { ContactUs } from "./components/ContactUs";
import { FAQSection } from "./components/FAQSection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { OrganizersSection } from "./components/Organizers";
import { PrizeWorthSection } from "./components/PrizeWorth";
import { Themes } from "./components/Theme";
import { WhyHackSRMAp } from "./components/WhyHackSrmApSection";

export const App = () => {
  return (
    <div>
      <Header />
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
