import { useState } from "react";
import axios from "axios";

const initialState = {
  name: "",
  email: "",
  company: "",
  message: ""
};

function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const apiBase = import.meta.env.VITE_API_URL || "";
      const response = await axios.post(`${apiBase}/api/contact`, form);

      setStatus({ type: "success", message: response.data.message || "Message sent." });
      setForm(initialState);
    } catch (error) {
      setStatus({
        type: "error",
        message: error.response?.data?.message || "Something went wrong. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card-glass p-6 sm:p-8">
      <h3 className="font-heading text-2xl">Connect with Jawanexis</h3>
      <p className="mt-2 text-sm text-zinc-300">Share your product requirement and our team will get back shortly.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <input
          required
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="rounded-xl border border-white/15 bg-base/70 px-4 py-3 text-sm outline-none transition focus:border-white"
        />
        <input
          required
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="rounded-xl border border-white/15 bg-base/70 px-4 py-3 text-sm outline-none transition focus:border-white"
        />
      </div>

      <input
        name="company"
        value={form.company}
        onChange={handleChange}
        placeholder="Company (Optional)"
        className="mt-4 w-full rounded-xl border border-white/15 bg-base/70 px-4 py-3 text-sm outline-none transition focus:border-white"
      />

      <textarea
        required
        name="message"
        rows="5"
        value={form.message}
        onChange={handleChange}
        placeholder="Project details"
        className="mt-4 w-full rounded-xl border border-white/15 bg-base/70 px-4 py-3 text-sm outline-none transition focus:border-white"
      />

      <button
        type="submit"
        disabled={loading}
        className="mt-5 rounded-xl border border-white bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Sending..." : "Send Inquiry"}
      </button>

      {status.message && (
        <p className={`mt-4 text-sm ${status.type === "success" ? "text-zinc-100" : "text-zinc-300"}`}>
          {status.message}
        </p>
      )}
    </form>
  );
}

export default ContactForm;
