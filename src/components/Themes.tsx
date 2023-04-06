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
    <div className="bg-gray-950 ">
      <div className="p-3">
        <div className="mb-10 text-center font-orbitron text-4xl font-semibold text-white">
          Themes
        </div>
        <div className="flex flex-wrap justify-around py-10">
          {themesData.map((value) => (
            <div
              className="mb-10 mt-6 flex flex-col justify-between space-y-5 rounded-xl border-2 border-violet-500 bg-violet-700 bg-opacity-5 p-5"
              key={value.id}
            >
              <div className="relative">
                <div className="background-animation"></div>
              </div>
              <div className="w-full space-y-3">
                <div className="w-fit rounded-md font-inter text-xl font-semibold text-gray-100">
                  {value.name}
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
