import ProjectsComponent from "../components/Projects";

function ProjectsPage() {
  return (
    <>
      <section className="section-shell py-16 pb-0 sm:py-20 sm:pb-0">
        <h1 className="section-title">Projects & Case Studies</h1>
        <p className="section-subtitle">
          A showcase of solution blueprints delivered by Jawanexis across industries.
        </p>
      </section>
      <ProjectsComponent />
    </>
  );
}

export default ProjectsPage;
