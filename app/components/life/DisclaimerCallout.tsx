import FadeIn from "../FadeIn";
import Link from "next/link";

export default function DisclaimerCallout() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <FadeIn>
          <div className="rounded-[28px] bg-gradient-to-br from-[#FFF4F1] via-white to-[#F7F5F2] p-8 ring-1 ring-black/5 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5B5E84]">
              Mechanism, not metaphysics
            </p>
            <p className="mt-5 text-base leading-8 text-[#2E2A7B]">
              This is a voice generation mechanism, not a consciousness
              claim. When Sofia references a specific experience, a string
              is being retrieved from a database and included in a prompt.
              The process produces voice consistency and judgment depth. It
              does not produce subjective experience. We are explicit about
              the mechanism because we think transparency about how AI
              works matters.
            </p>
            <p className="mt-5 text-sm italic leading-relaxed text-[#5B5E84]">
              Cost: about $0.80 and 125 API calls. Time: five to ten
              minutes per coworker. Runs once, before your Palari ships.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/memory"
                className="rounded-2xl bg-[#2E2A7B] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                See the memory system
              </Link>
              <Link
                href="/philosophy"
                className="rounded-2xl border border-[#2E2A7B]/10 bg-white px-6 py-3 text-sm font-semibold text-[#2E2A7B] transition hover:bg-[#EEEAF8]"
              >
                Read the philosophy
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
