import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import FeatureCard from "./FeatureCard";

export default function FeaturedCarousel({ cards = [{}, {}, {}] }) {
  const [active, setActive] = useState(0);
  const [compact, setCompact] = useState(() =>
    window.matchMedia("(max-width: 767px)").matches,
  );
  const cardRefs = useRef([]);
  const hasLaidOut = useRef(false);
  const total = cards.length;

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)");
    const tablet = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const layout = () => {
      cardRefs.current.forEach((el, index) => {
        if (!el) return;

        let diff = index - active;
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;

        const hideSides = reduce.matches || mobile.matches;
        const config = hideSides
          ? {
              x: mobile.matches && !reduce.matches ? diff * 24 : 0,
              rotateY: 0,
              z: 0,
              scale: 1,
              opacity: diff === 0 ? 1 : 0,
              duration: 0.35,
            }
          : tablet.matches
            ? {
                x: diff * 230,
                rotateY: diff * -12,
                z: diff === 0 ? 30 : -Math.abs(diff) * 24,
                scale: diff === 0 ? 1 : 0.88,
                opacity: Math.abs(diff) > 1 ? 0 : 1,
                duration: 0.45,
              }
            : {
                x: diff * 340,
                rotateY: diff * -28,
                z: diff === 0 ? 50 : -Math.abs(diff) * 30,
                scale: diff === 0 ? 1 : 0.78,
                opacity: Math.abs(diff) > 1 ? 0 : 1,
                duration: 0.5,
              };

        gsap.to(el, {
          ...config,
          zIndex: 10 - Math.abs(diff),
          ease: "power3.out",
          duration: hasLaidOut.current ? config.duration : 0,
          overwrite: "auto",
        });
      });

      hasLaidOut.current = true;
    };

    const nodes = cardRefs.current.filter(Boolean);
    layout();

    mobile.addEventListener("change", layout);
    tablet.addEventListener("change", layout);
    reduce.addEventListener("change", layout);

    return () => {
      mobile.removeEventListener("change", layout);
      tablet.removeEventListener("change", layout);
      reduce.removeEventListener("change", layout);
      gsap.killTweensOf(nodes);
    };
  }, [active, total]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setCompact(mq.matches);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const go = (direction) => {
    setActive((current) => (current + direction + total) % total);
  };

  return (
    <div
      className="flex flex-col items-center"
      aria-roledescription="carousel"
      aria-label="Featured projects"
    >
      <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden sm:h-[530px] md:[perspective:1200px]">
        {cards.map((cardProps, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            onClick={() => {
              if (index !== active) setActive(index);
            }}
            className={`absolute w-[calc(100%-0.5rem)] max-w-[340px] sm:w-[340px] ${
              index === active ? "cursor-default" : "cursor-pointer"
            }`}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div inert={compact && index !== active ? true : undefined}>
              <FeatureCard {...cardProps} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Previous project"
          onClick={() => go(-1)}
          className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-slate-700 shadow-sm"
        >
          <LuChevronLeft />
        </button>
        <div className="flex items-center gap-2" role="tablist" aria-label="Choose a project">
          {cards.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Project ${index + 1}`}
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full ${
                index === active ? "w-6 bg-[#c4674a]" : "w-2.5 bg-black/20"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next project"
          onClick={() => go(1)}
          className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-slate-700 shadow-sm"
        >
          <LuChevronRight />
        </button>
      </div>
    </div>
  );
}
