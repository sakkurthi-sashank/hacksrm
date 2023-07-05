import { BackgroundAnimation } from "@/components/BackgroundAnimation";
import { ContactUsSection } from "@/components/ContactUsSection";
import { FAQSection } from "@/components/FAQSection";
import { HeroSection } from "@/components/HeroSection";
import { OrganizersSection } from "@/components/OrganizersSection";
import { PrizeSection } from "@/components/PrizeSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { SponsorSection } from "@/components/SponsorSection";
import { ThemeSection } from "@/components/ThemeSection";
import { WhyHackSRM } from "@/components/WhyHackSrm";
import { Josefin_Sans, Roboto_Mono } from "next/font/google";

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export default function HomePage() {
  return (
    <div className={josefin_sans.variable + " " + roboto_mono.variable}>
      <div className="md:hidden block">
        <div className="text-white px-5 text-xl font-light antialiased font-josefin-sans h-screen flex items-center justify-center text-center">
          This Website is Disabled. For Small Screen Devices, Please view with a
          Desktop or Laptop Screens
        </div>
      </div>
      <div className={"hidden md:block"}>
        <BackgroundAnimation />
        <HeroSection />
        <WhyHackSRM />
        <ThemeSection />
        <PrizeSection />
        <SponsorSection />
        <ScheduleSection />
        <OrganizersSection />
        <FAQSection />
        <ContactUsSection />
      </div>
    </div>
  );
}
