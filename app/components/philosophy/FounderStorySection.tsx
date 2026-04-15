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
              I spent years watching institutional memory walk out the door
              every time an engineer left &mdash; runbooks going stale, the
              same incidents recurring, onboarding dragging for months
              because the context was locked in people&rsquo;s heads. When
              I started using AI tools to close the gap, I hit a sharper
              version of the same problem: every session starts from zero.
              Close the tab and the assistant forgets you. That&rsquo;s a
              technical choice, not a law, and it&rsquo;s the one Palari
              refuses to make.
            </p>

            <p>
              I come to this from applied economics and engineering, not
              from product. Crime-prediction models for Mexico City&rsquo;s
              Public Security Ministry taught me how quickly a data tool
              can do harm if nobody explains why it exists. Macro-crisis
              forecasting at the IMF taught me that the signal usually
              lives in the loss, not the growth. Economic-development work
              from Kazakhstan to Somalia taught me that institutional
              memory is the thing that decides whether a program survives
              the next election. Harvard Kennedy School (Fulbright MPA/ID)
              gave me the framework for thinking about systems at country
              scale; the work itself taught me why memory is the part
              worth building for.
            </p>

            <p>
              The first working build &mdash; the Rust server, the Slack
              plugin, the routing layer, the memory subsystem &mdash; came
              together in under two weeks while I was still employed
              full-time. No prior startup experience. No co-founder yet.
              These are real gaps. The product is the proof that the idea
              is worth building.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 text-right">
            <p className="text-base font-semibold text-[#2E2A7B]">
              Quetzali Ram&iacute;rez Guill&eacute;n
            </p>
            <p className="mt-1 text-sm text-[#4A4D73]">Washington, D.C.</p>
            <p className="text-sm text-[#4A4D73]">April 2026</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
