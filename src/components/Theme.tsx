import {
  IconActivity,
  IconBooks,
  IconBuildingBank,
  IconGps,
  IconRobot,
  IconShieldCheck,
} from "@tabler/icons-react";

const themesData = [
  {
    id: 1,
    name: "Health Care",
    description:
      "Code against health problems, aim for real-life challenges and draw solutions that can drive social impact",
  },
  {
    id: 2,
    name: "Education",
    description:
      "Find new ways for the acquisition of the knowledge, skills. Showcase what could be the future of education. ",
  },
  {
    id: 3,
    name: "Women's Safety",
    description:
      "The day when a woman can freely walk on the roads at night is the day of real Independence - Mahatma Gandhi.",
  },
  {
    id: 4,
    name: "Fin-Tech",
    description:
      "Build solutions that can help people manage their finances better, and help them make better financial decisions.",
  },
  {
    id: 5,
    name: "Travel & Tourism",
    description:
      "Promote sustainable tourism, promote local culture and products, and build a better future for everyone.",
  },
  {
    id: 6,
    name: "Open Innovation",
    description:
      "An open-ended theme where the only restriction is your imagination. Build the ideas that you believe in and make a difference.",
  },
];

export const Themes = () => {
  return (
    <section
      id="Themes"
      className="min-h-screen w-full bg-gray-100 px-0 py-16 md:px-10"
    >
      <div className="mb-20 text-center text-4xl font-semibold text-indigo-600 sm:text-5xl">
        Themes / Tracks
      </div>

      {/* Beautifully theme in tailwind css */}
      <div className="grid grid-cols-1 gap-10 px-4 md:grid-cols-2 lg:grid-cols-3">
        {themesData.map((theme) => (
          <div
            key={theme.id}
            className="z-10 flex flex-col items-center justify-evenly space-y-4 rounded-lg border bg-white p-8 shadow-[10px_10px_0px_0px_rgb(0,0,0)] transition duration-200 hover:shadow"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500">
              {theme.id === 1 && <IconActivity size={32} color="white" />}
              {theme.id === 2 && <IconBooks size={32} color="white" />}
              {theme.id === 3 && <IconShieldCheck size={32} color="white" />}
              {theme.id === 4 && <IconBuildingBank size={32} color="white" />}
              {theme.id === 5 && <IconGps size={32} color="white" />}
              {theme.id === 6 && <IconRobot size={32} color="white" />}
            </div>
            <div className="text-center text-2xl font-semibold text-gray-800">
              {theme.name}
            </div>
            <div className="text-center text-gray-700">{theme.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
