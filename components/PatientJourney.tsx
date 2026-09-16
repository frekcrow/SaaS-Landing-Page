"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { CheckCircle, PlayCircle, Desktop, CalendarCheck, UsersThree, Stethoscope, FileText, ChartLineUp } from "@phosphor-icons/react";
import { Button } from "@heroui/button";

const stages = [
  { id: 1, icon: CalendarCheck },
  { id: 2, icon: UsersThree },
  { id: 3, icon: Stethoscope },
  { id: 4, icon: FileText },
];

export default function PatientJourney() {


  return (
    <section className="w-full bg-white text-slate-900 dir-rtl overflow-hidden" dir="rtl">
      

      {/* Phase 2: Demo Preview CTA Bento Dashboard */}
      <div className="w-full pb-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-6 max-w-5xl mx-auto w-full bg-slate-50 border border-slate-200/80 rounded-[2rem] shadow-sm p-5 sm:p-8"
        >
          {/* Fake Dashboard Header (macOS style dots) */}
          <div className="w-full flex items-center justify-end px-2" dir="ltr">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-slate-200" />
              <div className="w-3 h-3 rounded-full bg-slate-200" />
              <div className="w-3 h-3 rounded-full bg-slate-200" />
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full" dir="rtl">
            
            {/* Bento Card 1: Patients (Square) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <UsersThree size={24} weight="fill" />
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md" dir="ltr">+12%</span>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">المرضى الجدد</p>
                <p className="text-3xl font-black text-slate-900 mt-1">128</p>
              </div>
            </motion.div>

            {/* Bento Card 2: Reports (Square) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                 <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                   <FileText size={24} weight="fill" />
                 </div>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">تقارير جاهزة</p>
                <p className="text-3xl font-black text-slate-900 mt-1" dir="ltr">1,024</p>
              </div>
            </motion.div>

            {/* Bento Card 3: Doctors (Square) - NEW */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow sm:col-span-2 md:col-span-1"
            >
              <div className="flex justify-between items-start">
                 <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                   <Stethoscope size={24} weight="fill" />
                 </div>
                 <div className="flex -space-x-2 space-x-reverse">
                   <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white" />
                   <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white" />
                   <div className="w-6 h-6 rounded-full bg-slate-400 border-2 border-white" />
                 </div>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">الأطباء المتاحين</p>
                <p className="text-3xl font-black text-slate-900 mt-1" dir="ltr">12</p>
              </div>
            </motion.div>

            {/* Bento Card 4: Appointments (Wide) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 sm:col-span-2 flex flex-col sm:flex-row gap-8 items-center hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto shrink-0">
                <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-md shrink-0">
                  <CalendarCheck size={28} weight="duotone" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">مواعيد اليوم</p>
                  <p className="text-xl font-bold text-slate-900 leading-tight">42 موعد</p>
                </div>
              </div>
              
              {/* Progress bar stretches on wide */}
              <div className="w-full space-y-2 flex-1 mt-2 sm:mt-0">
                <div className="flex justify-between text-sm text-slate-500 font-semibold">
                  <span>مكتمل</span>
                  <span dir="ltr">75%</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex justify-end">
                  <motion.div 
                    className="h-full bg-[#0ABAB5] rounded-full" 
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Bento Card 5: Revenue/Activity (Square) - NEW */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between gap-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                   <ChartLineUp size={20} weight="bold" />
                 </div>
                 <p className="text-sm text-slate-500 font-medium">نمو العيادة</p>
              </div>
              <div className="w-full h-12 flex items-end justify-between gap-1 mt-2">
                {[40, 70, 45, 90, 65, 100, 85].map((height, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                    className={`w-full rounded-t-sm ${i === 6 ? 'bg-orange-500' : 'bg-slate-200'}`}
                  />
                ))}
              </div>
            </motion.div>

          </div>

          {/* Button only */}
          <div className="w-full flex justify-start mt-2">
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-base px-10 h-14 rounded-full shadow-lg transition-transform active:scale-[0.97] flex items-center justify-center gap-2"
            >
              <PlayCircle size={24} weight="fill" />
              <span>نسخة تجريبية لنظام أطلس</span>
            </Button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
