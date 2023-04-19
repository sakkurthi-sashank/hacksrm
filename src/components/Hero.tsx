import { useEffect, useState } from "react";

export const Hero = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const interval = setInterval(() => {
      const timeleft =
        new Date("May 13, 2023 01:02:00").getTime() - new Date().getTime();
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
    <>
      <div className="flex min-h-screen flex-col items-center justify-evenly">
        <div className="mt-10 flex flex-row justify-center gap-2 bg-gradient-to-b from-purple-200 to-blue-700 bg-clip-text font-ibm_plex_mono text-4xl font-bold text-transparent lg:text-8xl">
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

        <div className="z-10 text-center font-ibm_plex_mono text-6xl font-bold text-white  sm:text-7xl md:text-8xl lg:text-9xl">
          Hack SRM
        </div>

        <div className="z-10 text-center font-ibm_plex_mono text-xl font-normal text-white antialiased  sm:text-xl md:text-2xl lg:text-3xl">
          13th - 15th May 2023
        </div>

        <div className="z-10 flex flex-col space-y-5 text-white">
          <h5 className="text-center font-ibm_plex_mono text-sm text-white antialiased lg:text-xl">
            Organized by
          </h5>
          <h1></h1>
          <div className="flex items-center justify-center space-x-4">
            <picture>
              <img
                src="https://srmap.edu.in/file/2019/12/Logo-2.png?x70332"
                alt="SRM Logo"
                className="z-10 h-10 rounded-sm bg-white p-2"
              />
            </picture>
            <picture>
              <img
                src="https://github.com/NextTechLabAP/Branding/blob/master/Logos/With_Text/Unstacked/Unstacked_with_text.png?raw=true"
                alt="NextTech Logo"
                className="z-10 h-10 rounded-sm bg-white p-2"
              />
            </picture>
          </div>
        </div>

        <div className="z-10 flex w-full justify-center space-x-4 font-ibm_plex_mono">
          <button className="rounded-sm bg-blue-700 px-4 py-2 text-white hover:bg-blue-800">
            Apply with Devfolio
          </button>
          <button className="rounded-sm bg-white px-4 py-2 text-blue-600 hover:bg-gray-100">
            Join Discord
          </button>
        </div>
      </div>
    </>
  );
};
