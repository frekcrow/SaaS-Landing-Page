"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { CheckCircle, PlayCircle, Desktop, CalendarCheck, UsersThree, Stethoscope, FileText } from "@phosphor-icons/react";
import { Button } from "@heroui/button";

const stages = [
  { id: 1, icon: CalendarCheck },
  { id: 2, icon: UsersThree },
  { id: 3, icon: Stethoscope },
  { id: 4, icon: FileText },
];

export default function PatientJourney() {
  const lineRef = useRef<HTMLDivElement>(null);
  
  // Track scroll specifically for the line
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 80%", "end 50%"],
  });

  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="w-full bg-[#FAFAFC] text-slate-900 dir-rtl overflow-hidden" dir="rtl">
      
      {/* Phase 1: Horizontal Patient Journey Timeline */}
      <div className="w-full max-w-5xl mx-auto px-4 py-24 flex flex-col items-center justify-center">
        
        {/* Horizontal Line Container */}
        <div ref={lineRef} className="relative w-full h-1 mt-12 mb-12 flex items-center">
          {/* Background Line (Gray) */}
          <div className="absolute left-0 right-0 h-1 bg-slate-200 rounded-full" />
          
          {/* Animated Fill Line (Blue) */}
          <motion.div 
            style={{ width: lineProgress }}
            className="absolute right-0 h-1 bg-blue-600 rounded-full origin-right"
          />

          {/* Stages array overlay */}
          <div className="absolute inset-0 flex justify-between items-center w-full">
            {stages.map((stage, idx) => {
              const activationThreshold = idx * (1 / (stages.length - 1));
              const isActive = useTransform(scrollYProgress, (v) => v >= activationThreshold);
              const IconComponent = stage.icon;
              
              return (
                <div key={stage.id} className="relative flex flex-col items-center justify-center">
                  
                  {/* Popping Icon Above the Line */}
                  <div className="absolute bottom-10 flex items-center justify-center">
                    <motion.div
                      style={{ 
                        scale: useTransform(scrollYProgress, [Math.max(0, activationThreshold - 0.1), activationThreshold], [0, 1]),
                        opacity: useTransform(scrollYProgress, [Math.max(0, activationThreshold - 0.1), activationThreshold], [0, 1])
                      }}
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl shadow-xl border border-blue-100 flex items-center justify-center text-blue-600"
                    >
                      <IconComponent size={40} weight="duotone" />
                    </motion.div>
                  </div>

                  {/* Circle Indicator on the Line */}
                  <motion.div
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-white border-2 transition-colors duration-300 z-10"
                    style={{
                      borderColor: useTransform(scrollYProgress, (v) => v >= activationThreshold ? "#2563EB" : "#E2E8F0") as any,
                    }}
                  >
                    <motion.div
                      className="text-blue-600 flex items-center justify-center w-full h-full"
                      style={{
                        scale: useTransform(scrollYProgress, [Math.max(0, activationThreshold - 0.1), activationThreshold], [0, 1]),
                      }}
                    >
                      <CheckCircle size={24} weight="fill" />
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Phase 2: Demo Preview CTA */}
      <div className="w-full pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-6xl mx-auto w-full px-4"
        >
          {/* Text & Button on the right (RTL logic) */}
          <div className="flex-1 text-center md:text-right space-y-5 z-10">
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight whitespace-nowrap">
              استكشف نظام أطلس الطبي
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-md mx-auto md:mx-0">
              ابدأ الآن بتجربة مجانية لاختبار جميع الميزات في عيادتك الخاصة وتسهيل إدارة مرضاك بكل أمان.
            </p>
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-base px-8 h-14 rounded-full shadow-lg transition-transform active:scale-[0.97] flex items-center justify-center gap-2 mx-auto md:mx-0"
            >
              <PlayCircle size={24} weight="fill" />
              <span>نسخة تجريبية لنظام أطلس</span>
            </Button>
          </div>

          {/* Graphics on the left */}
          <div className="flex-1 w-full max-w-md relative aspect-square mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-emerald-50 rounded-[2.5rem] shadow-inner flex items-center justify-center border border-slate-200/50 p-8">
              {/* Abstract system graphic */}
              <div className="w-full h-full relative">
                {/* Main Dashboard Representation */}
                <div className="absolute top-[10%] left-[5%] right-[10%] bottom-[15%] bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col">
                  {/* Mock Navbar */}
                  <div className="h-6 w-full bg-slate-50 border-b border-slate-100 flex items-center px-3 gap-1.5" dir="ltr">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  {/* Mock Content */}
                  <div className="flex-1 p-4 flex gap-4" dir="ltr">
                    <div className="w-1/3 h-full flex flex-col gap-2">
                      <div className="w-full h-1/4 bg-blue-50 rounded-lg" />
                      <div className="w-full h-1/4 bg-slate-50 rounded-lg" />
                      <div className="w-full h-1/4 bg-slate-50 rounded-lg" />
                    </div>
                    <div className="w-2/3 h-full flex flex-col gap-3">
                      <div className="w-full h-1/2 bg-slate-50 rounded-xl" />
                      <div className="w-full flex-1 flex gap-2">
                         <div className="w-1/2 h-full bg-emerald-50 rounded-lg" />
                         <div className="w-1/2 h-full bg-indigo-50 rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements representing Sync/Cloud */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white rounded-xl shadow-2xl border border-slate-100 flex items-center justify-center text-blue-600">
                  <Desktop size={40} weight="duotone" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
