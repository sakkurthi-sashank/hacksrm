import { useEffect, useState } from "react";
import { ThreeJsBackground } from "./ThreeJsBackground";

export const HeroSection = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

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
      setSeconds(
        `${
          Math.floor((timeleft / 1000) % 60) < 10
            ? "0" + Math.floor((timeleft / 1000) % 60)
            : Math.floor((timeleft / 1000) % 60)
        }`
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <ThreeJsBackground />
      <section
        id="Home"
        className="m-auto flex min-h-screen w-full flex-col items-center justify-evenly bg-gray-900 px-0 py-10 xl:flex-row-reverse xl:justify-between xl:px-6"
      >
        <img
          className="z-10 m-auto h-[300px] w-auto xl:h-[520px]"
          src="hack-srm-logo.svg"
        />
        <div className="w-full space-y-0 xl:space-y-10">
          <div className="title-gradient flex flex-row justify-center gap-1 text-4xl font-bold lg:text-7xl">
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
            <span>:</span>
            <div className="flex flex-col gap-2 text-center">
              <span>{seconds}</span>
              <span className="text-sm lg:text-lg">Seconds</span>
            </div>
          </div>

          {/* Venue and Date */}
          <div className="flex flex-col items-center justify-center space-y-4 pt-6 text-white">
            <div className="flex flex-col items-center justify-center space-y-2 text-white">
              <span className="text-center text-base lg:text-xl">
                Dates:
                <span className="pl-3 font-medium text-indigo-500">
                  19th - 20th May 2023
                </span>
              </span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-white">
              <span className="text-center text-2xl font-bold lg:text-4xl">
                SRM University AP
              </span>
              <span className="text-sm lg:text-lg">
                Amaravati, Andhra Pradesh
              </span>
            </div>
          </div>

          <div className="flex w-full justify-center space-x-3 pt-14 text-sm sm:text-base">
            <button className="z-10 rounded-sm bg-indigo-700 p-3 text-white hover:bg-indigo-800">
              Apply with Devfolio
            </button>
            <button className="z-10 rounded-sm bg-white p-3 text-indigo-600 hover:bg-gray-100">
              Join Discord
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
