import { LuSearch } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";
import { LuBuilding2 } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";
import { useState } from "react";
import TrustBar from "./TrustBar";


const locations = [
  "Riyadh", "Jeddah", "Mecca", "Medina", "Dammam",
  "Khobar", "Dhahran", "Al-Ahsa", "Taif", "Buraidah",
  "Tabuk", "Abha", "Khamis Mushait", "Najran", "Jizan",
  "Yanbu", "Jubail", "Al-Qatif", "Sakaka", "Arar", "Hail",
];

const propertyTypes = [
  "Residential", "Commercial", "Industrial", "Land", "Beach", "Others",
];


export default function PropertyHero() {
  const [search, setSearch]   = useState("");
  const [location, setLocation] = useState("");
  const [type, setType]       = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ search, location, type });
  }

  return (
    <section className="relative bg-[radial-gradient(80%_55%_at_15%_15%,#c4674a33_0%,#0000_50%),radial-gradient(65%_50%_at_88%_75%,#2a9d8f29_0%,#0000_50%),linear-gradient(168deg,#100e0c_0%,#1a1612_45%,#221e1a_100%)] text-white">
      
      <div className="px-4 pt-28 pb-12 md:pt-32 md:pb-14">
        <div className="max-w-5xl mx-auto text-center">
     
          <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Resale & Ready Properties
          </p>

          
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Find your property in Saudi Arabia
          </h1>

         
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Villas, apartments, land and commercial units — verified listings
            across Riyadh, Jeddah, and the Eastern Province.
          </p>

          
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-3 md:p-4 shadow-2xl
                       grid grid-cols-1 md:grid-cols-4 gap-3 text-start"
          >
           
            <label className="relative block">
              <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="search"
                placeholder="Search properties…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 h-12 rounded-xl border border-slate-200
                           text-slate-800 placeholder-slate-400 text-sm
                           focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </label>

            <label className="relative block">
              <LuMapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-9 pr-3 h-12 rounded-xl border border-slate-200
                           text-slate-800 text-sm appearance-none bg-white
                           focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="">Select location</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </label>

    
            <label className="relative block">
              <LuBuilding2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full pl-9 pr-3 h-12 rounded-xl border border-slate-200
                           text-slate-800 text-sm appearance-none bg-white
                           focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="">Property Type</option>
                {propertyTypes.map((pt) => (
                  <option key={pt} value={pt}>
                    {pt}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 h-12 px-6
                         bg-[#c4674a] text-white font-semibold
                         rounded-xl text-sm"
            >
              Search properties
              <LuArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
      <TrustBar/>
    </section>
  );
}