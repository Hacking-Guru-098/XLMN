"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  glow?: boolean;
}

export const GlowingButton = ({
  children,
  variant = "primary",
  size = "md",
  className,
  glow = true,
  ...props
}: GlowingButtonProps) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm font-medium",
    lg: "px-8 py-4 text-base font-semibold",
  };

  if (variant === "primary") {
    return (
      <button
        className={cn(
          "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-all duration-300 active:scale-95 disabled:pointer-events-none disabled:opacity-50",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {/* Animated Gradient Border Ring */}
        <span className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 p-[1.5px] transition-all duration-500 group-hover:scale-105">
          <span className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
        </span>

        {/* Button Inner Body */}
        <span className="relative flex h-full w-full items-center justify-center gap-2 rounded-full bg-[#0a0c14] px-5 py-2.5 text-white transition-all duration-300 group-hover:bg-[#121626]">
          {children}
        </span>
      </button>
    );
  }

  if (variant === "secondary") {
    return (
      <button
        className={cn(
          "group relative inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md font-medium text-zinc-300 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white active:scale-95",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full text-zinc-400 hover:text-white transition-colors duration-200",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
