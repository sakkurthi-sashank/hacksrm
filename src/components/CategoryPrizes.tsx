const challengesData = [
  {
    id: 1,
    label: "Best Healthcare Hack",
    priceMoney: ["Cash prize of INR 1000", "T-Shirt, Swags, and Certificates"],
  },
  {
    id: 2,
    label: "Best Healthcare Hack",
    priceMoney: ["Cash prize of INR 1000", "T-Shirt, Swags, and Certificates"],
  },
  {
    id: 3,
    label: "Best Healthcare Hack",
    priceMoney: ["Cash prize of INR 1000", "T-Shirt, Swags, and Certificates"],
  },
  {
    id: 4,
    label: "Best Healthcare Hack",
    priceMoney: ["Cash prize of INR 1000", "T-Shirt, Swags, and Certificates"],
  },
  {
    id: 5,
    label: "Best Healthcare Hack",
    priceMoney: ["Cash prize of INR 1000", "T-Shirt, Swags, and Certificates"],
  },
];
export const CategoryPrizes = () => {
  return (
    <div className="relative min-h-screen bg-gray-950 px-3 py-10">
      <div className="background-animation"></div>
      <div className="mb-10 text-center font-orbitron text-4xl font-semibold text-white">
        Category Prizes
      </div>
      <div className="flex flex-wrap justify-evenly gap-10 py-8">
        {challengesData.map((challenge) => (
          <div key={challenge.id}>
            <article className="hover:animate-background w-full min-w-[330px] max-w-sm rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl shadow-gray-700/25 transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
              <div className="p-1.4 min-h-[160px] min-w-[330px] rounded-[10px] bg-gray-950 p-4 sm:p-6">
                <h3 className="mt-0.5 text-lg font-medium text-white">
                  {challenge.label}
                </h3>
                {challenge.priceMoney.map((money) => (
                  <ul
                    key={money}
                    className="text-md mt-2 space-y-2 text-gray-400"
                  >
                    <li>{money}</li>
                  </ul>
                ))}
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};
