"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";

export interface ReceiptItem {
  id: string;
  tag: "X" | "LinkedIn" | "Inbound DMs" | "X + LinkedIn";
  statHeadline: string;
  caption: string;
  metricLabel: string;
  metricValue: string;
  verifiedAccount: string;
  verifiedRole: string;
  fullNarrative: string;
  breakdown: { label: string; value: string }[];
}

interface ReceiptModalProps {
  receipt: ReceiptItem | null;
  onClose: () => void;
  onBookCall: () => void;
}

export const ReceiptModal = ({ receipt, onClose, onBookCall }: ReceiptModalProps) => {
  if (!receipt) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl rounded-2xl border border-[#e5e5e5] bg-white p-6 sm:p-8 shadow-2xl z-10 space-y-6 text-[#0a0a0a]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full p-2 text-zinc-400 hover:bg-[#f4f4f4] hover:text-black transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#0a0a0a] text-white px-3 py-1 text-xs font-mono-rethoric font-semibold">
              Platform: {receipt.tag}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#22c55e] font-mono-rethoric font-medium">
              <CheckCircle2 className="h-4 w-4" />
              Verified Client Delivery
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold text-[#0a0a0a] tracking-tight">
              {receipt.statHeadline}
            </h3>
            <p className="mt-2 text-sm text-[#555555] leading-relaxed">
              {receipt.caption}
            </p>
          </div>

          {/* Metric Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {receipt.breakdown.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-3.5 text-center"
              >
                <div className="text-xl font-bold text-[#0a0a0a]">{item.value}</div>
                <div className="text-[11px] font-mono-rethoric text-[#888888] uppercase mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Narrative context */}
          <div className="rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-5 text-sm text-[#444444] space-y-2.5">
            <div className="text-xs font-mono-rethoric uppercase tracking-wider font-semibold text-[#0a0a0a]">
              The Strategy &amp; Execution Behind This Receipt
            </div>
            <p className="leading-relaxed text-[#555555]">
              {receipt.fullNarrative}
            </p>
            <div className="pt-2 border-t border-[#e5e5e5] flex items-center justify-between text-xs font-mono-rethoric text-[#888888]">
              <span>Account: {receipt.verifiedAccount}</span>
              <span>Role: {receipt.verifiedRole}</span>
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <span className="text-xs text-[#777777] font-mono-rethoric">
              Ready to replicate this pipeline for your company?
            </span>
            <button
              onClick={() => {
                onClose();
                onBookCall();
              }}
              className="btn-rethoric-primary w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-medium"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
