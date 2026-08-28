import { summerCamp, companyInfo } from "@/lib/data";
import SummerCampForm from "@/components/SummerCampForm";
import Link from "next/link";
import Image from "next/image";
import WorkshopHeroCarousel from "@/components/WorkshopHeroCarousel";

export const metadata = {
  title: "Robotics & STEM Workshops & Camps 2026 | Mech-E-Tron",
  description: "Hands-on robotics, drone building, and coding workshops and camps for school and college students in Chennai, Hyderabad, and Tirupati. Block your seat.",
  keywords: ["robotics workshop Chennai", "STEM summer camp Hyderabad", "drone building workshop India", "Arduino bootcamp students", "school robotics training"],
  alternates: { canonical: "https://mechetron.com/summer-camp" },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Mech-E-Tron Robotics Workshops & Camps 2026",
  startDate: "2026-05-01",
  endDate: "2026-06-30",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: [
    { "@type": "Place", name: "Mech-E-Tron Chennai", address: { "@type": "PostalAddress", addressLocality: "Chennai", addressRegion: "Tamil Nadu", postalCode: "603002", addressCountry: "IN" } },
    { "@type": "Place", name: "Mech-E-Tron Hyderabad", address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", postalCode: "500007", addressCountry: "IN" } },
  ],
  offers: { "@type": "Offer", price: "2299", priceCurrency: "INR", availability: "https://schema.org/LimitedAvailability", url: "https://mechetron.com/summer-camp" },
  organizer: { "@type": "Organization", name: "Mech-E-Tron", url: "https://mechetron.com" },
  description: "Hands-on robotics, IoT, and drone workshops and camps. Learn from industry expert mentors, build real projects, and earn AICRA certifications.",
  image: "https://mechetron.com/images/og-image.jpg",
};

const upcomingWorkshops = [
  {
    id: "robot",
    badge: "1 Day Workshop",
    title: "Build Your First Robot",
    description: "Learn the basics of robotics by building a working robot.",
    image: "/images/school-robotics.png",
    age: "8+ Years",
    level: "Beginner",
    date: "25 May 2026",
    href: "/courses/robotics-beginner-course"
  },
  {
    id: "arduino",
    badge: "2 Day Workshop",
    title: "Arduino Programming Workshop",
    description: "Learn Arduino programming and create exciting projects.",
    image: "/images/embedded.png",
    age: "10+ Years",
    level: "Beginner",
    date: "01 Jun 2026",
    href: "/courses/arduino-uno-course"
  },
  {
    id: "drone",
    badge: "2 Day Workshop",
    title: "Drone Building & Flying Workshop",
    description: "Build, program and fly your own drone.",
    image: "/images/drone-technology.png",
    age: "12+ Years",
    level: "Intermediate",
    date: "08 Jun 2026",
    href: "/courses/drone-workshop"
  },
  {
    id: "arm",
    badge: "3 Day Workshop",
    title: "Robotic Arm Workshop",
    description: "Understand robotics mechanics and control systems.",
    image: "/images/engineering.png",
    age: "12+ Years",
    level: "Intermediate",
    date: "15 Jun 2026",
    href: "/courses/ai-iot-training"
  },
  {
    id: "esp",
    badge: "3 Day Workshop",
    title: "IoT with ESP32 Workshop",
    description: "Build smart IoT projects using ESP32 & cloud platforms.",
    image: "/images/iot-development.png",
    age: "13+ Years",
    level: "Intermediate",
    date: "22 Jun 2026",
    href: "/courses/ai-iot-training"
  }
];

const campusPrograms = [
  {
    title: "School STEM Programs",
    icon: "school",
    iconBg: "bg-[#10B981] text-white",
    image: "/images/campus-school.png",
    description: "Curriculum-based robotics & coding programs for schools.",
    checklist: [
      "Regular Classes",
      "Lab Setup Support",
      "Teacher Training"
    ],
    href: "/schools"
  },
  {
    title: "College Technical Program",
    icon: "college",
    iconBg: "bg-[#0355BC] text-white",
    image: "/images/campus-college.png",
    description: "Industry-oriented workshops and training for students.",
    checklist: [
      "Technical Workshops",
      "Skill Development",
      "Certification"
    ],
    href: "/courses"
  },
  {
    title: "Campus Club Support",
    icon: "club",
    iconBg: "bg-[#8B5CF6] text-white",
    image: "/images/campus-club.png",
    description: "We help institutions set up Robotics & Innovation Clubs.",
    checklist: [
      "Robotics Club Setup",
      "Mentor Support",
      "Project Guidance"
    ],
    href: "/contact"
  },
  {
    title: "Corporate / Faculty Program",
    icon: "corporate",
    iconBg: "bg-[#F97316] text-white",
    image: "/images/campus-corporate.png",
    description: "Training programs for faculty and working professionals.",
    checklist: [
      "Faculty Development",
      "Hands-on Training",
      "Custom Workshops"
    ],
    href: "/contact"
  }
];

export default function SummerCampPage() {
  return (
    <main className="bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />

      {/* ── 1. Hero Section (50% split, full right column image, height 550px-600px) ── */}
      <section className="relative bg-[#050b14] overflow-hidden min-h-[550px] lg:h-[600px] flex items-stretch text-white">
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-blue/10 blur-[130px] pointer-events-none" />

        <div className="w-full grid lg:grid-cols-2 items-stretch">
          
          {/* Left Content Column (50%) */}
          <div className="flex flex-col justify-center py-12 px-6 sm:px-12 lg:pl-16 xl:pl-24 max-w-[700px] justify-self-end w-full relative z-10">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/45 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
              <span className="text-white/20">&gt;</span>
              <span className="text-white/70">Workshops & Camps</span>
            </nav>

            {/* Headline */}
            <h1 className="text-[40px] sm:text-[48px] lg:text-[64px] font-extrabold text-white leading-[1.1] tracking-tight">
              Workshops & <span className="text-[#FFB400]">Camps</span>
            </h1>
            
            {/* Gradient Subtitle */}
            <div className="mt-3 bg-gradient-to-r from-[#00BFFF] to-[#00E5FF] bg-clip-text text-transparent font-extrabold text-xl lg:text-2xl tracking-wide">
              Learn. Build. Innovate.
            </div>

            {/* Description Paragraph */}
            <p className="mt-4 text-sm sm:text-base text-white/60 leading-relaxed max-w-[550px] font-medium">
              Hands-on workshops and exciting camps designed to spark curiosity, build skills, and inspire young innovators.
            </p>

            {/* Action Buttons Row */}
            <div className="mt-6 flex flex-wrap gap-4 w-full sm:w-auto">
              <Link
                href="#register-now"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#FFB400] text-[#050b14] text-sm font-extrabold hover:bg-[#FFA500] hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_14px_rgba(255,180,0,0.35)] hover:shadow-[0_6px_20px_rgba(255,180,0,0.5)] transition-all duration-300 w-full sm:w-auto text-center"
              >
                <svg className="w-5 h-5 text-[#050b14]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                <span>Book a Workshop</span>
              </Link>

              <a
                href="/MechETron_Brand_Guidelines.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border-2 border-[#FFB400] text-sm font-bold text-white hover:bg-[#FFB400]/10 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_0_15px_rgba(255,180,0,0.2)] transition-all duration-300 w-full sm:w-auto text-center"
              >
                <svg className="w-5 h-5 text-[#FFB400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 4v12m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Download Brochure</span>
              </a>
            </div>

            {/* ── 2. Hero Statistics Bar (4 columns, gap 40px, number 24px) ── */}
            <div className="mt-8 w-full grid grid-cols-2 sm:grid-cols-4 gap-6 xl:gap-10 pt-6 border-t border-white/10">
              {/* Stat 1 */}
              <div className="flex items-start gap-3">
                <div className="w-[28px] h-[28px] text-[#FFB400] flex-shrink-0 mt-0.5">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </div>
                <div>
                  <div className="text-[24px] font-bold text-white leading-none">100+</div>
                  <div className="text-[11px] text-white/50 font-bold mt-1 leading-tight">Workshops Conducted</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-start gap-3">
                <div className="w-[28px] h-[28px] text-[#FFB400] flex-shrink-0 mt-0.5">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <div className="text-[24px] font-bold text-white leading-none">5000+</div>
                  <div className="text-[11px] text-white/50 font-bold mt-1 leading-tight">Students Trained</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-start gap-3">
                <div className="w-[28px] h-[28px] text-[#FFB400] flex-shrink-0 mt-0.5">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" />
                  </svg>
                </div>
                <div>
                  <div className="text-[24px] font-bold text-white leading-none">50+</div>
                  <div className="text-[11px] text-white/50 font-bold mt-1 leading-tight">Schools Covered</div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-start gap-3">
                <div className="w-[28px] h-[28px] text-[#FFB400] flex-shrink-0 mt-0.5">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998" />
                  </svg>
                </div>
                <div>
                  <div className="text-[24px] font-bold text-white leading-none">25+</div>
                  <div className="text-[11px] text-white/50 font-bold mt-1 leading-tight">Expert Mentors</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Image Carousel */}
          <WorkshopHeroCarousel />

        </div>
      </section>

      {/* ── 3. Upcoming Workshops Section (py-20 instead of py-24) ── */}
      <section className="bg-[#f6f7fb] pt-20 pb-12">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-[32px] md:text-[40px] font-display font-extrabold text-[#0F172A] leading-tight">
                Upcoming Workshops
              </h2>
              <p className="text-sm md:text-base text-[#64748B] font-medium mt-1">
                Explore our scheduled hands-on workshops.
              </p>
            </div>
            <Link 
              href="/courses" 
              className="text-[#2563EB] font-bold text-sm hover:text-[#0056BE] transition-colors flex items-center gap-1 group"
            >
              <span>View All Workshops</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* 5-Column Grid with 280px x 420px Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
            {upcomingWorkshops.map((card) => (
              <div
                key={card.id}
                className="group relative bg-white rounded-[16px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col w-full max-w-[280px] min-h-[420px] mx-auto border border-black/[0.02]"
              >
                {/* Image Container with Custom Badge */}
                <div className="relative h-[140px] w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#050b14]/5 group-hover:bg-[#050b14]/0 transition-all duration-300" />
                  
                  {/* Floating Badge */}
                  <span className="absolute top-3 left-3 bg-[#0355BC] text-white text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-full tracking-wider shadow-sm">
                    {card.badge}
                  </span>
                </div>

                {/* Content details */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-[#0F172A] text-[22px] leading-tight mb-2 line-clamp-2 min-h-[52px]">
                    {card.title}
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-[#64748B] line-clamp-2 mb-4">
                    {card.description}
                  </p>

                  {/* Metadata Indicators Section */}
                  <div className="border-t border-[#F1F5F9] pt-3 mt-auto space-y-2.5">
                    {/* Meta 1: Age */}
                    <div className="flex items-center gap-2 text-[11px] text-[#5e6b7a] font-semibold">
                      <svg className="w-3.5 h-3.5 text-[#2563EB] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>{card.age}</span>
                    </div>

                    {/* Meta 2: Level */}
                    <div className="flex items-center gap-2 text-[11px] text-[#5e6b7a] font-semibold">
                      <svg className="w-3.5 h-3.5 text-[#2563EB] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>{card.level}</span>
                    </div>

                    {/* Meta 3: Date */}
                    <div className="flex items-center gap-2 text-[11px] text-[#5e6b7a] font-semibold">
                      <svg className="w-3.5 h-3.5 text-[#2563EB] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      <span>{card.date}</span>
                    </div>
                  </div>

                  {/* Button size exactly height: 42px */}
                  <Link
                    href={card.href}
                    className="mt-4 border border-[#2563EB] text-[#2563EB] text-[11px] font-bold h-[42px] w-full rounded-[8px] flex items-center justify-center hover:bg-[#2563EB] hover:text-white transition-all duration-200"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Campus Programs Section (Header images, rounded 20px, icon absolute overlap) ── */}
      <section className="bg-white pt-4 pb-20">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
          {/* Header Row */}
          <div className="flex flex-col gap-2 mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-[32px] md:text-[40px] font-display font-extrabold text-[#0F172A] leading-tight">
                Campus Programs
              </h2>
              <Link 
                href="/schools" 
                className="text-[#2563EB] font-bold text-sm hover:text-[#0056BE] transition-colors flex items-center gap-1 group flex-shrink-0"
              >
                <span>View All Programs</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
            <p className="text-sm md:text-base text-[#64748B] font-medium leading-relaxed max-w-2xl">
              We partner with schools, colleges and organizations to deliver hands-on STEM learning programs.
            </p>
          </div>

          {/* Grid list of cards with header images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {campusPrograms.map((program, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(15,23,42,0.12)] border border-black/[0.03] flex flex-col h-full hover:-translate-y-1.5 transition-all duration-300 relative"
              >
                {/* Image top container (200px height) */}
                <div className="relative h-[200px] w-full overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#050b14]/10" />
                </div>

                {/* Icon absolutely positioned overlapping bottom of the image (size 56px, left 20px, top 164px for overlap) */}
                <div className={`absolute top-[164px] left-[20px] w-[56px] h-[56px] rounded-full flex items-center justify-center border-4 border-white shadow-md z-10 ${program.iconBg}`}>
                  {program.icon === "school" && (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5" />
                    </svg>
                  )}
                  {program.icon === "college" && (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998" />
                    </svg>
                  )}
                  {program.icon === "club" && (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                  {program.icon === "corporate" && (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>

                {/* Content area below header image (pt-8 because of the overlapping circular icon) */}
                <div className="p-6 pt-8 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-[#0F172A] text-[24px] leading-tight mb-3">
                    {program.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[#64748B] mb-5">
                    {program.description}
                  </p>

                  {/* Checklist */}
                  <ul className="space-y-2.5 mb-6">
                    {program.checklist.map((item, key) => (
                      <li key={key} className="flex items-center gap-2.5 text-[13px] font-medium text-[#475569]">
                        <svg className="w-4 h-4 text-[#10B981] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Details Link - Larger, prominent, solid background, height 48px */}
                  <Link
                    href={program.href}
                    className="mt-auto h-[48px] w-full rounded-xl bg-[#2563EB] text-white hover:bg-[#1d4ed8] shadow-[0_4px_12px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.35)] hover:scale-[1.02] transition-all duration-300 text-sm font-extrabold flex items-center justify-center text-center"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Why Choose Section (Compact gradient container, rounded 24px, padding 50px 40px) ── */}
      <section className="bg-white pb-20">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
          <div className="bg-gradient-to-br from-[#001133] to-[#001B4F] rounded-[24px] py-[50px] px-[40px] border border-white/5 shadow-xl text-white relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
            
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-10 text-center relative z-10">
              Why Choose Our Workshops & Camps?
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-y-8 gap-x-6 text-center relative z-10">
              {/* Feature 1 */}
              <div className="flex flex-col items-center group">
                <div className="w-[56px] h-[56px] rounded-full bg-[#0355BC] flex items-center justify-center shadow-md mb-4 group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-white text-[18px] mb-1.5">Hands-on Learning</h3>
                <p className="text-[14px] text-white/50 leading-relaxed max-w-[140px]">
                  Real projects with practical exposure.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center group">
                <div className="w-[56px] h-[56px] rounded-full bg-[#10B981] flex items-center justify-center shadow-md mb-4 group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-white text-[18px] mb-1.5">Expert Mentors</h3>
                <p className="text-[14px] text-white/50 leading-relaxed max-w-[140px]">
                  Learn from industry professionals.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center group">
                <div className="w-[56px] h-[56px] rounded-full bg-[#EAB308] flex items-center justify-center shadow-md mb-4 group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-white text-[18px] mb-1.5">Certificate</h3>
                <p className="text-[14px] text-white/50 leading-relaxed max-w-[140px]">
                  Participation certificate for all students.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center group">
                <div className="w-[56px] h-[56px] rounded-full bg-[#8B5CF6] flex items-center justify-center shadow-md mb-4 group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-white text-[18px] mb-1.5">Fun & Engaging</h3>
                <p className="text-[14px] text-white/50 leading-relaxed max-w-[140px]">
                  Interactive and engaging learning experience.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="flex flex-col items-center group">
                <div className="w-[56px] h-[56px] rounded-full bg-[#F97316] flex items-center justify-center shadow-md mb-4 group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14v4m0 0l-8 4m8-4l8 4m-8 0v10m0 0l-8-4m0 0V7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-white text-[18px] mb-1.5">Project Takeaway</h3>
                <p className="text-[14px] text-white/50 leading-relaxed max-w-[140px]">
                  Build and take your own projects.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="flex flex-col items-center group">
                <div className="w-[56px] h-[56px] rounded-full bg-[#EC4899] flex items-center justify-center shadow-md mb-4 group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-white text-[18px] mb-1.5">Career Exposure</h3>
                <p className="text-[14px] text-white/50 leading-relaxed max-w-[140px]">
                  Guidance for future career opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Process Section (70px circle, 2px connecting line, compact py-20) ── */}
      <section className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[32px] md:text-[40px] font-display font-extrabold text-[#0F172A] leading-tight">
              Our Workshop & Camp Process
            </h2>
          </div>

          {/* Stepper container */}
          <div className="relative">
            {/* Horizontal connection line exactly height 2px, center of 70px circle (top-35px) */}
            <div className="absolute top-[35px] left-[10%] right-[10%] h-[2px] bg-[#D1D5DB] hidden md:block z-0" />

            {/* Grid for Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10 text-center">
              
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-[70px] h-[70px] rounded-full bg-white border-2 border-[#E2E8F0] flex items-center justify-center shadow-sm mb-4 relative z-10 bg-white">
                  <svg className="w-5 h-5 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                </div>
                <h4 className="font-display font-bold text-brand-ink text-base mb-1">Choose Program</h4>
                <p className="text-[12px] text-[#64748B] leading-relaxed max-w-[160px]">
                  Select the workshop or camp that interests you.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-[70px] h-[70px] rounded-full bg-white border-2 border-[#E2E8F0] flex items-center justify-center shadow-sm mb-4 relative z-10 bg-white">
                  <svg className="w-5 h-5 text-[#8B5CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h4 className="font-display font-bold text-brand-ink text-base mb-1">Register</h4>
                <p className="text-[12px] text-[#64748B] leading-relaxed max-w-[160px]">
                  Fill the registration form and confirm your seat.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-[70px] h-[70px] rounded-full bg-white border-2 border-[#E2E8F0] flex items-center justify-center shadow-sm mb-4 relative z-10 bg-white">
                  <svg className="w-5 h-5 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h4 className="font-display font-bold text-brand-ink text-base mb-1">Learn & Build</h4>
                <p className="text-[12px] text-[#64748B] leading-relaxed max-w-[160px]">
                  Attend the sessions and build exciting projects.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center">
                <div className="w-[70px] h-[70px] rounded-full bg-white border-2 border-[#E2E8F0] flex items-center justify-center shadow-sm mb-4 relative z-10 bg-white">
                  <svg className="w-5 h-5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-display font-bold text-brand-ink text-base mb-1">Get Certified</h4>
                <p className="text-[12px] text-[#64748B] leading-relaxed max-w-[160px]">
                  Receive certificate of participation.
                </p>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center">
                <div className="w-[70px] h-[70px] rounded-full bg-white border-2 border-[#E2E8F0] flex items-center justify-center shadow-sm mb-4 relative z-10 bg-white">
                  <svg className="w-5 h-5 text-[#EC4899]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-display font-bold text-brand-ink text-base mb-1">Apply & Innovate</h4>
                <p className="text-[12px] text-[#64748B] leading-relaxed max-w-[160px]">
                  Use your skills to create innovative solutions.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 7. CTA Section (40% image on left, fill entire side, 60% content on right) ── */}
      <section className="bg-white pb-20">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
          <div className="bg-[#0b1424] rounded-3xl overflow-hidden shadow-xl grid lg:grid-cols-10 items-stretch">
            
            {/* Left 40% Image Column (lg:col-span-4 of 10-column layout) */}
            <div className="lg:col-span-4 relative min-h-[300px] lg:min-h-0 w-full">
              <Image
                src="/images/workshop-kids-lego.png"
                alt="Two kids building robotics tracked vehicle in lab"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Right 60% Content Column (lg:col-span-6 of 10-column layout) */}
            <div className="lg:col-span-6 p-8 md:p-12 relative z-10 flex flex-col justify-center">
              <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 blur-[80px] -mr-40 -mt-40 pointer-events-none" />

              <div className="relative z-10 max-w-xl text-center lg:text-left">
                <h2 className="text-2xl md:text-4xl font-display font-extrabold text-white mb-4 leading-tight">
                  Ready to Build <span className="text-[#FFC107]">Something Amazing?</span>
                </h2>
                <p className="text-sm md:text-base text-white/70 leading-relaxed font-medium mb-8">
                  Join our workshops and camps today and start your journey into the world of robotics and innovation.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  {/* Book a Workshop CTA */}
                  <Link
                    href="#register-now"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFB400] text-[#050b14] text-xs font-extrabold hover:bg-[#FFA500] transition-colors w-full sm:w-auto hover:-translate-y-0.5 active:translate-y-0 duration-200 shadow-md"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    <span>Book a Workshop</span>
                  </Link>

                  {/* Chat on WhatsApp CTA */}
                  <a
                    href={`https://wa.me/${companyInfo.whatsapp}?text=Hi, I want to inquire about the workshops and camps!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-[#25D366]/40 text-[#25D366] text-xs font-bold hover:bg-[#25D366]/5 hover:border-[#25D366] transition-colors w-full sm:w-auto hover:-translate-y-0.5 active:translate-y-0 duration-200"
                  >
                    <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                      <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.457 3.477 1.328 4.988L2 22l5.22-.1.033.018c1.45.897 3.125 1.373 4.834 1.373 5.507 0 9.988-4.482 9.988-9.988 0-5.507-4.482-9.988-9.988-9.988zm0 18.293c-1.547 0-3.06-.412-4.385-1.19l-.315-.187-3.26.062.064-3.178-.206-.328c-.854-1.357-1.305-2.93-1.305-4.56C2.607 6.444 6.824 2.227 12.012 2.227c5.188 0 9.405 4.217 9.405 9.405 0 5.188-4.217 9.406-9.405 9.406zm4.846-6.612c-.266-.134-1.573-.775-1.817-.864-.244-.088-.422-.132-.6.133-.178.266-.689.865-.844 1.042-.156.177-.311.2-.577.067-.266-.134-1.127-.415-2.147-1.325-.793-.707-1.329-1.58-1.485-1.846-.156-.266-.017-.41.117-.543.12-.12.266-.31.4-.465.133-.155.178-.266.266-.443.089-.177.044-.332-.022-.465-.067-.133-.6-1.44-.822-1.972-.216-.52-.436-.45-.6-.458-.155-.008-.333-.008-.51-.008-.178 0-.466.066-.71.332-.244.266-.932.91-.932 2.217s.954 2.57 1.087 2.747c.133.177 1.878 2.87 4.548 4.023.635.274 1.132.438 1.519.562.639.203 1.22.175 1.68.106.513-.077 1.573-.642 1.795-1.263.222-.62.222-1.152.156-1.263-.067-.11-.244-.199-.51-.332z" />
                    </svg>
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── 8. Registration Section (50% benefits, 50% form, strong form shadow 0 12px 30px) ── */}
      <section id="register-now" className="bg-white pb-20 border-t border-[#F1F5F9] pt-16">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left 50% Benefits */}
            <div className="lg:sticky lg:top-24">
              <h2 className="text-[32px] md:text-[40px] font-display font-extrabold text-[#0F172A] leading-tight">
                Secure Your Spot
              </h2>
              <p className="mt-4 text-brand-muted text-base md:text-lg leading-relaxed max-w-xl">
                Don't miss out on the most exciting STEM event of the year. Filling this form blocks your seat for 48 hours while our team contacts you with schedule confirmation and payment links.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange text-xl">✨</div>
                  <div>
                    <h4 className="font-bold text-brand-ink">Take-Home Robot</h4>
                    <p className="text-sm text-brand-muted">The robot you build is yours to take home and keep experimenting!</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0355BC]/10 flex items-center justify-center text-[#0355BC] text-xl">🏅</div>
                  <div>
                    <h4 className="font-bold text-brand-ink">Get Certified</h4>
                    <p className="text-sm text-brand-muted">Receive a formal certificate of completion recognized by our partner schools.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 50% Form (increased shadow to 0 12px 30px) */}
            <div className="w-full shadow-[0_12px_30px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden bg-white">
              <SummerCampForm />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
