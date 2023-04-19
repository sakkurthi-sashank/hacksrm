import { ContactUs } from "@/components/ContactUs";
import { FAQ } from "@/components/FAQ";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Organizers } from "@/components/Organizers";
import { Prizes } from "@/components/Prizes";
import { Themes } from "@/components/Themes";
import { WhyHackSRMAp } from "@/components/WhyHackSrmAp";
import { IBM_Plex_Mono } from "next/font/google";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";

const ibm_plex_mono = IBM_Plex_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
});

export default function Home() {
  return (
    <div className={ibm_plex_mono.variable}>
      <BackgroundAnimation />
      <Header />
      <Hero />
      <WhyHackSRMAp />
      <Prizes />
      <Themes />
      <Organizers />
      <FAQ />
      <ContactUs />
    </div>
  );
}
