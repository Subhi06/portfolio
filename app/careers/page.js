import FadeInSection from "../../components/site/FadeInSection";
import { careerOpenings } from "../../data/siteContent";

export default function CareersPage() {
  return (
    <main className="pt-[72px] bg-primary">
      <FadeInSection className="section-space">
        <div className="agency-container">
          <p className="section-label">Careers</p>
          <h1 className="mt-4 text-textPrimary">Build meaningful digital products with us</h1>
          <p className="mt-4 max-w-2xl text-textSecondary">
            We are always looking for curious builders, designers, and problem solvers.
          </p>

          <div className="mt-12 grid gap-8">
            {careerOpenings.map((job) => (
              <article key={job.role} className="rounded-xl2 border border-borderSoft bg-card p-7 shadow-card">
                <h3 className="text-textPrimary">{job.role}</h3>
                <p className="mt-2 text-sm text-textSecondary">{job.location} • {job.type}</p>
                <button type="button" className="btn-secondary mt-6">Apply Now</button>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>
    </main>
  );
}
