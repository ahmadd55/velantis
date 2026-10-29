import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import TrustBar from "./TrustBar";
import { useI18n } from "../i18n.jsx";

gsap.registerPlugin(SplitText);

export default function HeroSection() {
  const { t, lang } = useI18n();
  const headingLine1Ref = useRef(null);
  const kingdomRef = useRef(null);
  const badgeRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);

  useLayoutEffect(() => {
    if (headingLine1Ref.current) {
      headingLine1Ref.current.innerHTML = t("Find your home in the");
    }
    const mm = gsap.matchMedia();
    const sequence = [
      badgeRef.current,
      headingLine1Ref.current,
      kingdomRef.current,
      descRef.current,
      buttonsRef.current,
      statsRef.current,
    ];

    mm.add("(max-width: 1023px)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.45 } });
      tl.from(sequence, { opacity: 0, y: 16, stagger: 0.06 });
      return () => tl.kill();
    });

    mm.add("(min-width: 1024px)", () => {
      if (lang === "ar") {
        const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.45 } });
        tl.from(sequence, { opacity: 0, y: 16, stagger: 0.06 });
        return () => tl.kill();
      }
      const split = new SplitText(headingLine1Ref.current, { type: "chars" });
      const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.6 } });

      tl.from(badgeRef.current, { opacity: 0, y: 20 })
        .from(
          split.chars,
          { opacity: 0, y: 24, stagger: 0.025, duration: 0.7 },
          "-=0.2",
        )
        .from(kingdomRef.current, { opacity: 0, y: 24 }, "-=0.3")
        .from(descRef.current, { opacity: 0, y: 18 }, "-=0.2")
        .from(buttonsRef.current, { opacity: 0, y: 18 }, "-=0.2")
        .from(statsRef.current, { opacity: 0, y: 18 }, "-=0.2");

      return () => {
        tl.kill();
        if (split.isSplit) split.revert();
      };
    });

    return () => mm.revert();
  }, [lang, t]);

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden pt-24 pb-0 text-white sm:pt-28 lg:min-h-[92vh]">
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -inset-[12%]">
          <img
            src="/hero.jpg"
            alt=""
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/75" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.04) 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-4 pb-10 text-center sm:px-6 sm:pb-14">
        <div
          ref={badgeRef}
          className="mx-auto mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md sm:mb-7 sm:gap-3 sm:px-4"
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          <span className="text-left text-[10px] font-bold tracking-[0.12em] text-white/90 uppercase sm:text-[11px] sm:tracking-[0.2em]">
            {t("Saudi Arabia's trusted property marketplace")}
          </span>
        </div>

        <h1 className="mx-auto max-w-4xl text-[2.05rem] leading-[1.08] font-black tracking-tight drop-shadow-lg sm:text-5xl md:text-6xl lg:text-[4rem]">
          <span
            ref={headingLine1Ref}
            className="block"
            dangerouslySetInnerHTML={{ __html: t("Find your home in the") }}
          />
          <span
            ref={kingdomRef}
            className="mt-1 block pb-2"
            style={{
              background:
                "linear-gradient(135deg, #f5c842 0%, #f97316 60%, #ef4444 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t("Kingdom")}
          </span>
        </h1>

        <p
          ref={descRef}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 drop-shadow-md sm:mt-6 sm:text-lg md:text-xl"
        >
          {t("Resale villas, off-plan communities, and investment opportunities — tailored for citizens, residents, and investors.")}
        </p>

        <div
          ref={buttonsRef}
          className="mx-auto mt-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center sm:gap-4"
        >
          <Link
            to="/property"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-7 py-3.5 font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600"
          >
            {t("View Details")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/off-plan"
            className="inline-flex items-center justify-center rounded-lg border border-white/35 bg-white/8 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-white/55 hover:bg-white/15"
          >
            {t("Register Interest")}
          </Link>
        </div>

        <div
          ref={statsRef}
          className="mx-auto mt-10 grid w-full max-w-3xl grid-cols-2 gap-y-4 border-t border-white/15 pt-6 md:mt-12 md:grid-cols-4 md:gap-0 md:pt-7"
        >
          <div className="px-2 py-2 text-center">
            <p className="text-xl font-black text-white sm:text-2xl">500+</p>
            <p className="mt-1 text-xs font-medium text-white/55">{t("Verified listings")}</p>
          </div>
          <div className="px-2 py-2 text-center">
            <p className="text-xl font-black text-white sm:text-2xl">6+</p>
            <p className="mt-1 text-xs font-medium text-white/55">{t("Major cities")}</p>
          </div>
          <div className="px-2 py-2 text-center">
            <p className="text-xl font-black text-white sm:text-2xl">FAL</p>
            <p className="mt-1 text-xs font-medium text-white/55">{t("Licensed brokerage")}</p>
          </div>
          <div className="px-2 py-2 text-center">
            <p className="text-xl font-black text-white sm:text-2xl">24/7</p>
            <p className="mt-1 text-xs font-medium text-white/55">{t("Expert guidance")}</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 hidden flex-col items-center gap-1.5 pb-4 sm:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce text-white/45"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
        <div className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent" />
      </div>

      <TrustBar />
    </section>
  );
}
