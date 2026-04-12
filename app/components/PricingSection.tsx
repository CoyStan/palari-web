import FadeIn from "./FadeIn";

type PricingTier = {
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const tiers: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    subtitle: "Try it out",
    features: [
      "1 Palari",
      "Basic memory",
      "50 interactions per week",
      "Slack-native behaviors",
    ],
    cta: "Start Free",
  },
  {
    name: "Pro",
    price: "$49",
    subtitle: "Your AI team",
    features: [
      "3 Palaris",
      "Full memory (they remember everything)",
      "All integrations (Google Docs, Sheets, Drive)",
      "Propose and approve workflow",
      "Standup reports",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$149",
    subtitle: "For real teams",
    features: [
      "Unlimited Palaris",
      "Shared team memory",
      "Weekly Alfred reports",
      "Priority support",
      "Custom personas",
    ],
    cta: "Contact Us",
  },
];

export default function PricingSection() {
  return (
    <FadeIn>
      <section className="scroll-mt-28 py-24 md:py-32" id="pricing">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] md:text-4xl">
              Simple, honest pricing
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Like hiring a teammate, not buying software.
            </p>
          </div>

          <div className="mt-14 flex gap-5 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className={`relative min-w-[280px] rounded-2xl border bg-white p-8 shadow-sm transition-transform hover:scale-[1.02] ${
                  tier.highlighted
                    ? "border-2 border-[#3ECDA5] md:scale-105"
                    : "border border-gray-200"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#3ECDA5] px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}

                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gray-500">{tier.name}</p>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-5xl font-bold tracking-tight text-[#1B2A4A]">{tier.price}</span>
                  <span className="pb-1 text-sm text-gray-500">/month</span>
                </div>
                <p className="mt-2 text-base text-gray-600">{tier.subtitle}</p>

                <ul className="mt-6 space-y-3 text-base text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 leading-relaxed">
                      <span className="mt-0.5 text-[#3ECDA5]">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#early-access"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                    tier.highlighted
                      ? "bg-gradient-to-r from-[#3ECDA5] to-[#3B5EE8] text-white"
                      : "border border-gray-300 text-[#1B2A4A] hover:bg-gray-50"
                  }`}
                >
                  {tier.cta}
                </a>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-relaxed text-gray-500">
            All plans include the Vibes Layer. Bring your own Claude or Codex subscription, or use
            included tokens. Your Palaris never act without your permission.
          </p>
        </div>
      </section>
    </FadeIn>
  );
}
