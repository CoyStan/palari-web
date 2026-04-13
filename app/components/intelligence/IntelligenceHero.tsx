"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "<$0.001", label: "most messages" },
  { value: "~$5/mo", label: "planning cost" },
  { value: "4\u20138x", label: "ROI on savings" },
];

export default function IntelligenceHero() {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-gradient-to-br from-[#F5F0FF] via-white to-[#F0F9F8]">
      <div
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#9B4FCC]/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#22B8B0]/15 blur-3xl"
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
            Intelligence
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-4xl font-semibold tracking-tight text-[#2E2A7B] md:text-5xl lg:text-6xl"
          >
            A coworker that thinks before it thinks
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-8 text-[#4A4D73]"
          >
            Most AI uses the same expensive model for everything. Your Palari routes each message to
            the right level of intelligence, automatically. Fast when it can be. Deep when it needs
            to be.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
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

        {/* Right: Three-tier visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative z-10"
        >
          <div className="rounded-[32px] border border-black/5 bg-white p-6 shadow-2xl shadow-[#2E2A7B]/10">
            <div className="flex flex-col gap-4">
              <div className="rounded-[20px] bg-[#22B8B0]/10 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#22B8B0]">
                    Tier 1 &mdash; Fast
                  </p>
                  <span className="rounded-full bg-[#22B8B0]/20 px-3 py-1 text-xs font-semibold text-[#22B8B0]">
                    85% of messages
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#535778]">
                  Pattern-match, retrieve context, respond. Under a second.
                </p>
              </div>

              <div className="rounded-[20px] border-2 border-[#9B4FCC]/20 bg-[#F5F0FF] p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9B4FCC]">
                    Tier 2 &mdash; Careful
                  </p>
                  <span className="rounded-full bg-[#9B4FCC]/10 px-3 py-1 text-xs font-semibold text-[#9B4FCC]">
                    12% of messages
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#535778]">
                  Decompose, restructure, clarify before executing. A few seconds.
                </p>
              </div>

              <div className="rounded-[20px] bg-[#2E2A7B] p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                    Tier 3 &mdash; Strategic
                  </p>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">
                    3% of messages
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Deep planning, multi-step strategy, architectural thinking.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
