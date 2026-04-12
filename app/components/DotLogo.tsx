type DotLogoProps = {
  size?: "sm" | "md";
};

export default function DotLogo({ size = "md" }: DotLogoProps) {
  const dotSize = size === "sm" ? "h-2 w-2" : "h-2.5 w-2.5";

  return (
    <div className="relative h-4 w-6" aria-hidden="true">
      <span className={`absolute left-0 top-1 ${dotSize} rounded-full bg-[#3ECDA5]`} />
      <span className={`absolute left-2.5 top-0 ${dotSize} rounded-full bg-[#F07B7B]`} />
      <span className={`absolute left-5 top-1 ${dotSize} rounded-full bg-[#E8B84B]`} />
      <span className={`absolute left-1 top-2.5 ${dotSize} rounded-full bg-[#3B5EE8]`} />
      <span className={`absolute left-3.5 top-2.5 ${dotSize} rounded-full bg-[#E84BA5]`} />
    </div>
  );
}
