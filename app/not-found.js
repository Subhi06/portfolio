import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pt-[72px]">
      <section className="section-space">
        <div className="agency-container text-center">
          <h1 className="text-textPrimary">Page not found</h1>
          <p className="mt-4 text-textSecondary">The page you are looking for does not exist.</p>
          <Link href="/" className="btn-primary mt-8">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
