import FadeIn from "../FadeIn";

const levels = [
  {
    name: "Private",
    badge: "Default",
    badgeColor: "bg-[#2E2A7B] text-white",
    body: "Only the Palari who observed it can see it. Sofia&rsquo;s memories are Sofia&rsquo;s. Leo has no idea what Sofia noticed, unless you change that.",
  },
  {
    name: "Org-readable",
    badge: "Shared read",
    badgeColor: "bg-[#22B8B0] text-white",
    body: "Any Palari in the workspace can read it. Good for team facts (&ldquo;the release branch is always main-rc&rdquo;). Nobody writes to someone else&rsquo;s memory.",
  },
  {
    name: "Propagated on request",
    badge: "Explicit",
    badgeColor: "bg-[#F46F61] text-white",
    body: "You actively tell one Palari to send a specific memory to another. Sofia learns something. You say &ldquo;pass this to Leo.&rdquo; Now both have it.",
  },
];

export default function MemoryIsolationSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9B4FCC]">
            Memory isolation
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Memories don&rsquo;t leak between coworkers by default.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            A Palari&rsquo;s memory is hers. It isn&rsquo;t automatically
            shared with the rest of the workspace. If you want information
            to reach another coworker, you choose when, and through which
            of three channels.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {levels.map((l) => (
            <FadeIn key={l.name}>
              <div className="h-full rounded-[24px] bg-[#F7F5F2] p-6 ring-1 ring-black/5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-[#2E2A7B]">
                    {l.name}
                  </h3>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${l.badgeColor}`}
                  >
                    {l.badge}
                  </span>
                </div>
                <p
                  className="mt-3 text-sm leading-relaxed text-[#4A4D73]"
                  dangerouslySetInnerHTML={{ __html: l.body }}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
