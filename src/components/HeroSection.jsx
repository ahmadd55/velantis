import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import TrustBar from "./TrustBar";

gsap.registerPlugin(SplitText);

export default function HeroSection() {

  const headingLine1Ref = useRef(null);
  const kingdomRef      = useRef(null);
  const badgeRef        = useRef(null);
  const descRef         = useRef(null);
  const buttonsRef      = useRef(null);
  const statsRef        = useRef(null);

  useEffect(() => {

    const split = new SplitText(headingLine1Ref.current, { type: "chars" });

    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.6 } });

    // 1. Badge sabse pehle
    tl.from(badgeRef.current, { opacity: 0, y: 20 })

    // 2. Heading line 1 — char by char
    .from(split.chars, {
      opacity: 0,
      y: 30,
      stagger: 0.03,
      duration: 0.8,
    }, "-=0.2")

    // 3. Kingdom
    .from(kingdomRef.current, { opacity: 0, y: 30 }, "-=0.3")

    // 4. Description
    .from(descRef.current, { opacity: 0, y: 20 }, "-=0.2")

    // 5. Buttons
    .from(buttonsRef.current, { opacity: 0, y: 20 }, "-=0.2")

    // 6. Stats
    .from(statsRef.current, { opacity: 0, y: 20 }, "-=0.2");

    return () => {
      split.revert();
      tl.kill();
    };
  }, []);

  return (
    <section className="relative text-white pt-28 pb-0 overflow-hidden min-h-[92vh] flex flex-col">

      {/* ===== BACKGROUND IMAGE ===== */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -inset-[12%]">
          <img
            src="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=1920&q=80"
            alt="Find your home in the Kingdom"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/75" />
      </div>

      {/* ===== DOT GRID PATTERN ===== */}
      <div
        className="absolute inset-0 z-[2] opacity-60 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 flex-1 flex flex-col justify-center text-center px-5 pb-14 max-w-5xl mx-auto w-full">

        {/* --- Badge --- */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-7 mx-auto"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/90">
            Saudi Arabia's trusted property marketplace
          </span>
        </div>

        {/* --- Heading --- */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black max-w-4xl mx-auto leading-[1.06] tracking-tight drop-shadow-lg">

          {/* SplitText sirf is line pe */}
          <span ref={headingLine1Ref} className="block">
            Find your home in the
          </span>

          {/* Kingdom — alag ref, gradient safe */}
          <span
            ref={kingdomRef}
            className="block mt-1 pb-3"
            style={{
              background: "linear-gradient(135deg, #f5c842 0%, #f97316 60%, #ef4444 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Kingdom
          </span>
        </h1>

        {/* --- Description --- */}
        <p
          ref={descRef}
          className="text-white/80 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
        >
          Resale villas, off-plan communities, and investment opportunities —
          tailored for citizens, residents, and investors.
        </p>

        {/* --- Buttons --- */}
        <div
          ref={buttonsRef}
          className="flex flex-wrap items-center justify-center gap-4 mt-9"
        >
          <a
            href="/property"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <a
            href="/off-plan"
            className="inline-flex items-center px-7 py-3.5 border border-white/35 bg-white/8 backdrop-blur-md text-white font-semibold rounded-lg transition-all duration-200 hover:bg-white/15 hover:border-white/55"
          >
            Register Interest
          </a>
        </div>

        {/* --- Stats Grid --- */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-12 pt-7 border-t border-white/15 max-w-3xl mx-auto w-full"
        >
          <div className="text-center px-3 py-2">
            <p className="text-2xl font-black text-white">500+</p>
            <p className="text-xs text-white/55 mt-1 font-medium">Verified listings</p>
          </div>
          <div className="text-center px-3 py-2">
            <p className="text-2xl font-black text-white">6+</p>
            <p className="text-xs text-white/55 mt-1 font-medium">Major cities</p>
          </div>
          <div className="text-center px-3 py-2">
            <p className="text-2xl font-black text-white">FAL</p>
            <p className="text-xs text-white/55 mt-1 font-medium">Licensed brokerage</p>
          </div>
          <div className="text-center px-3 py-2">
            <p className="text-2xl font-black text-white">24/7</p>
            <p className="text-xs text-white/55 mt-1 font-medium">Expert guidance</p>
          </div>
        </div>

      </div>

      <div className="relative z-10 flex flex-col items-center gap-1.5 pb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/45 animate-bounce">
          <path d="m6 9 6 6 6-6" />
        </svg>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>

      <TrustBar />

    </section>
  );
}