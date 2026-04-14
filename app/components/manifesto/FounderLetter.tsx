import FadeIn from "../FadeIn";

export default function FounderLetter() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <FadeIn>
          <div className="space-y-6 text-lg leading-8 text-[#4A4D73]">
            <p>
              I spent years watching teams waste AI on the same context every
              day. Engineers re-explaining the same codebase, the same
              decisions, the same regressions. By the time the assistant was
              useful, the session ended and the context disappeared.
            </p>

            <p>
              Stateless was a technical choice, not a law. It was convenient
              for the companies selling compute by the token, and inconvenient
              for the teams trying to get work done. I wanted to find out what
              happened if we flipped it.
            </p>

            <p>
              Memory was the hardest part. Associative retrieval across
              eleven memory types &mdash; conversational, project, pattern,
              stakeholder, decision, and the rest &mdash; is expensive to do
              badly and very expensive to do well. We compressed it until a
              full Palari&apos;s memory costs under a cent per query. That is
              the whole reason the economics work.
            </p>

            <p>
              The Vibes Layer was the last mile. Raw Mama Model output reads
              like a report. Teams don&apos;t want reports; they want a
              teammate. So we separated work from voice &mdash; precision on
              one layer, readability on another. Same answer, different wire.
            </p>

            <p className="font-medium text-[#2E2A7B]">
              Portability is the part nobody else shipped. A Palari&apos;s
              identity lives in a SQLite file you own. Swap models, swap
              platforms, swap servers &mdash; same Palari, same memory, same
              working style. The value compounds on your side, not ours.
            </p>

            <p>
              Here is the founding batch. One hundred people. See what a
              coworker with memory does to how your team actually works.
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
