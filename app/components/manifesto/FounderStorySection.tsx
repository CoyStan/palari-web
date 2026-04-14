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
              I spent years inside analytics teams watching institutional
              memory walk out the door every time an engineer left. Runbooks
              went stale. The same incidents recurred. Onboarding took months
              because the context was locked in people&apos;s heads.
            </p>
            <p>
              Applied ML and data engineering from the IMF&apos;s Strategy,
              Policy and Review Risk Unit: XGBoost pipelines, BGVAR models,
              crisis forecasting across 180 countries. The engineering
              decisions behind Palari &mdash; the eleven memory types, the
              Planning Layer&apos;s router, the Vibes Layer separation &mdash;
              are shaped by that work.
            </p>
            <p>
              Economic policy and institutional thinking from Harvard Kennedy
              School (Fulbright MPA/ID). BYOK, the Planning Layer&apos;s
              incentive alignment, memory-as-pricing &mdash; these are
              economic design decisions, not just engineering ones.
            </p>
            <p>
              The first working build &mdash; the Rust server, the Slack
              plugin, the Planning Layer, the memory subsystem &mdash; was
              built in under two weeks while employed full-time.
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
