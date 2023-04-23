import { IconCheck } from "@tabler/icons-react";

const plans = [
  {
    name: "2'nd Place",
    price: 50000,
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
    name: "1'st Place",

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
    price: 30000,
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

export const PrizeWorthSection = () => {
  return (
    <section className="min-h-screen bg-slate-950 px-3 pb-10 text-gray-300 md:pb-0">
      <div className="mb-10 text-center font-ibm_plex_mono text-4xl font-semibold text-white">
        Prizes Worth
      </div>
      <div className="flex flex-wrap items-center justify-around">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative mt-6 flex min-h-[500px] min-w-[330px] max-w-sm flex-1 flex-col items-stretch rounded-xl py-2 ${
              plan.isMostPop
                ? "border-2 border-blue-400 bg-blue-700 bg-opacity-10"
                : "border border-gray-800"
            }`}
          >
            <div className="flex flex-1 flex-col rounded-xl">
              <div className="space-y-4 p-10">
                <span className="text-xl font-medium text-gray-200">
                  {plan.name}
                </span>
                <div className="text-3xl font-semibold text-blue-400">
                  ₹ {plan.price}
                  <span className="text-xl font-normal">/-</span>
                </div>
              </div>
              <ul className="space-y-3 px-8 pb-4 font-ibm_plex_mono">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-5">
                    <IconCheck size={20} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
