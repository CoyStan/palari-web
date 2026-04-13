"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "28 years", label: "of life experience" },
  { value: "~$0.80", label: "to generate a life" },
  { value: "5\u201310 min", label: "generation time" },
];

const timeline = [
  { age: "Age 5", event: "First day of school. A teacher who smelled like coffee and chalk." },
  { age: "Age 14", event: "Learned to code on a hand-me-down laptop. Stayed up until 3am." },
  { age: "Age 22", event: "First real job. The imposter syndrome was overwhelming." },
  { age: "Age 26", event: "Left the startup. Learned that good enough ships." },
];

export default function LifeHero() {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-gradient-to-br from-[#F0F9F8] via-white to-[#EEEAF8]">
      <div
        className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#22B8B0]/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:px-10 lg:py-20">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex w-fit items-center rounded-full border border-[#2E2A7B]/10 bg-white/80 px-4 py-2 text-sm font-medium text-[#2E2A7B] shadow-sm"
          >
            Life Generation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-4xl font-semibold tracking-tight text-[#2E2A7B] md:text-5xl lg:text-6xl"
          >
            Each Palari has lived 28 years before they meet you
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 grid grid-cols-3 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-black/5 bg-white/80 p-4 shadow-sm backdrop-blur"
              >
                <div className="text-2xl font-semibold text-[#2E2A7B]">{stat.value}</div>
                <div className="mt-1 text-sm text-[#5B5E84]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Timeline card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative z-10"
        >
          <div className="rounded-[32px] border border-black/5 bg-white p-6 shadow-2xl shadow-[#2E2A7B]/10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#9B4FCC]">
              Sofia&apos;s Timeline (excerpt)
            </p>
            <div className="relative space-y-4">
              <div
                className="absolute left-[3px] top-2 h-[calc(100%-16px)] w-px bg-[#2E2A7B]/10"
                aria-hidden="true"
              />
              {timeline.map((entry) => (
                <div key={entry.age} className="flex items-start gap-4 pl-0">
                  <div className="relative z-10 mt-1.5 h-[7px] w-[7px] shrink-0 rounded-full bg-[#9B4FCC]" />
                  <div>
                    <p className="text-xs font-semibold text-[#2E2A7B]">{entry.age}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-[#535778]">{entry.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
