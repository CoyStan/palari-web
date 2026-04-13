import Link from "next/link";
import FadeIn from "../FadeIn";

export default function TwoCognitiveSystems() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22B8B0]">
              Architecture
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              Two cognitive systems, not one
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4A4D73]">
              Your brain doesn&apos;t use the same system for solving math problems and feeling
              nostalgia. Neither does a Palari.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-[24px] bg-[#2E2A7B] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                Prefrontal Cortex
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">The Analytical Brain</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                The capable, precise system. Reads your files, builds spreadsheets, analyzes data,
                writes reports. Remembers your preferences, your tools, your workflows. Does the
                work.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Working Memory", "Preferences", "Context", "Skills"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border-2 border-[#F46F61]/20 bg-[#FFF5F0] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F46F61]/60">
                Limbic System
              </p>
              <h3 className="mt-2 text-xl font-semibold text-[#2E2A7B]">The Vibes Layer</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#535778]">
                The personality system. Takes the analytical brain&apos;s output and rewrites it in
                your Palari&apos;s voice. Draws on life events, sensory memories, opinions forged by
                experience. Makes it sound like someone real.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Life Events", "Sensory", "Opinions", "Identity"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#F46F61]/10 px-3 py-1 text-xs font-medium text-[#F46F61]/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-[#4A4D73]">
            This separation is why a Palari can be both highly capable and genuinely personal. The
            analytical brain never compromises on accuracy. The vibes layer never compromises on
            personality.
          </p>
          <div className="mt-4 text-center">
            <Link
              href="/memory"
              className="inline-flex items-center gap-2 text-base font-semibold text-[#22B8B0] transition-colors hover:text-[#2E2A7B]"
            >
              See the full memory architecture
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
