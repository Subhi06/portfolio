import { websiteContent } from "../data/websiteContent";

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col items-start justify-between gap-4 text-sm text-zinc-400 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} {websiteContent.companyName}. All rights reserved.</p>
        <p>{websiteContent.contact.address} | {websiteContent.contact.email} | {websiteContent.contact.phone}</p>
      </div>
    </footer>
  );
}

export default Footer;
