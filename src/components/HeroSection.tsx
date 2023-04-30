import { useEffect, useState } from "react";
import { IconMapPin } from "@tabler/icons-react";

export const HeroSection = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const interval = setInterval(() => {
      const timeleft =
        new Date("May 18, 2023 18:00:00").getTime() - new Date().getTime();
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
    <section
      id="Home"
      className="m-auto flex min-h-screen flex-col items-center justify-evenly pt-16"
    >
      <div className="title-gradient flex flex-row justify-center gap-1 text-4xl font-bold lg:text-6xl">
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

      <div className="flex w-full justify-center pb-5">
        <img className="h-40 w-auto md:h-96" src="hack-srm-logo.png" />
      </div>

      <div className="text-md z-10 flex flex-col items-center justify-center space-x-2 space-y-1 sm:text-2xl">
        <span className="indigo title-gradient">18th - 19th May 2023</span>
        <div className="indigo title-gradient flex items-center space-x-3">
          <IconMapPin size={20} className="text-indigo-300" />
          <span>SRM University - AP</span>
        </div>
      </div>

      <div className="flex w-full justify-center space-x-4 pt-3 text-sm sm:text-base">
        <button className="z-10 rounded-sm bg-indigo-700 px-2.5 py-2 text-white hover:bg-indigo-800">
          Apply with Devfolio
        </button>
        <button className="z-10 rounded-sm bg-white px-2.5 py-2 text-indigo-600 hover:bg-gray-100">
          Join Discord
        </button>
      </div>
    </section>
  );
};
