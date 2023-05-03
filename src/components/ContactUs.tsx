import { IconBrandDiscord, IconMail } from "@tabler/icons-react";

export const ContactUs = () => {
  return (
    <section id="ContactUs" className="min-h-screen bg-gray-900 py-10">
      <div className="my-20 text-center text-4xl font-semibold title-gradient sm:text-5xl">
        Contact Us
      </div>
      <div className="my-8 flex flex-col items-center justify-evenly space-y-10">
        <div className="flex items-center justify-center space-x-6">
          <IconMail
            className="h-20 w-20  rounded-full bg-indigo-600 p-4 text-white sm:h-24 sm:w-24"
            stroke={1.5}
          />
          <div className="indigo text-center text-xl text-gray-200 antialiased sm:text-2xl">
            hacksrm@srmap.edu.in
          </div>
        </div>
        <div className="flex items-center justify-center space-x-6">
          <IconBrandDiscord
            className="h-20 w-20  rounded-full bg-indigo-600 p-4 text-white sm:h-24 sm:w-24"
            stroke={1.5}
          />
          <div className="indigo text-center text-xl text-gray-200 antialiased sm:text-2xl">
            discord.gg/nexttech
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col space-y-6 pt-8 text-white">
        <h5 className="text-center font-semibold text-2xl text-gray-200">
          In Collaboration With
        </h5>
        <div className="flex items-center justify-center space-x-6">
          <img
            src="/next-tech-lab-logo.png"
            alt="NextTech Logo"
            className="z-10 h-20 rounded-sm p-2"
          />
        </div>
      </div>
    </section>
  );
};
