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
    question: "How do I get started?",
    answer:
      "Zero. Zip. Zilch. Nada. Nothing. Admission to HackSRM is completely free, thanks to our sponsors!",
  },
  {
    question: "What if I don't have a team?",
    answer:
      "No worries! We will have a team formation session at the beginning of the event. You can also join our Discord server to find teammates before the event!",
  },
  {
    question: "What if I don't have any ideas?",
    answer:
      "We will have a few workshops and talks to help you get started. You can also join our Discord server to find teammates before the event!",
  },
  {
    question: "What if I don't have any experience?",
    answer:
      "That's okay! We will have a few workshops and talks to help you get started.",
  },
  {
    question: "What if I don't have any hardware?",
    answer:
      "That's okay! We will have a few workshops and talks to help you get started.",
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
        <span className="text-lg font-normal antialiased transition duration-100">
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
