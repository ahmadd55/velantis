import { LuMapPin } from "react-icons/lu";
import { LuLayers } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";
import { LuMessageCircle } from "react-icons/lu";

export default function FeatureCard() {
  return (
    <div className="rounded-xl bg-white shadow overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80"
        alt="Sedra — North Riyadh"
      />
      <div className="px-6 py-5 flex flex-col gap-3">
        <span className="block text-[#c4674a]">Roshn</span>
        <h3 className="font-bold text-xl">Sedra — North Riyadh</h3>
        <div className="flex gap-2 items-center">
          <LuMapPin className="text-[#c4674a]" />
          <span>Riyadh · Al Narjis</span>
        </div>
        <hr />
        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <LuLayers className="text-[#c4674a]" />
            <span>186/420 units</span>
          </div>
          <div className="flex gap-2 items-center">
            <LuCalendar className="text-[#c4674a]" />
            <span>Dec 2026</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="text-white bg-[#c4674a] px-20 py-2 flex justify-center items-center gap-2 rounded-xl">
            View Details
            <LuArrowRight />
          </button>
          <button className="flex justify-center items-center rounded-xl px-4 py-1 bg-green-600">
            <LuMessageCircle className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
