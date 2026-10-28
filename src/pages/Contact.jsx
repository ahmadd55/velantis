import { useState } from "react";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import PageHero from "../components/PageHero";

const interests = [
  { value: "prsaudia", label: "Ownership Leading to PR Saudia" },
  { value: "expats", label: "Expatriates Property Ownership" },
  { value: "citizens", label: "Citizens Dream Home" },
  { value: "haramain", label: "Homes near Haramain Sharifain" },
  { value: "invest", label: "Invest in Real Estate Saudi Arabia" },
  { value: "other", label: "Other" },
];

const initial = { name: "", interest: "", phone: "", email: "", description: "" };

const field =
  "w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#c4674a]";

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  const update = (key) => (event) => {
    setForm((current) => ({ ...current, [key]: event.target.value }));
  };

  return (
    <div className="bg-[#f7f4ef]">
      <PageHero
        eyebrow="Get in touch"
        title="Contact Us"
        description="Ready to take the next step in your Saudi Arabian property journey? Get in touch with our expert team today."
      />
      <section className="px-4 pb-28 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="space-y-6 lg:col-span-2">
            <div>
              <h2 className="mb-3 text-2xl font-bold text-slate-900">Get in Touch</h2>
              <p className="leading-relaxed text-slate-600">
                We&apos;re here to help you navigate the Saudi Arabian property market. Whether
                you&apos;re looking for your dream home, considering an investment, or have
                questions about permanent residency through property ownership, our team is ready
                to assist you.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-bold text-slate-900">Saudi Arabia Office</h3>
              <p className="flex items-center gap-3 text-sm text-slate-600">
                <LuPhone className="h-4 w-4 shrink-0 text-[#c4674a]" aria-hidden="true" />
                <a href="tel:+966533221625" dir="ltr">
                  +966 533 221 625
                </a>
              </p>
              <a
                href="mailto:invest@velantis.com"
                className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-[#c4674a]"
              >
                <LuMail className="h-4 w-4 shrink-0 text-[#c4674a]" aria-hidden="true" />
                invest@velantis.com
              </a>
              <p className="flex items-start gap-3 text-sm text-slate-600">
                <LuMapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#c4674a]" aria-hidden="true" />
                Riyadh, Saudi Arabia
              </p>
            </div>

            <div className="space-y-2 rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-bold text-slate-900">United Kingdom Office</h3>
              <p className="text-sm font-semibold text-slate-900">A. Isaac</p>
              <p className="flex items-start gap-3 text-sm text-slate-600">
                <LuMapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#c4674a]" aria-hidden="true" />
                1 Felicia Way, London, RM16 4JE
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=24.7136,46.6753&hl=en&z=14&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8 lg:col-span-3">
            <h2 className="mb-6 text-xl font-bold text-slate-900">Send Us a Message</h2>
            {sent ? (
              <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                {`Thank you, ${form.name}. An advisor will be in touch${form.email ? ` at ${form.email}` : ""}.`}
              </p>
            ) : (
              <form
                className="space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-900">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Your full name"
                      className={field}
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-slate-900">
                      Property Interest <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={form.interest}
                      onChange={update("interest")}
                      className={field}
                    >
                      <option value="">Select your interest</option>
                      {interests.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-900">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="+966 12 345 6789"
                      className={field}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-900">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="your.email@example.com"
                      className={field}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="mb-1.5 block text-sm font-medium text-slate-900">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={form.description}
                    onChange={update("description")}
                    placeholder="Tell us more about your requirements and how we can help you…"
                    className={`${field} min-h-28 resize-none py-3`}
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-lg bg-[#c4674a] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b3583d]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
