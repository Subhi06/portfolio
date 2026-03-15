import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";

const clients = ["Startups", "Unicorns", "Enterprises", "SaaS Brands", "Manufacturing", "HealthTech"];

function Home() {
  return (
    <>
      <Hero />

      <section className="section-shell py-8 sm:py-12" id="clients">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Trusted by startups, unicorns, and enterprises alike</p>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client, idx) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-zinc-300"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </section>

      <Services />
      <Projects />
      <Testimonials />

      <section className="section-shell py-16 sm:py-20" id="contact">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="section-title">Ready to Build Your Next Big Thing?</h2>
            <p className="section-subtitle">
              Jawanexis is a next-generation software services company focused on future-ready digital solutions.
            </p>
            <div className="mt-8 space-y-3 text-sm text-zinc-300">
              <p>Software Development | Coimbatore, Tamilnadu</p>
              <p>298 followers | 2-10 employees</p>
              <p>Contact: sales@jawanexis.com | +91 97906 31286</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

export default Home;
