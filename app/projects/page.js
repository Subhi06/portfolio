import FadeInSection from "../../components/site/FadeInSection";
import ProjectCard from "../../components/site/ProjectCard";
import { projects } from "../../data/siteContent";

export default function ProjectsPage() {
  return (
    <main className="pt-[72px] bg-primary">
      <FadeInSection className="section-space">
        <div className="agency-container">
          <p className="section-label">Projects</p>
          <h1 className="mt-4 text-textPrimary">Portfolio Gallery</h1>
          <p className="mt-4 max-w-2xl text-base text-textSecondary">
            Two-column portfolio highlights with rich visual language and measurable business outcomes.
          </p>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {projects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} index={idx} />
            ))}
          </div>
        </div>
      </FadeInSection>
    </main>
  );
}
