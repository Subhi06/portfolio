import Link from "next/link";
import { company } from "../../data/siteContent";

const serviceLinks = [
  { label: "Experience Design", href: "/services" },
  { label: "Frontend Development", href: "/services" },
  { label: "Backend Development", href: "/services" },
  { label: "QA Testing", href: "/services" }
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blogs", href: "/blogs" },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "Contact Us", href: "/contact" }
];

export default function Footer() {
  return (
    <footer className="bg-primary text-zinc-300">
      <div className="agency-container section-space pb-14">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl text-white">Your Company</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Premium digital agency focused on product design, engineering excellence, and sustainable growth.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-zinc-100">Services</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-400">
              {serviceLinks.map((item) => (
                <Link key={item.label} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-zinc-100">Company</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-400">
              {companyLinks.map((item) => (
                <Link key={item.label} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-zinc-100">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-zinc-400">
              <p>{company.email}</p>
              <p>{company.phone}</p>
              <p>{company.address}</p>
              <div className="flex gap-3 pt-2 text-xs text-white">
                <a href="#" aria-label="LinkedIn" className="rounded-full border border-zinc-600 px-2 py-1">in</a>
                <a href="#" aria-label="Instagram" className="rounded-full border border-zinc-600 px-2 py-1">ig</a>
                <a href="#" aria-label="Dribbble" className="rounded-full border border-zinc-600 px-2 py-1">db</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-700 pt-6 text-sm text-zinc-500">
          © {new Date().getFullYear()} Jawanexis Technologies Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
