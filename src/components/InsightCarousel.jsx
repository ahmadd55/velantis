import { useEffect, useRef } from "react";
import gsap from "gsap";
import InsightStatCard from "./InsightStatCard";

const insights = [
  { city: "Riyadh", label: "Avg. price / sqm", value: "4,850 SAR", trend: "up" },
  { city: "Jeddah", label: "Avg. price / sqm", value: "4,120 SAR", trend: "down" },
  { city: "Dammam", label: "Avg. price / sqm", value: "3,640 SAR", trend: "up" },
  { city: "Mecca", label: "Avg. price / sqm", value: "5,300 SAR", trend: "up" },
  { city: "Medina", label: "Avg. price / sqm", value: "3,980 SAR", trend: "down" },
];

export default function InsightCarousel() {
  const trackRef = useRef(null);
  const items = [...insights, ...insights];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const small = window.matchMedia("(max-width: 767px)");
    let tween;

    const play = () => {
      tween?.kill();
      gsap.set(track, { x: 0 });
      const distance = track.scrollWidth / 2;
      if (!distance) return;

      tween = gsap.to(track, {
        x: -distance,
        duration: insights.length * (small.matches ? 7 : 4),
        ease: "none",
        repeat: -1,
      });
    };

    play();

    let resizeTimer;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(play, 150);
    };

    window.addEventListener("resize", onResize);
    small.addEventListener("change", play);

    return () => {
      tween?.kill();
      gsap.set(track, { clearProps: "transform" });
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      small.removeEventListener("change", play);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div ref={trackRef} className="flex w-max gap-4 sm:gap-5">
        {items.map((item, index) => (
          <div
            key={`${item.city}-${index}`}
            aria-hidden={index >= insights.length ? true : undefined}
            className="w-60 shrink-0 sm:w-64"
          >
            <InsightStatCard
              city={item.city}
              label={item.label}
              value={item.value}
              trend={item.trend}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
