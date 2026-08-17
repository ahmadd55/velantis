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

  useEffect(() => {
    const track = trackRef.current;

    const items = gsap.utils.toArray(track.children);
    const totalWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: -totalWidth,
      duration: insights.length * 4,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    return () => tween.kill();
  }, []);

  return (
    <div className="overflow-hidden">
      <div ref={trackRef} className="flex gap-5 w-max">
        {[...insights, ...insights].map((item, index) => (
          <div key={index} className="w-64 shrink-0">
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