import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { useI18n } from "../i18n.jsx";

export default function About() {
  const { t } = useI18n();
  return (
    <div className="bg-[#f7f4ef]">
      <PageHero
        eyebrow="Who we are"
        title="About VELANTIS"
        description="Your go-to partner as you explore the Saudi Arabian property scene, helping you find the perfect home or investment in this vibrant and culture-packed country."
      />
      <section className="px-4 pb-10 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-3xl text-slate-900">{t("A local partner for a growing market")}</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              {t("VELANTIS helps buyers, families, and investors move through the Saudi Arabian property market with licensed advice. We cover ready homes, resale listings, and developer projects, and we stay with you from the first shortlist to the handover.")}
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              {t("Every advisor holds a valid FAL licence, and the homes we present follow Real Estate General Authority rules. Off-plan purchases are limited to Wafi-compliant payment plans on verified projects.")}
            </p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-3xl text-slate-900">{t("How we work")}</h2>
            <ul className="mt-4 space-y-4 text-slate-600">
              <li>
                <span className="font-semibold text-slate-900">{t("Listen first.")}</span>{" "}
                {t("We start with how you plan to live in or hold the property, then narrow the search to cities and communities that fit.")}
              </li>
              <li>
                <span className="font-semibold text-slate-900">{t("Show the real numbers.")}</span>{" "}
                {t("Price, payment plan, and ownership route are clear before you book a viewing.")}
              </li>
              <li>
                <span className="font-semibold text-slate-900">{t("Stay through the paperwork.")}</span>{" "}
                {t("From the offer to registration, one advisor keeps the process moving.")}
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="px-4 pt-6 pb-28 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <div className="mb-10 text-start md:mb-12">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#c4674a]/20 bg-[#c4674a]/10 px-3 py-1.5 text-sm font-semibold text-[#c4674a]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c4674a]" />
                {t("Our team")}
              </p>
              <h2 className="font-display mt-4 text-3xl text-slate-900 sm:text-4xl">
                {t("Meet Real Estate Experts")}
              </h2>
              <div className="mt-4 h-1 w-12 rounded-sm bg-[#d4a574]" />
            </div>
            <p className="mb-4 leading-relaxed text-slate-600">
              {t("Here at Velantis, we take great pride in our honesty, openness, and dedication to keeping our clients happy. We're all about forming lasting connections built on trust and genuine respect.")}
            </p>
            <p className="leading-relaxed text-slate-600">
              {t("Our seasoned team of real estate pros knows the Saudi Arabian market like the back of their hand and is committed to giving you top-notch, personalized service and guidance. We're not just your typical real estate agents; we're your partners in shaping your future in Saudi Arabia.")}
            </p>
            <div className="mt-8">
              <p className="mb-4 font-bold text-slate-900">{t("Get in Touch Now")}</p>
              <Link
                to="/contact-us"
                className="inline-flex rounded-lg bg-[#c4674a] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b3583d]"
              >
                {t("Contact Us")}
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/about-team.jpg"
              alt={t("Our team")}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
