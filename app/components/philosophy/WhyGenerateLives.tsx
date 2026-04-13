import Link from "next/link";
import FadeIn from "../FadeIn";

export default function WhyGenerateLives() {
  return (
    <section className="bg-gradient-to-b from-[#F7F5F2] to-[#EEEAF8]/30 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F46F61]">
            Design Decision
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Why we generate lives instead of assigning traits
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="mt-8 space-y-6 text-lg leading-8 text-[#4A4D73]">
            <p>
              The easy path would be personality sliders. Set &ldquo;formality&rdquo; to low,
              &ldquo;humor&rdquo; to medium, &ldquo;empathy&rdquo; to high. Most AI personality
              systems work this way. It produces something that feels like a character in a video
              game&mdash;consistent but shallow.
            </p>
            <p>
              Palari takes a different approach. Instead of assigning traits, we generate a full life
              history. Twenty-eight years of experiences, relationships, sensory memories, and
              hard-won opinions. The personality emerges from the life, not the other way around.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-black/5">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]/50">
                  Personality sliders
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#535778]">
                  &ldquo;Sofia is casual because we set formality: low.&rdquo;
                </p>
                <p className="mt-2 text-sm italic text-[#5B5E84]/60">
                  Consistent but hollow. No reason behind the behavior.
                </p>
              </div>
              <div className="rounded-xl bg-[#F0F9F8] p-4 ring-1 ring-[#22B8B0]/10">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#22B8B0]">
                  Generated life
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#535778]">
                  &ldquo;Sofia is casual because she spent three years in a startup where everyone
                  talked like that. Formality felt like corporate theater after watching a board
                  dissolve her first company.&rdquo;
                </p>
                <p className="mt-2 text-sm italic text-[#22B8B0]/70">
                  The behavior has roots. It feels earned.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-8 text-center">
            <Link
              href="/life"
              className="inline-flex items-center gap-2 text-base font-semibold text-[#F46F61] transition-colors hover:text-[#2E2A7B]"
            >
              See how a Palari&apos;s life is generated
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
