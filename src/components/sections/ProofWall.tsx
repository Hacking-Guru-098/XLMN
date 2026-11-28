"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export interface ProofItem {
  id: number;
  image: string;
  metric: string;
}

// One card per real screenshot. Near-duplicate captures of the same chart
// (proof-02 to proof-13, proof-18) are left out so every card shows a different result.
export const proofResults: ProofItem[] = [
  {
    id: 1,
    image: "/results/proof-01.PNG",
    metric: "201,439 impressions in 28 days · up 227%",
  },
  {
    id: 2,
    image: "/results/proof-19.jpg",
    metric: "194,985 impressions · 122K members reached",
  },
  {
    id: 3,
    image: "/results/proof-17.jpg",
    metric: "167,481 impressions · 4,071 link clicks",
  },
  {
    id: 4,
    image: "/results/proof-16.jpg",
    metric: "140,493 impressions · 241 new followers",
  },
  {
    id: 5,
    image: "/results/proof-14.PNG",
    metric: "5,347 engagements · 124 link clicks",
  },
  {
    id: 6,
    image: "/results/proof-24.jpg",
    metric: "99,602 impressions · 61.6K members reached",
  },
  {
    id: 7,
    image: "/results/proof-27.jpg",
    metric: "Audience · 26% senior, 8% founders",
  },
  {
    id: 8,
    image: "/results/proof-23.jpg",
    metric: "85,428 impressions · 1,108 profile views",
  },
  {
    id: 9,
    image: "/results/proof-26.jpg",
    metric: "68,139 impressions · 27.5K video views",
  },
  {
    id: 10,
    image: "/results/proof-05.jpg",
    metric: "61,044 impressions in 7 days",
  },
  {
    id: 11,
    image: "/results/proof-22.jpg",
    metric: "50,869 impressions · 33K members reached",
  },
  {
    id: 12,
    image: "/results/proof-28.jpg",
    metric: "Audience · 29% senior, 20% at 10,001+ companies",
  },
  {
    id: 13,
    image: "/results/proof-21.jpg",
    metric: "41,974 impressions · 26.5K members reached",
  },
  {
    id: 14,
    image: "/results/proof-20.jpg",
    metric: "41,773 impressions · 21K members reached",
  },
  {
    id: 15,
    image: "/results/proof-25.jpg",
    metric: "31,031 impressions · 13.4K video views",
  },
  {
    id: 16,
    image: "/results/proof-15.jpg",
    metric: "574 engagements · 26% senior audience",
  },
];

export const ProofWall = () => {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation for Lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (activeModalIndex === null) return;
      if (e.key === "Escape") {
        setActiveModalIndex(null);
      } else if (e.key === "ArrowLeft") {
        setActiveModalIndex((prev) =>
          prev !== null ? (prev > 0 ? prev - 1 : proofResults.length - 1) : null
        );
      } else if (e.key === "ArrowRight") {
        setActiveModalIndex((prev) =>
          prev !== null ? (prev < proofResults.length - 1 ? prev + 1 : 0) : null
        );
      }
    },
    [activeModalIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const activeItem = activeModalIndex !== null ? proofResults[activeModalIndex] : null;

  // Manual scroll buttons
  const scrollRow = (direction: "left" | "right") => {
    const amount = direction === "left" ? -450 : 450;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section id="receipts" className="relative pt-6 sm:pt-8 pb-14 sm:pb-20 bg-white overflow-hidden scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header & Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between gap-4 pb-6 border-b border-[#f0f0f0]"
        >
          <div>
            <div className="inline-flex items-center gap-2 border border-[#e5e5e5] bg-[#f8f8f8] rounded-full px-3.5 py-1 text-xs font-mono-rethoric font-medium text-[#0a0a0a] mb-2.5">
              <span>THE RECEIPTS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-[-0.03em] text-[#0a0a0a]">
              Real client analytics. Names hidden under NDA.
            </h2>
          </div>

          {/* Minimalist Left/Right Scroll Arrows */}
          <div className="flex items-center gap-1.5">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollRow("left")}
              aria-label="Scroll left"
              className="rounded-full border border-[#e5e5e5] p-2 text-[#555555] hover:border-[#0a0a0a] hover:text-[#0a0a0a] transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollRow("right")}
              aria-label="Scroll right"
              className="rounded-full border border-[#e5e5e5] p-2 text-[#555555] hover:border-[#0a0a0a] hover:text-[#0a0a0a] transition-colors cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Single-Row Horizontal Marquee */}
      <div className="relative mt-8 marquee-container">
        {/* Edge Fade Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

        {/* Single Row: Continuous Stream */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth"
        >
          <div className="animate-marquee-single flex gap-4 pl-4 sm:pl-8">
            {[...proofResults, ...proofResults].map((item, idx) => {
              const originalIndex = idx % proofResults.length;
              return (
                <div
                  key={`single-${item.id}-${idx}`}
                  onClick={() => setActiveModalIndex(originalIndex)}
                  className="w-[280px] sm:w-[320px] shrink-0 card-rethoric p-3 sm:p-3.5 flex flex-col justify-between cursor-pointer group hover:border-[#0a0a0a] transition-all duration-200"
                >
                  {/* Screenshot Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-[#e5e5e5] bg-[#fafafa]">
                    <Image
                      src={item.image}
                      alt={item.metric}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="320px"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 rounded-full bg-black/75 text-white px-3 py-1 text-[11px] font-mono-rethoric backdrop-blur-xs flex items-center gap-1 transition-opacity">
                        <ZoomIn className="h-3 w-3" /> Enlarge
                      </span>
                    </div>
                  </div>

                  {/* Single-Line Stat Caption */}
                  <div className="pt-2.5">
                    <p className="text-xs sm:text-[13px] font-semibold text-[#0a0a0a] truncate group-hover:text-blue-600 transition-colors">
                      {item.metric}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalIndex(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl rounded-2xl border border-[#e5e5e5] bg-white p-4 sm:p-6 shadow-2xl z-10 space-y-3 text-[#0a0a0a]"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between pb-2 border-b border-[#e5e5e5]">
                <div className="flex items-center gap-2.5">
                  <span className="rounded-full bg-[#0a0a0a] text-white px-3 py-0.5 text-xs font-mono-rethoric font-semibold flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                    Client analytics · name hidden
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0a0a0a]">
                    {activeItem.metric}
                  </span>
                </div>

                <button
                  onClick={() => setActiveModalIndex(null)}
                  aria-label="Close modal"
                  className="rounded-full p-1.5 text-zinc-500 hover:bg-[#f4f4f4] hover:text-black transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Full Uncropped High-Res Screenshot */}
              <div className="relative max-h-[74vh] min-h-[320px] sm:min-h-[520px] w-full overflow-hidden rounded-xl border border-[#e5e5e5] bg-[#fafafa]">
                <Image
                  src={activeItem.image}
                  alt={activeItem.metric}
                  fill
                  className="object-contain p-2"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Modal Bottom Controls */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-mono-rethoric text-[#888888] hidden sm:inline">
                  Tip: Use ← → keys to navigate, Esc to close
                </span>

                <div className="flex items-center gap-2 ml-auto">
                  <button
                    onClick={() =>
                      setActiveModalIndex((prev) =>
                        prev !== null ? (prev > 0 ? prev - 1 : proofResults.length - 1) : null
                      )
                    }
                    className="inline-flex items-center gap-1 rounded-full border border-[#e5e5e5] bg-white px-3.5 py-1.5 text-xs font-medium text-[#0a0a0a] hover:bg-[#f4f4f4] transition-colors"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                    Previous
                  </button>
                  <button
                    onClick={() =>
                      setActiveModalIndex((prev) =>
                        prev !== null ? (prev < proofResults.length - 1 ? prev + 1 : 0) : null
                      )
                    }
                    className="inline-flex items-center gap-1 rounded-full border border-[#e5e5e5] bg-[#0a0a0a] px-3.5 py-1.5 text-xs font-medium text-white hover:bg-[#262626] transition-colors"
                  >
                    Next
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
