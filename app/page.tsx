import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-[#050505] text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-300 font-sans antialiased">
      <main className="flex flex-1 w-full flex-col items-center justify-center bg-[#050505]">
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
