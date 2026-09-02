import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-[#0a0a0a] text-white">
      <main className="flex flex-1 w-full flex-col items-center justify-center bg-[#0a0a0a]">
        <Hero />
        <Features />
        <Pricing />
      </main>
    </div>
  );
}
