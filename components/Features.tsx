"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardBody } from "@heroui/card";
import {
  CalendarPlus,
  ShieldCheck,
  ChartBar,
  Users,
  Receipt,
  DeviceMobile,
} from "@phosphor-icons/react";

const features = [
  {
    title: "Smart Bookings",
    description:
      "Automated appointment scheduling with smart conflict resolution and automated SMS/email reminders.",
    icon: CalendarPlus,
  },
  {
    title: "Secure Records",
    description:
      "HIPAA-compliant encrypted electronic health records accessible instantly by authorized medical staff.",
    icon: ShieldCheck,
  },
  {
    title: "Analytics",
    description:
      "Real-time clinical and financial metrics providing operational insights to optimize practice throughput.",
    icon: ChartBar,
  },
  {
    title: "Patient CRM",
    description:
      "Comprehensive patient profiles, medical history tracking, and personalized care engagement tools.",
    icon: Users,
  },
  {
    title: "Billing",
    description:
      "Streamlined automated invoicing, insurance claim tracking, and instant payment processing.",
    icon: Receipt,
  },
  {
    title: "Mobile Access",
    description:
      "Native mobile experience allowing practitioners and patients full access anywhere, anytime.",
    icon: DeviceMobile,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Features() {
  return (
    <section className="w-full bg-[#0a0a0a] py-24 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Everything you need to run your clinic smoothly
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Engineered with modern tools to simplify workflows, enhance patient care, and scale your practice effortlessly.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className="bg-[#171717] border border-white/5 rounded-2xl p-2 h-full shadow-none hover:border-white/10 transition-colors">
                  <CardHeader className="flex flex-col items-start gap-4 pb-2 pt-4 px-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20">
                      <IconComponent size={32} weight="duotone" className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {feature.title}
                    </h3>
                  </CardHeader>
                  <CardBody className="pt-0 px-4 pb-4">
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
