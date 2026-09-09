"use client";

import { motion } from "framer-motion";
import { Buildings, ClockCounterClockwise, UsersThree } from "@phosphor-icons/react";

export default function ProductOverview() {
  return (
    <section id="about" className="relative w-full py-24 sm:py-32 bg-white flex justify-center px-4 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="max-w-3xl text-center mb-16 sm:mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight" dir="rtl">
            نظام بيئي متكامل لعيادتك الطبية
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal" dir="rtl">
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

        {/* Large Decorative Central Graphic/Photo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="w-full mt-16 sm:mt-24 rounded-[2rem] border border-slate-200/80 bg-slate-100 aspect-[16/9] sm:aspect-[21/9] overflow-hidden relative flex items-center justify-center shadow-lg group"
        >
          {/* High-quality Unsplash image of a modern clinic/hospital */}
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop"
            alt="Modern Medical Clinic"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          
          {/* Black fade overlay to make it moody and ensure text legibility */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/20 to-transparent pointer-events-none" />
          
          {/* Left-hand vertical stats */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-10 z-10 flex flex-col gap-3 sm:gap-4 overflow-hidden py-4 px-2 -mx-2">
            {/* Stat 1: Clinics */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 w-32 sm:w-40 text-center shadow-2xl transition-transform hover:scale-105 cursor-default"
            >
              <span className="block text-xl sm:text-2xl font-bold text-white font-mono mb-1 drop-shadow-md">70+</span>
              <span className="block text-[9px] sm:text-[10px] text-white/80 uppercase tracking-wider font-semibold">عيادة تستخدم النظام</span>
            </motion.div>
            
            {/* Stat 2: Demand Volume */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 w-32 sm:w-40 text-center shadow-2xl transition-transform hover:scale-105 cursor-default"
            >
              <span className="block text-xl sm:text-2xl font-bold text-white font-mono mb-1 drop-shadow-md">2M+</span>
              <span className="block text-[9px] sm:text-[10px] text-white/80 uppercase tracking-wider font-semibold">مراجعة ومعاملة طبية</span>
            </motion.div>

            {/* Stat 3: Support */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 w-32 sm:w-40 text-center shadow-2xl transition-transform hover:scale-105 cursor-default"
            >
              <span className="block text-xl sm:text-2xl font-bold text-white font-mono mb-1 drop-shadow-md">24/7</span>
              <span className="block text-[9px] sm:text-[10px] text-white/80 uppercase tracking-wider font-semibold">دعم فني متواصل</span>
            </motion.div>
          </div>
          
          {/* Top-Right Text Content */}
          <div className="absolute top-6 sm:top-10 right-6 sm:right-10 z-10 text-right max-w-md sm:max-w-xl space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            >
              <h4 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-2 sm:mb-4 shadow-sm drop-shadow-lg">
                بنية تحتية متطورة
              </h4>
              <p className="text-white/95 text-base sm:text-lg drop-shadow-md font-medium leading-relaxed">
                تصميم ذكي يليق بعيادتك، يضمن لك بيئة عمل منظمة وتجربة استثنائية لمرضاك.
              </p>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="text-white/90 text-sm sm:text-base leading-relaxed sm:leading-loose drop-shadow-md"
            >
              كل ما تم تصميمه داخل نظام اطلس الطبي تم اختباره في عيادات عديدة داخل المجال الطبي العراقي لفهم طبيعة العمل وتهيئة بيئة الكترونية تسرع منها وتساعد الطبيب وطاقم العيادة في أتمتة المهام.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="text-white/90 text-sm sm:text-base leading-relaxed sm:leading-loose drop-shadow-md"
            >
              اكثر من 70 عيادة داخل العراق تستخدم نظام اطلس الطبي يوميا مع مزامنة سحابية على الانترنت لسجلاتهم الطبية.
              <br />
              نسعى دوما لتقديم افضل الحلول الالكترونية لكل المجالات.
            </motion.p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
