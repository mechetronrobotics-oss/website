
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/images/home_page_1.png",
  "/images/home_page_2.png",
  "/images/home_page_3.png"
];

export default function Hero() {
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
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex self-start items-center gap-2 rounded-pill border border-brand-accent/30 bg-white/5 px-4 py-1.5 text-[11px] font-bold text-brand-accent uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              LEARN &nbsp;|&nbsp; BUILD &nbsp;|&nbsp; INNOVATE
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-display font-bold text-white leading-[1.1] mb-5">
              Hands-on Robotics &amp; AI<br />
              Training for{" "}
              <span className="gradient-text">Young Innovators</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-white/65 max-w-lg leading-relaxed mb-8">
              Practical STEM education for Grade 6 to 12 students.
              Build real robots, learn coding, and develop future-ready skills.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "#f59e0b" }}
              >
                📅 Book Free Demo Class
              </Link>
              <a
                href="https://wa.me/918148435246?text=Hi%2C%20I%27m%20interested%20in%20Mech-E-Tron%20courses"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "#25D366" }}
              >
                <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                  <path d="M16 0C7.163 0 0 7.163 0 16c0 2.824.737 5.472 2.027 7.77L0 32l8.453-2.018A15.937 15.937 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.091a13.059 13.059 0 01-6.67-1.828l-.478-.285-4.956 1.183 1.243-4.836-.315-.497A13.018 13.018 0 012.909 16C2.909 8.769 8.769 2.909 16 2.909S29.091 8.769 29.091 16 23.231 29.091 16 29.091zm7.164-9.734c-.393-.196-2.328-1.148-2.689-1.28-.362-.13-.625-.196-.887.197-.262.392-1.016 1.28-1.245 1.542-.229.262-.458.295-.85.098-.393-.197-1.66-.614-3.163-1.954-1.169-1.044-1.958-2.333-2.187-2.726-.229-.392-.024-.604.172-.8.177-.176.393-.458.59-.688.196-.23.262-.393.393-.655.13-.262.065-.491-.033-.688-.098-.196-.887-2.136-1.214-2.924-.32-.768-.644-.664-.887-.676l-.754-.013c-.262 0-.688.098-1.049.491-.36.393-1.377 1.345-1.377 3.282s1.41 3.806 1.607 4.068c.197.262 2.777 4.24 6.729 5.944.94.407 1.673.65 2.245.831.943.3 1.802.257 2.48.156.756-.112 2.328-.952 2.657-1.871.327-.92.327-1.708.229-1.871-.098-.164-.36-.262-.754-.458z" />
                </svg>
                Chat on WhatsApp
              </a>
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
                className="glass border-neon px-4 py-3 min-w-[168px] shadow-glow-sm rounded-xl backdrop-blur-md"
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
