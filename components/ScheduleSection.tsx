import { IconCalendarEvent } from "@tabler/icons-react";
import { clsx } from "clsx";
import React from "react";

export const TimelineData = [
  {
    date: "01.07.2021",
    title: "Hackathon Registration Starts",
    description: "Participants can start registration in Devfolio",
  },
  {
    date: "20.07.2021",
    title: "Hackathon Registration Ends",
    description: "Registrations Will be Closed",
  },
  {
    date: "21.07.2021",
    title: "Hackathon Starts",
    description:
      "Welcome speech, intro to judges, intro to team, Hackathon rules and regulations",
  },
  {
    date: "023.07.2021",
    title: "Hackathon Ends",
    description: "Participants Need to Submit their projects",
  },
];

export const Schedule = () => {
  return (
    <div className={clsx("home w-screen overflow-hidden")}>
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <div className="pt-8 px-10 text-4xl text-gray-100 font-bold font-jetbrains_mono">
        Schedule
      </div>
      <div className="w-full h-full flex">
        <div className="py-12 w-full flex flex-col space-y-8 px-10 font-inter">
          <ol className="border-l-2 border-blue-500 space-y-6">
            {TimelineData.map((value) => (
              <li key={value.title}>
                <div className="flex-start md:flex">
                  <div className="-ml-[16px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <IconCalendarEvent className="h-4 w-4" />
                  </div>
                  <div className="ml-6 mb-10 block max-w-md rounded-lg">
                    <div className="space-y-2">
                      <div className="text-sm text-gray-200">{value.date}</div>
                      <div className="text-lg text-gray-50">{value.title}</div>
                      <div className="text-sm text-gray-100">
                        {value.description}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="w-full hidden xl:block h-full pt-20">
          <picture>
            <img src="./timeline.svg" className="max-w-xl" alt="" />
          </picture>
        </div>
      </div>
    </div>
  );
};
