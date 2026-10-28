import { useLayoutEffect, useRef } from "react";
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

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const cover = coverRef.current;
    if (!hero || !cover) return undefined;

    const trigger = ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      endTrigger: cover,
      end: "top top",
      pin: true,
      pinSpacing: false,
    });

    return () => {
      const node = heroRef.current;
      trigger.kill(true);
      const spacer = node?.parentElement;
      if (spacer?.classList.contains("pin-spacer") && spacer.parentElement) {
        spacer.parentElement.insertBefore(node, spacer);
        spacer.remove();
      }
    };
  }, []);

  return (
    <>
      <div ref={heroRef} className="relative z-0">
        <PropertyHero />
      </div>

      <div
        ref={coverRef}
        className="relative z-10 flex flex-col gap-6 rounded-t-3xl bg-[#faf8f5] px-4 py-12 sm:px-6 md:px-10 md:py-16 lg:px-16 xl:px-20"
      >
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-gray-300 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#c4674a]" />
          <span className="text-xs font-semibold uppercase text-[#3ab5a5] sm:text-sm">
            Featured resale
          </span>
        </div>
        <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:mt-8 sm:text-4xl">
          Properties for sale
        </h1>
        <div className="h-1 w-12 rounded-sm bg-black" />
        <p className="max-w-3xl text-base text-[#6e6558] sm:text-lg">
          Hand-picked listings from verified sellers across Saudi Arabia
        </p>
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }, (_, index) => (
            <PropertyCard key={index} />
          ))}
        </div>
      </div>

      <div className="relative z-10 bg-[#f2ede5] px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto w-full max-w-5xl">
          <MortageCard />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center bg-[#f2ede5] px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">
          What our clients say
        </h2>
        <div className="mt-4 h-1 w-12 rounded-sm bg-black" />
        <p className="mt-4 text-center text-base text-[#6e6558] sm:text-lg">
          Real experiences from satisfied customers across Saudi Arabia
        </p>
        <div className="mt-8 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 3 }, (_, index) => (
            <ClientCard key={index} />
          ))}
        </div>
        <button
          type="button"
          className="mt-8 rounded-xl bg-white px-7 py-4 text-center font-semibold"
        >
          View all properties
        </button>
      </div>
    </>
  );
}
