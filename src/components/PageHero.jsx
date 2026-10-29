import TrustCards from "./TrustCards";
import { useI18n } from "../i18n.jsx";

export default function PageHero({ eyebrow, title, description, meta }) {
  const { t } = useI18n();
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(70%_55%_at_50%_0%,#3a2a22_0%,#0000_55%),linear-gradient(180deg,#14110f_0%,#1c1612_42%,#2a211c_100%)] text-white">
        <div className="mx-auto max-w-4xl px-4 pt-28 pb-16 text-center sm:pt-32 md:pb-20">
          <p className="text-xs font-bold tracking-[0.28em] text-[#d4a574] uppercase">
            {t(eyebrow)}
          </p>
          <h1 className="font-display mt-4 text-4xl leading-tight font-medium text-white sm:text-5xl md:text-6xl">
            {t(title)}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {t(description)}
          </p>
          {meta ? <p className="mt-4 text-sm text-white/80">{t(meta)}</p> : null}
        </div>
      </section>
      <div className="bg-[#f7f4ef] px-4 py-8 sm:px-6 md:px-10 lg:px-16">
        <TrustCards />
      </div>
    </>
  );
}
