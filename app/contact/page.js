"use client";

import { useState } from "react";
import FadeInSection from "../../components/site/FadeInSection";
import { company } from "../../data/siteContent";

const initialForm = {
  name: "",
  email: "",
  company: "",
  message: ""
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.message || "Failed to submit request.");
      }

      setStatus({ type: "success", message: "Thanks. We will contact you soon." });
      setForm(initialForm);
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Something went wrong." });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <main className="pt-[72px] bg-primary">
      <FadeInSection className="section-space">
        <div className="agency-container">
          <p className="section-label">Contact</p>
          <h1 className="mt-4 text-textPrimary">Let&apos;s discuss your next digital product</h1>
          <p className="mt-4 max-w-2xl text-base text-textSecondary">
            Share your requirements and our team will reach out with a tailored solution approach.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <form onSubmit={handleSubmit} className="rounded-xl2 border border-borderSoft bg-card p-8 shadow-card">
              <div className="grid gap-5">
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="rounded-xl2 border border-borderSoft bg-secondary px-4 py-3 text-sm text-white outline-none focus:border-white"
                />
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="rounded-xl2 border border-borderSoft bg-secondary px-4 py-3 text-sm text-white outline-none focus:border-white"
                />
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company"
                  className="rounded-xl2 border border-borderSoft bg-secondary px-4 py-3 text-sm text-white outline-none focus:border-white"
                />
                <textarea
                  required
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="rounded-xl2 border border-borderSoft bg-secondary px-4 py-3 text-sm text-white outline-none focus:border-white"
                />
                <button type="submit" disabled={loading} className="btn-primary disabled:cursor-not-allowed disabled:opacity-70">
                  {loading ? "Submitting..." : "Submit"}
                </button>
                {status.message && (
                  <p className={`text-sm ${status.type === "success" ? "text-zinc-200" : "text-zinc-400"}`}>
                    {status.message}
                  </p>
                )}
              </div>
            </form>

            <div className="space-y-6 rounded-xl2 border border-borderSoft bg-card p-8 shadow-card">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-zinc-200">Email</p>
                <p className="mt-2 text-textSecondary">{company.email}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-zinc-200">Phone</p>
                <p className="mt-2 text-textSecondary">{company.phone}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-zinc-200">Office</p>
                <p className="mt-2 text-textSecondary">{company.address}</p>
              </div>
              <iframe
                title="Office location"
                src="https://maps.google.com/maps?q=Saibaba%20Colony%20Coimbatore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-64 w-full rounded-xl2 border border-borderSoft"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </FadeInSection>
    </main>
  );
}
