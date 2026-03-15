import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { websiteContent } from "../data/websiteContent";

function Hero() {
  return (
    <section className="section-shell relative overflow-hidden py-16 sm:py-24" id="home">
      <div className="absolute -right-12 -top-20 h-44 w-44 rounded-full bg-white/12 blur-3xl" />
      <div className="absolute -left-10 top-20 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <p className="mb-5 inline-block rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-zinc-100">
          Trusted by Startups, Unicorns, and Enterprises
        </p>
        <h1 className="font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
          {websiteContent.title}
        </h1>
        <p className="mt-6 max-w-2xl text-zinc-300">
          {websiteContent.subtitle}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="/#contact"
            className="rounded-xl border border-white bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-zinc-200"
          >
            Message Us
          </Link>
          <Link
            to="/#technologies"
            className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-zinc-100"
          >
            Explore Technologies
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
