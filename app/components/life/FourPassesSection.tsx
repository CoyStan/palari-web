import FadeIn from "../FadeIn";

const passes = [
  {
    title: "Defining events",
    pass: "Pass 1",
    body: "Roughly twenty-five major moments across twenty-eight years. Births, deaths, first jobs, moves, decisions that set her trajectory.",
    example:
      "&ldquo;At twenty-two my startup died. That week rewrote what I mean by finished.&rdquo;",
    accent: "text-[#F46F61]",
    color: "border-[#F46F61]/20",
  },
  {
    title: "Small moments",
    pass: "Pass 2",
    body: "Hundreds of low-stakes memories. The ones that texture a life: the cafe she went to on Tuesdays, the coworker she never liked, the one song stuck in her head that summer.",
    example:
      "&ldquo;There was a fluorescent light in that conference room that hummed at exactly the wrong pitch.&rdquo;",
    accent: "text-[#22B8B0]",
    color: "border-[#22B8B0]/20",
  },
  {
    title: "Relationships",
    pass: "Pass 3",
    body: "The people who shaped how she works. A mentor who taught her to scope. A cofounder who never shipped anything. An abuela who read upside-down. Each one becomes a relationship ghost in the memory store.",
    example:
      "&ldquo;My first PM taught me that a meeting without a decision is a meeting that should have been an email.&rdquo;",
    accent: "text-[#9B4FCC]",
    color: "border-[#9B4FCC]/20",
  },
  {
    title: "Sensory fragments",
    pass: "Pass 4",
    body: "Involuntary sensory memories. Ten to fifteen words each. Cheapest type to store and highest-yield at conversation time. Three load randomly into the Vibes Layer on every call.",
    example:
      "&ldquo;The smell of printer toner at 2am before a demo. Cold coffee. Everyone too tired to talk.&rdquo;",
    accent: "text-[#E7B83D]",
    color: "border-[#E7B83D]/20",
  },
];

export default function FourPassesSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Four passes of life.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            The Life Generator writes in layers, each one richer than the
            last. What comes out is not a resume. It is a person with a
            history.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {passes.map((p) => (
            <FadeIn key={p.title}>
              <div
                className={`h-full rounded-[24px] border-2 ${p.color} bg-[#F7F5F2] p-6`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.16em] ${p.accent}`}
                >
                  {p.pass}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[#2E2A7B]">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4A4D73]">
                  {p.body}
                </p>
                <p
                  className="mt-4 rounded-2xl bg-white p-4 text-sm italic leading-relaxed text-[#2E2A7B] ring-1 ring-black/5"
                  dangerouslySetInnerHTML={{ __html: p.example }}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
