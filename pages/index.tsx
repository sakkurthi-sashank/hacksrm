import { Main } from "@/components/Main";
import { Prizes } from "@/components/Prizes";
import { Schedule } from "@/components/Schedule";
import { Themes } from "@/components/Themes";
import clsx from "clsx";
import { Inter, Josefin_Sans, Poppins } from "next/font/google";
import Head from "next/head";

const josefin_Sans = Josefin_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const index = () => {
  return (
    <div
      className={clsx(josefin_Sans.variable, inter.variable, poppins.variable)}
    >
      <Head>
        <title>Home | Hack Srm</title>
        <meta name="description" content="HackSrm website" />
      </Head>
      <Main />
      <Schedule />
      <Prizes />
      <Themes />
    </div>
  );
};

export default index;
