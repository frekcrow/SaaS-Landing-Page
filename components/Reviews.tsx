"use client";

import * as React from "react";
import { ScrollReelTestimonials } from "./ScrollReelTestimonials";

const doctorTestimonials = [
  {
    quote: "أطلس غير طريقتنا في إدارة العيادة بالكامل. الواجهة سهلة جداً والوصول لسجلات المرضى أصبح أسرع بكثير مما وفر لنا وقتاً ثميناً.",
    author: "د. أحمد خليل - استشاري جراحة عامة",
    image: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis@latest/Emojis/People%20with%20professions/Man%20Health%20Worker%20Light%20Skin%20Tone.png",
  },
  {
    quote: "نظام المواعيد والفوترة المدمج في أطلس قلل من الأخطاء الإدارية بنسبة ٩٠٪، الآن يمكننا التركيز على رعاية المرضى براحة تامة.",
    author: "د. سارة محمود - طبيبة أسنان",
    image: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis@latest/Emojis/People%20with%20professions/Woman%20Health%20Worker%20Light%20Skin%20Tone.png",
  },
  {
    quote: "المزامنة السحابية ميزة رائعة! يمكنني متابعة حالة مرضاي حتى عندما أكون خارج العيادة. أوصي به لكل الأطباء في العراق.",
    author: "د. عمر حسين - أخصائي أطفال",
    image: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis@latest/Emojis/People%20with%20professions/Man%20Health%20Worker%20Medium-Light%20Skin%20Tone.png",
  },
  {
    quote: "البرنامج مصمم بعناية فائقة ليلائم بيئة العمل الطبية في العراق. فريق الدعم الفني متجاوب دائماً وحل مشكلة إدارة ملفات المرضى الورقية.",
    author: "د. هدى صالح - استشارية أمراض جلدية",
    image: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis@latest/Emojis/People%20with%20professions/Woman%20Health%20Worker%20Medium-Light%20Skin%20Tone.png",
  },
  {
    quote: "منذ استخدامنا لأطلس، تضاعفت كفاءة العيادة واختفت طوابير الانتظار الطويلة. الميزات التي يوفرها النظام لا غنى عنها لأي طبيب حديث.",
    author: "د. مصطفى كريم - أخصائي أمراض قلب",
    image: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis@latest/Emojis/People%20with%20professions/Man%20Health%20Worker%20Medium%20Skin%20Tone.png",
  },
  {
    quote: "التجربة الكلية سلسة ومريحة. أكثر ما يعجبني هو قدرتي على إصدار الوصفات الطبية الإلكترونية بنقرة واحدة، مما يسهل على المريض والصيدلية.",
    author: "د. زينب حسن - طبيبة أسرة",
    image: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis@latest/Emojis/People%20with%20professions/Woman%20Health%20Worker%20Medium%20Skin%20Tone.png",
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="w-full py-24 sm:py-32 bg-white flex justify-center px-4 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
        
        <div className="max-w-3xl text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight" dir="rtl">
            ماذا يقول الأطباء عن أطلس؟
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-md:font-pinglight max-md:font-light" dir="rtl">
            نعتز بثقة الممارسين الصحيين في العراق، ونعمل دائماً لتوفير أفضل تجربة لهم.
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="w-full flex justify-center" dir="rtl">
          <ScrollReelTestimonials 
            testimonials={doctorTestimonials} 
            className="w-full"
          />
        </div>

      </div>
    </section>
  );
}
