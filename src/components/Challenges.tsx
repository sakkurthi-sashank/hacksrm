const challengesData = [
  {
    id: 1,
    label: "Ethereum-Matic Bounty",
    priceMoney: [
      "1. Best hack built on top of Ethereum (Rs.10000)",
      "2. For teams that integrate Matic in their hacks as well the prize money will be higher (Rs.15000)",
    ],
  },
  {
    id: 2,
    label: "Best Dapp on Tezos",
    priceMoney: [
      "1. Best hack built on top of Tezos (Rs.10000)",
      "2. For teams that integrate Matic in their hacks as well the prize money will be higher (Rs.15000)",
    ],
  },
  {
    id: 3,
    label: "Best Fin-Tech Hack",
    priceMoney: [
      "1. Best hack built on top of Ethereum (Rs.10000)",
      "2. For teams that integrate Matic in their hacks as well the prize money will be higher (Rs.15000)",
    ],
  },
  {
    id: 4,
    label: "Best All Girls Team ",
    priceMoney: [
      "1. Best hack built on top of Tezos (Rs.10000)",
      "2. For teams that integrate Matic in their hacks as well the prize money will be higher (Rs.15000)",
    ],
  },
  {
    id: 5,
    label: "Best Travel and Tourism Hack",
    priceMoney: [
      "1. Best hack built on top of Ethereum (Rs.10000)",
      "2. For teams that integrate Matic in their hacks as well the prize money will be higher (Rs.15000)",
    ],
  },
];

export const Challenges = () => {
  return (
    <div className="relative bg-gray-950 px-4 py-20">
      <div className="mb-10 text-center font-ibm_plex_mono text-4xl font-semibold text-white">
        Sponsor Challenges
      </div>
      <div className="flex flex-wrap justify-evenly gap-10 py-8">
        {challengesData.map((challenge) => (
          <div key={challenge.id} className="z-10">
            <article className="hover:animate-background w-full min-w-[330px] max-w-md rounded-xl bg-gradient-to-r from-blue-500 to-blue-900 p-0.5 shadow-xl shadow-gray-700/25 transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
              <div className="p-1.4 min-h-[180px] rounded-[10px] bg-gray-950/90 p-4 sm:p-6">
                <h3 className="z-10 mt-0.5 font-inter text-lg font-medium text-white">
                  {challenge.label}
                </h3>
                <ul className="text-md mt-2 space-y-2 font-ibm_plex_mono text-gray-400">
                  {challenge.priceMoney.map((money) => (
                    <li key={money}>{money}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};
