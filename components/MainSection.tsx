import { clsx } from "clsx";

const Links = () => [
  {
    id: 1,
    name: "About",
    href: "/about",
  },
  {
    id: 2,
    name: "Prices",
    href: "/prices",
  },
  {
    id: 3,
    name: "Schedule",
    href: "/schedule",
  },
  {
    id: 4,
    name: "Themes",
    href: "/themes",
  },
  {
    id: 5,
    name: "Sponsors",
    href: "/sponsors",
  },
  {
    id: 6,
    name: "FAQ",
    href: "/faq",
  },
  {
    id: 7,
    name: "Contact Us",
    href: "/contact-us",
  },
];

export const MainSection = () => {
  return (
    <div className={clsx("h-screen w-screen overflow-hidden", "home")}>
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <Header />
      <Hero />
      <ApplyButtons />
    </div>
  );
};

export const Header = () => {
  return (
    <div className="h-16 z-10 flex justify-evenly items-center px-6">
      <div className="lg:w-1/3 hidden lg:block"></div>
      <div className="lg:w-2/3 w-full hidden md:block">
        <div className="flex w-full justify-between font-light font-jetbrains_mono">
          {Links().map((link) => (
            <div
              key={link.id}
              className="text-gray-200 hover:text-sky-500 cursor-pointer"
            >
              {link.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div
      className={clsx(
        "flex items-center h-[80%] justify-between flex-col lg:flex-row font-jetbrains_mono font-semibold"
      )}
    >
      <div className="w-full"></div>
      <div className="w-full h-full flex items-center justify-center flex-col space-y-4">
        <div className="text-white text-3xl xl:text-5xl font-jetbrains_mono">
          Hackathon Starts In
        </div>
        <div className="text-white flex space-x-8">
          <div className="font-jetbrains_mono">
            <div className="text-3xl xl:text-6xl">02</div>
            <div className="text-center text-xs xl:text-base">Days</div>
          </div>
          <div className="font-jetbrains_mono">
            <div className="text-3xl xl:text-6xl">04</div>
            <div className="text-center text-xs xl:text-base">Hours</div>
          </div>
          <div className="font-jetbrains_mono">
            <div className="text-3xl xl:text-6xl">26</div>
            <div className="text-center text-xs xl:text-base">Minutes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ApplyButtons = () => {
  return (
    <div className="w-full flex justify-center space-x-8">
      <button className="text-white hover:-translate-y-1 font-inter bg-blue-600 py-3 px-5 rounded-md flex items-center">
        Apply With
        <picture>
          <img src="/devfolio.svg" className="w-5 ml-3 mr-1" alt="devfolio" />
        </picture>
        Devfolio
      </button>
      <button className="text-blue-700 hover:-translate-y-1 font-inter flex items-center bg-gray-100 px-5 rounded-md">
        Join Our
        <picture>
          <img src="/discord.svg" alt="" className="w-6 ml-3 mr-1" />
        </picture>
        Discord
      </button>
    </div>
  );
};
