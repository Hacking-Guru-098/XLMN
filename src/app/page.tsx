"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SolutionSystem } from "@/components/sections/SolutionSystem";
import { ProofWall } from "@/components/sections/ProofWall";
import { DeliverablesBreakdown } from "@/components/sections/DeliverablesBreakdown";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/sections/Footer";
import { BookingModal } from "@/components/ui/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-white text-[#0a0a0a] selection:bg-[#0a0a0a] selection:text-white">
      {/* 0. Top Navigation Bar */}
      <Navbar onBookCall={handleOpenBooking} />

      {/* Main Content: Result-Heavy Flow */}
      <main className="relative flex flex-col">
        {/* 1. Hero + Dark UI / Proof Preview */}
        <Hero onBookCall={handleOpenBooking} />

        {/* 2. The Solution System (3-Step Capture -> Convert -> Publish & Grow) */}
        <SolutionSystem />

        {/* 3. Proof Wall (28 Scrollable Results + Lightbox) */}
        <ProofWall />

        {/* 3. X vs. LinkedIn Deliverables (2-Column Split, 4 Bullets Per Side) */}
        <DeliverablesBreakdown onBookCall={handleOpenBooking} />

        {/* 4. FAQ (4 High-Signal Questions) */}
        <FaqSection />
      </main>

      {/* Full-Bleed Dark Footer (Ready to talk? + Editorial Footer) */}
      <Footer onBookCall={handleOpenBooking} />

      {/* Interactive Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}
