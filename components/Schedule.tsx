import { IconCalendarEvent } from "@tabler/icons-react";
import React from "react";

export const TimelineData = [
  {
    date: "01.07.2021",
    title: "Registration Starts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    date: "20.07.2021",
    title: "Registration Ends",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    date: "21.07.2021",
    title: "Hackathon Starts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    date: "23.07.2021",
    title: "Hackathon Ends",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const Schedule = () => {
  return (
    <div className="py-14">
      <div className="text-center font-josefin_sans text-5xl font-bold text-gray-100">
        Schedule
      </div>
      <div className="flex h-full w-full">
        <div className="flex w-full flex-col space-y-8 py-5 px-10">
          <ol className="space-y-10 border-l-2 border-blue-500">
            {TimelineData.map((value) => (
              <li key={value.title}>
                <div className="flex-start md:flex">
                  <div className="-ml-[16px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <IconCalendarEvent className="h-4 w-4" />
                  </div>
                  <div className="ml-6 block max-w-md rounded-lg">
                    <div className="space-y-2">
                      <div className="w-fit rounded-md bg-white px-3 py-1 font-poppins text-blue-600">
                        {value.date}
                      </div>
                      <div className="font font-josefin_sans text-xl text-gray-100">
                        {value.title}
                      </div>
                      <div className="font-inter text-sm font-light text-gray-100">
                        {value.description}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="hidden h-full w-full pt-28 xl:block">
          <picture>
            <img src="./timeline.svg" className="max-w-xl" alt="" />
          </picture>
        </div>
      </div>
    </div>
  );
};
