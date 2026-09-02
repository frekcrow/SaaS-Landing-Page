"use client";

import { motion } from "framer-motion";
import {
  Sparkle,
  ShieldCheck,
  CalendarCheck,
  Receipt,
  Check,
  Lock,
  TrendUp,
  Brain,
} from "@phosphor-icons/react";

const easeOutCurve = [0.23, 1, 0.32, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOutCurve,
    },
  },
};

export function Features() {
  return (
    <section id="features" className="w-full bg-[#FAFAFC] py-28 px-4 sm:px-8 lg:px-12 text-slate-900 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOutCurve }}
          className="flex flex-col items-start gap-4 max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-semibold">
            <Brain size={14} weight="fill" />
            <span>CLINICAL ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Architected for High-Throughput Clinical Excellence
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Eliminate administrative fragmentation. Every feature is engineered around practitioner focus, zero-friction patient flow, and total regulatory compliance.
          </p>
        </motion.div>

        {/* Asymmetric Bento Grid Architecture - Light Mode */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {/* Bento Card 1: AI Clinical Scribe & Dictation (2 columns wide) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 group rounded-[2.5rem] bg-slate-200/50 border border-slate-200/90 p-2 sm:p-2.5 hover:border-blue-400 transition-all shadow-[0_10px_30px_-5px_rgba(15,23,42,0.04)]"
          >
            <div className="rounded-[2rem] bg-white border border-slate-200/80 p-6 sm:p-8 h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 blur-[100px] pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                    <Sparkle size={24} weight="fill" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                    AI Ambient Scribe
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                  Ambient AI Consultation Scribe
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed max-w-xl mb-6">
                  Listens passively during patient consultations and auto-generates structured SOAP notes, EHR entries, and ICD-10 diagnostic codes in under 3 seconds.
                </p>

                {/* Interactive Scribe Preview Box */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 font-mono text-xs text-slate-700 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-[11px] text-slate-500">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      RECORDING ENCOUNTER — ROOM 4B
                    </span>
                    <span>CONFIDENTIAL EHR DRAFT</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-blue-700 font-semibold">
                      [Subjective] Patient reports persistent headache for 3 days, localized right temporal.
                    </div>
                    <div className="text-slate-600">
                      [Objective] BP: 128/84. No nuchal rigidity. Cranial nerves II-XII intact.
                    </div>
                    <div className="text-slate-800 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                      <strong className="text-emerald-800">Suggested ICD-10:</strong> G44.209 (Tension-type headache, unspecified) — Confidence 99.4%
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4 text-xs font-semibold text-slate-600">
                <span className="flex items-center gap-1.5 text-blue-700">
                  <Check size={14} weight="bold" /> 98% Note Accuracy
                </span>
                <span>•</span>
                <span>Saves 2.4 Hours Daily Per Physician</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: Zero-Trust HIPAA Vault (1 column) */}
          <motion.div
            variants={itemVariants}
            className="group rounded-[2.5rem] bg-slate-200/50 border border-slate-200/90 p-2 sm:p-2.5 hover:border-teal-400 transition-all shadow-[0_10px_30px_-5px_rgba(15,23,42,0.04)]"
          >
            <div className="rounded-[2rem] bg-white border border-slate-200/80 p-6 sm:p-8 h-full flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
                    <ShieldCheck size={24} weight="duotone" />
                  </div>
                  <Lock size={18} className="text-slate-400" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                  Zero-Trust Encrypted Vault
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Military-grade 256-bit AES encryption with immutable audit logs for every record query.
                </p>

                {/* Security Status Box */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-600">HIPAA Compliance</span>
                    <span className="text-emerald-700 font-bold">100% Passed</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-teal-500 h-1.5 rounded-full w-full" />
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    AES-256-GCM Hardware Encrypted
                  </div>
                </div>
              </div>

              <div className="mt-6 text-xs text-teal-700 font-semibold flex items-center gap-1">
                <span>Instant BAA Agreement Included</span>
                <span>→</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 3: Smart Triage & Scheduling (1 column) */}
          <motion.div
            variants={itemVariants}
            className="group rounded-[2.5rem] bg-slate-200/50 border border-slate-200/90 p-2 sm:p-2.5 hover:border-amber-400 transition-all shadow-[0_10px_30px_-5px_rgba(15,23,42,0.04)]"
          >
            <div className="rounded-[2rem] bg-white border border-slate-200/80 p-6 sm:p-8 h-full flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                    <CalendarCheck size={24} weight="duotone" />
                  </div>
                  <span className="text-[10px] font-mono text-amber-800 font-semibold bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                    Auto-Resolve
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                  Conflict-Free Triage Engine
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Dynamic slot optimization and automated SMS/email reminders reduce patient no-shows by 64%.
                </p>

                {/* Schedule Block Indicator */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900">09:30 AM — Cardiac Follow-Up</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-semibold">
                      Confirmed
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    SMS reminder acknowledged by patient (10m ago)
                  </div>
                </div>
              </div>

              <div className="mt-6 text-xs text-amber-800 font-semibold">
                64% No-Show Reduction Guaranteed
              </div>
            </div>
          </motion.div>

          {/* Bento Card 4: Automated Revenue Cycle & Billing (2 columns wide) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 group rounded-[2.5rem] bg-slate-200/50 border border-slate-200/90 p-2 sm:p-2.5 hover:border-emerald-400 transition-all shadow-[0_10px_30px_-5px_rgba(15,23,42,0.04)]"
          >
            <div className="rounded-[2rem] bg-white border border-slate-200/80 p-6 sm:p-8 h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-80 h-80 bg-teal-500/5 blur-[100px] pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                    <Receipt size={24} weight="duotone" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    Realtime Claims Engine
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                  Automated Revenue Cycle & Claim Adjudication
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed max-w-xl mb-6">
                  Instant clearinghouse verification and automated claim scrubbing ensure 99.1% first-pass claim acceptance with automated patient co-pay processing.
                </p>

                {/* Claims Data Widget */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90">
                    <div className="text-[11px] text-slate-500">Clean Claim Rate</div>
                    <div className="text-xl font-bold text-emerald-700 font-mono mt-1">99.1%</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90">
                    <div className="text-[11px] text-slate-500">Avg Reimbursement</div>
                    <div className="text-xl font-bold text-slate-900 font-mono mt-1">4.2 Days</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90">
                    <div className="text-[11px] text-slate-500">Denied Claims Recovery</div>
                    <div className="text-xl font-bold text-blue-700 font-mono mt-1">+$32,400</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 text-xs text-emerald-800 font-semibold">
                <TrendUp size={16} />
                <span>Integrated with Medicare, BCBS, Aetna, and 1,200+ Payers</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
