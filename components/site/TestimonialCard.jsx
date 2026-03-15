"use client";

import { motion } from "framer-motion";

export default function TestimonialCard({ item, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="rounded-xl2 border border-borderSoft bg-card p-6 shadow-card"
    >
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-borderSoft bg-secondary text-sm font-semibold text-textPrimary">
        {item.avatar}
      </div>
      <p className="text-base text-textSecondary">“{item.quote}”</p>
      <p className="mt-5 text-sm font-semibold text-textPrimary">{item.author}</p>
      <p className="text-sm text-textSecondary">{item.role}</p>
    </motion.article>
  );
}
