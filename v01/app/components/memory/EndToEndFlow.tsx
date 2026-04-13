"use client";

import { motion } from "framer-motion";
import FadeIn from "../FadeIn";

const steps = [
  {
    number: 1,
    title: "Memory Loading",
    description:
      "Sofia already knows where reports live, what format you prefer, and that you asked about this last week.",
    accent: "bg-[#22B8B0]",
    accentLight: "bg-[#22B8B0]/10",
    textAccent: "text-[#22B8B0]",
  },
  {
    number: 2,
    title: "The Analytical Brain Works",
    description:
      "Finds the report, locates box 3.5, notices the Q4 numbers look stale.",
    accent: "bg-[#2E2A7B]",
    accentLight: "bg-[#2E2A7B]/10",
    textAccent: "text-[#2E2A7B]",
  },
  {
    number: 3,
    title: "The Vibes Layer Rewrites",
    description:
      "Rewrites the response in Sofia\u2019s voice. Casual, direct, lowercase. The flag becomes a heads-up.",
    accent: "bg-[#F46F61]",
    accentLight: "bg-[#F46F61]/10",
    textAccent: "text-[#F46F61]",
  },
  {
    number: 4,
    title: "Background Extraction",
    description:
      "Quietly stores what happened. Next time, Sofia remembers.",
    accent: "bg-[#9B4FCC]",
    accentLight: "bg-[#9B4FCC]/10",
    textAccent: "text-[#9B4FCC]",
  },
];

const stats = [
  { value: "~$0.003", label: "total cost" },
  { value: "~5 seconds", label: "end to end" },
  { value: "3\u20134 new memories", label: "stored for next time" },
];

export default function EndToEndFlow() {
  return (
    <section className="bg-gradient-to-b from-[#F7F5F2] to-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9B4FCC]">
            End to end
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            One message, start to finish
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            What happens when you say: &ldquo;Check the latest report and summarize box
            3.5&rdquo;
          </p>
        </FadeIn>

        {/* Pipeline */}
        <div className="relative mt-12">
          {/* Vertical connector line */}
          <div
            className="absolute left-5 top-0 hidden h-full w-px border-l-2 border-dashed border-[#2E2A7B]/10 md:block"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex items-start gap-5"
              >
                {/* Number circle */}
                <div
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${step.accent}`}
                >
                  {step.number}
                </div>

                {/* Card */}
                <div
                  className={`flex-1 rounded-[20px] p-5 ring-1 ring-black/5 ${step.accentLight}`}
                >
                  <h3 className={`text-lg font-semibold ${step.textAccent}`}>
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#535778]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <FadeIn>
          <div className="mt-12 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[20px] bg-white p-5 text-center shadow-sm ring-1 ring-black/5"
              >
                <div className="text-xl font-bold text-[#2E2A7B]">{stat.value}</div>
                <div className="mt-1 text-sm text-[#5B5E84]">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
