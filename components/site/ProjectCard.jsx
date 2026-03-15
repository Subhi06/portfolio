"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden rounded-xl2 border border-borderSoft bg-card shadow-card"
    >
      <div className="relative h-64 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition duration-500 group-hover:scale-110`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0 opacity-70 transition group-hover:opacity-95" />
        <div className="absolute left-6 top-6 rounded-full border border-borderSoft bg-black/60 px-3 py-1 text-xs font-semibold uppercase text-white">
          {project.industry}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-textPrimary">{project.title}</h3>
        <p className="mt-3 text-sm text-textSecondary">{project.description}</p>
        <button type="button" className="btn-secondary mt-6">
          View Case Study
        </button>
      </div>
    </motion.article>
  );
}
