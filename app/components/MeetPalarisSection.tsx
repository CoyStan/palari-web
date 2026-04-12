import FadeIn from "./FadeIn";

type ConversationLine = {
  speaker: "User" | "Sofia" | "Leo" | "Alfred";
  text: string;
};

type PalariProfile = {
  name: string;
  role: string;
  story: string;
  badge: string;
  avatarClass: string;
  lines: ConversationLine[];
};

const palaris: PalariProfile[] = [
  {
    name: "Sofia",
    role: "Frontend Engineer",
    story:
      "Sofia is from Guadalajara. She studied CS, dropped out to build things, and never looked back. She gets excited about clean component architecture and slightly annoyed when people skip TypeScript types. She is currently reading Dune Messiah and will tell you about it if you ask. On slow days she sends shorter messages. On good days she adds 'lol' to things that aren't that funny. She remembers every project she has worked on with you.",
    badge: "Powered by Claude",
    avatarClass: "from-[#FFE5DD] via-[#FADFD6] to-[#F8CFC2]",
    lines: [
      { speaker: "User", text: "sofia the login page is broken on mobile" },
      { speaker: "Sofia", text: "found it, viewport meta tag is missing" },
      { speaker: "Sofia", text: "easy fix, want me to push it?" },
    ],
  },
  {
    name: "Leo",
    role: "Backend Engineer",
    story:
      "Leo doesn't say much. When he does, it's usually three words and a code block. He thinks ORMs are overengineered and will die on that hill. He flags problems before they become emergencies and gets quietly satisfied when a query drops from 2 seconds to 50 milliseconds. He has never used an exclamation mark in Slack.",
    badge: "Powered by Codex",
    avatarClass: "from-[#DEE8FF] via-[#C9DAFF] to-[#B8CBFF]",
    lines: [
      { speaker: "User", text: "the dashboard is slow" },
      { speaker: "Leo", text: "N+1 query. 251 calls for 250 users. one JOIN fixes it" },
      { speaker: "Leo", text: "should I?" },
    ],
  },
  {
    name: "Alfred",
    role: "Coordinator",
    story:
      "Alfred reads everything your team does. Every commit, every thread, every standup. He synthesizes it into the one message you actually need to read on Monday morning. He calls you Sr. because that is who you are to him. He will never waste your time. If Alfred sends you a message, it matters.",
    badge: "Your weekly briefing",
    avatarClass: "from-[#D4F7EC] via-[#C4EEDD] to-[#B0E6D0]",
    lines: [
      {
        speaker: "Alfred",
        text: "Good morning, Sr. Two items need your attention today. Sofia finished the auth refactor. Leo is blocked on the migration and needs your input. Everything else is on track.",
      },
    ],
  },
];

const lineAvatarClass: Record<ConversationLine["speaker"], string> = {
  User: "bg-gradient-to-br from-[#CFDAFF] to-[#AFC2F5]",
  Sofia: "bg-gradient-to-br from-[#FFD8C6] to-[#F5B9A2]",
  Leo: "bg-gradient-to-br from-[#DCE7FF] to-[#B4CAFF]",
  Alfred: "bg-gradient-to-br from-[#D4F5E9] to-[#9DDCC6]",
};

export default function MeetPalarisSection() {
  return (
    <FadeIn>
      <section className="scroll-mt-28 py-24 md:py-32" id="meet-team">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] md:text-4xl">Meet your team</h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {palaris.map((palari) => (
              <article
                key={palari.name}
                className="rounded-3xl border border-[#E8DDD4] bg-white p-7 shadow-sm md:p-8"
              >
                <div className={`h-52 w-full rounded-2xl bg-gradient-to-br ${palari.avatarClass}`}>
                  {/* IMAGE: Portrait placeholder for this Palari in a warm coworking setting with natural light, desk details, and a candid documentary feel. */}
                </div>

                <h3 className="mt-6 text-3xl font-bold tracking-tight text-[#1B2A4A]">{palari.name}</h3>
                <p className="mt-1 text-sm font-medium text-gray-500">{palari.role}</p>

                <p className="mt-5 text-[0.99rem] leading-relaxed text-gray-600">{palari.story}</p>

                <div className="mt-7 rounded-2xl border border-gray-200 bg-[#F7F8FB] p-4 shadow-sm">
                  <div className="space-y-3">
                    {palari.lines.map((line, index) => (
                      <div key={`${line.speaker}-${index}`} className="flex items-start gap-3">
                        <span
                          className={`mt-1 h-6 w-6 shrink-0 rounded-full ${lineAvatarClass[line.speaker]}`}
                          aria-hidden="true"
                        />
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
                            {line.speaker}
                          </p>
                          <p className="mt-1 rounded-xl bg-white px-3 py-2 text-sm leading-relaxed text-[#3C4A5F] shadow-sm ring-1 ring-gray-100">
                            {line.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-5 text-xs italic tracking-wide text-gray-400">{palari.badge}</p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-base italic text-gray-500">
            Every Palari is different. Create your own with any name, any personality, any
            expertise. They grow with you.
          </p>
        </div>
      </section>
    </FadeIn>
  );
}
