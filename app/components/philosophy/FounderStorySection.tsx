import FadeIn from "../FadeIn";

export default function FounderStorySection() {
  return (
    <section className="bg-gradient-to-br from-[#FFF4F1] via-[#FAF6F2] to-[#F7F5F2] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <FadeIn>
          <article className="rounded-[28px] bg-white p-8 shadow-lg shadow-[#2E2A7B]/[0.06] ring-1 ring-black/5 md:p-12">
            <div className="mb-5 flex items-center gap-3">
              <span
                className="h-2 w-2 rounded-full bg-[#F46F61]"
                aria-hidden="true"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F46F61]">
                From the founder
              </p>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-5xl md:leading-[1.05]">
              Who, and why
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-[#4A4D73]">
              <p>
                I use AI every day and I spend half that time managing it.
                Copy-pasting old conversations so the model remembers who I
                am. Rationing tokens because one complex prompt burns 20%
                of my monthly limit. Keeping separate chats for work and
                personal so the contexts don&rsquo;t bleed. Being good at
                AI right now means babysitting the tool instead of doing
                the work. I got tired of it.
              </p>

              <p>
                From Zacatecas. Public schools, taught myself English at
                17, Fulbright to Harvard, now a research analyst forecasting
                sovereign crises at the IMF. I&rsquo;m not an engineer. I
                just build things and learn whatever I need to build them.
              </p>

              <p>
                I built the first version of Palari in two weeks while
                employed full-time. Associative memory system, a planning
                layer that picks the cheapest model that can handle each
                task, and a codebase that reviews and heals itself between
                sessions. Claude Code, Codex, and a $7 server. When you
                message Sofia in Slack on a Tuesday morning, she already
                knows your project, your files, and that last time you
                asked about the Q1 report the data was stale. She
                doesn&rsquo;t know this because she&rsquo;s smart. She
                knows it because the memory system made her remember, and
                it cost a fraction of a cent.
              </p>

              <p>
                Nobody else will build this. The companies that sell tokens
                profit when you waste them. I don&rsquo;t. I have no
                co-founder, no funding, and no startup experience. What I
                have is a working product, an architecture that a competing
                instance of my own foundation model independently extended
                to 145 innovations without breaking, and the obsession to
                ship it.
              </p>
            </div>

            <div className="mt-10 border-t border-[#2E2A7B]/10 pt-6 text-right">
              <p className="text-base font-semibold text-[#2E2A7B]">
                Quetzali Ram&iacute;rez Guill&eacute;n
              </p>
              <p className="mt-1 text-sm text-[#4A4D73]">Washington, D.C.</p>
              <p className="text-sm text-[#4A4D73]">April 2026</p>
            </div>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}
