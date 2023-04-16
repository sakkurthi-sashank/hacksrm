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
      <div className="absolute bottom-[50%] left-0 right-0 top-[50%] z-0 m-auto h-[200px] max-w-4xl bg-gradient-to-b from-blue-700 to-gray-950 blur-[160px]"></div>
      <div className="mb-10 text-center font-ibm_plex_mono text-4xl font-semibold text-white">
        Category Prizes
      </div>
      <div className="flex flex-wrap justify-evenly gap-10 py-8">
        {challengesData.map((challenge) => (
          <div key={challenge.id} className="z-10">
            <article className="hover:animate-background w-full min-w-[330px] max-w-md rounded-xl bg-gradient-to-r from-blue-500 to-blue-900 p-0.5 shadow-xl shadow-gray-700/25 transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
              <div className="p-1.4 min-h-[160px] min-w-[330px] rounded-[10px] bg-gray-950/90 p-4 sm:p-6">
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
