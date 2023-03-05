import React from "react";

const themesData = [
  {
    id: 1,
    name: "Health Care",
    description:
      "Code against health problems, aim for real-life challenges and draw solutions that can drive social impact",
    img: "./health_care.svg",
  },
  {
    id: 2,
    name: "Education",
    description:
      "Find new ways for the acquisition of the knowledge, skills. Showcase what could be the future of education. Blend your skills and let the ideas impact on this digital age.",
    img: "./education.svg",
  },
  {
    id: 3,
    name: "Women's Safety",
    description:
      "The day when a woman can freely walk on the roads at night is the day of real Independence - Mahatma Gandhi. Why not make it possible! Use your skills and be a part of true freedom.",
    img: "./women_safety.svg",
  },
  {
    id: 4,
    name: "Fin-Tech",
    description:
      "Financial technology is the technology and innovation that aims to compete with traditional financial methods in the delivery of financial services.",
    img: "./fintech.svg",
  },
  {
    id: 5,
    name: "Travel & Tourism",
    description:
      "The advent of technology is fostering a change in travel and tourism, innovate and help tourists to reduce costs, improve customer hospitality, hospitality automation, navigation, etc...",
    img: "./travel.svg",
  },
  {
    id: 6,
    name: "Open Innovation",
    description:
      "An open-ended theme where the only restriction is your imagination. Build the ideas that you believe in and make a difference. It can either be hardware or software.",
    img: "./open-innovation.svg",
  },
];

export const Themes = () => {
  return (
    <div className="home w-screen overflow-hidden p-8">
      <div className="stars"></div>
      <div className="mb-10 w-full font-jetbrains_mono text-4xl font-semibold text-white">
        Themes
      </div>
      <div className="flex flex-wrap justify-around">
        {themesData.map((value) => (
          <div
            className="mt-6 mb-10 flex flex-col items-center justify-between space-y-8 p-5 backdrop-blur-sm"
            key={value.id}
          >
            <div className="w-full space-y-6">
              <div className="w-56 rounded-md bg-white py-1.5 text-center font-jetbrains_mono text-xl font-semibold text-blue-700">
                {value.name}
              </div>
              <div className="max-w-lg font-inter text-base text-gray-200">
                {value.description}
              </div>
            </div>
            <picture className="flex w-full justify-center">
              <img src={value.img} className="w-60" alt="" />
            </picture>
          </div>
        ))}
      </div>
    </div>
  );
};
