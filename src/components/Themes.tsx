import { IconSparkles } from "@tabler/icons-react";

const themesData = [
  {
    id: 1,
    name: "Health Care",
    description:
      "Code against health problems, aim for real-life challenges and draw solutions that can drive social impact",
    img: "/static/health_care.svg",
  },
  {
    id: 2,
    name: "Education",
    description:
      "Find new ways for the acquisition of the knowledge, skills. Showcase what could be the future of education. Blend your skills and let the ideas impact on this digital age.",
    img: "/static/education.svg",
  },
  {
    id: 3,
    name: "Women's Safety",
    description:
      "The day when a woman can freely walk on the roads at night is the day of real Independence - Mahatma Gandhi. Why not make it possible! Use your skills and be a part of true freedom.",
    img: "/static/women_safety.svg",
  },
  {
    id: 4,
    name: "Fin-Tech",
    description:
      "Financial technology is the technology and innovation that aims to compete with traditional financial methods in the delivery of financial services.",
    img: "/static/fintech.svg",
  },
  {
    id: 5,
    name: "Travel & Tourism",
    description:
      "The advent of technology is fostering a change in travel and tourism, innovate and help tourists to reduce costs, improve customer hospitality, hospitality automation, navigation, etc...",
    img: "/static/travel.svg",
  },
  {
    id: 6,
    name: "Open Innovation",
    description:
      "An open-ended theme where the only restriction is your imagination. Build the ideas that you believe in and make a difference. It can either be hardware or software.",
    img: "/static/open-innovation.svg",
  },
];

export const Themes = () => {
  return (
    <div className="relative">
      <div className="background-animation"></div>
      <div className="p-3">
        <div className="mb-14 text-center text-4xl font-bold text-white">
          Themes
        </div>
        <div className="flex flex-wrap justify-around">
          {themesData.map((value) => (
            <div
              className="mb-10 mt-6 flex flex-col justify-between space-y-5 rounded-lg bg-opacity-60 bg-clip-padding p-5 backdrop-blur-xl backdrop-filter"
              key={value.id}
            >
              <div className="w-full space-y-3">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg text-gray-100">
                    <IconSparkles size={24} />
                  </div>
                  <div className="w-fit rounded-md font-inter text-xl font-semibold text-gray-100">
                    {value.name}
                  </div>
                </div>
                <div className="max-w-lg font-inter font-light text-gray-300">
                  {value.description}
                </div>
              </div>
              <picture className="flex w-full justify-center">
                <img src={value.img} width={240} height={"100%"} alt="" />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
