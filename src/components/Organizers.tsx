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

export const Organizers = () => {
  return (
    <div className="relative min-h-screen bg-gray-950 py-6 sm:py-8 lg:py-16">
      <div className="background-animation"></div>
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 ">
        <div className="mb-20 text-4xl font-bold text-white">
          Organizers Teams
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
          {OrganizersData.map((organizer) => (
            <div className="flex flex-col items-center" key={organizer.name}>
              <div className="mb-2 h-28 w-28 overflow-hidden rounded-full bg-gray-100">
                <picture className="h-full w-full">
                  <img
                    src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256"
                    loading="lazy"
                    alt="Photo by Radu Florin"
                    className="h-full w-full object-cover object-center"
                  />
                </picture>
              </div>

              <div>
                <div className="mb-2 text-center font-semibold text-cyan-400 md:text-lg">
                  Random Name
                </div>

                <div className="flex justify-center">
                  <div className="flex gap-4">
                    <a
                      href="#"
                      target="_blank"
                      className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                    >
                      <IconBrandLinkedin size={24} stroke={1.5} />
                    </a>

                    <a
                      href="#"
                      target="_blank"
                      className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
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
