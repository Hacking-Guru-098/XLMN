"use client";

import React, { useState } from "react";
import {
  Mic,
  Target,
  CheckCircle,
  Play,
  Pause,
  Copy,
  Check,
  Sparkles,
  Volume2,
} from "lucide-react";

export const HowItWorks = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  const steps = [
    {
      num: "01",
      title: "Voice & Angle Extraction",
      desc: "One 60-minute recorded interview per month—plus we mine your past podcasts, sales calls, decks, and voice notes to map your exact vocabulary and stories.",
      tag: "60-min monthly sync",
    },
    {
      num: "02",
      title: "Positioning & Writing",
      desc: "We lock in 3–4 core pillars tied directly to what you sell: product insights, contrarian industry takes, founder lessons, and customer proof.",
      tag: "Zero generic AI slop",
    },
    {
      num: "03",
      title: "Publishing & 5-Min Approvals",
      desc: "Review your weekly slate in Slack or Notion in under 10 minutes. We schedule, format, and optimize for profile visits and inbound DMs.",
      tag: "10 mins/week review",
    },
  ];

  const handleCopy = () => {
    const textToCopy = `Most early-stage SaaS founders hire 5 SDRs to fix a leaky bucket.\n\nLast month, we didn’t touch outbound. We cut our signup flow from 7 steps to 2.\n\nActivation jumped 34% in three weeks.\n\nYou don't have a top-of-funnel problem. You have a friction problem. Fix the leaks before you buy more traffic.`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="how-it-works" className="relative py-20 sm:py-28 bg-[#fafafa] border-t border-[#e5e5e5] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 border border-[#e5e5e5] bg-white rounded-full px-4 py-1 text-xs font-mono-rethoric font-medium text-[#0a0a0a]">
            <span>HOW IT WORKS // THE 3-STEP ENGINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] text-[#0a0a0a] leading-tight">
            One hour of your month. Thirty days of compounding distribution.
          </h2>

          <p className="text-base sm:text-lg text-[#555555]">
            A frictionless, high-bandwidth system designed around the demanding schedules of active founders.
          </p>
        </div>

        {/* Borderless 3-Step Horizontal Row */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#e5e5e5]">
                <span className="font-mono-rethoric text-2xl font-bold text-[#0a0a0a]">
                  {step.num}
                </span>
                <span className="text-[11px] font-mono-rethoric text-[#777777] bg-white px-2.5 py-0.5 rounded-full border border-[#e5e5e5]">
                  {step.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#0a0a0a] tracking-tight">
                {step.title}
              </h3>

              <p className="text-sm text-[#555555] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Voice Extraction Showcase (Before / After Block) */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="text-center mb-8 space-y-2">
            <span className="text-xs font-mono-rethoric uppercase tracking-[0.08em] text-[#888888]">
              VOICE EXTRACTION SHOWCASE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a0a0a] tracking-[-0.025em]">
              How a 20-second ramble becomes a post that sounds like you.
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Box: Raw Founder Voice Note */}
            <div className="card-rethoric p-6 sm:p-7 flex flex-col justify-between bg-white">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#f4f4f4] border border-[#e5e5e5] px-3 py-0.5 text-xs font-mono-rethoric font-semibold text-[#666666]">
                    RAW FOUNDER VOICE NOTE
                  </span>
                  <span className="text-xs text-[#888888] font-mono-rethoric">0:20 audio duration</span>
                </div>

                {/* Audio Player Pill */}
                <div className="rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-4 space-y-2.5">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="h-8 w-8 rounded-full bg-[#0a0a0a] hover:bg-[#262626] text-white flex items-center justify-center transition-all"
                      aria-label="Toggle audio playback"
                    >
                      {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 ml-0.5" />}
                    </button>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-[#0a0a0a]">
                        WhatsApp Voice Memo #14
                      </div>
                      <div className="text-[11px] text-[#777777]">
                        Sent while walking between meetings
                      </div>
                    </div>
                    <Volume2 className="h-4 w-4 text-zinc-400" />
                  </div>

                  {/* Audio Waveform */}
                  <div className="flex items-center gap-1 h-5 pt-1">
                    {[20, 45, 80, 60, 30, 90, 75, 40, 65, 85, 95, 70, 50, 30, 85, 60, 45, 90, 100, 75, 60, 35, 70, 50, 40].map((height, i) => (
                      <div
                        key={i}
                        className={`w-1 rounded-full transition-all duration-300 ${
                          isPlaying && i < 14 ? "bg-[#0a0a0a]" : "bg-[#e5e5e5]"
                        }`}
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Raw Transcript */}
                <div className="space-y-1.5">
                  <div className="text-xs font-mono-rethoric text-[#888888] uppercase">
                    Raw Transcript:
                  </div>
                  <blockquote className="rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-4 text-sm text-[#444444] italic font-mono-rethoric leading-relaxed">
                    &quot;Honestly I’m tired of seeing SaaS teams hire 5 SDRs before they even fix their onboarding. We cut our signup steps from 7 to 2 last month and activation jumped 34%. People overcomplicate growth.&quot;
                  </blockquote>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#f0f0f0] text-xs font-mono-rethoric text-[#888888]">
                Captured effortlessly in 20 seconds.
              </div>
            </div>

            {/* Right Box: Final X / LinkedIn Post */}
            <div className="card-rethoric p-6 sm:p-7 flex flex-col justify-between bg-white border-[#0a0a0a] shadow-xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#0a0a0a] text-white px-3 py-0.5 text-xs font-mono-rethoric font-semibold flex items-center gap-1.5">
                    <Sparkles className="h-3 w-3" />
                    FINAL PUBLISHED POST
                  </span>

                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 rounded-full border border-[#e5e5e5] bg-white px-3 py-1 text-xs font-medium text-[#444444] hover:border-[#0a0a0a] hover:text-[#0a0a0a] transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-600" />
                        <span className="text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3 text-zinc-400" />
                        <span>Copy Post</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Post Content */}
                <div className="rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-4 sm:p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-[#0a0a0a] text-white text-[11px] font-bold flex items-center justify-center">
                      MV
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0a0a0a]">
                        Marc Vance <span className="text-blue-500 font-normal">✓</span>
                      </div>
                      <div className="text-[10px] text-[#777777]">SaaS Founder • Published via XLMN</div>
                    </div>
                  </div>

                  <div className="text-sm text-[#111111] space-y-2.5 leading-relaxed">
                    <p className="font-semibold text-[#0a0a0a]">
                      Most early-stage SaaS founders hire 5 SDRs to fix a leaky bucket.
                    </p>
                    <p>
                      Last month, we didn’t touch outbound. We cut our signup flow from 7 steps to 2.
                    </p>
                    <p className="font-semibold text-[#0a0a0a]">
                      Activation jumped 34% in three weeks.
                    </p>
                    <p>
                      You don&apos;t have a top-of-funnel problem. You have a friction problem. Fix the leaks before you buy more traffic.
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-[#e5e5e5] flex items-center justify-between text-xs text-[#777777] font-mono-rethoric">
                    <span>1,840 Likes · 142 Reposts</span>
                    <span className="font-semibold text-[#0a0a0a]">14 Inbound DMs</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#f0f0f0] text-xs font-mono-rethoric text-[#0a0a0a] flex items-center gap-1.5 font-medium">
                <Check className="h-3.5 w-3.5 text-[#22c55e]" />
                Zero generic clichés. 100% human-crafted authority.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
