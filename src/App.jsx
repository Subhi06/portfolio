import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { websiteContent } from "./data/websiteContent";

const techLabels = {
  frontend: "Frontend",
  backend: "Back-end Development Service",
  mobile: "Mobile",
  database: "Databases",
  cloudDevops: "Cloud and DevOps",
  integration: "Integrations"
};

function App() {
  return (
    <div className="min-h-screen bg-base text-text">
      <Navbar />
      <main>
        <Home />

        <section className="section-shell py-16 sm:py-20" id="technologies">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Our Expertise</p>
          <h2 className="section-title mt-3">Experience a radically sensible approach to user-centered design.</h2>
          <p className="section-subtitle">Technology capabilities from our official website content document.</p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(websiteContent.technologies).map(([key, techStack]) => (
              <article key={key} className="card-glass p-6">
                <h3 className="font-heading text-xl">{techLabels[key] || key}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {techStack.map((item) => (
                    <span key={item} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-zinc-100">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
