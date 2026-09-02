"use client";

import {
  Pulse,
  ShieldCheck,
  CheckCircle,
  TwitterLogo,
  LinkedinLogo,
  GithubLogo,
  Heart,
} from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="w-full bg-[#030303] text-zinc-400 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16">
        {/* Top Operational Status Banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-zinc-950/80 border border-white/10 mb-12">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono text-zinc-200 font-semibold">
              ClinicOS Systems Operational • 99.99% Uptime SLA
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck size={16} weight="fill" />
              <span>HIPAA & SOC 2 Type II Verified</span>
            </span>
          </div>
        </div>

        {/* Core Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Brand & Mission Column (2 cols wide on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                <Pulse size={18} weight="bold" className="text-emerald-400" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Clinic<span className="text-emerald-400 font-mono text-base">OS</span>
              </span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              The next-generation clinical operating platform for modern medical practices, health systems, and specialty clinics worldwide.
            </p>

            <div className="pt-2 flex items-center gap-3 text-[11px] font-mono text-zinc-500">
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">
                HL7 FHIR v4
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">
                256-Bit AES
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">
                BAA Ready
              </span>
            </div>
          </div>

          {/* Navigation Column 1: Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-white font-semibold tracking-wider">
              Clinical Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#features" className="hover:text-emerald-400 transition-colors">
                  AI Ambient Scribe
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-emerald-400 transition-colors">
                  EHR & Record Vault
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-emerald-400 transition-colors">
                  Triage & Scheduling
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-emerald-400 transition-colors">
                  Claims Adjudication
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-emerald-400 transition-colors">
                  Telehealth Vitals Sync
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-white font-semibold tracking-wider">
              Security & Trust
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#compliance" className="hover:text-emerald-400 transition-colors">
                  HIPAA Security Guide
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-emerald-400 transition-colors">
                  Execute BAA Online
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-emerald-400 transition-colors">
                  SOC 2 Type II Report
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-emerald-400 transition-colors">
                  Data Residency & Backup
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 3: Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-white font-semibold tracking-wider">
              Practice Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  API & Webhook Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Practice ROI Calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  EHR Migration Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  24/7 Clinical Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span>© 2026 ClinicOS Inc. Designed for medical excellence.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              BAA Agreement
            </a>

            <div className="flex items-center gap-3 text-zinc-400 ml-2">
              <a href="#" aria-label="Twitter" className="hover:text-emerald-400 transition-colors">
                <TwitterLogo size={18} weight="fill" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-emerald-400 transition-colors">
                <LinkedinLogo size={18} weight="fill" />
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-emerald-400 transition-colors">
                <GithubLogo size={18} weight="fill" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
