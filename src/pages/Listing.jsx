import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { LuFilter, LuLayoutGrid, LuMap } from "react-icons/lu";
import FilterDrawer from "../components/FilterDrawer";
import ListingCard from "../components/ListingCard";
import ListingsMap from "../components/ListingsMap";
import PageHero from "../components/PageHero";
import PriceAlert from "../components/PriceAlert";
import { emptyFilters, filterListings, listings } from "../data/listings";
import { useI18n } from "../i18n.jsx";

export default function Listing() {
  const { t } = useI18n();
  const [searchParams, setSearchParams] = useSearchParams();
  const cityFromUrl = searchParams.get("city") ?? "";
  const [view, setView] = useState("grid");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [applied, setApplied] = useState({ ...emptyFilters, city: cityFromUrl });
  const [draft, setDraft] = useState({ ...emptyFilters, city: cityFromUrl });
  const [selectedId, setSelectedId] = useState(listings[0].id);
  const navigate = useNavigate();

  const visible = useMemo(() => filterListings(listings, applied), [applied]);
  const countLabel = `${visible.length} ${visible.length === 1 ? "property" : "properties"} found`;
  const activeId = visible.some((item) => item.id === selectedId) ? selectedId : visible[0]?.id;

  useEffect(() => {
    setApplied((current) => (current.city === cityFromUrl ? current : { ...current, city: cityFromUrl }));
    setDraft((current) => (current.city === cityFromUrl ? current : { ...current, city: cityFromUrl }));
  }, [cityFromUrl]);

  const closeFilters = useCallback(() => setFiltersOpen(false), []);

  const openFilters = () => {
    setDraft(applied);
    setFiltersOpen(true);
  };

  const applyFilters = () => {
    setApplied(draft);
    setFiltersOpen(false);
    const next = new URLSearchParams(searchParams);
    if (draft.city) next.set("city", draft.city);
    else next.delete("city");
    setSearchParams(next, { replace: true });
  };

  const clearFilters = () => {
    setDraft(emptyFilters);
    setApplied(emptyFilters);
    if (searchParams.get("city")) setSearchParams({}, { replace: true });
  };

  const viewListing = (id) => navigate(`/listings/${id}`);

  return (
    <div className="bg-[#f7f4ef]">
      <PageHero
        eyebrow="Resale & ready"
        title="Property Listings"
        description="Browse ready and resale properties across Saudi Arabia"
        meta={countLabel}
      />

      <section className="px-4 pb-28 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white p-4 shadow-sm">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-medium text-slate-900 tabular-nums">{countLabel}</p>
              <div className="inline-flex rounded-xl bg-[#f3efe9] p-1">
                <ToggleButton active={view === "grid"} onClick={() => setView("grid")} icon={<LuLayoutGrid className="h-4 w-4" />} label={t("Grid")} />
                <ToggleButton active={view === "map"} onClick={() => setView("map")} icon={<LuMap className="h-4 w-4" />} label={t("Map")} />
              </div>
            </div>
            <button
              type="button"
              onClick={openFilters}
              className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-90"
            >
              <LuFilter />
              <span>{t("Filters")}</span>
            </button>
          </div>

          {visible.length === 0 ? (
            <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
              <p className="text-lg font-semibold text-slate-900">{t("No properties match these filters")}</p>
              <button type="button" onClick={clearFilters} className="mt-4 text-sm font-semibold text-[#c4674a]">
                {t("Clear all filters")}
              </button>
            </div>
          ) : view === "grid" ? (
            <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
              <div className="grid gap-5 sm:grid-cols-2">
                {visible.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
              <div className="lg:sticky lg:top-24">
                <PriceAlert />
              </div>
            </div>
          ) : (
            <>
              <ListingsMap
                listings={visible}
                selectedId={activeId}
                onSelect={setSelectedId}
                onViewListing={viewListing}
              />
              <div className="mt-8">
                <PriceAlert />
              </div>
            </>
          )}
        </div>
      </section>

      <FilterDrawer
        open={filtersOpen}
        draft={draft}
        setDraft={setDraft}
        onClose={closeFilters}
        onApply={applyFilters}
        onClear={clearFilters}
      />
    </div>
  );
}

function ToggleButton({ active, onClick, icon, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium ${
        active ? "bg-black text-white" : "text-slate-700"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
