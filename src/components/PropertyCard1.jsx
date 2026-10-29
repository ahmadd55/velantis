import { LuMapPin, LuLayers, LuCalendar, LuArrowRight, LuMessageCircle } from "react-icons/lu";
import property from "../mock/data";

export default function PropertyCard1() {
  return (
    <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="h-56 w-full object-cover"
        />
        <span className="absolute top-3 right-3 rounded-full bg-yellow-500 px-3 py-1 text-xs font-bold text-white">
          {property.status}
        </span>
        <span className="absolute bottom-3 left-3 text-base font-bold text-white drop-shadow-md">
          {property.price}
        </span>
      </div>

      <div className="p-5">
        <p className="text-xs font-bold tracking-wide text-yellow-600 uppercase">
          {property.developer}
        </p>
        <h3 className="mt-1 text-lg font-bold text-gray-900">{property.title}</h3>
        <p className="mt-2 flex items-center gap-1 text-sm text-gray-500">
          <LuMapPin size={16} className="text-yellow-600" />
          {property.location}
        </p>

        <div className="mt-4 flex flex-wrap gap-4 border-t border-gray-200 pt-4">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <LuLayers size={16} className="text-yellow-600" />
            <span className="font-semibold text-gray-900">
              {property.unitsSold}/{property.unitsTotal} units
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <LuCalendar size={16} className="text-yellow-600" />
            <span className="font-semibold text-gray-900">{property.handover}</span>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <a
            href={property.detailsLink}
            className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-yellow-500 py-2.5 text-sm font-semibold text-white"
          >
            View details
            <LuArrowRight size={16} />
          </a>
          <a
            href={property.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-600 px-3 py-2.5 text-sm font-bold text-white transition-colors hover:bg-green-700"
          >
            <LuMessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
