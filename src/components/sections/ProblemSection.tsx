"use client";

import React from "react";
import { Bot, BarChart3, Clock, XCircle, CheckCircle2 } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      code: "TRAP. 01",
      icon: Bot,
      title: 'The "AI-Sounding" Trap',
      body: "Most agencies feed your bio into a prompt and spit out hollow bro-etry. Your buyers spot it in two seconds—and it costs you credibility instead of building it.",
      verdict: "Instant credibility killer for technical buyers",
      sample: '"In today\'s fast-paced world, founders must embrace the hustle... 🚀 Agree?"',
    },
    {
      code: "TRAP. 02",
      icon: BarChart3,
      title: "Vanity Views, Zero Pipeline",
      body: "Viral motivational quotes get likes from people who will never buy your product. We write for the decision-makers, investors, and top talent you actually care about.",
      verdict: "Views without ICP intent is just digital noise",
      sample: "150,000 viral views → $0 Closed Won pipeline",
    },
    {
      code: "TRAP. 03",
      icon: Clock,
      title: "The Editing Bottleneck",
      body: "If you’re spending three hours a week rewriting your ghostwriter’s drafts, you don’t have a ghostwriter—you have a part-time job.",
      verdict: "You should be closing deals, not teaching vocabulary",
      sample: "3.5 hrs / week redlining uneducated drafts",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#fafafa] border-y border-[#e5e5e5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Rethoric Style Editorial Statement Block */}
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <div className="inline-flex items-center gap-2 border border-[#e5e5e5] bg-white rounded-full px-4 py-1 text-xs font-mono-rethoric font-medium text-[#0a0a0a]">
            <span>THE PROBLEM // WHY MOST GHOSTWRITING FAILS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.12]">
            <span className="text-[#a3a3a3] block sm:inline">
              Most founder posting is unreadable. Embarrassing AI slop. Meh content. &ldquo;Excited to announce.&rdquo;{" "}
            </span>
            <span className="text-[#0a0a0a] block sm:inline mt-2 sm:mt-0">
              You know you need to post. You don’t have time to sound like a LinkedIn cliché.
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#666666]">
            Why traditional ghostwriting agencies and generic prompt tools fail technical B2B founders every single time.
          </p>
        </div>

        {/* 3 Rethoric Problem Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card-rethoric p-7 sm:p-8 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-rethoric font-semibold tracking-wider text-[#888888]">
                      [{item.code}]
                    </span>
                    <div className="h-9 w-9 rounded-lg bg-[#f4f4f4] flex items-center justify-center text-[#0a0a0a]">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#0a0a0a] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#555555] leading-relaxed">
                    {item.body}
                  </p>
                </div>

                {/* Micro Example Callout */}
                <div className="mt-6 pt-5 border-t border-[#f0f0f0] space-y-2">
                  <div className="rounded-lg bg-[#f8f8f8] border border-[#e5e5e5] p-3 text-xs text-[#777777] font-mono-rethoric">
                    {item.sample}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-rose-600 font-medium">
                    <XCircle className="h-3.5 w-3.5" />
                    <span>{item.verdict}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
