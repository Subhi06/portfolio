"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="card-hover rounded-xl2 border border-borderSoft bg-card p-6 shadow-card"
    >
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-borderSoft bg-secondary text-xs font-semibold text-textPrimary">
        {service.icon}
      </div>
      <h3 className="mt-6 text-textPrimary">{service.title}</h3>
      <p className="mt-3 text-sm text-textSecondary">{service.description}</p>
      <Link href="/contact" className="mt-6 inline-flex items-center text-sm font-medium text-textPrimary">
        Learn More →
      </Link>
    </motion.article>
  );
}
