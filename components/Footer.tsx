"use client";

import {
  Pulse,
  ShieldCheck,
  TwitterLogo,
  LinkedinLogo,
  GithubLogo,
  Lock,
} from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="w-full bg-white text-slate-600 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
        {/* Operational Status & Telemetry Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/90 mb-12 shadow-2xs font-mono text-xs">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-slate-800 font-bold">
              ClinicOS Systems Operational
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600">99.99% Historical Uptime SLA</span>
          </div>

          <div className="flex items-center gap-4 text-slate-700 font-semibold">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={16} weight="bold" className="text-slate-900" />
              <span>HIPAA & SOC 2 Type II Certified</span>
            </span>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200/80">
          {/* Brand & Technical Architecture Specs (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white">
                <Pulse size={18} weight="bold" className="text-blue-400" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                Clinic<span className="text-blue-600 font-mono text-base">OS</span>
              </span>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm font-normal">
              The clinical operating system for modern medical practices, health system networks, and specialty clinics worldwide.
            </p>

            <div className="pt-1 flex items-center gap-2 text-[10px] font-mono text-slate-500 font-medium">
              <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200">
                HL7 FHIR v4
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200">
                AES-256-GCM
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200">
                BAA Ready
              </span>
            </div>
          </div>

          {/* Column 1: Platform */}
          <div className="space-y-3 text-xs">
            <h4 className="font-mono text-[11px] uppercase text-slate-900 font-bold tracking-wider">
              Clinical Platform
            </h4>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li>
                <a href="#features" className="hover:text-slate-900 transition-colors">
                  Ambient AI Scribe
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-slate-900 transition-colors">
                  EHR & Encrypted Vault
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-slate-900 transition-colors">
                  Triage & Flow Queue
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-slate-900 transition-colors">
                  Revenue Cycle Adjudication
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-slate-900 transition-colors">
                  Telehealth Vitals Integration
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Trust & Compliance */}
          <div className="space-y-3 text-xs">
            <h4 className="font-mono text-[11px] uppercase text-slate-900 font-bold tracking-wider">
              Security & Trust
            </h4>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li>
                <a href="#compliance" className="hover:text-slate-900 transition-colors">
                  HIPAA Security Guide
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-slate-900 transition-colors">
                  Execute BAA Online
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-slate-900 transition-colors">
                  SOC 2 Type II Report
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-slate-900 transition-colors">
                  Data Residency & Backup
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-3 text-xs">
            <h4 className="font-mono text-[11px] uppercase text-slate-900 font-bold tracking-wider">
              Practice Resources
            </h4>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  API & Webhook Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Practice ROI Calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  EHR Data Migration Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  24/7 Clinical Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            <span>© 2026 ClinicOS Inc. Built for clinical precision.</span>
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
              <a href="#" aria-label="Twitter" className="hover:text-slate-900 transition-colors">
                <TwitterLogo size={16} weight="fill" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-slate-900 transition-colors">
                <LinkedinLogo size={16} weight="fill" />
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-slate-900 transition-colors">
                <GithubLogo size={16} weight="fill" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
