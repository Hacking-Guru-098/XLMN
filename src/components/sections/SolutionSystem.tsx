"use client";

import React from "react";
import { Mic, Zap, Calendar, ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";

interface SolutionSystemProps {
  onBookCall?: () => void;
}

export const SolutionSystem = ({ onBookCall }: SolutionSystemProps) => {
  return (
    <section id="how-it-works" className="relative pt-8 sm:pt-10 pb-8 sm:pb-12 bg-white scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Outer Card Container with InView Fade and Elevation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl sm:rounded-3xl border border-[#e5e5e5] bg-[#f9f9f9] p-5 sm:p-8 lg:p-9 shadow-xs"
        >
          {/* Header Row: "How it works (2 min)" Pill + Headline */}
          <div className="pb-5 sm:pb-7">
            {/* Pill Button moved to top-left eyebrow position */}
            <motion.button
              onClick={onBookCall}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 border border-[#e5e5e5] bg-white rounded-full px-3.5 py-1 text-xs font-mono-rethoric font-semibold tracking-wide text-[#0a0a0a] hover:bg-[#f4f4f4] hover:border-[#0a0a0a] transition-colors shadow-2xs cursor-pointer"
            >
              <span>How it works (2 min)</span>
              <Play className="h-2.5 w-2.5 fill-current text-[#0a0a0a]" />
            </motion.button>

            {/* Section Headline */}
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-[-0.03em] text-[#0a0a0a] mt-2.5">
              A simple, high-leverage system.
            </h2>
          </div>

          {/* 3-Step Horizontal Row with Connecting Arrows */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 lg:gap-3.5">
            {/* Step 1: Capture */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex-1 bg-white rounded-xl sm:rounded-2xl border border-[#e5e5e5] p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#0a0a0a]/30 transition-colors"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#f4f4f4] border border-[#ebebeb] flex items-center justify-center shrink-0 text-[#0a0a0a]">
                <Mic className="w-5 h-5 text-[#0a0a0a] stroke-[2.2]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-[15px] font-bold text-[#0a0a0a] tracking-tight">
                  1. Capture
                </h3>
                <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed">
                  Your thoughts, voice notes or raw ideas (10–15 min).
                </p>
              </div>
            </motion.div>

            {/* Connecting Arrow 1 with Subtle Breathing Motion */}
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              className="hidden md:flex items-center justify-center text-[#a0a0a0] shrink-0 px-0.5"
            >
              <ArrowRight className="w-4 h-4 text-[#888888] stroke-[2]" />
            </motion.div>

            {/* Step 2: Convert */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex-1 bg-white rounded-xl sm:rounded-2xl border border-[#e5e5e5] p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#0a0a0a]/30 transition-colors"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#f4f4f4] border border-[#ebebeb] flex items-center justify-center shrink-0 text-[#0a0a0a]">
                <Zap className="w-5 h-5 text-[#0a0a0a] stroke-[2.2]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-[15px] font-bold text-[#0a0a0a] tracking-tight">
                  2. Convert
                </h3>
                <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed">
                  We turn it into platform-ready posts with hooks, formats &amp; angles.
                </p>
              </div>
            </motion.div>

            {/* Connecting Arrow 2 with Subtle Breathing Motion */}
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, delay: 0.3, ease: "easeInOut" }}
              className="hidden md:flex items-center justify-center text-[#a0a0a0] shrink-0 px-0.5"
            >
              <ArrowRight className="w-4 h-4 text-[#888888] stroke-[2]" />
            </motion.div>

            {/* Step 3: Publish & Grow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex-1 bg-white rounded-xl sm:rounded-2xl border border-[#e5e5e5] p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#0a0a0a]/30 transition-colors"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#f4f4f4] border border-[#ebebeb] flex items-center justify-center shrink-0 text-[#0a0a0a]">
                <Calendar className="w-5 h-5 text-[#0a0a0a] stroke-[2.2]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-[15px] font-bold text-[#0a0a0a] tracking-tight">
                  3. Publish &amp; Grow
                </h3>
                <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed">
                  A consistent LinkedIn &amp; X pipeline that builds reach and pipeline.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
