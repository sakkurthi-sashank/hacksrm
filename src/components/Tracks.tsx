const TopImages = [
  {
    key: "zero",
    img: "https://media.discordapp.net/attachments/1046339552027082803/1105800054834466876/polygon.png?width=844&height=1040",
    alt: "polygon",
  },

  {
    key: "fourth",
    img: "https://media.discordapp.net/attachments/1046339552027082803/1105798786242052139/Group_34.png?width=844&height=1040",
    alt: "taskade",
  },
  {
    key: "two",
    img: "https://media.discordapp.net/attachments/1046339552027082803/1105798787517128704/Group_40.png?width=844&height=1040",
    alt: "solana",
  },
  {
    key: "fifth",
    img: "https://media.discordapp.net/attachments/1046339552027082803/1105798785868767292/Group_33.png?width=844&height=1040",
    alt: "wolfram",
  },
];
const Images = [
  {
    key: "sixth",
    img: "https://media.discordapp.net/attachments/1046339552027082803/1105798785537409094/Group_32.png?width=844&height=740",
    alt: "xyz",
  },
  {
    key: "one",
    img: "https://media.discordapp.net/attachments/1046339552027082803/1105799411910590524/repl.png?width=844&height=740",
    alt: "replit",
  },

  {
    key: "third",
    img: "https://media.discordapp.net/attachments/1046339552027082803/1105798786560823296/Group_37.png?width=844&height=740",
    alt: "filecoin",
  },
];

export const Tracks = () => {
  return (
    <section
      id="Prizes"
      className="my-0 min-h-screen justify-center bg-gray-900 px-6 py-10 sm:px-20 sm:py-24"
    >
      <div className="title-gradient mb-6 pb-10 text-center text-3xl font-semibold leading-relaxed sm:text-5xl">
        Track Prizes
      </div>
      {/* <div className="flex items-center justify-center sm:mx-10 ">
        <img src="/tracks/polygon.png" alt="polygon" className="w-80" />
      </div> */}
      <div className=" flex w-full flex-wrap justify-center">
        {TopImages.map((image) => (
          <div className="mb-10 sm:mx-5" key={image.key}>
            <img src={image.img} alt={image.alt} className="w-64" />
          </div>
        ))}
        {Images.map((image) => (
          <div className="mb-10 mt-5 sm:mx-5" key={image.key}>
            <img src={image.img} alt={image.alt} className="w-80" />
          </div>
        ))}
      </div>
      /<div></div>
    </section>
  );
};
