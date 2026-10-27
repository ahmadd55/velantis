import { LuMapPin } from "react-icons/lu";
import { LuLayers } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";
import { LuMessageCircle } from "react-icons/lu";

const defaultImage =
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80";

export default function FeatureCard({
  image = defaultImage,
  developer = "Roshn",
  title = "Sedra — North Riyadh",
  location = "Riyadh · Al Narjis",
  units = "186/420 units",
  handover = "Dec 2026",
}) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <img src={image} alt={title} className="h-44 w-full object-cover sm:h-48" />
      <div className="flex flex-col gap-3 px-4 py-4 sm:px-5 sm:py-5">
        <span className="block text-sm text-[#c4674a]">{developer}</span>
        <h3 className="text-lg font-bold leading-snug sm:text-xl">{title}</h3>
        <div className="flex items-center gap-2 text-sm">
          <LuMapPin className="shrink-0 text-[#c4674a]" />
          <span>{location}</span>
        </div>
        <hr className="border-slate-100" />
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <div className="flex items-center gap-2">
            <LuLayers className="shrink-0 text-[#c4674a]" />
            <span>{units}</span>
          </div>
          <div className="flex items-center gap-2">
            <LuCalendar className="shrink-0 text-[#c4674a]" />
            <span>{handover}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#c4674a] px-3 py-2.5 text-sm font-semibold text-white"
          >
            View Details
            <LuArrowRight />
          </button>
          <button
            type="button"
            aria-label="WhatsApp"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-green-600"
          >
            <LuMessageCircle className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
