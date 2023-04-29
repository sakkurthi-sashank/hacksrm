import {
  IconHexagon3d,
  IconBroadcast,
  IconAward,
  IconRocket,
} from "@tabler/icons-react";

const WhyHackSRMApData = [
  {
    icon: <IconHexagon3d stroke={1.5} className="h-8 w-8 text-white" />,
    title: "Experience",
    description:
      "Participating in a hackathon offers an opportunity to work collaboratively with like-minded individuals to develop creative solutions to real-world problems.",
  },
  {
    icon: <IconBroadcast stroke={1.5} className="h-8 w-8 text-white" />,
    title: "Networking",
    description:
      "Networking is the act of creating and maintaining relationships with individuals and groups in order to exchange information, ideas, and opportunities. ",
  },
  {
    icon: <IconAward stroke={1.5} className="h-8 w-8 text-white" />,
    title: "Prizes",
    description:
      "Hackathons are a great way to win prizes and gain recognition for your work. The prizes can range from cash to internships, and the recognition can be in the form of a job offer or a scholarship.",
  },
  {
    icon: <IconRocket stroke={1.5} className="h-8 w-8 text-white" />,
    title: "Fun",
    description:
      "Hackathons are a great way to meet new people, learn new skills, and have fun. You can also win prizes for your work.",
  },
];

export const WhyHackSRMAp = () => {
  return (
    <section
      id="About"
      className="my-0 min-h-screen px-6 py-16 sm:px-20 sm:pt-28"
    >
      <div className="max-w-3xl space-y-3">
        <h2 className="mb-6 bg-gradient-to-b from-violet-600 to-violet-300 bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl">
          Why you need to participate in HackSRM?
        </h2>
        <p className="text-gray-300">
          Hack SRM is a 36-hour hackathon where you can build your dream project
          with your friends and win exciting prizes. It is a great opportunity
          to learn new skills, meet new people, and have fun.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {WhyHackSRMApData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center space-y-3"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-500">
              {data.icon}
            </div>
            <h3 className="text-center text-xl font-semibold text-gray-100">
              {data.title}
            </h3>
            <p className="text-center text-gray-400">{data.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
