import { LuStar } from "react-icons/lu";

export default function ClientCard() {
  return (
    <div className="bg-white rounded-xl shadow p-6 w-90">
      <div className="flex gap-2">
        <LuStar className="fill-[#d4a574] text-[#d4a574] " />
        <LuStar className="fill-[#d4a574] text-[#d4a574] " />
        <LuStar className="fill-[#d4a574] text-[#d4a574] " />
        <LuStar className="fill-[#d4a574] text-[#d4a574] " />
        <LuStar className="fill-[#d4a574] text-[#d4a574] " />
      </div>

      <p className="text-[#6e6558] mt-4 leading-relaxed">
        “Velantis helped me find my dream home in just 2 weeks. Their service is
        exceptional!”
      </p>
      <p className="font-semibold mt-6">Ahmed Al-Rashid</p>

      <p>Riyadh</p>
    </div>
  );
}
