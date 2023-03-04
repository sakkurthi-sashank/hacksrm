import { Main } from "@/components/Main";
import { Prizes } from "@/components/Prizes";
import { Schedule } from "@/components/Schedule";
import clsx from "clsx";
import { Inter, JetBrains_Mono } from "next/font/google";
import Head from "next/head";

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
      <Main />
      <Schedule />
      <Prizes />
    </div>
  );
};

export default index;
