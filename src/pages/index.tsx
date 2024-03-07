import { BackgroundAnimation } from "@/components/BackgroundAnimation";
import { ContactUsSection } from "@/components/ContactUsSection";
import { FAQSection } from "@/components/FAQSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MainPrizes } from "@/components/MainPrizes";
import { OrganizersSection } from "@/components/OrganizersSection";
import { PrizeSection } from "@/components/PrizeSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { SponsorSection } from "@/components/SponsorSection";
import { ThemeSection } from "@/components/ThemeSection";
import { WhyHackSRM } from "@/components/WhyHackSrm";
import { Josefin_Sans } from "next/font/google";

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});

export default function HomePage() {
  return (
    <div className={josefin_sans.variable}>
      <BackgroundAnimation />
      <Header />
      <HeroSection />
      <WhyHackSRM />
      <MainPrizes />
      <ThemeSection />
      <PrizeSection />
      <SponsorSection />
      {/* <ScheduleSection /> */}
      <OrganizersSection />
      <FAQSection />
      <ContactUsSection />
    </div>
  );
}
