"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  Sparkle,
  ShieldCheck,
  CalendarCheck,
  Receipt,
  Check,
  Lock,
  TrendUp,
  Brain,
  CheckCircle,
  Lightning,
} from "@phosphor-icons/react";

interface FeatureData {
  id: number;
  badge: string;
  badgeIcon: React.ReactNode;
  title: string;
  description: string;
  stats: { label: string; value: string }[];
  range: [number, number, number, number] | [number, number, number];
  mockup: React.ReactNode;
}

function FeatureItemWrapper({
  item,
  scrollYProgress,
  shouldReduceMotion,
}: {
  item: FeatureData;
  scrollYProgress: any;
  shouldReduceMotion: boolean | null;
}) {
  const isLast = item.range.length === 3;

  const leftY = useTransform(
    scrollYProgress,
    item.range,
    isLast ? [200, 0, 0] : [200, 0, -50, -200]
  );

  const leftRotate = useTransform(
    scrollYProgress,
    item.range,
    isLast ? [15, 0, 0] : [15, 0, -5, -15]
  );

  const leftScale = useTransform(
    scrollYProgress,
    item.range,
    isLast ? [0.94, 1, 1] : [0.94, 1, 0.97, 0.93]
  );

  const leftOpacity = useTransform(
    scrollYProgress,
    item.range,
    isLast ? [0, 1, 1] : [0, 1, 0.8, 0]
  );

  const rightY = useTransform(
    scrollYProgress,
    item.range,
    isLast ? [-200, 0, 0] : [-200, 0, 50, 200]
  );

  const rightRotate = useTransform(
    scrollYProgress,
    item.range,
    isLast ? [-15, 0, 0] : [-15, 0, 5, 15]
  );

  const rightOpacity = useTransform(
    scrollYProgress,
    item.range,
    isLast ? [0, 1, 1] : [0, 1, 1, 0]
  );

  if (shouldReduceMotion) {
    return (
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-10 border-b border-slate-200/80">
        <div className="w-full">{item.mockup}</div>
        <div className="w-full space-y-4 text-right" dir="rtl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-medium text-blue-700">
            {item.badgeIcon}
            <span>{item.badge}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            {item.title}
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
            {item.description}
          </p>
          <div className="grid grid-cols-2 gap-3 pt-2 font-mono">
            {item.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs"
              >
                <div className="text-xs text-slate-500">{stat.label}</div>
                <div className="text-base font-bold text-slate-900 mt-0.5">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center px-4" dir="ltr">
        {/* Physical Left Side: UI Mockup / Diagram (Enters from BOTTOM to TOP) */}
        <motion.div
          style={{
            y: leftY,
            rotate: leftRotate,
            scale: leftScale,
            opacity: leftOpacity,
          }}
          className="w-full flex justify-center items-center pointer-events-auto"
        >
          {item.mockup}
        </motion.div>

        {/* Physical Right Side: Text Explanations (Enters from TOP to BOTTOM) */}
        <motion.div
          style={{
            y: rightY,
            rotate: rightRotate,
            opacity: rightOpacity,
          }}
          className="w-full space-y-5 text-right pointer-events-auto"
          dir="rtl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-mono font-semibold text-blue-700 shadow-xs">
            {item.badgeIcon}
            <span>{item.badge}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-[1.25] tracking-tight">
            {item.title}
          </h3>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
            {item.description}
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2 font-mono">
            {item.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-xs"
              >
                <div className="text-[11px] text-slate-500 font-medium">
                  {stat.label}
                </div>
                <div className="text-lg font-bold text-slate-900 mt-0.5">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const features: FeatureData[] = [
    {
      id: 1,
      badge: "الذكاء الاصطناعي السريري",
      badgeIcon: <Sparkle size={15} weight="bold" className="text-blue-600" />,
      title: "كاتب الاستشارات الطبية المحيطي الذكي",
      description:
        "يسجل الحوار بين الطبيب والمريض تلقائياً أثناء الزيارة ويصيغ الملاحظات الطبية بنمط SOAP ومُدخلات السجل الطبي الإلكتروني والرموز التشخيصية ICD-10.",
      stats: [
        { label: "سرعة توليد الملاحظات", value: "3 ثوانٍ" },
        { label: "الوقت الموفر يومياً", value: "~2.4 ساعة" },
      ],
      range: [0.0, 0.15, 0.23, 0.28],
      mockup: (
        <div className="w-full bg-white rounded-2xl border border-slate-200/90 p-6 shadow-md space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-slate-900 text-sm">
                تسجيل الجلسة مباشر — الغرفة 4B
              </span>
            </div>
            <span className="text-[11px] font-mono text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full font-semibold">
              مسودة السجل الإلكتروني #4092
            </span>
          </div>

          <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-4 font-mono text-xs space-y-2.5 text-right" dir="rtl">
            <div className="text-slate-800">
              <strong className="text-blue-700">[الأعراض الذاتية]</strong> يشتكي المريض من صداع مستمر منذ 3 أيام، يتركز في الناحية الصدغية اليمنى.
            </div>
            <div className="text-slate-800">
              <strong className="text-slate-700">[الفحص السريري]</strong> ضغط الدم: 128/84. لا يوجد تصلب في الرقبة. الأعصاب القحفية II-XII سليمة.
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-[11px] text-slate-900 mt-2 flex items-center justify-between">
              <span><strong>رمز ICD-10 المقترح:</strong> G44.209 (صداع التوتر)</span>
              <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">مطابقة 99.4%</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
            <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
              <Check size={14} weight="bold" className="text-blue-600" /> اتفاقية دقة 98.2%
            </span>
            <span>تحديث مباشر</span>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      badge: "الأمان والامتثال",
      badgeIcon: <ShieldCheck size={15} weight="bold" className="text-slate-900" />,
      title: "خزنة السجلات المشفرة بالتشفير زيرو ترست",
      description:
        "تشفير AES بمفتاح 256 بت مدعوم بالعتاد الصلب مع سجلات تدقيق غير قابلة للتغيير لكل استعلام عن السجل الصحي للمريض.",
      stats: [
        { label: "تدقيق أمان HIPAA", value: "اجتياز 100%" },
        { label: "معيار التشفير", value: "AES-256-GCM" },
      ],
      range: [0.28, 0.40, 0.48, 0.53],
      mockup: (
        <div className="w-full bg-white rounded-2xl border border-slate-200/90 p-6 shadow-md space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <ShieldCheck size={22} weight="bold" className="text-slate-900" />
              <span className="font-bold text-slate-900 text-sm">
                وحدة أمان العتاد HSM
              </span>
            </div>
            <Lock size={16} className="text-slate-400" />
          </div>

          <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-4 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">تدقيق الأمان والامتثال HIPAA</span>
              <span className="text-emerald-700 font-bold">اجتياز بنسبة 100%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
              <div className="bg-slate-900 h-2 rounded-full w-full" />
            </div>
            <div className="text-[10px] text-slate-500">
              مفتاح التشفير الهجين AES-256-GCM مُمكّن بآلية Zero-Trust
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-700 font-semibold">
            <span className="flex items-center gap-1.5 text-emerald-700">
              <CheckCircle size={14} weight="bold" /> اتفاقية BAA مشفّرة فورية
            </span>
            <span>2025 Compliant</span>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      badge: "إدارة المواعيد",
      badgeIcon: <CalendarCheck size={15} weight="bold" className="text-slate-900" />,
      title: "محرك الفرز وتدفق المرضى الذكي",
      description:
        "تحسين المواعيد ديناميكياً وتأكيدات الحجز التلقائية عبر الرسائل النصية ثنائية الاتجاه تقلل نسبة عدم حضور المرضى بنسبة 64%.",
      stats: [
        { label: "انخفاض الغياب", value: "64%" },
        { label: "الرد التلقائي", value: "< 10 ثوانٍ" },
      ],
      range: [0.53, 0.65, 0.73, 0.78],
      mockup: (
        <div className="w-full bg-white rounded-2xl border border-slate-200/90 p-6 shadow-md space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <CalendarCheck size={22} weight="bold" className="text-slate-900" />
              <span className="font-bold text-slate-900 text-sm">
                جدول المواعيد والفرز
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded font-semibold">
              معالجة آلية
            </span>
          </div>

          <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-3.5 space-y-2.5 text-xs font-mono text-right" dir="rtl">
            <div className="flex items-center justify-between p-2 rounded bg-white border border-slate-200">
              <div>
                <span className="font-bold text-slate-900">09:30 AM</span> — متابعة أمراض القلب
              </div>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                مؤكد SMS
              </span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-white border border-slate-200">
              <div>
                <span className="font-bold text-slate-900">10:15 AM</span> — فحص سريري شمولي
              </div>
              <span className="text-[10px] bg-blue-100 text-blue-800 border border-blue-200 px-2 py-0.5 rounded font-bold">
                تأكيد تلقائي
              </span>
            </div>
          </div>

          <div className="pt-1 text-xs font-mono text-slate-700 font-semibold flex items-center justify-between">
            <span className="text-blue-700">توفير 64% في الساعات الشاغرة</span>
            <Lightning size={16} className="text-amber-500" />
          </div>
        </div>
      ),
    },
    {
      id: 4,
      badge: "الدورة المالية",
      badgeIcon: <Receipt size={15} weight="bold" className="text-blue-600" />,
      title: "دورة الإيرادات وتسوية المطالبات الفورية",
      description:
        "تدقيق المطالبات في الوقت الفعلي والربط المباشر مع شركات المقاصة يضمن قبول المطالبات من المرة الأولى بنسبة 99.1% مع معالجة الدفع المشارك آلياً.",
      stats: [
        { label: "قبول المطالبات الأول", value: "99.1%" },
        { label: "متوسط وقت السداد", value: "4.2 أيام" },
      ],
      range: [0.78, 0.90, 1.0],
      mockup: (
        <div className="w-full bg-white rounded-2xl border border-slate-200/90 p-6 shadow-md space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <Receipt size={22} weight="bold" className="text-blue-600" />
              <span className="font-bold text-slate-900 text-sm">
                لوحة التسوية التأمينية
              </span>
            </div>
            <span className="text-[11px] font-mono text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full font-semibold">
              مقاصة فورية
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 font-mono text-xs">
            <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 text-center">
              <div className="text-[9px] text-slate-500 uppercase font-semibold">مطالبات سليمة</div>
              <div className="text-base font-bold text-emerald-700 mt-0.5">99.1%</div>
            </div>
            <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 text-center">
              <div className="text-[9px] text-slate-500 uppercase font-semibold">متوسط السداد</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">4.2 أيام</div>
            </div>
            <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 text-center">
              <div className="text-[9px] text-slate-500 uppercase font-semibold">جهات التأمين</div>
              <div className="text-base font-bold text-blue-700 mt-0.5">+1,200</div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-700 font-semibold">
            <TrendUp size={16} className="text-blue-600 shrink-0" />
            <span>ربط مباشر وموثوق مع كافة الجهات الضامنة</span>
          </div>
        </div>
      ),
    },
  ];

  if (shouldReduceMotion) {
    return (
      <section id="features" className="w-full bg-[#FAFAFC] py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12 text-right space-y-3" dir="rtl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700">
            <Brain size={14} weight="bold" className="text-slate-900" />
            <span>الهندسة السريرية</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            مصمم للتميز السريري عالي الكفاءة.
          </h2>
        </div>
        <div className="space-y-12">
          {features.map((item) => (
            <FeatureItemWrapper
              key={item.id}
              item={item}
              scrollYProgress={scrollYProgress}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      id="features"
      ref={containerRef}
      className="relative w-full h-[250vh] bg-[#FAFAFC] border-b border-slate-200/80"
    >
      {/* Sticky Content Container pinned to full viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-6 sm:py-10 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Section Header - Fixed at top of sticky section */}
        <div className="w-full flex items-center justify-between border-b border-slate-200/60 pb-4 relative z-20">
          <div className="text-right space-y-1" dir="rtl">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-medium text-slate-700">
              <Brain size={13} weight="bold" className="text-slate-900" />
              <span>الهندسة السريرية</span>
            </div>
            <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              مصمم للتميز السريري عالي الكفاءة
            </h2>
          </div>

          <div className="text-left font-mono text-xs text-slate-400 font-semibold hidden sm:block">
            01 / 04 — الميزات
          </div>
        </div>

        {/* 50/50 Scrollytelling Animation Center Area */}
        <div className="relative flex-1 w-full flex items-center justify-center my-auto">
          {features.map((item) => (
            <FeatureItemWrapper
              key={item.id}
              item={item}
              scrollYProgress={scrollYProgress}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>

        {/* Section Footer */}
        <div className="w-full flex items-center justify-center pt-2 relative z-20">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200/80 shadow-xs text-xs font-mono text-slate-500">
            <span>التمرير للاستكشاف</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
