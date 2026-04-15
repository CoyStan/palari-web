"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

type Stage = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

const STAGE_DELAYS: Record<Exclude<Stage, 0>, number> = {
  1: 500,
  2: 500,
  3: 800,
  4: 500,
  5: 800,
  6: 600,
  7: 300,
};

const FINAL_STAGE: Stage = 7;

export default function HeroSlackDemo() {
  const prefersReducedMotion = useReducedMotion();
  const [stage, setStage] = useState<Stage>(0);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimeouts = useCallback(() => {
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
  }, []);

  const runSequence = useCallback(() => {
    clearTimeouts();
    if (prefersReducedMotion) {
      setStage(FINAL_STAGE);
      return;
    }
    setStage(0);

    let cumulative = 0;
    ([1, 2, 3, 4, 5, 6, 7] as const).forEach((s) => {
      cumulative += STAGE_DELAYS[s];
      const t = setTimeout(() => setStage(s), cumulative);
      timeoutsRef.current.push(t);
    });
  }, [clearTimeouts, prefersReducedMotion]);

  useEffect(() => {
    runSequence();
    return clearTimeouts;
  }, [runSequence, clearTimeouts]);

  const showMsg1 = stage >= 1;
  const showTyping1 = stage === 2;
  const showMsg2 = stage >= 3;
  const showTyping2 = stage === 4;
  const showMsg3 = stage >= 5;
  const showHighlight = stage >= 6;
  const showChip = stage >= 7;

  return (
    <div
      className="relative w-full max-w-md overflow-visible rounded-[28px] bg-white shadow-[0_24px_60px_-32px_rgba(46,42,123,0.4)] ring-1 ring-black/5"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-black/5 px-5 py-3.5">
        <p className="text-sm font-semibold text-[#2E2A7B]">#marketing</p>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F46F61]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#E7B83D]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#22B8B0]" />
        </div>
      </div>

      <div className="flex min-h-[320px] flex-col gap-4 px-5 py-5">
        <AnimatePresence>
          {showMsg1 ? (
            <motion.div
              key="msg1"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex items-start gap-3"
            >
              <span className="mt-1 h-7 w-7 shrink-0 rounded-full bg-[#2E2A7B]" />
              <div className="min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-[#2E2A7B]">
                    You
                  </span>
                  <span className="text-[11px] text-[#5B5E84]/60">
                    10:42 AM
                  </span>
                </div>
                <p className="mt-0.5 text-sm leading-relaxed text-[#535778]">
                  sofia, the march campaign numbers look off. did we
                  double-send?
                </p>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {showTyping1 ? (
            <motion.div
              key="typing1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3"
            >
              <span className="h-7 w-7 shrink-0 rounded-full bg-[#F46F61]" />
              <TypingDots />
            </motion.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {showMsg2 ? (
            <motion.div
              key="msg2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex items-start gap-3"
            >
              <span className="mt-1 h-7 w-7 shrink-0 rounded-full bg-[#F46F61]" />
              <div className="min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-[#2E2A7B]">
                    Sofia
                  </span>
                  <span className="text-[11px] text-[#5B5E84]/60">
                    10:42 AM
                  </span>
                </div>
                <p className="mt-0.5 text-sm leading-relaxed text-[#535778]">
                  checking. probably the automation you tweaked tuesday.
                </p>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {showTyping2 ? (
            <motion.div
              key="typing2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3"
            >
              <span className="h-7 w-7 shrink-0 rounded-full bg-[#F46F61]" />
              <TypingDots />
            </motion.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {showMsg3 ? (
            <motion.div
              key="msg3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative flex items-start gap-3"
            >
              <span className="mt-1 h-7 w-7 shrink-0 rounded-full bg-[#F46F61]" />
              <div className="min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-[#2E2A7B]">
                    Sofia
                  </span>
                  <span className="text-[11px] text-[#5B5E84]/60">
                    10:44 AM
                  </span>
                </div>
                <p className="mt-0.5 text-sm leading-relaxed text-[#535778]">
                  yep. three segments overlap with the retention list. want
                  me to deduplicate them the way we did for{" "}
                  <span className="relative inline-block">
                    <motion.span
                      aria-hidden="true"
                      className="absolute inset-x-[-3px] inset-y-[-1px] -z-0 rounded"
                      initial={{ backgroundColor: "rgba(231,184,61,0)" }}
                      animate={{
                        backgroundColor: showHighlight
                          ? "rgba(231,184,61,0.28)"
                          : "rgba(231,184,61,0)",
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                    <span className="relative z-10 font-medium text-[#2E2A7B]">
                      the holiday promo in november
                    </span>

                    <AnimatePresence>
                      {showChip ? (
                        <motion.span
                          key="chip"
                          initial={{ opacity: 0, y: 6, scale: 0.92 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 280,
                            damping: 18,
                          }}
                          className="absolute -top-8 right-0 z-20 inline-flex items-center gap-1.5 rounded-full bg-[#FFF1C9] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#2E2A7B] shadow-[0_6px_18px_-8px_rgba(231,184,61,0.6)] ring-1 ring-[#E7B83D]/40"
                        >
                          <span aria-hidden="true">&#x21A9;</span>
                          from memory · Nov 2025
                        </motion.span>
                      ) : null}
                    </AnimatePresence>
                  </span>
                  ?
                </p>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between border-t border-black/5 px-5 py-2.5">
        <span className="text-[11px] text-[#5B5E84]/60">
          Sofia · operations partner
        </span>
        <button
          type="button"
          onClick={runSequence}
          className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium text-[#5B5E84]/70 transition-colors hover:bg-[#F7F5F2] hover:text-[#2E2A7B]"
          aria-label="Replay demo"
        >
          <span aria-hidden="true">&#x21BB;</span>
          replay
        </button>
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 rounded-2xl bg-[#F7F5F2] px-3 py-2 ring-1 ring-black/5">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="block h-1.5 w-1.5 rounded-full bg-[#F46F61]"
          animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
