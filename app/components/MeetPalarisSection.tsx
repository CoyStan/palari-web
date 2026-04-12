import FadeIn from "./FadeIn";

type PalariCard = {
  name: string;
  role: string;
  description: string;
  badge: string;
  message: string;
  avatarGradient: string;
};

const palaris: PalariCard[] = [
  {
    name: "Sofia",
    role: "Frontend Engineer",
    description:
      "Casual, direct, and gets excited about clean code. She reviews your components, fixes bugs, and pushes back when the architecture feels wrong.",
    badge: "Powered by Claude",
    message: "found the bug, auth middleware runs before session loads. easy fix, want me to push it?",
    avatarGradient: "from-[#F8C5C5] to-[#F3A9A9]",
  },
  {
    name: "Leo",
    role: "Backend Engineer",
    description:
      "Structured, minimal, shows working code instead of long explanations. Flags blockers early and protects your database.",
    badge: "Powered by Codex",
    message: "N+1 in the dashboard. 251 queries for 250 users. one JOIN fixes it. should I?",
    avatarGradient: "from-[#C8D8FF] to-[#AFC4FF]",
  },
  {
    name: "Alfred",
    role: "Coordinator",
    description:
      "Reads every Palari's work, summarizes your week, and tells you where to focus. Calls you Sr.",
    badge: "Your weekly briefing",
    message:
      "Good morning, Sr. Two items need your attention today. Everything else is on track.",
    avatarGradient: "from-[#C9F6E9] to-[#A6E9D5]",
  },
];

export default function MeetPalarisSection() {
  return (
    <FadeIn>
      <section className="bg-[#F8F9FC] py-24 md:py-32">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] md:text-4xl">Meet your team</h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {palaris.map((palari) => (
              <article
                key={palari.name}
                className="rounded-2xl border border-gray-200/70 bg-white p-8 shadow-sm"
              >
                <div
                  className={`mb-6 h-24 w-24 rounded-full bg-gradient-to-br ${palari.avatarGradient}`}
                >
                  {/* DROP PALARI AVATAR IMAGE HERE */}
                </div>

                <h3 className="text-2xl font-bold text-[#1B2A4A]">{palari.name}</h3>
                <p className="mt-1 text-sm font-medium text-gray-500">{palari.role}</p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">{palari.description}</p>

                <span className="mt-5 inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  {palari.badge}
                </span>

                <div className="mt-6 rounded-xl border border-gray-200 bg-[#F6F7FB] p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-7 w-7 rounded-full bg-gradient-to-br from-[#D2DAF8] to-[#C1CDEB]" />
                    <p className="font-mono text-[0.88rem] leading-relaxed text-[#334155]">{palari.message}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-base italic text-gray-500">
            Personas are fully customizable. Create as many Palaris as your team needs.
          </p>
        </div>
      </section>
    </FadeIn>
  );
}
