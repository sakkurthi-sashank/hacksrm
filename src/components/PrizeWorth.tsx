export const PrizeWorthSection = () => {
  return (
    <section
      id="Prizes"
      className="my-0 flex min-h-screen flex-col justify-between bg-gray-50 px-6 py-10 sm:px-20 sm:py-24"
    >
      <div className="mb-6 text-center text-4xl font-semibold text-indigo-600 sm:text-5xl">
        Prizes Worth more than 5 Lakhs 🎉
      </div>
      <div className="flex flex-wrap justify-evenly gap-10 text-4xl font-semibold text-indigo-600 sm:text-5xl">
        <div className="flex flex-col items-center justify-center space-y-8">
          <span className="text-4xl font-semibold text-indigo-600 sm:text-6xl">
            🥇
          </span>
          <span className="text-4xl font-semibold text-indigo-600 blur-md sm:text-6xl">
            000000
          </span>
        </div>
        <div className="flex flex-col items-center justify-center space-y-8">
          <span className="text-4xl font-semibold text-indigo-600 sm:text-6xl">
            🥈
          </span>
          <span className="text-4xl font-semibold text-indigo-600 blur-md sm:text-6xl">
            000000
          </span>
        </div>
        <div className="flex flex-col items-center justify-center space-y-8">
          <span className="text-4xl font-semibold text-indigo-600 sm:text-6xl">
            🥉
          </span>
          <span className="text-4xl font-semibold text-indigo-600 blur-md sm:text-6xl">
            000000
          </span>
        </div>
      </div>
      <div className="mb-6 text-center text-2xl font-semibold text-gray-400 sm:text-3xl">
        Will Be Announced Soon
      </div>
    </section>
  );
};
