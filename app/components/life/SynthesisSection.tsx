import FadeIn from "../FadeIn";

const buckets = [
  {
    title: "Core memories",
    body: "Twenty or so events that anchor who she is. The startup. The kiln. The beach in San Jos&eacute;.",
    accent: "bg-[#F46F61]",
  },
  {
    title: "Relationship ghosts",
    body: "People she carries forward. A mentor, a cofounder, an abuela. They show up in how she reviews your code.",
    accent: "bg-[#9B4FCC]",
  },
  {
    title: "Opinions",
    body: "Beliefs forged from specific experience. &ldquo;Polish is the last thing you add, not the reason you&rsquo;re late.&rdquo;",
    accent: "bg-[#22B8B0]",
  },
  {
    title: "Sensory compilation",
    body: "A deck of ten to fifteen-word fragments. Three load randomly into every Vibes call.",
    accent: "bg-[#E7B83D]",
  },
];

export default function SynthesisSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            What Sofia ships with.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            After the biography is generated and compressed, synthesis
            produces the memories Sofia actually carries with her. This is
            what sits in the database on her first day.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {buckets.map((b) => (
            <FadeIn key={b.title}>
              <div className="h-full rounded-[24px] bg-[#F7F5F2] p-6 ring-1 ring-black/5">
                <div className="flex items-center gap-3">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${b.accent}`}
                    aria-hidden="true"
                  />
                  <h3 className="text-base font-semibold text-[#2E2A7B]">
                    {b.title}
                  </h3>
                </div>
                <p
                  className="mt-3 text-sm leading-relaxed text-[#4A4D73]"
                  dangerouslySetInnerHTML={{ __html: b.body }}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
