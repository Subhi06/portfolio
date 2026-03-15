"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroContent({ content }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18 } } }}>
      <motion.p
        variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
        className="section-label"
      >
        {content.eyebrow}
      </motion.p>
      <motion.h1
        variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
        className="mt-6 max-w-2xl text-textPrimary"
      >
        {content.title}
      </motion.h1>
      <motion.p
        variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
        className="mt-6 max-w-xl text-base text-textSecondary"
      >
        {content.description}
      </motion.p>
      <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="mt-9 flex flex-wrap gap-4">
        <Link href="/projects" className="btn-primary">
          View Projects
        </Link>
        <Link href="/contact" className="btn-secondary">
          Contact Us
        </Link>
      </motion.div>
    </motion.div>
  );
}
