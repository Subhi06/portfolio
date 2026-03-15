import { motion } from "framer-motion";

function About() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-title"
      >
        Jawanexis Technologies
      </motion.h1>
      <p className="section-subtitle">
        Jawanexis is a next-generation software services company headquartered in Coimbatore, India. We specialize in custom software development, enterprise applications, cloud solutions, and digital transformation consulting for modern businesses.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <article className="card-glass p-6">
          <h2 className="font-heading text-xl">Overview</h2>
          <p className="mt-3 text-sm text-zinc-300">Trusted by startups, unicorns, and enterprises alike, we power digital transformation and software modernization.</p>
        </article>
        <article className="card-glass p-6">
          <h2 className="font-heading text-xl">Capabilities</h2>
          <p className="mt-3 text-sm text-zinc-300">Web development, mobile app development, application development, custom software development, SaaS development, and iOS development.</p>
        </article>
        <article className="card-glass p-6">
          <h2 className="font-heading text-xl">Team & Presence</h2>
          <p className="mt-3 text-sm text-zinc-300">2-10 employees, 298 followers, based in Coimbatore, Tamilnadu. Jeevadharani R B is part of the Jawanexis team.</p>
        </article>
      </div>
    </section>
  );
}

export default About;
