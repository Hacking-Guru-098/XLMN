"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onBookCall: () => void;
}

export const Navbar = ({ onBookCall }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Product", href: "#deliverables" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Results", href: "#receipts" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200 border-b ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-[#e5e5e5] py-3.5 shadow-xs"
          : "bg-white/90 backdrop-blur-md border-[#e5e5e5]/60 py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Exact Logo: XLMN. */}
        <Link href="/" className="group flex items-center">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0a0a0a]">
            XLMN.
          </span>
        </Link>

        {/* Center Nav Links: Product · How it Works · Results · FAQ */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[14px] font-medium text-[#4a4a4a] hover:text-[#0a0a0a] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA Actions: Log in + Book a Call ↗ */}
        <div className="hidden sm:flex items-center gap-5">
          <button
            onClick={onBookCall}
            className="text-[14px] font-medium text-[#4a4a4a] hover:text-[#0a0a0a] transition-colors cursor-pointer"
          >
            Log in
          </button>

          <motion.button
            onClick={onBookCall}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-rethoric-primary px-5 py-2 text-[14px] font-medium shadow-xs inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>Book a Call</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </motion.button>
        </div>

        {/* Mobile (<sm) Actions: Quick Book Pill + Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <motion.button
            onClick={onBookCall}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-rethoric-primary px-3.5 py-1.5 text-xs font-semibold shadow-2xs inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Book</span>
            <ArrowUpRight className="h-3 w-3" />
          </motion.button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-1.5 text-[#0a0a0a] hover:bg-[#f4f4f4] transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Tablet Hamburger (sm to md) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="hidden sm:inline-flex md:hidden rounded-lg p-2 text-zinc-600 hover:text-black cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown with Smooth Height Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-[#e5e5e5] bg-white overflow-hidden px-6 py-5 shadow-lg"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#444444] hover:text-[#0a0a0a]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookCall();
                  }}
                  className="btn-rethoric-primary w-full py-2.5 text-sm inline-flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book a Call</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
