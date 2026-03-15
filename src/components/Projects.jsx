import { motion } from "framer-motion";

const projects = [
  { name: "Manufacturing ERP Suite", type: "Custom ERP", impact: "Unified operations and reporting" },
  { name: "HealthTech Mobile Platform", type: "iOS and Android App", impact: "Faster onboarding and retention" },
  { name: "SaaS Workflow Portal", type: "Web Application", impact: "Automated multi-team collaboration" },
  { name: "Blockchain Asset Tracker", type: "Web3 Application", impact: "Improved data integrity and trust" }
];

function Projects() {
  return (
    <section className="section-shell py-16 sm:py-20" id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">A few handpicked projects that demonstrate our product engineering and delivery impact.</p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            className="group card-glass p-6"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{project.type}</p>
            <h3 className="mt-2 font-heading text-2xl">{project.name}</h3>
            <p className="mt-4 inline-block rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs text-zinc-100">
              {project.impact}
            </p>
            <div className="mt-6 h-28 rounded-xl bg-gradient-to-br from-panel via-zinc-900 to-base transition group-hover:from-zinc-800 group-hover:to-zinc-700" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
