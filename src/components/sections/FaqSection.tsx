"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Limited to 4 high-signal questions as requested
  const faqs = [
    {
      question: "How much of my time does this actually take?",
      answer:
        "About 60 minutes a month for our extraction call, plus 10 minutes a week to review and approve drafts in Slack or Notion. If you have a random thought between calls, drop us a 30-second voice note and we’ll turn it into a post.",
    },
    {
      question: "How do you make sure it actually sounds like me?",
      answer:
        "We don't guess your tone—we study it. We pull directly from your transcripts, past writing, Slack rants, and recorded calls to build a living Voice Guide. By week two, most founders approve 90%+ of drafts without edits.",
    },
    {
      question: "Do you use AI to write the posts?",
      answer:
        "No. Every post is researched, structured, and written by a human writer who understands B2B, tech, and how founders actually talk. Your audience can tell the difference immediately.",
    },
    {
      question: "Is this confidential?",
      answer:
        "100%. We sign strict NDAs on request and never publicly name clients or share unredacted work without explicit written permission.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-14 sm:py-28 bg-[#fafafa] border-t border-[#e5e5e5] scroll-mt-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 border border-[#e5e5e5] bg-white rounded-full px-4 py-1 text-xs font-mono-rethoric font-medium text-[#0a0a0a]">
            <span>FAQ // FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-2xl sm:text-5xl font-extrabold tracking-[-0.03em] text-[#0a0a0a] leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-lg text-[#555555]">
            Everything you need to know about how XLMN turns founder thinking into pipeline.
          </p>
        </motion.div>

        {/* 4-Item Accordion List */}
        <div className="mt-10 sm:mt-12 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="card-rethoric bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-[#0a0a0a] pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f4f4f4] text-[#0a0a0a]"
                  >
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#555555] leading-relaxed border-t border-[#f0f0f0] pt-3.5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
