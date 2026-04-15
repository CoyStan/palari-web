"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Memory", href: "/memory" },
  { label: "Life", href: "/life" },
  { label: "Trust", href: "/trust" },
  { label: "Philosophy", href: "/philosophy" },
  { label: "Pricing", href: "/#pricing" },
];

export default function HeroNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setIsOpen(true)}
        className="fixed right-5 top-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#2E2A7B] shadow-[0_8px_24px_-12px_rgba(46,42,123,0.35)] ring-1 ring-black/10 transition-shadow hover:shadow-[0_12px_32px_-12px_rgba(46,42,123,0.45)] md:right-8 md:top-8"
      >
        <span className="sr-only">Open menu</span>
        <div className="space-y-1.5">
          <span className="block h-0.5 w-5 bg-[#2E2A7B]" />
          <span className="block h-0.5 w-5 bg-[#2E2A7B]" />
          <span className="block h-0.5 w-5 bg-[#2E2A7B]" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-50 bg-[#2E2A7B]/45 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-[60] flex h-full w-[88vw] max-w-sm flex-col bg-[#F7F5F2] p-7 shadow-2xl ring-1 ring-black/5"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold tracking-tight text-[#2E2A7B]">
                  Palari
                </span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg text-[#2E2A7B] ring-1 ring-black/10 transition-colors hover:bg-[#EEEAF8]"
                  aria-label="Close menu"
                >
                  &#x2715;
                </button>
              </div>

              <nav className="mt-10 flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="border-b border-black/5 py-4 text-lg font-semibold text-[#2E2A7B] transition-colors hover:text-[#F46F61]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <a
                href="/#early-access"
                onClick={() => setIsOpen(false)}
                className="mt-auto rounded-2xl bg-[#F46F61] px-5 py-4 text-center text-base font-semibold text-white shadow-md shadow-[#F46F61]/25 transition hover:-translate-y-0.5"
              >
                Get early access
              </a>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
