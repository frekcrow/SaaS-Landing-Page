"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import {
  CheckCircle,
  Pulse,
  Sparkle,
  ArrowRight,
  Shield,
  FileText,
} from "@phosphor-icons/react";

interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  monthlyPrice: string;
  annualPrice: string;
  featured?: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
}

const tiers: PricingTier[] = [
  {
    id: "solo",
    name: "Solo Practice",
    subtitle: "Built for independent physicians and specialty boutique practices.",
    monthlyPrice: "$149",
    annualPrice: "$119",
    features: [
      "Up to 3 Licensed Practitioners",
      "1,500 Active Patient Health Records",
      "Core Electronic Health Record (EHR)",
      "Automated Appointment Reminders (SMS)",
      "Clearinghouse Direct Claims Scrubbing",
      "HIPAA Compliance & BAA Execution",
      "Standard Support (24h SLA)",
    ],
    ctaText: "Start 14-Day Free Trial",
  },
  {
    id: "group",
    name: "Multi-Specialty Group",
    subtitle: "Designed for growing clinics requiring AI scribing and dynamic RCM.",
    monthlyPrice: "$399",
    annualPrice: "$319",
    featured: true,
    badge: "Recommended Practice Plan",
    features: [
      "Up to 15 Licensed Practitioners",
      "Unlimited Patient Records & Vault",
      "Ambient AI Consultation Scribe (SOAP)",
      "Automated Revenue Cycle Management",
      "Telehealth Vitals & Patient Portal",
      "HL7 FHIR Interoperability API",
      "Dedicated Practice Manager (4h SLA)",
    ],
    ctaText: "Upgrade Practice OS",
  },
  {
    id: "health-system",
    name: "Health System Network",
    subtitle: "Architected for hospitals, ACOs, and multi-facility networks.",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    features: [
      "Unlimited Practitioners & Locations",
      "On-Premise / Private HIPAA Cloud",
      "Legacy Epic / Cerner / Allscripts Sync",
      "Custom AI Diagnostic Scribe Training",
      "100% System Uptime SLA Guarantee",
      "Dedicated Clinical Account Team",
      "Custom Security & Audit Logs",
    ],
    ctaText: "Contact Health Systems Team",
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="w-full bg-[#FAFAFC] py-24 px-4 sm:px-6 lg:px-12 text-slate-900 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700">
            <Pulse size={14} weight="bold" className="text-slate-900" />
            <span>TRANSPARENT PRACTICE INVESTMENT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Predictable Pricing Built to Scale Your Practice.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            No hidden claim fees or surprise data migration costs. Every tier includes HIPAA compliance and 256-bit AES encryption.
          </p>

          {/* Practice Billing Segment Switch */}
          <div className="pt-6 flex items-center justify-center gap-3">
            <div className="bg-slate-200/80 p-1 rounded-xl border border-slate-300/60 inline-flex items-center text-xs font-mono font-bold relative">
              <button
                type="button"
                onClick={() => setIsAnnual(false)}
                className={`relative z-10 px-4 py-2 rounded-lg transition-colors duration-200 ease-out ${
                  !isAnnual
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Monthly Practice Billing
                {!isAnnual && (
                  <motion.div
                    layoutId="pricingTab"
                    className="absolute inset-0 bg-white rounded-lg shadow-xs -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </button>
              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                className={`relative z-10 px-4 py-2 rounded-lg transition-colors duration-200 ease-out flex items-center gap-2 ${
                  isAnnual
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>Annual Practice Billing</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 text-[10px] font-extrabold">
                  SAVE 20%
                </span>
                {isAnnual && (
                  <motion.div
                    layoutId="pricingTab"
                    className="absolute inset-0 bg-slate-900 rounded-lg shadow-xs -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier) => {
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;

            return (
              <div
                key={tier.id}
                className={`rounded-2xl bg-white border p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 ease-out ${
                  tier.featured
                    ? "border-slate-900 shadow-md ring-1 ring-slate-900/5 relative"
                    : "border-slate-200 shadow-xs hover:border-slate-300"
                }`}
              >
                <div>
                  {/* Featured Label */}
                  {tier.featured && (
                    <div className="mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] font-mono font-bold uppercase tracking-wider">
                        <Sparkle size={12} weight="fill" className="text-blue-400" />
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <div className="pb-6 border-b border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 min-h-[32px] leading-relaxed">
                      {tier.subtitle}
                    </p>

                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-mono tracking-tight">
                        {price}
                      </span>
                      {price !== "Custom" && (
                        <span className="text-xs text-slate-500 font-mono font-semibold">
                          / practitioner / month
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Included Features List */}
                  <div className="py-6 space-y-3">
                    <div className="text-[11px] font-mono uppercase text-slate-400 font-bold tracking-wider">
                      Core Platform Capabilities
                    </div>

                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIdx) => (
                        <li
                          key={featureIdx}
                          className="flex items-start gap-2.5 text-xs text-slate-700 font-medium"
                        >
                          <CheckCircle
                            size={16}
                            weight="fill"
                            className="text-slate-900 shrink-0 mt-0.5"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Action Button */}
                <div className="pt-4 border-t border-slate-100">
                  <Button
                    size="lg"
                    className={`w-full font-semibold text-xs h-11 rounded-xl transition-transform duration-150 ease-out active:scale-[0.97] flex items-center justify-center gap-2 ${
                      tier.featured
                        ? "bg-slate-900 hover:bg-slate-800 text-white shadow-xs"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight size={14} weight="bold" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
