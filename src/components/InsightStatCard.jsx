
import { LuTrendingUp, LuTrendingDown } from "react-icons/lu";
import { useI18n } from "../i18n.jsx";

export default function InsightStatCard({
  city = "Riyadh",
  label = "Avg. price / sqm",
  value = "4,850 SAR",
  trend = "up", 
}) {
  const { t } = useI18n();
  const isUp = trend === "up";

  return (
    <div className="flex h-full flex-col gap-3 rounded-2xl bg-white p-4 shadow sm:p-5">

    
      <div className="flex items-center justify-between">

        <span className="text-[11px] font-bold uppercase tracking-widest text-[#3ab5a5] bg-[#3ab5a5]/10 border border-[#3ab5a5]/20 px-2.5 py-1 rounded-full">
          {t(city)}
        </span>

        <span
          className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${
            isUp
              ? "text-green-600 bg-green-50 border border-green-200"
              : "text-red-500 bg-red-50 border border-red-200"
          }`}
        >
          {isUp ? <LuTrendingUp className="h-3 w-3" /> : <LuTrendingDown className="h-3 w-3" />}
          {t(isUp ? "Up" : "Down")}
        </span>
      </div>

      <p className="text-sm mt-3 text-slate-500 leading-snug">{t(label)}</p>

      <p className="mt-5 text-2xl font-bold tracking-tight break-words text-slate-800 sm:text-3xl">{value}</p>

    </div>
  );
}