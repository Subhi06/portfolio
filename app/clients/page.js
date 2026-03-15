import FadeInSection from "../../components/site/FadeInSection";
import TestimonialsCarousel from "../../components/site/TestimonialsCarousel";
import { clientLogos, testimonials } from "../../data/siteContent";

export default function ClientsPage() {
  return (
    <main className="pt-[72px] bg-primary">
      <FadeInSection className="section-space">
        <div className="agency-container">
          <p className="section-label">Clients</p>
          <h1 className="mt-4 text-textPrimary">Brands we partner with</h1>
          <p className="mt-4 max-w-2xl text-base text-textSecondary">
            Collaborative engagements with startups, scaleups, and enterprise teams across sectors.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="rounded-xl2 border border-borderSoft bg-card p-6 text-center text-base font-semibold text-zinc-500 shadow-card transition duration-300 hover:text-textPrimary"
              >
                <span className="grayscale transition hover:grayscale-0">{logo}</span>
              </div>
            ))}
          </div>

          <h2 className="mt-20 text-textPrimary">Client Voices</h2>
          <div className="mt-10">
            <TestimonialsCarousel items={testimonials} />
          </div>
        </div>
      </FadeInSection>
    </main>
  );
}
