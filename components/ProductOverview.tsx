"use client";

import { motion } from "framer-motion";
import { Buildings, ClockCounterClockwise, UsersThree } from "@phosphor-icons/react";
import { WorldMap } from "./ui/map";

export default function ProductOverview() {
  return (
    <section id="about" className="relative w-full pt-16 pb-0 sm:py-32 bg-white flex justify-center px-4 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="max-w-3xl text-right md:text-center mb-16 sm:mb-20 space-y-4 w-full px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight" dir="rtl">
            نظام بيئي متكامل لعيادتك الطبية
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-md:font-pinglight max-md:font-light" dir="rtl">
            أطلس ليس مجرد نظام لإدارة العيادات، بل هو منصة ذكية تربط بين رعاية المرضى والعمليات الإدارية في مكان واحد آمن وموثوق. صُمم ليختصر الوقت ويضاعف كفاءة الممارس الصحي.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full" dir="rtl">
          {[
            {
              icon: UsersThree,
              title: "تجربة مريض استثنائية",
              desc: "من الحجز المسبق إلى متابعة الخطة العلاجية، أطلس يضمن تجربة سلسة وتواصل دائم يرفع من ولاء ورضا مراجعيك.",
              color: "text-white",
              bg: "bg-slate-900 border-slate-800",
            },
            {
              icon: ClockCounterClockwise,
              title: "توفير آلاف الساعات المهدرة",
              desc: "أتمتة شاملة للمهام الروتينية، كتابة التقارير، والفوترة، مما يتيح لك ولطاقمك التفرغ التام للرعاية الصحية.",
              color: "text-white",
              bg: "bg-slate-900 border-slate-800",
            },
            {
              icon: Buildings,
              title: "بنية تحتية تتوسع معك",
              desc: "سواء كنت تدير عيادة مستقلة أو مجمعاً طبياً ضخماً، أطلس يتوسع ويتأقلم مع حجم عملياتك دون أي تعقيدات تقنية.",
              color: "text-white",
              bg: "bg-slate-900 border-slate-800",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/60 flex flex-col items-start text-right hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`p-3 rounded-2xl ${item.bg} border mb-5`}>
                <item.icon size={28} className={item.color} weight="duotone" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Map of Iraq Network Section (Hidden on Mobile) */}
        <div className="w-full mt-16 sm:mt-24 max-md:hidden flex flex-row items-center justify-between gap-4 sm:gap-12 lg:gap-20 max-md:bg-slate-50 max-md:border max-md:border-slate-200/60 max-md:rounded-[2rem] max-md:p-4 max-md:shadow-sm" dir="rtl">
          
          {/* Text Section (Right side in RTL) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="flex-1 text-right space-y-3 sm:space-y-5"
          >
            <motion.h4 
              className="inline-block py-1.5 sm:py-3 px-3 sm:px-6 bg-[#0ABAB5] text-white text-xs sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight shadow-sm rounded-lg sm:rounded-none"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              بنية تحتية متطورة تغطي كافة أنحاء العراق
            </motion.h4>
            <p className="text-slate-600 text-[11px] sm:text-lg leading-relaxed text-justify">
              تصميم ذكي يليق بعيادتك، يضمن لك بيئة عمل منظمة وتجربة استثنائية لمرضاك. كل ما تم تصميمه داخل نظام أطلس الطبي تم اختباره في عيادات عديدة داخل المجال الطبي العراقي لفهم طبيعة العمل وتهيئة بيئة الكترونية تسرع منها وتساعد الطبيب وطاقم العيادة في أتمتة المهام.
            </p>
            <p className="text-slate-600 text-[11px] sm:text-lg leading-relaxed font-semibold text-justify">
              أكثر من 70 عيادة داخل العراق تستخدم نظام أطلس الطبي يومياً مع مزامنة سحابية على الانترنت لسجلاتهم الطبية. نسعى دوماً لتقديم أفضل الحلول الالكترونية لكل المجالات.
            </p>
          </motion.div>

          {/* Map Section (Left side in RTL) */}
          <motion.div
            className="flex-1 w-full max-w-lg lg:max-w-xl xl:max-w-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <WorldMap 
              dots={[
                { start: { lat: 33.3128, lng: 44.3615, label: "بغداد" }, end: { lat: 36.1901, lng: 44.0092, label: "أربيل" } },
                { start: { lat: 33.3128, lng: 44.3615, label: "بغداد" }, end: { lat: 30.5081, lng: 47.7835, label: "البصرة" } },
                { start: { lat: 33.3128, lng: 44.3615, label: "بغداد" }, end: { lat: 36.3400, lng: 42.6000, label: "الموصل" } },
                { start: { lat: 33.3128, lng: 44.3615, label: "بغداد" }, end: { lat: 31.8000, lng: 44.0000, label: "النجف" } },
                { start: { lat: 33.3128, lng: 44.3615, label: "بغداد" }, end: { lat: 33.4200, lng: 42.0000, label: "الأنبار" } }
              ]} 
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
