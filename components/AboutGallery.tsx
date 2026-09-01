"use client";

import { useState, useEffect } from "react";
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
  }
];

const SECTIONS = [
  {
    title: "SCHOOL STEM WORKSHOP",
    subtitle: "Today’s Learners. Tomorrow’s Innovators.",
    content: (
      <>
        <p className="mb-4">
          At Mech-E-Tron Robotics Lab, students don&apos;t just watch technology —
          they experience it, experiment with it, and create with it.
        </p>
        <p className="mb-4">
          From their first robot to their first breakthrough,
          every challenge builds confidence, creativity, technical thinking, and the courage to innovate.
        </p>
        <p>
          We are not just teaching robotics. We are building the minds that will build tomorrow.
        </p>
      </>
    ),
    images: GALLERY_IMAGES.slice(0, 4),
  },
  {
    title: "A Summer That Builds More Than Robots",
    subtitle: "",
    content: (
      <>
        <p className="mb-4 italic text-gray-700">
          “We don&apos;t want students to spend their summer only learning about technology. We want them to experience it, experiment with it, and create something of their own.”
        </p>
        <p>
          At Mech-E-Tron, the classroom becomes a laboratory, the student becomes an engineer, and every project becomes an opportunity to innovate.
        </p>
      </>
    ),
    images: GALLERY_IMAGES.slice(4, 8),
  },
  {
    title: "School Robotics Lab Sessions",
    subtitle: "From Classroom Learning to Real-World Creation",
    content: (
      <>
        <p className="mb-4 font-semibold text-gray-800">
          At Mech-E-Tron, our school lab sessions bring STEM education to life through hands-on robotics and electronics learning.
        </p>
        <p>
          Students work in teams to assemble circuits, build robotic systems, write and test programs, troubleshoot challenges, and bring their ideas to life. Guided by experienced instructors, every session encourages students to think independently, collaborate confidently, and learn through experimentation.
        </p>
      </>
    ),
    images: GALLERY_IMAGES.slice(8, 12),
  }
];

const ImageCarousel = ({ images }: { images: GalleryImage[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden border border-gray-300">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={img.src}
            alt={img.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ))}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-white scale-125 shadow-md" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function AboutGallery() {
  return (
    <section id="gallery-section" className="bg-[#0F1724] py-20 relative overflow-hidden">
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

        {/* Main white container similar to the user's screenshot */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {SECTIONS.map((section, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                {/* Carousel */}
                <div className="w-full mb-8">
                  <ImageCarousel images={section.images} />
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col items-center px-2">
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 uppercase tracking-wide">
                    {section.title}
                  </h3>
                  
                  {section.subtitle && (
                    <h4 className="text-sm md:text-base font-semibold text-gray-600 mb-4">
                      {section.subtitle}
                    </h4>
                  )}
                  
                  <div className="text-sm text-gray-600 leading-relaxed max-w-sm">
                    {section.content}
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

