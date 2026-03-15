import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Jawanexis delivered exactly what we needed: a stable product, clear communication, and rapid execution.",
    name: "Enterprise Client",
    role: "Operations Lead"
  },
  {
    quote: "Their team translated a complex requirement into a clean and scalable software platform.",
    name: "Startup Founder",
    role: "SaaS Product Company"
  }
];

function Testimonials() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <h2 className="section-title">What Clients Say</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {testimonials.map((item, idx) => (
          <motion.blockquote
            key={item.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.12, duration: 0.45 }}
            className="card-glass p-6"
          >
            <p className="text-zinc-200">"{item.quote}"</p>
            <footer className="mt-5 text-sm text-zinc-400">
              <span className="font-semibold text-text">{item.name}</span> - {item.role}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
