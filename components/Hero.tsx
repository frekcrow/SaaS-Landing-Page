"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import {
  Pulse,
  ShieldCheck,
  TrendUp,
  Users,
  Clock,
  Sparkle,
  CheckCircle,
  Stethoscope,
  Heartbeat,
  Bell,
  CaretRight,
  Shield,
  Waveform,
  FileText,
  Lock,
} from "@phosphor-icons/react";

const cubicEase = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicEase,
    },
  },
};

export function Hero() {
  return (
    <section className="relative w-full bg-[#FAFAFC] text-slate-900 overflow-hidden pt-4 pb-20 px-4 sm:px-6 lg:px-12 border-b border-slate-200/80">
      {/* Subdued architectural background grids - clean, non-slop */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Top Embedded Navigation Header */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between py-3 px-6 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(15,23,42,0.03)] z-20 mb-12">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white">
            <Pulse size={18} weight="bold" className="text-blue-400" />
          </div>
          <span className="font-bold text-base tracking-tight text-slate-900 flex items-center gap-1">
            Clinic<span className="text-blue-600 font-mono text-sm">OS</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-slate-600 tracking-wide uppercase">
          <a href="#features" className="hover:text-slate-900 transition-colors">
            Clinical Engine
          </a>
          <a href="#intelligence" className="hover:text-slate-900 transition-colors flex items-center gap-1.5">
            <span>Ambient Scribe</span>
            <span className="text-[10px] font-mono lowercase bg-blue-50 text-blue-700 border border-blue-200 px-1.5 py-0.5 rounded font-bold">
              v2.4
            </span>
          </a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">
            Practice Plans
          </a>
          <a href="#compliance" className="hover:text-slate-900 transition-colors">
            HIPAA Vault
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-2 transition-colors hidden sm:block"
          >
            Sign In
          </a>
          <Button
            size="sm"
            className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs px-4 h-8 rounded-lg shadow-xs transition-all active:scale-[0.98]"
          >
            Request Demo
          </Button>
        </div>
      </div>

      {/* Main Asymmetric Hero Layout (Left Narrative & Telemetry / Right Interactive Workspace Canvas) */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Asymmetric Narrative & CTAs */}
        <motion.div
          className="lg:col-span-6 flex flex-col items-start text-left gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Operational Compliance Pill */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/90 text-xs font-mono font-medium text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <Shield size={14} weight="bold" className="text-slate-900" />
              <span>HIPAA & HITECH Certified Clinical Operating Platform</span>
            </div>
          </motion.div>

          {/* Solid H1 Headline — NO GRADIENT TEXT SLOP */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]"
          >
            The Clinical Operating System for Precision Medical Care.
          </motion.h1>

          {/* Realistic Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl"
          >
            Unified electronic health records, ambient consultation scribing, real-time triage queueing, and automated revenue cycle management in a single clinical workspace.
          </motion.p>

          {/* Action Controls */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 h-11 text-sm rounded-xl shadow-sm transition-all active:scale-[0.98]"
            >
              Start 14-Day Practice Trial
            </Button>

            <Button
              size="lg"
              variant="bordered"
              className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold px-6 h-11 text-sm rounded-xl transition-all active:scale-[0.98]"
            >
              <Stethoscope size={18} weight="duotone" className="text-slate-600 mr-2" />
              <span>Explore Live Sandbox</span>
            </Button>
          </motion.div>

          {/* Operational Proof Telemetry Points */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/80 w-full text-xs font-mono text-slate-600"
          >
            <div>
              <span className="block text-slate-900 font-bold text-sm">0 Min</span>
              <span className="text-[11px] text-slate-500">Migration Downtime</span>
            </div>
            <div>
              <span className="block text-slate-900 font-bold text-sm">256-Bit</span>
              <span className="text-[11px] text-slate-500">AES Encryption</span>
            </div>
            <div>
              <span className="block text-slate-900 font-bold text-sm">HL7 FHIR</span>
              <span className="text-[11px] text-slate-500">v4 Interoperable</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Live Clinical Workspace Command Center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: cubicEase }}
          className="lg:col-span-6 w-full"
        >
          {/* Outer Border Frame */}
          <div className="rounded-2xl bg-white border border-slate-200 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.08)] overflow-hidden">
            {/* Header Bar */}
            <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                <span className="ml-2 font-mono text-xs font-medium text-slate-300">
                  St. Jude Medical Group — Command Center
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-semibold border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  LIVE
                </span>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-px bg-slate-100 border-b border-slate-200">
              <div className="bg-white p-3.5">
                <div className="text-[10px] font-mono uppercase text-slate-500 font-semibold">Triage Queue</div>
                <div className="text-xl font-bold font-mono text-slate-900 mt-0.5">18 Patients</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Avg wait: 4.2m</div>
              </div>
              <div className="bg-white p-3.5">
                <div className="text-[10px] font-mono uppercase text-slate-500 font-semibold">Encounters</div>
                <div className="text-xl font-bold font-mono text-slate-900 mt-0.5">142 Today</div>
                <div className="text-[10px] text-emerald-600 font-medium mt-0.5">99.1% claims clean</div>
              </div>
              <div className="bg-white p-3.5">
                <div className="text-[10px] font-mono uppercase text-slate-500 font-semibold">ICD-10 Copilot</div>
                <div className="text-xl font-bold font-mono text-blue-600 mt-0.5">99.4%</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Auto-coded notes</div>
              </div>
            </div>

            {/* Main Interactive Screen Content */}
            <div className="p-5 space-y-4 bg-[#FAFAFC]">
              {/* Encounter Item 1 */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold flex items-center justify-center">
                      JV
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Johnathan Vance, 52</div>
                      <div className="text-[11px] text-slate-500">Cardiology — Exam Room 3</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-mono font-semibold">
                    SOAP Synthesized
                  </span>
                </div>

                {/* Live Scribe Telemetry Row */}
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/80 font-mono text-[11px] text-slate-700 space-y-1">
                  <div className="text-slate-500 flex items-center justify-between">
                    <span>[Ambient Scribe Session #842]</span>
                    <span className="text-emerald-600 font-semibold">00:04:12</span>
                  </div>
                  <div className="text-slate-800 font-medium">
                    &quot;Patient reports 3-day temporal headache. BP 124/82. Prescribed Lisinopril 10mg.&quot;
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-slate-500">
                    Suggested ICD-10: <strong className="text-slate-800">G44.209</strong>
                  </span>
                  <button className="text-[11px] font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    <span>Review EHR Entry</span>
                    <CaretRight size={14} weight="bold" />
                  </button>
                </div>
              </div>

              {/* Encounter Item 2 */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-bold flex items-center justify-center">
                      MK
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Maria Kostic, 38</div>
                      <div className="text-[11px] text-slate-500">Endocrinology — Lab Review</div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Zero contraindications found between prescribed Lisinopril and patient allergy history.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900 mb-1">
                      <span className="flex items-center gap-2">
                        <Pulse size={14} className="text-emerald-600" />
                        <span>Adjudication Confidence</span>
                      </span>
                      <span className="text-emerald-600 font-mono font-bold">99.8%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2 overflow-hidden">
                      <div className="bg-emerald-500 h-1.5 rounded-full w-[99.8%]" />
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-mono font-semibold">
                    Adjudicated
                  </span>
                </div>
              </div>

              {/* Security Footer Sync Note */}
              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-200/60">
                <span className="flex items-center gap-1.5">
                  <Lock size={14} className="text-slate-400" />
                  <span>256-bit AES Hardware Vault</span>
                </span>
                <span className="text-slate-600 font-medium">Synced to EHR</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
