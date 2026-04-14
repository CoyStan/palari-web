import FadeIn from "../FadeIn";

export default function AlwaysImprovingSection() {
  return (
    <section className="bg-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9B4FCC]">
            The commitment
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Always improving, on your behalf.
          </h2>
        </FadeIn>

        <FadeIn>
          <p className="mt-6 text-lg leading-relaxed text-[#4A4D73]">
            The AI landscape changes every week. New models, new papers,
            new techniques. Most users can&rsquo;t keep up. Most companies
            can&rsquo;t keep up. We can, because keeping up is our job.
          </p>
        </FadeIn>

        <FadeIn>
          <p className="mt-5 text-lg leading-relaxed text-[#4A4D73]">
            When a paper on temporal memory indexing improves how
            retrieval works, we implement it. When a model appears that
            does voice generation at 30x lower cost with the same quality,
            we switch to it. When a new efficiency technique reduces
            context costs by 85%, we adopt it. Your coworker gets the
            benefit. You get a notification. Nothing else changes.
          </p>
        </FadeIn>

        <FadeIn>
          <p className="mt-5 text-lg leading-relaxed text-[#4A4D73]">
            This is what the three-layer architecture enables. Identity is
            stable. Compute is swappable. Every improvement in the field
            becomes an improvement in your coworker, automatically.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
