import ServicesComponent from "../components/Services";

function ServicesPage() {
  return (
    <>
      <section className="section-shell py-16 pb-0 sm:py-20 sm:pb-0">
        <h1 className="section-title">Our Services</h1>
        <p className="section-subtitle">
          Next-gen software services for startups and enterprises, from strategy to deployment.
        </p>
      </section>
      <ServicesComponent />
    </>
  );
}

export default ServicesPage;
