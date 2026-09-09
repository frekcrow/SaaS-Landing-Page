"use client";

import { useState } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  Globe,
  Sun,
  Moon,
  CalendarCheck,
  PhoneCall,
} from "@phosphor-icons/react";
import { Button } from "@heroui/button";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [currentLang, setCurrentLang] = useState<"AR" | "EN">("AR");
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !isScrolled) {
      setIsScrolled(true);
    } else if (latest <= 50 && isScrolled) {
      setIsScrolled(false);
    }
  });

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === "AR" ? "EN" : "AR"));
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const assets = [
    {
      src: "/images/lab-coate.webp",
      alt: "Lab Coat",
      width: 572,
      height: 567,
      className:
        "absolute top-[12%] md:-top-[-2%] -left-[25%] md:-left-[21%] w-[65vw] md:w-[45vw] md:min-w-[250px] -rotate-[-45deg] object-contain",
      side: "left",
      delay: 0.1,
      xOffset: -160,
    },
    {
      src: "/images/needle.webp",
      alt: "Needle",
      width: 289,
      height: 152,
      className:
        "absolute top-[12%] md:top-[30%] right-[-5%] md:right-auto left-auto md:left-[-10%] rotate-[45deg] md:-rotate-[1deg] w-[48vw] md:w-[38vw] md:min-w-[150px] object-contain",
      side: "left",
      delay: 0.25,
      xOffset: -120,
    },
    {
      src: "/images/stethoscope.webp",
      alt: "Stethoscope",
      width: 363,
      height: 350,
      className:
        "absolute bottom-[12%] md:-bottom-[3%] -left-[15%] w-[65vw] md:w-[45vw] md:min-w-[250px] -rotate-[-65deg] object-contain",
      side: "left",
      delay: 0.4,
      xOffset: -140,
    },
    {
      src: "/images/sheet.webp",
      alt: "Medical Sheet",
      width: 320,
      height: 376,
      className:
        "absolute -top-[29%] -right-[27%] w-[70vw] md:w-[59vw] md:min-w-[220px] rotate-[-8deg] object-contain",
      side: "right",
      delay: 0.15,
      xOffset: 160,
    },
    {
      src: "/images/pressure.webp",
      alt: "Blood Pressure Monitor",
      width: 329,
      height: 344,
      className:
        "absolute -bottom-[-2%] -right-[18%] w-[55vw] md:w-[44vw] md:min-w-[250px] rotate-[57deg] object-contain",
      side: "right",
      delay: 0.3,
      xOffset: 140,
    },
  ];

  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden bg-[url('/images/tiffany-bg.webp')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center">
      {/* Top Navigation Bar - Sticky / Fixed Header with Scroll-driven morphing */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none flex justify-center"
        animate={{
          paddingTop: isScrolled ? 0 : 20,
          paddingLeft: isScrolled ? 0 : 16,
          paddingRight: isScrolled ? 0 : 16,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.nav
          className="pointer-events-auto w-full flex items-center justify-between relative bg-white/95 backdrop-blur-md border border-slate-200/80"
          animate={{
            maxWidth: isScrolled ? "100%" : "1280px",
            borderRadius: isScrolled ? "0px" : "9999px",
            paddingTop: isScrolled ? "6px" : "12px",
            paddingBottom: isScrolled ? "6px" : "12px",
            paddingLeft: isScrolled ? "32px" : "24px",
            paddingRight: isScrolled ? "32px" : "24px",
            boxShadow: isScrolled
              ? "0 1px 3px 0 rgba(0, 0, 0, 0.05)"
              : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Brand Logo */}
          <motion.div
            className="flex items-center shrink-0"
            animate={{ scale: isScrolled ? 0.85 : 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image
              src="/images/logo-text.png"
              alt="Atlas Brand Logo"
              width={140}
              height={45}
              priority
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="hidden md:flex items-center text-slate-700 font-semibold"
            animate={{
              gap: isScrolled ? "24px" : "36px",
              fontSize: isScrolled ? "13px" : "15px",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <a
              href="#"
              className="hover:text-slate-900 transition-colors duration-200"
            >
              الرئيسية
            </a>
            <a
              href="#features"
              className="hover:text-slate-900 transition-colors duration-200"
            >
              خدماتنا
            </a>
            <a
              href="#pricing"
              className="hover:text-slate-900 transition-colors duration-200"
            >
              الاسعار
            </a>
            <a
              href="#about"
              className="hover:text-slate-900 transition-colors duration-200"
            >
              من نحن
            </a>
            <a
              href="#contact"
              className="hover:text-slate-900 transition-colors duration-200"
            >
              تواصل معنا
            </a>
          </motion.div>

          {/* Action Buttons: Language Switcher & Theme Switcher */}
          <div className="flex items-center gap-2.5">
            {/* Language Switcher Button */}
            <motion.button
              type="button"
              onClick={toggleLanguage}
              aria-label="Language Switcher"
              className="px-3.5 rounded-full bg-black text-white flex items-center gap-1.5 shadow-xs transition-transform duration-150 ease-out active:scale-[0.95] cursor-pointer"
              animate={{
                height: isScrolled ? "28px" : "32px",
              }}
              transition={{ duration: 0.3 }}
            >
              <Globe size={16} weight="regular" className="text-white shrink-0" />
              <span className="uppercase text-xs font-bold tracking-wide text-white">
                {currentLang}
              </span>
            </motion.button>

            {/* Theme Switcher Button */}
            <motion.button
              type="button"
              onClick={toggleTheme}
              aria-label="Theme Switcher"
              className="rounded-full bg-black text-white flex items-center justify-center shrink-0 shadow-xs transition-transform duration-150 ease-out active:scale-[0.95] cursor-pointer"
              animate={{
                width: isScrolled ? "28px" : "32px",
                height: isScrolled ? "28px" : "32px",
              }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? (
                <Sun size={16} weight="regular" className="text-amber-400" />
              ) : (
                <Moon size={16} weight="regular" className="text-white" />
              )}
            </motion.button>
          </div>
        </motion.nav>
      </motion.header>

      {/* Hero Central Content - Vertically centered in Hero section */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center my-auto pt-24 pb-12 space-y-5 sm:space-y-6">
        <motion.h1
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.2]"
        >
          حلول لأدارة عيادتك الطبية <span className="whitespace-nowrap">بدون تلف للبيانات</span>
        </motion.h1>

        <motion.p
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          اشرف على رحلة المريض من البداية الى النهاية واحفظها الكترونياً
        </motion.p>

        <motion.div
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-row items-center justify-center gap-2 sm:gap-3 pt-2 w-full max-w-full"
        >
          <Button
            size="lg"
            className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[11px] sm:text-sm px-2 sm:px-7 h-11 sm:h-12 rounded-full shadow-md transition-transform duration-150 ease-out active:scale-[0.97] flex items-center justify-center gap-1.5 sm:gap-2"
          >
            <CalendarCheck size={16} weight="bold" />
            <span className="truncate">جدولة تدقيق الممارسة</span>
          </Button>
          <Button
            size="lg"
            className="flex-1 sm:flex-none bg-white/90 hover:bg-white text-slate-900 border border-slate-200 font-semibold text-[11px] sm:text-sm px-2 sm:px-6 h-11 sm:h-12 rounded-full shadow-xs transition-transform duration-150 ease-out active:scale-[0.97] flex items-center justify-center gap-1.5 sm:gap-2"
          >
            <PhoneCall size={16} weight="bold" className="text-slate-600" />
            <span className="truncate">التحدث مع أخصائي</span>
          </Button>
        </motion.div>
      </div>

      {/* Smooth White Gradient Fade at Section Boundary */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-0" />

      {/* Floating Animated Medical Image Assets */}
      {assets.map((asset) => (
        <motion.div
          key={asset.src}
          className={`${asset.className} drop-shadow-2xl pointer-events-none z-10`}
          initial={
            shouldReduceMotion
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: asset.xOffset }
          }
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 18,
            mass: 1,
            delay: asset.delay,
          }}
        >
          <Image
            src={asset.src}
            alt={asset.alt}
            width={asset.width}
            height={asset.height}
            priority
            quality={100}
            unoptimized={true}
            className="w-full h-auto object-contain"
          />
        </motion.div>
      ))}

      {/* Subtle Bottom Spacer */}
      <div className="h-8 w-full pointer-events-none relative z-10" />
    </section>
  );
}
