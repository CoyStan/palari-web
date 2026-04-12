"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";

type ConversationLine = {
  speaker: "User" | "Sofia" | "Leo" | "Alfred" | "Maya";
  text: string;
};

type PalariProfile = {
  name: string;
  role: string;
  eyebrow: string;
  story: string;
  badge: string;
  accentColor: string;
  bgClass: string;
  avatarBg: string;
  lines: ConversationLine[];
};

const palaris: PalariProfile[] = [
  {
    name: "Sofia",
    role: "Your operations Palari",
    eyebrow: "Operations Palari",
    story:
      "Sofia reads your documents faster than anyone on your team. But what makes her a Palari is that she remembers\u2014the last version she reviewed, the style you prefer, the budget format your CFO likes. She catches the inconsistency on page 12 that nobody else noticed. When you share a Google Doc, she already knows how you like changes presented.",
    badge: "Powered by Claude",
    accentColor: "bg-[#F46F61]",
    bgClass: "bg-[#FFF5F0]",
    avatarBg: "bg-gradient-to-br from-[#FFE5DD] via-[#FADFD6] to-[#F8CFC2]",
    lines: [
      { speaker: "User", text: "sofia the quarterly report still has last month's numbers in the summary" },
      { speaker: "Sofia", text: "found them, 3 cells in the summary table are outdated" },
      { speaker: "Sofia", text: "want me to update them from the raw data sheet?" },
    ],
  },
  {
    name: "Leo",
    role: "Your data Palari",
    eyebrow: "Data Palari",
    story:
      "Leo handles the work you keep postponing. But unlike a tool you open fresh every time, Leo remembers where your data lives, which columns matter, and how you formatted it last quarter. The weekly report that used to take two hours? Leo already knows the template. Give him the boring stuff and he gives you back your afternoon.",
    badge: "Powered by Codex",
    accentColor: "bg-[#22B8B0]",
    bgClass: "bg-[#F0F4FF]",
    avatarBg: "bg-gradient-to-br from-[#DEE8FF] via-[#C9DAFF] to-[#B8CBFF]",
    lines: [
      { speaker: "User", text: "leo can you pull last week's expenses into the tracker" },
      { speaker: "Leo", text: "added 14 entries. total: $4,200. travel was 60%" },
      { speaker: "Leo", text: "want me to flag anything over $500 for review?" },
    ],
  },
  {
    name: "Alfred",
    role: "Your coordinator Palari",
    eyebrow: "Coordinator Palari",
    story:
      "Alfred carries the memory of your entire team. Every document updated, every task completed, everything that\u2019s stuck. Monday morning you type /pal report and Alfred tells you exactly what happened last week, what changed since you last checked, and what needs your attention today. He remembers so you don\u2019t have to.",
    badge: "Your weekly briefing",
    accentColor: "bg-[#E7B83D]",
    bgClass: "bg-[#F0FBF7]",
    avatarBg: "bg-gradient-to-br from-[#D4F7EC] via-[#C4EEDD] to-[#B0E6D0]",
    lines: [
      {
        speaker: "Alfred",
        text: "Good morning, Sr. Sofia finished the client proposal\u2014she remembered to use the new budget format you asked about last week. Leo\u2019s expense report is ready. The quarterly presentation still needs your sign-off before Friday. Everything else is on track.",
      },
    ],
  },
  {
    name: "Maya",
    role: "Your creative Palari",
    eyebrow: "Creative Palari \u00b7 Coming soon",
    story:
      "Maya will bring a designer\u2019s eye to everything your team creates. Slide decks, brand guidelines, visual consistency across docs\u2014she\u2019ll remember your brand standards and catch when something drifts off style. Maya is still learning the ropes, but she\u2019s almost ready to join the team.",
    badge: "Coming soon",
    accentColor: "bg-[#E7B83D]",
    bgClass: "bg-[#FFFBF0]",
    avatarBg: "bg-gradient-to-br from-[#FFF0CC] via-[#FFE8A8] to-[#FFD966]",
    lines: [
      { speaker: "User", text: "maya can you check if the pitch deck matches our brand guide?" },
      { speaker: "Maya", text: "checking now. I remember your last brand update\u2014the new coral accent replaced the old red, right?" },
    ],
  },
];

const speakerAvatarClass: Record<ConversationLine["speaker"], string> = {
  User: "bg-gradient-to-br from-[#CFDAFF] to-[#AFC2F5]",
  Sofia: "bg-gradient-to-br from-[#FFD8C6] to-[#F5B9A2]",
  Leo: "bg-gradient-to-br from-[#DCE7FF] to-[#B4CAFF]",
  Alfred: "bg-gradient-to-br from-[#D4F5E9] to-[#9DDCC6]",
  Maya: "bg-gradient-to-br from-[#FFE8A8] to-[#FFD966]",
};

function SlackConversation({ lines }: { lines: ConversationLine[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="mt-6 rounded-[20px] bg-[#F7F8FB] p-4 shadow-sm ring-1 ring-black/5">
      <div className="space-y-3">
        {lines.map((line, index) => (
          <motion.div
            key={`${line.speaker}-${index}`}
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.3, delay: index * 0.15 }}
            className="flex items-start gap-3"
          >
            <span
              className={`mt-1 h-6 w-6 shrink-0 rounded-full ${speakerAvatarClass[line.speaker]}`}
              aria-hidden="true"
            />
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#2E2A7B]/40">
                {line.speaker}
              </p>
              <p className="mt-1 rounded-xl bg-white px-3 py-2 text-sm leading-relaxed text-[#535778] shadow-sm ring-1 ring-black/5">
                {line.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function MeetPalarisSection() {
  return (
    <section className="relative py-16 md:py-20" id="meet-team">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#2E2A7B] md:text-4xl">
              Meet your Palaris
            </h2>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {palaris.map((palari) => (
            <FadeIn key={palari.name}>
              <article
                className={`relative rounded-[28px] ${palari.bgClass} p-7 shadow-sm ring-1 ring-black/5`}
              >
                {/* Accent bar */}
                <div className={`mb-5 h-3 w-16 rounded-full ${palari.accentColor}`} />

                {/* Eyebrow */}
                <p className="text-sm font-semibold text-[#F46F61]">{palari.eyebrow}</p>

                {/* Character portrait placeholder */}
                <div className="mt-4">
                  <div
                    className={`h-44 w-full rounded-[20px] ${palari.avatarBg} md:h-52`}
                  >
                    {/* <!-- CHARACTER: {palari.name} portrait, large, slightly overlapping card boundary at top --> */}
                  </div>
                </div>

                <h3 className="mt-5 text-3xl font-bold tracking-tight text-[#2E2A7B]">
                  {palari.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#5B5E84]">{palari.role}</p>

                <p className="mt-4 text-[0.95rem] leading-relaxed text-[#535778]">
                  {palari.story}
                </p>

                <SlackConversation lines={palari.lines} />

                <p className="mt-4 text-xs italic tracking-wide text-[#2E2A7B]/35">
                  {palari.badge}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="mx-auto mt-10 max-w-3xl text-center text-base italic text-[#5B5E84]">
            Every Palari carries its own memories, its own personality, its own way of working.
            Sofia, Leo, Alfred, and soon Maya&mdash;they grow with you because they remember who you are.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
