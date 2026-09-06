"use client";

export function Features() {
  return (
    <section
      id="features"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-[#FAFAFC] border-b border-slate-200/80"
    >
      {/* Left circle: positioned extremely to the left, showing right curve ')' near center */}
      <div
        id="left-circle"
        className="absolute top-1/2 -translate-y-1/2 -left-[48vw] w-[100vw] h-[100vw] rounded-full border-4 border-black bg-transparent pointer-events-none"
      />
      {/* Right circle: positioned extremely to the right, showing left curve '(' near center */}
      <div
        id="Right-circle"
        className="absolute top-1/2 -translate-y-1/2 -right-[48vw] w-[100vw] h-[100vw] rounded-full border-4 border-black bg-transparent pointer-events-none"
      />
    </section>
  );
}

export default Features;
