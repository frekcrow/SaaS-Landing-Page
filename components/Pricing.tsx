"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Switch } from "@heroui/switch";
import { CheckCircle } from "@phosphor-icons/react";

interface PricingTier {
  name: string;
  description: string;
  monthlyPrice: string;
  annualPrice: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    description: "Ideal for solo practitioners and newly opened medical clinics.",
    monthlyPrice: "$49",
    annualPrice: "$39",
    features: [
      "Up to 2 practitioners",
      "500 active patient profiles",
      "Standard appointment scheduling",
      "Basic electronic health records",
      "Email support & documentation",
    ],
    ctaText: "Start Free Trial",
  },
  {
    name: "Professional",
    description: "Designed for growing practices requiring advanced clinical automation.",
    monthlyPrice: "$129",
    annualPrice: "$99",
    popular: true,
    features: [
      "Up to 10 practitioners",
      "Unlimited patient profiles",
      "Smart bookings with conflict resolution",
      "Full HIPAA-compliant EHR & analytics",
      "Automated SMS/Email reminders",
      "Integrated billing & insurance tracking",
      "Priority 24/7 dedicated support",
    ],
    ctaText: "Get Started Now",
  },
  {
    name: "Enterprise",
    description: "Tailored solutions for multi-location medical centers and large hospitals.",
    monthlyPrice: "$299",
    annualPrice: "$249",
    features: [
      "Unlimited practitioners & locations",
      "Custom EHR workflow integration",
      "Advanced predictive analytics & AI",
      "Dedicated account manager & SLA",
      "Custom security & compliance review",
      "API access & custom webhooks",
    ],
    ctaText: "Contact Sales",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="w-full bg-[#0a0a0a] py-24 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Simple, transparent pricing for any clinic size
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Choose the perfect plan to streamline operations, optimize clinical workflows, and grow your practice.
          </p>

          {/* Billing Cycle Toggle Switch */}
          <div className="pt-6 flex items-center justify-center gap-4">
            <span
              className={`text-sm font-medium transition-colors ${
                !isAnnual ? "text-white" : "text-zinc-400"
              }`}
            >
              Monthly
            </span>
            <Switch
              isSelected={isAnnual}
              onValueChange={setIsAnnual}
              color="primary"
              aria-label="Toggle billing cycle"
            />
            <span
              className={`text-sm font-medium transition-colors ${
                isAnnual ? "text-white" : "text-zinc-400"
              }`}
            >
              Annually{" "}
              <span className="ml-1.5 inline-block rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-primary">
                Save 20%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {pricingTiers.map((tier, index) => {
            const isPopular = tier.popular;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="flex flex-col h-full"
              >
                <Card
                  className={`flex flex-col justify-between h-full p-2 rounded-2xl relative ${
                    isPopular
                      ? "bg-[#171717] border-2 border-primary shadow-[0_0_30px_rgba(var(--heroui-primary-rgb,59,130,246),0.2)]"
                      : "bg-[#171717] border border-white/5 hover:border-white/10 transition-colors"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div>
                    <CardHeader className="flex flex-col items-start gap-2 pt-6 px-4 pb-2">
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {tier.name}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed min-h-[36px]">
                        {tier.description}
                      </p>
                      <div className="mt-4 flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-white tracking-tight">
                          {isAnnual ? tier.annualPrice : tier.monthlyPrice}
                        </span>
                        <span className="text-sm text-zinc-400 font-medium">
                          / month
                        </span>
                      </div>
                    </CardHeader>

                    <CardBody className="py-6 px-4">
                      <div className="w-full border-t border-white/5 mb-6" />
                      <ul className="space-y-3.5">
                        {tier.features.map((feature, featureIdx) => (
                          <li
                            key={featureIdx}
                            className="flex items-start gap-3 text-sm text-zinc-300"
                          >
                            <CheckCircle
                              size={20}
                              weight="fill"
                              className="text-primary shrink-0 mt-0.5"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardBody>
                  </div>

                  <CardFooter className="pt-2 px-4 pb-6">
                    <Button
                      color="primary"
                      variant={isPopular ? "solid" : "bordered"}
                      size="lg"
                      className={`w-full font-semibold rounded-xl ${
                        !isPopular
                          ? "border-zinc-700 text-zinc-200 hover:bg-zinc-800"
                          : ""
                      }`}
                    >
                      {tier.ctaText}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;
