export const Hero = () => {
  return (
    <>
      <div className="relative flex h-screen items-center justify-center bg-gray-950">
        <div className="absolute left-0 right-0 top-0 m-auto h-[200px] max-w-4xl bg-gradient-to-t from-purple-700 to-gray-950 blur-[160px]"></div>
        <div className="lg:6xl text-center font-orbitron text-6xl text-white sm:text-7xl md:text-8xl xl:text-9xl">
          Hack SRM
        </div>
      </div>
    </>
  );
};
