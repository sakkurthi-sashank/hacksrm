const GoldSponsorsData = [
  {
    name: "Marblism",
    image: "/sponsores/marblism.png",
    link: "https://www.marblism.com/",
    sponsorsCategory: "",
    alt: "MARBLISM LOGO",
  },
];

const SilverSponsorsData = [
  {
    name: "EthIndia",
    image: "/sponsores/ethindia.png",
    link: "https://ethindia.co/",
    sponsorsCategory: "",
    alt: "ETHINDIA LOGO",
  },
  {
    name: "Devfolio",
    image: "/sponsores/devfolio.png",
    link: "https://devfolio.co/",
    sponsorsCategory: "",
    alt: "DEVFOLIO LOGO",
  },
  {
    name: "Polygon",
    image: "/sponsores/polygon.png",
    link: "https://polygon.technology/",
    sponsorsCategory: "",
    alt: "POLYGON LOGO",
  },
];

export const SponsorSection = () => {
  return (
    <section
      id="Sponsors"
      className="min-h-screen px-2 pb-4 pt-5 sm:px-10 sm:pt-10"
    >
      <h1 className="flex justify-center text-4xl font-bold font-josefin-sans bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
        GOLD SPONSORS
      </h1>
      <div className="flex flex-wrap justify-center gap-10 py-10">
        {GoldSponsorsData.map((sponsor) => (
          <div
            className="z-10 flex flex-col items-center space-y-5 rounded py-5"
            key={sponsor.name}
          >
            <a href={sponsor.link}>
              <img
                src={sponsor.image}
                loading="lazy"
                alt={sponsor.alt}
                className={`h-auto w-[500px] rounded-2xl object-contain p-3`}
              />
            </a>
          </div>
        ))}
      </div>
      <h1 className="flex justify-center text-4xl font-bold font-josefin-sans bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
        SILVER SPONSORS
      </h1>
      <div className="flex flex-wrap justify-center gap-10 py-10">
        {SilverSponsorsData.map((sponsor) => (
          <div
            className="z-10 flex flex-col items-center space-y-5 rounded py-5"
            key={sponsor.name}
          >
            <a href={sponsor.link}>
              <img
                src={sponsor.image}
                loading="lazy"
                alt={sponsor.alt}
                className={`h-auto w-72 rounded-2xl object-contain p-3 sm:h-28`}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
