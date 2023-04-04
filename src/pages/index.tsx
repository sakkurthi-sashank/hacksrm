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
import { Josefin_Sans, Inter } from "next/font/google";
import clsx from "clsx";

const josefin_Sans = Josefin_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  return (
    <div className={clsx(josefin_Sans.variable, inter.variable)}>
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
