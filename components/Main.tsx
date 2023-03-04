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

const Dates = [
  {
    id: 1,
    date: "02",
    label: "Day",
  },
  {
    id: 2,
    date: "04",
    label: "Hours",
  },
  {
    id: 3,
    date: "26",
    label: "Minutes",
  },
];

export const Main = () => {
  return (
    <div className="home flex h-screen w-screen flex-col overflow-hidden">
      <div className="stars"></div>
      {/* Header Section */}
      <div className="flex h-16 items-center justify-evenly px-6">
        <div className="hidden w-full md:block lg:w-2/3">
          <div className="flex w-full justify-evenly font-jetbrains_mono font-light">
            {Links().map((link) => (
              <div
                key={link.id}
                className="cursor-pointer text-gray-200 hover:text-sky-500"
              >
                {link.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div className="flex h-[65%] flex-col items-center justify-between font-jetbrains_mono font-semibold lg:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-center space-y-4">
          <div className="font-jetbrains_mono text-3xl text-white md:text-4xl xl:text-4xl">
            Hackathon Starts In
          </div>
          <div className="flex space-x-8 text-white">
            {Dates.map((value) => (
              <div key={value.id} className="font-jetbrains_mono">
                <div className="text-4xl">{value.date}</div>
                <div className="text-center text-sm">{value.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Apply Buttons */}
      <div className="m-10 flex flex-col justify-center space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <button className="flex items-center justify-center rounded-md bg-blue-600 py-3 px-5 font-inter text-white hover:-translate-y-1">
          Apply With
          <picture>
            <img
              src="/devfolio.svg"
              className="ml-3 mr-1 w-3 md:w-5"
              alt="devfolio"
            />
          </picture>
          Devfolio
        </button>
        <button className="flex items-center justify-center rounded-md bg-gray-100 py-3 px-5 font-inter text-blue-700 hover:-translate-y-1">
          Join Our
          <picture>
            <img src="/discord.svg" alt="" className="ml-3 mr-1 w-6" />
          </picture>
          Discord
        </button>
      </div>
    </div>
  );
};
