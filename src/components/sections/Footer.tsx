"use client";

import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { motion } from "motion/react";

interface FooterProps {
  onBookCall?: () => void;
}

export const Footer = ({ onBookCall }: FooterProps) => {
  return (
    <footer className="w-full bg-[#000000] text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Eyebrow */}
        <div className="pt-20 sm:pt-28 pb-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[11px] sm:text-xs font-mono-rethoric text-[#888888] uppercase tracking-[0.22em] font-medium"
          >
            → WORK WITH XLMN
          </motion.div>
        </div>

        {/* Crisp 1px Horizontal Divider Rule */}
        <div className="w-full border-t border-[#262626]" />

        {/* Hero CTA Block: "Ready to talk?" + "Book an intro call →" */}
        <div className="pt-16 sm:pt-24 pb-20 sm:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-12"
          >
            <h2 className="text-5xl sm:text-7xl lg:text-[88px] font-bold tracking-[-0.04em] text-white leading-none">
              Ready to talk?
            </h2>

            <motion.button
              onClick={onBookCall}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="bg-white text-black px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-all inline-flex items-center gap-2 cursor-pointer shadow-md shrink-0 w-fit"
            >
              <span>Book an intro call</span>
              <span className="text-base font-normal leading-none">→</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Editorial Footer Grid (Only Present Items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-20">
          {/* Brand Column (Left) */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4 pr-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black tracking-tight text-white">
                XLMN<span className="text-[#888888]">.</span>
              </span>
            </Link>
            <p className="text-sm text-[#888888] leading-relaxed max-w-sm">
              Ghostwriting for founders and executives on LinkedIn and X. We turn how you think into posts that build reach and bring in pipeline.
            </p>
          </div>

          {/* Column 1: CONSULTING */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-mono-rethoric uppercase tracking-[0.2em] text-[#737373] font-medium">
              EXPLORE
            </h3>
            <ul className="space-y-3 text-sm text-[#999999]">
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors duration-150">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#receipts" className="hover:text-white transition-colors duration-150">
                  Results
                </Link>
              </li>
              <li>
                <Link href="#deliverables" className="hover:text-white transition-colors duration-150">
                  Deliverables
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors duration-150">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: GET STARTED */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-mono-rethoric uppercase tracking-[0.2em] text-[#737373] font-medium">
              GET STARTED
            </h3>
            <ul className="space-y-3 text-sm text-[#999999]">
              <li>
                <button
                  onClick={onBookCall}
                  className="hover:text-white transition-colors duration-150 text-left cursor-pointer"
                >
                  Book an intro call ↗
                </button>
              </li>
              <li>
                <button
                  onClick={onBookCall}
                  className="hover:text-white transition-colors duration-150 text-left cursor-pointer"
                >
                  Free profile audit
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: CONNECT */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-mono-rethoric uppercase tracking-[0.2em] text-[#737373] font-medium">
              CONNECT
            </h3>
            <ul className="space-y-3 text-sm text-[#999999]">
              <li>
                <a
                  href="mailto:hello@xlmn.agency"
                  className="hover:text-white transition-colors duration-150 inline-flex items-center gap-1.5 font-mono-rethoric text-xs"
                >
                  <span>hello@xlmn.agency</span>
                  <Mail className="h-3 w-3 text-[#737373]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Principles */}
        <div className="py-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono-rethoric text-[#666666] gap-4">
          <p>© 2026 XLMN. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[#666666]">
            <span>NDA on request</span>
            <span>·</span>
            <span>Written by humans</span>
            <span>·</span>
            <span>You approve every post</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
