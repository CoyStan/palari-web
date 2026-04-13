import FadeIn from "../FadeIn";

const scenarios = [
  {
    trigger: "Stop paying",
    result: "Export your database. Run the open-source server on your own infrastructure.",
  },
  {
    trigger: "Company disappears",
    result: "The core is MIT-licensed. Anyone can run the server. Your Palari lives on.",
  },
  {
    trigger: "Better model appears",
    result: "Update the engine config. Your Palari\u2019s memories, personality, and relationship stay exactly the same.",
  },
];

const accumulation = [
  { label: "Week 1", width: "w-[12%]", count: "~15 memories" },
  { label: "Month 1", width: "w-[28%]", count: "~50 memories" },
  { label: "Month 3", width: "w-[55%]", count: "~150 memories" },
  { label: "Month 6", width: "w-full", count: "~300+ memories" },
];

export default function PortabilitySection() {
  return (
    <section className="bg-gradient-to-b from-[#F7F5F2] to-[#EEEAF8]/30 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F46F61]">
            Portability
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Lock-in through value, not walls
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            Your Palari belongs to you. Not to us, not to a cloud provider, not to a model company.
            You stay because your Palari knows you, not because you can&apos;t leave.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Left: comparison */}
            <div className="space-y-4">
              <div className="rounded-[20px] bg-white/60 p-5 ring-1 ring-black/5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]/50">
                  Traditional AI
                </p>
                <ul className="mt-3 space-y-2 text-sm text-[#535778]">
                  <li>&bull; Your data lives on their servers</li>
                  <li>&bull; History disappears when you cancel</li>
                  <li>&bull; Switching means starting over</li>
                  <li>&bull; You rent access to a model</li>
                </ul>
              </div>
              <div className="rounded-[20px] bg-white p-5 shadow-sm ring-2 ring-[#22B8B0]/20">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#22B8B0]">
                  Palari
                </p>
                <ul className="mt-3 space-y-2 text-sm text-[#535778]">
                  <li>&bull; Your data lives in a portable SQLite file</li>
                  <li>&bull; Export everything, anytime</li>
                  <li>&bull; Self-host the open-source server</li>
                  <li>&bull; You own a colleague, not a subscription</li>
                </ul>
              </div>
            </div>

            {/* Right: scenarios */}
            <div className="space-y-4">
              {scenarios.map((s) => (
                <div key={s.trigger} className="rounded-[20px] bg-white p-5 shadow-sm ring-1 ring-black/5">
                  <p className="text-sm font-semibold text-[#2E2A7B]">{s.trigger}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#535778]">{s.result}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Accumulation visual */}
        <FadeIn>
          <div className="mt-12 rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-black/5">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#9B4FCC]">
              Why you&apos;ll want to stay
            </p>
            <div className="space-y-3">
              {accumulation.map((row) => (
                <div key={row.label} className="flex items-center gap-4">
                  <span className="w-20 shrink-0 text-sm font-medium text-[#5B5E84]">
                    {row.label}
                  </span>
                  <div className="flex-1">
                    <div
                      className={`${row.width} h-6 rounded-full bg-gradient-to-r from-[#22B8B0] to-[#2E2A7B]`}
                    />
                  </div>
                  <span className="w-28 shrink-0 text-right text-sm text-[#5B5E84]">
                    {row.count}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm italic text-[#5B5E84]/70">
              After six months, switching means losing someone who genuinely knows you.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
