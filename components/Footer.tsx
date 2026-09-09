"use client";

import Image from "next/image";
import {
  Pulse,
  ShieldCheck,
  InstagramLogo,
  TelegramLogo,
  WhatsappLogo,
  Phone,
  EnvelopeSimple,
  MapPin,
  Headset,
} from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="w-full bg-white text-slate-600 border-t border-slate-200/80 relative dir-rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
        {/* Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10 pb-12 border-b border-slate-200/80 text-right">
          {/* Brand & Technical Architecture Specs (2 cols) */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/logo-text.png"
                alt="Brand Logo"
                width={140}
                height={45}
                className="h-8 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm font-normal">
              نظام التشغيل السريري للممارسات الطبية الحديثة، وشبكات الأنظمة الصحية، والعيادات التخصصية حول العالم.
            </p>
          </div>

          {/* Column 1: Company */}
          <div className="space-y-3 text-xs">
            <ul className="space-y-2 text-slate-600 font-medium">
              <li><a href="#" className="hover:text-slate-900 transition-colors">من نحن</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">الوظائف</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">فريقنا</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">الأبحاث</a></li>
            </ul>
          </div>

          {/* Column 2: Legal */}
          <div className="space-y-3 text-xs">
            <ul className="space-y-2 text-slate-600 font-medium">
              <li><a href="#" className="hover:text-slate-900 transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">شروط الخدمة</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">الامتثال لـ HIPAA</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">الأمان</a></li>
            </ul>
          </div>

          {/* Column 3: Features */}
          <div className="space-y-3 text-xs">
            <ul className="space-y-2 text-slate-600 font-medium">
              <li><a href="#" className="hover:text-slate-900 transition-colors">EHR مدعوم بالذكاء الاصطناعي</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">تحليلات المرضى</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">دعم 24/7</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">متعدد الممارسات</a></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="space-y-3 text-xs">
            <ul className="space-y-2 text-slate-600 font-medium">
              <li><a href="#" className="hover:text-slate-900 transition-colors">تحميل التطبيقات</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">الوثائق</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">الوصول إلى API</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">دعم الاتصال</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info Split */}
        <div className="py-10 border-b border-slate-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-right">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Headset size={16} weight="bold" className="text-blue-600" />
              <h4 className="font-mono text-[11px] uppercase text-slate-900 font-bold tracking-wider">معلومات التواصل</h4>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 text-sm text-slate-600">
              <div className="flex flex-col gap-2">
                <div dir="ltr" className="flex items-center gap-2 text-right">
                  <Phone size={16} className="text-slate-400" />
                  <span className="font-mono">+964 781 781 6288</span>
                </div>
                <div dir="ltr" className="flex items-center gap-2 text-right">
                  <Phone size={16} className="text-slate-400" />
                  <span className="font-mono">+964 781 515 8374</span>
                </div>
              </div>
              <div className="flex h-full pt-1">
                <a href="mailto:atlascompany@gmail.com" className="hover:text-slate-900 transition-colors font-mono flex items-center gap-2">
                  <EnvelopeSimple size={16} className="text-slate-400" />
                  <span>atlascompany@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 text-sm text-slate-600">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 p-1.5 bg-slate-100 rounded-lg text-slate-500">
                <MapPin size={16} weight="fill" />
              </div>
              <div>
                <strong className="block text-slate-800 text-xs mb-1">مكتب العراق</strong>
                <span>محافظة الانبار العراق</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 p-1.5 bg-slate-100 rounded-lg text-slate-500">
                <MapPin size={16} weight="fill" />
              </div>
              <div>
                <strong className="block text-slate-800 text-xs mb-1">مكتب الامارات المتحدة</strong>
                <span>Dubai</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            <span>© 2026 Atlas للحلول الالكترونية</span>
          </div>

          <div className="flex items-center gap-5 text-slate-500 mr-2">
            <a href="#" aria-label="Instagram" className="hover:text-[#E1306C] transition-colors">
              <InstagramLogo size={24} weight="duotone" />
            </a>
            <a href="#" aria-label="Telegram" className="hover:text-[#229ED9] transition-colors">
              <TelegramLogo size={24} weight="duotone" />
            </a>
            <a href="#" aria-label="WhatsApp" className="hover:text-[#25D366] transition-colors">
              <WhatsappLogo size={24} weight="duotone" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
