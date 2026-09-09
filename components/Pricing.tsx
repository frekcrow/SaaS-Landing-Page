"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import {
  CheckCircle,
  Pulse,
  Sparkle,
  ArrowLeft,
} from "@phosphor-icons/react";

interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  featured?: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
}

const tiers: PricingTier[] = [
  {
    id: "monthly",
    name: "الاشتراك الشهري",
    subtitle: "مرونة كاملة ودفع شهري ميسر لعيادتك.",
    price: "178 IQD",
    period: "/ شهرياً",
    features: [
      "وصول كامل لنظام السجلات الطبية (EHR)",
      "تذكير آلي بالمواعيد للمرضى",
      "إدارة الفواتير والمطالبات المباشرة",
      "الامتثال لمعايير HIPAA وتشفير البيانات",
      "دعم فني قياسي",
    ],
    ctaText: "ابدأ الاشتراك الشهري",
  },
  {
    id: "yearly",
    name: "الاشتراك السنوي",
    subtitle: "توفير أكبر وراحة بال لمدة عام كامل.",
    price: "1780 IQD",
    period: "/ سنوياً",
    featured: true,
    features: [
      "جميع مميزات الاشتراك الشهري",
      "توفير مالي يعادل شهرين مجاناً",
      "أولوية في الدعم الفني (استجابة فورية)",
      "إدارة دورة الإيرادات المؤتمتة",
      "تحليلات متقدمة لأداء العيادة",
    ],
    ctaText: "ابدأ الاشتراك السنوي",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="w-full bg-[#FAFAFC] py-24 px-4 sm:px-6 lg:px-12 text-slate-900 border-b border-slate-200/80 relative dir-rtl" dir="rtl">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700">
            <Pulse size={14} weight="bold" className="text-slate-900" />
            <span>استثمار شفاف للممارسة الطبية</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
            أسعار واضحة ومحددة مصممة لتلائم احتياجاتك.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            اختر الباقة التي تناسب حجم ممارستك الطبية، بدون أي رسوم خفية أو تكاليف مفاجئة.
          </p>
        </div>

        {/* Pricing Cards Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch text-right">
          {tiers.map((tier) => (
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
                {tier.badge && (
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
                      {tier.price}
                    </span>
                    <span className="text-xs text-slate-500 font-mono font-semibold">
                      {tier.period}
                    </span>
                  </div>
                </div>

                {/* Included Features List */}
                <div className="py-6 space-y-3">
                  <div className="text-[11px] font-mono uppercase text-slate-400 font-bold tracking-wider">
                    قدرات المنصة الأساسية
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
              <div className="pt-4 border-t border-slate-100 mt-auto">
                <Button
                  size="lg"
                  className={`w-full font-semibold text-xs h-11 rounded-xl transition-transform duration-150 ease-out active:scale-[0.97] flex items-center justify-center gap-2 ${
                    tier.featured
                      ? "bg-slate-900 hover:bg-slate-800 text-white shadow-xs"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200"
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowLeft size={14} weight="bold" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
