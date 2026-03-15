"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "../../data/siteContent";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solidNav = pathname !== "/" || scrolled;

  return (
    <header
      className={`fixed left-0 top-0 z-50 h-[72px] w-full transition-all duration-300 ${
        solidNav ? "bg-primary/95 shadow-nav backdrop-blur border-b border-borderSoft" : "bg-transparent"
      }`}
    >
      <div className="agency-container flex h-full items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-textPrimary">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-borderSoft text-xs">LG</span>
          <span>Your Logo</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={pathname === item.href}
              className="nav-underline text-sm font-medium text-textPrimary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary">Let&apos;s Talk</Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-borderSoft lg:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-xl text-textPrimary">{open ? "×" : "≡"}</span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-borderSoft bg-primary lg:hidden"
          >
            <div className="agency-container py-4">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-textPrimary"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="btn-primary w-fit"
                  onClick={() => setOpen(false)}
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
