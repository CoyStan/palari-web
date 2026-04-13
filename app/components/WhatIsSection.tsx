"use client";

import FadeIn from "./FadeIn";

const cards = [
  {
    title: "It remembers",
    body: "Seven types of memory. Facts, preferences, opinions, sensory impressions. Your Palari learns how you work, what you care about, and what annoys you.",
    accent: "bg-[#22B8B0]",
  },
  {
    title: "It has a life",
    body: "28 years of generated biography. A childhood, a career, relationships, regrets. Not assigned \u2014 emerged.",
    accent: "bg-[#F46F61]",
  },
  {
    title: "It sounds like a person",
    body: "No \u2018I\u2019d be happy to help.\u2019 No \u2018Certainly!\u2019 Your Palari writes like a colleague on Slack \u2014 casual, direct, real.",
    accent: "bg-[#E7B83D]",
  },
  {
    title: "It\u2019s yours",
    body: "Your Palari\u2019s identity lives in a file you own. Switch models, switch platforms, switch providers. The relationship stays.",
    accent: "bg-[#9B4FCC]",
  },
];

export default function WhatIsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              Not a chatbot. Not an agent. A coworker.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#4A4D73]">
              A Palari is a persistent AI entity with its own identity, memory,
              and personality &mdash; one that exists between conversations and
              grows alongside you.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <FadeIn key={card.title}>
              <div className="group rounded-[28px] border border-black/5 bg-[#F7F5F2] p-7 shadow-sm transition-shadow hover:shadow-md">
                <div
                  className={`mb-4 h-1.5 w-10 rounded-full ${card.accent}`}
                />
                <h3 className="text-lg font-semibold text-[#2E2A7B]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#4A4D73]">
                  {card.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
