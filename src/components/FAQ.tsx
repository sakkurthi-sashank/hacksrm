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

export function FAQ() {
  return (
    <div className="relative min-h-screen bg-gray-950 py-4">
      <div className="background-animation"></div>
      <div className="mx-auto px-4 md:px-10 ">
        <div className="mb-20 text-4xl font-bold text-white">
          Frequently Asked Questions
        </div>
        <div className="mx-auto flex max-w-2xl flex-col space-y-3 rounded-md">
          {FAQData.map((faq) => {
            return <QuestionsAndAnswers key={faq.question} faq={faq} />;
          })}
        </div>
      </div>
    </div>
  );
}

const QuestionsAndAnswers = ({
  faq,
}: {
  faq: { question: string; answer: string };
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg bg-white px-4" key={faq.question}>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex cursor-pointer justify-between  gap-2 py-3 text-gray-800 hover:text-cyan-500 active:text-cyan-500"
      >
        <span className="md:text-md font-normal antialiased transition duration-100">
          {faq.question}
        </span>
        <span>
          {isOpen ? <IconChevronUp size={24} /> : <IconChevronDown size={24} />}
        </span>
      </div>
      {isOpen ? (
        <p className="mb-4 font-normal text-gray-600 antialiased">
          {faq.answer}
        </p>
      ) : null}
    </div>
  );
};
