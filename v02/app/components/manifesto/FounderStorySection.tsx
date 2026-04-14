import FadeIn from "../FadeIn";

export default function FounderStorySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Built by one person, for now.
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="mt-8 space-y-6 text-lg leading-8 text-[#4A4D73]">
            <p>
              Applied ML and data engineering from the IMF&apos;s Strategy,
              Policy and Review Risk Unit: XGBoost pipelines, BGVAR models,
              crisis forecasting across 180 countries. This is not someone who
              learned AI from a tutorial.
            </p>
            <p>
              Economic policy and institutional thinking from Harvard Kennedy
              School (Fulbright MPA/ID). The BYOK model, the Planning
              Layer&apos;s incentive alignment, the memory-as-pricing strategy
              &mdash; these are economic design decisions, not just engineering
              ones.
            </p>
            <p>
              The entire product &mdash; the Rust server, the Slack plugin, the
              Life Generator, the architecture book &mdash; was built in under
              two weeks while employed full-time.
            </p>
            <p className="font-medium text-[#2E2A7B]">
              No prior startup experience. No co-founder yet. These are real
              gaps. The product is the proof that the idea is worth building.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
