import {
  IconRobot,
  IconBrandXbox,
  IconCircuitDiodeZener,
  IconCurrencyEthereum,
  IconCardboards,
  IconBrandOpenSource,
} from "@tabler/icons-react";

const themesData = [
  {
    id: 1,
    name: "AI AND ML",
    prize: "10,000 INR",
    description:
      "Create innovative applications that leverage machine learning algorithms to solve complex problems, natural language and computer vision.",
    icon: <IconRobot className="h-10 w-10 text-white" stroke={1.5} />,
  },
  {
    id: 2,
    name: "GAME DEVELOPMENT",
    prize: "10,000 INR",
    description:
      "Develop immersive and engaging games, leveraging cutting-edge game engines and technologies to create captivating gameplay experiences.",
    icon: <IconBrandXbox className="h-10 w-10 text-white" stroke={1.5} />,
  },
  {
    id: 3,
    name: "I-O-T",
    prize: "10,000 INR",
    description:
      "Build connected devices and systems that collect and analyze data in real-time, creating innovative solutions that improve efficiency.",
    icon: (
      <IconCircuitDiodeZener className="h-10 w-10 text-white" stroke={1.5} />
    ),
  },
  {
    id: 4,
    name: "WEB3 AND FIN-TECH",
    prize: "10,000 INR",
    description:
      "Build decentralized applications (dApps) that run on the blockchain, smart contracts to facilitate secure and transparent transactions.",
    icon: (
      <IconCurrencyEthereum className="h-10 w-10 text-white" stroke={1.5} />
    ),
  },
  {
    id: 5,
    name: "AR / VR",
    prize: "10,000 INR",
    description:
      "Use augmented and virtual reality technologies to create innovative applications, entertainment experiences, and marketing campaigns.",
    icon: <IconCardboards className="h-10 w-10 text-white" stroke={1.5} />,
  },
  {
    id: 6,
    name: "BEST WOMEN TECH",
    prize: "15,000 INR",
    description:
      "Make Best use of Technology to solve real world problems and make a difference. which women can relate to.",
    icon: <IconBrandOpenSource className="h-10 w-10 text-white" stroke={1.5} />,
  },
];

export const ThemeSection = () => {
  return (
    <section id="Themes" className="min-h-screen w-full px-0 py-16 md:px-10">
      <div className="mb-20 text-center text-4xl font-semibold sm:text-5xl font-roboto-mono bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
        Themes and Prizes
      </div>
      <div className="grid grid-cols-1 font-roboto-mono gap-10 px-4 md:grid-cols-2 lg:grid-cols-3">
        {themesData.map((theme) => (
          <div
            key={theme.id}
            className="z-10 flex flex-col items-center justify-evenly space-y-4 rounded-lg border border-gray-800 bg-gray-950 p-8"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500">
              {theme.icon}
            </div>
            <div className="text-center text-2xl font-semibold text-white">
              {theme.name}
            </div>
            <div className="text-center text-2xl font-semibold text-gray-400">
              {theme.prize}
            </div>
            <div className="text-center text-gray-300">{theme.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
