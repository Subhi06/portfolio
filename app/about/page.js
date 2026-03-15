import FadeInSection from "../../components/site/FadeInSection";
import { company, team, stats } from "../../data/siteContent";

export default function AboutPage() {
  return (
    <main className="pt-[72px] bg-primary">
      <FadeInSection className="section-space">
        <div className="agency-container">
          <p className="section-label">About</p>
          <h1 className="mt-4 text-textPrimary">Company story</h1>
          <p className="mt-4 max-w-3xl text-base text-textSecondary">{company.story}</p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <article className="rounded-xl2 border border-borderSoft bg-card p-8 shadow-card">
              <h3 className="text-textPrimary">Mission</h3>
              <p className="mt-3 text-textSecondary">{company.mission}</p>
            </article>
            <article className="rounded-xl2 border border-borderSoft bg-card p-8 shadow-card">
              <h3 className="text-textPrimary">Vision</h3>
              <p className="mt-3 text-textSecondary">{company.vision}</p>
            </article>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <article key={item.label} className="rounded-xl2 border border-borderSoft bg-secondary p-6">
                <p className="text-4xl font-bold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-textSecondary">{item.label}</p>
              </article>
            ))}
          </div>

          <h2 className="mt-20 text-textPrimary">Team Members</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <article key={member.name} className="rounded-xl2 border border-borderSoft bg-card p-6 shadow-card">
                <div className="h-44 rounded-xl border border-borderSoft bg-secondary" />
                <h3 className="mt-5 text-xl text-textPrimary">{member.name}</h3>
                <p className="mt-1 text-sm text-textSecondary">{member.role}</p>
                <a href="#" className="mt-4 inline-flex rounded-full border border-borderSoft px-3 py-1 text-xs font-semibold text-white">
                  LinkedIn
                </a>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>
    </main>
  );
}
