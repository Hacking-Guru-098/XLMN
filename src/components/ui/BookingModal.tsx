"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, ShieldCheck, Loader2 } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/hacking-guru-098/social-media-discovery";

const calendlyEmbedSrc = () => {
  const params = new URLSearchParams({
    embed_type: "Inline",
    hide_gdpr_banner: "1",
    background_color: "ffffff",
    text_color: "0a0a0a",
    primary_color: "0a0a0a",
  });
  if (typeof window !== "undefined") {
    params.set("embed_domain", window.location.hostname);
  }
  return `${CALENDLY_URL}?${params.toString()}`;
};

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence onExitComplete={() => setIsLoaded(false)}>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          data-lenis-prevent
        >
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            className="relative w-full max-w-3xl rounded-2xl border border-[#e5e5e5] bg-white p-5 sm:p-7 shadow-2xl z-10 text-[#0a0a0a]"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 sm:right-5 sm:top-5 rounded-full p-1.5 text-zinc-400 hover:bg-[#f4f4f4] hover:text-black transition-colors cursor-pointer"
              aria-label="Close booking"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="pr-10">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#e5e5e5] bg-[#f8f8f8] px-3 py-1 text-xs font-mono-rethoric font-semibold text-[#0a0a0a]">
                FREE PROFILE AUDIT
              </div>
              <h3 id="booking-title" className="mt-3 text-2xl font-extrabold text-[#0a0a0a] tracking-tight">
                Book an intro call
              </h3>
              <p className="mt-1 text-sm text-[#555555]">
                We’ll review your X and LinkedIn profiles with you and map out your first 30 days of posts.
              </p>
            </div>

            {/* Calendly inline scheduler */}
            <div className="relative mt-5 h-[640px] sm:h-[660px] w-full overflow-hidden rounded-xl border border-[#e5e5e5] bg-white">
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center gap-2 text-sm text-[#888888]">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Loading available times…
                </div>
              )}
              <iframe
                src={calendlyEmbedSrc()}
                title="Book an intro call with XLMN"
                onLoad={() => setIsLoaded(true)}
                className="h-full w-full border-0"
              />
            </div>

            {/* Footer */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono-rethoric text-[#888888]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#22c55e]" />
                NDA on request · No prep needed
              </span>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#0a0a0a] font-semibold hover:underline"
              >
                Open in a new tab
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
