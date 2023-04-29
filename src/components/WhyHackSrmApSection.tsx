import {
  IconHexagon3d,
  IconBroadcast,
  IconAward,
  IconRocket,
} from "@tabler/icons-react";

const WhyHackSRMApData = [
  {
    icon: <IconHexagon3d stroke={1.5} className="h-6 w-6 text-violet-500" />,
    title: "Experience",
    description:
      "Participating in a hackathon offers an opportunity to work collaboratively with like-minded individuals to develop creative solutions to real-world problems. It provides a platform for learning new skills and technologies, as well as honing existing ones. The fast-paced and competitive environment of a hackathon encourages rapid prototyping and iteration, fostering an innovative and entrepreneurial mindset.",
  },
  {
    icon: <IconBroadcast stroke={1.5} className="h-6 w-6 text-violet-500" />,
    title: "Networking",
    description:
      "Networking is the act of creating and maintaining relationships with individuals and groups in order to exchange information, ideas, and opportunities. It involves building a social and professional network by actively engaging with others, both in person and online. Effective networking requires communication skills, including the ability to listen actively and ask thoughtful questions.",
  },
  {
    icon: <IconAward stroke={1.5} className="h-6 w-6 text-violet-500" />,
    title: "Prizes",
    description:
      "Prizes are rewards or incentives given to individuals or groups for their achievements or contributions in a particular field or competition. Prizes can take many forms, such as cash awards, certificates, trophies, medals, and scholarships. They are often used to motivate and recognize excellence in various domains, including academic, scientific, artistic, athletic, and entrepreneurial endeavors.",
  },
  {
    icon: <IconRocket stroke={1.5} className="h-6 w-6 text-violet-500" />,
    title: "Fun",
    description:
      "Hackathons are a fun and exciting way to work collaboratively with others to develop innovative solutions to real-world problems. The fast-paced and competitive environment encourages creativity and experimentation, while the opportunity to learn new skills and technologies can be both challenging and rewarding.",
  },
];

export const WhyHackSRMAp = () => {
  return (
    <section id="About" className="my-0  px-6 py-16 sm:px-20 sm:pt-28">
      <div className="text-gray-300">
        <div className="font-inter max-w-3xl space-y-3">
          <h2 className="mb-6 bg-gradient-to-b from-violet-500 to-violet-200 bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl">
            Why you need to participate in HackSRM?
          </h2>
          <p>
            Hack SRM is a 36-hour hackathon where you can build your dream
            project with your friends and win exciting prizes. It is a great
            opportunity to learn new skills, meet new people, and have fun.
          </p>
        </div>
        {WhyHackSRMApData.map((feature) => (
          <div className="z-10 mt-6 flex flex-col" key={feature.title}>
            <div className="flex items-center gap-x-2 sm:gap-x-4">
              {feature.icon}
              <h3 className="text-2xl font-semibold text-gray-100">
                {feature.title}
              </h3>
            </div>
            <p className="z-10 mt-4 max-w-5xl px-0 pl-6 font-normal text-gray-100 antialiased sm:px-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
