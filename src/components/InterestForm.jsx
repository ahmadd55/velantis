import { useState } from "react";

const field =
  "w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#c4674a]";

export default function InterestForm({ whatsappHref }) {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm lg:sticky lg:top-24">
      <h2 className="mb-4 text-lg font-bold text-slate-900">Register your interest</h2>
      {sent ? (
        <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          {`Thank you, ${name}. An advisor will be in touch.`}
        </p>
      ) : (
        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <div>
            <label htmlFor="interest-name" className="mb-1.5 block text-sm font-medium text-slate-900">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="interest-name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your full name"
              className={field}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="interest-phone" className="mb-1.5 block text-sm font-medium text-slate-900">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                id="interest-phone"
                type="tel"
                required
                placeholder="+966 12 345 6789"
                className={field}
              />
            </div>
            <div>
              <label htmlFor="interest-email" className="mb-1.5 block text-sm font-medium text-slate-900">
                Email
              </label>
              <input
                id="interest-email"
                type="email"
                placeholder="your.email@example.com"
                className={field}
              />
            </div>
          </div>
          <div>
            <label htmlFor="interest-description" className="mb-1.5 block text-sm font-medium text-slate-900">
              Description
            </label>
            <textarea
              id="interest-description"
              rows={3}
              placeholder="Tell us more about your requirements and how we can help you…"
              className={`${field} resize-none`}
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-[#c4674a] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b3583d]"
          >
            Register Interest
          </button>
        </form>
      )}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-bold text-white transition-colors hover:bg-green-700"
      >
        Chat on WhatsApp
      </a>
    </div>
  );
}
