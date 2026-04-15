"use client";

import { motion } from "framer-motion";

const memoryDots = [0, 1, 2, 3, 4];

export default function PalariBrainDiagram() {
  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-[28px] bg-white p-6 shadow-[0_20px_60px_-30px_rgba(46,42,123,0.35)] ring-1 ring-black/5 md:p-7">
      <div className="mb-5 flex items-center justify-between">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9B9ECF]">
          Inside a Palari
        </p>
        <div className="flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F46F61]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#E7B83D]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#22B8B0]" />
        </div>
      </div>

      <div className="relative">
        <motion.span
          aria-hidden="true"
          className="absolute left-2 h-2 w-2 rounded-full bg-[#2E2A7B] shadow-[0_0_12px_rgba(46,42,123,0.5)]"
          initial={{ top: "0%", opacity: 0 }}
          animate={{
            top: ["6%", "42%", "78%", "6%"],
            opacity: [0.2, 1, 1, 0.2],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            times: [0, 0.35, 0.7, 1],
            ease: "easeInOut",
          }}
        />

        <div className="flex items-center justify-between gap-4 py-3 pl-8">
          <div className="flex items-center gap-1.5">
            {memoryDots.map((i) => (
              <motion.span
                key={i}
                className="h-2 w-2 rounded-full bg-[#22B8B0]"
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{
                  duration: 2.6,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5B5E84]">
            Memory
          </p>
        </div>

        <div className="h-px bg-black/5" />

        <div className="flex items-center justify-between gap-4 py-3 pl-8">
          <motion.span
            aria-hidden="true"
            className="block h-3.5 w-3.5 rotate-45 bg-[#9B4FCC]"
            animate={{ rotate: [45, 225, 405] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5B5E84]">
            Mama Model
          </p>
        </div>

        <div className="h-px bg-black/5" />

        <div className="flex items-center justify-between gap-4 py-3 pl-8">
          <svg
            width="48"
            height="14"
            viewBox="0 0 48 14"
            fill="none"
            aria-hidden="true"
          >
            <motion.path
              d="M0 7 Q 6 0, 12 7 T 24 7 T 36 7 T 48 7"
              stroke="#F46F61"
              strokeWidth="1.75"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{ pathLength: 1, opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5B5E84]">
            Vibes Layer
          </p>
        </div>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-[#8B8EB2]">
        Memory finds what matters. Mama Model does the work. Vibes Layer
        gives it Sofia&rsquo;s voice.
      </p>
    </div>
  );
}
