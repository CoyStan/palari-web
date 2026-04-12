"use client";

import { motion } from "framer-motion";
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
    subtitle: "One Palari. Enough to feel what memory changes.",
    features: ["1 Palari", "7-day memory", "50 interactions per week"],
    cta: "Start free",
  },
  {
    name: "Pro",
    price: "$49",
    subtitle: "Three Palaris with full memory. They carry who you are.",
    features: [
      "3 Palaris",
      "Unlimited memory",
      "All integrations (Google Docs, Sheets, Drive)",
      "Standup reports",
    ],
    cta: "Get started",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$149",
    subtitle: "Unlimited Palaris. Shared team memory. Weekly briefings from Alfred.",
    features: [
      "Unlimited Palaris",
      "Shared team memory",
      "Weekly Alfred reports",
      "Priority support",
      "Custom personas",
    ],
    cta: "Contact us",
  },
];

export default function PricingSection() {
  return (
    <section
      className="relative bg-gradient-to-b from-[#F7F5F2] to-[#F2F0ED] py-16 md:py-20"
      id="pricing"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#2E2A7B] md:text-4xl">
              Grow your Palari team
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-[#4A4D73]">
              Like hiring, not subscribing.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 flex gap-6 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">
          {tiers.map((tier) => (
            <FadeIn key={tier.name}>
              <motion.article
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className={`relative min-w-[270px] rounded-[28px] bg-white p-7 shadow-sm ${
                  tier.highlighted
                    ? "ring-2 ring-[#22B8B0] shadow-2xl shadow-[#2E2A7B]/10 md:scale-105"
                    : "ring-1 ring-black/5"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#22B8B0] px-3 py-1 text-xs font-semibold text-white">
                    Popular
                  </span>
                )}

                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#5B5E84]">
                  {tier.name}
                </p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-5xl font-bold tracking-tight text-[#2E2A7B]">
                    {tier.price}
                  </span>
                  <span className="pb-1 text-sm text-[#5B5E84]">/month</span>
                </div>
                <p className="mt-2 text-base leading-relaxed text-[#535778]">
                  {tier.subtitle}
                </p>

                <ul className="mt-5 space-y-3 text-base text-[#535778]">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 leading-relaxed">
                      <span className="mt-0.5 text-[#22B8B0]">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#early-access"
                  className={`mt-7 inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition-colors ${
                    tier.highlighted
                      ? "bg-[#F46F61] text-white shadow-lg shadow-[#F46F61]/25"
                      : "border border-[#2E2A7B]/10 text-[#2E2A7B] hover:bg-[#EEEAF8]"
                  }`}
                >
                  {tier.cta}
                </a>
              </motion.article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-relaxed text-[#5B5E84]">
            All plans include the Vibes Layer and Palari memory. Your Palaris never act without your permission.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
