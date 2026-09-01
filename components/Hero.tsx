"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { ArrowRight, PlayCircle, Sparkle } from "@phosphor-icons/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-20 px-6 md:px-12 flex flex-col items-center text-center">
      <motion.div
        className="max-w-4xl mx-auto flex flex-col items-center gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Chip */}
        <motion.div variants={itemVariants}>
          <Chip
            variant="flat"
            color="primary"
            startContent={<Sparkle className="w-4 h-4 text-primary" weight="fill" />}
            className="px-4 py-1 text-sm font-medium border border-primary/20 bg-primary/10 text-primary-400"
          >
            The Premium Choice for Modern Clinics
          </Chip>
        </motion.div>

        {/* H1 Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.1]"
        >
          Manage Your Clinic with Intelligence and Elegance
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed"
        >
          Streamline patient records, appointment scheduling, billing, and AI insights—all in one unified, modern platform built specifically for modern healthcare practices.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto justify-center"
        >
          <Button
            color="primary"
            variant="solid"
            size="lg"
            endContent={<ArrowRight weight="bold" className="w-5 h-5" />}
            className="font-semibold px-8 h-12 text-base rounded-full"
          >
            Start Free Trial
          </Button>
          <Button
            variant="bordered"
            size="lg"
            startContent={<PlayCircle weight="bold" className="w-5 h-5" />}
            className="font-semibold px-8 h-12 text-base rounded-full border-zinc-700 text-zinc-200 hover:bg-zinc-800"
          >
            Watch Demo
          </Button>
        </motion.div>

        {/* Dashboard Mockup Container with Floating Animation */}
        <motion.div
          variants={itemVariants}
          className="w-full mt-12 max-w-5xl"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative rounded-2xl bg-[#171717] border border-zinc-800 p-4 sm:p-6 shadow-[0_0_50px_rgba(255,255,255,0.05)] overflow-hidden"
          >
            {/* Window Header / Controls */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800/60 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-xs font-mono text-zinc-500 bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800">
                app.medflow.clinic/dashboard
              </div>
              <div className="w-12" />
            </div>

            {/* Mockup Dashboard Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {/* Card 1 */}
              <div className="p-5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-medium text-zinc-400">Total Patients</div>
                  <div className="text-2xl font-bold text-white mt-1">1,284</div>
                </div>
                <div className="text-xs text-emerald-400 mt-4 flex items-center gap-1">
                  <span>↑ +12% this month</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-medium text-zinc-400">Appointments Today</div>
                  <div className="text-2xl font-bold text-white mt-1">42</div>
                </div>
                <div className="text-xs text-primary-400 mt-4 flex items-center gap-1">
                  <span>8 pending approval</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-medium text-zinc-400">Monthly Revenue</div>
                  <div className="text-2xl font-bold text-white mt-1">$48,250</div>
                </div>
                <div className="text-xs text-emerald-400 mt-4 flex items-center gap-1">
                  <span>↑ +18% vs last month</span>
                </div>
              </div>
            </div>

            {/* Mockup Main Chart/Table Placeholder */}
            <div className="mt-4 p-6 rounded-xl bg-zinc-900/90 border border-zinc-800 text-left min-h-[220px] flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-semibold text-zinc-200">Recent Patient Consultations</div>
                <div className="text-xs text-zinc-500">Updated just now</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-zinc-800/50 text-xs">
                  <div className="font-medium text-zinc-300">Dr. Sarah Jenkins</div>
                  <div className="text-zinc-400">Cardiology Checkup</div>
                  <div className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[10px]">Completed</div>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-zinc-800/50 text-xs">
                  <div className="font-medium text-zinc-300">Dr. Michael Chen</div>
                  <div className="text-zinc-400">Neurology Follow-up</div>
                  <div className="px-2 py-0.5 rounded bg-blue-950 text-blue-400 text-[10px]">In Progress</div>
                </div>
                <div className="flex items-center justify-between py-2 text-xs">
                  <div className="font-medium text-zinc-300">Dr. Emily Adams</div>
                  <div className="text-zinc-400">Pediatric Screening</div>
                  <div className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 text-[10px]">Scheduled</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
