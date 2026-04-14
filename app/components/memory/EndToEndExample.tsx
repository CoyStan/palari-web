import FadeIn from "../FadeIn";

const turns = [
  {
    actor: "You",
    dot: "bg-[#2E2A7B]",
    text: "sofia, the march revenue numbers on the exec dashboard look off again. can you check?",
  },
  {
    actor: "Planning Layer",
    dot: "bg-[#9B4FCC]",
    tag: "internal",
    text: "Task class: data-integrity investigation. Budget: normal. Pulling working (dashboard path), recent_life (this week&rsquo;s deploys), prompt_pattern (user often means the revenue sheet in Drive), coordination (Leo touched the sync cron on Apr 11).",
  },
  {
    actor: "Mama Model",
    dot: "bg-[#22B8B0]",
    tag: "internal",
    text: "Receives: working + preference + recent_life + coordination + relationship + opinion. Token budget ~800. Diagnoses likely cause as failed nightly sync given Leo&rsquo;s cron change.",
  },
  {
    actor: "Vibes Layer",
    dot: "bg-[#F46F61]",
    tag: "internal",
    text: "Receives: life_event (conviction about trusting the dashboard), sensory (toner smell of late nights debugging), relationship (user is terse, don&rsquo;t pad), recent_life. Rewrites answer in Sofia&rsquo;s voice.",
  },
  {
    actor: "Sofia",
    dot: "bg-[#F46F61]",
    text: "yep. nightly sync failed at 2:14am, same symptom as the march incident but different cron. leo touched it last week. three cells are stale. want me to rerun the sync and patch them?",
  },
];

export default function EndToEndExample() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            One question, three layers, one answer.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            The internal steps are hidden from you. This is what actually
            happens when you ping Sofia about a stale dashboard.
          </p>
        </FadeIn>

        <div className="mt-12 space-y-3">
          {turns.map((turn, i) => (
            <FadeIn key={i}>
              <div className="flex items-start gap-4 rounded-[24px] bg-[#F7F5F2] p-5 ring-1 ring-black/5">
                <span
                  className={`mt-1 h-8 w-8 shrink-0 rounded-full ${turn.dot}`}
                  aria-hidden="true"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-[#2E2A7B]">
                      {turn.actor}
                    </p>
                    {turn.tag ? (
                      <span className="rounded-full bg-[#2E2A7B]/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#5B5E84]">
                        {turn.tag}
                      </span>
                    ) : null}
                  </div>
                  <p
                    className="mt-1.5 text-sm leading-relaxed text-[#4A4D73]"
                    dangerouslySetInnerHTML={{ __html: turn.text }}
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
