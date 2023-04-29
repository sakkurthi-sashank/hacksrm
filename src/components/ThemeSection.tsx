import {
  IconActivity,
  IconBooks,
  IconBuildingBank,
  IconGps,
  IconRobot,
  IconShieldCheck,
} from "@tabler/icons-react";

const themesData = [
  {
    id: 1,
    name: "Health Care",
    description:
      "Code against health problems, aim for real-life challenges and draw solutions that can drive social impact",
  },
  {
    id: 2,
    name: "Education",
    description:
      "Find new ways for the acquisition of the knowledge, skills. Showcase what could be the future of education. ",
  },
  {
    id: 3,
    name: "Women's Safety",
    description:
      "The day when a woman can freely walk on the roads at night is the day of real Independence - Mahatma Gandhi.",
  },
  {
    id: 4,
    name: "Fin-Tech",
    description:
      "Financial technology is the technology and innovation that aims to compete with traditional financial methods in the delivery of financial services.",
  },
  {
    id: 5,
    name: "Travel & Tourism",
    description:
      "The travel and tourism industry is one of the world’s largest industries with a global economic contribution of over 7.6 trillion U.S. dollars in 2016.",
  },
  {
    id: 6,
    name: "Open Innovation",
    description:
      "An open-ended theme where the only restriction is your imagination. Build the ideas that you believe in and make a difference. It can either be hardware or software.",
  },
];

export const Themes = () => {
  return (
    <section id="Themes" className="min-h-screen w-full px-0 py-16 md:px-10">
      <div className="mb-20 bg-gradient-to-b from-violet-500 to-violet-200 bg-clip-text text-center text-4xl font-semibold text-transparent sm:text-5xl">
        Themes / Tracks
      </div>

      {/* Beautifully theme in tailwind css */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {themesData.map((theme) => (
          <div
            key={theme.id}
            className="z-10 flex flex-col items-center justify-center space-y-4  rounded-lg p-8 shadow-lg"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-500">
              {theme.id === 1 && <IconActivity size={32} color="white" />}
              {theme.id === 2 && <IconBooks size={32} color="white" />}
              {theme.id === 3 && <IconShieldCheck size={32} color="white" />}
              {theme.id === 4 && <IconBuildingBank size={32} color="white" />}
              {theme.id === 5 && <IconGps size={32} color="white" />}
              {theme.id === 6 && <IconRobot size={32} color="white" />}
            </div>
            <div className="text-center text-2xl font-semibold text-gray-200">
              {theme.name}
            </div>
            <div className="text-center text-gray-300">{theme.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
