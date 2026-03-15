import FadeInSection from "../../components/site/FadeInSection";
import { blogPosts } from "../../data/siteContent";

export default function BlogsPage() {
  return (
    <main className="pt-[72px] bg-primary">
      <FadeInSection className="section-space">
        <div className="agency-container">
          <p className="section-label">Blogs</p>
          <h1 className="mt-4 text-textPrimary">Insights, process notes, and product stories</h1>
          <p className="mt-4 max-w-2xl text-textSecondary">
            Replace these placeholders with your own blog collection and editorial voice.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="card-hover rounded-xl2 border border-borderSoft bg-card p-7 shadow-card">
                <p className="text-sm text-textMuted">{post.date}</p>
                <h3 className="mt-3 text-textPrimary">{post.title}</h3>
                <p className="mt-3 text-sm text-textSecondary">{post.excerpt}</p>
                <button type="button" className="btn-secondary mt-6">Read Article</button>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>
    </main>
  );
}
