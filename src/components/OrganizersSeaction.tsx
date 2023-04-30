import { IconBrandTwitter, IconBrandLinkedin } from "@tabler/icons-react";

const OrganizersData = [
  {
    name: "Random Name",
    image: "https://bit.ly/kent-c-dodds",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Random Name",
    image: "https://bit.ly/kent-c-dodds",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Random Name",
    image: "https://bit.ly/kent-c-dodds",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Random Name",
    image: "https://bit.ly/kent-c-dodds",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Random Name",
    image: "https://bit.ly/kent-c-dodds",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Random Name",
    image: "https://bit.ly/kent-c-dodds",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Random Name",
    image: "https://bit.ly/kent-c-dodds",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Random Name",
    image: "https://bit.ly/kent-c-dodds",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Random Name",
    image: "https://bit.ly/kent-c-dodds",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Random Name",
    image: "https://bit.ly/kent-c-dodds",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Random Name",
    image: "https://bit.ly/kent-c-dodds",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Random Name",
    image: "https://bit.ly/kent-c-dodds",
    linkedin: "#",
    twitter: "#",
  },
];

export const OrganizersSection = () => {
  return (
    <section
      id="Organizers"
      className="min-h-screen px-2 pb-10 pt-0 sm:px-10 sm:pt-10"
    >
      <div className="my-10 bg-gradient-to-b from-indigo-500 to-indigo-200 bg-clip-text text-center text-4xl font-semibold text-transparent sm:mt-20 sm:text-5xl">
        Organizers Team
      </div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-8 md:grid-cols-5  lg:grid-cols-6 lg:gap-x-8 lg:gap-y-12">
        {OrganizersData.map((organizer) => (
          <div
            className="z-10 flex flex-col items-center space-y-5 rounded py-5"
            key={organizer.name}
          >
            <img
              src={organizer.image}
              loading="lazy"
              alt=""
              className="object-fit h-16 rounded-full object-center sm:h-28"
            />
            <div>
              <div className="indigo mb-2 text-center text-sm font-normal text-indigo-600 antialiased md:text-lg">
                {organizer.name}
              </div>

              <div className="flex justify-center">
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-indigo-300 transition duration-100 hover:text-indigo-600 active:text-gray-600"
                  >
                    <IconBrandLinkedin
                      className="h-4 w-4 sm:h-6 sm:w-6"
                      stroke={1}
                    />
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-indigo-300 transition duration-100 hover:text-indigo-600 active:text-indigo-600"
                  >
                    <IconBrandTwitter
                      className="h-4 w-4 sm:h-6 sm:w-6"
                      stroke={1}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
