import FadeInSection from "../components/site/FadeInSection";
import ServiceCard from "../components/site/ServiceCard";
import ProjectCard from "../components/site/ProjectCard";
import HeroVisual from "../components/site/HeroVisual";
import CtaSection from "../components/site/CtaSection";
import HeroContent from "../components/site/HeroContent";
import TestimonialsCarousel from "../components/site/TestimonialsCarousel";
import { services, projects, industries, testimonials, clientLogos, heroContent } from "../data/siteContent";

export default function HomePage() {
  return (
    <main className="pt-[72px]">
      <section className="min-h-[90vh] bg-primary">
        <div className="agency-container grid min-h-[90vh] items-center gap-8 py-16 lg:grid-cols-2 lg:gap-12">
          <HeroContent content={heroContent} />
          <HeroVisual />
        </div>

        <div className="agency-container pb-14">
          <div className="overflow-x-auto">
            <div className="flex min-w-max items-center gap-6">
              {clientLogos.map((logo) => (
                <div
                  key={logo}
                  className="group rounded-xl2 border border-borderSoft bg-secondary px-7 py-3 text-sm font-semibold text-zinc-500 transition duration-300 hover:scale-105 hover:text-white"
                >
                  <span className="grayscale transition group-hover:grayscale-0">{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FadeInSection className="section-space bg-section">
        <div className="agency-container">
          <p className="section-label">Services</p>
          <h2 className="mt-4 text-textPrimary">Our Expertise</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <ServiceCard key={service.title} service={service} index={idx} />
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section-space">
        <div className="agency-container">
          <p className="section-label">Projects</p>
          <h2 className="mt-4 text-textPrimary">Selected Work</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {projects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} index={idx} />
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section-space bg-section">
        <div className="agency-container">
          <p className="section-label">Industries</p>
          <h2 className="mt-4 text-textPrimary">Industries We Serve</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry} className="rounded-xl2 border border-borderSoft bg-card p-6 text-base font-semibold text-textPrimary shadow-card transition hover:border-white">
                <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-md border border-borderSoft bg-secondary text-xs">
                  {industry.slice(0, 2).toUpperCase()}
                </span>
                {industry}
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section-space">
        <div className="agency-container">
          <p className="section-label">Testimonials</p>
          <h2 className="mt-4 text-textPrimary">What our clients say</h2>
          <div className="mt-10">
            <TestimonialsCarousel items={testimonials} />
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section-space bg-section">
        <div className="agency-container">
          <p className="section-label">Client Logos</p>
          <h2 className="mt-4 text-textPrimary">Trusted by modern teams</h2>
          <div className="mt-10 grid gap-8 grid-cols-2 md:grid-cols-4">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="group rounded-xl2 border border-borderSoft bg-card p-6 text-center text-base font-semibold text-zinc-500 shadow-card transition hover:text-textPrimary"
              >
                <span className="grayscale transition group-hover:grayscale-0">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      <CtaSection />
    </main>
  );
}
