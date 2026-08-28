"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  title: string;
  description: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/images/mechetron_gallary/WhatsApp Image 2026-08-16 at 4.34.48 PM.jpeg",
    title: "Robot Assembly Session",
    description: "Students learning mechanical design and basic electronics by constructing mobile robots."
  },
  {
    src: "/images/mechetron_gallary/WhatsApp Image 2026-08-16 at 4.34.49 PM (1).jpeg",
    title: "School STEM Workshop",
    description: "Collaborative school training program focused on introductory electronics and components wiring."
  },
  {
    src: "/images/mechetron_gallary/WhatsApp Image 2026-08-16 at 4.34.49 PM.jpeg",
    title: "Quadcopter Calibration",
    description: "Hands-on calibration and flight controller configuration during a specialized drone workshop."
  },
  {
    src: "/images/mechetron_gallary/WhatsApp Image 2026-08-16 at 4.34.50 PM.jpeg",
    title: "Obstacle Avoidance Bot Build",
    description: "Wiring ultrasonic sensors to build autonomous robots that navigate paths dynamically."
  },
  {
    src: "/images/mechetron_gallary/WhatsApp Image 2026-08-16 at 4.34.51 PM.jpeg",
    title: "Interactive Training Lab",
    description: "Students actively debugging Arduino code and testing servo motor behaviors in real-time."
  },
  {
    src: "/images/mechetron_gallary/WhatsApp Image 2026-08-16 at 4.34.53 PM.jpeg",
    title: "STEM Innovation Exhibition",
    description: "Showcasing student-designed hardware and smart IoT systems to judges and visitors."
  },
  {
    src: "/images/mechetron_gallary/WhatsApp Image 2026-08-16 at 4.34.54 PM (1).jpeg",
    title: "Aerodynamics & UAV Design",
    description: "Explaining flight mechanics and drone frames selection in our advanced training modules."
  },
  {
    src: "/images/mechetron_gallary/WhatsApp Image 2026-08-16 at 4.34.54 PM (2).jpeg",
    title: "Classroom Lab Experience",
    description: "Engaged learning environment where every student builds and tests their own electronics layout."
  },
  {
    src: "/images/mechetron_gallary/WhatsApp Image 2026-08-16 at 4.34.54 PM.jpeg",
    title: "Line Follower Programming",
    description: "Programming IR sensors and L298N motor drivers for precise black-line navigation."
  },
  {
    src: "/images/mechetron_gallary/WhatsApp Image 2026-08-16 at 4.34.55 PM (1).jpeg",
    title: "Championship Achievement",
    description: "Celebrating student successes and certificate distribution at state robotics championships."
  },
  {
    src: "/images/mechetron_gallary/WhatsApp Image 2026-08-16 at 4.34.55 PM.jpeg",
    title: "Drone Frame Assembly",
    description: "Hands-on assembly of brushless motors and electronic speed controllers (ESCs)."
  },
  {
    src: "/images/mechetron_gallary/WhatsApp Image 2026-08-16 at 4.34.56 PM (1).jpeg",
    title: "Group Project Debugging",
    description: "Mentors guiding a small group of students on circuit connections and logical programming."
  },
  {
    src: "/images/mechetron_gallary/WhatsApp Image 2026-08-16 at 4.34.56 PM (2).jpeg",
    title: "Sensor Integration Lab",
    description: "Interfacing multi-sensor modules with Arduino for sophisticated hardware feedback."
  },
  {
    src: "/images/mechetron_gallary/WhatsApp Image 2026-08-16 at 4.34.56 PM.jpeg",
    title: "Proud Innovators Show",
    description: "Students proudly displaying their completed project prototypes during the final showcase."
  }
];

export default function AboutGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Handlers for navigating lightbox
  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1;
    });
  }, [lightboxIndex]);

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1;
    });
  }, [lightboxIndex]);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, showPrev, showNext, closeLightbox]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <section id="gallery-section" className="bg-[#0F1724] py-20 text-white relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#0355BC]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-[#1DA5FA]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FFB400] text-xs font-bold uppercase tracking-wider mb-2 block">
            Vibrant Ecosystem
          </span>
          <h2 className="text-3xl md:text-[40px] font-display font-extrabold text-white leading-tight mb-4">
            Our Learning Ecosystem in Action
          </h2>
          <p className="text-white/60 text-sm md:text-base leading-relaxed">
            A visual showcase of MechEtron&apos;s hands-on workshops, drone pilot training, advanced robotics modules, and student-led exhibitions.
          </p>
        </div>

        {/* Grid Display — all images in one place, no filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {GALLERY_IMAGES.map((img, index) => (
            <div
              key={img.src}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-2xl overflow-hidden border border-white/5 bg-[#172234] shadow-[0_4px_25px_rgba(0,0,0,0.25)] hover:border-[#1DA5FA]/50 hover:shadow-glow-sm transition-all duration-500 cursor-pointer flex flex-col h-[340px] animate-fade-in"
            >
              {/* Image Frame */}
              <div className="relative w-full h-[220px] overflow-hidden bg-slate-900 flex-shrink-0">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1724]/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
              </div>

              {/* Text Area */}
              <div className="p-5 flex flex-col flex-grow justify-between bg-[#172234]">
                <div>
                  <h3 className="font-display font-extrabold text-white text-base leading-snug group-hover:text-[#1DA5FA] transition-colors duration-300">
                    {img.title}
                  </h3>
                  <p className="text-white/50 text-[11px] leading-relaxed mt-1.5 line-clamp-2">
                    {img.description}
                  </p>
                </div>
                <div className="flex items-center text-[10px] font-bold text-[#1DA5FA] mt-2 group-hover:translate-x-1 transition-transform duration-300">
                  <span>View Larger</span>
                  <span className="ml-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* IMMERSIVE LIGHTBOX OVERLAY */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full backdrop-blur-md transition-all duration-200 z-[10000]"
            onClick={closeLightbox}
            aria-label="Close Lightbox"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation - Prev */}
          <button
            className="absolute left-4 md:left-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all duration-200 z-[10000]"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous Image"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Canvas Container */}
          <div
            className="relative w-full max-w-[1000px] h-[60vh] md:h-[70vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GALLERY_IMAGES[lightboxIndex].src}
              alt={GALLERY_IMAGES[lightboxIndex].title}
              fill
              className="object-contain rounded-lg animate-scale-up"
              sizes="100vw"
              priority
            />
          </div>

          {/* Navigation - Next */}
          <button
            className="absolute right-4 md:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all duration-200 z-[10000]"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next Image"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Info Card Footer */}
          <div
            className="w-full max-w-[650px] bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-6 text-center mt-6 z-[10000]"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="text-xl font-display font-black text-white leading-tight">
              {GALLERY_IMAGES[lightboxIndex].title}
            </h4>
            <p className="text-white/70 text-sm mt-2 max-w-xl mx-auto leading-relaxed">
              {GALLERY_IMAGES[lightboxIndex].description}
            </p>
            <div className="text-[11px] text-white/40 mt-4 font-bold tracking-wider">
              IMAGE {lightboxIndex + 1} OF {GALLERY_IMAGES.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
