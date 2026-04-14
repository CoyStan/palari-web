import FadeIn from "../FadeIn";

const principles = [
  {
    title: "Honesty",
    description:
      "Your Palari tells you what it can and can\u2019t do. No hallucination theater. No pretending to be human. Transparent about every limitation.",
    accent: "bg-[#22B8B0]",
  },
  {
    title: "Boundaries",
    description:
      "Palaris never act without your permission. They propose, then wait. Professional boundaries are built into the architecture, not bolted on as compliance rules.",
    accent: "bg-[#2E2A7B]",
  },
  {
    title: "Data ownership",
    description:
      "Your data belongs to you. Export it, delete it, or self-host anytime. We never train on your conversations. Your Palari\u2019s memories are yours alone.",
    accent: "bg-[#F46F61]",
  },
  {
    title: "No dark patterns",
    description:
      "No engagement tricks. No artificial scarcity. No manufactured urgency. No guilt mechanics. No hidden costs. No opaque consumption.",
    accent: "bg-[#9B4FCC]",
  },
];

export default function EthicsSection() {
  return (
    <section className="bg-gradient-to-b from-[#EEEAF8]/30 to-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E7B83D]">
            Principles
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Built on principles, not dark patterns
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            These aren&apos;t guardrails bolted onto a product. They&apos;re architecture decisions
            that shape everything we build.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {principles.map((p) => (
              <article
                key={p.title}
                className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <div className="flex items-center gap-3">
                  <div className={`h-3 w-3 rounded-full ${p.accent}`} />
                  <h3 className="text-lg font-semibold text-[#2E2A7B]">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#535778]">{p.description}</p>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
