import Link from "next/link";
import FadeInSection from "./FadeInSection";

export default function CtaSection() {
  return (
    <FadeInSection className="section-space">
      <div className="agency-container">
        <div className="rounded-2xl border border-borderSoft bg-section p-10 text-white md:p-14">
          <h2 className="max-w-2xl">Have an idea? Let&apos;s build something great together.</h2>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">Start a Project</Link>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
