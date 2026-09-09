"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import {
  CalendarCheck,
  UsersThree,
  FileText,
  ShieldCheck,
  Printer,
  Infinity as InfinityIcon,
  TelegramLogo,
  Image as ImageIcon,
  Bell,
  Checks,
  Clock
} from "@phosphor-icons/react";

interface FeatureItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  accentColor: string;
  renderGraphic: () => React.ReactNode;
}

export const featuresData: FeatureItem[] = [
  {
    id: "scheduling",
    badge: "الميزة الأولى",
    title: "جدولة كاملة للحجوزات وسجلات سحابية",
    description: "تضمن عدم تضارب مواعيد المرضى مع تذكيرات آلية، ولوحة تحكم تعرض حجوزات كل ساعة، مع سجل مفصل لكل زائر.",
    metrics: [
      { label: "تضارب المواعيد", value: "0%" },
      { label: "التذكيرات الآلية", value: "متوفر" },
    ],
    accentColor: "from-blue-500 to-indigo-600",
    renderGraphic: () => (
      <CalendarCheck size={140} className="text-blue-500/40" weight="duotone" />
    ),
  },
  {
    id: "dual-system",
    badge: "الميزة الثانية",
    title: "نظام ثنائي مدمج للطبيب والسكرتير",
    description: "واجهة للسكرتير لإدارة العيادة والبحث وطباعة السجلات بثوانٍ، وواجهة قيادة خاصة للطبيب للفوترة والحسابات ومقارنة الملفات الطبية.",
    metrics: [
      { label: "سرعة البحث", value: "ثوانٍ معدودة" },
      { label: "واجهات مخصصة", value: "مستقلة" },
    ],
    accentColor: "from-emerald-500 to-teal-600",
    renderGraphic: () => (
      <UsersThree size={140} className="text-emerald-500/40" weight="duotone" />
    ),
  },
  {
    id: "e-prescriptions",
    badge: "الميزة الثالثة",
    title: "وصفات طبية إلكترونية سريعة",
    description: "كتابة الوصفات إلكترونياً بقوالب جاهزة، مع طباعة سريعة بأحجام A5, A4, A3 بضغطة زر وتصاميم مفصلة ومقترنة بطابعتك.",
    metrics: [
      { label: "أحجام الطباعة", value: "A3, A4, A5" },
      { label: "سرعة الإصدار", value: "فوري" },
    ],
    accentColor: "from-purple-500 to-fuchsia-600",
    renderGraphic: () => (
      <FileText size={140} className="text-purple-500/40" weight="duotone" />
    ),
  },
  {
    id: "high-security",
    badge: "الميزة الرابعة",
    title: "نظام حماية عالي الخصوصية للممارس",
    description: "صندوق سجلات آمن يحفظ كافة إجراءات العيادة، وتعديلات السكرتير أو الطبيب بالوقت والتاريخ لتجنب أي خلل إداري.",
    metrics: [
      { label: "مراقبة الإجراءات", value: "100%" },
      { label: "سجلات آمنة", value: "تلقائي" },
    ],
    accentColor: "from-slate-700 to-slate-900",
    renderGraphic: () => (
      <ShieldCheck size={140} className="text-slate-500/40" weight="duotone" />
    ),
  },
  {
    id: "printable-records",
    badge: "الميزة الخامسة",
    title: "خيارات الطباعة والأرشفة الورقية",
    description: "إمكانية طباعة كافة السجلات الطبية دون استثناء الموجودة داخل النظام ورقياً، لتوفير نسخ احتياطية عند الحاجة.",
    metrics: [
      { label: "النسخ الاحتياطي الورقي", value: "متاح" },
      { label: "قيود الطباعة", value: "لا يوجد" },
    ],
    accentColor: "from-orange-500 to-red-600",
    renderGraphic: () => (
      <Printer size={140} className="text-orange-500/40" weight="duotone" />
    ),
  },
  {
    id: "unlimited-usage",
    badge: "الميزة السادسة",
    title: "استخدام شامل خالي من القيود",
    description: "لا توجد أي حدود على استخدام النظام أو نقاط. يمكن لكافة الممارسين داخل العيادة استخدام نظام أطلس الطبي بأريحية تامة.",
    metrics: [
      { label: "سقف الاستخدام", value: "غير محدود" },
      { label: "قيود النظام", value: "معدومة" },
    ],
    accentColor: "from-cyan-500 to-blue-500",
    renderGraphic: () => (
      <InfinityIcon size={140} className="text-cyan-500/40" weight="duotone" />
    ),
  },
  {
    id: "telegram-bot",
    badge: "الميزة السابعة",
    title: "إدارة العيادة عبر بوت تليجرام",
    description: "اتصال مباشر مع بوت تليجرام خاص لإدخال بيانات المرضى والتحكم بالعيادة عن بُعد وخارج ساعات العمل للطبيب والسكرتير.",
    metrics: [
      { label: "الوصول عن بعد", value: "24/7" },
      { label: "إدارة البيانات", value: "من أي مكان" },
    ],
    accentColor: "from-sky-400 to-blue-600",
    renderGraphic: () => (
      <TelegramLogo size={140} className="text-sky-400/40" weight="duotone" />
    ),
  },
  {
    id: "radiology-images",
    badge: "الميزة الثامنة",
    title: "أرشفة الأشعة والصور التشخيصية",
    description: "إمكانية رفع صور للأشعة السابقة أو الوصفات القديمة وإرفاقها داخل ملف المريض لمراجعتها بأي وقت بسهولة.",
    metrics: [
      { label: "تخزين الصور", value: "متاح" },
      { label: "الوصول للأشعة", value: "فوري" },
    ],
    accentColor: "from-pink-500 to-rose-600",
    renderGraphic: () => (
      <ImageIcon size={140} className="text-pink-500/40" weight="duotone" />
    ),
  },
  {
    id: "smart-reminders",
    badge: "الميزة التاسعة",
    title: "تنبيهات ذكية بالاشتراكات",
    description: "نظام أطلس ينبهك آلياً باقتراب موعد انتهاء اشتراك العيادة الشهري أو السنوي قبل 6 أيام من تاريخ الانتهاء لضمان استمرارية الخدمة.",
    metrics: [
      { label: "إشعار التجديد", value: "قبل 6 أيام" },
      { label: "المتابعة", value: "آلية" },
    ],
    accentColor: "from-yellow-500 to-amber-600",
    renderGraphic: () => (
      <Bell size={140} className="text-yellow-500/40" weight="duotone" />
    ),
  },
];

export default function Features() {
  const [page, setPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Desktop Scroll Mapping: Drive the carousel via scroll position on md screens
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      let newPage = Math.floor(latest * featuresData.length);
      if (newPage >= featuresData.length) newPage = featuresData.length - 1;
      if (newPage !== page) setPage(newPage);
    }
  });

  const paginate = (newDirection: number) => {
    const next = page + newDirection;
    if (next < 0 || next >= featuresData.length) return;
    setPage(next);
  };

  const handleDotClick = (idx: number) => {
    if (typeof window !== "undefined" && window.innerWidth >= 768 && containerRef.current) {
      // On desktop, scroll the page to the corresponding section to sync with scroll mapping
      const rect = containerRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
      const segmentHeight = scrollableDistance / featuresData.length;
      const centerScrollY = sectionTop + (idx * segmentHeight) + (segmentHeight / 2);
      
      window.scrollTo({ top: centerScrollY, behavior: "smooth" });
    } else {
      // On mobile, just update the state
      setPage(idx);
    }
  };

  return (
    <section id="features" ref={containerRef} className="relative w-full md:h-[900vh] bg-[#FAFAFC]">
      {/* On mobile: normal static flow. On desktop: sticky to enable scroll-driven swipes */}
      <div className="md:sticky md:top-0 min-h-[100svh] flex flex-col items-center justify-center overflow-hidden w-full py-20 relative">
        <div className="relative w-full max-w-[90vw] sm:max-w-[500px] md:max-w-[560px] h-[460px] sm:h-[480px] flex items-center justify-center perspective-1000 mt-4">
          {featuresData.map((item, i) => {
            const distance = i - page;
            const isCenter = i === page;

            return (
              <motion.div
                key={item.id}
                animate={{
                  y: isCenter ? 0 : Math.abs(distance) * 40,
                  rotate: distance * 12,
                  scale: isCenter ? 1 : 1 - Math.abs(distance) * 0.08,
                  filter: isCenter ? "blur(0px)" : `blur(${Math.abs(distance) * 3}px)`,
                  opacity: isCenter ? 1 : Math.max(1 - Math.abs(distance) * 0.3, 0),
                  zIndex: featuresData.length - Math.abs(distance),
                }}
                transition={{
                  type: "spring",
                  duration: 0.35,
                  bounce: 0,
                }}
                whileTap={{ 
                  scale: isCenter ? 0.99 : 1 - Math.abs(distance) * 0.08 - 0.01 
                }}
                // Drag is enabled, but on desktop scroll takes over naturally
                drag={isCenter ? "x" : false}
                dragSnapToOrigin={true}
                dragConstraints={{ 
                  left: page === featuresData.length - 1 ? 0 : -1000, 
                  right: page === 0 ? 0 : 1000 
                }}
                dragElastic={0}
                onDragEnd={(e, { offset, velocity }) => {
                  if (!isCenter) return;
                  if (offset.x < -40 || velocity.x < -100) {
                    paginate(1);
                  } else if (offset.x > 40 || velocity.x > 100) {
                    paginate(-1);
                  }
                }}
                style={{ transformOrigin: "bottom center" }}
                className={`absolute w-[92%] sm:w-full h-full p-4 sm:p-5 bg-white rounded-3xl shadow-xl border border-slate-200/80 flex flex-col items-center justify-between will-change-transform overflow-hidden ${
                  isCenter ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"
                }`}
                onClick={() => handleDotClick(i)}
              >
              {/* Top Half: Graphic */}
              <div className="w-full h-[40%] flex items-center justify-center bg-slate-50/80 rounded-xl mb-4 border border-slate-100/50">
                <div className="w-full flex items-center justify-center transform scale-[0.60] sm:scale-[0.70]">
                  {item.renderGraphic()}
                </div>
              </div>

              {/* Bottom Half: Text & Metrics */}
              <div className="w-full h-[60%] flex flex-col justify-between text-right" dir="rtl">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold w-fit mb-3">
                    <span>{item.badge}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-slate-200/80 pt-4 mt-auto">
                  {item.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-[10px] sm:text-xs font-mono text-slate-500">{m.label}</div>
                      <div className="text-base sm:text-lg font-mono font-extrabold text-slate-900 mt-1 tabular-nums">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-3 mt-12 z-10" dir="ltr">
        {featuresData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setPage(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === page ? "bg-blue-600 scale-125" : "bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      </div>
    </section>
  );
}