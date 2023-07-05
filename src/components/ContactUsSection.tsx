import {
  IconMail,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const SocialIcon = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-200 hover:text-gray-400"
  >
    {children}
  </a>
);

export const ContactUsSection = () => {
  const socials = [
    {
      href: "https://www.instagram.com/hacksrm23/",
      icon: (
        <IconBrandInstagram
          size={50}
          stroke={1.5}
          className="text-fuchsia-500"
        />
      ),
    },
    {
      href: "https://twitter.com/HackSrm23",
      icon: (
        <IconBrandTwitter size={50} stroke={1.5} className="text-blue-400" />
      ),
    },
    {
      href: "https://www.linkedin.com/in/hack-srm-0a5624274/",
      icon: (
        <IconBrandLinkedin size={50} stroke={1.5} className="text-blue-600" />
      ),
    },
  ];

  return (
    <section id="ContactUs" className="min-h-screen py-10 space-y-20">
      <div className="mb-20 text-center text-4xl font-semibold sm:text-5xl font-roboto-mono bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
        Contact Us
      </div>
      <div className="my-8 font-roboto-mono flex flex-col items-center justify-evenly">
        <div className="flex items-center justify-center space-x-6">
          <IconMail
            className="h-20 w-20  rounded-full bg-indigo-600 p-4 text-white sm:h-24 sm:w-24"
            stroke={1.5}
          />

          <div className="indigo z-10 text-center text-3xl text-gray-200 antialiased sm:text-4xl">
            <a href="mailto:help@hacksrm.tech">help@hacksrm.tech</a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-6">
        {socials.map(({ href, icon }) => (
          <div
            key={href}
            className="z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-70 p-2"
          >
            <SocialIcon href={href}>{icon}</SocialIcon>
          </div>
        ))}
      </div>

      <div className="flex flex-col font-roboto-mono items-center justify-center space-y-6 pt-8 text-white">
        <h5 className="text-center text-2xl font-semibold text-gray-200">
          In Collaboration With
        </h5>
        <img
          src="https://cdn.discordapp.com/attachments/1024859933524627457/1105512128867213382/ntllogo.png"
          alt="NextTech Logo"
          className="z-10 h-24 rounded-md p-4"
        />
      </div>
    </section>
  );
};
