"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface CategoryCard {
  id: string;
  title: string;
  description: string;
  stats: string;
  image: string;
  icon: string;
  iconBg: string;
  href: string;
}

const filterTabs = [
  { id: "all", label: "All Courses", icon: "all" },
  { id: "school", label: "School Programs", icon: "school" },
  { id: "engineering", label: "Engineering Programs", icon: "engineering" },
  { id: "robotics-ai", label: "Robotics & AI", icon: "robotics-ai" },
  { id: "embedded", label: "Embedded Systems", icon: "embedded" },
  { id: "iot", label: "IoT", icon: "iot" },
  { id: "programming", label: "Programming", icon: "programming" },
  { id: "design-electronics", label: "Design & Electronics", icon: "design-electronics" },
  { id: "others", label: "Others", icon: "others" },
];

const categoriesData: CategoryCard[] = [
  {
    id: "school",
    title: "School Robotics Programs",
    description: "Hands-on robotics learning for school students (Grade 3 - 12).",
    stats: "5 Courses | 40+ Projects",
    image: "/images/school-robotics.png",
    icon: "school-robot",
    iconBg: "bg-[#0355BC] text-white",
    href: "/courses/robotics-beginner-course",
  },
  {
    id: "engineering",
    title: "Engineering Programs",
    description: "Advanced engineering courses for college students & professionals.",
    stats: "12 Courses | 100+ Projects",
    image: "/images/engineering.png",
    icon: "engineering",
    iconBg: "bg-[#10B981] text-white",
    href: "/courses/ai-iot-training",
  },
  {
    id: "robotics-ai",
    title: "Robotics & AI",
    description: "Learn ROS, Gazebo, RViz, AI & ML and autonomous systems.",
    stats: "8 Courses | 60+ Projects",
    image: "/images/robotics-ai.png",
    icon: "robotics-ai",
    iconBg: "bg-[#8B5CF6] text-white",
    href: "/courses/robotics-beginner-course",
  },
  {
    id: "embedded",
    title: "Embedded Systems",
    description: "Arduino, ESP32, Raspberry Pi, Embedded C & more.",
    stats: "8 Courses | 70+ Projects",
    image: "/images/embedded.png",
    icon: "embedded",
    iconBg: "bg-[#F97316] text-white",
    href: "/courses/arduino-uno-course",
  },
  {
    id: "iot",
    title: "IoT Development",
    description: "Build smart IoT solutions using sensors, cloud & automation.",
    stats: "6 Courses | 50+ Projects",
    image: "/images/iot-development.png",
    icon: "iot",
    iconBg: "bg-[#14B8A6] text-white",
    href: "/courses/ai-iot-training",
  },
  {
    id: "programming",
    title: "Programming",
    description: "Python, C, C++, HTML and more to build strong coding skills.",
    stats: "6 Courses | 40+ Projects",
    image: "/images/programming.png",
    icon: "programming",
    iconBg: "bg-[#1E3A8A] text-white",
    href: "/contact",
  },
  {
    id: "design-electronics",
    title: "PCB Design & Manufacturing",
    description: "Learn PCB design with KiCad and manufacturing process.",
    stats: "4 Courses | 25+ Projects",
    image: "/images/pcb-design.png",
    icon: "circuit-trace",
    iconBg: "bg-[#EAB308] text-white",
    href: "/services/prototype",
  },
  {
    id: "others",
    title: "Drone Technology",
    description: "Drone design, programming and autonomous flight training.",
    stats: "4 Courses | 35+ Projects",
    image: "/images/drone-technology.png",
    icon: "quadcopter",
    iconBg: "bg-[#EC4899] text-white",
    href: "/courses/drone-workshop",
  },
];

// Helper to render Tab SVGs
function TabIcon({ type }: { type: string }) {
  const colorClass = "text-current";
  switch (type) {
    case "all":
      return (
        <svg className={`w-5 h-5 flex-shrink-0 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
        </svg>
      );
    case "school":
      return (
        <svg className={`w-5 h-5 flex-shrink-0 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5" />
        </svg>
      );
    case "engineering":
      return (
        <svg className={`w-5 h-5 flex-shrink-0 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
        </svg>
      );
    case "robotics-ai":
      return (
        <svg className={`w-5 h-5 flex-shrink-0 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case "embedded":
      return (
        <svg className={`w-5 h-5 flex-shrink-0 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="5" width="14" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9V9zM9 1v4M15 1v4M9 19v4M15 19v4M20 9h3M20 15h3M1 9h4M1 15h4" />
        </svg>
      );
    case "iot":
      return (
        <svg className={`w-5 h-5 flex-shrink-0 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01M5.636 13.929a9 9 0 0112.728 0M3.162 11.455a12.5 12.5 0 0117.676 0" />
        </svg>
      );
    case "programming":
      return (
        <svg className={`w-5 h-5 flex-shrink-0 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case "design-electronics":
      return (
        <svg className={`w-5 h-5 flex-shrink-0 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "others":
      return (
        <svg className={`w-5 h-5 flex-shrink-0 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      );
    default:
      return null;
  }
}

// Helper to render Card Badge SVGs
function CardBadgeIcon({ type }: { type: string }) {
  switch (type) {
    case "school-robot":
      return (
        <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4M8 15h.01M16 15h.01M9 18h6" />
        </svg>
      );
    case "engineering":
      return (
        <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
        </svg>
      );
    case "robotics-ai":
      return (
        <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case "embedded":
      return (
        <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="5" width="14" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9V9zM9 1v4M15 1v4M9 19v4M15 19v4M20 9h3M20 15h3M1 9h4M1 15h4" />
        </svg>
      );
    case "iot":
      return (
        <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01M5.636 13.929a9 9 0 0112.728 0M3.162 11.455a12.5 12.5 0 0117.676 0" />
        </svg>
      );
    case "programming":
      return (
        <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case "circuit-trace":
      return (
        <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="18" r="2" />
          <circle cx="18" cy="6" r="2" />
          <path d="M8 6h8M6 8v8M18 8v8" strokeLinecap="round" />
          <circle cx="6" cy="18" r="2" />
          <path d="M8 18h8M12 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      );
    case "quadcopter":
      return (
        <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="2" />
          <path d="M7.5 7.5l9 9M7.5 16.5l9-9" strokeLinecap="round" />
          <circle cx="6" cy="6" r="1.5" />
          <circle cx="18" cy="6" r="1.5" />
          <circle cx="6" cy="18" r="1.5" />
          <circle cx="18" cy="18" r="1.5" />
          <path d="M4 6h4M16 6h4M4 18h4M16 18h4" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default function CoursesFilterList() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCategories = activeTab === "all" 
    ? categoriesData 
    : categoriesData.filter(cat => cat.id === activeTab);

  return (
    <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-16">
      {/* ── Section Header (Now at the top of the Course Categories Section) ── */}
      <div className="mb-10 text-center lg:text-left">
        <h2 className="text-[32px] md:text-[48px] font-display font-extrabold text-[#0F172A] leading-tight mb-3">
          Course Categories
        </h2>
        <p className="text-base md:text-[18px] text-[#64748B] font-medium leading-relaxed max-w-2xl">
          Choose a category to explore our industry-focused training programs.
        </p>
      </div>

      {/* ── Tabs List Row (Now below the Section Header) ── */}
      <div className="mb-12 relative z-10">
        <div className="bg-white rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-2.5 border border-black/[0.04]">
          <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap scrollbar-none py-1 justify-start lg:justify-between">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group flex flex-col items-center justify-center gap-1.5 px-3 py-3 rounded-[16px] text-xs font-semibold tracking-wide transition-all min-w-[110px] lg:min-w-0 lg:flex-1 border ${
                    isActive
                      ? "bg-[#2563EB] text-white shadow-md shadow-brand-blue/10 border-[#2563EB]"
                      : "bg-transparent text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#2563EB] border-transparent"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    isActive 
                      ? "bg-white/20 text-white" 
                      : "bg-[#F1F5F9] text-[#64748B] group-hover:bg-[#2563EB]/10 group-hover:text-[#2563EB]"
                  }`}>
                    <TabIcon type={tab.icon} />
                  </div>
                  <span className="text-[11px] leading-tight text-center whitespace-normal max-w-[95px] break-words">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Course Categories Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredCategories.map((card) => (
          <div
            key={card.id}
            className="relative group bg-white rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 flex flex-col h-full w-full max-w-[340px] mx-auto"
            style={{ transition: 'all 0.3s ease' }}
          >
            {/* Card Image - Consistent height */}
            <div className="relative h-[160px] w-full overflow-hidden rounded-t-[20px]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-ink/5 group-hover:bg-brand-ink/0 transition-colors duration-300" />
            </div>

            {/* Floating Circular Icon Badge - position top: 130px, left: 20px, size: 64px, rounded-full, custom shadow */}
            <div 
              className={`absolute top-[130px] left-[20px] w-[64px] h-[64px] rounded-full flex items-center justify-center border-4 border-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] z-10 ${card.iconBg}`}
            >
              <CardBadgeIcon type={card.icon} />
            </div>

            {/* Card content - padded to prevent overlapping the badge */}
            <div className="p-6 pt-10 flex flex-col flex-1">
              <h3 className="font-display font-bold text-[#0F172A] text-[32px] leading-tight mb-3">
                {card.title}
              </h3>
              <p className="text-[15px] leading-[1.7] text-[#64748B] mb-5 line-clamp-2">
                {card.description}
              </p>

              <div className="border-t border-[#F1F5F9] pt-4 mt-auto flex items-center justify-between">
                <span className="text-[14px] font-medium text-[#475569]">
                  {card.stats}
                </span>
                <Link
                  href={card.href}
                  className="text-[14px] font-semibold text-[#2563EB] flex items-center gap-1 hover:text-[#0056BE] transition-colors duration-300 group/link"
                >
                  <span>Explore Courses</span>
                  <span className="transition-transform duration-300 ease-in-out group-hover/link:translate-x-[4px] group-hover:translate-x-[4px]">→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
