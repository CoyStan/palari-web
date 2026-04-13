"use client";

import { motion } from "framer-motion";
import FadeIn from "../FadeIn";

const stages = [
  {
    name: "Creation",
    color: "bg-[#22B8B0]",
    ringColor: "ring-[#22B8B0]/20",
    description:
      "Every conversation is analyzed. Important details are extracted and stored as discrete memories.",
  },
  {
    name: "Access",
    color: "bg-[#2E2A7B]",
    ringColor: "ring-[#2E2A7B]/20",
    description:
      "When you message your Palari, relevant memories are retrieved \u2014 not all of them, just the ones that matter right now.",
  },
  {
    name: "Reinforcement",
    color: "bg-[#F46F61]",
    ringColor: "ring-[#F46F61]/20",
    description:
      "Memories that prove useful get stronger. Mention something twice and your Palari knows it matters.",
  },
  {
    name: "Decay",
    color: "bg-[#E7B83D]",
    ringColor: "ring-[#E7B83D]/20",
    description:
      "Memories that stop being relevant gradually fade \u2014 like the name of a project you finished six months ago.",
  },
  {
    name: "Compression",
    color: "bg-[#9B4FCC]",
    ringColor: "ring-[#9B4FCC]/20",
    description:
      "Old memories don\u2019t vanish. They compress into efficient summaries \u2014 your Palari \u201csleeps\u201d on them.",
  },
];

export default function MemoryLifecycle() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22B8B0]">
              Lifecycle
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              Memories that live, grow, and sleep
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4A4D73]">
              Like human memory, Palari memories aren&apos;t static. They evolve.
            </p>
          </div>
        </FadeIn>

        {/* Desktop: horizontal pipeline */}
        <div className="hidden md:block">
          <FadeIn>
            <div className="flex items-start justify-between">
              {stages.map((stage, index) => (
                <div key={stage.name} className="flex flex-1 items-start">
                  <div className="flex w-full flex-col items-center text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.12 }}
                      className={`flex h-14 w-14 items-center justify-center rounded-full ${stage.color} ring-4 ${stage.ringColor} shadow-lg`}
                    >
                      <span className="text-lg font-bold text-white">{index + 1}</span>
                    </motion.div>
                    <h3 className="mt-4 text-base font-semibold text-[#2E2A7B]">{stage.name}</h3>
                    <p className="mt-2 max-w-[180px] text-sm leading-relaxed text-[#535778]">
                      {stage.description}
                    </p>
                  </div>
                  {index < stages.length - 1 && (
                    <div className="mt-7 flex w-full max-w-[60px] shrink-0 items-center">
                      <div className="h-px w-full border-t-2 border-dashed border-[#2E2A7B]/15" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Mobile: vertical pipeline */}
        <div className="md:hidden">
          <div className="space-y-6">
            {stages.map((stage, index) => (
              <FadeIn key={stage.name}>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${stage.color} ring-4 ${stage.ringColor} shadow-lg`}
                    >
                      <span className="text-sm font-bold text-white">{index + 1}</span>
                    </div>
                    {index < stages.length - 1 && (
                      <div className="mt-2 h-full w-px border-l-2 border-dashed border-[#2E2A7B]/15" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="text-base font-semibold text-[#2E2A7B]">{stage.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#535778]">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn>
          <p className="mx-auto mt-12 max-w-3xl text-center text-base italic leading-relaxed text-[#4A4D73]">
            The result: a Palari that knows what matters now without drowning in everything that
            ever happened.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
