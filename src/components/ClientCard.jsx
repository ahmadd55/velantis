import { LuStar } from "react-icons/lu";

export default function ClientCard() {
  return (
    <div className="h-full w-full rounded-xl bg-white p-5 text-left shadow sm:p-6">
      <div className="flex gap-1">
        {Array.from({ length: 5 }, (_, index) => (
          <LuStar key={index} className="fill-[#d4a574] text-[#d4a574]" />
        ))}
      </div>
      <p className="mt-4 leading-relaxed text-[#6e6558]">
        “Velantis helped me find my dream home in just 2 weeks. Their service is
        exceptional!”
      </p>
      <p className="mt-6 font-semibold">Ahmed Al-Rashid</p>
      <p>Riyadh</p>
    </div>
  );
}
