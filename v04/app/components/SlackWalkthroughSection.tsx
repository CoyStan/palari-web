import FadeIn from "./FadeIn";

const steps = [
  {
    title: "You give Sofia a task",
    text: "In Slack, like you would with any coworker. No commands. No prompts to craft.",
    detail:
      "sofia, the dashboard is showing stale revenue numbers again. can you look?",
    actor: "You",
    actorDot: "bg-[#2E2A7B]",
  },
  {
    title: "She acknowledges",
    text: "A quick reaction. You know she has it.",
    detail: "\uD83D\uDC40 reacted",
    actor: "Sofia",
    actorDot: "bg-[#F46F61]",
  },
  {
    title: "She finds the problem",
    text: "She remembers that stale-data issue from last quarter, so she checks the same place first.",
    detail:
      "the nightly sync failed at 2:14am. same symptom as the march incident, different cron. three cells are out of date.",
    actor: "Sofia",
    actorDot: "bg-[#F46F61]",
  },
  {
    title: "She proposes",
    text: "She never writes without your nod.",
    detail:
      "want me to rerun the sync and patch the three stale cells manually? i can post a note in #ops after.",
    actor: "Sofia",
    actorDot: "bg-[#F46F61]",
  },
  {
    title: "You approve",
    text: "One word. That&rsquo;s the protocol.",
    detail: "yes please",
    actor: "You",
    actorDot: "bg-[#2E2A7B]",
  },
  {
    title: "She acts and reports back",
    text: "Exactly what she said she would. Receipt in the channel.",
    detail:
      "done. sync rerun, three cells patched, note posted in #ops. same root cause as march; flagged for your monday review.",
    actor: "Sofia",
    actorDot: "bg-[#F46F61]",
  },
];

export default function SlackWalkthroughSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              It starts with a conversation.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4A4D73]">
              No setup wizard, no prompt engineering, no new surface to learn.
              You talk to Sofia the way you&rsquo;d talk to a teammate.
            </p>
          </div>
        </FadeIn>

        <ol className="mt-14 space-y-4">
          {steps.map((step, i) => (
            <FadeIn key={step.title}>
              <li className="relative flex gap-5 rounded-[24px] bg-[#F7F5F2] p-5 md:p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#2E2A7B] ring-1 ring-black/5">
                  {i + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-[#2E2A7B]">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#4A4D73]">
                    {step.text}
                  </p>
                  <div className="mt-3 flex items-start gap-3 rounded-2xl bg-white p-4 ring-1 ring-black/5">
                    <span
                      className={`mt-1 h-6 w-6 shrink-0 rounded-full ${step.actorDot}`}
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[#2E2A7B]">
                        {step.actor}
                      </p>
                      <p
                        className="mt-0.5 text-sm leading-relaxed text-[#535778]"
                        dangerouslySetInnerHTML={{ __html: step.detail }}
                      />
                    </div>
                  </div>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
