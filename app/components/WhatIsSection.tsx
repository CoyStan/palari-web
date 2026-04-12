import FadeIn from "./FadeIn";

const cards = [
  {
    accent: "bg-[#F46F61]",
    title: "Not a chatbot",
    text: "You don\u2019t paste problems and get answers. Your Palari reads your documents, proposes changes, and shows you what it did. You approve with one tap.",
  },
  {
    accent: "bg-[#22B8B0]",
    title: "Not an agent",
    text: "No terminal. No config files. No pipelines. You talk to Sofia in Slack the way you\u2019d talk to any teammate. She handles the rest.",
  },
  {
    accent: "bg-[#E7B83D]",
    title: "A colleague who grows",
    text: "Palaris have personalities, opinions, and memory. The longer you work together, the more they feel like your teammate.",
  },
];

export default function WhatIsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22B8B0]">
              Why Palari
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              A new kind of colleague
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <FadeIn key={card.title}>
              <article className="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-black/5">
                <div className={`mb-5 h-3 w-16 rounded-full ${card.accent}`} />
                <h3 className="text-xl font-semibold text-[#2E2A7B]">{card.title}</h3>
                <p className="mt-3 leading-7 text-[#535778]">{card.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
