"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "3", label: "access levels" },
  { value: "0", label: "shared-by-default data" },
  { value: "100%", label: "under your control" },
];

const scopes = [
  { name: "Sofia", role: "Operations", color: "from-[#FFD8C6] to-[#F5B9A2]" },
  { name: "Leo", role: "Data", color: "from-[#C6E0FF] to-[#A2C8F5]" },
  { name: "Alfred", role: "Coordination", color: "from-[#C6F5E8] to-[#A2E8D0]" },
];

export default function TrustHero() {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-gradient-to-br from-[#FFFBF0] via-white to-[#F0F9F8]">
      <div
        className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#E7B83D]/15 blur-3xl"
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
            Trust & Teamwork
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-4xl font-semibold tracking-tight text-[#2E2A7B] md:text-5xl lg:text-5xl"
          >
            You don&apos;t give &lsquo;the AI&rsquo; access. You give Sofia access.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-8 text-[#4A4D73]"
          >
            Each Palari has its own scope, its own permissions, its own relationship with you.
            Mistakes stay contained. Trust builds naturally.
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

        {/* Right: Scoped access visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative z-10"
        >
          <div className="rounded-[32px] border border-black/5 bg-white p-6 shadow-2xl shadow-[#2E2A7B]/10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#E7B83D]">
              Scoped Access
            </p>
            <div className="space-y-4">
              {scopes.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center gap-4 rounded-[16px] bg-[#F7F8FB] p-4"
                >
                  <span className={`h-10 w-10 shrink-0 rounded-full bg-gradient-to-br ${s.color}`} />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#2E2A7B]">{s.name}</p>
                    <p className="text-xs text-[#5B5E84]">{s.role}</p>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="rounded-full bg-[#22B8B0]/10 px-2 py-0.5 text-xs font-medium text-[#22B8B0]">
                      Read
                    </span>
                    <span className="rounded-full bg-[#F46F61]/10 px-2 py-0.5 text-xs font-medium text-[#F46F61]">
                      Write
                    </span>
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
