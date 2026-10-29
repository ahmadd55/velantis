import { LuMapPin } from "react-icons/lu";
import { LuMessageCircle } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";
import { LuShieldCheck } from "react-icons/lu";
import { LuBedDouble } from "react-icons/lu";
import { LuBath } from "react-icons/lu";
import { LuCar } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import { LuMail } from "react-icons/lu";

export default function PropertyCard() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow">
      
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80"
          alt="Sedra — North Riyadh"
          className="h-48 w-full object-cover sm:h-52"
        />

       
        <button
          aria-label="Add to favourites"
          className="absolute top-3 left-3 w-9 h-9 rounded-full bg-black/55 border border-white/30 flex items-center justify-center text-white"
        >
          <LuHeart className="w-4 h-4" />
        </button>

        <span className="absolute top-3 right-3 bg-[#c4674a] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          For Sale
        </span>

      
        <span className="absolute bottom-3 left-3 text-base font-bold text-white drop-shadow-md sm:text-lg">
          SAR 1,200,000
        </span>
      </div>

  
      <div className="flex flex-1 flex-col gap-3 px-4 py-4 sm:px-5">
       
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-[10px] font-semibold text-[#c4674a] border border-[#c4674a]/30 bg-[#c4674a]/10 px-2 py-0.5 rounded-full">
            <LuShieldCheck className="w-3 h-3" />
            Verified
          </span>
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Residential
          </span>
        </div>

     
        <div>
          <span className="text-sm text-[#c4674a] font-medium">Roshn</span>
          <h3 className="font-bold text-lg text-slate-800 leading-snug">
            Sedra — North Riyadh
          </h3>
        </div>

       
        <div className="flex items-center gap-1.5 text-sm text-slate-500">
          <LuMapPin className="text-[#c4674a] w-4 h-4 shrink-0" />
          <span>Riyadh · Al Narjis</span>
        </div>

        <hr className="border-slate-100" />

    
        <div className="flex gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-1.5">
            <LuBedDouble className="text-[#c4674a] w-4 h-4" />
            <span>
              <span className="font-semibold text-slate-800">4</span> Beds
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <LuBath className="text-[#c4674a] w-4 h-4" />
            <span>
              <span className="font-semibold text-slate-800">3</span> Baths
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <LuCar className="text-[#c4674a] w-4 h-4" />
            <span>
              <span className="font-semibold text-slate-800">1</span> Parking
            </span>
          </div>
        </div>


        <div className="mt-auto flex gap-2 pt-1">
          <a
            href="tel:+966500000000"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 py-2.5 text-xs font-semibold text-slate-700 sm:text-sm"
          >
            <LuPhone className="w-4 h-4" />
            Call
          </a>
          <a
            href="mailto:agent@example.com"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 py-2.5 text-xs font-semibold text-slate-700 sm:text-sm"
          >
            <LuMail className="w-4 h-4" />
            Email
          </a>
          <a
            href="https://wa.me/966533221625?text=Hi%2C%20I'm%20interested%20in%20Sedra%20%E2%80%94%20North%20Riyadh"
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
