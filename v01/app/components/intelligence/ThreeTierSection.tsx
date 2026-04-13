import FadeIn from "../FadeIn";

const tiers = [
  {
    name: "Thalamus",
    label: "Fast",
    pct: "85%",
    description:
      "Your Palari classifies the task, checks budget, injects relevant context, and selects the right model. For most messages, this is all that\u2019s needed. Response in under a second.",
    examples: ["Fix the typo in the readme", "What\u2019s on my calendar today?", "Send Leo the latest numbers"],
    accent: "bg-[#22B8B0]",
    accentLight: "bg-[#22B8B0]/10",
    textAccent: "text-[#22B8B0]",
  },
  {
    name: "Prefrontal Cortex",
    label: "Careful",
    pct: "12%",
    description:
      "When the task is ambiguous or multi-step, your Palari plans before executing. It restructures your request, resolves ambiguity, and sometimes asks a clarifying question.",
    examples: ["Check the latest numbers", "Refactor the auth module", "Compare these two approaches"],
    accent: "bg-[#9B4FCC]",
    accentLight: "border-2 border-[#9B4FCC]/20 bg-[#F5F0FF]",
    textAccent: "text-[#9B4FCC]",
  },
  {
    name: "Basal Ganglia",
    label: "Strategic",
    pct: "3%",
    description:
      "Rare, powerful thinking for complex challenges. Your Palari produces a comprehensive strategy, then executes step by step at a fraction of the cost.",
    examples: ["Redesign the data pipeline for real-time", "Review authentication end-to-end", "Cut 40% scope without moving the deadline"],
    accent: "bg-[#2E2A7B]",
    accentLight: "bg-[#2E2A7B]",
    textAccent: "text-white",
  },
];

export default function ThreeTierSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9B4FCC]">
            Architecture
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Three tiers of thinking
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            Inspired by how the human brain routes signals. Fast pattern-matching for the easy stuff.
            Deliberate planning for the hard stuff. Learned automaticity for everything in between.
          </p>
        </FadeIn>

        <div className="mt-12 flex flex-col gap-6">
          {tiers.map((tier) => (
            <FadeIn key={tier.name}>
              <article className={`rounded-[24px] p-6 ${tier.accentLight}`}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${
                    tier.name === "Basal Ganglia" ? "bg-white/10 text-white/70" : `${tier.accent}/10 ${tier.textAccent}`
                  }`}>
                    {tier.pct}
                  </span>
                  <h3 className={`text-lg font-semibold ${tier.name === "Basal Ganglia" ? "text-white" : "text-[#2E2A7B]"}`}>
                    {tier.label}
                  </h3>
                  <span className={`text-sm ${tier.name === "Basal Ganglia" ? "text-white/40" : "text-[#5B5E84]/40"}`}>
                    {tier.name}
                  </span>
                </div>
                <p className={`mt-3 text-sm leading-relaxed ${tier.name === "Basal Ganglia" ? "text-white/70" : "text-[#535778]"}`}>
                  {tier.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tier.examples.map((ex) => (
                    <span
                      key={ex}
                      className={`rounded-full px-3 py-1 text-xs ${
                        tier.name === "Basal Ganglia" ? "bg-white/10 text-white/60" : "bg-white/80 text-[#5B5E84] ring-1 ring-black/5"
                      }`}
                    >
                      &ldquo;{ex}&rdquo;
                    </span>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
