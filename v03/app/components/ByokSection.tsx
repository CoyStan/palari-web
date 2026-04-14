"use client";

import FadeIn from "./FadeIn";

export default function ByokSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              You own the compute. You own the key.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#4A4D73]">
              Palari uses a Bring Your Own Key model. You provide the API key
              for Claude, GPT, or any model you trust. We handle memory,
              routing, and scope &mdash; at a tenth of a cent per message.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mx-auto mt-12 max-w-xl">
            <div className="overflow-hidden rounded-2xl border border-black/5 bg-[#F7F5F2]">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-black/5">
                    <th className="px-6 py-4 font-semibold text-[#2E2A7B]" />
                    <th className="px-6 py-4 font-semibold text-[#2E2A7B]">
                      Who pays
                    </th>
                    <th className="px-6 py-4 font-semibold text-[#2E2A7B]">
                      Per message
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/5">
                    <td className="px-6 py-4 font-medium text-[#2E2A7B]">
                      The work
                    </td>
                    <td className="px-6 py-4 text-[#4A4D73]">
                      You, via your API key
                    </td>
                    <td className="px-6 py-4 text-[#4A4D73]">$0.003&ndash;0.03</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-[#2E2A7B]">
                      Personality + memory
                    </td>
                    <td className="px-6 py-4 text-[#4A4D73]">Palari</td>
                    <td className="px-6 py-4 text-[#4A4D73]">$0.0012</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mx-auto mt-8 max-w-xl text-center text-base text-[#4A4D73]">
            We&apos;re not a compute reseller. We&apos;re a software company.
            Our interests are aligned with yours &mdash; the less compute you
            waste, the happier we both are.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
