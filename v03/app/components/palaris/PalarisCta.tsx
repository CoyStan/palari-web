import FadeIn from "../FadeIn";

export default function PalarisCta() {
  return (
    <section className="bg-gradient-to-br from-[#F7F5F2] via-[#F0F9F8] to-[#E5F8F7] py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 text-center md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Hire your first specialist.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-[#4A4D73]">
            The founding batch is open. 90 spots for teams building with us
            while the product is still shaped by feedback.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-10">
            <a
              href="/#early-access"
              className="inline-flex rounded-2xl bg-[#F46F61] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#F46F61]/25 transition hover:-translate-y-0.5"
            >
              Get early access
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
