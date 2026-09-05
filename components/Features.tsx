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
  ArrowLeft,
} from "@phosphor-icons/react";

export function Features() {
  return (
    <section id="features" className="w-full bg-[#FAFAFC] py-24 px-4 sm:px-6 lg:px-12 text-slate-900 border-b border-slate-200/80 relative dir-rtl" dir="rtl">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header - Clean Right-Aligned Narrative for Arabic */}
        <div className="max-w-3xl mb-16 space-y-4 text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700">
            <Brain size={14} weight="bold" className="text-slate-900" />
            <span>الهندسة السريرية</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
            مصمم للتميز السريري عالي الكفاءة.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            القضاء على التشتت الإداري. تم تصميم كل مكون في النظام حول تركيز الممارس الطبي، وانسيابية تدفق المرضى بدون عوائق، والامتثال التنظيمي التام.
          </p>
        </div>

        {/* Asymmetric Clinical Workflow Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-right">
          {/* Card 1: Ambient Scribe & SOAP Note Synthesis (7 Cols Wide) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors duration-200 ease-out">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <Sparkle size={20} weight="bold" className="text-blue-600" />
                  <span className="font-bold text-slate-900 text-lg tracking-tight">
                    كاتب الاستشارات الطبية المحيطي
                  </span>
                </div>
                <span className="text-[11px] font-mono text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full font-semibold">
                  توليد الملاحظات خلال 3 ثوانٍ
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                يسجل الحوار بين الطبيب والمريض تلقائياً أثناء الزيارة ويصيغ الملاحظات الطبية بنمط SOAP ومُدخلات السجل الطبي الإلكتروني والرموز التشخيصية ICD-10.
              </p>

              {/* Realistic SOAP Output Preview */}
              <div className="bg-slate-50 rounded-xl border border-slate-200/90 p-4 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-[10px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    تسجيل الجلسة — الغرفة 4B
                  </span>
                  <span>مسودة السجل الإلكتروني #4092</span>
                </div>

                <div className="space-y-1.5 text-slate-800">
                  <div>
                    <strong className="text-blue-700">[الأعراض الذاتية]</strong> يشتكي المريض من صداع مستمر منذ 3 أيام، يتركز في الناحية الصدغية اليمنى.
                  </div>
                  <div>
                    <strong className="text-slate-700">[الفحص السريري]</strong> ضغط الدم: 128/84. لا يوجد تصلب في الرقبة. الأعصاب القحفية II-XII سليمة.
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-[11px] text-slate-900 mt-2">
                    <strong>رمز ICD-10 المقترح:</strong> G44.209 (صداع التوتر، غير محدد) — <span className="text-emerald-700 font-bold">مطابقة بنسبة 99.4%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <Check size={14} weight="bold" className="text-blue-600" /> اتفاقية دقة 98.2%
              </span>
              <span>يوفر ~2.4 ساعة / طبيب / يومياً</span>
            </div>
          </div>

          {/* Card 2: Zero-Trust Encrypted Record Vault (5 Cols Wide) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors duration-200 ease-out">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck size={20} weight="bold" className="text-slate-900" />
                  <span className="font-bold text-slate-900 text-lg tracking-tight">
                    خزنة السجلات المشفرة
                  </span>
                </div>
                <Lock size={16} className="text-slate-400" />
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                تشفير AES بمفتاح 256 بت مدعوم بالعتاد الصلب مع سجلات تدقيق تشفير غير قابلة للتغيير لكل استعلام عن السجل الصحي للمريض.
              </p>

              {/* Compliance Status Block */}
              <div className="bg-slate-50 rounded-xl border border-slate-200/90 p-4 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">تدقيق الأمان وفق HIPAA</span>
                  <span className="text-emerald-700 font-bold">اجتياز بنسبة 100%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-slate-900 h-1.5 rounded-full w-full" />
                </div>
                <div className="text-[10px] text-slate-500">
                  وحدة أمان العتاد الصلب AES-256-GCM مُمكّنة
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-700 font-semibold">
              <span>يتضمن اتفاقية BAA فورية</span>
              <ArrowLeft size={14} weight="bold" className="text-slate-400" />
            </div>
          </div>

          {/* Card 3: Dynamic Triage & Flow (5 Cols Wide) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors duration-200 ease-out">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <CalendarCheck size={20} weight="bold" className="text-slate-900" />
                  <span className="font-bold text-slate-900 text-lg tracking-tight">
                    محرك الفرز وتدفق المرضى
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded font-semibold">
                  معالجة تلقائية
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                تحسين المواعيد ديناميكياً وتأكيدات الحجز التلقائية عبر الرسائل النصية ثنائية الاتجاه تقلل نسبة عدم حضور المرضى بنسبة 64%.
              </p>

              <div className="bg-slate-50 rounded-xl border border-slate-200/90 p-3.5 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">09:30 صباحاً — متابعة أمراض القلب</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                    مؤكد
                  </span>
                </div>
                <div className="text-[11px] text-slate-500">
                  تم تأكيد التذكير عبر الرسالة النصية من قبل المريض (منذ 10 دقائق)
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-700 font-semibold">
              انخفاض مضمون بنسبة 64% في المواعيد الشاغرة
            </div>
          </div>

          {/* Card 4: Revenue Cycle & Claims Adjudication (7 Cols Wide) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors duration-200 ease-out">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <Receipt size={20} weight="bold" className="text-blue-600" />
                  <span className="font-bold text-slate-900 text-lg tracking-tight">
                    دورة الإيرادات وتسوية المطالبات
                  </span>
                </div>
                <span className="text-[11px] font-mono text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full font-semibold">
                  ربط مباشر بمقاصة المطالبات
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                تدقيق المطالبات في الوقت الفعلي والربط المباشر مع شركات المقاصة يضمن قبول المطالبات من المرة الأولى بنسبة 99.1% مع معالجة الدفع المشارك آلياً.
              </p>

              {/* Claims Adjudication Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/90">
                  <div className="text-[10px] text-slate-500 font-semibold uppercase">مطالبات سليمة</div>
                  <div className="text-lg font-bold text-emerald-700 mt-0.5">99.1%</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/90">
                  <div className="text-[10px] text-slate-500 font-semibold uppercase">متوسط السداد</div>
                  <div className="text-lg font-bold text-slate-900 mt-0.5">4.2 أيام</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/90">
                  <div className="text-[10px] text-slate-500 font-semibold uppercase">جهات التأمين</div>
                  <div className="text-lg font-bold text-blue-700 mt-0.5">+1,200</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-700 font-semibold">
              <TrendUp size={16} className="text-blue-600" />
              <span>متوافق ومربوط مع كبرى شركات التأمين والجهات الضامنة</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
