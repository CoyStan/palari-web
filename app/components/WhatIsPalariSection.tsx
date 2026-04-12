import FadeIn from "./FadeIn";

const cards = [
  {
    title: "Not a chatbot",
    text: "You don't paste problems and get answers. Your Palari reads your project, proposes changes, and shows you what it did. You approve with one tap.",
    color: "bg-[#E8FBF5]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#2EA88A]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 18l-3 3V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6Z" />
      </svg>
    ),
  },
  {
    title: "Not an agent",
    text: "No terminal. No config files. No pipelines. You talk to Sofia in Slack the way you'd talk to any teammate. She handles the technical parts.",
    color: "bg-[#FDECEC]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#DD6464]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 17 9 12 4 7" />
        <path d="M12 19h8" />
        <path d="m13 7 6 10" />
      </svg>
    ),
  },
  {
    title: "A colleague who grows",
    text: "Palaris have personalities, opinions, and memory. Sofia remembers your project, your preferences, and what she worked on yesterday. The longer you work together, the more she feels like your teammate.",
    color: "bg-[#EAF0FF]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#3B5EE8]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
      </svg>
    ),
  },
];

export default function WhatIsPalariSection() {
  return (
    <FadeIn>
      <section className="py-24 md:py-32">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] md:text-4xl">
              A new kind of colleague
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Not a chatbot. Not an agent. A teammate.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full ${card.color}`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1B2A4A]">{card.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-gray-600">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
