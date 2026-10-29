import { useState } from "react";
import { useI18n } from "../i18n.jsx";

export default function PriceAlert() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      className="max-w-md space-y-3 rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
      onSubmit={(event) => {
        event.preventDefault();
        setDone(true);
      }}
    >
      <div>
        <h3 className="font-semibold text-slate-900">{t("Price alerts")}</h3>
        <p className="mt-1 text-sm text-slate-500">
          {t("Get notified when matching listings are published")}
        </p>
      </div>
      {done ? (
        <p className="rounded-xl bg-emerald-50 px-3 py-2.5 text-sm text-emerald-700">
          You&apos;re on the list. We&apos;ll email {email} when a match is published.
        </p>
      ) : (
        <>
          <input
            required
            type="email"
            placeholder={t("Your email")}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-xl border border-black/10 bg-[#faf8f5] px-3 py-2.5 text-sm"
          />
          <button type="submit" className="w-full rounded-xl bg-[#c4674a] py-2.5 text-sm font-semibold text-white">
            {t("Create alert")}
          </button>
        </>
      )}
    </form>
  );
}
