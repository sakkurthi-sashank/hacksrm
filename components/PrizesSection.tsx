import React from "react";
import { IconTrophy } from "@tabler/icons-react";

const PrizeData = [
  {
    id: 1,
    name: "1'st Price",
    prize: "50,000",
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
    prize: "30,000",
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
    prize: "20,000",
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

export const PrizesSection = () => {
  return (
    <div className="home w-screen overflow-hidden pb-10">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <div className="pt-12 px-10 pb-6 text-gray-100 text-4xl font-bold font-jetbrains_mono">
        Prizes
      </div>
      <div className="w-full my-6 flex flex-col justify-between xl:space-x-10 xl:flex-row space-y-4 lg:space-y-0 space-x-0 px-14 h-full">
        {PrizeData.map((value) => (
          <div
            key={value.name}
            className=" h-[500px] w-[400px] rounded-md p-5 space-y-6 flex justify-center items-center flex-col"
          >
            <div className="bg-white rounded-full p-4">
              <IconTrophy size={100} className="text-blue-900" />
            </div>
            <div className="text-center text-white text-3xl font-jetbrains_mono font-semibold">
              {value.name}
              <div className="text-center mt-2 text-white text-2xl font-jetbrains_mono font-semibold">
                {value.prize}
              </div>
            </div>
            <ul className="text-white space-y-4 pl-6 text-md font-jetbrains_mono font-medium text-left flex justify-start flex-col">
              {value.benefit.map((items) => (
                <li className="flex items-center text-lg" key={items.title}>
                  <div className="w-3 h-3 bg-blue-500 mr-2 rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
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
