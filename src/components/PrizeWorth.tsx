const Images = [
  {
    key: "first",
    img: "https://media.discordapp.net/attachments/1026519493100453942/1107723257274175618/new1st.png?width=794&height=1050",
    alt: "FIRST",
  },
  {
    key: "second",
    img: "https://media.discordapp.net/attachments/1026519493100453942/1107723257538412755/new2nd.png?width=802&height=1050",
    alt: "SECOND",
  },
];

export const PrizeWorthSection = () => {
  return (
    <section
      id="Prizes"
      className="my-0 min-h-screen justify-center bg-gray-900 px-6 py-10 sm:px-20 sm:py-24"
    >
      <div className="mb-6 flex flex-wrap items-center justify-center space-x-3 pb-10 text-center text-3xl font-semibold leading-relaxed text-indigo-200 sm:text-5xl">
        <div>Prizes Worth more than</div>
        <div className="rounded-2xl bg-indigo-500 px-3 py-1.5 text-white">
          ₹40 LAKHS!
        </div>
        {/* <div className="">Rupees</div> */}
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
