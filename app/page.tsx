import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-[#FAFAFC] text-slate-900 selection:bg-blue-500/15 selection:text-blue-700 font-sans antialiased overflow-x-hidden w-full">
      <main className="flex flex-1 w-full flex-col items-center justify-center bg-[#FAFAFC]">
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
