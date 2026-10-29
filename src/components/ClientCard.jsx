import { LuStar } from "react-icons/lu";
import { useI18n } from "../i18n.jsx";

export const testimonials = [
  {
    quote: "Velantis helped me find my dream home in just 2 weeks. Their service is exceptional!",
    name: "Ahmed Al-Rashid",
    city: "Riyadh",
  },
  {
    quote: "Professional team with excellent knowledge of the market. Highly recommended!",
    name: "Sarah Al-Mansouri",
    city: "Jeddah",
  },
  {
    quote: "The best real estate platform in Saudi Arabia. Made my property search so easy.",
    name: "Mohammed Al-Zahrani",
    city: "Dammam",
  },
];

export default function ClientCard({ quote, name, city }) {
  const { t } = useI18n();
  return (
    <div className="h-full w-full rounded-xl bg-white p-5 text-left shadow sm:p-6">
      <div className="flex gap-1">
        {Array.from({ length: 5 }, (_, index) => (
          <LuStar key={index} className="fill-[#d4a574] text-[#d4a574]" />
        ))}
      </div>
      <p className="mt-4 leading-relaxed text-[#6e6558]">“{t(quote)}”</p>
      <p className="mt-6 font-semibold">{t(name)}</p>
      <p>{t(city)}</p>
    </div>
  );
}
