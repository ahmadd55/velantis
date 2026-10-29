import { LuSearch } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";
import { LuBuilding2 } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";
import TrustBar from "./TrustBar";
import { useI18n } from "../i18n.jsx";

const locations = [
  "Riyadh",
  "Jeddah",
  "Mecca",
  "Medina",
  "Dammam",
  "Khobar",
  "Dhahran",
  "Al-Ahsa",
  "Taif",
  "Buraidah",
  "Tabuk",
  "Abha",
  "Khamis Mushait",
  "Najran",
  "Jizan",
  "Yanbu",
  "Jubail",
  "Al-Qatif",
  "Sakaka",
  "Arar",
  "Hail",
];

const propertyTypes = [
  "Residential",
  "Commercial",
  "Industrial",
  "Land",
  "Beach",
  "Others",
];

const fieldClass =
  "h-12 w-full rounded-xl border border-slate-200 bg-white pr-3 pl-9 text-sm text-slate-800 focus:ring-2 focus:ring-amber-400 focus:outline-none";

export default function PropertyHero({
  search,
  location,
  type,
  onSearchChange,
  onLocationChange,
  onTypeChange,
  onSubmit,
}) {
  const { t } = useI18n();
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <section className="relative bg-[radial-gradient(80%_55%_at_15%_15%,#c4674a33_0%,#0000_50%),radial-gradient(65%_50%_at_88%_75%,#2a9d8f29_0%,#0000_50%),linear-gradient(168deg,#100e0c_0%,#1a1612_45%,#221e1a_100%)] text-white">
      <div className="px-4 pt-24 pb-10 sm:pt-28 md:pt-32 md:pb-14">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-bold tracking-[0.22em] text-amber-400 uppercase sm:tracking-[0.3em]">
            {t("Resale & Ready Properties")}
          </p>

          <h1 className="mb-4 text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
            {t("Find your property in Saudi Arabia")}
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg md:mb-10">
            {t("Villas, apartments, land and commercial units — verified listings across Riyadh, Jeddah, and the Eastern Province.")}
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-3 rounded-2xl bg-white p-3 text-start shadow-2xl sm:grid-cols-2 sm:p-4 lg:grid-cols-4"
          >
            <label className="relative block min-w-0 sm:col-span-2 lg:col-span-1">
              <LuSearch className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                placeholder={t("Search properties…")}
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                className={`${fieldClass} placeholder-slate-400`}
              />
            </label>

            <label className="relative block min-w-0">
              <LuMapPin className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <select
                value={location}
                onChange={(e) => onLocationChange(e.target.value)}
                className={`${fieldClass} appearance-none`}
              >
                <option value="">{t("Select location")}</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {t(loc)}
                  </option>
                ))}
              </select>
            </label>

            <label className="relative block min-w-0">
              <LuBuilding2 className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <select
                value={type}
                onChange={(e) => onTypeChange(e.target.value)}
                className={`${fieldClass} appearance-none`}
              >
                <option value="">{t("Property Type")}</option>
                {propertyTypes.map((pt) => (
                  <option key={pt} value={pt}>
                    {t(pt)}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#c4674a] px-6 text-sm font-semibold text-white sm:col-span-2 lg:col-span-1"
            >
              {t("Search properties")}
              <LuArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
      <TrustBar />
    </section>
  );
}
