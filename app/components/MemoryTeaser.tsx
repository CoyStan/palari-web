import Link from "next/link";
import FadeIn from "./FadeIn";

export default function MemoryTeaser() {
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <div className="rounded-[28px] bg-gradient-to-br from-[#EEEAF8] via-white to-[#F0F9F8] p-8 shadow-sm ring-1 ring-[#2E2A7B]/5 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9B4FCC]">
              Deep Dive
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#2E2A7B] md:text-3xl">
              Two brains. Seven memory types. One colleague who grows with you.
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#4A4D73]">
              Every Palari runs on a memory architecture designed to feel human&mdash;life events,
              sensory fragments, learned preferences, and more. Under 1,300 tokens per message.
              Under $0.001 per memory lookup.
            </p>
            <Link
              href="/memory"
              className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-[#22B8B0] transition-colors hover:text-[#2E2A7B]"
            >
              Explore the memory architecture
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
