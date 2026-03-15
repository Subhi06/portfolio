"use client";

import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative"
    >
      <div className="rounded-[24px] border border-borderSoft bg-card p-6 shadow-card">
        <div className="relative rounded-[18px] border border-borderSoft bg-primary p-8">
          <div className="grid gap-6">
            <div className="h-[2px] w-full bg-zinc-700" />
            <div className="grid grid-cols-2 gap-5">
              <div className="h-28 rounded-xl border border-borderSoft bg-secondary" />
              <div className="h-28 rounded-xl border border-borderSoft bg-secondary" />
            </div>
            <div className="h-36 rounded-xl border border-borderSoft bg-secondary" />
          </div>
          <svg viewBox="0 0 400 220" className="pointer-events-none absolute inset-0 h-full w-full opacity-50">
            <path d="M30 170 C120 20, 220 20, 360 150" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
            <circle cx="120" cy="70" r="5" fill="#FFFFFF" />
            <circle cx="280" cy="95" r="5" fill="#FFFFFF" />
          </svg>
        </div>
      </div>
      <div className="absolute -left-10 -top-8 h-24 w-24 rounded-full border border-borderSoft bg-white/5 blur-2xl" />
      <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full border border-borderSoft bg-white/5 blur-2xl" />
    </motion.div>
  );
}
