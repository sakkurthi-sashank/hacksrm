const Links = () => [
  {
    id: 1,
    name: "About",
    href: "/about",
  },
  {
    id: 2,
    name: "Schedule",
    href: "/schedule",
  },
  {
    id: 3,
    name: "Prizes",
    href: "/prizes",
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
    <div className="flex h-screen w-screen flex-col">
      {/* Header Section */}
      <div className="flex h-16 items-center justify-evenly px-6">
        <div className="hidden w-full md:block lg:w-2/3">
          <div className="flex w-full justify-evenly font-josefin_sans text-lg">
            {Links().map((link) => (
              <div
                key={link.id}
                className="cursor-pointer rounded-md px-2 py-1 font-normal text-gray-100 hover:bg-gray-50 hover:text-sky-600"
              >
                {link.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div className="flex h-[300px] items-end justify-center">
        <div className="text-center font-josefin_sans text-7xl font-semibold text-white lg:text-9xl">
          HackSRM
        </div>
      </div>
      <div className="flex h-60 w-full flex-col items-center justify-center space-y-4">
        <div className="font-josefin_sans text-3xl font-medium text-gray-100 md:text-4xl xl:text-4xl">
          Hackathon Starts In
        </div>
        <div className="flex space-x-8 text-gray-100">
          {Dates.map((value) => (
            <div key={value.id} className="font-josefin_sans">
              <div className="text-4xl">{value.date}</div>
              <div className="text-center text-sm">{value.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Apply Buttons */}
      <div className="m-10 flex flex-col justify-center space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <button className="flex items-center justify-center rounded-md bg-blue-600 py-3 px-5 font-light text-white hover:-translate-y-1">
          Apply With
          <picture>
            <img
              src="/devfolio.svg"
              width={24}
              height={"100%"}
              className="ml-2 mr-2"
              alt="devfolio"
            />
          </picture>
          Devfolio
        </button>
        <button className="flex items-center justify-center rounded-md bg-gray-100 py-3 px-5 font-poppins font-light text-blue-700 hover:-translate-y-1">
          Join Our
          <picture>
            <img
              src="/discord.svg"
              alt=""
              width={24}
              height={"100%"}
              className="ml-2 mr-2"
            />
          </picture>
          Discord
        </button>
      </div>
    </div>
  );
};
