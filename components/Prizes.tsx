import React from "react";
import { IconTrophy } from "@tabler/icons-react";

const PrizeData = [
  {
    id: 1,
    name: "1'st Prize",
    prize: "1,00,000/- Rs",
    benefit: [
      {
        title: "Parks from Devfolio",
      },
      {
        title: "10,000/- Rs from Polygon",
      },
      {
        title: "Parks from Devfolio",
      },
      {
        title: "10,000/- Rs from Polygon",
      },
    ],
  },
  {
    id: 2,
    name: "2'nd Prize",
    prize: "50,000/- Rs",
    benefit: [
      {
        title: "Parks from Devfolio",
      },
      {
        title: "10,000/- Rs from Polygon",
      },
      {
        title: "Parks from Devfolio",
      },
      {
        title: "10,000/- Rs from Polygon",
      },
    ],
  },
  {
    id: 3,
    name: "3'rd Prize",
    prize: "30,000/- Rs",
    benefit: [
      {
        title: "Parks from Devfolio",
      },
      {
        title: "10,000/- Rs from Polygon",
      },
      {
        title: "Parks from Devfolio",
      },
      {
        title: "10,000/- Rs from Polygon",
      },
    ],
  },
];

export const Prizes = () => {
  return (
    <div className="home h-full w-screen overflow-hidden p-0 py-6 lg:p-14 lg:h-screen">
      <div className="stars"></div>
      <div className="mb-10 text-center font-jetbrains_mono text-4xl font-bold text-gray-100 lg:mb-0">
        Prizes
      </div>
      <div className="flex h-full w-fulls space-y-10 lg:space-y-0 flex-wrap items-center justify-evenly">
        {PrizeData.map((value) => (
          <div
            key={value.name}
            className="flex flex-col m-5 items-center justify-center space-y-5 rounded-md"
          >
            <div className="rounded-full bg-white p-4">
              <IconTrophy size={90} className="text-blue-900" />
            </div>
            <div className="text-center font-jetbrains_mono text-2xl font-semibold text-white">
              {value.name}
              <div className="mt-2 text-center font-jetbrains_mono text-xl font-semibold text-blue-600">
                {value.prize}
              </div>
            </div>
            <ul className="flex flex-col justify-start space-y-3 pl-6 text-left font-jetbrains_mono font-medium text-white">
              {value.benefit.map((items) => (
                <li className="flex items-center text-sm" key={items.title}>
                  <div className="mr-2 flex h-3 w-3 items-center justify-center rounded-full bg-blue-500">
                    <div className="h-1 w-1 rounded-full bg-white"></div>
                  </div>
                  {items.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
