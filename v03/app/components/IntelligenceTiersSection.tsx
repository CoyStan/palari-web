"use client";

import FadeIn from "./FadeIn";

const tiers = [
  {
    label: "Fast responses",
    width: "w-[85%]",
    color: "bg-[#22B8B0]",
    pct: "85%",
  },
  {
    label: "Careful thinking",
    width: "w-[40%]",
    color: "bg-[#9B4FCC]",
    pct: "12%",
  },
  {
    label: "Deep strategy",
    width: "w-[15%]",
    color: "bg-[#2E2A7B]",
    pct: "3%",
  },
];

export default function IntelligenceTiersSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9B4FCC]">
              Intelligence Tiers
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              The only AI that actively saves you money.
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-[#4A4D73]">
              The Planning Layer classifies every message, checks your budget,
              and picks the right model. 85% ride the cheap path. Only 3% go
              deep &mdash; and only when the task demands it.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 rounded-[28px] bg-[#F7F5F2] p-6 ring-1 ring-black/5 md:p-8">
            <div className="space-y-3">
              {tiers.map((tier) => (
                <div key={tier.label} className="flex items-center gap-4">
                  <span className="w-10 shrink-0 text-right text-sm font-bold text-[#5B5E84]">
                    {tier.pct}
                  </span>
                  <div className="flex-1">
                    <div
                      className={`${tier.width} h-6 rounded-full ${tier.color}`}
                    />
                  </div>
                  <span className="w-32 shrink-0 text-sm text-[#5B5E84]">
                    {tier.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-4 text-center ring-1 ring-black/5">
              <p className="text-2xl font-bold text-[#2E2A7B]">$5&ndash;15</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-[#5B5E84]">
                Typical API cost / month
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4 text-center ring-1 ring-black/5">
              <p className="text-2xl font-bold text-[#2E2A7B]">&lt;1&cent;</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-[#5B5E84]">
                Cost of most messages
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4 text-center ring-1 ring-black/5">
              <p className="text-2xl font-bold text-[#2E2A7B]">0</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-[#5B5E84]">
                Surprise bills
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-[#4A4D73]">
            Your Palari warns you before expensive tasks. It learns your usage
            patterns. It paces spending so the bill at the end of the month is
            never a shock.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
