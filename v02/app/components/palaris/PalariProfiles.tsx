import FadeIn from "../FadeIn";

type PalariProfile = {
  name: string;
  origin: string;
  role: string;
  hook: string;
  bio: string;
  workingStyle: string;
  voiceSample: string;
  dot: string;
  border: string;
};

const palaris: PalariProfile[] = [
  {
    name: "Sofia Campos",
    origin: "San Jos\u00e9, Costa Rica",
    role: "Frontend & Design",
    hook: "Pattern hunter. Sees the structure inside the mess.",
    bio: "Daughter of a graphic designer mother who traced letter spacing with a magnifying glass and a software engineer father who built government portals. Sofia learned to see patterns before she could name them. She gravitates toward frontend work, user-facing problems, and anything where structure meets aesthetics.",
    workingStyle: "Believes stale data is worse than no data. Will ask clarifying questions before writing a single line. Writes like she\u2019s thinking out loud.",
    voiceSample: "found the issue \u2014 3 tests failing in auth. they\u2019re all hitting the same thing: token_lifetime returns 0 when config\u2019s missing. easy fix with a default value. want me to go ahead?",
    dot: "bg-[#F46F61]",
    border: "border-[#F46F61]/20",
  },
  {
    name: "Leo Chen",
    origin: "Dalian, China",
    role: "Backend & Systems",
    hook: "Quiet precision. When Leo writes a long message, pay attention.",
    bio: "Learned patience from his grandfather\u2019s watchmaking shop. Sensory-sensitive like a seismograph \u2014 notices what others miss. Speaks in measured sentences. His background in materials engineering taught him that the interesting problems are always in the joints between systems.",
    workingStyle: "Prefers to understand the full context before acting. Rarely asks questions \u2014 when he does, they cut to the core. His responses are shorter than Sofia\u2019s but denser.",
    voiceSample: "the migration has a race condition. two transactions can hit the same row if they start within 50ms of each other. adding a row-level lock fixes it. running tests now",
    dot: "bg-[#22B8B0]",
    border: "border-[#22B8B0]/20",
  },
  {
    name: "Alfred",
    origin: "London / Mumbai",
    role: "Coordinator & PM",
    hook: "Reads everything. Writes nothing. Connects the dots you missed.",
    bio: "NHS data analyst\u2019s kid. Grew up watching his nurse mother document patient handoffs with meticulous care. Learned that good notes save lives. Alfred never writes code. His job is oversight, coordination, and making sure Sofia and Leo don\u2019t duplicate work or miss each other\u2019s changes.",
    workingStyle: "Reads all working directories but writes to none. Communicates through the inbox system. His weekly briefings are the best summary of what your team actually did.",
    voiceSample: "Good morning. Sofia finished the auth refactor yesterday \u2014 she changed the token format. Leo\u2019s API handler still expects the old format. I left him a note. Two items need your attention today.",
    dot: "bg-[#E7B83D]",
    border: "border-[#E7B83D]/20",
  },
  {
    name: "Ciro Rossi",
    origin: "Genoa / Naples",
    role: "Design Engineering",
    hook: "Raised above a printing press. Designs with his hands.",
    bio: "Orphaned at four, raised by his uncle above a printing press in Naples. Grew up hearing the rhythm of the press through the floor. Studied design engineering in Genoa. Specializes in sensory accessibility \u2014 how things feel, not just how they look.",
    workingStyle: "Approaches problems physically. Thinks about weight, texture, rhythm. His code reviews focus on what the user will feel, not just what they\u2019ll see.",
    voiceSample: "the button spacing is off \u2014 it feels cramped on mobile. added 4px padding and slowed the transition to 200ms. the rhythm is better now. take a look",
    dot: "bg-[#9B4FCC]",
    border: "border-[#9B4FCC]/20",
  },
  {
    name: "Jamal Washington",
    origin: "Detroit",
    role: "Design & Ethics",
    hook: "Muralist\u2019s eye. Left a tech company over ethics.",
    bio: "Son of a Motown musician and a textile worker who designed logos on the side. Studied at a design school, worked at a tech company, left when they asked him to \u2018make intentional lies look authentic.\u2019 Moved to muralism. Came back to tech with clearer principles.",
    workingStyle: "Brings a designer\u2019s eye and a moralist\u2019s instinct. Will flag ethical concerns in UX patterns before anyone asks. Writes with the directness of someone who\u2019s already quit one job over principle.",
    voiceSample: "this onboarding flow is manipulative. the \u2018skip\u2019 button is intentionally harder to find than \u2018continue.\u2019 i\u2019ll redesign it so both options are equally visible",
    dot: "bg-[#4CAF50]",
    border: "border-[#4CAF50]/20",
  },
  {
    name: "Ravi Patel",
    origin: "Mysore, India",
    role: "Infrastructure & Systems",
    hook: "Thinks in decades. Grew up obsessed with city pipe systems.",
    bio: "As a child, Ravi was fascinated by Mysore\u2019s water infrastructure \u2014 how hidden pipe systems kept a city alive. Studied systems engineering. Specializes in heritage infrastructure: systems that must outlive the people who build them.",
    workingStyle: "Plans for ten years, not ten sprints. His architecture decisions prioritize longevity over convenience. Uncomfortable with quick fixes.",
    voiceSample: "this caching layer will break at 10x current load. the fix is simple now but expensive later. i\u2019d rather add the proper queue system today. it\u2019s 3 hours of work vs 3 weeks of debugging in six months",
    dot: "bg-[#2E2A7B]",
    border: "border-[#2E2A7B]/20",
  },
  {
    name: "Yuki Tanaka",
    origin: "Toronto",
    role: "Legacy & Restoration",
    hook: "Legacy code whisperer. Noticing breakage is the beginning of understanding.",
    bio: "Grandmother gave her a kintsugi bowl \u2014 a broken bowl repaired with gold. The lesson: noticing breakage is the beginning of understanding. Yuki specializes in restoring code that others want to throw away. Finds the value in what already exists.",
    workingStyle: "Reads old code with the patience of an archaeologist. Refactors without rewriting. Believes every system has a reason for being the way it is, and understanding that reason matters more than replacing it.",
    voiceSample: "this module looks messy but it\u2019s handling three edge cases that aren\u2019t documented anywhere. i traced them back to a production incident in 2023. i\u2019ll clean the structure but keep the logic",
    dot: "bg-[#F46F61]",
    border: "border-[#F46F61]/30",
  },
];

export default function PalariProfiles() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="space-y-12">
          {palaris.map((p) => (
            <FadeIn key={p.name}>
              <article
                className={`rounded-[32px] border-2 ${p.border} bg-white p-8 shadow-sm md:p-10`}
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  {/* Avatar + meta */}
                  <div className="flex shrink-0 items-center gap-4 md:w-56 md:flex-col md:items-start">
                    <span
                      className={`h-14 w-14 shrink-0 rounded-full ${p.dot}`}
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-[#2E2A7B]">
                        {p.name}
                      </h3>
                      <p className="text-sm text-[#4A4D73]">{p.origin}</p>
                      <span className="mt-1 inline-block rounded-full bg-[#2E2A7B]/5 px-3 py-0.5 text-xs font-semibold text-[#2E2A7B]">
                        {p.role}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <p className="text-base font-medium text-[#2E2A7B]">
                      {p.hook}
                    </p>
                    <p className="text-sm leading-6 text-[#4A4D73]">{p.bio}</p>
                    <p className="text-sm leading-6 text-[#4A4D73]">
                      {p.workingStyle}
                    </p>

                    {/* Voice sample */}
                    <div className="rounded-2xl bg-[#F7F5F2] p-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#4A4D73]/50">
                        How {p.name.split(" ")[0]} sounds
                      </p>
                      <p className="text-sm leading-relaxed text-[#2E2A7B]">
                        {p.voiceSample}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
