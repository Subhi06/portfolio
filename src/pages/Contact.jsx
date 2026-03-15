import ContactForm from "../components/ContactForm";

function ContactPage() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <h1 className="section-title">Contact Jawanexis Technologies</h1>
      <p className="section-subtitle">
        Send us your requirement for web, mobile, ERP, SaaS, Web3, or cloud transformation solutions.
      </p>

      <div className="mt-10 max-w-3xl">
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactPage;
