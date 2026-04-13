import FadeIn from "../FadeIn";

export default function WeightOfHavingLived() {
  return (
    <section className="bg-gradient-to-b from-[#EEEAF8]/40 to-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9B4FCC]">
              The Difference
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              The weight of having lived
            </h2>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Version A */}
            <div className="rounded-[24px] bg-white/60 p-6 ring-1 ring-black/5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5B5E84]/60">
                Version A &mdash; Character sheet
              </p>
              <div className="mt-4 rounded-xl bg-[#F7F8FB] px-4 py-3">
                <p className="text-sm leading-relaxed text-[#535778]">
                  &ldquo;That sounds frustrating. Deadlines can be tough. Want me to help you plan
                  the next one better?&rdquo;
                </p>
              </div>
              <div className="mt-4 rounded-xl border border-dashed border-[#5B5E84]/20 bg-[#F7F8FB]/50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]/50">
                  Why this falls flat
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#535778]">
                  Generic empathy. No personal experience to draw from. The advice is
                  correct but hollow&mdash;it could come from any AI, any chatbot, any template.
                </p>
              </div>
            </div>

            {/* Version B */}
            <div className="rounded-[24px] bg-white p-6 shadow-sm ring-2 ring-[#22B8B0]/20">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#22B8B0]">
                Version B &mdash; Lived memory
              </p>
              <div className="mt-4 rounded-xl bg-[#F7F8FB] px-4 py-3">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-[#FFD8C6] to-[#F5B9A2]" />
                  <div>
                    <p className="text-xs font-semibold text-[#2E2A7B]/40">Sofia</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-[#535778]">
                      yeah, missed deadlines are the worst. my first startup died because we kept
                      polishing instead of shipping. now I&apos;m probably too aggressive the other
                      direction, but at least things go out the door.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-xl border border-[#22B8B0]/20 bg-[#F0F9F8] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#22B8B0]">
                  Why this works
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#535778]">
                  Sofia draws from a specific life experience&mdash;a startup that failed because the
                  team over-polished. That memory shapes her perspective today. She&apos;s not
                  offering generic advice; she&apos;s sharing hard-won understanding.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mx-auto mt-10 max-w-2xl text-center text-lg leading-relaxed text-[#4A4D73]">
            The difference isn&apos;t better prompting or more personality traits. It&apos;s the
            weight of having lived through something. You can&apos;t fake that with a character
            sheet.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
