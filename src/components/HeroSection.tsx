import { useEffect, useState } from "react";
import { IconBrandDiscord } from "@tabler/icons-react";
import { Header } from "./Header";

export const HeroSection = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");

  useEffect(() => {
    const interval = setInterval(() => {
      const timeleft =
        new Date("May 19, 2023 12:00:00").getTime() - new Date().getTime();
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

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <Header />
      <section
        id="Home"
        className="m-auto flex w-full flex-col justify-evenly  px-0 xl:flex-row-reverse xl:justify-between xl:px-6"
      >
        <div className="flex w-full items-center justify-start">
          <img
            className="z-10 m-auto h-[280px] w-auto md:h-[360px] xl:h-[500px]"
            src="/hack-srm-logo.png"
          />
        </div>
        <div className="relative mx-auto w-full max-w-md space-y-0 py-20 xl:space-y-6">
          <div className="title-gradient flex items-center justify-center space-y-4 text-2xl font-semibold">
            HACKATHON STARTS IN
          </div>
          <div className="title-gradient flex flex-row justify-center gap-1 text-4xl font-bold sm:text-7xl">
            <div className="flex flex-col gap-2 text-center">
              <span>{days}</span>
              <span className="text-sm lg:text-lg">Days</span>
            </div>
            <span>:</span>
            <div className="flex flex-col gap-2 text-center">
              <span>{hours}</span>
              <span className="text-sm lg:text-lg">Hours</span>
            </div>
            <span>:</span>
            <div className="flex flex-col gap-2 text-center">
              <span>{minutes}</span>
              <span className="text-sm lg:text-lg">Minutes</span>
            </div>
          </div>

          <div className="absolute flex w-full flex-col flex-wrap items-center justify-center gap-4 pt-10 text-sm sm:text-base">
            <div
              className="apply-button bottom-0 z-10 cursor-pointer"
              data-hackathon-slug="hack-srm"
              data-button-theme="light"
              style={{ height: "44px", width: "312px" }}
            ></div>
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
      </section>
    </div>
  );
};
