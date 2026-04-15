"use client";

import { motion } from "framer-motion";

const slackThread = [
  {
    name: "You",
    dot: "bg-[#2E2A7B]",
    text: "sofia, the march campaign numbers look off. did we double-send?",
    time: "10:42 AM",
  },
  {
    name: "Sofia",
    dot: "bg-[#F46F61]",
    text: "checking. probably the automation rule you tweaked tuesday.",
    time: "10:42 AM",
  },
  {
    name: "Sofia",
    dot: "bg-[#F46F61]",
    text: "yep. three segments overlap with the retention list. want me to deduplicate them the way we did for the holiday promo in november?",
    time: "10:44 AM",
  },
];

const stats = [
  { value: "5", label: "Palaris who remember" },
  { value: "1", label: "click to set up" },
  { value: "0", label: "terminal needed" },
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
        <div className="relative z-10 flex flex-col">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl text-4xl font-semibold tracking-tight text-[#2E2A7B] md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
          >
            AI coworkers who remember how you work,{" "}
            <span className="text-[#F46F61]">get better every month,</span>
            {" "}and never need you to update anything.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-8 text-[#4A4D73]"
          >
            Each Palari has a unique voice, a persistent memory, and scoped
            access to your files. You talk to them the way you'd talk to a
            teammate. They remember everything. The engine underneath keeps
            improving. You change nothing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#early-access"
              className="rounded-2xl bg-[#F46F61] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#F46F61]/25 transition hover:-translate-y-0.5"
            >
              Get early access
            </a>
            <a
              href="#meet-team"
              className="rounded-2xl border border-[#2E2A7B]/10 bg-white px-6 py-3 text-base font-semibold text-[#2E2A7B] shadow-sm transition hover:bg-[#EEEAF8]"
            >
              Meet your Palaris
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-3xl font-semibold text-[#2E2A7B]">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-[#5B5E84]">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative z-10"
        >
          <div className="rounded-[32px] border border-black/5 bg-white p-4 shadow-2xl shadow-[#2E2A7B]/10">
            <div className="rounded-[24px] bg-[#2E2A7B] p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm font-medium text-white/70">
                  #operations
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
