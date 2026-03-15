import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { href: "/#home", label: "Home" },
  { href: "/#clients", label: "Clients" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#technologies", label: "Expertise" },
  { href: "/#contact", label: "Contact" }
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-base/80 backdrop-blur-md">
      <nav className="section-shell flex items-center justify-between py-4">
        <Link to="/" className="font-heading text-xl tracking-tight text-text">
          Jawanexis <span className="text-accent">Technologies</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-zinc-300 transition hover:text-text">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-lg border border-white/20 px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          Menu
        </button>
      </nav>

      {open && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="section-shell space-y-3 pb-4 md:hidden"
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  );
}

export default Navbar;
