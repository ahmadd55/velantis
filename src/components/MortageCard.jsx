import { LuCalculator } from "react-icons/lu";

export default function MortageCard() {
  return (
    <div className="flex flex-col p-8 bg-white rounded-xl shadow w-[800px]">
      <div className="flex items-center gap-4 mb-8">
        <LuCalculator />
        <div>
          <h3 className="font-bold text-2xl">Mortgage Estimator</h3>
          <p>Estimate your monthly instalment — typical Saudi bank rates</p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label htmlFor="">Property price</label>
          <input className="w-full mt-2" type="range" />
          <span className="block">SAR 1,100,000</span>
          <label className="block mt-4" htmlFor="">
            Down payment (30%)
          </label>
          <input className="w-full mt-2" type="range" />
          <label className="block mt-4" htmlFor="">
            Annual profit rate (4.5%)
          </label>
          <input className="w-full mt-2" type="range" />
          <label className="block mt-4" htmlFor="">
            Finance term (20 years)
          </label>
          <input className="w-full mt-2" type="range" />
        </div>

        <div className="bg-black text-white px-6 py-10 rounded-xl flex-1">
          <p className="text-[#ffffffb3]">Estimated monthly payment</p>
          <span className="mb-6 block text-4xl text-[#d4a574] font-bold">
            SAR 4,871
          </span>
          <hr />
          <div className="mt-4 flex justify-between">
            <span className="text-[#ffffffb3]">Down payment</span>
            <span>SAR 330,000</span>
          </div>
          <div className="mb-4 flex justify-between">
            <span className="text-[#ffffffb3]">Down payment</span>
            <span>SAR 330,000</span>
          </div>

          <p className="text-[#ffffffb3]">
            Indicative only. Final terms subject to bank approval
            (Murabaha/Tawarruq).
          </p>
        </div>
      </div>
    </div>
  );
}
