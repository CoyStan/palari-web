"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import PalariBrainDiagram from "./PalariBrainDiagram";

const navItems = [
  { label: "Memory", href: "/memory" },
  { label: "Life", href: "/life" },
  { label: "Trust", href: "/trust" },
  { label: "Philosophy", href: "/philosophy" },
];

const dots = [
  { color: "#E7B83D", x: 0.561, y: -0.081, d: 0.22 },
  { color: "#F46F61", x: 0.643, y: -0.231, d: 0.138 },
  { color: "#E7B83D", x: 0.654, y: 0.055, d: 0.154 },
  { color: "#F46F61", x: 0.722, y: -0.366, d: 0.179 },
  { color: "#22B8B0", x: 0.742, y: -0.026, d: 0.179 },
  { color: "#2E2A7B", x: 0.818, y: -0.239, d: 0.236 },
];

const WORDMARK_ANIM_START = 0.1;
const DOTS_ANIM_START = 0.5;
const DOT_STAGGER = 0.1;
const TAGLINE_DELAY = DOTS_ANIM_START + dots.length * DOT_STAGGER + 0.1;
const DESCRIPTOR_DELAY = TAGLINE_DELAY + 0.15;
const CTA_DELAY = DESCRIPTOR_DELAY + 0.15;
const SCROLL_INDICATOR_DELAY = CTA_DELAY + 0.4;

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [box, setBox] = useState<{ w: number; h: number } | null>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      setBox({ w: rect.width, h: rect.height });
    };

    measure();
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(measure).catch(() => {});
    }
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#F7F5F2]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 18% 22%, rgba(34,184,176,0.10), transparent 55%), radial-gradient(circle at 82% 78%, rgba(244,111,97,0.10), transparent 55%), radial-gradient(circle at 50% 50%, rgba(155,79,204,0.04), transparent 65%)",
        }}
      />

      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setIsOpen(true)}
        className="absolute right-5 top-5 z-30 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/60 backdrop-blur ring-1 ring-black/5 transition-shadow hover:shadow-md md:right-8 md:top-8"
      >
        <span className="sr-only">Open menu</span>
        <div className="space-y-1.5">
          <span className="block h-0.5 w-5 bg-[#2E2A7B]" />
          <span className="block h-0.5 w-5 bg-[#2E2A7B]" />
          <span className="block h-0.5 w-5 bg-[#2E2A7B]" />
        </div>
      </button>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 md:flex-row md:items-center md:justify-between md:gap-12 md:px-10">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <div className="relative inline-block">
            <motion.span
              ref={textRef}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: WORDMARK_ANIM_START, ease: [0.22, 1, 0.36, 1] }}
              className="block font-bold leading-none text-[#2E2A7B]"
              style={{
                fontFamily:
                  "var(--font-dm-sans), ui-sans-serif, system-ui, sans-serif",
                fontSize: "clamp(3rem, 14vw, 9rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Palari
            </motion.span>

            {box
              ? dots.map((dot, i) => {
                  const diameter = box.h * dot.d;
                  return (
                    <motion.span
                      key={i}
                      aria-hidden="true"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 14,
                        delay: DOTS_ANIM_START + i * DOT_STAGGER,
                      }}
                      className="absolute rounded-full"
                      style={{
                        left: box.w * dot.x - diameter / 2,
                        top: box.h * dot.y - diameter / 2,
                        width: diameter,
                        height: diameter,
                        background: dot.color,
                      }}
                    />
                  );
                })
              : null}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: TAGLINE_DELAY, ease: "easeOut" }}
            className="mt-5 font-medium text-[#5B5E84]"
            style={{ fontSize: "clamp(1rem, 2.2vw, 1.35rem)" }}
          >
            Same coworker. Every time.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: DESCRIPTOR_DELAY, ease: "easeOut" }}
            className="mt-2 text-sm text-[#8B8EB2] md:text-[0.95rem]"
          >
            An AI coworker with memory. Lives in your Slack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: CTA_DELAY, ease: "easeOut" }}
            className="mt-8 flex flex-col items-stretch gap-3 md:items-start"
          >
            <a
              href="#early-access"
              className="inline-flex min-w-[200px] items-center justify-center rounded-xl bg-[#F46F61] px-8 py-3.5 text-base font-semibold text-white shadow-md shadow-[#F46F61]/20 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#F46F61]/30"
            >
              Get early access
            </a>
            <a
              href="#five-voices"
              className="inline-flex min-w-[200px] items-center justify-center rounded-xl border border-[#2E2A7B]/15 bg-white/60 px-8 py-3.5 text-base font-semibold text-[#2E2A7B] backdrop-blur transition-colors hover:bg-white"
            >
              Meet your Palaris
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: CTA_DELAY + 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full max-w-sm md:flex-shrink-0"
        >
          <PalariBrainDiagram />
        </motion.div>
      </div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.8, delay: SCROLL_INDICATOR_DELAY }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-[#2E2A7B]/25 p-1.5">
          <motion.span
            className="block h-1.5 w-1.5 rounded-full bg-[#2E2A7B]/50"
            animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col gap-8 bg-[#F7F5F2] p-6 ring-1 ring-black/5"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold tracking-tight text-[#2E2A7B]">
                  Palari
                </span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl ring-1 ring-black/5"
                  aria-label="Close menu"
                >
                  &#x2715;
                </button>
              </div>

              <div className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-[#4A4D73]"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="#pricing"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-[#4A4D73]"
                >
                  Pricing
                </a>
              </div>

              <a
                href="#early-access"
                onClick={() => setIsOpen(false)}
                className="mt-auto rounded-2xl bg-gradient-to-r from-[#22B8B0] to-[#2E2A7B] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Get early access
              </a>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
