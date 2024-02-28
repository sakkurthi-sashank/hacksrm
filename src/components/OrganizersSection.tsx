import Image from "next/image";

const OrganizationHead = [
  {
    name: "Omkar Ghongade",
    image: "/organizers/omkar.jpg",
    position: "Organizers Head",
    team: "",
  },
  {
    name: "Ayush Singh Rathore",
    image: "/organizers/ayush.jpg",
    position: "Organizers Head",
    team: "",
  },
  {
    name: "Achyut Katiyar",
    image: "/organizers/achyut.jpg",
    position: "Organizers Head",
    team: "",
  },
  {
    name: "Preetam Vallebhneni",
    image: "/organizers/preetam.jpg",
    position: "Organizers Head",
    team: "",
  },
  {
    name: "Chandrasai Reddy",
    image: "/organizers/chandrasai.jpg",
    position: "Organizers Head",
    team: "",
  },
];

export const OrganizersSection = () => {
  return (
    <section
      id="Organizers"
      className="min-h-screen rounded-lg bg-gray-950 px-2 pb-4 pt-5 text-lg sm:px-10 sm:pt-10 "
    >
      <div className="mb-16 pb-4 text-center text-4xl font-semibold sm:text-5xl font-josefin-sans bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
        Organizing Heads
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-10">
        {/* {AdvisorsData.map((organizer) => (
          <div
            className="z-10 flex w-[44%] font-josefin-sans flex-col items-center space-y-5 rounded-3xl bg-black bg-opacity-30 p-8 text-xl sm:w-1/6"
            key={organizer.name}
          >
            <Image
              src={organizer.image}
              loading="lazy"
              width={64}
              height={64}
              alt=""
              className="rounded-md object-cover object-center sm:h-32 sm:w-32"
            />

            <div>
              <div className="indigo mb-2 text-center text-xl font-medium text-gray-200 antialiased md:text-lg">
                {organizer.name}
              </div>
              <div className=" sm:text-md flex justify-center text-lg text-gray-300">
                {organizer.position}
              </div>
            </div>
          </div>
        ))} */}
      </div>
      <div className="mb-16 pb-4 text-center text-4xl font-semibold sm:text-5xl font-josefin-sans bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
        Organizers
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-10">
        {OrganizationHead.map((organizer) => (
          <div
            className="z-10 flex w-[44%] flex-col items-center space-y-5 rounded-3xl bg-black bg-opacity-30 p-8 text-center text-xl sm:w-1/6"
            key={organizer.name}
          >
            <Image
              src={organizer.image}
              alt=""
              loading="lazy"
              width={64}
              height={64}
              className="rounded-md object-cover object-center sm:h-32 sm:w-36 md:h-28 md:w-28"
            />
            <div>
              <div className="indigo mb-2 text-center font-medium text-gray-200 antialiased sm:text-sm md:text-xl">
                {organizer.name}
              </div>
              <div className="flex justify-center text-lg text-gray-300 sm:text-sm">
                {organizer.team}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
