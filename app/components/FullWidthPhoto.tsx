import FadeIn from "./FadeIn";

export default function FullWidthPhoto() {
  return (
    <FadeIn>
      <section className="relative">
        {/* <!-- PHOTO: Wide office scene, warm lighting, brick walls, humans and Palaris at a shared table with laptops and coffee. This should feel like a place you want to work. --> */}
        <div className="h-72 w-full bg-gradient-to-r from-[#E8D5C4] via-[#D4C4B0] to-[#C9BBA8] md:h-96 lg:h-[28rem]">
          <div className="flex h-full w-full items-center justify-center">
            <p className="max-w-md text-center text-sm text-[#2E2A7B]/30">
              [Full-width photo: warm coworking space, brick walls, wooden desks, natural light,
              humans and Palaris working side by side]
            </p>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
