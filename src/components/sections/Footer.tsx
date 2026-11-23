"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

interface FooterProps {
  onBookCall?: () => void;
}

export const Footer = ({ onBookCall }: FooterProps) => {
  const [showCookieNotice, setShowCookieNotice] = useState(false);

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
            -&gt; JOIN XLMN
          </motion.div>
        </div>

        {/* Crisp 1px Horizontal Divider Rule */}
        <div className="w-full border-t border-[#262626]" />

        {/* Hero CTA Block: "Ready to talk?" + "Book an intro call →" */}
        <div className="pt-16 sm:pt-24 pb-24 sm:pb-36">
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

        {/* 5-Column Editorial Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-12 pb-24">
          {/* Column 0: Brand Logo & Tagline */}
          <div className="col-span-2 md:col-span-1 space-y-4 pr-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black tracking-tight text-white">
                XLMN<span className="text-[#888888]">.</span>
              </span>
            </Link>
            <p className="text-sm text-[#888888] leading-relaxed max-w-[220px]">
              The founder ghostwriting consultancy for founders and executives.
            </p>
          </div>

          {/* Column 1: CONSULTING */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-mono-rethoric uppercase tracking-[0.2em] text-[#737373] font-medium">
              CONSULTING
            </h3>
            <ul className="space-y-3.5 text-sm text-[#999999]">
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors duration-150">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-white transition-colors duration-150">
                  Pricing
                </Link>
              </li>
              <li>
                <button
                  onClick={onBookCall}
                  className="hover:text-white transition-colors duration-150 text-left cursor-pointer"
                >
                  Book intro
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: PLATFORM */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-mono-rethoric uppercase tracking-[0.2em] text-[#737373] font-medium">
              PLATFORM
            </h3>
            <ul className="space-y-3.5 text-sm text-[#999999]">
              <li>
                <Link href="#deliverables" className="hover:text-white transition-colors duration-150">
                  Calendar
                </Link>
              </li>
              <li>
                <Link href="#deliverables" className="hover:text-white transition-colors duration-150">
                  Approvals
                </Link>
              </li>
              <li>
                <Link href="#receipts" className="hover:text-white transition-colors duration-150">
                  Analytics
                </Link>
              </li>
              <li>
                <Link href="#deliverables" className="hover:text-white transition-colors duration-150">
                  Engagement
                </Link>
              </li>
              <li>
                <button
                  onClick={onBookCall}
                  className="hover:text-white transition-colors duration-150 text-left cursor-pointer"
                >
                  Request access
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: RESOURCES */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-mono-rethoric uppercase tracking-[0.2em] text-[#737373] font-medium">
              RESOURCES
            </h3>
            <ul className="space-y-3.5 text-sm text-[#999999]">
              <li>
                <Link href="#receipts" className="hover:text-white transition-colors duration-150">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors duration-150">
                  Manifesto
                </Link>
              </li>
              <li>
                <Link href="#receipts" className="hover:text-white transition-colors duration-150">
                  Free tools
                </Link>
              </li>
              <li>
                <Link href="#deliverables" className="hover:text-white transition-colors duration-150">
                  Compare tools
                </Link>
              </li>
              <li>
                <Link href="#receipts" className="hover:text-white transition-colors duration-150">
                  XLMN vs Taplio
                </Link>
              </li>
              <li>
                <Link href="#receipts" className="hover:text-white transition-colors duration-150">
                  XLMN vs Buffer
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: COMPANY */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-mono-rethoric uppercase tracking-[0.2em] text-[#737373] font-medium">
              COMPANY
            </h3>
            <ul className="space-y-3.5 text-sm text-[#999999]">
              <li>
                <Link href="#receipts" className="hover:text-white transition-colors duration-150">
                  Customers
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors duration-150">
                  Careers
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@xlmn.agency"
                  className="hover:text-white transition-colors duration-150"
                >
                  Contact
                </a>
              </li>
              <li>
                <button
                  onClick={onBookCall}
                  className="hover:text-white transition-colors duration-150 text-left cursor-pointer"
                >
                  Sign in
                </button>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors duration-150">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Cookie Settings Pill + Copyright */}
        <div className="py-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono-rethoric text-[#666666] gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowCookieNotice(!showCookieNotice)}
              className="bg-white text-black px-3 py-1.5 rounded-sm text-[11px] font-sans font-medium hover:bg-neutral-200 transition-colors cursor-pointer shadow-xs"
            >
              Cookie settings
            </button>
            {showCookieNotice && (
              <span className="text-[11px] text-[#888888] animate-in fade-in duration-200">
                Only essential cookies used. No third-party trackers.
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[#666666]">
            <span>© 2026 XLMN. All rights reserved.</span>
            <span>·</span>
            <span>Strict NDA Guaranteed</span>
            <span>·</span>
            <span>Zero AI Slop</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
