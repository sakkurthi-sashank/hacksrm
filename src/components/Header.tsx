import React from "react";

const NavLinks = [
  "Home",
  "About",
  "Prizes",
  "Themes",
  "Schedule",
  "FAQs",
  "Sponsors",
  "Team",
  "Contact Us",
];

export const Header = () => {
  return (
    <div className="fixed left-4 right-4 top-2 z-10 hidden h-14 rounded-2xl border border-gray-800 bg-opacity-30 backdrop-blur-lg backdrop-filter lg:block">
      <div className="visible flex h-full items-center justify-around px-4">
        {NavLinks.map((link) => (
          <div
            className="cursor-pointer font-inter font-normal text-white antialiased hover:text-violet-500"
            key={link}
          >
            {link}
          </div>
        ))}
      </div>
    </div>
  );
};
