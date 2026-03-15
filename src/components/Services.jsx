import { motion } from "framer-motion";
import { websiteContent } from "../data/websiteContent";

function Services() {
  return (
    <section className="section-shell py-16 sm:py-20" id="services">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">
        We turn complex business ideas into secure, scalable, user-focused digital products.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {websiteContent.services.map((service, idx) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="card-glass p-6"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-300">{service.tag}</p>
            <h3 className="mt-3 font-heading text-xl">{service.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-300">{service.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Services;
