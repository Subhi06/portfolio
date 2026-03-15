import FadeInSection from "../../components/site/FadeInSection";
import ServiceCard from "../../components/site/ServiceCard";
import { services } from "../../data/siteContent";

export default function ServicesPage() {
  return (
    <main className="pt-[72px] bg-primary">
      <FadeInSection className="section-space">
        <div className="agency-container">
          <p className="section-label">Services</p>
          <h1 className="mt-4 text-textPrimary">Our Expertise</h1>
          <p className="mt-4 max-w-2xl text-base text-textSecondary">
            Strategic service lines designed to cover product discovery, engineering execution, and growth acceleration.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <ServiceCard key={service.title} service={service} index={idx} />
            ))}
          </div>
        </div>
      </FadeInSection>
    </main>
  );
}
