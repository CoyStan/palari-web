"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import PalariDots from "./PalariDots";

type NavLink = { label: string; href: string; kind: "link" };
type NavDropdown = {
  label: string;
  kind: "dropdown";
  items: { label: string; href: string }[];
};
type NavItem = NavLink | NavDropdown;

const navItems: NavItem[] = [
  { label: "How it works", href: "/#how-it-works", kind: "link" },
  {
    label: "Learn",
    kind: "dropdown",
    items: [
      { label: "Memory Architecture", href: "/memory" },
      { label: "Philosophy", href: "/philosophy" },
      { label: "How Palaris Are Born", href: "/life" },
    ],
  },
  { label: "Pricing", href: "/#pricing", kind: "link" },
];

function SmartLink({
  href,
  className,
  children,
  onClick,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  if (href.startsWith("/") && !href.startsWith("/#")) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

function DesktopDropdown({ item }: { item: NavDropdown }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>(null);

  const enter = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };
  const leave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        type="button"
        className="inline-flex items-center gap-1 text-sm font-medium text-[#4A4D73] transition-colors hover:text-[#2E2A7B]"
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <svg
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 rounded-[20px] bg-white p-2 shadow-lg ring-1 ring-black/5"
            style={{ minWidth: 220 }}
          >
            {item.items.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-2.5 text-sm font-medium text-[#4A4D73] transition-colors hover:bg-[#EEEAF8] hover:text-[#2E2A7B]"
              >
                {sub.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileDropdown({
  item,
  onNavigate,
}: {
  item: NavDropdown;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex w-full items-center justify-between text-base font-medium text-[#4A4D73]"
      >
        {item.label}
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-2 flex flex-col gap-3 pl-4">
              {item.items.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  onClick={onNavigate}
                  className="text-sm font-medium text-[#4A4D73]/80 transition-colors hover:text-[#2E2A7B]"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
    <header
      className={`sticky top-0 z-50 bg-[#F7F5F2]/85 backdrop-blur transition-shadow ${
        isScrolled ? "shadow-md ring-1 ring-black/5" : ""
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="inline-flex items-center gap-2 text-[#2E2A7B]">
          <span className="text-xl font-bold tracking-tight">Palari</span>
          <PalariDots scale="navbar" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) =>
            item.kind === "dropdown" ? (
              <DesktopDropdown key={item.label} item={item} />
            ) : (
              <SmartLink
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#4A4D73] transition-colors hover:text-[#2E2A7B]"
              >
                {item.label}
              </SmartLink>
            )
          )}
          <a
            href="/#meet-team"
            className="rounded-2xl bg-gradient-to-r from-[#22B8B0] to-[#2E2A7B] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
          >
            Meet the Palaris
          </a>
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setIsOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl ring-1 ring-black/5 md:hidden"
        >
          <span className="sr-only">Open menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-[#2E2A7B]" />
            <span className="block h-0.5 w-5 bg-[#2E2A7B]" />
            <span className="block h-0.5 w-5 bg-[#2E2A7B]" />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-black/30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col gap-8 bg-[#F7F5F2] p-6 ring-1 ring-black/5 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="inline-flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <span className="text-lg font-bold tracking-tight text-[#2E2A7B]">Palari</span>
                  <PalariDots scale="navbar" />
                </Link>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl ring-1 ring-black/5"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-5">
                {navItems.map((item) =>
                  item.kind === "dropdown" ? (
                    <MobileDropdown
                      key={item.label}
                      item={item}
                      onNavigate={() => setIsOpen(false)}
                    />
                  ) : (
                    <SmartLink
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-medium text-[#4A4D73]"
                    >
                      {item.label}
                    </SmartLink>
                  )
                )}
              </div>

              <a
                href="/#meet-team"
                onClick={() => setIsOpen(false)}
                className="mt-auto rounded-2xl bg-gradient-to-r from-[#22B8B0] to-[#2E2A7B] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Meet the Palaris
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
