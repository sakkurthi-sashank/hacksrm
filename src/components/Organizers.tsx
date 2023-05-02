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
      className="min-h-screen bg-gray-900 px-2 pb-10 pt-5 sm:px-10 sm:pt-10"
    >
      <div className="my-10 text-center text-4xl font-semibold text-indigo-600 sm:mt-20 sm:text-5xl">
        Organizers Team
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {OrganizersData.map((organizer) => (
          <div
            className="z-10 flex flex-col items-center space-y-5 rounded py-5"
            key={organizer.name}
          >
            <img
              src={organizer.image}
              loading="lazy"
              alt=""
              className="object-fit h-16 rounded-2xl object-center sm:h-28"
            />
            <div>
              <div className="indigo mb-2 text-center text-sm font-normal text-gray-200 antialiased md:text-lg">
                {organizer.name}
              </div>

              <div className="flex justify-center">
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-500 transition duration-100"
                  >
                    <IconBrandLinkedin
                      className="h-4 w-4 fill-blue-600 text-white sm:h-6 sm:w-6"
                      stroke={1.5}
                    />
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-500 transition duration-100"
                  >
                    <IconBrandTwitter
                      className="h-4 w-4 fill-sky-600 text-white sm:h-6 sm:w-6"
                      stroke={1.5}
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
