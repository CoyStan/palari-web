import FadeIn from "../FadeIn";

export default function MemoryNotStorage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            The filing cabinet is a dead end
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="mt-8 space-y-6 text-lg leading-8 text-[#4A4D73]">
            <p>
              Every AI company eventually adds &ldquo;memory.&rdquo; They store your name, your
              preferences, maybe a few facts. Then they retrieve those facts when they seem relevant.
              It feels like progress until you realize it&apos;s just a search engine with a
              personality.
            </p>
            <p>
              Real memory doesn&apos;t work that way. You don&apos;t remember your first day at work
              because you filed it under &ldquo;career milestones.&rdquo; You remember it because it
              was terrifying, or exciting, or because someone said something kind. The emotion is the
              anchor. Everything else fades.
            </p>
            <p>
              Palari&apos;s memory system is built on this insight. Memories that matter get
              reinforced every time they&apos;re accessed. Memories that don&apos;t matter naturally
              decay. And over time, clusters of related memories compress into something
              richer&mdash;not facts, but understanding.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="rounded-[20px] bg-white/60 p-6 ring-1 ring-black/5">
              <h3 className="text-lg font-semibold text-[#5B5E84]">Traditional AI Memory</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#535778]">
                <li>&bull; Stores facts as key-value pairs</li>
                <li>&bull; Every memory is equally important</li>
                <li>&bull; Grows without limit until pruned</li>
                <li>&bull; No connection between memories</li>
              </ul>
            </div>
            <div className="rounded-[20px] bg-white p-6 shadow-sm ring-2 ring-[#22B8B0]/20">
              <h3 className="text-lg font-semibold text-[#2E2A7B]">Palari Memory</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#535778]">
                <li>&bull; Seven distinct memory types</li>
                <li>&bull; Importance changes over time</li>
                <li>&bull; Old memories compress into understanding</li>
                <li>&bull; Memories shape personality and behavior</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
