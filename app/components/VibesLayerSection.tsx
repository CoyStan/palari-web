import Link from "next/link";
import FadeIn from "./FadeIn";

export default function VibesLayerSection() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#2E2A7B] md:text-4xl">
              Memory changes everything about a response
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-[#4A4D73]">
              Same question. Same personality traits. Completely different depth.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
            {/* Left: character-sheet AI */}
            <article>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#5B5E84]">
                AI with a character sheet
              </p>
              <div className="rounded-[28px] bg-white p-4 shadow-sm ring-1 ring-black/5">
                <div className="rounded-xl bg-[#F7F8FB] px-4 py-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-[#D0D4E0] to-[#B8BCCC]" />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[#5B5E84]/50">AI Assistant</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-[#535778]">
                        That sounds frustrating. Deadlines can be tough. Want me to help you plan the
                        next one better?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Center connector */}
            <div className="hidden text-lg font-medium text-[#2E2A7B]/30 md:block">vs</div>

            {/* Right: AI with a life */}
            <article>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#5B5E84]">
                AI with a life
              </p>
              <div className="rounded-[28px] bg-white p-4 shadow-sm ring-1 ring-black/5">
                <div className="rounded-xl bg-[#F7F8FB] px-4 py-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-[#FFD8C6] to-[#F5B9A2]" />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[#2E2A7B]/40">Sofia</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-[#535778]">
                        yeah, missed deadlines are the worst. my first startup died because we kept
                        polishing instead of shipping. now I&apos;m probably too aggressive the other
                        direction, but at least things go out the door.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mx-auto mt-10 max-w-2xl text-center">
            <p className="text-base leading-relaxed text-[#4A4D73]">
              The difference isn&apos;t personality settings&mdash;it&apos;s memory. Version B has
              lived through a failed startup. That experience shapes every response, the same way
              yours shapes yours.
            </p>
            <Link
              href="/manifesto"
              className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-[#22B8B0] transition-colors hover:text-[#2E2A7B]"
            >
              Read more about why memory matters
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
