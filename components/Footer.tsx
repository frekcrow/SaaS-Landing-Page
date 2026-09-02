"use client";

import {
  Pulse,
  ShieldCheck,
  TwitterLogo,
  LinkedinLogo,
  GithubLogo,
} from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="w-full bg-white text-slate-600 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16">
        {/* Top Operational Status Banner - Light Mode */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-12 shadow-2xs">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono text-slate-800 font-semibold">
              ClinicOS Systems Operational • 99.99% Uptime SLA
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-600 font-semibold">
            <span className="flex items-center gap-1.5 text-blue-700">
              <ShieldCheck size={16} weight="fill" />
              <span>HIPAA & SOC 2 Type II Verified</span>
            </span>
          </div>
        </div>

        {/* Core Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200/60">
          {/* Brand & Mission Column (2 cols wide on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                <Pulse size={18} weight="bold" className="text-blue-600" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                Clinic<span className="text-blue-600 font-mono text-base">OS</span>
              </span>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm font-normal">
              The next-generation clinical operating platform for modern medical practices, health systems, and specialty clinics worldwide.
            </p>

            <div className="pt-2 flex items-center gap-3 text-[11px] font-mono text-slate-500 font-medium">
              <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200">
                HL7 FHIR v4
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200">
                256-Bit AES
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200">
                BAA Ready
              </span>
            </div>
          </div>

          {/* Navigation Column 1: Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-slate-900 font-bold tracking-wider">
              Clinical Platform
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#features" className="hover:text-blue-600 transition-colors">
                  AI Ambient Scribe
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-600 transition-colors">
                  EHR & Record Vault
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-600 transition-colors">
                  Triage & Scheduling
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-600 transition-colors">
                  Claims Adjudication
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-600 transition-colors">
                  Telehealth Vitals Sync
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-slate-900 font-bold tracking-wider">
              Security & Trust
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#compliance" className="hover:text-blue-600 transition-colors">
                  HIPAA Security Guide
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-blue-600 transition-colors">
                  Execute BAA Online
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-blue-600 transition-colors">
                  SOC 2 Type II Report
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-blue-600 transition-colors">
                  Data Residency & Backup
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 3: Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-slate-900 font-bold tracking-wider">
              Practice Resources
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  API & Webhook Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Practice ROI Calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  EHR Migration Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  24/7 Clinical Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <span>© 2026 ClinicOS Inc. Designed for medical excellence.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors">
              BAA Agreement
            </a>

            <div className="flex items-center gap-3 text-slate-600 ml-2">
              <a href="#" aria-label="Twitter" className="hover:text-blue-600 transition-colors">
                <TwitterLogo size={18} weight="fill" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-600 transition-colors">
                <LinkedinLogo size={18} weight="fill" />
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-blue-600 transition-colors">
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
