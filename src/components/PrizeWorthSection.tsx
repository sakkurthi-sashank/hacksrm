const plans = [
  {
    name: "2'nd Place",
    price: 50000,
    imageSrc: "/second-prize.svg",
  },
  {
    name: "1'st Place",
    price: 100000,
    imageSrc: "/first-prize.svg",
  },
  {
    name: "3'rd Place",
    price: 30000,
    imageSrc: "/third-prize.svg",
  },
];

export const PrizeWorthSection = () => {
  return (
    <section
      id="Prizes"
      className="my-0 flex min-h-screen flex-col justify-evenly px-6 py-10 sm:px-20 sm:py-24"
    >
      <div className="mb-6 bg-gradient-to-b from-violet-600 to-violet-200 bg-clip-text text-center text-4xl font-semibold text-transparent sm:text-5xl">
        Prizes
      </div>

      <div className="mb-10 text-center text-4xl font-semibold text-violet-400">
        Worth ₹ 2,00,000 /-
      </div>

      <div className="flex flex-wrap items-center justify-around gap-5 py-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative flex w-full max-w-sm flex-col items-center justify-center border-2 border-violet-500 bg-violet-700 bg-opacity-20 px-5 py-10"
          >
            <div>
              <img src={plan.imageSrc} className="w-28" alt="" />
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 rounded-xl p-10">
              <span className="text-xl font-medium text-gray-200">
                {plan.name}
              </span>
              <div className="text-3xl font-semibold text-violet-400">
                ₹ {plan.price}
                <span className="text-xl font-normal">/-</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
