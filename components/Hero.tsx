"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import {
  Pulse,
  ArrowRight,
  ShieldCheck,
  TrendUp,
  Users,
  Clock,
  Sparkle,
  CheckCircle,
  Stethoscope,
  Heartbeat,
  Bell,
} from "@phosphor-icons/react";

const easeOutCurve = [0.23, 1, 0.32, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutCurve,
    },
  },
};

export function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] bg-[#050505] text-zinc-100 overflow-hidden flex flex-col justify-between pt-6 pb-20 px-4 sm:px-8 lg:px-12 border-b border-white/[0.06]">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-emerald-500/10 via-cyan-500/5 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-emerald-600/5 blur-[140px] pointer-events-none -z-10" />

      {/* Embedded Top Navigation Bar */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between py-4 px-6 rounded-full bg-zinc-900/60 backdrop-blur-xl border border-white/10 shadow-2xl z-20 mb-12">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.25)]">
            <Pulse size={20} weight="bold" className="text-emerald-400" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
            Clinic<span className="text-emerald-400 font-mono text-base">OS</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">
            Platform
          </a>
          <a href="#intelligence" className="hover:text-white transition-colors flex items-center gap-1.5">
            <span>AI Copilot</span>
            <span className="text-[10px] font-mono uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.5 rounded-full">
              v2.4
            </span>
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#compliance" className="hover:text-white transition-colors">
            Security & HIPAA
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="text-xs font-semibold text-zinc-300 hover:text-white px-3 py-2 transition-colors hidden sm:block">
            Sign In
          </button>
          <Button
            size="sm"
            color="primary"
            className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs px-4 h-9 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
          >
            Request Demo
          </Button>
        </div>
      </div>

      {/* Main Hero Header */}
      <motion.div
        className="max-w-5xl mx-auto w-full flex flex-col items-center text-center gap-6 mt-4 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Compliance Status Chip */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 backdrop-blur-md border border-emerald-500/30 text-xs font-medium text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.12)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <ShieldCheck size={16} weight="fill" className="text-emerald-400" />
            <span>HIPAA & HITECH Certified Clinical Operating Platform</span>
          </div>
        </motion.div>

        {/* H1 Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl"
        >
          The Operating System for{" "}
          <span className="bg-gradient-to-r from-white via-zinc-200 to-emerald-400 bg-clip-text text-transparent">
            Precision Clinical Care
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-xl text-zinc-400 max-w-2xl leading-relaxed font-normal"
        >
          Unify electronic health records, intelligent patient triage, automated revenue cycle management, and AI diagnostic assistance into one seamless command center.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 mt-3 w-full sm:w-auto"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold px-8 h-12 text-sm rounded-full shadow-[0_0_30px_rgba(16,185,129,0.35)] flex items-center justify-center gap-2 transition-all"
            endContent={<ArrowRight size={18} weight="bold" />}
          >
            Start 14-Day Practice Trial
          </Button>

          <Button
            size="lg"
            variant="bordered"
            className="w-full sm:w-auto bg-zinc-900/60 backdrop-blur-lg border border-zinc-700 hover:border-zinc-500 text-zinc-200 font-medium px-7 h-12 text-sm rounded-full flex items-center justify-center gap-2 transition-all"
          >
            <Stethoscope size={18} weight="duotone" className="text-emerald-400" />
            <span>Explore Live Sandbox</span>
          </Button>
        </motion.div>

        {/* Key Indicators / Social Proof Bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-4 text-xs font-medium text-zinc-400"
        >
          <div className="flex items-center gap-2">
            <CheckCircle size={16} weight="fill" className="text-emerald-400" />
            <span>Zero Data Migration Downtime</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={16} weight="fill" className="text-emerald-400" />
            <span>256-Bit End-to-End Encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={16} weight="fill" className="text-emerald-400" />
            <span>HL7 FHIR Interoperable</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Clinical Command Dashboard Telemetry Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: easeOutCurve }}
        className="max-w-6xl mx-auto w-full mt-12 relative z-10"
      >
        {/* Outer Glassmorphic Wrapper */}
        <div className="relative rounded-3xl bg-zinc-950/80 backdrop-blur-2xl border border-white/10 p-4 sm:p-6 shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Subtle Accent Edge Glow */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

          {/* Window Chrome Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-amber-500/70" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
              <span className="ml-3 font-mono text-xs text-zinc-500 hidden sm:inline">
                ClinicOS Command Center — St. Jude Medical Group
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>LIVE TELEMETRY</span>
              </div>
              <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400">
                <Bell size={14} />
              </div>
            </div>
          </div>

          {/* Telemetry Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
            {/* Stat 1 */}
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 flex flex-col justify-between">
              <div className="flex items-center justify-between text-zinc-400 text-xs">
                <span>Active Triage Queue</span>
                <Users size={16} className="text-emerald-400" />
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">18</span>
                <span className="text-xs font-semibold text-emerald-400">Normal Flow</span>
              </div>
              <div className="mt-2 text-[11px] text-zinc-500 font-mono">
                Avg wait: 4.2 min
              </div>
            </div>

            {/* Stat 2 */}
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 flex flex-col justify-between">
              <div className="flex items-center justify-between text-zinc-400 text-xs">
                <span>EHR Encounters Today</span>
                <Clock size={16} className="text-cyan-400" />
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">142</span>
                <span className="text-xs font-semibold text-emerald-400">↑ 14% vs avg</span>
              </div>
              <div className="mt-2 text-[11px] text-zinc-500 font-mono">
                98% claims clean rate
              </div>
            </div>

            {/* Stat 3 */}
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 flex flex-col justify-between">
              <div className="flex items-center justify-between text-zinc-400 text-xs">
                <span>Daily Practice Throughput</span>
                <TrendUp size={16} className="text-emerald-400" />
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">$18,450</span>
                <span className="text-xs font-semibold text-emerald-400">↑ +22%</span>
              </div>
              <div className="mt-2 text-[11px] text-zinc-500 font-mono">
                Auto-adjudicated
              </div>
            </div>

            {/* Stat 4 */}
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 flex flex-col justify-between">
              <div className="flex items-center justify-between text-zinc-400 text-xs">
                <span>AI Diagnostic Alerts</span>
                <Sparkle size={16} className="text-amber-400" />
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">3</span>
                <span className="text-xs font-semibold text-amber-400">Action Required</span>
              </div>
              <div className="mt-2 text-[11px] text-zinc-500 font-mono">
                ECG anomaly detected
              </div>
            </div>
          </div>

          {/* Interactive Clinical View Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Live Patient Monitoring Column */}
            <div className="lg:col-span-2 p-5 rounded-2xl bg-zinc-900/50 border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Heartbeat size={20} className="text-emerald-400 animate-pulse" />
                    <span className="font-semibold text-sm text-zinc-200">
                      Live Clinical Encounters & Telemetry
                    </span>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">Facility ID: NYC-MED-04</span>
                </div>

                {/* Patient Rows */}
                <div className="space-y-3">
                  {/* Patient 1 */}
                  <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-white/5 flex items-center justify-between gap-4 hover:border-emerald-500/30 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-xs">
                        JD
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Johnathan Vance, 52</div>
                        <div className="text-[11px] text-zinc-400">Cardiology — Post-Op Consultation</div>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-6 text-xs font-mono">
                      <div>
                        <span className="text-zinc-500 text-[10px] block">BP</span>
                        <span className="text-zinc-200">124/82</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 text-[10px] block">HR</span>
                        <span className="text-emerald-400 font-bold">72 bpm</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-medium">
                        Exam Room 3
                      </span>
                    </div>
                  </div>

                  {/* Patient 2 */}
                  <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-white/5 flex items-center justify-between gap-4 hover:border-amber-500/30 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs">
                        MK
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Maria Kostic, 38</div>
                        <div className="text-[11px] text-zinc-400">Endocrinology — Lab Review</div>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-6 text-xs font-mono">
                      <div>
                        <span className="text-zinc-500 text-[10px] block">HbA1c</span>
                        <span className="text-amber-400 font-bold">6.8%</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 text-[10px] block">Glucose</span>
                        <span className="text-zinc-200">138 mg/dL</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-medium">
                        Triage Review
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Clinical AI Assistant Banner */}
              <div className="mt-4 p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-emerald-300">
                  <Sparkle size={16} className="text-emerald-400 shrink-0" />
                  <span>
                    <strong>Clinical Copilot:</strong> Automated ICD-10 coding ready for Dr. Chen’s review.
                  </span>
                </div>
                <span className="text-[11px] text-emerald-400 font-semibold cursor-pointer hover:underline shrink-0">
                  Approve Codes →
                </span>
              </div>
            </div>

            {/* AI Diagnostics Side Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/50 border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                    Diagnostic Intelligence
                  </span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-mono">
                    Realtime AI
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950/90 border border-white/5 mb-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white mb-1">
                    <Sparkle size={14} className="text-amber-400" />
                    <span>Prescription Cross-Check</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Zero contraindications found between prescribed Lisinopril and patient allergy history.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950/90 border border-white/5">
                  <div className="flex items-center justify-between text-xs font-semibold text-white mb-1">
                    <span className="flex items-center gap-2">
                      <TrendUp size={14} className="text-emerald-400" />
                      <span>Claim Adjudication Confidence</span>
                    </span>
                    <span className="text-emerald-400 font-mono">99.8%</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-1.5 mt-2 overflow-hidden">
                    <div className="bg-emerald-400 h-1.5 rounded-full w-[99.8%]" />
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                <span>EHR Sync: HIPAA Cloud</span>
                <span className="text-emerald-400 font-medium">Synced 1s ago</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
