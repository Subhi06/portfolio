"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function TestimonialsCarousel({ items }) {
  const safeItems = useMemo(() => items || [], [items]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (safeItems.length < 2) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % safeItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [safeItems.length]);

  if (!safeItems.length) return null;

  const active = safeItems[activeIndex];

  return (
    <div className="rounded-xl2 border border-borderSoft bg-card p-8 shadow-card">
      <AnimatePresence mode="wait">
        <motion.div
          key={active.author}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45 }}
        >
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-borderSoft bg-secondary text-sm font-semibold text-textPrimary">
            {active.avatar}
          </div>
          <p className="mt-5 max-w-3xl text-lg text-textSecondary">“{active.quote}”</p>
          <p className="mt-6 text-base font-semibold text-textPrimary">{active.author}</p>
          <p className="text-sm text-textSecondary">{active.role}</p>
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex gap-2">
        {safeItems.map((item, idx) => (
          <button
            key={item.author}
            type="button"
            aria-label={`Go to testimonial ${idx + 1}`}
            onClick={() => setActiveIndex(idx)}
            className={`h-2.5 w-8 rounded-full transition ${idx === activeIndex ? "bg-white" : "bg-zinc-700"}`}
          />
        ))}
      </div>
    </div>
  );
}
