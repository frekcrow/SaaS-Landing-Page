"use client";

export function Features() {
  return (
    <section
      id="features"
      className="w-full min-h-screen flex items-center justify-center bg-[#FAFAFC] border-b border-slate-200/80 px-4"
    >
      <div className="flex items-center justify-center gap-4">
        {/* Left element: right-facing half-circle '(' */}
        <div className="w-64 h-[32rem] rounded-r-full border-2 border-l-0 border-gray-400 bg-transparent" />
        {/* Right element: left-facing half-circle ')' */}
        <div className="w-64 h-[32rem] rounded-l-full border-2 border-r-0 border-gray-400 bg-transparent" />
      </div>
    </section>
  );
}

export default Features;
