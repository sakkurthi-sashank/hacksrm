import React from "react";
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
    <section className="relative my-0 min-h-screen bg-gray-950 px-6 py-16 sm:px-14 sm:py-28">
      <div className="absolute bottom-[50%] left-0 right-0 top-[50%] z-0 m-auto h-[200px] max-w-4xl bg-gradient-to-b from-blue-700 to-gray-950 blur-[160px]"></div>
      <picture>
        <img
          alt="Background pattern"
          src="/static/bg-pattern.webp"
          width="2880"
          height="1358"
          className="pointer-events-none absolute inset-0 m-auto h-full w-full object-cover"
          loading="lazy"
          style={{ color: "transparent" }}
        />
      </picture>
      <div className="text-gray-300">
        <div className="max-w-xl space-y-3 font-inter">
          <h2 className="mb-6 font-orbitron text-3xl font-semibold text-gray-100 sm:text-4xl">
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
            {WhyHackSRMApData.map((feature, index) => (
              <li className="z-10 flex gap-x-4" key={feature.title}>
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg border border-gray-700 bg-gray-900 text-blue-500">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-100">
                    {feature.title}
                  </h3>
                  <p className="mt-1 font-medium text-gray-300 antialiased">
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
