const SponsorsData = [
  {
    name: "Devfolio",
    image: "/sponsores/devfolio.png",
    link: "https://devfolio.co",
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
  {
    name: "solana",
    image: "/sponsores/solana.png",
    link: "https://solana.com/",
    sponsorsCategory: "",
    alt: "SOLANA LOGO",
  },
  {
    name: "filecoin",
    image: "/sponsores/filecoin.png",
    link: "https://filecoin.io/",
    sponsorsCategory: "",
    alt: "FILECOIN LOGO",
  },
  {
    name: "Replit",
    image: "/sponsores/replit.png",
    link: "https://replit.com/",
    sponsorsCategory: "",
    alt: "REPLIT LOGO",
  },
];

export const Sponsors = () => {
  return (
    <section
      id="Sponsors"
      className="min-h-screen bg-gray-900 px-2 pb-4 pt-5 sm:px-10 sm:pt-10"
    >
      <div className="title-gradient my-10 text-center text-4xl font-semibold sm:mt-20 sm:text-5xl">
        Sponsors
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {SponsorsData.map((sponsor) => (
          <div
            className="z-10 flex flex-col items-center space-y-5 rounded py-5"
            key={sponsor.name}
          >
            <a href={sponsor.link}>
              <img
                src={sponsor.image}
                loading="lazy"
                alt={sponsor.alt}
                className={`h-16 w-auto rounded-2xl bg-gray-900 object-cover object-center p-3 sm:h-28`}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
