import { LuAward } from "react-icons/lu";
import { LuCalendarCheck } from "react-icons/lu";
import { LuHeadphones } from "react-icons/lu"; 


export default function SecondCard() {
  return (
    <div className="h-30 px-5 py-6 bg-white rounded-xl shadow">
      <div className="flex gap-4">
        <div className="self-start px-4 py-4 flex jistify-center items-center border border-[#c4674a] rounded-xl">
          <LuAward className="text-[#c4674a]" />
        </div>
        <div>
          <h3>FAL-verified listings</h3>
          <p className="mt-2">
            Every property is checked against Saudi REGA licensing standards.
          </p>
        </div>
      </div>
    </div>
  );
}

