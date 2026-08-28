"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/workshop_1.jpeg",
  "/images/workshop_2.jpeg",
  "/images/workshop_3.jpeg",
  "/images/workshop_4.jpeg",
  "/images/workshop_5.jpeg",
  "/images/workshop_6.jpeg",
];

export default function WorkshopHeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500); // changes image every 4.5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full min-h-[450px] lg:min-h-0 w-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Workshop background ${index + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}
      {/* Subtle left edge overlay for grid blending */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050b14] to-transparent pointer-events-none hidden lg:block opacity-70 z-10" />
    </div>
  );
}
