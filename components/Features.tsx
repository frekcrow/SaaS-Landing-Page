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
  ArrowRight,
} from "@phosphor-icons/react";

export function Features() {
  return (
    <section id="features" className="w-full bg-[#FAFAFC] py-24 px-4 sm:px-6 lg:px-12 text-slate-900 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header - Clean Left-Aligned Narrative */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700">
            <Brain size={14} weight="bold" className="text-slate-900" />
            <span>CLINICAL ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Architected for High-Throughput Clinical Excellence.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Eliminate administrative fragmentation. Every system component is engineered around practitioner focus, zero-friction patient flow, and absolute regulatory compliance.
          </p>
        </div>

        {/* Asymmetric Clinical Workflow Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Ambient Scribe & SOAP Note Synthesis (7 Cols Wide) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors duration-200 ease-out">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <Sparkle size={20} weight="bold" className="text-blue-600" />
                  <span className="font-bold text-slate-900 text-lg tracking-tight">
                    Ambient Consultation Scribe
                  </span>
                </div>
                <span className="text-[11px] font-mono text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full font-semibold">
                  3s Note Generation
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Passively records doctor-patient dialogue during visits and automatically synthesizes structured SOAP notes, EHR entries, and ICD-10 diagnostic codes.
              </p>

              {/* Realistic SOAP Output Preview */}
              <div className="bg-slate-50 rounded-xl border border-slate-200/90 p-4 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-[10px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    RECORDING ENCOUNTER — ROOM 4B
                  </span>
                  <span>EHR DRAFT #4092</span>
                </div>

                <div className="space-y-1.5 text-slate-800">
                  <div>
                    <strong className="text-blue-700">[Subjective]</strong> Patient reports persistent headache for 3 days, localized right temporal.
                  </div>
                  <div>
                    <strong className="text-slate-700">[Objective]</strong> BP: 128/84. No nuchal rigidity. Cranial nerves II-XII intact.
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-[11px] text-slate-900 mt-2">
                    <strong>Suggested ICD-10 Code:</strong> G44.209 (Tension headache, unspecified) — <span className="text-emerald-700 font-bold">99.4% Match</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <Check size={14} weight="bold" className="text-blue-600" /> 98.2% Accuracy SLA
              </span>
              <span>Saves ~2.4 hrs / physician / day</span>
            </div>
          </div>

          {/* Card 2: Zero-Trust Encrypted Record Vault (5 Cols Wide) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors duration-200 ease-out">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck size={20} weight="bold" className="text-slate-900" />
                  <span className="font-bold text-slate-900 text-lg tracking-tight">
                    Encrypted Record Vault
                  </span>
                </div>
                <Lock size={16} className="text-slate-400" />
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Hardware-backed 256-bit AES encryption with immutable cryptographic audit logging for every single patient health record query.
              </p>

              {/* Compliance Status Block */}
              <div className="bg-slate-50 rounded-xl border border-slate-200/90 p-4 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">HIPAA Security Audit</span>
                  <span className="text-emerald-700 font-bold">100% Passed</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-slate-900 h-1.5 rounded-full w-full" />
                </div>
                <div className="text-[10px] text-slate-500">
                  AES-256-GCM Hardware Security Module Enabled
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-700 font-semibold">
              <span>Instant BAA Agreement Included</span>
              <ArrowRight size={14} weight="bold" className="text-slate-400" />
            </div>
          </div>

          {/* Card 3: Dynamic Triage & Flow (5 Cols Wide) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors duration-200 ease-out">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <CalendarCheck size={20} weight="bold" className="text-slate-900" />
                  <span className="font-bold text-slate-900 text-lg tracking-tight">
                    Triage & Flow Engine
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded font-semibold">
                  Auto-Resolve
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Dynamic slot optimization and automated bi-directional SMS intake confirmations reduce patient no-show rates by 64%.
              </p>

              <div className="bg-slate-50 rounded-xl border border-slate-200/90 p-3.5 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">09:30 AM — Cardiac Follow-Up</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                    Confirmed
                  </span>
                </div>
                <div className="text-[11px] text-slate-500">
                  SMS reminder acknowledged by patient (10m ago)
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-700 font-semibold">
              64% Guaranteed Reduction in Unfilled Slots
            </div>
          </div>

          {/* Card 4: Revenue Cycle & Claims Adjudication (7 Cols Wide) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors duration-200 ease-out">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <Receipt size={20} weight="bold" className="text-emerald-700" />
                  <span className="font-bold text-slate-900 text-lg tracking-tight">
                    Revenue Cycle & Claim Adjudication
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-semibold">
                  Clearinghouse Direct
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Real-time claim scrubbing and direct clearinghouse integration ensure 99.1% first-pass claim acceptance with automated co-pay processing.
              </p>

              {/* Claims Adjudication Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/90">
                  <div className="text-[10px] text-slate-500 font-semibold uppercase">Clean Claims</div>
                  <div className="text-lg font-bold text-emerald-700 mt-0.5">99.1%</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/90">
                  <div className="text-[10px] text-slate-500 font-semibold uppercase">Avg Payout</div>
                  <div className="text-lg font-bold text-slate-900 mt-0.5">4.2 Days</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/90">
                  <div className="text-[10px] text-slate-500 font-semibold uppercase">Payer Sync</div>
                  <div className="text-lg font-bold text-blue-700 mt-0.5">1,200+</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-700 font-semibold">
              <TrendUp size={16} className="text-emerald-600" />
              <span>Integrated with Medicare, BCBS, Aetna, and major commercial payers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
