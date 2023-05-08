import { useState } from "react";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";

const scheduleDataDay1 = [
  {
    time: "12:00 PM - 01:00 PM",
    title: "Opening Ceremony",
    description:
      "Vice Chancellor Speech, Sponsor Speech, Rules and Problem Statement",
  },
  {
    time: "01:00 PM",
    title: "Start of Hackathon",
    description: "Participants start working on their projects",
  },
];

const scheduleDataDay2 = [
  {
    time: "02:30 PM - 05:00 PM",
    title: "Presentation Round",
    description: "Participants present their projects to the judges",
  },
  {
    time: "05:00 PM - 05:30 PM",
    title: "Announcement of Results",
    description: "Winners are announced and prizes are distributed",
  },
  {
    time: "05:30 PM - 06:00 PM",
    title: "Closing Ceremony",
    description: "Closing Speech, Thank you note, and Feedback",
  },
];

export const Schedule = () => {
  const [day, setDay] = useState(scheduleDataDay1);
  const [dayNumber, setDayNumber] = useState("Day 1 - 19th May");

  return (
    <section
      id="Schedule"
      className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-4 pb-4 pt-5 sm:px-10 sm:pt-10"
    >
      <div className="title-gradient my-10 text-center text-4xl font-semibold sm:mt-20 sm:text-5xl">
        Schedule
      </div>
      <div className="z-10 mt-20 w-full max-w-2xl rounded-xl border border-gray-700 bg-gray-900">
        <div className="flex h-14 justify-between rounded-lg border-b border-gray-700">
          <div className="flex h-14 w-20 items-center justify-center">
            <IconChevronLeft
              onClick={() => {
                setDay(scheduleDataDay1);
                setDayNumber("Day 1 - 19th May");
              }}
              stroke={1}
              className="h-10 w-10 rounded-lg text-gray-300 hover:bg-gray-100"
            />
          </div>
          <div className="flex h-14 w-full items-center justify-center">
            <div className="text-base font-bold text-gray-200 md:text-2xl">
              {dayNumber}
            </div>
          </div>
          <div className="flex h-14 w-20 items-center justify-center">
            <IconChevronRight
              onClick={() => {
                setDay(scheduleDataDay2);
                setDayNumber("Day 2 - 20th May");
              }}
              stroke={1}
              className="h-10 w-10 rounded-lg text-gray-300 hover:bg-gray-100"
            />
          </div>
        </div>
        <div className="flex min-h-[400px] w-full flex-col divide-y divide-gray-700 overflow-y-scroll">
          {day.map((item) => (
            <div key={item.title} className="flex flex-col p-4">
              <div className="text-base font-semibold text-gray-300 md:text-xl">
                {item.time}
              </div>
              <div className="text-base font-semibold text-gray-300 md:text-lg">
                {item.title}
              </div>
              <div className="text-gray-400">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
