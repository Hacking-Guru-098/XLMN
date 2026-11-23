"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "emerald" | "purple" | "neutral" | "rose";
  className?: string;
  dot?: boolean;
}

export const Badge = ({
  children,
  variant = "blue",
  className,
  dot = true,
}: BadgeProps) => {
  const variantStyles = {
    blue: "border-blue-500/30 bg-blue-500/10 text-blue-300 shadow-[0_0_15px_-3px_rgba(59,130,246,0.25)]",
    emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 shadow-[0_0_15px_-3px_rgba(16,185,129,0.25)]",
    purple: "border-purple-500/30 bg-purple-500/10 text-purple-300 shadow-[0_0_15px_-3px_rgba(168,85,247,0.25)]",
    neutral: "border-white/10 bg-white/5 text-zinc-300",
    rose: "border-rose-500/30 bg-rose-500/10 text-rose-300 shadow-[0_0_15px_-3px_rgba(244,63,94,0.25)]",
  };

  const dotColors = {
    blue: "bg-blue-400",
    emerald: "bg-emerald-400",
    purple: "bg-purple-400",
    neutral: "bg-zinc-400",
    rose: "bg-rose-400",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold tracking-wider uppercase backdrop-blur-md",
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
              dotColors[variant]
            )}
          />
          <span
            className={cn(
              "relative inline-flex h-2 w-2 rounded-full",
              dotColors[variant]
            )}
          />
        </span>
      )}
      {children}
    </div>
  );
};
