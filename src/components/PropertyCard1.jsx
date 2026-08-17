import {
  MapPin,
  Layers,
  Calendar,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import data from "../mock/data"

function PropertyCard() {
  

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm">
     
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-56 object-cover"
        />

        {/* Status badge - top right */}
        <span className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          {property.status}
        </span>

        {/* Price - bottom left */}
        <span className="absolute bottom-3 left-3 text-white font-bold text-base drop-shadow-md">
          {property.price}
        </span>
      </div>

      {/* Content section */}
      <div className="p-5">
        <p className="text-xs font-bold uppercase text-yellow-600 tracking-wide">
          {property.developer}
        </p>

        <h3 className="text-lg font-bold text-gray-900 mt-1">
          {property.title}
        </h3>

        <p className="flex items-center gap-1 text-sm text-gray-500 mt-2">
          <MapPin size={16} className="text-yellow-600" />
          {property.location}
        </p>

        {/* Units and handover date */}
        <div className="flex gap-4 mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Layers size={16} className="text-yellow-600" />
            <span className="font-semibold text-gray-900">
              {property.unitsSold}/{property.unitsTotal} units
            </span>
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Calendar size={16} className="text-yellow-600" />
            <span className="font-semibold text-gray-900">
              {property.handover}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <a
            href={property.detailsLink}
            className="flex-1 flex items-center justify-center gap-1 bg-yellow-500 text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-yellow-600 transition"
          >
            View details
            <ArrowRight size={16} />
          </a>

          <a
            href={property.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-3 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
          >
            <MessageCircle size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
