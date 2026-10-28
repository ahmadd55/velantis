import { LuArrowUpRight, LuBedDouble, LuMapPin, LuMaximize2 } from "react-icons/lu";

export default function ListingsMap({ listings, selectedId, onSelect, onViewListing }) {
  const selected = listings.find((listing) => listing.id === selectedId) || listings[0];
  if (!selected) return null;

  const mapSrc = `https://www.google.com/maps?q=${selected.lat},${selected.lng}&hl=en&z=14&output=embed`;

  return (
    <div className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.75fr)]">
      <div className="min-w-0 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
        <iframe
          title="Map"
          src={mapSrc}
          className="h-[min(420px,55vw)] min-h-[280px] w-full lg:h-[min(560px,calc(100vh-14rem))]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="border-t border-black/5 bg-[#f7f4ef] p-4 md:p-5">
          <p className="mb-1 text-xs font-bold tracking-[0.18em] text-[#c4674a] uppercase">
            Selected property
          </p>
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate font-semibold text-slate-900">{selected.title}</p>
              <p className="mt-0.5 truncate text-sm text-slate-500">{selected.location}</p>
              <p className="mt-2 text-base font-bold text-[#c4674a]">{selected.priceLabel}</p>
            </div>
            <button
              type="button"
              onClick={() => onViewListing(selected.id)}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-[#c4674a] px-3 py-2 text-sm font-semibold text-[#c4674a]"
            >
              View listing <LuArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="min-w-0">
        <p className="mb-3 text-sm font-medium text-slate-900">{listings.length} on map</p>
        <ul className="max-h-[min(640px,70vh)] space-y-3 overflow-y-auto pe-1">
          {listings.map((listing) => {
            const active = listing.id === selected.id;
            return (
              <li key={listing.id}>
                <button
                  type="button"
                  onClick={() => onSelect(listing.id)}
                  className={`flex w-full items-start gap-3 rounded-2xl border bg-white p-3 text-left shadow-sm ${
                    active ? "border-[#c4674a] ring-2 ring-[#c4674a]/40" : "border-black/5"
                  }`}
                >
                  <img
                    src={listing.image}
                    alt=""
                    className="h-16 w-16 shrink-0 rounded-xl object-cover"
                  />
                  <span className="min-w-0 flex-1 overflow-hidden">
                    <span className="line-clamp-2 text-sm leading-snug font-semibold text-slate-900">
                      {listing.title}
                    </span>
                    <span className="mt-1 block truncate text-xs text-slate-500">{listing.city}</span>
                    <span className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-sm font-bold text-[#c4674a]">{listing.priceLabel}</span>
                      <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                        <LuBedDouble className="h-3.5 w-3.5 text-[#c4674a]" />
                        {listing.beds}
                      </span>
                      {listing.coveredArea > 0 ? (
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                          <LuMaximize2 className="h-3.5 w-3.5 text-[#c4674a]" />
                          {listing.coveredArea.toFixed(2)} m²
                        </span>
                      ) : null}
                    </span>
                  </span>
                  <LuMapPin className={`mt-0.5 h-4 w-4 shrink-0 ${active ? "text-[#c4674a]" : "text-slate-300"}`} />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
