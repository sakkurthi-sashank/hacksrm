const SponsorsData = [
  {
    name: "Code Chef",
    image: "https://cdn.codechef.com/images/cc-logo.svg",
    sponsorsCategory: "",
  },
  {
    name: "Taskade",
    image:
      "https://www.taskade.com/static_images/taskade-circle-logo-full-black.png",
    sponsorsCategory: "",
  },
  {
    name: "Wolfram",
    image: "https://www.wolframalpha.com/_next/static/images/Logo_1t99UmgS.svg",
    sponsorsCategory: "",
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
            <img
              src={sponsor.image}
              loading="lazy"
              alt=""
              className="h-16 w-auto rounded-2xl bg-gray-900 object-cover object-center p-3 sm:h-28"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
