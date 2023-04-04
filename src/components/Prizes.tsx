import { IconCheck } from "@tabler/icons-react";

export function Prizes() {
  const plans = [
    {
      name: "2'st Place",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 50000,
      isMostPop: false,
      features: [
        "6 months free 1Password family subscription.",
        "Coding Blocks 90% off discount coupons",
        "CipherSchools 85% off discount coupons",
        "Swags from Devfolio",
        "Fold Premium access*",
        "Internship and Full-time opportunities",
      ],
    },
    {
      name: "1'nd Place",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 100000,
      isMostPop: true,
      features: [
        "6 months free 1Password family subscription.",
        "Coding Blocks 90% off discount coupons",
        "CipherSchools 85% off discount coupons",
        "Swags from Devfolio",
        "Fold Premium access*",
        "Internship and Full-time opportunities",
      ],
    },

    {
      name: "3'rd Place",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 30000,
      isMostPop: false,
      features: [
        "6 months free 1Password family subscription.",
        "Coding Blocks 90% off discount coupons",
        "CipherSchools 85% off discount coupons",
        "Swags from Devfolio",
        "Fold Premium access*",
        "Internship and Full-time opportunities",
      ],
    },
  ];

  return (
    <>
      <section className="min-h-screen px-3 py-14">
        <div className="relative mx-auto  max-w-screen-2xl text-gray-300 sm:px-4 md:px-8">
          <div className="background-animation"></div>
          <div className="mb-20 text-center text-4xl font-bold text-white">
            Prizes Worth
          </div>
          <div className="mt-5 flex flex-col items-center justify-around md:mt-16 md:flex-row">
            {plans.map((item, idx) => (
              <div
                key={idx}
                className={`relative mt-6 flex min-h-[500px] max-w-sm flex-1 flex-col items-stretch rounded-xl border-2 sm:mt-0 ${
                  item.isMostPop
                    ? "border-x-2 border-cyan-400 bg-gray-900"
                    : "border-transparent"
                }`}
              >
                <div className="relative mt-6 flex flex-1 flex-col items-stretch rounded-xl sm:mt-0">
                  <div className="space-y-4 p-4 py-8 md:p-8">
                    <span className="text-xl font-medium text-gray-200">
                      {item.name}
                    </span>
                    <div className="text-3xl font-semibold text-cyan-400">
                      ₹ {item.price}{" "}
                      <span className="text-xl font-normal">/-</span>
                    </div>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                  <ul className="space-y-3 p-4 py-8 md:p-8">
                    {item.features.map((featureItem, idx) => (
                      <li key={idx} className="flex items-center gap-5">
                        <IconCheck size={20} />
                        {featureItem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
