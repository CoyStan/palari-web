import FadeIn from "../FadeIn";

const synthesisPasses = [
  {
    title: "Core Memories",
    description:
      "The defining moments that shaped who this Palari became. The experiences they\u2019d tell you about over coffee.",
    color: "#F46F61",
  },
  {
    title: "Relationship Ghosts",
    description:
      "The people who left a mark\u2014mentors, friends, rivals. Not the full story, but the echo they left behind.",
    color: "#9B4FCC",
  },
  {
    title: "Experience-Forged Opinions",
    description:
      "Strong opinions, loosely held\u2014but earned through experience, not assigned by a prompt. \u201CI think deadlines matter because I watched a company die without them.\u201D",
    color: "#22B8B0",
  },
  {
    title: "Sensory Compilation",
    description:
      "A library of smells, sounds, textures, and tastes that anchor this Palari\u2019s memories in something physical. The details that make a person feel real.",
    color: "#E7B83D",
  },
];

export default function SynthesisSection() {
  return (
    <section className="bg-gradient-to-b from-[#EEEAF8]/30 to-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9B4FCC]">
            Synthesis
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            From years to a person
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            After generating and compressing 28 years of experiences, four synthesis passes
            crystallize everything into a coherent identity.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {synthesisPasses.map((pass, i) => (
              <article
                key={pass.title}
                className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: pass.color }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-[#2E2A7B]">{pass.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#535778]">{pass.description}</p>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
