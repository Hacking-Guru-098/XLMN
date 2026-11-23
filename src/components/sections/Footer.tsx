"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-[#e5e5e5] bg-white py-14 sm:py-20 text-sm text-[#666666]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center pb-12 border-b border-[#e5e5e5]">
          {/* Left: Brand */}
          <div className="space-y-3">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight text-[#0a0a0a]">
                X<span className="font-light text-zinc-400 mx-[1px]">|</span>LMN<span className="text-[#0a0a0a]">.</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed max-w-xs">
              XLMN · Founder Ghostwriting for X &amp; LinkedIn.
            </p>
          </div>

          {/* Center Links */}
          <nav className="flex flex-wrap items-center justify-start md:justify-center gap-6 sm:gap-8 text-sm">
            <Link
              href="#receipts"
              className="text-[#555555] hover:text-[#0a0a0a] transition-colors"
            >
              Proof
            </Link>
            <Link
              href="#deliverables"
              className="text-[#555555] hover:text-[#0a0a0a] transition-colors"
            >
              Deliverables
            </Link>
            <Link
              href="#faq"
              className="text-[#555555] hover:text-[#0a0a0a] transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* Right Links & Contact */}
          <div className="flex flex-col md:items-end space-y-2 text-xs sm:text-sm">
            <div className="flex items-center gap-4">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#555555] hover:text-[#0a0a0a] transition-colors"
              >
                <span>X (Twitter)</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
              </a>
              <span className="text-zinc-300">·</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#555555] hover:text-[#0a0a0a] transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
              </a>
            </div>
            <a
              href="mailto:hello@xlmn.agency"
              className="flex items-center gap-1.5 text-[#0a0a0a] hover:underline font-mono-rethoric text-xs"
            >
              <Mail className="h-3.5 w-3.5 text-zinc-400" />
              <span>hello@xlmn.agency</span>
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-rethoric text-[#888888] gap-4">
          <p>© 2026 XLMN. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span>Strict NDA Guaranteed</span>
            <span>·</span>
            <span>Zero AI Slop</span>
            <span>·</span>
            <span>B2B &amp; Tech Focus</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
