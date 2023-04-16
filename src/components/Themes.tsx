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
    icon: <IconActivity size={100} stroke={1} />,
  },
  {
    id: 2,
    name: "Education",
    description:
      "Find new ways for the acquisition of the knowledge, skills. Showcase what could be the future of education. Blend your skills and let the ideas impact on this digital age.",
    icon: <IconBooks size={100} stroke={1} />,
  },
  {
    id: 3,
    name: "Women's Safety",
    description:
      "The day when a woman can freely walk on the roads at night is the day of real Independence - Mahatma Gandhi. Why not make it possible! Use your skills and be a part of true freedom.",
    icon: <IconShieldCheck size={100} stroke={1} />,
  },
  {
    id: 4,
    name: "Fin-Tech",
    description:
      "Financial technology is the technology and innovation that aims to compete with traditional financial methods in the delivery of financial services.",

    icon: <IconBuildingBank size={100} stroke={1} />,
  },
  {
    id: 5,
    name: "Travel & Tourism",
    description:
      "The advent of technology is fostering a change in travel and tourism, innovate and help tourists to reduce costs, improve customer hospitality, hospitality automation, navigation, etc...",

    icon: <IconGps size={100} stroke={1} />,
  },
  {
    id: 6,
    name: "Open Innovation",
    description:
      "An open-ended theme where the only restriction is your imagination. Build the ideas that you believe in and make a difference. It can either be hardware or software.",
    icon: <IconRobot size={100} stroke={1} />,
  },
];

export const Themes = () => {
  return (
    <div className="bg-gray-950 ">
      <div className="p-3">
        <div className="mb-10 text-center font-ibm_plex_mono text-4xl font-semibold text-white">
          Hackathon Themes
        </div>
        <div className="grid gap-4 px-6 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
          {themesData.map((theme) => (
            <div
              className="flex flex-col items-center overflow-hidden rounded-lg border border-blue-800 md:flex-row"
              key={theme.id}
            >
              <a className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
                <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-gray-950 text-blue-500">
                  {theme.icon}
                </div>
              </a>

              <div className="flex flex-col gap-2 p-4 font-ibm_plex_mono lg:p-6">
                <h2 className="text-xl font-semibold text-gray-200">
                  {theme.name}
                </h2>

                <p className=" text-gray-400">{theme.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
