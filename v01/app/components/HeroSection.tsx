"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "4", label: "Palaris who remember" },
  { value: "1", label: "click setup" },
  { value: "0", label: "terminal needed" },
];

const slackPreview = [
  {
    name: "Sofia",
    dot: "bg-[#F46F61]",
    text: "updated the proposal, budget is now 65k",
  },
  {
    name: "Leo",
    dot: "bg-[#22B8B0]",
    text: "expense report ready, 14 entries added",
  },
  {
    name: "Alfred",
    dot: "bg-[#E7B83D]",
    text: "Good morning, Sr. You mentioned Friday\u2019s deadline\u2014two items need your attention.",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-gradient-to-br from-[#EEEAF8] via-white to-[#F7F5F2]">
      {/* Decorative blur circles */}
      <div
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#22B8B0]/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#F46F61]/15 blur-3xl"
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
            Palari — now in early access
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-4xl font-semibold tracking-tight text-[#2E2A7B] md:text-5xl lg:text-6xl"
          >
            Some colleagues remember everything
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-8 text-[#4A4D73]"
          >
            A Palari shows up every morning carrying the memory of yesterday. Your last
            conversation, your preferences, the context that matters. They don&apos;t just
            respond&mdash;they remember who you are.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#meet-team"
              className="rounded-2xl bg-[#F46F61] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#F46F61]/25 transition hover:-translate-y-0.5"
            >
              Meet the Palaris
            </a>
            <a
              href="#how-it-works"
              className="rounded-2xl border border-[#2E2A7B]/10 bg-white px-6 py-3 text-base font-semibold text-[#2E2A7B] shadow-sm transition hover:bg-[#EEEAF8]"
            >
              See how it works
            </a>
          </motion.div>

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

        {/* Right column — nested dark card with Slack preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative z-10"
        >
          <div className="rounded-[32px] border border-black/5 bg-white p-4 shadow-2xl shadow-[#2E2A7B]/10">
            <div className="rounded-[24px] bg-[#2E2A7B] p-5">
              {/* Header */}
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-white/70">Palari HQ</div>
                  <div className="text-xl font-semibold text-white">#operations</div>
                </div>
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#F46F61]" />
                  <span className="h-3 w-3 rounded-full bg-[#E7B83D]" />
                  <span className="h-3 w-3 rounded-full bg-[#22B8B0]" />
                </div>
              </div>

              {/* Messages panel */}
              <div className="rounded-[20px] bg-white p-5">
                <div className="mb-3 inline-flex rounded-full bg-[#EEEAF8] px-3 py-1 text-xs font-semibold text-[#2E2A7B]">
                  Active now
                </div>
                <div className="space-y-4">
                  {slackPreview.map((msg) => (
                    <div key={msg.name} className="flex items-start gap-3">
                      <span
                        className={`mt-1 h-8 w-8 shrink-0 rounded-full ${msg.dot}`}
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#2E2A7B]">{msg.name}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-[#535778]">
                          {msg.text}
                        </p>
                      </div>
                    </div>
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
