import { IconBrandDiscord, IconMail } from "@tabler/icons-react";

export const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-950 py-10">
      <div className="py-16 text-center font-ibm_plex_mono text-4xl font-bold text-white antialiased sm:text-5xl">
        Contact Us
      </div>
      <div className="my-8 flex flex-col items-center justify-evenly space-y-10">
        <div className="flex flex-col items-center">
          <IconMail
            className="h-14 w-14 text-blue-500 sm:h-24 sm:w-24"
            stroke={1}
          />
          <div className="text-center font-ibm_plex_mono text-xl text-white antialiased sm:text-2xl">
            next_tech_lab@srmap.edu.in
          </div>
        </div>
        <div className="flex flex-col items-center">
          <IconBrandDiscord
            className="h-20 w-20 text-blue-500 sm:h-24 sm:w-24"
            stroke={1}
          />
          <div className="text-center font-ibm_plex_mono text-xl text-white antialiased sm:text-2xl">
            #next-tech-lab-9000494
          </div>
        </div>
      </div>
    </div>
  );
};
