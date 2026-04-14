import FadeIn from "../FadeIn";

const layers = [
  {
    name: "Planning Layer",
    role: "Decides what to do",
    detail:
      "Classifies the task, checks your budget, picks the right model, and pulls the memories it needs to make the call.",
    accent: "border-[#9B4FCC]/25 bg-[#F5F0FF]",
    dot: "bg-[#9B4FCC]",
  },
  {
    name: "Mama Model",
    role: "Does the work",
    detail:
      "Claude, GPT, or whichever model the task demands. Receives a tight memory bundle (about 800 tokens) so it answers with the context that matters and nothing else.",
    accent: "border-[#22B8B0]/25 bg-[#F0F9F8]",
    dot: "bg-[#22B8B0]",
  },
  {
    name: "Vibes Layer",
    role: "Makes it sound like her",
    detail:
      "Rewrites the raw answer in Sofia&rsquo;s voice. Same model underneath. A specific person on top. This is where a life event, a sensory fragment, or an opinion lands in the reply.",
    accent: "border-[#F46F61]/25 bg-[#FFF4F1]",
    dot: "bg-[#F46F61]",
  },
];

export default function TwoBrainDiagram() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Three consumers of memory.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            Every message flows through a planning step, the Mama Model
            that does the work, and the Vibes Layer that makes the answer
            sound like your Palari. Each layer gets exactly the memories
            it needs.
          </p>
        </FadeIn>

        <div className="mt-12 space-y-4">
          {layers.map((layer, i) => (
            <FadeIn key={layer.name}>
              <div className="flex items-start gap-5">
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#2E2A7B] shadow-sm ring-1 ring-black/5">
                  {i + 1}
                </div>
                <div
                  className={`flex-1 rounded-[24px] border ${layer.accent} p-6`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${layer.dot}`}
                      aria-hidden="true"
                    />
                    <h3 className="text-base font-semibold text-[#2E2A7B]">
                      {layer.name}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.16em] text-[#5B5E84]/70">
                      {layer.role}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#4A4D73]">
                    {layer.detail}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
