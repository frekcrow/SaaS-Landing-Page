"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import {
  Brain, Pulse, Lightning, ShieldCheck, Waveform,
  Sparkle, SlidersHorizontal, CheckCircle, FileText,
  Shield, HardDrive, Cpu, Heartbeat,
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
    id: "ai-diagnostics",
    badge: "مستشعر الذكاء الاصطناعي",
    title: "التحليل التشخيصي المتقدم التنبؤي",
    description: "توليد فوري وقائم على الأدلة لتقارير SOAP وتحليلات الأعراض باستخدام نماذج طبية معالجة عصبياً وموثوقة بنسبة 99.8%.",
    metrics: [
      { label: "دقة التنبؤ", value: "99.8%" },
      { label: "اختصار زمن الوثائق", value: "-75%" },
    ],
    accentColor: "from-blue-500 to-indigo-600",
    renderGraphic: () => (
      <div className="w-full max-w-md h-[340px] p-6 flex flex-col justify-between bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 rounded-2xl text-white shadow-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
              <Brain size={24} weight="duotone" />
            </div>
            <div>
              <div className="text-xs font-mono text-blue-400">محلل Clinical-AI v4.2</div>
              <div className="text-sm font-bold text-slate-100">تحليل الاستشارات الطبية الحية</div>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            نشط الان
          </span>
        </div>
        <div className="my-3 space-y-2.5">
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heartbeat size={18} className="text-blue-400" />
              <span className="text-xs text-slate-300">مؤشر المخاطر القلبية</span>
            </div>
            <div className="text-xs font-mono font-bold text-emerald-400">منخفض (12%)</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Waveform size={18} className="text-indigo-400" />
              <span className="text-xs text-slate-300">توليد تقرير SOAP تلقائي</span>
            </div>
            <div className="text-xs font-mono font-bold text-blue-400">مكتمل</div>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-500/20 flex items-center justify-between text-xs text-slate-300">
          <span className="flex items-center gap-1.5 font-mono text-[11px]">
            <Sparkle size={14} className="text-blue-400" /> اقتراح العلاج المؤتمت
          </span>
          <span className="font-mono text-blue-300 font-bold">جاهز للمراجعة</span>
        </div>
      </div>
    ),
  },
  {
    id: "telemetry-hub",
    badge: "مراقبة حية مستمرة",
    title: "منصة القياسات الحيوية والاتصال المباشر",
    description: "متابعة لحظية وتنبيهات طوارئ ذكية لكل العلامات الحيوية للمرضى، متصلة مباشرة بسجل المريض الإلكتروني.",
    metrics: [
      { label: "معدل المزامنة", value: "<10ms" },
      { label: "التنبيهات المباشرة", value: "24/7" },
    ],
    accentColor: "from-emerald-500 to-teal-600",
    renderGraphic: () => (
      <div className="w-full max-w-md h-[340px] p-6 flex flex-col justify-between bg-white rounded-2xl text-slate-900 shadow-xl border border-slate-200 select-none">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200">
              <Pulse size={24} weight="bold" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">Telemetry Stream</div>
              <div className="text-sm font-bold text-slate-900">غرفة العناية وقياس الأجهزة</div>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-100 text-emerald-700 font-bold">
            99.99% Uptime
          </span>
        </div>
        <div className="my-3 grid grid-cols-2 gap-3">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div className="text-[10px] text-slate-500 font-mono">نبض القلب (BPM)</div>
            <div className="text-2xl font-mono font-extrabold text-slate-900 mt-1">72</div>
            <div className="text-[10px] text-emerald-600 font-bold mt-1">طبيعي وحيوي</div>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div className="text-[10px] text-slate-500 font-mono">تشبع الأكسجين (SpO2)</div>
            <div className="text-2xl font-mono font-extrabold text-slate-900 mt-1">98%</div>
            <div className="text-[10px] text-emerald-600 font-bold mt-1">مستقر جداً</div>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-slate-900 text-white flex items-center justify-between text-xs">
          <span className="font-mono text-slate-300">نظام الإنذار الأوتوماتيكي</span>
          <span className="px-2 py-0.5 rounded bg-emerald-500 text-white font-mono text-[10px]">مُفعل</span>
        </div>
      </div>
    ),
  },
  {
    id: "workflow-automation",
    badge: "أتمتة الممارسة الطبية",
    title: "مُنسق سير العمليات الإدارية والمالية",
    description: "إعادة أتمتة المواعيد، الفواتير، والمطالبات التأمينية بسلاسة متكاملة للحد من الهدر الزمني والإداري.",
    metrics: [
      { label: "تسريع المطالبات", value: "3x" },
      { label: "خفض التكاليف", value: "40%" },
    ],
    accentColor: "from-cyan-500 to-blue-600",
    renderGraphic: () => (
      <div className="w-full max-w-md h-[340px] p-6 flex flex-col justify-between bg-slate-900 text-white rounded-2xl shadow-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <Lightning size={24} weight="duotone" />
            </div>
            <div>
              <div className="text-xs font-mono text-cyan-400">Workflow Engine</div>
              <div className="text-sm font-bold text-slate-100">المقاصة وتسوية المطالبات</div>
            </div>
          </div>
          <SlidersHorizontal size={20} className="text-slate-400" />
        </div>
        <div className="my-3 space-y-2">
          {[
            { step: "مزامنة موعد المريض", status: "مكتمل", icon: CheckCircle },
            { step: "التحقق من التغطية التأمينية", status: "معتمد", icon: CheckCircle },
            { step: "إرسال المطالبة المباشرة", status: "جاري المعالجة", icon: Cpu },
          ].map((item, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <item.icon size={16} className="text-cyan-400" />
                <span className="text-slate-200">{item.step}</span>
              </div>
              <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                {item.status}
              </span>
            </div>
          ))}
        </div>
        <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>معدل الأتمتة الإجمالي</span>
          <span className="font-mono text-white font-bold">94.2%</span>
        </div>
      </div>
    ),
  },
  {
    id: "security-compliance",
    badge: "حماية وامتثال فائق",
    title: "خزنة البيانات والتشفير العسكري",
    description: "التزام كامل بمعايير HIPAA وتشفير AES-256 مع سجل تدقيق غير قابل للتعديل لضمان أعلى معايير الخصوصية.",
    metrics: [
      { label: "التشفير", value: "AES-256" },
      { label: "معايير الامتثال", value: "100%" },
    ],
    accentColor: "from-blue-600 to-slate-900",
    renderGraphic: () => (
      <div className="w-full max-w-md h-[340px] p-6 flex flex-col justify-between bg-white rounded-2xl text-slate-900 shadow-xl border border-slate-200 select-none">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
              <ShieldCheck size={24} weight="bold" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">Security Core</div>
              <div className="text-sm font-bold text-slate-900">سجل أمان العيادة وتشفير السجلات</div>
            </div>
          </div>
          <Shield size={22} className="text-blue-600" />
        </div>
        <div className="my-3 space-y-2.5">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HardDrive size={18} className="text-slate-700" />
              <span className="text-xs font-medium text-slate-800">تشفير القواعد المباشرة</span>
            </div>
            <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
              AES-256 Bit
            </span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText size={18} className="text-slate-700" />
              <span className="text-xs font-medium text-slate-800">سجل تدقيق الوصول HIPAA</span>
            </div>
            <span className="text-[10px] font-mono bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded">
              مؤمن بالكامل
            </span>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-slate-900 text-white flex items-center justify-between text-xs">
          <span className="font-mono text-slate-300">حالة خوادم الامتثال</span>
          <span className="text-emerald-400 font-bold font-mono">محمية 100%</span>
        </div>
      </div>
    ),
  },
];

interface AnimatedLeftGraphicProps {
  item: FeatureItem;
  index: number;
  progress: MotionValue<number>;
}

function AnimatedLeftGraphic({ item, index, progress }: AnimatedLeftGraphicProps) {
  const ranges = [
    [0.0, 0.05, 0.20, 0.28],
    [0.22, 0.30, 0.45, 0.53],
    [0.47, 0.55, 0.70, 0.78],
    [0.72, 0.80, 0.95, 1.0],
  ];

  const currentRange = ranges[index];
  const y = useTransform(progress, currentRange, [240, 0, 0, -240]);
  const rotate = useTransform(progress, currentRange, [30, 0, 0, -30]);
  const x = useTransform(progress, currentRange, [-40, 0, 0, -40]);
  const opacity = useTransform(
    progress,
    currentRange,
    index === 0 ? [1, 1, 1, 0] : index === 3 ? [0, 1, 1, 1] : [0, 1, 1, 0]
  );
  const scale = useTransform(progress, currentRange, [0.85, 1, 1, 0.85]);

  return (
    <motion.div style={{ y, rotate, x, opacity, scale }} className="absolute inset-0 flex items-center justify-center p-2">
      {item.renderGraphic()}
    </motion.div>
  );
}

interface AnimatedRightTextProps {
  item: FeatureItem;
  index: number;
  progress: MotionValue<number>;
}

function AnimatedRightText({ item, index, progress }: AnimatedRightTextProps) {
  const ranges = [
    [0.0, 0.05, 0.20, 0.28],
    [0.22, 0.30, 0.45, 0.53],
    [0.47, 0.55, 0.70, 0.78],
    [0.72, 0.80, 0.95, 1.0],
  ];

  const currentRange = ranges[index];
  const y = useTransform(progress, currentRange, [-240, 0, 0, 240]);
  const rotate = useTransform(progress, currentRange, [-30, 0, 0, 30]);
  const x = useTransform(progress, currentRange, [40, 0, 0, 40]);
  const opacity = useTransform(
    progress,
    currentRange,
    index === 0 ? [1, 1, 1, 0] : index === 3 ? [0, 1, 1, 1] : [0, 1, 1, 0]
  );
  const scale = useTransform(progress, currentRange, [0.85, 1, 1, 0.85]);

  return (
    <motion.div style={{ y, rotate, x, opacity, scale }} className="absolute inset-0 flex flex-col justify-center px-4 text-right">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold w-fit mb-4">
        <span>{item.badge}</span>
      </div>
      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
        {item.title}
      </h3>
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
        {item.description}
      </p>
      <div className="grid grid-cols-2 gap-4 border-t border-slate-200/80 pt-4">
        {item.metrics.map((m, idx) => (
          <div key={idx}>
            <div className="text-xs font-mono text-slate-500">{m.label}</div>
            <div className="text-xl font-mono font-extrabold text-slate-900 mt-0.5">{m.value}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section id="features" ref={containerRef} className="relative w-full h-[300vh] bg-[#FAFAFC] border-b border-slate-200/80">
      
      {/* حاوية التمرير الملتصقة */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center select-none">

        {/* الدائرة اليسرى (تم استخدام vh لضمان شكلها الدائري ومحاذاتها لمنتصف الشاشة) */}
        <div
          id="left-circle"
          className="absolute top-1/2 -translate-y-1/2 right-[50%] mr-[-3vh] w-[130vh] h-[130vh] rounded-full border-4 border-slate-200 bg-transparent pointer-events-none"
        >
          {/* محتوى الدائرة اليسرى (الرسومات) */}
          <div className="absolute top-1/2 -translate-y-1/2 right-[10vh] w-[40vw] max-w-[440px] h-[360px] flex items-center justify-center pointer-events-auto">
            {featuresData.map((item, index) => (
              <AnimatedLeftGraphic key={item.id} item={item} index={index} progress={smoothProgress} />
            ))}
          </div>
        </div>

        {/* الدائرة اليمنى */}
        <div
          id="Right-circle"
          className="absolute top-1/2 -translate-y-1/2 left-[50%] ml-[-3vh] w-[130vh] h-[130vh] rounded-full border-4 border-slate-200 bg-transparent pointer-events-none"
        >
          {/* محتوى الدائرة اليمنى (النصوص) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[10vh] w-[40vw] max-w-[440px] h-[360px] flex items-center justify-center pointer-events-auto">
            {featuresData.map((item, index) => (
              <AnimatedRightText key={item.id} item={item} index={index} progress={smoothProgress} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Features;