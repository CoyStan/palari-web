import FadeIn from "../FadeIn";

export default function IncentiveAlignmentSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E7B83D]">
            Incentives
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            We make money when you waste less.
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-[24px] bg-[#F7F5F2] p-6 ring-1 ring-black/5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]">
                The usual AI business model
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#4A4D73]">
                Bill per token. Revenue grows when the model is slow,
                rambling, or rerun. The vendor profits from the exact
                behavior you&rsquo;d like to fix.
              </p>
            </div>

            <div className="rounded-[24px] border-2 border-[#22B8B0]/25 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#22B8B0]">
                The Palari business model
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#2E2A7B]">
                A flat subscription. The less compute Sofia burns on your
                behalf, the cheaper she is for us to run, and the longer
                you stay. Our margin and your efficiency point the same way.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            That&rsquo;s why the Planning Layer exists. It routes simple
            questions to small models, keeps the expensive ones for the work
            that actually needs them, and turns a 30,000-token prompt into a
            3,000-token prompt with the right memories loaded. We built the
            router because we wanted our incentives to line up with yours.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
