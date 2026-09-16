"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
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
  CaretRight,
  CaretLeft
} from "@phosphor-icons/react";

interface FeatureItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  icon: React.ElementType;
}

export const featuresData: FeatureItem[] = [
  {
    id: "scheduling",
    badge: "الميزة الأولى",
    title: "جدولة كاملة للحجوزات وسجلات سحابية",
    description: "تضمن عدم تضارب مواعيد المرضى مع تذكيرات آلية، ولوحة تحكم تعرض حجوزات كل ساعة، مع سجل مفصل لكل زائر.",
    metrics: [
      { label: "تضارب المواعيد", value: "0%" },
      { label: "التذكيرات", value: "آلية" },
    ],
    icon: CalendarCheck,
  },
  {
    id: "dual-system",
    badge: "الميزة الثانية",
    title: "نظام ثنائي مدمج للطبيب والسكرتير",
    description: "واجهة للسكرتير لإدارة العيادة والبحث، وواجهة قيادة خاصة للطبيب للفوترة ومقارنة الملفات الطبية.",
    metrics: [
      { label: "سرعة البحث", value: "ثوانٍ" },
      { label: "واجهات مخصصة", value: "مستقلة" },
    ],
    icon: UsersThree,
  },
  {
    id: "e-prescriptions",
    badge: "الميزة الثالثة",
    title: "وصفات طبية إلكترونية سريعة",
    description: "كتابة الوصفات إلكترونياً بقوالب جاهزة، مع طباعة سريعة بأحجام A5, A4, A3 بضغطة زر مقترنة بطابعتك.",
    metrics: [
      { label: "أحجام الطباعة", value: "A3, A4, A5" },
      { label: "سرعة الإصدار", value: "فوري" },
    ],
    icon: FileText,
  },
  {
    id: "high-security",
    badge: "الميزة الرابعة",
    title: "نظام حماية عالي الخصوصية للممارس",
    description: "صندوق سجلات آمن يحفظ كافة إجراءات العيادة، وتعديلات السكرتير بالوقت والتاريخ لتجنب أي خلل إداري.",
    metrics: [
      { label: "مراقبة الإجراءات", value: "100%" },
      { label: "سجلات آمنة", value: "تلقائي" },
    ],
    icon: ShieldCheck,
  },
  {
    id: "printable-records",
    badge: "الميزة الخامسة",
    title: "خيارات الطباعة والأرشفة الورقية",
    description: "إمكانية طباعة كافة السجلات الطبية دون استثناء الموجودة داخل النظام ورقياً، لتوفير نسخ احتياطية.",
    metrics: [
      { label: "نسخ ورقي", value: "متاح" },
      { label: "قيود الطباعة", value: "مفتوح" },
    ],
    icon: Printer,
  },
  {
    id: "unlimited-usage",
    badge: "الميزة السادسة",
    title: "استخدام شامل خالي من القيود",
    description: "لا توجد أي حدود على استخدام النظام أو نقاط. يمكن لكافة الممارسين داخل العيادة استخدام النظام بأريحية تامة.",
    metrics: [
      { label: "سقف الاستخدام", value: "غير محدود" },
      { label: "قيود النظام", value: "معدومة" },
    ],
    icon: InfinityIcon,
  },
  {
    id: "telegram-bot",
    badge: "الميزة السابعة",
    title: "إدارة العيادة عبر بوت تليجرام",
    description: "اتصال مباشر مع بوت تليجرام خاص لإدخال بيانات المرضى والتحكم بالعيادة عن بُعد وخارج ساعات العمل.",
    metrics: [
      { label: "الوصول", value: "24/7" },
      { label: "الإدارة", value: "عن بُعد" },
    ],
    icon: TelegramLogo,
  },
  {
    id: "radiology-images",
    badge: "الميزة الثامنة",
    title: "أرشفة الأشعة والصور التشخيصية",
    description: "إمكانية رفع صور للأشعة السابقة أو الوصفات القديمة وإرفاقها داخل ملف المريض لمراجعتها بأي وقت.",
    metrics: [
      { label: "تخزين الصور", value: "متاح" },
      { label: "الوصول للأشعة", value: "فوري" },
    ],
    icon: ImageIcon,
  },
  {
    id: "smart-reminders",
    badge: "الميزة التاسعة",
    title: "تنبيهات ذكية بالاشتراكات",
    description: "ينبهك النظام آلياً باقتراب موعد انتهاء اشتراك العيادة الشهري أو السنوي قبل 6 أيام لضمان استمرارية الخدمة.",
    metrics: [
      { label: "إشعار التجديد", value: "مبكر" },
      { label: "المتابعة", value: "آلية" },
    ],
    icon: Bell,
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position for magnetic effect on the large background number
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Transform for parallax on the large number
  const numberX = useTransform(x, [-200, 200], [-20, 20]);
  const numberY = useTransform(y, [-200, 200], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    }
  };

  const goNext = () => setActiveIndex((prev) => (prev + 1) % featuresData.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + featuresData.length) % featuresData.length);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = featuresData[activeIndex];
  const CurrentIcon = current.icon;

  return (
    <section 
      id="features" 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="relative flex items-center justify-center min-h-[90vh] bg-white overflow-hidden w-full" 
      dir="rtl"
    >
      {/* Oversized index number - positioned relative to the full viewport width */}
      <motion.div
        className="absolute -right-4 md:right-0 lg:-right-8 top-1/2 -translate-y-1/2 text-[20rem] md:text-[32rem] lg:text-[40rem] font-bold text-slate-900/[0.03] select-none pointer-events-none leading-none tracking-tighter z-0"
        style={{ x: numberX, y: numberY }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            {String(activeIndex + 1).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      <div className="relative w-full max-w-6xl px-4 py-20 z-10">
        
        {/* Main content - asymmetric layout */}
        <div className="relative flex flex-col md:flex-row h-full">
          
          {/* Right column (RTL) - vertical text */}
          <div className="hidden md:flex flex-col items-center justify-center pl-16 border-l border-slate-200">
            <motion.span
              className="text-xs font-mono text-slate-400 tracking-widest uppercase"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              مميزات النظام
            </motion.span>

            {/* Vertical progress line */}
            <div className="relative h-40 w-px bg-slate-200 mt-8">
              <motion.div
                className="absolute top-0 right-0 w-full bg-blue-600 origin-top"
                animate={{
                  height: `${((activeIndex + 1) / featuresData.length) * 100}%`,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          {/* Center - main content */}
          <div className="flex-1 md:pr-16 py-8 md:py-12 flex flex-col justify-center min-h-[400px]">
            
            {/* Title with word reveal */}
            <div className="relative mb-2 md:mb-4 min-h-[100px] md:min-h-[120px]">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={activeIndex}
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.25] tracking-tight"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {current.title.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      className="inline-block ml-[0.25em]"
                      variants={{
                        hidden: { opacity: 0, y: 20, rotateX: 90 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                          transition: {
                            duration: 0.5,
                            delay: i * 0.05,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                        exit: {
                          opacity: 0,
                          y: -10,
                          transition: { duration: 0.2, delay: i * 0.02 },
                        },
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h3>
              </AnimatePresence>
            </div>

            {/* Description row */}
            <div className="flex items-start md:items-center gap-5 md:gap-6 mb-12">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="text-xl md:text-2xl text-slate-600 leading-relaxed md:leading-[1.6] max-w-2xl max-md:font-pinglight max-md:font-light"
                >
                  {current.description}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Metrics & Navigation row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 sm:gap-0 mt-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex items-center gap-8 md:gap-12"
                >
                  {/* Animated line before metrics (RTL orientation) */}
                  <motion.div
                    className="hidden sm:block w-12 h-px bg-slate-300"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    style={{ originX: 1 }}
                  />
                  
                  {current.metrics.map((m, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-xs font-mono text-slate-500 mb-1">{m.label}</span>
                      <span className="text-lg md:text-xl font-bold font-mono text-slate-900 tabular-nums">{m.value}</span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3">
                <motion.button
                  onClick={goPrev}
                  className="group relative w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center overflow-hidden bg-white hover:border-slate-800 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <CaretRight size={20} className="relative z-10 text-slate-700 transition-colors" />
                </motion.button>

                <motion.button
                  onClick={goNext}
                  className="group relative w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center overflow-hidden bg-white hover:border-slate-800 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <CaretLeft size={20} className="relative z-10 text-slate-700 transition-colors" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ticker - subtle repeating background text */}
      <div className="absolute -bottom-4 md:-bottom-12 left-0 right-0 overflow-hidden opacity-[0.03] pointer-events-none z-0">
        <motion.div
          className="flex whitespace-nowrap text-6xl font-bold tracking-tight"
          animate={{ x: [0, 1000] }} 
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8">
              {featuresData.map((t) => t.title.split(" ")[0]).join(" • ")} •
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}