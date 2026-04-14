"use client";

import FadeIn from "./FadeIn";

const reserved = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const totalSpots = 100;

function CreationGrid() {
  return (
    <div className="grid grid-cols-10 gap-1.5 sm:gap-2">
      {Array.from({ length: totalSpots }, (_, i) => {
        const num = i + 1;
        const isReserved = reserved.includes(num);
        return (
          <div
            key={num}
            className={`flex aspect-square items-center justify-center rounded-lg text-[10px] font-semibold sm:text-xs ${
              isReserved
                ? "bg-[#2E2A7B] text-white"
                : "border border-black/5 bg-white text-[#4A4D73]/60"
            }`}
            title={
              isReserved
                ? `#${String(num).padStart(4, "0")} \u2014 Reserved`
                : `#${String(num).padStart(4, "0")} \u2014 Available`
            }
          >
            {String(num).padStart(2, "0")}
          </div>
        );
      })}
    </div>
  );
}

export default function FoundingBatchSection() {
  return (
    <section id="founding-batch" className="py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              You&apos;re early.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#4A4D73]">
              The first 100 Palaris ever created. Each one gets a permanent
              creation number and a hand-designed 3D avatar that no other
              Palari will ever share.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 space-y-6">
            <div className="space-y-3 text-center text-base text-[#4A4D73]">
              <p>
                #0001 was the first Palari ever created.
              </p>
              <p>
                #0011 through #0100 are the founding batch &mdash; reserved for
                friends, classmates, colleagues, and early believers.
              </p>
              <p className="font-medium text-[#2E2A7B]">
                Your creation number is permanent. When Palari has a million
                users, #0037 is an artifact of the founding era.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mx-auto mt-12 max-w-lg">
            <CreationGrid />
            <p className="mt-4 text-center text-sm text-[#4A4D73]/70">
              {totalSpots - reserved.length} of {totalSpots - 10} founding spots
              remaining
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
