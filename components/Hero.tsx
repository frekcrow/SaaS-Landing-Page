"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Pulse,
  Sparkle,
  ArrowRight,
  ShieldCheck,
  CalendarCheck,
  PhoneCall,
} from "@phosphor-icons/react";
import { Button } from "@heroui/button";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const assets = [
    {
      src: "/lab-coate.webp",
      alt: "Lab Coat",
      width: 572,
      height: 567,
      className:
        "absolute -top-[-2%] -left-[21%] w-[45vw] min-w-[250px] -rotate-[-45deg] object-contain",
      side: "left",
      delay: 0.1,
      xOffset: -160,
    },
    {
      src: "/needle.webp",
      alt: "Needle",
      width: 289,
      height: 152,
      className:
        "absolute top-[30%] left-[-10%] w-[38vw] min-w-[150px] -rotate-[1deg] object-contain",
      side: "left",
      delay: 0.25,
      xOffset: -120,
    },
    {
      src: "/stethoscope.webp",
      alt: "Stethoscope",
      width: 363,
      height: 350,
      className:
        "absolute -bottom-[3%] -left-[15%] w-[45vw] min-w-[250px] -rotate-[-65deg] object-contain",
      side: "left",
      delay: 0.4,
      xOffset: -140,
    },
    {
      src: "/sheet.webp",
      alt: "Medical Sheet",
      width: 320,
      height: 376,
      className:
        "absolute -top-[29%] -right-[27%] w-[59vw] min-w-[220px] rotate-[-8deg] object-contain",
      side: "right",
      delay: 0.15,
      xOffset: 160,
    },
    {
      src: "/pressure.webp",
      alt: "Blood Pressure Monitor",
      width: 329,
      height: 344,
      className:
        "absolute -bottom-[-2%] -right-[18%] w-[44vw] min-w-[250px] rotate-[57deg] object-contain",
      side: "right",
      delay: 0.3,
      xOffset: 140,
    },
  ];

  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden bg-[url('/tiffany-bg.webp')] bg-cover bg-center bg-no-repeat flex flex-col justify-between">
      {/* Top Navigation Bar */}
      <header className="w-full pt-6 px-4 sm:px-8 max-w-7xl mx-auto relative z-20">
        <nav className="w-full bg-white/95 backdrop-blur-md rounded-full shadow-xl shadow-slate-900/10 border border-slate-200/80 px-4 sm:px-6 py-3 flex items-center justify-between transition-all duration-200">
          {/* Brand Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xs">
              <Pulse size={20} weight="bold" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight leading-none">
                Aura Clinical
              </span>
              <span className="text-[10px] font-mono text-slate-500 font-medium tracking-wide">
                PRACTICE OS
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-xs font-mono font-semibold text-slate-600">
            <a
              href="#features"
              className="hover:text-slate-900 transition-colors duration-200"
            >
              Capabilities
            </a>
            <a
              href="#pricing"
              className="hover:text-slate-900 transition-colors duration-200"
            >
              Plans & Pricing
            </a>
            <a
              href="#security"
              className="hover:text-slate-900 transition-colors duration-200 flex items-center gap-1.5"
            >
              <ShieldCheck size={14} className="text-emerald-600" />
              <span>HIPAA Vault</span>
            </a>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              size="sm"
              variant="light"
              className="hidden sm:inline-flex font-semibold text-xs text-slate-700 hover:text-slate-900 transition-transform duration-150 ease-out active:scale-[0.97]"
            >
              Provider Portal
            </Button>
            <Button
              size="sm"
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs px-4 h-9 rounded-full shadow-xs transition-transform duration-150 ease-out active:scale-[0.97] flex items-center gap-1.5"
            >
              <span>Book Demo</span>
              <ArrowRight size={13} weight="bold" />
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center my-auto py-16 sm:py-24 space-y-6">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-xs text-xs font-mono font-semibold text-slate-800"
        >
          <Sparkle size={14} weight="fill" className="text-blue-600" />
          <span>NEXT-GEN CLINICAL INTELLIGENCE</span>
        </motion.div>

        <motion.h1
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]"
        >
          The High-Performance Operating System for Modern Practices.
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Automate ambient SOAP note scribe, streamline patient flow, and accelerate revenue cycle management in one unified platform.
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-7 h-12 rounded-full shadow-md transition-transform duration-150 ease-out active:scale-[0.97] flex items-center justify-center gap-2"
          >
            <CalendarCheck size={18} weight="bold" />
            <span>Schedule Practice Audit</span>
          </Button>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-white/90 hover:bg-white text-slate-900 border border-slate-200 font-semibold text-sm px-6 h-12 rounded-full shadow-xs transition-transform duration-150 ease-out active:scale-[0.97] flex items-center justify-center gap-2"
          >
            <PhoneCall size={18} weight="bold" className="text-slate-600" />
            <span>Speak to Specialist</span>
          </Button>
        </motion.div>
      </div>

      {/* Floating Animated Medical Image Assets */}
      {assets.map((asset) => (
        <motion.div
          key={asset.src}
          className={`${asset.className} drop-shadow-2xl pointer-events-none`}
          initial={
            shouldReduceMotion
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: asset.xOffset }
          }
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 18,
            mass: 1,
            delay: asset.delay,
          }}
        >
          <Image
            src={asset.src}
            alt={asset.alt}
            width={asset.width}
            height={asset.height}
            priority
            className="w-full h-auto object-contain"
          />
        </motion.div>
      ))}

      {/* Subtle Bottom Spacer */}
      <div className="h-8 w-full pointer-events-none relative z-10" />
    </section>
  );
}
