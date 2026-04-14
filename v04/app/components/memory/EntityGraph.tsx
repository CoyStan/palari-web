import FadeIn from "../FadeIn";

export default function EntityGraph() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9B4FCC]">
            Entity graph
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            People, places, and projects are connected.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            A flat list of facts cannot answer &ldquo;what did Beto say
            about the auth refactor?&rdquo; if the fact was filed under
            Roberto. Palari stores entities once, with every alias you use,
            so the same person resolves across weeks of conversation.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-[24px] border border-black/5 bg-[#F7F5F2] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#22B8B0]">
                Alias resolution
              </p>
              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3">
                  <code className="rounded bg-white px-2 py-1 text-xs font-semibold text-[#2E2A7B] ring-1 ring-black/5">
                    Roberto
                  </code>
                  <span className="text-[#5B5E84]/50">&rarr;</span>
                  <code className="rounded bg-white px-2 py-1 text-xs font-semibold text-[#2E2A7B] ring-1 ring-black/5">
                    Rob
                  </code>
                  <span className="text-[#5B5E84]/50">&rarr;</span>
                  <code className="rounded bg-white px-2 py-1 text-xs font-semibold text-[#2E2A7B] ring-1 ring-black/5">
                    Beto
                  </code>
                </div>
                <p className="text-sm leading-relaxed text-[#4A4D73]">
                  All three strings resolve to the same entity. Sofia
                  knows they are the same person whether you wrote it in
                  English, in Spanish, or in a nickname.
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <code className="rounded bg-white px-2 py-1 text-xs font-semibold text-[#2E2A7B] ring-1 ring-black/5">
                    the dog
                  </code>
                  <span className="text-[#5B5E84]/50">&harr;</span>
                  <code className="rounded bg-white px-2 py-1 text-xs font-semibold text-[#2E2A7B] ring-1 ring-black/5">
                    mi perro
                  </code>
                  <span className="text-[#5B5E84]/50">&harr;</span>
                  <code className="rounded bg-white px-2 py-1 text-xs font-semibold text-[#2E2A7B] ring-1 ring-black/5">
                    Lola
                  </code>
                </div>
                <p className="text-sm leading-relaxed text-[#4A4D73]">
                  When you mention the dog on Monday and Lola on Friday,
                  Sofia knows it&rsquo;s the same animal.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="h-full rounded-[24px] border border-black/5 bg-[#F7F5F2] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F46F61]">
                Memory links
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#4A4D73]">
                Memories also link to each other. A memory_link captures
                how two facts relate. When Sofia pulls one, she can walk
                the edges to find the rest of the story.
              </p>
              <div className="mt-5 space-y-3 text-sm">
                <div className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
                  <code className="text-xs font-semibold text-[#9B4FCC]">
                    same_topic
                  </code>
                  <p className="mt-1 text-[#4A4D73]">
                    Two memories about the same project or person.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
                  <code className="text-xs font-semibold text-[#22B8B0]">
                    caused_by
                  </code>
                  <p className="mt-1 text-[#4A4D73]">
                    One memory explains another: the decision caused the
                    regression.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
                  <code className="text-xs font-semibold text-[#F46F61]">
                    contradicts
                  </code>
                  <p className="mt-1 text-[#4A4D73]">
                    One memory supersedes another. Useful when a plan
                    changes.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
