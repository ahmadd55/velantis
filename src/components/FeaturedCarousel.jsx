import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import FeatureCard from "./FeatureCard";

export default function FeaturedCarousel({ cards = [{}, {}, {}] }) {
  
  const [active, setActive] = useState(0);
  const cardRefs = useRef([]);

  const total = cards.length;

  
  const getOffset = (index) => {
    let diff = index - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  useEffect(() => {
    cardRefs.current.forEach((el, index) => {
      if (!el) return;
      const offset = getOffset(index);

      gsap.to(el, {
        x: offset * 340,
        rotateY: offset * -30,
        z: offset === 0 ? 50 : -Math.abs(offset) * 30,
        scale: offset === 0 ? 1 : 0.75,
        opacity: Math.abs(offset) > 1 ? 0 : 1,
        zIndex: 10 - Math.abs(offset),
        duration: 0.5,
        ease: "power3.out",
      });
    });
  }, [active]);

  const handleCardClick = (index) => {
    if (index === active) return;
    setActive(index);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-full flex items-center justify-center"
        style={{ height: 520, perspective: 1200 }}
      >
        {cards.map((cardProps, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            onClick={() => handleCardClick(index)}
            className="absolute w-[340px] cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
          >
            <FeatureCard {...cardProps} />
          </div>
        ))}
      </div>
    </div>
  );
}
