import FadeIn from "../FadeIn";

type MemoryType = {
  name: string;
  brain: "Vibes Layer" | "Analytical" | "Both";
  accent: string;
  description: string;
  example: string;
};

const memoryTypes: MemoryType[] = [
  {
    name: "Life Events",
    brain: "Vibes Layer",
    accent: "bg-[#F46F61]",
    description: "Defining moments from a Palari\u2019s generated life",
    example: "The summer she spent cataloging a library in Oaxaca",
  },
  {
    name: "Sensory Memories",
    brain: "Vibes Layer",
    accent: "bg-[#E7B83D]",
    description: "Involuntary sensory fragments \u2014 smells, sounds, textures",
    example: "The sound of rain on a tin roof during a power outage",
  },
  {
    name: "Relationship Memories",
    brain: "Both",
    accent: "bg-[#22B8B0]",
    description: "Who you are, how you communicate, what matters to you",
    example: "Prefers direct feedback, hates corporate jargon",
  },
  {
    name: "Opinion Memories",
    brain: "Both",
    accent: "bg-[#9B4FCC]",
    description: "Beliefs forged by specific experiences, not generic knowledge",
    example: "Thinks deadlines should be aggressive \u2014 learned from a project that drifted",
  },
  {
    name: "Working Memories",
    brain: "Analytical",
    accent: "bg-[#2E2A7B]",
    description: "Practical knowledge about your files, projects, and workflows",
    example: "The Q3 report lives in the shared drive, uses the new template",
  },
  {
    name: "Preference Memories",
    brain: "Analytical",
    accent: "bg-[#22B8B0]",
    description: "How you like things done \u2014 formatting, tone, structure",
    example: "Summaries first, details on request. Never use the word \u2018utilize.\u2019",
  },
  {
    name: "Recent Context",
    brain: "Both",
    accent: "bg-[#F46F61]",
    description: "What happened today and this week \u2014 the short-term thread",
    example: "You mentioned Friday\u2019s deadline twice \u2014 it\u2019s clearly important",
  },
];

const brainPillStyle: Record<MemoryType["brain"], string> = {
  "Vibes Layer": "bg-[#F46F61]/10 text-[#F46F61]",
  Analytical: "bg-[#2E2A7B]/10 text-[#2E2A7B]",
  Both: "bg-[#22B8B0]/10 text-[#22B8B0]",
};

export default function MemoryTypesGrid() {
  return (
    <section className="bg-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22B8B0]">
              Memory Types
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              Seven kinds of memory. One coherent person.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4A4D73]">
              Each memory type serves a different purpose. Together, they create continuity that
              feels human.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {memoryTypes.slice(0, 4).map((mem) => (
            <FadeIn key={mem.name}>
              <article className="flex h-full flex-col rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-black/5">
                <div className={`mb-4 h-3 w-16 rounded-full ${mem.accent}`} />
                <span
                  className={`mb-3 w-fit rounded-full px-3 py-1 text-xs font-semibold ${brainPillStyle[mem.brain]}`}
                >
                  {mem.brain}
                </span>
                <h3 className="text-lg font-semibold text-[#2E2A7B]">{mem.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#535778]">
                  {mem.description}
                </p>
                <p className="mt-4 text-sm italic text-[#5B5E84]/70">&ldquo;{mem.example}&rdquo;</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mx-auto mt-5 grid max-w-[calc(75%+0.625rem)] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {memoryTypes.slice(4).map((mem) => (
            <FadeIn key={mem.name}>
              <article className="flex h-full flex-col rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-black/5">
                <div className={`mb-4 h-3 w-16 rounded-full ${mem.accent}`} />
                <span
                  className={`mb-3 w-fit rounded-full px-3 py-1 text-xs font-semibold ${brainPillStyle[mem.brain]}`}
                >
                  {mem.brain}
                </span>
                <h3 className="text-lg font-semibold text-[#2E2A7B]">{mem.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#535778]">
                  {mem.description}
                </p>
                <p className="mt-4 text-sm italic text-[#5B5E84]/70">&ldquo;{mem.example}&rdquo;</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
