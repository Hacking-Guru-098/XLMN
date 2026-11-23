"use client";

import React from "react";
import { Check, X, UserCheck, UserX } from "lucide-react";

export const FitCheck = () => {
  const forYouList = [
    "You have a proven product, real opinions, and stories worth telling.",
    "You want inbound buyers, hires, or investors—not just hollow clout.",
    "You can spare 60 minutes a month to talk through your ideas.",
  ];

  const notForYouList = [
    "You’re looking for $300/month bulk AI posts.",
    "You want overnight viral hacks instead of compounding trust.",
    "You aren't willing to share honest, specific takes from your work.",
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#fafafa] border-y border-[#e5e5e5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 border border-[#e5e5e5] bg-white rounded-full px-4 py-1 text-xs font-mono-rethoric font-medium text-[#0a0a0a]">
            <span>FIT CHECK // QUALIFICATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] text-[#0a0a0a] leading-tight">
            Built for founders with real skin in the game.
          </h2>

          <p className="text-base sm:text-lg text-[#555555]">
            We operate as an extension of your executive voice. Here is how to know if we are the right partner.
          </p>
        </div>

        {/* Split Comparison Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* This is for you if */}
          <div className="card-rethoric p-8 sm:p-10 flex flex-col justify-between bg-white border-[#e5e5e5]">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#e5e5e5]">
                <div className="h-9 w-9 rounded-lg bg-[#0a0a0a] text-white flex items-center justify-center">
                  <UserCheck className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0a0a0a] tracking-tight">
                    This is for you if:
                  </h3>
                  <span className="text-xs text-[#888888] font-mono-rethoric">
                    The High-Signal Founder
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {forYouList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] text-white">
                      <Check className="h-2.5 w-2.5" />
                    </div>
                    <p className="text-sm sm:text-base text-[#333333] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#f0f0f0] text-xs font-mono-rethoric text-[#22c55e] flex items-center gap-1.5">
              <span>● Outcome: Category leadership and consistent inbound dealflow.</span>
            </div>
          </div>

          {/* This is NOT for you if */}
          <div className="card-rethoric p-8 sm:p-10 flex flex-col justify-between bg-[#fcfcfc] border-[#e5e5e5]">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#e5e5e5]">
                <div className="h-9 w-9 rounded-lg bg-[#f4f4f4] text-zinc-500 flex items-center justify-center">
                  <UserX className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0a0a0a] tracking-tight">
                    This is NOT for you if:
                  </h3>
                  <span className="text-xs text-[#888888] font-mono-rethoric">
                    The Growth-Hacker Trap
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {notForYouList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-zinc-600">
                      <X className="h-2.5 w-2.5" />
                    </div>
                    <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#f0f0f0] text-xs font-mono-rethoric text-[#888888] flex items-center gap-1.5">
              <span>● Outcome: Algorithmic penalties, lost executive trust.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
