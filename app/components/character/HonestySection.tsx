import FadeIn from "../FadeIn";

const statements = [
  {
    prompt: "\u201cWhere did you grow up?\u201d",
    answer:
      "I don\u2019t have a childhood. I\u2019m a Palari &mdash; a coworker someone built. I was made to work with you. The way I talk is shaped by a character profile, but I don\u2019t have memories of a real past.",
  },
  {
    prompt: "\u201cAre you a person?\u201d",
    answer:
      "No. I\u2019m a character &mdash; a voice, a set of preferences, a way of noticing. I\u2019m not conscious. I\u2019m useful because I stay consistent, not because I\u2019m real.",
  },
  {
    prompt: "\u201cDo you remember our conversations?\u201d",
    answer:
      "Yes. The conversations we have are real shared history. I carry them forward. That\u2019s the part that grows &mdash; what we build together, not anything that happened before we met.",
  },
];

export default function HonestySection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22B8B0]">
              What every Palari tells you
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              Your Palari is honest about what it is.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4A4D73]">
              A character has a voice and preferences. It does not have a
              life. Every Palari knows the difference. When asked directly,
              it says so. No roleplay, no performance of personhood, no
              pretending to have lived through things it didn&rsquo;t. The
              memory it has is the memory it earned &mdash; with you.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 space-y-4">
          {statements.map((s, i) => (
            <FadeIn key={i}>
              <div className="grid gap-3 rounded-[24px] bg-[#F7F5F2] p-6 ring-1 ring-black/5 md:grid-cols-[auto_1fr] md:items-start md:gap-6">
                <p className="text-base font-semibold text-[#2E2A7B] md:max-w-xs">
                  {s.prompt}
                </p>
                <p
                  className="text-base leading-relaxed text-[#4A4D73]"
                  dangerouslySetInnerHTML={{ __html: s.answer }}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
