import { IconSparkles } from "@tabler/icons-react";

const WhyHackSRMApData = [
  {
    icon: <IconSparkles size={24} />,
    title: "Experience",
    description:
      "Get a chance to work with industry experts and learn from them. Get a chance to work with industry experts and learn from them.",
  },
  {
    icon: <IconSparkles size={24} />,
    title: "Networking",
    description:
      "Get a chance to work with industry experts and learn from them. Get a chance to work with industry experts and learn from them.",
  },
  {
    icon: <IconSparkles size={24} />,
    title: "Prizes",
    description:
      "Get a chance to work with industry experts and learn from them. Get a chance to work with industry experts and learn from them.",
  },
  {
    icon: <IconSparkles size={24} />,
    title: "Fun",
    description:
      "Get a chance to work with industry experts and learn from them. Get a chance to work with industry experts and learn from them.",
  },
  {
    icon: <IconSparkles size={24} />,
    title: "Experience",
    description:
      "Get a chance to work with industry experts and learn from them. Get a chance to work with industry experts and learn from them.",
  },
  {
    icon: <IconSparkles size={24} />,
    title: "Experience",
    description:
      "Get a chance to work with industry experts and learn from them. Get a chance to work with industry experts and learn from them.",
  },
];

export const WhyHackSRMAp = () => {
  return (
    <section className="my-0 min-h-screen  px-6 py-16 sm:px-14 sm:py-28">
      <div className="text-gray-300">
        <div className="font-inter max-w-xl space-y-3">
          <h2 className="mb-6  text-3xl font-semibold text-gray-100 sm:text-4xl">
            Why you need to participate in HackSRM?
          </h2>
          <p>
            Hack SRM is a 36-hour hackathon where you can build your dream
            project with your friends and win exciting prizes. It is a great
            opportunity to learn new skills, meet new people, and have fun.
          </p>
        </div>
        <div className="mt-20">
          <ul className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {WhyHackSRMApData.map((feature) => (
              <li className="z-10 flex gap-x-4" key={feature.title}>
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-md border border-gray-800 text-blue-500">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-100">
                    {feature.title}
                  </h3>
                  <p className="mt-1 font-medium text-gray-400 antialiased">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
