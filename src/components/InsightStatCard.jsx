
import { LuTrendingUp, LuTrendingDown } from "react-icons/lu";

export default function InsightStatCard({
  city = "Riyadh",
  label = "Avg. price / sqm",
  value = "4,850 SAR",
  trend = "up", 
}) {
  const isUp = trend === "up";

  return (
    <div className="bg-white rounded-2xl shadow p-5 flex flex-col gap-3">

    
      <div className="flex items-center justify-between">

        <span className="text-[11px] font-bold uppercase tracking-widest text-[#3ab5a5] bg-[#3ab5a5]/10 border border-[#3ab5a5]/20 px-2.5 py-1 rounded-full">
          {city}
        </span>

        <span
          className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${
            isUp
              ? "text-green-600 bg-green-50 border border-green-200"
              : "text-red-500 bg-red-50 border border-red-200"
          }`}
        >
          {isUp ? <LuTrendingUp className="w-3 h-3" /> : <LuTrendingDown className="w-3 h-3" />}
          {isUp ? "Up" : "Down"}
        </span>
      </div>

      <p className="text-sm mt-3 text-slate-500 leading-snug">{label}</p>

      <p className="text-3xl mt-5 font-bold text-slate-800 tracking-tight">{value}</p>

    </div>
  );
}