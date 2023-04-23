import { IconBrandTwitter, IconBrandLinkedin } from "@tabler/icons-react";

const OrganizersData = [
  {
    name: "Random Name",
    image:
      "https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Random Name",
    image:
      "https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Random Name",
    image:
      "https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Random Name",
    image:
      "https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Random Name",
    image:
      "https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Random Name",
    image:
      "https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Random Name",
    image:
      "https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Random Name",
    image:
      "https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256",
    linkedin: "#",
    twitter: "#",
  },
];

export const OrganizersSection = () => {
  return (
    <div className="min-h-screen  py-6 sm:py-8 lg:py-16">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="py-16 text-center font-ibm_plex_mono text-4xl font-bold text-white antialiased sm:text-5xl">
          Organizers Team
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
          {OrganizersData.map((organizer) => (
            <div
              className="z-10 flex flex-col items-center rounded py-5"
              key={organizer.name}
            >
              <div className="mb-2 h-28 w-28 overflow-hidden rounded bg-gray-100">
                <picture className="h-full w-full">
                  <img
                    src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256"
                    loading="lazy"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </picture>
              </div>

              <div>
                <div className="mb-2 text-center font-ibm_plex_mono font-normal text-blue-600 antialiased md:text-lg">
                  {organizer.name}
                </div>

                <div className="flex justify-center">
                  <div className="flex gap-4">
                    <a
                      href="#"
                      target="_blank"
                      className="text-blue-200 transition duration-100 hover:text-blue-500 active:text-gray-600"
                    >
                      <IconBrandLinkedin size={24} stroke={1.5} />
                    </a>

                    <a
                      href="#"
                      target="_blank"
                      className="text-blue-200 transition duration-100 hover:text-blue-500 active:text-blue-600"
                    >
                      <IconBrandTwitter size={24} stroke={1.5} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
