import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropertyHero from "../components/PropertyHero";
import MortageCard from "../components/MortageCard";
import ClientCard, { testimonials } from "../components/ClientCard";
import ListingCard from "../components/ListingCard";
import { filterProperties, properties } from "../data/properties";
import { useI18n } from "../i18n.jsx";

gsap.registerPlugin(ScrollTrigger);

const emptySearch = { search: "", location: "", type: "" };

export default function Property() {
  const { t } = useI18n();
  const heroRef = useRef(null);
  const coverRef = useRef(null);
  const [draft, setDraft] = useState(emptySearch);
  const [applied, setApplied] = useState(emptySearch);

  const visible = useMemo(() => filterProperties(properties, applied), [applied]);
  const filtering = applied.search || applied.location || applied.type;

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const cover = coverRef.current;
    if (!hero || !cover) return undefined;

    const trigger = ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      endTrigger: cover,
      end: "top top",
      pin: true,
      pinSpacing: false,
    });

    return () => {
      const node = heroRef.current;
      trigger.kill(true);
      const spacer = node?.parentElement;
      if (spacer?.classList.contains("pin-spacer") && spacer.parentElement) {
        spacer.parentElement.insertBefore(node, spacer);
        spacer.remove();
      }
    };
  }, []);

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, [visible.length]);

  return (
    <>
      <div ref={heroRef} className="relative z-0">
        <PropertyHero
          search={draft.search}
          location={draft.location}
          type={draft.type}
          onSearchChange={(search) => setDraft((current) => ({ ...current, search }))}
          onLocationChange={(location) => setDraft((current) => ({ ...current, location }))}
          onTypeChange={(type) => setDraft((current) => ({ ...current, type }))}
          onSubmit={() => {
            setApplied(draft);
            coverRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        />
      </div>

      <div
        ref={coverRef}
        className="relative z-10 flex scroll-mt-24 flex-col gap-6 rounded-t-3xl bg-[#faf8f5] px-4 py-12 sm:px-6 md:px-10 md:py-16 lg:px-16 xl:px-20"
      >
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-gray-300 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#c4674a]" />
          <span className="text-xs font-semibold uppercase text-[#3ab5a5] sm:text-sm">
            {t("Featured resale")}
          </span>
        </div>
        <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:mt-8 sm:text-4xl">
          {t("Properties for sale")}
        </h1>
        <div className="h-1 w-12 rounded-sm bg-black" />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="max-w-3xl text-base text-[#6e6558] sm:text-lg">
            {t(`${visible.length} ${visible.length === 1 ? "property" : "properties"} from verified sellers across Saudi Arabia`)}
          </p>
          {filtering ? (
            <button
              type="button"
              onClick={() => {
                setDraft(emptySearch);
                setApplied(emptySearch);
              }}
              className="text-sm font-semibold text-[#c4674a]"
            >
              {t("Clear search")}
            </button>
          ) : null}
        </div>
        {visible.length === 0 ? (
          <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
            <p className="text-lg font-semibold text-slate-900">{t("No properties match this search")}</p>
            <button
              type="button"
              onClick={() => {
                setDraft(emptySearch);
                setApplied(emptySearch);
              }}
              className="mt-4 text-sm font-semibold text-[#c4674a]"
            >
              {t("Clear search")}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </div>

      <div className="relative z-10 bg-[#f2ede5] px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto w-full max-w-5xl">
          <MortageCard />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center bg-[#f2ede5] px-4 py-14 sm:px-6 md:px-10 md:py-20">
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
          to="/listings"
          className="mt-8 rounded-xl bg-white px-7 py-4 text-center font-semibold"
        >
          {t("View all properties")}
        </Link>
      </div>
    </>
  );
}
