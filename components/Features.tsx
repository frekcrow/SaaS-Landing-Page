"use client";

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
  mockup: React.ReactNode;
}

export function Features() {
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

          <div
            className="bg-slate-50 rounded-xl border border-slate-200/80 p-4 font-mono text-xs space-y-2.5 text-right"
            dir="rtl"
          >
            <div className="text-slate-800">
              <strong className="text-blue-700">[الأعراض الذاتية]</strong>{" "}
              يشتكي المريض من صداع مستمر منذ 3 أيام، يتركز في الناحية الصدغية
              اليمنى.
            </div>
            <div className="text-slate-800">
              <strong className="text-slate-700">[الفحص السريري]</strong> ضغط
              الدم: 128/84. لا يوجد تصلب في الرقبة. الأعصاب القحفية II-XII سليمة.
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-[11px] text-slate-900 mt-2 flex items-center justify-between">
              <span>
                <strong>رمز ICD-10 المقترح:</strong> G44.209 (صداع التوتر)
              </span>
              <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                مطابقة 99.4%
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
            <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
              <Check size={14} weight="bold" className="text-blue-600" /> اتفاقية
              دقة 98.2%
            </span>
            <span>تحديث مباشر</span>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      badge: "الأمان والامتثال",
      badgeIcon: (
        <ShieldCheck size={15} weight="bold" className="text-slate-900" />
      ),
      title: "خزنة السجلات المشفرة بالتشفير زيرو ترست",
      description:
        "تشفير AES بمفتاح 256 بت مدعوم بالعتاد الصلب مع سجلات تدقيق غير قابلة للتغيير لكل استعلام عن السجل الصحي للمريض.",
      stats: [
        { label: "تدقيق أمان HIPAA", value: "اجتياز 100%" },
        { label: "معيار التشفير", value: "AES-256-GCM" },
      ],
      mockup: (
        <div className="w-full bg-white rounded-2xl border border-slate-200/90 p-6 shadow-md space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <ShieldCheck
                size={22}
                weight="bold"
                className="text-slate-900"
              />
              <span className="font-bold text-slate-900 text-sm">
                وحدة أمان العتاد HSM
              </span>
            </div>
            <Lock size={16} className="text-slate-400" />
          </div>

          <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-4 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">
                تدقيق الأمان والامتثال HIPAA
              </span>
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
      badgeIcon: (
        <CalendarCheck size={15} weight="bold" className="text-slate-900" />
      ),
      title: "محرك الفرز وتدفق المرضى الذكي",
      description:
        "تحسين المواعيد ديناميكياً وتأكيدات الحجز التلقائية عبر الرسائل النصية ثنائية الاتجاه تقلل نسبة عدم حضور المرضى بنسبة 64%.",
      stats: [
        { label: "انخفاض الغياب", value: "64%" },
        { label: "الرد التلقائي", value: "< 10 ثوانٍ" },
      ],
      mockup: (
        <div className="w-full bg-white rounded-2xl border border-slate-200/90 p-6 shadow-md space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <CalendarCheck
                size={22}
                weight="bold"
                className="text-slate-900"
              />
              <span className="font-bold text-slate-900 text-sm">
                جدول المواعيد والفرز
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded font-semibold">
              معالجة آلية
            </span>
          </div>

          <div
            className="bg-slate-50 rounded-xl border border-slate-200/80 p-3.5 space-y-2.5 text-xs font-mono text-right"
            dir="rtl"
          >
            <div className="flex items-center justify-between p-2 rounded bg-white border border-slate-200">
              <div>
                <span className="font-bold text-slate-900">09:30 AM</span> —
                متابعة أمراض القلب
              </div>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                مؤكد SMS
              </span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-white border border-slate-200">
              <div>
                <span className="font-bold text-slate-900">10:15 AM</span> — فحص
                سريري شمولي
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
              <div className="text-[9px] text-slate-500 uppercase font-semibold">
                مطالبات سليمة
              </div>
              <div className="text-base font-bold text-emerald-700 mt-0.5">
                99.1%
              </div>
            </div>
            <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 text-center">
              <div className="text-[9px] text-slate-500 uppercase font-semibold">
                متوسط السداد
              </div>
              <div className="text-base font-bold text-slate-900 mt-0.5">
                4.2 أيام
              </div>
            </div>
            <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 text-center">
              <div className="text-[9px] text-slate-500 uppercase font-semibold">
                جهات التأمين
              </div>
              <div className="text-base font-bold text-blue-700 mt-0.5">
                +1,200
              </div>
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

  return (
    <section
      id="features"
      className="w-full h-auto bg-[#FAFAFC] border-b border-slate-200/80 py-24 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-200/80 pb-6 gap-4">
          <div className="text-right space-y-2" dir="rtl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700">
              <Brain size={15} weight="bold" className="text-slate-900" />
              <span>الهندسة السريرية</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              مصمم للتميز السريري عالي الكفاءة
            </h2>
          </div>

          <div className="text-left font-mono text-xs text-slate-400 font-semibold">
            الميزات الرئيسية
          </div>
        </div>

        {/* Feature List */}
        <div className="space-y-20">
          {features.map((item, index) => (
            <div
              key={item.id}
              className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center border-b border-slate-200/60 pb-16 last:border-0 last:pb-0"
            >
              <div
                className={`w-full flex justify-center items-center ${
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                {item.mockup}
              </div>

              <div
                className={`w-full space-y-5 text-right ${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
