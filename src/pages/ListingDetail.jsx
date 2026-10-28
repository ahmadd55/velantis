import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  LuBath,
  LuBedDouble,
  LuCalendar,
  LuHeart,
  LuMapPin,
  LuMaximize2,
  LuPhone,
  LuUser,
} from "react-icons/lu";
import InterestForm from "../components/InterestForm";
import { getListing } from "../data/listings";

const phone = "tel:+966533221625";

function Stat({ icon, label, value }) {
  return (
    <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-center gap-2 text-[#c4674a]">
        {icon}
        <span className="text-xs font-semibold tracking-wide text-gray-500 uppercase">{label}</span>
      </div>
      <p className="text-sm leading-snug font-semibold text-slate-900">{value}</p>
    </div>
  );
}

export default function ListingDetail() {
  const { id } = useParams();
  const listing = getListing(id);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!listing) {
    return (
      <div className="bg-[#f7f4ef] px-4 pt-32 pb-28 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Listing not found</h1>
        <Link to="/listings" className="mt-4 inline-block font-semibold text-[#c4674a]">
          Browse properties
        </Link>
      </div>
    );
  }

  const area = listing.coveredArea
    ? `${listing.coveredArea.toLocaleString("en-US")} m²`
    : "—";
  const whatsapp = `https://wa.me/966533221625?text=${encodeURIComponent(`Hi, I'm interested in ${listing.title}`)}`;
  const advisorRole = listing.fal.includes("CIRE")
    ? "Private office advisor for international residences."
    : "Licensed Velantis advisor for property across Saudi Arabia.";

  return (
    <div className="min-h-screen bg-[#f7f4ef] pt-20">
      <div className="relative h-64 w-full overflow-hidden md:h-96">
        <img src={listing.image} alt={listing.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 flex items-end bg-black/40">
          <div className="mx-auto w-full max-w-6xl px-4 pb-8">
            <span className="mb-3 inline-block rounded-full bg-[#d4a574] px-3 py-1 text-xs font-semibold text-slate-900">
              {listing.category}
            </span>
            <h1 className="text-3xl font-bold text-white md:text-5xl">{listing.title}</h1>
            <p className="mt-2 text-white/90">
              {listing.type} · {listing.status}
            </p>
            <p className="mt-1 text-2xl font-bold text-[#d4a574]">{listing.priceLabel}</p>
            <button
              type="button"
              aria-label={saved ? "Remove from saved" : "Save property"}
              aria-pressed={saved}
              onClick={() => setSaved((value) => !value)}
              className="mt-3 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-slate-700"
            >
              <LuHeart className={saved ? "fill-[#c4674a] text-[#c4674a]" : ""} />
            </button>
            <p className="mt-3 flex items-start gap-2 text-white/90">
              <LuMapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {listing.location}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-8 lg:col-span-2">
          <section>
            <h2 className="mb-4 text-xl font-bold text-slate-900">Property overview</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <Stat icon={<LuBedDouble className="h-4 w-4" />} label="Bedrooms" value={listing.beds} />
              <Stat icon={<LuBath className="h-4 w-4" />} label="Bathrooms" value={listing.baths} />
              <Stat icon={<LuMaximize2 className="h-4 w-4" />} label="Covered area" value={area} />
              <Stat icon={<LuCalendar className="h-4 w-4" />} label="Build year" value={listing.year} />
              <Stat icon={<LuMapPin className="h-4 w-4" />} label="Availability" value={listing.status} />
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#c4674a] uppercase">
              Your licensed advisor
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f7f4ef] text-slate-500">
                <LuUser className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-slate-900">{listing.agent}</p>
                <p className="mt-1 inline-flex rounded-full bg-[#2A9D8F]/10 px-2.5 py-0.5 text-xs font-semibold text-[#2A9D8F]">
                  {listing.fal}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">{advisorRole}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={phone}
                className="inline-flex items-center gap-2 rounded-lg border border-black/10 px-4 py-2.5 text-sm font-semibold text-slate-900"
              >
                <LuPhone className="h-4 w-4" /> Call
              </a>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white"
              >
                WhatsApp
              </a>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-slate-900">About this property</h2>
            <p className="leading-relaxed text-slate-600">
              {listing.title} — exceptional property in {listing.city}, {listing.country}.{" "}
              {listing.fal.includes("CIRE")
                ? "Presented by Christie's International Real Estate."
                : "Presented by a FAL-licensed Velantis advisor."}
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-slate-900">Location</h2>
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <iframe
                title="Map"
                src={`https://www.google.com/maps?q=${listing.lat},${listing.lng}&hl=en&z=14&output=embed`}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </div>

        <aside>
          <InterestForm whatsappHref={whatsapp} />
        </aside>
      </div>
    </div>
  );
}
