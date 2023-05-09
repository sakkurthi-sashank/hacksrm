const Prizes = [
  {
    name: "second",
    img: "/sponsores/second.png",
    awards: "Rs: 150000",
    alt: "SECOND PRIZE",
  },
  {
    name: "first",
    img: "/sponsores/first.png",
    awards: "Rs: 200000",
    alt: "FIRST PRIZE",
  },
  {
    name: "third",
    img: "/sponsores/third.png",
    awards: "Rs: 75000",
    alt: "THIRD PRIZE",
  },
];

export const PrizeWorthSection = () => {
  return (
    <section
      id="Prizes"
      className="my-0 min-h-screen justify-center bg-gray-900 px-6 py-10 sm:px-20 sm:py-24"
    >
      <div className="mb-6 text-center text-3xl font-semibold leading-relaxed text-indigo-500 sm:text-5xl">
        Prizes Worth more than 40 Lakhs 🎉
      </div>
      <div className="mt-10 w-full">
        <div className="flex flex-wrap justify-center">
          {Prizes.map((prize) => (
            <div
              className="mt-10 flex flex-col justify-center rounded-xl bg-gray-800 sm:mr-10"
              key={prize.name}
            >
              <img
                src={prize.img}
                alt={prize.alt}
                className="flex h-60 w-[300px] justify-center"
              />
              <h1 className="flex justify-center py-10 text-3xl font-bold text-gray-300 sm:text-4xl">
                {prize.awards}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </section>
  );
};
