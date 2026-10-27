import { LuAward, LuCalendarCheck, LuHeadphones } from "react-icons/lu";

const icons = {
  award: LuAward,
  calendar: LuCalendarCheck,
  support: LuHeadphones,
};

export default function SecondCard({
  icon = "award",
  title = "FAL-verified listings",
  text = "Every property is checked against Saudi REGA licensing standards.",
}) {
  const Icon = icons[icon] ?? LuAward;

  return (
    <div className="rounded-xl bg-white px-4 py-4 shadow sm:px-5 sm:py-5">
      <div className="flex items-start gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#c4674a]">
          <Icon className="text-[#c4674a]" />
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-slate-800">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-[#6e6558]">{text}</p>
        </div>
      </div>
    </div>
  );
}
