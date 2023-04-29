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
    <section id="Home">
      <div className="flex min-h-screen  flex-col items-center justify-evenly">
        {/* <h1 className=" text-center text-[70px] font-bold text-white  sm:text-[90px] md:text-[110px] lg:text-[150px]">
          HACK SRM
        </h1> */}

        <div className="flex mt-14 flex-row justify-center gap-1 bg-gradient-to-b from-violet-500 to-violet-200 bg-clip-text text-4xl font-bold text-transparent lg:text-7xl">
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

          <img
            className="h-36 w-auto sm:h-40 md:h-80"
            src="hack-srm-logo.png"
            alt=""
          />

        <div className="text-md z-10 flex flex-col items-center justify-center space-x-2 space-y-1 sm:text-2xl">
          <span className="violet bg-gradient-to-b from-violet-500 to-violet-200 bg-clip-text font-bold text-transparent">
            18th - 19th May 2023
          </span>
          <div className="violet flex items-center space-x-3 bg-gradient-to-b from-violet-400 to-violet-200 bg-clip-text font-bold text-transparent">
            <IconMapPin size={20} className="text-violet-300" />
            <span>SRM University - AP</span>
          </div>
        </div>

        <div className="z-10 flex flex-col space-y-2 text-white">
          <h5 className="text-center text-sm text-white antialiased lg:text-xl">
            Organized by
          </h5>
          <div className="flex items-center justify-center space-x-4">
            <picture>
              <img
                src="https://srmap.edu.in/file/2019/12/Logo-2.png?x70332"
                alt="SRM Logo"
                className="z-10 h-8 rounded-sm bg-white p-2"
              />
            </picture>
            <picture>
              <img
                src="https://github.com/NextTechLabAP/Branding/blob/master/Logos/With_Text/Unstacked/Unstacked_with_text.png?raw=true"
                alt="NextTech Logo"
                className="z-10 h-8 rounded-sm bg-white p-2"
              />
            </picture>
          </div>
        </div>

        <div className="z-10 flex w-full justify-center space-x-4 text-sm sm:text-base">
          <button className="rounded-sm bg-violet-700 px-2.5 py-2 text-white hover:bg-violet-800">
            Apply with Devfolio
          </button>
          <button className="rounded-sm bg-white px-2.5 py-2 text-violet-600 hover:bg-gray-100">
            Join Discord
          </button>
        </div>
      </div>
    </section>
  );
};
