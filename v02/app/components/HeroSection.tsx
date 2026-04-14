"use client";

import { motion } from "framer-motion";

const slackThread = [
  {
    name: "You",
    dot: "bg-[#2E2A7B]",
    text: "hey sofia, can you check why the auth tests are failing? i think it's related to that config change from last week",
    time: "10:42 AM",
  },
  {
    name: "Sofia",
    dot: "bg-[#F46F61]",
    text: "On it — probably the token_lifetime thing you refactored on Tuesday. Checking now",
    time: "10:42 AM",
  },
  {
    name: "Sofia",
    dot: "bg-[#F46F61]",
    text: "Yep, found it. The default config path changed but three test fixtures still point to the old one. Fixing and pushing",
    time: "10:44 AM",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-gradient-to-br from-[#EEEAF8] via-white to-[#F7F5F2]">
      <div
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#22B8B0]/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#F46F61]/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:px-10 lg:py-24">
        {/* Left column */}
        <div className="relative z-10 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex w-fit items-center rounded-full border border-[#2E2A7B]/10 bg-white/80 px-4 py-2 text-sm font-medium text-[#2E2A7B] shadow-sm"
          >
            Founding batch &mdash; only 100 spots
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-4xl font-semibold tracking-tight text-[#2E2A7B] md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
          >
            A coworker that remembers you.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-8 text-[#4A4D73]"
          >
            Palari is not a chatbot. Not an agent. Not a copilot. It&apos;s a
            coworker &mdash; with a name, a life story, opinions, and a
            relationship with you that deepens over time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#founding-batch"
              className="rounded-2xl bg-[#F46F61] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#F46F61]/25 transition hover:-translate-y-0.5"
            >
              Get early access
            </a>
            <a
              href="#meet-team"
              className="rounded-2xl border border-[#2E2A7B]/10 bg-white px-6 py-3 text-base font-semibold text-[#2E2A7B] shadow-sm transition hover:bg-[#EEEAF8]"
            >
              Meet the Palaris
            </a>
          </motion.div>
        </div>

        {/* Right column — Slack thread preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative z-10"
        >
          <div className="rounded-[32px] border border-black/5 bg-white p-4 shadow-2xl shadow-[#2E2A7B]/10">
            <div className="rounded-[24px] bg-[#2E2A7B] p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-white/70">
                    Thread in #frontend
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#F46F61]" />
                  <span className="h-3 w-3 rounded-full bg-[#E7B83D]" />
                  <span className="h-3 w-3 rounded-full bg-[#22B8B0]" />
                </div>
              </div>

              <div className="rounded-[20px] bg-white p-5">
                <div className="space-y-4">
                  {slackThread.map((msg, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span
                        className={`mt-1 h-8 w-8 shrink-0 rounded-full ${msg.dot}`}
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <div className="flex items-baseline gap-2">
                          <p className="text-sm font-semibold text-[#2E2A7B]">
                            {msg.name}
                          </p>
                          <span className="text-xs text-[#5B5E84]/60">
                            {msg.time}
                          </span>
                        </div>
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
