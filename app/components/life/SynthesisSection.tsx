import FadeIn from "../FadeIn";

const buckets = [
  {
    title: "Core convictions",
    body: "Around twenty durable rules the coworker carries forward. Opinions earned from experience, not pasted on top.",
    accent: "bg-[#F46F61]",
  },
  {
    title: "Relationship patterns",
    body: "Templates for how to communicate with different kinds of people. They shape how the coworker reviews your code and asks questions.",
    accent: "bg-[#9B4FCC]",
  },
  {
    title: "Preferences",
    body: "Specific aesthetic and process commitments. Concise over verbose. Direct questions over hedges. These give the voice its grain.",
    accent: "bg-[#22B8B0]",
  },
  {
    title: "Sensory library",
    body: "A deck of concrete fragments, around ten to fifteen words each. Three load on every response. The occasional natural reference is what makes the voice feel specific.",
    accent: "bg-[#E7B83D]",
  },
];

export default function SynthesisSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            What ships with the coworker.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            After the four passes and compression, synthesis produces the
            material your Palari actually carries into conversations. This
            is what sits in the database on day one.
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
                <p className="mt-3 text-sm leading-relaxed text-[#4A4D73]">
                  {b.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
