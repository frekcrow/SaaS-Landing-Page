"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Switch } from "@heroui/switch";
import {
  CheckCircle,
  Pulse,
  Sparkle,
  ArrowRight,
} from "@phosphor-icons/react";

const easeOutCurve = [0.23, 1, 0.32, 1];

interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  monthlyPrice: string;
  annualPrice: string;
  featured?: boolean;
  features: string[];
  ctaText: string;
  badge?: string;
}

const tiers: PricingTier[] = [
  {
    id: "practice",
    name: "Clinical Practice",
    subtitle: "Ideal for boutique, solo, or small specialist clinics.",
    monthlyPrice: "$149",
    annualPrice: "$119",
    features: [
      "Up to 3 Licensed Practitioners",
      "1,500 Active Patient Records",
      "Core EHR & Patient Portal",
      "Smart Appointment Scheduling & SMS",
      "Standard Claims Clearinghouse Sync",
      "HIPAA Compliance & BAA Included",
      "Email & Chat Support (24h SLA)",
    ],
    ctaText: "Start 14-Day Free Trial",
  },
  {
    id: "group",
    name: "Multi-Specialty Group",
    subtitle: "Built for expanding clinics requiring AI clinical scribe & automated billing.",
    monthlyPrice: "$399",
    annualPrice: "$319",
    featured: true,
    badge: "Most Popular Practice Choice",
    features: [
      "Up to 15 Licensed Practitioners",
      "Unlimited Patient Health Records",
      "AI Ambient Consultation Scribe",
      "Automated Revenue Cycle & Scrubbing",
      "Telehealth & Remote Vitals Integration",
      "Multi-Location Practice Dashboard",
      "Dedicated Onboarding Manager (4h SLA)",
      "Full API & HL7 FHIR Access",
    ],
    ctaText: "Upgrade to Precision Practice",
  },
  {
    id: "enterprise",
    name: "Health System & Hospital",
    subtitle: "Tailored for hospital networks, ACOs, and multi-facility health centers.",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    features: [
      "Unlimited Practitioners & Locations",
      "Custom On-Premise / Private Cloud Deploy",
      "Legacy Epic / Cerner / Allscripts Sync",
      "Custom AI Diagnostic Models Training",
      "Dedicated Clinical Account Manager",
      "100% Uptime SLA Guarantee",
      "Custom Compliance & Security Audits",
    ],
    ctaText: "Contact Health Systems Team",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOutCurve,
    },
  },
};

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="w-full bg-[#FAFAFC] py-28 px-4 sm:px-8 lg:px-12 text-slate-900 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOutCurve }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-semibold">
            <Pulse size={14} weight="bold" />
            <span>TRANSPARENT PRACTICE INVESTMENTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Predictable Pricing Built to Scale Your Practice
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            No hidden per-claim fees or surprise migration costs. All plans include 256-bit encryption and HIPAA compliance.
          </p>

          {/* Billing Cycle Switch */}
          <div className="pt-6 flex items-center justify-center gap-4">
            <span
              className={`text-xs sm:text-sm font-semibold transition-colors ${
                !isAnnual ? "text-slate-900" : "text-slate-500"
              }`}
            >
              Monthly Billing
            </span>

            <Switch
              isSelected={isAnnual}
              onValueChange={setIsAnnual}
              color="primary"
              aria-label="Toggle annual pricing"
              classNames={{
                wrapper: "group-data-[selected=true]:bg-blue-600",
              }}
            />

            <span
              className={`text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 ${
                isAnnual ? "text-slate-900" : "text-slate-500"
              }`}
            >
              <span>Annual Practice Billing</span>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-mono text-blue-700 font-bold">
                SAVE 20%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards Grid - Double Bezel Light Architecture */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {tiers.map((tier) => {
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;

            return (
              <motion.div
                key={tier.id}
                variants={itemVariants}
                className="flex flex-col h-full"
              >
                <div
                  className={`p-2 rounded-[2.5rem] h-full flex flex-col justify-between transition-all duration-300 ${
                    tier.featured
                      ? "bg-blue-600/10 border-2 border-blue-600/40 shadow-[0_20px_40px_-15px_rgba(37,99,235,0.12)]"
                      : "bg-slate-200/50 border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.04)]"
                  }`}
                >
                  <div className="rounded-[2rem] bg-white border border-slate-200/80 p-6 sm:p-8 h-full flex flex-col justify-between relative">
                    {/* Featured Badge */}
                    {tier.featured && tier.badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                        <div className="bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
                          <Sparkle size={14} weight="fill" />
                          <span>{tier.badge}</span>
                        </div>
                      </div>
                    )}

                    <div>
                      {/* Header */}
                      <div className="pb-6 border-b border-slate-100">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                          {tier.name}
                        </h3>
                        <p className="text-xs text-slate-500 mt-2 min-h-[32px] leading-relaxed">
                          {tier.subtitle}
                        </p>

                        {/* Price Display */}
                        <div className="mt-6 flex items-baseline gap-2">
                          <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-mono tracking-tight">
                            {price}
                          </span>
                          {price !== "Custom" && (
                            <span className="text-xs text-slate-500 font-semibold">
                              / practitioner / month
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Features List */}
                      <div className="py-6 space-y-3.5">
                        <div className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                          Included Platform Capabilities
                        </div>

                        <ul className="space-y-3">
                          {tier.features.map((feature, featureIdx) => (
                            <li
                              key={featureIdx}
                              className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium"
                            >
                              <CheckCircle
                                size={18}
                                weight="fill"
                                className="text-blue-600 shrink-0 mt-0.5"
                              />
                              <span className="leading-tight">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4 border-t border-slate-100">
                      <Button
                        size="lg"
                        className={`w-full font-semibold text-xs sm:text-sm h-12 rounded-full transition-all flex items-center justify-center gap-2 active:scale-[0.98] ${
                          tier.featured
                            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-[0_10px_20px_-5px_rgba(37,99,235,0.3)]"
                            : "bg-slate-900 hover:bg-slate-800 text-white"
                        }`}
                        endContent={<ArrowRight size={16} weight="bold" />}
                      >
                        {tier.ctaText}
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;
