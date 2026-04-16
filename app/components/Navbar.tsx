"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import PalariDots from "./PalariDots";

const navItems = [
  { label: "Memory", href: "/memory" },
  { label: "Character", href: "/character" },
  { label: "Trust", href: "/trust" },
  { label: "Philosophy", href: "/philosophy" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-[#F7F5F2]/85 backdrop-blur transition-shadow ${
          isScrolled ? "shadow-md ring-1 ring-black/5" : ""
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#2E2A7B]"
          >
            <span className="text-xl font-bold tracking-tight">Palari</span>
            <PalariDots scale="navbar" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#4A4D73] transition-colors hover:text-[#2E2A7B]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/philosophy#early-access"
              className="rounded-2xl bg-gradient-to-r from-[#22B8B0] to-[#2E2A7B] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
            >
              Get early access
            </a>
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5 md:hidden"
          >
            <span className="sr-only">Open menu</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-[#2E2A7B]" />
              <span className="block h-0.5 w-5 bg-[#2E2A7B]" />
              <span className="block h-0.5 w-5 bg-[#2E2A7B]" />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile drawer rendered as a sibling of <header>.
          Must NOT be a child of any element with backdrop-filter,
          transform, filter, or will-change — those create a
          containing block for position:fixed and the drawer would
          be sized/positioned relative to that parent instead of
          the viewport, leaving the menu transparent on mobile. */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-[80] bg-black/45 backdrop-blur-[2px] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-[90] flex h-[100dvh] w-80 max-w-[85vw] flex-col bg-[#F7F5F2] shadow-2xl shadow-black/20 ring-1 ring-black/10 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between px-6 pb-4 pt-6">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-lg font-bold tracking-tight text-[#2E2A7B]">
                    Palari
                  </span>
                  <PalariDots scale="navbar" />
                </Link>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl ring-1 ring-black/5"
                  aria-label="Close menu"
                >
                  &#x2715;
                </button>
              </div>

              <div className="flex flex-1 flex-col overflow-y-auto px-6 pb-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="border-b border-[#2E2A7B]/10 py-4 text-lg font-semibold text-[#2E2A7B] transition-colors hover:text-[#F46F61]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="border-t border-[#2E2A7B]/10 bg-[#F7F5F2] px-6 pb-[env(safe-area-inset-bottom,1.5rem)] pt-4">
                <a
                  href="/philosophy#early-access"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-2xl bg-gradient-to-r from-[#22B8B0] to-[#2E2A7B] px-5 py-4 text-center text-base font-semibold text-white shadow-md shadow-[#2E2A7B]/15"
                >
                  Get early access
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
