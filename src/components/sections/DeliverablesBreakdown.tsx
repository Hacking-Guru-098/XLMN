"use client";

import React from "react";
import { Check, ArrowRight, Layers } from "lucide-react";
import { motion } from "motion/react";

interface DeliverablesBreakdownProps {
  onBookCall: () => void;
}

export const DeliverablesBreakdown = ({ onBookCall }: DeliverablesBreakdownProps) => {
  // Trimmed to 4 high-signal bullets per side
  const xDeliverables = [
    "5–7 short-form posts per week tailored to your niche",
    "1–2 deep-dive threads or teardown posts per week",
    "Profile bio, banner direction, and pinned post optimization",
    "Daily reply plan and a weekly performance report",
  ];

  const linkedinDeliverables = [
    "4–5 founder-led posts per week (stories, frameworks, teardowns)",
    "Clean, readable posts. No broetry, no engagement bait",
    "Full profile funnel overhaul (headline, About, Featured CTA)",
    "Comment playbook and a monthly strategy call",
  ];

  return (
    <section id="deliverables" className="relative py-14 sm:py-28 bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 border border-[#e5e5e5] bg-[#f8f8f8] rounded-full px-4 py-1 text-xs font-mono-rethoric font-medium text-[#0a0a0a]">
            <span>WHAT YOU GET</span>
          </div>

          <h2 className="text-2xl sm:text-5xl font-extrabold tracking-[-0.03em] text-[#0a0a0a] leading-tight">
            Two platforms. One cohesive founder narrative.
          </h2>

          <p className="text-sm sm:text-lg text-[#555555]">
            Short, sharp posts on X to reach founders and tech buyers. Considered, longer posts on LinkedIn to reach the people who sign deals.
          </p>
        </motion.div>

        {/* 2 Deliverables Columns */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Column 1: X (Twitter) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="card-rethoric p-5 sm:p-9 flex flex-col justify-between"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-[#e5e5e5]">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-[#0a0a0a] text-white flex items-center justify-center font-bold text-base">
                    𝕏
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0a0a0a] tracking-tight">
                      X (Twitter)
                    </h3>
                    <span className="text-xs text-[#888888] font-mono-rethoric">
                      Reach &amp; conversation
                    </span>
                  </div>
                </div>

                <span className="rounded-full bg-[#f4f4f4] border border-[#e5e5e5] px-3 py-0.5 text-xs font-mono-rethoric font-semibold text-[#0a0a0a]">
                  Daily posting
                </span>
              </div>

              <p className="text-sm font-medium text-[#333333]">
                Sharp takes, fast replies, and a network that grows every week.
              </p>

              <div className="space-y-3 pt-1">
                {xDeliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] text-white">
                      <Check className="h-2.5 w-2.5" />
                    </div>
                    <span className="text-sm text-[#444444] leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#f0f0f0] flex items-center justify-between text-xs font-mono-rethoric text-[#888888]">
              <span>Best for reaching founders &amp; tech buyers</span>
              <button
                type="button"
                onClick={onBookCall}
                className="text-[#0a0a0a] font-semibold hover:underline cursor-pointer shrink-0"
              >
                Start with X →
              </button>
            </div>
          </motion.div>

          {/* Column 2: LinkedIn */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="card-rethoric p-5 sm:p-9 flex flex-col justify-between"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-[#e5e5e5]">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-[#0a66c2] text-white flex items-center justify-center font-bold text-base">
                    in
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0a0a0a] tracking-tight">
                      LinkedIn
                    </h3>
                    <span className="text-xs text-[#888888] font-mono-rethoric">
                      Authority &amp; inbound
                    </span>
                  </div>
                </div>

                <span className="rounded-full bg-[#f4f4f4] border border-[#e5e5e5] px-3 py-0.5 text-xs font-mono-rethoric font-semibold text-[#0a0a0a]">
                  4–5 posts a week
                </span>
              </div>

              <p className="text-sm font-medium text-[#333333]">
                Authority, buyer trust, and warm inbound conversations.
              </p>

              <div className="space-y-3 pt-1">
                {linkedinDeliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] text-white">
                      <Check className="h-2.5 w-2.5" />
                    </div>
                    <span className="text-sm text-[#444444] leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#f0f0f0] flex items-center justify-between text-xs font-mono-rethoric text-[#888888]">
              <span>Best for reaching decision-makers</span>
              <button
                type="button"
                onClick={onBookCall}
                className="text-[#0a0a0a] font-semibold hover:underline cursor-pointer shrink-0"
              >
                Start with LinkedIn →
              </button>
            </div>
          </motion.div>
        </div>

        {/* Review Workspace Notice (included with both platforms) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-5xl mx-auto rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-white border border-[#e5e5e5] flex items-center justify-center text-[#0a0a0a] shrink-0">
              <Layers className="h-4 w-4" />
            </div>
            <div>
              <div className="font-semibold text-[#0a0a0a] text-xs sm:text-sm">
                Included with both: a shared Slack or Notion workspace
              </div>
              <p className="text-xs text-[#666666]">
                Review, comment on, or approve drafts in about 10 minutes a week.
              </p>
            </div>
          </div>

          <motion.button
            onClick={onBookCall}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-rethoric-primary w-full sm:w-auto px-4 py-2.5 text-xs font-medium shrink-0 cursor-pointer"
          >
            <span>Book an intro call</span>
            <ArrowRight className="h-3 w-3" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
