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
    <section
      id="Organizers"
      className="min-h-screen px-2 pb-10 pt-0 sm:px-10 sm:pt-10"
    >
      <div className="my-10 bg-gradient-to-b from-violet-500 to-violet-200 bg-clip-text text-center text-4xl font-semibold text-transparent sm:mt-20 sm:text-5xl">
        Organizers Team
      </div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-8 md:grid-cols-5  lg:grid-cols-6 lg:gap-x-8 lg:gap-y-12">
        {OrganizersData.map((organizer) => (
          <div
            className="z-10 flex flex-col items-center space-y-5 rounded py-5"
            key={organizer.name}
          >
            <img
              src="https://bit.ly/dan-abramov"
              loading="lazy"
              alt=""
              className="object-fit h-16 rounded-full object-center sm:h-28"
            />
            <div>
              <div className="violet mb-2 text-center text-sm font-normal text-violet-600 antialiased md:text-lg">
                {organizer.name}
              </div>

              <div className="flex justify-center">
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-violet-200 transition duration-100 hover:text-violet-500 active:text-gray-600"
                  >
                    <IconBrandLinkedin
                      className="h-4 w-4 sm:h-6 sm:w-6"
                      stroke={1.5}
                    />
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-violet-200 transition duration-100 hover:text-violet-500 active:text-violet-600"
                  >
                    <IconBrandTwitter
                      className="h-4 w-4 sm:h-6 sm:w-6"
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
