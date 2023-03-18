import React from "react";
import { IconDiscountCheckFilled, IconMedal } from "@tabler/icons-react";
import clsx from "clsx";

const PrizeData = [
  {
    id: 1,
    name: "1'st Prize",
    prize: "1,00,000/- Rs",
    medalBackground: "text-yellow-500",
    benefit: [
      {
        title: "6 months free 1Password family subscription.",
      },
      {
        title: "Coding Blocks 90% off discount coupons",
      },
      {
        title: "CipherSchools 85% off discount coupons",
      },
      {
        title: "Swags from Devfolio",
      },
      {
        title: "Fold Premium access",
      },
      {
        title: " Internship and Full-time opportunities",
      },
    ],
  },
  {
    id: 2,
    name: "2'nd Prize",
    prize: "50,000/- Rs",
    medalBackground: "text-[#808080]",
    benefit: [
      {
        title: "Swags from Devfolio",
      },
      {
        title: "Coding Blocks 80% off discount coupons",
      },
      {
        title: "CipherSchools 75% off discount coupons",
      },
      {
        title: "Fold Premium access",
      },
      {
        title: "Internship and Full-time opportunities",
      },
    ],
  },
  {
    id: 3,
    name: "3'rd Prize",
    prize: "30,000/- Rs",
    medalBackground: "text-[#cd7f32]",
    benefit: [
      {
        title: "Swags from Devfolio",
      },
      {
        title: "Coding Blocks 70% off discount coupons",
      },
      {
        title: "CipherSchools 65% off discount coupons",
      },
      {
        title: "Fold Premium access",
      },
      {
        title: "Internship and Full-time opportunities",
      },
    ],
  },
];

export const Prizes = () => {
  return (
    <div className="py-10">
      <div className="pt-10 text-center font-josefin_sans text-5xl font-bold text-gray-100">
        Prize&nbsp;Pool
      </div>
      <div className="flex h-full w-full flex-wrap justify-evenly px-2 py-10">
        {PrizeData.map((value) => (
          <div key={value.id} className="m-5 w-96 rounded-xl bg-white">
            <div>
              <IconMedal
                className={clsx(
                  "mx-auto mt-5 h-36 w-36",
                  value.medalBackground
                )}
              />
            </div>
            <div className="p-2 text-center font-josefin_sans text-3xl font-bold text-gray-800">
              {value.name}
            </div>
            <div className="p-2 text-center font-inter text-xl font-light text-gray-700">
              {value.prize}
            </div>
            <div className="space-y-2 py-4 pb-8">
              {value.benefit.map((value) => (
                <div
                  key={value.title}
                  className="flex space-x-2 px-8 py-0.5 text-start"
                >
                  <div className="rounded-full">
                    <IconDiscountCheckFilled className="inline-block w-6 text-blue-600" />
                  </div>
                  <div
                    key={value.title}
                    className="font-josefin_sans text-base font-normal text-gray-800"
                  >
                    {value.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
