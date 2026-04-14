import FadeIn from "../FadeIn";

export default function CompartmentalizedRiskSection() {
  return (
    <section className="bg-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F46F61]">
            Compartmentalized risk
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            If Sofia makes a mistake, it stays Sofia&rsquo;s mistake.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            One assistant with access to everything is one prompt injection
            away from disaster. Three coworkers with narrow scopes can only
            mess up the part they&rsquo;re responsible for. That&rsquo;s
            not a weakness of the design. It&rsquo;s the point.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-[24px] bg-white p-6 ring-1 ring-black/5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]">
                Sofia goes sideways
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#4A4D73]">
                The worst she can do is break something in /frontend/. She
                cannot touch Leo&rsquo;s backend. She cannot read the
                database. She cannot reach the shared drive. The blast
                radius is the folder you gave her.
              </p>
            </div>
            <div className="rounded-[24px] bg-white p-6 ring-1 ring-black/5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]">
                Leo goes sideways
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#4A4D73]">
                Same shape. Leo&rsquo;s scope is the backend. Whatever he
                does or doesn&rsquo;t do in /backend/ stays in /backend/.
                Sofia&rsquo;s frontend is untouched. Alfred is still
                read-only.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mt-10 text-base leading-relaxed text-[#4A4D73]">
            Plus propose-and-approve on every write. A Palari never commits
            an action on her own. She drafts the change, shows you the
            diff, and waits. Even inside her own scope, she asks first.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
