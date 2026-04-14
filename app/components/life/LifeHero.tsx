import FadeIn from "../FadeIn";

export default function LifeHero() {
  return (
    <section className="bg-gradient-to-br from-[#FFF4F1] via-white to-[#F7F5F2] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F46F61]">
            How voices are generated
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#2E2A7B] md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
            Every AI assistant sounds the same. Each Palari does not.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4A4D73]">
            Most AI products ship with a personality description pasted on
            top. Be helpful. Be casual. Be concise. The result is
            interchangeable. Palari does something different. Each
            coworker&rsquo;s voice is generated through a multi-step process
            that produces specific convictions, specific ways of noticing,
            and specific preferences consistent across thousands of
            interactions. The process takes about ten minutes and costs less
            than a dollar. Here&rsquo;s how it works.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
