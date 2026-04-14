import Link from "next/link";
import PalariDots from "./PalariDots";

export default function Footer() {
  return (
    <footer className="bg-[#2E2A7B] py-14 text-white">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight">Palari</span>
              <PalariDots scale="navbar" />
            </div>
            <p className="mt-4 max-w-xs text-base leading-relaxed text-white/50">
              AI coworkers with memory of your work.
            </p>
            <p className="mt-2 text-sm text-white/30">
              Built in Washington, D.C.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/40">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-base">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/palaris"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Meet the Palaris
                </Link>
              </li>
              <li>
                <Link
                  href="/manifesto"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Manifesto
                </Link>
              </li>
              <li>
                <a
                  href="/#pricing"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <a
              href="mailto:hello@palari.io"
              className="text-lg font-medium text-white"
            >
              hello@palari.io
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/15 pt-8">
          <p className="text-sm text-white/40">
            2026 Palari. Open source core under MIT.
          </p>
        </div>
      </div>
    </footer>
  );
}
