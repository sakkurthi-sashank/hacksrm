import { IconBrandDiscord, IconMail } from "@tabler/icons-react";

export const ContactUs = () => {
  return (
    <section id="ContactUs" className="min-h-screen py-10">
      <div className="my-20 bg-gradient-to-b from-violet-500 to-violet-200 bg-clip-text text-center text-4xl font-semibold text-transparent sm:text-5xl">
        Contact Us
      </div>
      <div className="my-8 flex flex-col items-center justify-evenly space-y-10">
        <div className="flex flex-col items-center">
          <IconMail
            className="h-14 w-14 text-violet-500 sm:h-24 sm:w-24"
            stroke={1}
          />
          <div className="violet text-center text-xl text-white antialiased sm:text-2xl">
            next_tech_lab@srmap.edu.in
          </div>
        </div>
        <div className="flex flex-col items-center">
          <IconBrandDiscord
            className="h-20 w-20 text-violet-500 sm:h-24 sm:w-24"
            stroke={1}
          />
          <div className="violet text-center text-xl text-white antialiased sm:text-2xl">
            #next-tech-lab-9000494
          </div>
        </div>
      </div>
    </section>
  );
};
