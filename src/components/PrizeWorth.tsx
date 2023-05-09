const Images = [
  {
    key: "second",
    img: "https://cdn.discordapp.com/attachments/1046339552027082803/1105583928863117412/2nd.png",
    alt: "SECOND",
  },
  {
    key: "first",
    img: "https://cdn.discordapp.com/attachments/1046339552027082803/1105583928582086726/1st.png",
    alt: "FIRST",
  },
  {
    key: "third",
    img: "https://cdn.discordapp.com/attachments/1046339552027082803/1105583929219620864/3rd.png",
    alt: "THIRD",
  },
];

export const PrizeWorthSection = () => {
  return (
    <section
      id="Prizes"
      className="my-0 min-h-screen justify-center bg-gray-900 px-6 py-10 sm:px-20 sm:py-24"
    >
      <div className="mb-6 flex items-center justify-center space-x-3 pb-10 text-center text-3xl font-semibold leading-relaxed text-indigo-200 sm:text-5xl">
        <div>Prizes Worth more than</div>
        <div className="rounded-2xl bg-indigo-500 px-3 py-1.5 text-white">
          40 Lakhs
        </div>
        <div className="">Rupees</div>
      </div>
      <div className="flex w-full flex-wrap justify-center gap-8">
        {Images.map((image) => (
          <div className="" key={image.key}>
            <img src={image.img} alt={image.alt} className="w-80" />
          </div>
        ))}
      </div>
      /<div></div>
    </section>
  );
};
