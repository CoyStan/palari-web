"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "<1,300", label: "tokens per message" },
  { value: "~$0.001", label: "memory cost per message" },
  { value: "<50MB", label: "for 100 Palaris" },
];

export default function MemoryHero() {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-gradient-to-br from-[#EEEAF8] via-white to-[#F7F5F2]">
      <div
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#22B8B0]/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#9B4FCC]/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:px-10 lg:py-20">
        {/* Left column */}
        <div className="relative z-10 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex w-fit items-center rounded-full border border-[#2E2A7B]/10 bg-white/80 px-4 py-2 text-sm font-medium text-[#2E2A7B] shadow-sm"
          >
            Memory Architecture
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-4xl font-semibold tracking-tight text-[#2E2A7B] md:text-5xl lg:text-6xl"
          >
            Every Palari carries who you are
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-8 text-[#4A4D73]"
          >
            Most AI treats memory like a filing cabinet&mdash;store a fact, retrieve it later.
            Palari treats memory like a living system. Memories reinforce, decay, compress, and
            connect&mdash;just like yours do.
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

        {/* Right column — Two-Brain visual teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative z-10"
        >
          <div className="rounded-[32px] border border-black/5 bg-white p-6 shadow-2xl shadow-[#2E2A7B]/10">
            <div className="relative flex flex-col gap-4">
              {/* Analytical Brain card */}
              <div className="rounded-[20px] bg-[#2E2A7B] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                  The Analytical Brain
                </p>
                <p className="mt-2 text-lg font-semibold text-white">Capability</p>
                <p className="mt-1 text-sm leading-relaxed text-white/60">
                  Reads files, analyzes data, edits documents. Knows where things are and how you
                  like them done.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Working", "Preferences", "Relationships", "Context"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Vibes Layer card */}
              <div className="rounded-[20px] border-2 border-[#F46F61]/20 bg-[#FFF5F0] p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F46F61]/60">
                    The Vibes Layer
                  </p>
                  <span className="rounded-full bg-[#F46F61]/10 px-3 py-1 text-xs font-semibold text-[#F46F61]">
                    $0.0006 / msg
                  </span>
                </div>
                <p className="mt-2 text-lg font-semibold text-[#2E2A7B]">Personality</p>
                <p className="mt-1 text-sm leading-relaxed text-[#535778]">
                  Rewrites every response to sound like someone you know. Life history, sensory
                  fragments, and personality.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Life Events", "Sensory", "Opinions", "Identity"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#F46F61]/10 px-3 py-1 text-xs font-medium text-[#F46F61]/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
