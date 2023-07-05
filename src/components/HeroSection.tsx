import { IconBrandDiscord } from "@tabler/icons-react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* <div className="font-roboto-mono bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] lg:text-[200px] md:text-[150px] font-light">
        HACKSRM
      </div> */}

      <Image
        src="/images/hack-srm-logo.png"
        alt="HackSRM Logo"
        width={700}
        height={500}
      />
      <div className="text-xl sm:text-3xl font-roboto-mono bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
        HACKATHON STARTS IN
      </div>
      <div className="flex flex-row font-extralight font-roboto-mono justify-center gap-1 text-4xl sm:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
        <div className="flex flex-col gap-2 text-center">
          <span>00</span>
          <span className="text-sm lg:text-lg">Days</span>
        </div>
        <span>:</span>
        <div className="flex flex-col gap-2 text-center">
          <span>00</span>
          <span className="text-sm lg:text-lg">Hours</span>
        </div>
        <span>:</span>
        <div className="flex flex-col gap-2 text-center">
          <span>00</span>
          <span className="text-sm lg:text-lg">Minutes</span>
        </div>
      </div>
      <div className="pt-16 z-10">
        <a
          href="https://discord.com/widget?id=1101575465384300737&theme=dark"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-80 items-center justify-center gap-2 rounded-md bg-indigo-500 py-2.5 text-white"
        >
          <IconBrandDiscord size={24} />
          <span>Join Discord</span>
        </a>
      </div>
    </div>
  );
};
