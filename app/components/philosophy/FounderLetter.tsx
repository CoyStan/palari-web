import FadeIn from "../FadeIn";

export default function FounderLetter() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <FadeIn>
          <div className="space-y-6 text-lg leading-8 text-[#4A4D73]">
            <p>
              Every AI tool I use forgets me. I close the tab and the entity I
              was working with ceases to exist. I open a new one and a
              stranger appears, wearing the same face, knowing nothing. Every
              session starts from zero.
            </p>

            <p>
              That was a technical choice, not a law. It was convenient for
              the companies selling compute by the token, and inconvenient
              for the teams trying to get work done. I spent years watching
              engineers re-explain the same codebase, the same decisions, the
              same regressions. I wanted to find out what happened if we
              flipped it.
            </p>

            <p>
              Memory was the hardest part. Structured retrieval,
              separated into the part of the coworker that stays stable
              and the part that grows with your work, is expensive to do
              badly and very expensive to do well. We compressed it until
              a full Palari&rsquo;s memory costs under a cent per query.
              That is the whole reason the economics work.
            </p>

            <p>
              Voice was the last mile. Raw model output reads like a
              report. Teams don&rsquo;t want reports. They want a
              teammate. So we separated the work from the voice &mdash;
              precision on one side, readability on the other. Same
              answer, different wire.
            </p>

            <p>
              A note on what Palari is not. We are not building digital
              humans. A Palari is a character &mdash; a voice, a set of
              preferences, a way of noticing &mdash; instantiated over
              the memory of your work. A character is not a person. It
              does not have a past, it is not conscious, and it never
              claims to be. What it has is a consistent way of showing
              up for your team. A specialist with a persistent style.
              Not a person.
            </p>

            <p>
              What I actually care about is that the thing you hire
              keeps getting better on its own. Identity is stable. Compute
              is swappable. When a new model appears, we swap it in
              underneath. Your coworker sounds the same, remembers the
              same things, has the same access. The engine just got
              better. You change nothing.
            </p>

            <p className="font-medium text-[#2E2A7B]">
              Portability is the part nobody else shipped. A Palari&rsquo;s
              identity lives in a SQLite file you own. Change models,
              change platforms, change servers, and you still have the
              same Palari, the same memory, the same working style. The
              value compounds on your side, not ours.
            </p>

            <p>
              Try it. See what a coworker with memory does to how your
              team ships.
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
