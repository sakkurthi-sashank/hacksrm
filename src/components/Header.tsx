import { useState } from "react";

const NavLinks = [
  "About",
  "Prizes",
  "Themes",
  "Schedule",
  "Sponsors",
  "Organizers",
  "FAQs",
  "ContactUs",
];

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="fixed left-0 right-0 top-0 z-20 h-14 bg-opacity-80 backdrop-blur-lg backdrop-filter">
      {/* Desktop Header */}
      <div className="hidden h-full md:block">
        <div className="flex h-full items-center justify-around px-4">
          {NavLinks.map((link) => (
            <a
              className="violet cursor-pointer text-gray-300 antialiased hover:text-violet-500"
              key={link}
              href={`#${link}`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Header */}
      <div className="block h-full md:hidden">
        <div className="flex h-full items-center px-4">
          <button
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            {openMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7 text-gray-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        {openMenu && (
          <div className="absolute left-0 right-0 top-14 flex flex-col space-y-6 bg-gray-950  bg-opacity-95 px-10 py-8 backdrop-blur-lg backdrop-filter">
            {NavLinks.map((link) => (
              <a
                className="violet cursor-pointer text-lg text-gray-200 antialiased hover:text-violet-500"
                key={link}
                href={`#${link}`}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
