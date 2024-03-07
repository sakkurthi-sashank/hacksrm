import { IconTrophy } from "@tabler/icons-react";

export function MainPrizes() {
  return (
    <section id="Prizes" className="py-20 w-full px-0 md:px-10">
      <div className="mb-20 text-center text-4xl font-semibold sm:text-5xl font-josefin-sans bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
        Main Track
      </div>

      <div className="flex gap-x-3 flex-wrap gap-y-4 px-4">
        <div className="z-0 max-w-2xl font-josefin-sans mx-auto flex flex-col items-center justify-evenly space-y-4 rounded-lg border border-gray-800 bg-gray-950 p-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500">
            <IconTrophy size={48} stroke={1.5} color="#fff" />
          </div>
          <div className="text-center text-2xl font-semibold text-white">
            Grand Prize: $1,200
          </div>
          <div className="text-center text-2xl font-semibold text-gray-300">
            The Top 2 projects built during the hackathon will be awarded $600
            each.
          </div>
        </div>

        <div className="z-0 max-w-2xl font-josefin-sans mx-auto flex flex-col items-center justify-evenly space-y-4 rounded-lg border border-gray-800 bg-gray-950 p-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500">
            <IconTrophy size={48} stroke={1.5} color="#fff" />
          </div>
          <div className="text-center text-2xl font-semibold text-white">
            Marblism Track Prize: $500
          </div>
          <div className="text-center text-2xl font-semibold text-gray-300">
            The Top Project build using Marblism during the hackathon will be
            awarded $500.
          </div>
        </div>
      </div>
    </section>
  );
}
