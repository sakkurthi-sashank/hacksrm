const timeleft =
  new Date("May 13, 2023 01:02:00").getTime() - new Date().getTime();

let Timer = [
  {
    value:
      // "00",
      Math.floor(timeleft / (1000 * 60 * 60 * 24)) < 10
        ? "0" + Math.floor(timeleft / (1000 * 60 * 60 * 24))
        : Math.floor(timeleft / (1000 * 60 * 60 * 24)),
    name: "Days",
  },
  {
    value:
      // "00",
      Math.floor((timeleft / (1000 * 60 * 60)) % 24) < 10
        ? "0" + Math.floor((timeleft / (1000 * 60 * 60)) % 24)
        : Math.floor((timeleft / (1000 * 60 * 60)) % 24),
    name: "Hours",
  },
  {
    value:
      // "00",
      Math.floor((timeleft / 1000 / 60) % 60) < 10
        ? "0" + Math.floor((timeleft / 1000 / 60) % 60)
        : Math.floor((timeleft / 1000 / 60) % 60),
    name: "Minutes",
  },
];

export const Hero = () => {
  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-evenly bg-gray-950">
        {/* Background Colour */}
        <div className="absolute bottom-[50%] left-0 right-0 top-[50%] z-0 m-auto h-[200px] max-w-4xl bg-gradient-to-b from-blue-700 to-gray-950 blur-[160px]"></div>
        {/* Timer */}
        <div className="mt-14 flex items-center justify-center space-x-2">
          {Timer.map((item) => (
            <div className="relative space-y-3" key={item.name}>
              {/* <div className="sm:text-md absolute left-1/2 top-3 -translate-x-1/2 -translate-y-1/2 transform bg-gradient-to-b from-purple-100 to-blue-600 bg-clip-text text-center font-inter text-xl text-transparent  opacity-60 md:top-6  lg:text-2xl">
                {item.name}
              </div> */}
              <div className="flex bg-gradient-to-b from-purple-100 to-blue-600 bg-clip-text text-[75px] font-medium text-transparent sm:text-[85px] md:text-[100px] lg:text-[130px]">
                <span className="font-inter">{item.value}</span>
                {item.name !== "Minutes" && (
                  <span className="text-center font-inter">:</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="z-10 text-center font-orbitron text-6xl text-white  sm:text-7xl md:text-8xl lg:text-9xl">
          Hack SRM
        </div>

        <div className="z-10 text-center font-inter text-xl font-normal text-white antialiased  sm:text-xl md:text-2xl lg:text-3xl">
          13th - 15th May 2023
        </div>

        <div className="z-10 flex flex-col space-y-5 text-white">
          {/* <div className="text-center font-inter text-sm text-white antialiased lg:text-xl">
            Organized by
          </div> */}
          {/* <div className="flex items-center justify-center space-x-4">
            <img
              src="https://srmap.edu.in/file/2019/12/Logo-2.png?x70332"
              alt="SRM Logo"
              className="z-10 h-10 rounded bg-white p-2"
            />
            <img
              src="https://github.com/NextTechLabAP/Branding/blob/master/Logos/With_Text/Unstacked/Unstacked_with_text.png?raw=true"
              alt="NextTech Logo"
              className="z-10 h-10 rounded bg-white p-2"
            />
          </div> */}
        </div>

        <div className="z-10 flex w-full justify-center space-x-4">
          <button className="rounded-md bg-blue-600 px-4 py-3 text-white">
            Apply with Devfolio
          </button>
          <button className="rounded-md bg-white px-4 py-3 text-blue-600">
            Join Discord
          </button>
        </div>
      </div>
    </>
  );
};
