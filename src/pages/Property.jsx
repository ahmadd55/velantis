import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropertyHero from "../components/PropertyHero";
import MortageCard from "../components/MortageCard";
import ClientCard from "../components/ClientCard";
import PropertyCard from "../components/PropertyCard";

gsap.registerPlugin(ScrollTrigger);

export default function Property() {
  const heroRef = useRef(null);
  const coverRef = useRef(null);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      endTrigger: coverRef.current,
      end: "top top",
      pin: true,
      pinSpacing: false,
    });

    return () => trigger.kill();
  }, []);

  return (
    <>
      <div ref={heroRef}>
        <PropertyHero />
      </div>

      <div
        ref={coverRef}
        className="relative z-10 rounded-t-3xl flex flex-col justify-center bg-[#faf8f5] gap-6 px-40 py-16"
      >
        <div className="self-start inline-flex rounded-full border border-gray-300 px-3 py-1 items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c4674a]"></span>
          <span className="uppercase text-[#3ab5a5] font-semibold">
            Featured resale
          </span>
        </div>
        <h1 className="text-4xl font-extrabold">Properties for sale</h1>
        <div className="h-1 w-12 rounded-[2px] border bg-black"></div>
        <p className="text-[#6e6558] text-lg">
          Hand-picked listings from verified sellers across Saudi Arabia
        </p>
        <div className="grid grid-cols-3 gap-7">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>

      <div className="relative z-10 flex justify-center py-30 bg-[#f2ede5]">
        <MortageCard />
      </div>

      <div className="relative z-10 py-20 flex flex-col justify-center items-center bg-[#f2ede5] gap-6">
        <h1 className="text-4xl font-extrabold">What our clients say</h1>
        <div className="h-1 w-12 rounded-[2px] border bg-black"></div>
        <p className="text-[#6e6558] text-lg">
          Real experiences from satisfied customers across Saudi Arabia
        </p>
        <div className="flex gap-7 mt-8">
          <ClientCard />
          <ClientCard />
          <ClientCard />
        </div>

        <button className="rounded-xl bg-white font-semibold px-7 py-4 mt-5">
          View all properties
        </button>
      </div>
    </>
  );
}
