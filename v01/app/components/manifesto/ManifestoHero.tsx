"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "100%", label: "your data" },
  { value: "0", label: "lock-in" },
  { value: "MIT", label: "open source core" },
];

export default function ManifestoHero() {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-gradient-to-br from-[#EEEAF8] via-white to-[#F0F9F8]">
      <div
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#F46F61]/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#9B4FCC]/15 blur-3xl"
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
            The Palari Manifesto
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-4xl font-semibold tracking-tight text-[#2E2A7B] md:text-5xl lg:text-6xl"
          >
            Not a chatbot. Not an agent. A persistent AI coworker.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-8 text-[#4A4D73]"
          >
            A Palari is defined by its memories, not by its model. By its personality, not by its
            platform. By its relationship with you, not by the server it runs on. The identity is in
            the data, not the infrastructure.
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

        {/* Right: Three layers visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative z-10"
        >
          <div className="rounded-[32px] border border-black/5 bg-white p-6 shadow-2xl shadow-[#2E2A7B]/10">
            {/* Communication Layer (outermost) */}
            <div className="rounded-[24px] border-2 border-[#22B8B0]/20 bg-[#F0F9F8] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#22B8B0]">
                Communication Layer
              </p>
              <p className="mt-1 text-sm text-[#535778]">Slack today. Anything tomorrow.</p>

              {/* Compute Layer (middle) */}
              <div className="mt-4 rounded-[20px] border-2 border-[#9B4FCC]/20 bg-[#F5F0FF] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9B4FCC]">
                  Compute Layer
                </p>
                <p className="mt-1 text-sm text-[#535778]">Model-agnostic. Claude, Codex, anything.</p>

                {/* Identity Layer (innermost) */}
                <div className="mt-4 rounded-[16px] bg-[#2E2A7B] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                    Identity Layer
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">Your Palari</p>
                  <p className="mt-1 text-sm text-white/60">
                    Memories, personality, relationships. Portable SQLite. Yours forever.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
