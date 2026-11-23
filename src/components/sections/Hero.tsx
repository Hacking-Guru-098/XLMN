"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Play, Check } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onBookCall: () => void;
}

export const Hero = ({ onBookCall }: HeroProps) => {
  return (
    <section className="relative pt-10 pb-0 sm:pt-16 sm:pb-0 bg-white overflow-x-clip">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Headline, Copy, Buttons, Checkmarks */}
          <div className="lg:col-span-5 flex flex-col items-start text-left space-y-6 z-10 shrink-0 max-w-xl w-full">
            {/* Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 border border-[#e5e5e5] bg-white rounded-full px-3 py-1 text-xs font-mono-rethoric font-semibold tracking-wider text-[#0a0a0a] shadow-2xs"
            >
              <span className="text-[11px]">✦</span>
              <span>FOUNDER CONTENT SYSTEM</span>
            </motion.div>

            {/* Main Headline: "Your founder's brain." locked on first line */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl lg:text-[48px] xl:text-[55px] font-extrabold tracking-[-0.035em] text-[#0a0a0a] leading-[1.12] sm:leading-[1.08]"
            >
              <span className="sm:whitespace-nowrap">Your founder’s brain.</span><br />
              <span className="sm:whitespace-nowrap">Your next growth</span><br />
              <span>channel.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[460px] text-sm sm:text-base text-[#555555] leading-relaxed font-normal"
            >
              We turn your real thoughts, voice notes and expertise into high-performing LinkedIn and X content that builds authority and creates pipeline — in just 60 minutes a month.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
            >
              <motion.button
                onClick={onBookCall}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-rethoric-primary w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-full inline-flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>Build my content engine</span>
                <ArrowUpRight className="h-4 w-4" />
              </motion.button>

              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-rethoric-secondary w-full sm:w-auto px-5 py-3.5 text-sm font-semibold rounded-full inline-flex items-center justify-center gap-2 border border-[#e5e5e5] hover:bg-[#f4f4f4] cursor-pointer"
              >
                <span>See how it works</span>
                <Play className="h-3 w-3 fill-current text-[#0a0a0a]" />
              </motion.a>
            </motion.div>

            {/* Micro-proof Checkmarks */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="pt-1 flex flex-wrap items-center gap-3.5 sm:gap-6 text-xs sm:text-[13px] font-medium text-[#333333]"
            >
              <div className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-[#0a0a0a] stroke-[2.5]" />
                <span>60 min/month</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-[#0a0a0a] stroke-[2.5]" />
                <span>Founder-led</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-[#0a0a0a] stroke-[2.5]" />
                <span>No ghostwriting guesswork</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Maximum Size Floating Card (Hidden on Mobile Phone) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex lg:col-span-7 relative w-full items-center justify-end mt-0"
          >
            {/* Ambient soft background glow */}
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-gradient-to-bl from-zinc-200/50 via-purple-100/30 to-transparent blur-3xl pointer-events-none -z-10" />

            <div className="relative w-full max-w-[850px] lg:max-w-none lg:w-[115%] xl:w-[125%] lg:-mr-12 xl:-mr-20">
              {/* Deep 3D Ground Shadow pulsing in sync with breathing card */}
              <div className="absolute -bottom-8 sm:-bottom-12 md:-bottom-16 left-1/2 -translate-x-1/2 w-[85%] h-14 bg-black/25 blur-3xl rounded-[100%] pointer-events-none animate-shadow-breathe" />
              <div className="absolute -bottom-3 sm:-bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-8 bg-black/35 blur-xl rounded-[100%] pointer-events-none animate-shadow-breathe" />

              {/* High-Resolution PNG with Subtle Floating / Breathing Animation */}
              <div className="relative aspect-[16/9] w-full filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.18)] drop-shadow-[0_45px_50px_rgba(0,0,0,0.14)] animate-breathe">
                <Image
                  src="/images/hero-dashboard.png"
                  alt="XLMN Founder Content Workspace"
                  fill
                  priority
                  className="object-contain object-center lg:object-right select-none pointer-events-none"
                  sizes="(max-width: 1024px) 0vw, (max-width: 1200px) 60vw, 850px"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section Divider Line (moved a bit up and evenly spaced) */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.9 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 sm:mt-14 border-t border-[#f0f0f0]"
        />
      </div>
    </section>
  );
};
