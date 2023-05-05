import { useEffect, useState } from "react";
import { Header } from "./Header";

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
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <Header />
      <section
        id="Home"
        className="m-auto flex w-full flex-col items-center justify-around  px-0 py-10 xl:flex-row-reverse xl:justify-between xl:px-6"
      >
        <div className="flex w-full items-center justify-center">
          <img
            className="z-10 m-auto h-[280px] w-auto pt-10 md:h-[360px] xl:h-[450px]"
            src="hack-srm-logo.png"
          />
        </div>
        <div className="w-full space-y-0 py-10 xl:space-y-6">
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
                DATES:
                <span className="pl-3 font-medium text-indigo-400">
                  19th - 20th May 2023
                </span>
              </span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-white">
              <span className="text-center text-2xl font-bold sm:text-4xl">
                SRM University AP
              </span>
              <span className="text-base sm:text-lg">
                Amaravati, Andhra Pradesh
              </span>
            </div>
          </div>

          <div className="flex w-full flex-wrap justify-center gap-4 space-x-3 pt-14 text-sm sm:text-base">
            {/* <button className="z-10 rounded-sm bg-white p-2.5 text-white">
              <img
                src="https://lh3.googleusercontent.com/fife/APg5EOa10LHBkjG8mp6zAswWCMq1-YNW81VKVrmf5ccz28CweDvfnF0nbYUeSRUk09YVWh9U96Z7TdOVkxb7Ala9vXBrfgmjeNUQasdIgW8Xe0TOrA0rF0htSOmXGd7PHwJEgg9ZjzqHUe2DY_zuwfKsHIuIxyjt-E0VA-fiXDSqaMXMRepCxeUUEMa1m8gwY6bEC4a8xaNe8tBhO0GoKzbGKVsMDfP65DrG7EMFK5ubBWZbFEYzKr96hU2W5gHcMxVpdEbDX7xtwSn5R2bHGcAhQRQEwTWobtRrc_XJAR2N4F_VsbF3OIQJWroQ4lkjKf9njVzC8DuAf0t9NIUz6-9uqajh_w2U0sFvEg7LfYmjPCWu_rA7QH0bpUlTCYW_D-9cjPVvDVctukYqi3mBBsRNAhzALxsBBrU1nBELXMMHORUPIhOuypKB74NZpmnuv02Edc2uu4PPhvl9AynKHUoSVBVHxj9I2VE_rcC1iFSzOqwcIkuqNt8nzVWswOMS8cS1D5MIJMaUKqN1eqqWdxou6gnIArYZwicwi3-DFTMcO065gluKYEz3_nMZ0vvvgkrsAekutr9y8NVTQuFjTzIKndy5e2zBRgsONUatfghmTobjjxfm_QQUF2qZCMliZc9BbC5FEBGJibFXleHCwLE7d_8TwaDbcOFWyHZ5b5EnEjC2Cu7SlUxbKnITaZAKIT0Ui-XZP3lzyq7VcalTDF6NX-xKyJzc3NFCswoeDCozj4TC2WnK8CxzpsCc-HWy2GwXKPb2vGLuAsoUgdtTOU8curRnHYMP7RTdMxsWxhFXTAlVmmg5rUl1jruGBllHST3sb6QoVJWlyYIXn6wQCB5IKsQmsWj0ACBG16dm2DuyyUOOlFD0qMexYym2OGUHNcizQ942iM_ayuCdEl-n246GwvyYuV_05DmttTIzBEm2T4YMZRzIBKzxhSXry7QPmejE3dS0hTbTztMjpnfGsaDP-zBRywq5wR1kb_wgkte_R3P_k-18PQY5WeeZCYhakdYWZuyqAdnfqsQyM3malNhL67dk01pUa_-ZhWX9dVIzxvU4cr8wPj2btkqeCEuqB9yFvwHf2vf5XcCrIPDOmy66RxtUsz7m_NeoSU_dbmBlUh5qgkcl83OHkCu93XA1rMv_P6c27i9_OvbcXzHP1TaOh6fB1PXIVWWumUX3zLEBOliAWVV_dyTZHATuYYAJ6wMnm_eGYWzOXjPgKGM7xrodvjl5vMU8Wqs7u9-6A_Hm1KII8njculvi5H8Sfu8fXIf8_MOv-Agf0UEiLV6-yGfRWdcL2T0VoTcA7MunB-6FBSj2Dv0FoYBAik_-UdQ4Y77txK17IZqR6zJPI1BK-c6JKHELsYoj0cm2BIZry3gReO0WQqzPnh3n4dOwe3VVDZ6acbCTgaub2KV-7daS1ZfHHvsMq8EnDOi4pCA8k-_L7w-CbARL3-Lhjbu-72BO3m7K1XDCbK4RlapnfBFvO6RgGgwpf-nbjIWV9lZTp7nd1YcaI1gV0XVexBV5jKWPFv1B3-NMwJgHy7nKbTrzS-aNgVTLDHvDpaSglAKbQzs=w2014-h1560"
                alt=""
                className="h-6 w-auto"
              />
            </button> */}
            <div
              className="apply-button z-10"
              data-hackathon-slug="hack-srm"
              data-button-theme="light"
              style={{ height: "44px", width: "312px" }}
            ></div>
            <button className="z-10 w-80 rounded-sm bg-white p-2.5 text-indigo-600 hover:bg-gray-100">
              Join Discord
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
