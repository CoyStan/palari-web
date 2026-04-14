import FadeIn from "../FadeIn";

export default function VibesLayerHumanizationSection() {
  return (
    <section className="bg-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F46F61]">
            The Vibes Layer
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Where a life becomes a voice.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4A4D73]">
            The biography on its own is just data. The Vibes Layer is
            what turns it into how she talks. On every message, three
            sensory fragments, one or two core memories, and a handful of
            opinions load into context. The raw answer goes in; Sofia
            comes out.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-[24px] bg-white p-6 ring-1 ring-black/5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]">
                Raw model output
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#4A4D73]">
                The revenue dashboard shows stale data because the nightly
                sync failed at 02:14. I recommend re-running the sync and
                patching the three affected cells. Please confirm.
              </p>
            </div>

            <div className="rounded-[24px] border-2 border-[#F46F61]/25 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F46F61]">
                After the Vibes Layer
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#2E2A7B]">
                yep. nightly sync failed at 2:14am, same symptom as the
                march incident but different cron. three cells are stale.
                want me to rerun and patch?
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic text-[#5B5E84]">
            Same answer. Different wire.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
