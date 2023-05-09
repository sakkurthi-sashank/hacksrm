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
    description:
      "Create innovative applications that leverage machine learning algorithms to solve complex problems, such as predictive analytics, natural language processing and computer vision.",
    icon: <IconRobot className="h-10 w-10 text-white" stroke={1.5} />,
  },
  {
    id: 2,
    name: "GAME DEVELOPMENT",
    description:
      "Develop immersive and engaging games, leveraging cutting-edge game engines and technologies to create captivating gameplay experiences.",
    icon: <IconBrandXbox className="h-10 w-10 text-white" stroke={1.5} />,
  },
  {
    id: 3,
    name: "I-O-T",
    description:
      "Build connected devices and systems that collect and analyze data in real-time, creating innovative solutions that improve efficiency and productivity across industries.",
    icon: (
      <IconCircuitDiodeZener className="h-10 w-10 text-white" stroke={1.5} />
    ),
  },
  {
    id: 4,
    name: "WEB3 AND FIN-TECH",
    description:
      "Build decentralized applications (dApps) that run on the blockchain, leveraging smart contracts to facilitate secure and transparent transactions.",
    icon: (
      <IconCurrencyEthereum className="h-10 w-10 text-white" stroke={1.5} />
    ),
  },
  {
    id: 5,
    name: "AR / VR",
    description:
      "Use augmented and virtual reality technologies to create innovative applications, such as training simulations, entertainment experiences, and marketing campaigns.",
    icon: <IconCardboards className="h-10 w-10 text-white" stroke={1.5} />,
  },
  {
    id: 6,
    name: "OPEN INNOVATION",
    description:
      "Envision and engineer pioneering hardware or software solutions, poised to effectuate a benevolent and lasting influence on the global stage.",
    icon: <IconBrandOpenSource className="h-10 w-10 text-white" stroke={1.5} />,
  },
];

export const Themes = () => {
  return (
    <section
      id="Themes"
      className="min-h-screen w-full bg-gray-900 px-0 py-16 md:px-10"
    >
      <div className="title-gradient mb-20 text-center text-4xl font-semibold sm:text-5xl">
        Themes
      </div>

      <div className="grid grid-cols-1 gap-10 px-4 md:grid-cols-2 lg:grid-cols-3">
        {themesData.map((theme) => (
          <div
            key={theme.id}
            className="z-10 flex flex-col items-center justify-evenly space-y-4 rounded-lg border border-gray-700 bg-gray-900 p-8"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500">
              {theme.icon}
            </div>
            <div className="text-center text-2xl font-semibold text-white">
              {theme.name}
            </div>
            <div className="text-center text-gray-300">{theme.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
