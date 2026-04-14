import Link from "next/link";
import FadeIn from "../FadeIn";

export default function ScopedTrustRationaleSection() {
  return (
    <section className="bg-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22B8B0]">
            Scoped trust
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            AI should earn access the way employees do.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#4A4D73]">
            Nobody hands a new hire the keys to production on day one. You
            give them a project, a directory, a narrow slice of the work.
            Two weeks in they&rsquo;ve earned a little more. A month later
            they know the codebase well enough to be trusted across it.
            That&rsquo;s how trust works with people.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[#4A4D73]">
            We built the same pattern for Palaris. Sofia starts with one
            folder. Her scope widens as she proves she&rsquo;s careful with
            what she already has. Mistakes stay contained. The blast radius
            is the size of the trust you&rsquo;ve chosen to extend, not the
            size of your repo.
          </p>

          <div className="mt-8">
            <Link
              href="/trust"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#2E2A7B] ring-1 ring-black/5 transition hover:bg-[#EEEAF8]"
            >
              See how scoped trust works
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
