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
  CaretRight,
  Shield,
  Activity,
} from "@phosphor-icons/react";

const easeOutCurve = [0.23, 1, 0.32, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
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
    <section className="relative w-full min-h-[100dvh] bg-[#FAFAFC] text-slate-900 overflow-hidden flex flex-col justify-between pt-6 pb-20 px-4 sm:px-8 lg:px-12 border-b border-slate-200/80">
      {/* Pristine Light Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-blue-500/8 via-teal-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-sky-400/8 blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-emerald-400/8 blur-[150px] pointer-events-none -z-10" />

      {/* Embedded Apple-Style Floating Light Navigation Bar */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between py-3.5 px-6 rounded-full bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.04)] z-20 mb-12">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center shadow-xs">
            <Pulse size={20} weight="bold" className="text-blue-600" />
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900 flex items-center gap-1.5">
            Clinic<span className="text-blue-600 font-mono text-base">OS</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-blue-600 transition-colors">
            Platform
          </a>
          <a href="#intelligence" className="hover:text-blue-600 transition-colors flex items-center gap-1.5">
            <span>AI Copilot</span>
            <span className="text-[10px] font-mono uppercase bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full font-semibold">
              v2.4
            </span>
          </a>
          <a href="#pricing" className="hover:text-blue-600 transition-colors">
            Pricing
          </a>
          <a href="#compliance" className="hover:text-blue-600 transition-colors">
            Security & HIPAA
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-2 transition-colors hidden sm:block">
            Sign In
          </button>
          <Button
            size="sm"
            className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs px-5 h-9 rounded-full shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
          >
            Request Demo
          </Button>
        </div>
      </div>

      {/* Main Hero Header */}
      <motion.div
        className="max-w-5xl mx-auto w-full flex flex-col items-center text-center gap-6 mt-2 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Compliance Status Chip */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 text-xs font-semibold text-slate-700 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <ShieldCheck size={16} weight="fill" className="text-blue-600" />
            <span>HIPAA & HITECH Certified Clinical Operating Platform</span>
          </div>
        </motion.div>

        {/* H1 Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] max-w-4xl"
        >
          The Clinical OS for{" "}
          <span className="bg-gradient-to-r from-blue-700 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
            Precision Medical Care
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal"
        >
          Unify electronic health records, ambient AI consultation scribing, intelligent triage, and automated revenue cycle management into one clinical command center.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 h-12 text-sm rounded-full shadow-[0_10px_25px_-5px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            endContent={
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowRight size={14} weight="bold" className="text-white" />
              </div>
            }
          >
            Start 14-Day Practice Trial
          </Button>

          <Button
            size="lg"
            variant="bordered"
            className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold px-7 h-12 text-sm rounded-full flex items-center justify-center gap-2 shadow-xs transition-all active:scale-[0.98]"
          >
            <Stethoscope size={18} weight="duotone" className="text-blue-600" />
            <span>Explore Live Sandbox</span>
          </Button>
        </motion.div>

        {/* Key Indicators / Social Proof Bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-3 text-xs font-semibold text-slate-600"
        >
          <div className="flex items-center gap-2">
            <CheckCircle size={16} weight="fill" className="text-blue-600" />
            <span>Zero Data Migration Downtime</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={16} weight="fill" className="text-blue-600" />
            <span>256-Bit End-to-End Encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={16} weight="fill" className="text-blue-600" />
            <span>HL7 FHIR Interoperable</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Clinical Command Dashboard Telemetry Showcase - Light Mode */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: easeOutCurve }}
        className="max-w-6xl mx-auto w-full mt-12 relative z-10"
      >
        {/* Double-Bezel Light Container Architecture */}
        <div className="p-2 sm:p-3 rounded-[2.5rem] bg-slate-200/60 border border-slate-200/90 shadow-[0_20px_50px_-10px_rgba(15,23,42,0.08)]">
          <div className="rounded-[2rem] bg-white border border-slate-200/80 p-5 sm:p-7 shadow-xs overflow-hidden relative">
            {/* Top Accent Highlight Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500" />

            {/* Window Chrome Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-300" />
                <div className="w-3 h-3 rounded-full bg-slate-300" />
                <div className="w-3 h-3 rounded-full bg-slate-300" />
                <span className="ml-3 font-mono text-xs font-medium text-slate-500 hidden sm:inline">
                  ClinicOS Command Center — St. Jude Medical Group
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-mono text-emerald-800 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>LIVE TELEMETRY</span>
                </div>
                <div className="p-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-600">
                  <Bell size={14} />
                </div>
              </div>
            </div>

            {/* Telemetry Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
              {/* Stat 1 */}
              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                  <span>Active Triage Queue</span>
                  <Users size={16} className="text-blue-600" />
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono tracking-tight">18</span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">Normal</span>
                </div>
                <div className="mt-2 text-[11px] text-slate-500 font-mono">
                  Avg wait: 4.2 min
                </div>
              </div>

              {/* Stat 2 */}
              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                  <span>EHR Encounters Today</span>
                  <Clock size={16} className="text-teal-600" />
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono tracking-tight">142</span>
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded">↑ 14%</span>
                </div>
                <div className="mt-2 text-[11px] text-slate-500 font-mono">
                  99.1% claims clean
                </div>
              </div>

              {/* Stat 3 */}
              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                  <span>Practice Throughput</span>
                  <TrendUp size={16} className="text-emerald-600" />
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono tracking-tight">$18,450</span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">+22%</span>
                </div>
                <div className="mt-2 text-[11px] text-slate-500 font-mono">
                  Auto-adjudicated
                </div>
              </div>

              {/* Stat 4 */}
              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                  <span>AI Diagnostic Alerts</span>
                  <Sparkle size={16} className="text-amber-600" />
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono tracking-tight">3</span>
                  <span className="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">Review</span>
                </div>
                <div className="mt-2 text-[11px] text-slate-500 font-mono">
                  ECG anomaly flagged
                </div>
              </div>
            </div>

            {/* Interactive Clinical View Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Live Patient Monitoring Column */}
              <div className="lg:col-span-2 p-5 rounded-2xl bg-slate-50/60 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Heartbeat size={20} className="text-blue-600 animate-pulse" />
                      <span className="font-semibold text-sm text-slate-900">
                        Live Clinical Encounters & Telemetry
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-500">Facility: NYC-MED-04</span>
                  </div>

                  {/* Patient Rows */}
                  <div className="space-y-3">
                    {/* Patient 1 */}
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between gap-4 hover:border-blue-400 transition-all shadow-2xs">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-bold text-xs">
                          JD
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900">Johnathan Vance, 52</div>
                          <div className="text-[11px] text-slate-500">Cardiology — Post-Op Consultation</div>
                        </div>
                      </div>
                      <div className="hidden sm:flex items-center gap-6 text-xs font-mono">
                        <div>
                          <span className="text-slate-400 text-[10px] block">BP</span>
                          <span className="text-slate-800 font-semibold">124/82</span>
                        </div>
                        <div>
                          <span className="text-slate-400 text-[10px] block">HR</span>
                          <span className="text-emerald-600 font-bold">72 bpm</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold">
                          Exam Room 3
                        </span>
                      </div>
                    </div>

                    {/* Patient 2 */}
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between gap-4 hover:border-amber-400 transition-all shadow-2xs">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center font-bold text-xs">
                          MK
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900">Maria Kostic, 38</div>
                          <div className="text-[11px] text-slate-500">Endocrinology — Lab Review</div>
                        </div>
                      </div>
                      <div className="hidden sm:flex items-center gap-6 text-xs font-mono">
                        <div>
                          <span className="text-slate-400 text-[10px] block">HbA1c</span>
                          <span className="text-amber-600 font-bold">6.8%</span>
                        </div>
                        <div>
                          <span className="text-slate-400 text-[10px] block">Glucose</span>
                          <span className="text-slate-800 font-semibold">138 mg/dL</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-semibold">
                          Triage Review
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Clinical AI Assistant Banner */}
                <div className="mt-4 p-3 rounded-xl bg-blue-50/80 border border-blue-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-blue-900 font-medium">
                    <Sparkle size={16} className="text-blue-600 shrink-0" />
                    <span>
                      <strong>Clinical Copilot:</strong> Automated ICD-10 coding ready for Dr. Chen’s review.
                    </span>
                  </div>
                  <span className="text-[11px] text-blue-700 font-semibold cursor-pointer hover:underline flex items-center gap-1 shrink-0">
                    <span>Approve Codes</span>
                    <CaretRight size={12} weight="bold" />
                  </span>
                </div>
              </div>

              {/* AI Diagnostics Side Card */}
              <div className="p-5 rounded-2xl bg-slate-50/60 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Diagnostic Intelligence
                    </span>
                    <span className="text-[10px] bg-blue-100 text-blue-800 border border-blue-200 px-2 py-0.5 rounded-full font-mono font-semibold">
                      Realtime AI
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 mb-3 shadow-2xs">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 mb-1">
                      <Sparkle size={14} className="text-amber-500" />
                      <span>Prescription Cross-Check</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Zero contraindications found between prescribed Lisinopril and patient allergy history.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900 mb-1">
                      <span className="flex items-center gap-2">
                        <Activity size={14} className="text-emerald-600" />
                        <span>Adjudication Confidence</span>
                      </span>
                      <span className="text-emerald-600 font-mono font-bold">99.8%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2 overflow-hidden">
                      <div className="bg-emerald-500 h-1.5 rounded-full w-[99.8%]" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Shield size={14} className="text-slate-400" />
                    <span>EHR Sync: HIPAA Cloud</span>
                  </span>
                  <span className="text-emerald-600 font-semibold">Synced 1s ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
