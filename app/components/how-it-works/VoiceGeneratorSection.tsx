import FadeIn from "../FadeIn";

const sensoryExamples = [
  "Chlorine smell from the public pool mixed with cut grass",
  "Cold orange juice in a glass bottle from the corner shop",
];

export default function VoiceGeneratorSection() {
  return (
    <section id="voice-generator" className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F46F61]">
            Voice Generator
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Why each specialist sounds specific.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4A4D73]">
            Seven identical voices would produce indistinguishable review
            notes &mdash; generic-in, generic-out. So before a Palari ships,
            a one-shot persona synthesis runs: four passes of generated
            biography (events, moments, relationships, sensory fragments),
            compressed every five years, distilled into a voice. Cost: under
            $1 per Palari, run once.
          </p>
          <p className="mt-3 text-base leading-relaxed text-[#4A4D73]">
            The output isn&rsquo;t a soul. It&rsquo;s a signal-to-noise
            decision. When Sofia says <em>&ldquo;the token_lifetime refactor
            from Tuesday&rdquo;</em>, that&rsquo;s memory. When she says it
            in her own vocabulary instead of &ldquo;I&rsquo;d be happy to
            help you investigate,&rdquo; that&rsquo;s voice. Specific
            feedback needs both.
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
              anchor the voice, never enough to take over the work.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-[#5B5E84]">
            We&rsquo;re not building digital humans. Palaris don&rsquo;t have
            feelings. The biography is a mechanism to make the voice
            consistent, so the same Sofia always reviews code the same way.
            A specialist with a persistent style &mdash; not a person.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
