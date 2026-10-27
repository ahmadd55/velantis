import { LuCalculator } from "react-icons/lu";

export default function MortageCard() {
  return (
    <div className="flex w-full min-w-0 flex-col rounded-xl bg-white p-5 shadow sm:p-8">
      <div className="mb-6 flex items-start gap-3 sm:mb-8 sm:gap-4">
        <LuCalculator className="mt-1 shrink-0" />
        <div className="min-w-0">
          <h3 className="text-xl font-bold sm:text-2xl">Mortgage Estimator</h3>
          <p className="text-sm text-[#6e6558] sm:text-base">
            Estimate your monthly instalment — typical Saudi bank rates
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="min-w-0 flex-1">
          <label className="text-sm font-medium" htmlFor="property-price">
            Property price
          </label>
          <input
            id="property-price"
            className="mt-2 w-full accent-[#c4674a]"
            type="range"
            defaultValue="55"
          />
          <span className="mt-1 block text-sm">SAR 1,100,000</span>

          <label className="mt-4 block text-sm font-medium" htmlFor="down-payment">
            Down payment (30%)
          </label>
          <input
            id="down-payment"
            className="mt-2 w-full accent-[#c4674a]"
            type="range"
            defaultValue="30"
          />

          <label className="mt-4 block text-sm font-medium" htmlFor="profit-rate">
            Annual profit rate (4.5%)
          </label>
          <input
            id="profit-rate"
            className="mt-2 w-full accent-[#c4674a]"
            type="range"
            defaultValue="45"
          />

          <label className="mt-4 block text-sm font-medium" htmlFor="finance-term">
            Finance term (20 years)
          </label>
          <input
            id="finance-term"
            className="mt-2 w-full accent-[#c4674a]"
            type="range"
            defaultValue="50"
          />
        </div>

        <div className="min-w-0 flex-1 rounded-xl bg-black px-5 py-8 text-white sm:px-6 sm:py-10">
          <p className="text-sm text-[#ffffffb3]">Estimated monthly payment</p>
          <span className="mt-2 mb-6 block text-3xl font-bold break-words text-[#d4a574] sm:text-4xl">
            SAR 4,871
          </span>
          <hr className="border-white/15" />
          <div className="mt-4 flex items-start justify-between gap-3 text-sm">
            <span className="text-[#ffffffb3]">Down payment</span>
            <span className="shrink-0">SAR 330,000</span>
          </div>
          <div className="mt-2 mb-4 flex items-start justify-between gap-3 text-sm">
            <span className="text-[#ffffffb3]">Amount financed</span>
            <span className="shrink-0">SAR 770,000</span>
          </div>
          <p className="text-xs leading-relaxed text-[#ffffffb3] sm:text-sm">
            Indicative only. Final terms subject to bank approval
            (Murabaha/Tawarruq).
          </p>
        </div>
      </div>
    </div>
  );
}
