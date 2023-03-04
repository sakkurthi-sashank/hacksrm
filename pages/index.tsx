import { MainSection } from "@/components/MainSection";
import { PrizesSection } from "@/components/PrizesSection";
import { Schedule } from "@/components/ScheduleSection";
import clsx from "clsx";
import { Inter, JetBrains_Mono } from "next/font/google";
import Head from "next/head";
import React from "react";

const jetbrains_mono = JetBrains_Mono({
  weight: ["300", "700"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const index = () => {
  return (
    <div className={clsx(jetbrains_mono.variable, inter.variable)}>
      <Head>
        <title>Home | Hack Srm</title>
      </Head>
      <MainSection />
      <Schedule />
      <PrizesSection />
    </div>
  );
};

export default index;
