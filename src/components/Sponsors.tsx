const TitleSponsers = [
  {
    name: "nimblebox.ai",
    image:
      "https://nimblebox.ai/_next/static/media/site-logo-light.148d6d0b.svg",
    link: "https://nimblebox.ai/",
    alt: "NIMBLEBOX LOGO",
  },
];

const PlatinumSponsorsData = [
  {
    name: ".xyz",
    image: "/sponsores/xyz_1.png",
    link: "https://gen.xyz/",
    sponsorsCategory: "",
    alt: "XYZ LOGO",
  },
  {
    name: "taskade",
    image:
      "https://cdn.discordapp.com/attachments/1024859933524627457/1105512360476688444/taskade.png",
    link: "https://www.taskade.com/",
    sponsorsCategory: "",
    alt: "TASKADE LOGO",
  },
  {
    name: "avairsense",
    image: "/sponsores/avairsense.png",
    link: "https://www.avairsense.com/",
    sponsorsCategory: "",
    alt: "avairsense LOGO",
  },
  {
    name: "wolfram",
    image: "/sponsores/wolfram.png",
    link: "https://www.wolfram.com/",
    sponsorsCategory: "",
    alt: "WOLFRAM LOGO",
  },
  {
    name: "codechef",
    image: "/sponsores/codechef.png",
    link: "https://www.codechef.com/",
    sponsorsCategory: "",
    alt: "CODECHEF LOGO",
  },
];

const GoldSponsorsData = [
  {
    name: "Polygon",
    image: "/sponsores/polygon.png",
    link: "https://polygon.technology/",
    sponsorsCategory: "",
    alt: "POLYGON LOGO",
  },
];

const SilverSponsorsData = [
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
      <div className="w-full py-10">
        <div className="title-gradient title-gradient pb-10 text-3xl font-bold sm:text-4xl">
          <h1 className="flex justify-center">TITLE SPONSOR</h1>
        </div>
        {TitleSponsers.map((title) => (
          <div
            className="z-10 flex cursor-pointer justify-center py-10"
            key={title.name}
          >
            <a href={title.link} target="_blank" className="z-10">
              <img src={title.image} alt={title.alt} className="h-20 px-4" />
            </a>
          </div>
        ))}
      </div>
      <h1 className="title-gradient flex justify-center text-4xl font-bold">
        PLATINUM SPONSORS
      </h1>
      <div className="flex flex-wrap justify-center gap-10 py-10">
        {PlatinumSponsorsData.map((sponsor) => (
          <div
            className="z-10 flex flex-col items-center space-y-5 rounded py-5"
            key={sponsor.name}
          >
            <a href={sponsor.link}>
              <img
                src={sponsor.image}
                loading="lazy"
                alt={sponsor.alt}
                className={`h-auto w-72 rounded-2xl bg-gray-900 object-contain p-3 sm:h-28`}
              />
            </a>
          </div>
        ))}
      </div>
      <h1 className="title-gradient flex justify-center text-4xl font-bold">
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
                className={`h-auto w-72 rounded-2xl bg-gray-900 object-contain p-3 sm:h-28`}
              />
            </a>
          </div>
        ))}
      </div>
      <h1 className="title-gradient flex justify-center text-4xl font-bold">
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
                className={`h-auto w-72 rounded-2xl bg-gray-900 object-contain p-3 sm:h-28`}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
