import { Link } from "react-router-dom";
import ClientCard, { testimonials } from "../components/ClientCard";
import MortageCard from "../components/MortageCard";
import SecondCard from "../components/SecondCard";
import HeroSection from "../components/HeroSection";
import FeaturedCarousel from "../components/FeaturedCarousel";
import InsightCarousel from "../components/InsightCarousel";
import { projects } from "../data/projects";
import { useI18n } from "../i18n.jsx";

const featuredCards = projects.map((project) => ({
  slug: project.slug,
  image: project.image,
  developer: project.developer,
  title: project.title,
  location: project.cardLocation,
  units: project.cardUnits,
  handover: project.cardHandover,
}));

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 self-start rounded-full border border-gray-300 px-3 py-1">
      <span className="h-1.5 w-1.5 rounded-full bg-[#c4674a]" />
      <span className="text-xs font-semibold uppercase text-[#3ab5a5] sm:text-sm">
        {children}
      </span>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:mt-8 sm:text-4xl">
      {children}
    </h2>
  );
}

export default function Home() {
  const { t } = useI18n();
  return (
    <>
      <HeroSection />

      <section className="overflow-x-clip bg-[#faf8f5] px-4 py-14 sm:px-6 md:px-10 md:py-20 lg:px-16 xl:px-20">
        <SectionLabel>{t("Off-plan")}</SectionLabel>
        <SectionTitle>{t("Featured projects")}</SectionTitle>
        <div className="mt-4 h-1 w-12 rounded-sm bg-black" />
        <p className="mt-4 text-base text-[#6e6558] sm:text-lg">
          {t("Hand-picked off-plan opportunities for this journey")}
        </p>
        <div className="mt-10 md:mt-14">
          <FeaturedCarousel cards={featuredCards} />
        </div>
      </section>

      <section className="bg-[#faf8f5] px-4 py-14 sm:px-6 md:px-10 md:py-20 lg:px-16 xl:px-20">
        <SectionLabel>{t("buyer tools")}</SectionLabel>
        <SectionTitle>{t("Plan your purchase with confidence")}</SectionTitle>
        <div className="mt-4 h-1 w-12 rounded-sm bg-black" />
        <p className="mt-4 max-w-3xl text-base text-[#6e6558] sm:text-lg">
          {t("Estimate finance, book tours, and browse FAL-verified listings — everything you need before you buy.")}
        </p>

        <div className="mt-10 flex flex-col gap-6 xl:mt-14 xl:flex-row xl:items-start">
          <div className="w-full min-w-0 xl:flex-1">
            <MortageCard />
          </div>
          <div className="flex w-full flex-col gap-4 xl:w-80 xl:shrink-0">
            <SecondCard />
            <SecondCard
              icon="calendar"
              title={t("Book a viewing")}
              text={t("Schedule a tour with a licensed advisor before you decide.")}
            />
            <SecondCard
              icon="support"
              title={t("Talk to an advisor")}
              text={t("Get guidance on finance, handover, and the right community.")}
            />
          </div>
        </div>
      </section>

      <section className="overflow-x-clip bg-[#f2ede5] px-4 py-14 sm:px-6 md:px-10 md:py-20 lg:px-16 xl:px-20">
        <SectionLabel>{t("Market data")}</SectionLabel>
        <SectionTitle>{t("Saudi market insights")}</SectionTitle>
        <div className="mt-4 h-1 w-12 rounded-sm bg-black" />
        <p className="mt-4 max-w-3xl text-base text-[#6e6558] sm:text-lg">
          {t("Key indicators across major cities — updated from live Velantis listings")}
        </p>
        <div className="mt-8">
          <InsightCarousel />
        </div>
      </section>

      <section className="flex flex-col items-center bg-[#f2ede5] px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">
          {t("What our clients say")}
        </h2>
        <div className="mt-4 h-1 w-12 rounded-sm bg-black" />
        <p className="mt-4 text-center text-base text-[#6e6558] sm:text-lg">
          {t("Real experiences from satisfied customers across Saudi Arabia")}
        </p>
        <div className="mt-8 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <ClientCard key={item.name} {...item} />
          ))}
        </div>
        <Link
          to="/property"
          className="mt-8 rounded-xl bg-white px-7 py-4 text-center font-semibold"
        >
          {t("View all properties")}
        </Link>
      </section>
    </>
  );
}
