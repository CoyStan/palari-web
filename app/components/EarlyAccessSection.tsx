import FadeIn from "./FadeIn";
import Link from "next/link";

export default function EarlyAccessSection() {
  return (
    <section
      className="bg-gradient-to-br from-[#F7F5F2] via-[#F0F9F8] to-[#E5F8F7] py-16 md:py-24"
      id="early-access"
    >
      <div className="mx-auto w-full max-w-4xl px-6 text-center md:px-10">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22B8B0]">
            Private beta &middot; invite-only
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-5xl">
            Hire your first Palari.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-[#4A4D73]">
            Start building memory from day one. Your Palari will remember
            today&rsquo;s conversation next month.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mx-auto mt-10 flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-2xl border border-[#2E2A7B]/10 bg-white px-6 py-4 text-lg text-[#2E2A7B] outline-none transition-colors placeholder:text-[#5B5E84]/50 focus:border-[#22B8B0] focus:ring-2 focus:ring-[#22B8B0]/20"
            />
            <a
              href="mailto:hello@palari.io?subject=Early%20Access"
              className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-[#F46F61] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#F46F61]/25 transition hover:-translate-y-0.5"
            >
              Request an invite
            </a>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 inline-flex flex-col gap-2 text-sm text-[#5B5E84]">
            <p>
              Or start with{" "}
              <Link
                href="/memory"
                className="font-medium text-[#2E2A7B] underline"
              >
                the memory system
              </Link>
              , then{" "}
              <Link
                href="/philosophy"
                className="font-medium text-[#2E2A7B] underline"
              >
                read the full story
              </Link>
              .
            </p>
            <p className="text-[#5B5E84]/80">
              Investors &amp; partners:{" "}
              <a
                href="mailto:hello@palari.io?subject=Investors%20%26%20partners"
                className="font-medium text-[#2E2A7B] underline"
              >
                hello@palari.io
              </a>
              {" "}(subject: investors).
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
