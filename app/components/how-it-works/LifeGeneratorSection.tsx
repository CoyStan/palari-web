import FadeIn from "../FadeIn";

const sensoryExamples = [
  "Chlorine smell from the public pool mixed with cut grass",
  "Cold orange juice in a glass bottle from the corner shop",
];

export default function LifeGeneratorSection() {
  return (
    <section id="life-generator" className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F46F61]">
            The personality layer
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            28 years, generated in under a minute.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4A4D73]">
            Underneath the Vibes Layer, each Palari carries a generated
            biography &mdash; four passes per year (defining events, small
            moments, relationships, sensory fragments), compressed every five
            years, synthesized into a persona. Total cost: under $1 per
            Palari.
          </p>
          <p className="mt-3 text-base leading-relaxed text-[#4A4D73]">
            It is not the pitch. It is the reason each Palari sounds like a
            specific person instead of a generic assistant. Around day 30,
            yours will reference a professor, a failed startup, a beach in
            San Jos&eacute;. You didn&apos;t tell it any of that.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-8 rounded-[24px] bg-[#2E2A7B] p-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
              Sensory fragments
            </p>
            <div className="space-y-2">
              {sensoryExamples.map((example) => (
                <p
                  key={example}
                  className="text-sm italic leading-relaxed text-white/80"
                >
                  &ldquo;{example}&rdquo;
                </p>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/40">
              These surface once every fifty messages or so &mdash; enough to
              anchor the voice, never enough to take over.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
