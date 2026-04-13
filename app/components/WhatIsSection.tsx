import FadeIn from "./FadeIn";

const cards = [
  {
    accent: "bg-[#F46F61]",
    title: "Not a chatbot",
    text: "You don\u2019t paste problems and get answers. Your Palari reads your documents, remembers what changed last time, and proposes updates that build on your shared history. You approve with one tap.",
  },
  {
    accent: "bg-[#22B8B0]",
    title: "Not an agent",
    text: "No terminal. No config files. No pipelines. You talk to your Palari in Slack the way you\u2019d talk to any teammate. Sofia, Leo, or Alfred\u2014they each handle the rest in their own way.",
  },
  {
    accent: "bg-[#E7B83D]",
    title: "A Palari who grows with you",
    text: "Every Palari carries memories that matter\u2014your preferences, your history, the way you like things done. The longer you work together, the more they feel like someone who truly knows you.",
  },
  {
    accent: "bg-[#9B4FCC]",
    title: "Yours, not ours",
    text: "Your Palari\u2019s identity lives in a portable database you own. Switch models, export your data, self-host the server. Lock-in through value, not walls.",
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
              A Palari is a new kind of colleague
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
