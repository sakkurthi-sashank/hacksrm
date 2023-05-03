// import { IconBrandTwitter, IconBrandLinkedin } from "@tabler/icons-react";

// const OrganizersData = [
//   {
//     name: "",
//     image: "",
//     team: "",
//     linkedin: "",
//     twitter: "",
//   },
// ];

export const OrganizersSection = () => {
  return (
    <section
      id="Organizers"
      className="min-h-screen bg-gray-900 px-2 pb-4 pt-5 sm:px-10 sm:pt-10"
    >
      <div className="title-gradient my-10 text-center text-4xl font-semibold sm:mt-20 sm:text-5xl">
        Organizers Team
      </div>
      {/* <div className="flex flex-wrap justify-center gap-10">
        {OrganizersData.map((organizer) => (
          <div
            className="z-10 flex flex-col items-center space-y-5 rounded py-5"
            key={organizer.name}
          >
            <img
              src={organizer.image}
              loading="lazy"
              alt=""
              className="h-20 w-20 rounded-2xl object-cover object-center sm:h-28"
            />
            <div>
              <div className="indigo mb-2 text-center text-xs font-normal text-gray-700 antialiased md:text-base">
                {organizer.name}
              </div>
              <div className="my-2 rounded-xl border border-indigo-500 py-0.5 text-center text-xs font-normal text-indigo-500 antialiased">
                {organizer.team}
              </div>
              <div className="flex justify-center">
                <div className="flex gap-4">
                  <a
                    href={organizer.linkedin}
                    target="_blank"
                    className="text-gray-500 transition duration-100"
                  >
                    <IconBrandLinkedin
                      className="h-4 w-4 fill-blue-600 text-white sm:h-6 sm:w-6"
                      stroke={1.5}
                    />
                  </a>

                  <a
                    href={organizer.twitter}
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
      </div> */}
    </section>
  );
};
