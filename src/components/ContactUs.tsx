import { IconBrandDiscord, IconMail } from "@tabler/icons-react";
import React from "react";

export const ContactUs = () => {
  return (
    <div className="relative h-screen bg-gray-950 py-10">
      <div className="background-animation"></div>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-8">
          <div className="mb-10 text-center text-4xl font-bold text-white sm:mb-20">
            Contact Us
          </div>
        </div>
        <div className="mx-auto max-w-2xl px-6 text-center font-inter text-lg text-gray-200 sm:px-0 sm:text-2xl">
          Our team is always ready to help you. If you have any questions, feel
          free to contact us.
        </div>
        <div className="mt-16 flex w-full flex-col items-center justify-around space-y-10 text-gray-200 sm:mt-24 sm:flex-row sm:space-y-0">
          <div className="flex flex-col items-center">
            <IconMail className="h-14 w-14 sm:h-24 sm:w-24" stroke={1} />
            <div className="text-center text-xl antialiased sm:text-2xl">
              next_tech_lab@srmap.edu.in
            </div>
          </div>
          <div className="flex flex-col items-center">
            <IconBrandDiscord
              className="h-20 w-20 sm:h-24 sm:w-24"
              stroke={1}
            />
            <div className="text-center text-xl antialiased sm:text-2xl">
              #next-tech-lab-9000494
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
