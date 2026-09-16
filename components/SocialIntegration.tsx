"use client";

import { motion } from "framer-motion";
import { WhatsappLogo, FacebookLogo, InstagramLogo, TelegramLogo } from "@phosphor-icons/react";

export default function SocialIntegration() {
  return (
    <section id="social" className="w-full py-16 sm:py-32 bg-white flex justify-center px-4 overflow-hidden relative">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-12 sm:gap-16 max-md:bg-slate-50 max-md:border max-md:border-slate-200/60 max-md:rounded-[2rem] max-md:p-6 max-md:shadow-sm">
        
        {/* Text section (Right side in RTL) */}
        <motion.div 
          className="flex-1 text-right space-y-6 z-10"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          dir="rtl"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight whitespace-nowrap">
            كل رسائل مرضاك في مكان واحد
          </h2>
          <p className="text-[14px] sm:text-lg text-slate-600 leading-relaxed text-justify max-md:font-pinglight max-md:font-light">
            نظام أطلس يرتبط مباشرة بحسابات عيادتك على منصات التواصل الاجتماعي. سواء تواصل المريض عبر واتساب، فيسبوك، أو انستغرام، ستصلك جميع الاستفسارات وطلبات الحجز مباشرة داخل النظام.
          </p>
          <p className="text-[14px] sm:text-lg text-slate-600 leading-relaxed font-semibold text-justify max-md:font-pinglight max-md:font-light">
            لا مزيد من تشتت الانتباه بين التطبيقات المتعددة. أدر حجوزاتك، أجب عن استفسارات مرضاك، وقدم خدمة عملاء احترافية من شاشة واحدة فقط.
          </p>
        </motion.div>

        {/* Visual Section (Left side) */}
        <div className="flex-1 w-full flex justify-center items-center relative min-h-[350px] sm:min-h-[450px]">
          
          {/* Central Hub */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-32 h-32 bg-black rounded-3xl shadow-2xl flex items-center justify-center z-50 relative border border-slate-800 p-4"
          >
            {/* Unity Animation */}
            <div className="relative w-16 h-16 flex items-center justify-center">
              {/* Central Core */}
              <motion.div
                className="w-5 h-5 bg-white rounded-full z-10"
                animate={{ 
                  scale: [1, 1.3, 1], 
                  boxShadow: ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 20px rgba(255,255,255,0.8)", "0px 0px 0px rgba(255,255,255,0)"] 
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Orbiting Dots */}
              {[
                "bg-[#25D366]", // WhatsApp Green
                "bg-[#1877F2]", // Facebook Blue
                "bg-[#E4405F]", // Instagram Pink
                "bg-[#229ED9]"  // Telegram Sky
              ].map((color, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  initial={{ rotate: i * 90 }}
                  animate={{ rotate: 360 + (i * 90) }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <motion.div 
                    className={`w-3.5 h-3.5 ${color} rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2`}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  />
                </motion.div>
              ))}
              
              {/* Subtle orbital path */}
              <div className="absolute inset-0 border border-slate-700/50 rounded-full" />
            </div>
          </motion.div>

          {/* Social Icons floating around */}
          {[
            { Icon: WhatsappLogo, color: "text-[#25D366]", bg: "bg-black border-slate-800", delay: 0.1, x: -110, y: -110, floatDuration: 4 },
            { Icon: FacebookLogo, color: "text-[#1877F2]", bg: "bg-black border-slate-800", delay: 0.2, x: 110, y: -90, floatDuration: 5 },
            { Icon: InstagramLogo, color: "text-[#E4405F]", bg: "bg-black border-slate-800", delay: 0.3, x: -130, y: 90, floatDuration: 4.5 },
            { Icon: TelegramLogo, color: "text-[#229ED9]", bg: "bg-black border-slate-800", delay: 0.4, x: 100, y: 120, floatDuration: 5.5 },
          ].map((social, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, x: social.x, y: social.y, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: social.delay }}
              className="absolute z-10"
            >
              <motion.div 
                className={`w-16 h-16 ${social.bg} border rounded-2xl shadow-xl flex items-center justify-center`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: social.floatDuration, repeat: Infinity, ease: "easeInOut" }}
              >
                <social.Icon size={36} weight="duotone" className={social.color} />
              </motion.div>
            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
