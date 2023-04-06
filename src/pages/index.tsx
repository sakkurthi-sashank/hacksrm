import { CategoryPrizes } from "@/components/CategoryPrizes";
import { Challenges } from "@/components/Challenges";
import { ContactUs } from "@/components/ContactUs";
import { FAQ } from "@/components/FAQ";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Organizers } from "@/components/Organizers";
import { Prizes } from "@/components/Prizes";
import { Schedule } from "@/components/Schedule";
import { Sponsors } from "@/components/Sponsores";
import { Themes } from "@/components/Themes";
import { WhyHackSRMAp } from "@/components/WhyHackSrmAp";
import { Inter, Orbitron } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export default function Home() {
  return (
    <div className={inter.variable + " " + orbitron.variable}>
      <Header />
      <Hero />
      <WhyHackSRMAp />
      <Prizes />
      <Challenges />
      <CategoryPrizes />
      <Themes />
      <Schedule />
      <Sponsors />
      <Organizers />
      <FAQ />
      <ContactUs />
    </div>
  );
}
