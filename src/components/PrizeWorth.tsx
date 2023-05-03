import { ThreeJsBackground } from "./ThreeJsBackground";

export const PrizeWorthSection = () => {
  return (
    <section
      id="Prizes"
      className="my-0 flex min-h-screen flex-col justify-center bg-gray-900 px-6 py-10 sm:px-20 sm:py-24"
    >
      <ThreeJsBackground />
      <div className="mb-6 text-center text-3xl leading-relaxed font-semibold text-indigo-500 sm:text-5xl">
        Prizes Worth more than 4 Lakhs 🎉
      </div>
      <div className="mb-6 text-center text-2xl font-semibold text-gray-300 sm:text-3xl">
        Will Be Announced Soon
      </div>
      <div></div>
    </section>
  );
};
