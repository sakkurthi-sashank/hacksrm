import { IconCheck } from "@tabler/icons-react";

const plans = [
  {
    name: "2'nd Place",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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

export function Prizes() {
  return (
    <section className="min-h-screen bg-slate-950 px-3 pb-10 md:pb-0">
      <div className="relative text-gray-300">
        <div className="absolute bottom-[50%] left-0 right-0 top-[50%] z-0 m-auto h-[200px] max-w-4xl bg-gradient-to-b from-blue-700 to-gray-950 blur-[160px]"></div>
        <div className="mb-10 text-center font-orbitron text-4xl font-semibold text-white">
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
                  <p className="text-gray-400">{plan.desc}</p>
                </div>
                <ul className="space-y-3 px-8 pb-4">
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
      </div>
    </section>
  );
}
