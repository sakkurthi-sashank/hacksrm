import { IconBrandDiscord } from "@tabler/icons-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeleft =
        new Date("March 21, 2024 09:00:00").getTime() - new Date().getTime();
      setDays(
        `${
          Math.floor(timeleft / (1000 * 60 * 60 * 24)) < 10
            ? "0" + Math.floor(timeleft / (1000 * 60 * 60 * 24))
            : Math.floor(timeleft / (1000 * 60 * 60 * 24))
        }`
      );
      setHours(
        `${
          Math.floor((timeleft / (1000 * 60 * 60)) % 24) < 10
            ? "0" + Math.floor((timeleft / (1000 * 60 * 60)) % 24)
            : Math.floor((timeleft / (1000 * 60 * 60)) % 24)
        }`
      );
      setMinutes(
        `${
          Math.floor((timeleft / 1000 / 60) % 60) < 10
            ? "0" + Math.floor((timeleft / 1000 / 60) % 60)
            : Math.floor((timeleft / 1000 / 60) % 60)
        }`
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="Home"
      className="min-h-screen flex lg:flex-row items-center flex-col justify-center"
    >
      <div className="w-full flex items-center justify-center flex-col">
        <Image
          src="/images/InfinitusxHackSRM.png"
          alt="HackSRM Logo"
          width={700}
          height={500}
        />
        <Image
          src="/images/hack-srm-logo.png"
          alt="HackSRM Logo"
          width={700}
          height={500}
        />
      </div>
      <div className="flex items-center w-full justify-center flex-col">
        <div className="text-xl sm:text-3xl font-josefin-sans bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] mt-10">
          HACKATHON STARTS IN
        </div>
        <div className="flex flex-row font-josefin-sans justify-center gap-1 text-4xl sm:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
          <div className="flex flex-col gap-2 text-center">
            <span className="font-extralight">{days}</span>
            <span className="text-lg font-normal">Days</span>
          </div>
          <span>:</span>
          <div className="flex flex-col gap-2 text-center">
            <span className="font-extralight">{hours}</span>
            <span className="text-lg font-normal">Hours</span>
          </div>
          <span>:</span>
          <div className="flex flex-col gap-2 text-center">
            <span className="font-extralight">{minutes}</span>
            <span className="text-lg font-normal">Minutes</span>
          </div>
        </div>
        <div className="pt-6 z-10 flex gap-x-4 flex-col gap-y-4">
          <div
            className="apply-button"
            data-hackathon-slug="hack-srm24"
            data-button-theme="light"
            style={{ height: "44px", width: "312px" }}
          ></div>
          <a
            href="https://discord.gg/H7tcpbv7Vq"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-80 items-center justify-center gap-2 rounded-md bg-indigo-500 py-2.5 text-white"
          >
            <IconBrandDiscord size={24} />
            <span>Join Discord</span>
          </a>
        </div>
      </div>
    </section>
  );
};
