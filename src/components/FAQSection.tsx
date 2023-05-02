import { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

const FAQData = [
  {
    question: "What is a hackathon ?",
    answer:
      "A hackathon is a programming competition in which competitors use technology to build innovative projects within a fixed time duration. There will be opportunities to win cool prizes, learn from our key-note speakers, and network with our sponsors.",
  },
  {
    question: "Who can participate in HackSRM ?",
    answer:
      "Anyone! Whether you are a total beginner or a tech wizard, it doesn’t matter. We encourage anyone who is interested in learning more about Hackathons, programming, and the tech industry to join HackSRM!",
  },
  {
    question: "Do I have to know how to code to join ?",
    answer:
      "Nope! You can learn along the way or team up with experienced programmers. Skills such as designing, business planning, and etc are all going to impact the projects in various ways!",
  },
  {
    question: "How much does it cost to participate in HackSRM ??",
    answer:
      "Zero. Zip. Zilch. Nada. Nothing. Admission to HackSRM is completely free, thanks to our sponsors!",
  },
  {
    question: "Is it a team event ?",
    answer:
      "Yes, you can form teams of up to 4 people. If you don't have a team, don't worry! We will have a few workshops and talks to help you get started. You can also join our Discord server to find teammates before the event!",
  },
  {
    question: "Can I apply individually ?",
    answer: "Yes, you can also form a team after you get selected.",
  },

  {
    question: "Is there a code of conduct ?",
    answer:
      "Attendees must abide by our Code of Conduct. We want to respect each other and keep HackSRM a safe environment for all participants.",
  },
  {
    question: "What is the venue of the hackathon ?",
    answer:
      "HackSRM will be hosted on May 19th - 20th 2023. All you need is to create a Discord account to communicate with our HackSRM community.",
  },
];

export function FAQSection() {
  return (
    <section id="FAQs" className="min-h-screen py-4 pt-20">
      <div className="mb-20 text-center text-4xl font-semibold text-indigo-600 sm:text-5xl">
        Frequently Asked Questions
      </div>
      <div className="mx-auto px-3">
        <div className="mx-auto flex max-w-2xl flex-col space-y-3 rounded-md">
          {FAQData.map((faq) => {
            return (
              <div key={faq.question} className="z-10">
                <QuestionsAndAnswers key={faq.question} faq={faq} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const QuestionsAndAnswers = ({
  faq,
}: {
  faq: { question: string; answer: string };
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="rounded-md border border-gray-300 px-4 shadow"
      key={faq.question}
    >
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex cursor-pointer justify-between gap-2 py-3 text-gray-800 hover:text-indigo-500 active:text-indigo-500"
      >
        <span className="text-base font-normal antialiased transition duration-100">
          {faq.question}
        </span>
        <span>
          {isOpen ? <IconChevronUp size={24} /> : <IconChevronDown size={24} />}
        </span>
      </div>
      {isOpen ? (
        <p className="mb-4 py-2 font-normal text-gray-700 antialiased">
          {faq.answer}
        </p>
      ) : null}
    </div>
  );
};
