import { useState } from "react";
import { Link } from "react-router-dom";
import { LuBath, LuBedDouble, LuCar, LuHeart, LuMail, LuMapPin, LuMessageCircle, LuPhone } from "react-icons/lu";
import { useI18n } from "../i18n.jsx";

const phone = "tel:+966533221625";
const mail = "mailto:hello@velantis.sa";

export default function ListingCard({ listing }) {
  const { t } = useI18n();
  const [saved, setSaved] = useState(false);
  const whatsapp = `https://wa.me/966533221625?text=${encodeURIComponent(`Hi, I'm interested in ${listing.title}`)}`;

  return (
    <article
      id={`listing-${listing.id}`}
      className="scroll-mt-28 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
    >
      <div className="relative h-52">
        <Link to={`/listings/${listing.id}`} className="absolute inset-0">
          <img src={listing.image} alt={t(listing.title)} className="h-full w-full object-cover" />
        </Link>
        <button
          type="button"
          aria-label={saved ? t("Remove from saved") : t("Save property")}
          aria-pressed={saved}
          onClick={() => setSaved((value) => !value)}
          className="absolute top-3 start-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-slate-700 shadow"
        >
          <LuHeart className={saved ? "fill-[#c4674a] text-[#c4674a]" : ""} />
        </button>
        <span className="pointer-events-none absolute top-3 end-3 rounded-full bg-[#c4674a] px-3 py-1 text-xs font-semibold text-white">
          {t(listing.status)}
        </span>
        <p className="pointer-events-none absolute bottom-3 start-4 text-lg font-bold text-white drop-shadow">
          {t(listing.priceLabel)}
        </p>
      </div>

      <div className="p-4">
        <Link to={`/listings/${listing.id}`} className="block">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {t("Verified")}
          </span>
          <span className="text-xs font-semibold tracking-[0.14em] text-slate-400">
            {t(listing.category)}
          </span>
        </div>
        <h3 className="mt-3 text-lg leading-snug font-bold text-slate-900">{t(listing.title)}</h3>
        <p className="mt-2 flex items-start gap-1.5 text-sm text-slate-500">
          <LuMapPin className="mt-0.5 shrink-0 text-[#c4674a]" />
          <span>{t(listing.location)}</span>
        </p>
        <p className="mt-2 text-sm text-slate-700">
          {listing.agent}{" "}
          <span className="font-semibold text-[#2A9D8F]">{listing.fal}</span>
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-4 border-t border-black/5 pt-3 text-sm text-slate-600">
          <span className="inline-flex items-center gap-1.5">
            <LuBedDouble className="text-[#c4674a]" /> {listing.beds}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <LuBath className="text-[#c4674a]" /> {listing.baths}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <LuCar className="text-[#c4674a]" /> {listing.parking}
          </span>
        </div>
        </Link>
        <div className="mt-4 flex gap-2">
          <a href={phone} className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-black/10 px-3 py-2.5 text-center text-sm font-semibold">
            <LuPhone /> {t("Call")}
          </a>
          <a href={mail} className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-black/10 px-3 py-2.5 text-center text-sm font-semibold">
            <LuMail /> {t("Email")}
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("WhatsApp")}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#c4674a] px-3 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#b3583d]"
          >
            <LuMessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
