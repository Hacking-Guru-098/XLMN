"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, Mail, ArrowRight, ShieldCheck } from "lucide-react";

// There is no booking backend yet, so a request is sent as a pre-filled email.
// Swap this for a calendar link (Cal.com / Calendly) when one exists.
const BOOKING_EMAIL = "hello@xlmn.agency";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedSlot, setSelectedSlot] = useState<string>("Weekday • afternoon");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    handle: "",
    goal: "Inbound Pipeline & DMs",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableSlots = [
    { label: "Weekday", time: "morning", popular: false },
    { label: "Weekday", time: "afternoon", popular: true },
    { label: "Weekday", time: "evening", popular: false },
    { label: "Any time", time: "I'm flexible", popular: false },
  ];

  const mailtoHref = () => {
    const subject = `Intro call request: ${formData.name || "Founder"}${formData.company ? ` (${formData.company})` : ""}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Company: ${formData.company}`,
      `Profile: ${formData.handle}`,
      `Main goal: ${formData.goal}`,
      `Preferred time: ${selectedSlot} (please include your time zone)`,
    ].join("\n");
    return `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    window.location.href = mailtoHref();
    setIsSubmitting(false);
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
            className="relative w-full max-w-lg rounded-2xl border border-[#e5e5e5] bg-white p-6 sm:p-8 shadow-2xl z-10 text-[#0a0a0a]"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full p-1.5 text-zinc-400 hover:bg-[#f4f4f4] hover:text-black transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Step 1: Select slot */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-[#e5e5e5] bg-[#f8f8f8] px-3 py-1 text-xs font-mono-rethoric font-semibold text-[#0a0a0a]">
                    FREE 20-MIN PROFILE AUDIT
                  </div>
                  <h3 className="mt-3 text-2xl font-extrabold text-[#0a0a0a] tracking-tight">
                    Book an intro call
                  </h3>
                  <p className="mt-1 text-sm text-[#555555]">
                    We’ll review your X and LinkedIn profiles with you and map out your first 30 days of posts.
                  </p>
                </div>

                <div className="space-y-2.5">
                  <label className="text-xs font-mono-rethoric uppercase text-[#888888]">
                    When suits you best?
                  </label>
                  <div className="grid gap-2">
                    {availableSlots.map((slot, idx) => {
                      const slotStr = `${slot.label} • ${slot.time}`;
                      const isSelected = selectedSlot === slotStr;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedSlot(slotStr)}
                          className={`flex items-center justify-between rounded-xl border p-3.5 text-sm transition-all text-left ${
                            isSelected
                              ? "border-[#0a0a0a] bg-[#0a0a0a] text-white shadow-sm"
                              : "border-[#e5e5e5] bg-white text-[#333333] hover:border-[#0a0a0a]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Clock className={`h-4 w-4 ${isSelected ? "text-white" : "text-zinc-400"}`} />
                            <span className="font-medium">{slot.label}</span>
                            <span className={isSelected ? "text-zinc-300" : "text-zinc-400"}>•</span>
                            <span className={isSelected ? "text-zinc-200" : "text-zinc-600"}>{slot.time}</span>
                          </div>
                          {slot.popular && (
                            <span className={`rounded-full px-2 py-0.5 text-[10px] font-mono-rethoric ${
                              isSelected ? "bg-white/20 text-white" : "bg-[#f4f4f4] text-[#0a0a0a]"
                            }`}>
                              Most popular
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setStep(2)}
                    className="btn-rethoric-primary w-full py-3.5 text-sm"
                  >
                    Continue
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="mt-3 text-center text-xs font-mono-rethoric text-[#888888] flex items-center justify-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#22c55e]" />
                    NDA on request · No prep needed
                  </p>
                </div>
              </div>
            )}

            {/* Step 2: Founder Details */}
            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs font-mono-rethoric text-[#0a0a0a] hover:underline mb-2 block"
                  >
                    ← Back ({selectedSlot})
                  </button>
                  <h3 className="text-xl font-bold text-[#0a0a0a] tracking-tight">
                    A few details
                  </h3>
                  <p className="text-xs text-[#666666]">
                    Share the profile you want us to review so we can prepare before the call.
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-[#333333]">Full name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Priya Shah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-[#e5e5e5] bg-white px-3.5 py-2.5 text-sm text-[#0a0a0a] placeholder-zinc-400 focus:border-[#0a0a0a] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-[#333333]">Work email</label>
                    <input
                      required
                      type="email"
                      placeholder="founder@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-[#e5e5e5] bg-white px-3.5 py-2.5 text-sm text-[#0a0a0a] placeholder-zinc-400 focus:border-[#0a0a0a] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-[#333333]">Company</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. HyperScale AI"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="mt-1 w-full rounded-xl border border-[#e5e5e5] bg-white px-3.5 py-2.5 text-sm text-[#0a0a0a] placeholder-zinc-400 focus:border-[#0a0a0a] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-[#333333]">X or LinkedIn URL</label>
                      <input
                        required
                        type="text"
                        placeholder="x.com/handle"
                        value={formData.handle}
                        onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
                        className="mt-1 w-full rounded-xl border border-[#e5e5e5] bg-white px-3.5 py-2.5 text-sm text-[#0a0a0a] placeholder-zinc-400 focus:border-[#0a0a0a] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-[#333333]">Main goal</label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-[#e5e5e5] bg-white px-3.5 py-2.5 text-sm text-[#0a0a0a] focus:border-[#0a0a0a] focus:outline-none"
                    >
                      <option value="Inbound Pipeline & DMs">Inbound pipeline &amp; DMs (sales)</option>
                      <option value="Category Authority & Investor Network">Category authority &amp; investor network</option>
                      <option value="Top Tier Talent Recruiting">Hiring top talent</option>
                      <option value="All of the above">All of the above</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-rethoric-primary w-full py-3.5 text-sm"
                  >
                    {isSubmitting ? "Opening your email..." : "Send request"}
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Success Screen */}
            {step === 3 && (
              <div className="text-center py-4 space-y-5">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f4f4f4] text-[#0a0a0a]">
                  <Mail className="h-7 w-7" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-[#0a0a0a]">One last step</h3>
                  <p className="text-sm text-[#555555] max-w-sm mx-auto">
                    Your email app should have opened with your details filled in. Hit send and we’ll reply within one business day to confirm a time.
                  </p>
                  <p className="text-xs text-[#888888] max-w-sm mx-auto">
                    Nothing opened?{" "}
                    <a href={mailtoHref()} className="font-mono-rethoric font-semibold text-[#0a0a0a] underline">
                      Email {BOOKING_EMAIL}
                    </a>
                  </p>
                </div>

                <div className="rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-4 text-left text-xs space-y-2">
                  <div className="font-semibold text-[#0a0a0a] flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-[#0a0a0a]" />
                    What happens on the call:
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-[#555555] pl-1">
                    <li>A review of how your X and LinkedIn profiles come across today</li>
                    <li>3 post ideas written for {formData.company || "your company"}</li>
                    <li>A walkthrough of how the monthly call and weekly approvals work</li>
                  </ul>
                </div>

                <button
                  onClick={handleReset}
                  className="btn-rethoric-secondary w-full py-3 text-sm"
                >
                  Back to the site
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
