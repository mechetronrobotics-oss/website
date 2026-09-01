"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import DownloadBrochureButton from "@/components/DownloadBrochureButton";

const images = [
  "/images/home_page_1.png",
  "/images/home_page_2.png",
  "/images/home_page_3.png"
];

export default function CoursesHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // changes image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-brand-ink" style={{ minHeight: "90vh" }}>

      {/* Background: carousel of images with smooth cross-fade */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Dark overlay on left so text is readable */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(10,14,26,0.97) 0%, rgba(10,14,26,0.90) 30%, rgba(10,14,26,0.55) 55%, rgba(10,14,26,0.15) 75%, rgba(10,14,26,0.05) 100%)",
          }}
        />
        {/* Subtle top+bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/30 via-transparent to-brand-ink/40 z-10" />
      </div>

      {/* Grid / circuit texture */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none z-10" />

      <div className="container-x relative flex items-center w-full z-20" style={{ minHeight: "90vh" }}>
        <div className="w-full grid lg:grid-cols-2 gap-8 items-center py-16 lg:py-20">

          {/* LEFT: Text content */}
          <div className="flex flex-col justify-center items-start">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/45 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
              <span className="text-white/20">&gt;</span>
              <span className="text-white/70">Courses</span>
            </nav>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-display font-bold text-white leading-[1.1] mb-5">
              Explore Our <span className="gradient-text">Courses</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-white/65 max-w-lg leading-relaxed mb-8">
              From School Robotics to Advanced Engineering Programs, we have the perfect course for every learner.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10 w-full sm:w-auto">
              {/* Book Free Demo Button (Solid Yellow Filled) */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#FFB400] text-[#050b14] text-sm font-extrabold hover:bg-[#FFA500] hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_14px_rgba(255,180,0,0.35)] hover:shadow-[0_6px_20px_rgba(255,180,0,0.5)] transition-all duration-300 w-full sm:w-auto text-center"
              >
                <svg className="w-5 h-5 text-[#050b14]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                <span>Book Free Demo Class</span>
              </Link>

              {/* Download Brochure Button (Gold Outline) */}
              <DownloadBrochureButton />
            </div>

            {/* Bottom feature badges */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: "📈", text: "Beginner to Advanced Level" },
                { icon: "🔩", text: "Hands-on Learning" },
                { icon: "🎓", text: "Certificate & Mentorship" },
                { icon: "🏆", text: "Competition Exposure" },
              ].map((b) => (
                <div
                  key={b.text}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/8 border border-white/10 text-xs text-white/65 font-medium backdrop-blur-sm"
                >
                  <span>{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Feature pills floating over the image */}
          <div className="hidden lg:flex flex-col items-end justify-center gap-4 pr-4">
            {[
              { icon: "🔩", title: "30+", sub: "Projects to Build" },
              { icon: "🎯", title: "Learn by Doing", sub: "Real Skills, Real Confidence" },
              { icon: "🚀", title: "Future Ready", sub: "Robotics, AI & More" },
            ].map((pill) => (
              <div
                key={pill.title}
                className="glass border-neon px-4 py-3 min-w-[168px] shadow-glow-sm rounded-xl backdrop-blur-md animate-fade-in-up"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{pill.icon}</span>
                  <div>
                    <div className="text-white font-bold text-sm leading-tight">{pill.title}</div>
                    <div className="text-white/55 text-[11px] mt-0.5 leading-tight">{pill.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
