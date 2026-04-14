import FadeIn from "../FadeIn";

export default function FounderLetter() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <FadeIn>
          <div className="space-y-6 text-lg leading-8 text-[#4A4D73]">
            <p>
              I started building Palari on a Thursday night in April 2026. I did
              not start with a business plan. I did not start with a pitch deck.
              I started with a feeling that something was missing from every AI
              tool I had ever used: the feeling of working with someone, not
              something.
            </p>

            <p>
              I am a research analyst at the International Monetary Fund. My work
              involves machine learning models for sovereign crisis prediction,
              large panel datasets across 180 countries, and the kind of
              quantitative rigor that leaves no room for ambiguity. I know what
              good tools look like. I use Claude, Codex, Gemini, and a dozen
              other AI systems daily. They are brilliant. They are also lonely.
            </p>

            <p>
              Every conversation starts from zero. Every session forgets what
              happened before. Every model speaks in the same careful,
              professional, slightly hollow voice. I close the tab and the entity
              I was working with ceases to exist. I open a new tab and a stranger
              appears, wearing the same face, knowing nothing.
            </p>

            <p>
              This is not how people work. People remember. People have opinions.
              People push back when you are wrong. People have a voice that is
              theirs and nobody else&apos;s. People earn your trust gradually,
              and that trust is worth something because it was built over time,
              not granted by a settings panel.
            </p>

            <p className="font-medium text-[#2E2A7B]">
              I wanted to build AI that works the way people work. Not by
              pretending to be human &mdash; I think that is dishonest and I want
              no part of it &mdash; but by having the qualities that make human
              collaboration valuable: memory, personality, boundaries, and the
              accumulated understanding that comes from working together day
              after day.
            </p>

            <p>
              The result is Palari. It is a new kind of thing. Not a chatbot, not
              an agent, not a copilot. A coworker. One with a name, a life
              story, opinions forged from experience, memories that deepen over
              time, and a relationship with you that no other user shares.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 text-right">
            <p className="text-base font-semibold text-[#2E2A7B]">
              Quetzal&iacute; Ram&iacute;rez Guill&eacute;n
            </p>
            <p className="mt-1 text-sm text-[#4A4D73]">Washington, D.C.</p>
            <p className="text-sm text-[#4A4D73]">April 2026</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
