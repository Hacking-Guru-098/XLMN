"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Users } from "lucide-react";
import { motion } from "motion/react";

interface FinalCtaProps {
  onBookCall: () => void;
}

export const FinalCta = ({ onBookCall }: FinalCtaProps) => {
  return (
    <section className="relative py-14 sm:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Rethoric's Signature Dark Conversion Box with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-[#0a0a0a] text-white p-6 sm:p-16 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Ambient background glow inside dark card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-b from-zinc-800/40 via-zinc-900/10 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-5 sm:space-y-6">
            {/* Monospace Onboarding Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-[11px] sm:text-xs font-mono-rethoric text-zinc-300">
              <span className="flex h-2 w-2 rounded-full bg-[#22c55e] animate-ping" />
              <span>NOW ONBOARDING: 1 OF 3 SLOTS AVAILABLE THIS MONTH</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-white leading-tight">
              Your competitors are either silent or posting generic fluff.
            </h2>

            {/* Subheadline */}
            <p className="max-w-2xl mx-auto text-sm sm:text-lg text-zinc-300 leading-relaxed font-normal">
              Take the category voice. Book a 20-minute intro call—we’ll audit your current X and LinkedIn profiles live and map out your first 30 days.
            </p>

            {/* Primary CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                onClick={onBookCall}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-rethoric-inverted w-full sm:w-auto px-8 py-4 text-sm font-semibold cursor-pointer"
              >
                <span>Book Your Intro Call</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>

            {/* Micro-copy */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs font-mono-rethoric text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-zinc-400" />
                We only onboard 3 new founders per month to keep writing quality sharp.
              </span>
              <span className="hidden sm:inline text-zinc-600">·</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#22c55e]" />
                Strict NDA available
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
