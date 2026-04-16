"use client";

import FadeIn from "./FadeIn";

const tiers = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    highlight: false,
    features: [
      "50 interactions per week",
      "Sofia, with full memory",
      "Slack integration",
    ],
    footnote: "An interaction is one message and one response.",
  },
  {
    name: "Pro",
    price: "$49",
    cadence: "per month",
    highlight: true,
    features: [
      "Unlimited interactions",
      "One Palari of your choice (Sofia, Leo, or Alfred)",
      "Full memory, cost controls, Google Workspace",
    ],
    footnote: null,
  },
  {
    name: "Team",
    price: "$149",
    cadence: "per month",
    highlight: false,
    features: [
      "Three Palaris working together",
      "Shared workspace and coordination inbox",
      "Admin controls and scoped trust",
    ],
    footnote: null,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              Simple pricing.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4A4D73]">
              Every plan includes full memory and your Palari&rsquo;s
              unique voice. Upgrade when you want more coworkers.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <FadeIn key={tier.name}>
              <div
                className={`flex h-full flex-col rounded-[28px] p-7 ${
                  tier.highlight
                    ? "border-2 border-[#F46F61]/30 bg-white shadow-lg shadow-[#F46F61]/10"
                    : "bg-white ring-1 ring-black/5"
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#5B5E84]">
                  {tier.name}
                </p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-4xl font-bold tracking-tight text-[#2E2A7B]">
                    {tier.price}
                  </span>
                  <span className="pb-1 text-sm text-[#5B5E84]">
                    {tier.cadence}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-3 text-sm leading-relaxed text-[#4A4D73]"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22B8B0]"
                        aria-hidden="true"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                {tier.footnote ? (
                  <p className="mt-6 text-xs italic text-[#5B5E84]/70">
                    {tier.footnote}
                  </p>
                ) : null}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mx-auto mt-10 max-w-3xl rounded-[24px] bg-white p-6 text-center ring-1 ring-black/5 md:p-8">
            <p className="text-sm leading-relaxed text-[#4A4D73]">
              We profit from subscription, not from how much compute you
              use. Every efficiency we find goes directly to making your
              Palari faster and cheaper. Our incentive is to save you
              money, not spend it.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 text-center">
            <a
              href="/philosophy#early-access"
              className="inline-flex items-center justify-center rounded-2xl bg-[#F46F61] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#F46F61]/25 transition hover:-translate-y-0.5"
            >
              Get early access
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
