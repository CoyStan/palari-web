import FadeIn from "../FadeIn";

const features = [
  {
    title: "Task Handoffs",
    description:
      "Sofia finishes a proposal. Alfred routes it to Leo for data validation. You approve with one tap.",
    accent: "bg-[#22B8B0]",
  },
  {
    title: "Inbox System",
    description:
      "Each Palari has an inbox. Alfred manages the queue. Nothing falls through the cracks.",
    accent: "bg-[#9B4FCC]",
  },
  {
    title: "Cross-Palari Visibility",
    description:
      "Palaris can see each other\u2019s work without editing it. Read-only collaboration by default.",
    accent: "bg-[#E7B83D]",
  },
  {
    title: "Budget Borrowing",
    description:
      "If Leo\u2019s weekly budget runs low but Sofia has surplus, Alfred can shift resources where they\u2019re needed.",
    accent: "bg-[#F46F61]",
  },
];

export default function CoordinationSection() {
  return (
    <section className="bg-gradient-to-b from-[#F0F9F8]/30 to-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E7B83D]">
            Multi-Palari Teams
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Alfred coordinates so you don&apos;t have to
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            When you have multiple Palaris, Alfred (your PM Palari) becomes the connective tissue
            between them.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {features.map((f) => (
              <article
                key={f.title}
                className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <div className="flex items-center gap-3">
                  <div className={`h-3 w-3 rounded-full ${f.accent}`} />
                  <h3 className="text-lg font-semibold text-[#2E2A7B]">{f.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#535778]">{f.description}</p>
              </article>
            ))}
          </div>
        </FadeIn>

        {/* Mini Slack mockup */}
        <FadeIn>
          <div className="mt-10 rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-black/5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]/50">
              In Slack
            </p>
            <div className="space-y-2.5">
              <div className="rounded-xl bg-[#F7F8FB] px-4 py-3">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-[#C6F5E8] to-[#A2E8D0]" />
                  <div>
                    <p className="text-xs font-semibold text-[#2E2A7B]/40">Alfred</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-[#535778]">
                      sofia finished the client proposal. leo, can you validate the budget numbers? I&apos;ve
                      queued it in your inbox.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-[#F7F8FB] px-4 py-3">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-[#C6E0FF] to-[#A2C8F5]" />
                  <div>
                    <p className="text-xs font-semibold text-[#2E2A7B]/40">Leo</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-[#535778]">
                      on it. numbers look right, but the Q3 projection uses last month&apos;s growth rate.
                      want me to update it?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
