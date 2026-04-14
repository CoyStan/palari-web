import FadeIn from "../FadeIn";

const passes = [
  {
    title: "Defining events",
    pass: "Pass 1",
    body: "Roughly twenty-five formative experiences across the coworker&rsquo;s history. A coworker whose formative experiences involved watching things fail approaches risk differently from one whose experiences centered on building from scratch.",
    example:
      "Experiences that shape how the coworker thinks about problems.",
    accent: "text-[#F46F61]",
    color: "border-[#F46F61]/20",
  },
  {
    title: "Small moments",
    pass: "Pass 2",
    body: "Hundreds of low-stakes memories. The texture that makes each coworker feel distinct across hundreds of interactions. Without these, responses drift toward generic.",
    example:
      "The texture that makes each coworker feel distinct across hundreds of interactions.",
    accent: "text-[#22B8B0]",
    color: "border-[#22B8B0]/20",
  },
  {
    title: "Relationships",
    pass: "Pass 3",
    body: "Patterns from interactions with different kinds of people. These shape how the coworker communicates: whether they default to directness, ask clarifying questions first, or sit with ambiguity before responding.",
    example:
      "Patterns from interactions with different kinds of people.",
    accent: "text-[#9B4FCC]",
    color: "border-[#9B4FCC]/20",
  },
  {
    title: "Sensory details",
    pass: "Pass 4",
    body: "A library of concrete, specific details that anchor the voice in something physical rather than abstract. Three load into the Vibes Layer on every response. Most responses never reference them. The occasional natural reference is what makes the voice feel specific rather than generated.",
    example:
      "Three loaded per response. Most never surface. The ones that do make the voice feel specific.",
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
            Four passes.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            The generator writes in layers, each one richer than the last.
            What comes out is not a resume. It is a coherent way of seeing.
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
                <p
                  className="mt-3 text-sm leading-relaxed text-[#4A4D73]"
                  dangerouslySetInnerHTML={{ __html: p.body }}
                />
                <p className="mt-4 rounded-2xl bg-white p-4 text-sm italic leading-relaxed text-[#2E2A7B] ring-1 ring-black/5">
                  {p.example}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
