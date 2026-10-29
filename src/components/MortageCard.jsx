import { useMemo, useState } from "react";
import { LuCalculator } from "react-icons/lu";
import { useI18n } from "../i18n.jsx";

function monthlyInstalment(principal, annualRate, years) {
  const months = years * 12;
  if (principal <= 0 || months <= 0) return 0;
  const monthlyRate = annualRate / 100 / 12;
  if (monthlyRate === 0) return principal / months;
  const growth = (1 + monthlyRate) ** months;
  return (principal * monthlyRate * growth) / (growth - 1);
}

export default function MortageCard() {
  const { t } = useI18n();
  const money = (amount) => t(`SAR ${Math.round(amount).toLocaleString("en-US")}`);
  const [price, setPrice] = useState(1100000);
  const [downPercent, setDownPercent] = useState(30);
  const [rate, setRate] = useState(4.5);
  const [years, setYears] = useState(20);

  const result = useMemo(() => {
    const downPayment = price * (downPercent / 100);
    const financed = Math.max(price - downPayment, 0);
    return {
      downPayment,
      financed,
      monthly: monthlyInstalment(financed, rate, years),
    };
  }, [price, downPercent, rate, years]);

  return (
    <div className="flex w-full min-w-0 flex-col rounded-xl bg-white p-5 shadow sm:p-8">
      <div className="mb-6 flex items-start gap-3 sm:mb-8 sm:gap-4">
        <LuCalculator className="mt-1 shrink-0" />
        <div className="min-w-0">
          <h3 className="text-xl font-bold sm:text-2xl">{t("Mortgage Estimator")}</h3>
          <p className="text-sm text-[#6e6558] sm:text-base">
            {t("Estimate your monthly instalment — typical Saudi bank rates")}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="min-w-0 flex-1">
          <label className="text-sm font-medium" htmlFor="property-price">
            {t("Property price")}
          </label>
          <input
            id="property-price"
            className="mt-2 w-full accent-[#c4674a]"
            type="range"
            min="300000"
            max="5000000"
            step="50000"
            value={price}
            onChange={(event) => setPrice(Number(event.target.value))}
          />
          <span className="mt-1 block text-sm">{money(price)}</span>

          <label className="mt-4 block text-sm font-medium" htmlFor="down-payment">
            {t("Down payment")} ({downPercent}%)
          </label>
          <input
            id="down-payment"
            className="mt-2 w-full accent-[#c4674a]"
            type="range"
            min="5"
            max="70"
            step="1"
            value={downPercent}
            onChange={(event) => setDownPercent(Number(event.target.value))}
          />
          <span className="mt-1 block text-sm">{money(result.downPayment)}</span>

          <label className="mt-4 block text-sm font-medium" htmlFor="profit-rate">
            {t("Annual profit rate")} ({rate.toFixed(1)}%)
          </label>
          <input
            id="profit-rate"
            className="mt-2 w-full accent-[#c4674a]"
            type="range"
            min="2"
            max="12"
            step="0.1"
            value={rate}
            onChange={(event) => setRate(Number(event.target.value))}
          />

          <label className="mt-4 block text-sm font-medium" htmlFor="finance-term">
            {t("Finance term")} ({years} {t(years === 1 ? "year" : "years")})
          </label>
          <input
            id="finance-term"
            className="mt-2 w-full accent-[#c4674a]"
            type="range"
            min="5"
            max="30"
            step="1"
            value={years}
            onChange={(event) => setYears(Number(event.target.value))}
          />
        </div>

        <div className="min-w-0 flex-1 rounded-xl bg-black px-5 py-8 text-white sm:px-6 sm:py-10">
          <p className="text-sm text-[#ffffffb3]">{t("Estimated monthly payment")}</p>
          <span className="mt-2 mb-6 block text-3xl font-bold break-words text-[#d4a574] sm:text-4xl">
            {money(result.monthly)}
          </span>
          <hr className="border-white/15" />
          <div className="mt-4 flex items-start justify-between gap-3 text-sm">
            <span className="text-[#ffffffb3]">{t("Down payment")}</span>
            <span className="shrink-0">{money(result.downPayment)}</span>
          </div>
          <div className="mt-2 mb-4 flex items-start justify-between gap-3 text-sm">
            <span className="text-[#ffffffb3]">{t("Amount financed")}</span>
            <span className="shrink-0">{money(result.financed)}</span>
          </div>
          <p className="text-xs leading-relaxed text-[#ffffffb3] sm:text-sm">
            {t("Indicative only. Final terms subject to bank approval (Murabaha/Tawarruq).")}
          </p>
        </div>
      </div>
    </div>
  );
}
