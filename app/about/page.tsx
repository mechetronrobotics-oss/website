import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/lib/data";
import AboutGallery from "@/components/AboutGallery";

/* ── SEO ─────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "About Us | Mech-E-Tron — S.T.E.M Robotics",
  description:
    "Inspiring Young Minds, Building Innovation. Creating a better tomorrow through Robotics, AI, and Practical STEM Education. Official AICRA District Coordinator.",
  keywords: [
    "about Mech-E-Tron",
    "AICRA District Coordinator",
    "STEM robotics India",
    "IAF drone instructor",
    "robotics education Hyderabad",
    "robotics education Chennai",
    "MSME robotics India",
    "ISO certified robotics",
  ],
  alternates: { canonical: "https://mechetron.com/about" },
  openGraph: {
    title: "About Us | Mech-E-Tron — S.T.E.M Robotics",
    description:
      "AICRA certified robotics & STEM education in South India. Trained by IAF officers. 10,000+ students. Chennai, Hyderabad, Tirupati.",
    url: "https://mechetron.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* ══════════════════════════════════════════════════════
        SECTION 1 — HERO SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="relative bg-[#050b14] overflow-hidden py-16 lg:py-24 text-white">
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-blue/10 blur-[130px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

          {/* Left: Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/45 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#10B981] transition-colors">Home</Link>
              <span className="text-white/20">&gt;</span>
              <span className="text-white/70">About Us</span>
            </nav>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-white leading-[1.1] tracking-tight">
              About Mech<span className="text-[#10B981]">Etron</span>
            </h1>

            {/* Subheading */}
            <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed font-medium max-w-xl">
              Inspiring Young Minds, Building Innovation.<br />
              Creating a better tomorrow through Robotics, AI, and Practical STEM Education.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 w-full sm:w-auto">
              <Link
                href="#journey"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#FFB400] text-[#050b14] text-sm font-extrabold hover:bg-[#FFA500] hover:-translate-y-0.5 active:translate-y-0 shadow-md transition-all duration-300 w-full sm:w-auto text-center"
              >
                <svg className="w-5 h-5 text-[#050b14]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L16 4m0 13V4m0 0L9 7" />
                </svg>
                <span>Know Our Journey</span>
              </Link>

              <Link
                href="#founder"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border-2 border-white/20 text-sm font-bold text-white hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 w-full sm:w-auto text-center"
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Meet Our Founder</span>
              </Link>
            </div>
          </div>

          {/* Right: Classroom Image with AICRA card */}
          <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-visible border-4 border-[#10B981]/20 shadow-xl">
            <Image
              src="/images/Picture1.png"
              alt="Students in robotics classroom environment"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
              className="object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-[#050b14]/10 rounded-xl" />
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
        SECTION 2 — STATS SECTION (6 separate cards)
      ══════════════════════════════════════════════════════ */}
      <section className="relative z-20 max-w-[1440px] mx-auto px-5 lg:px-10 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_18px_38px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3.5">
            <div className="w-10 h-10 text-[#2563EB] flex-shrink-0 flex items-center justify-center bg-blue-50 rounded-xl">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857" />
              </svg>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#0F172A] leading-tight">10,000+</div>
              <div className="text-[9px] text-[#64748B] font-bold mt-0.5 uppercase tracking-wider leading-tight">Students Trained</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_18px_38px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3.5">
            <div className="w-10 h-10 text-[#2563EB] flex-shrink-0 flex items-center justify-center bg-blue-50 rounded-xl">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
              </svg>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#0F172A] leading-tight">120+</div>
              <div className="text-[9px] text-[#64748B] font-bold mt-0.5 uppercase tracking-wider leading-tight">Schools Partnered</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_18px_38px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3.5">
            <div className="w-10 h-10 text-[#2563EB] flex-shrink-0 flex items-center justify-center bg-blue-50 rounded-xl">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14v4m0 0l-8 4m8-4l8 4m-8 0v10m0 0l-8-4m0 0V7" />
              </svg>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#0F172A] leading-tight">500+</div>
              <div className="text-[9px] text-[#64748B] font-bold mt-0.5 uppercase tracking-wider leading-tight">Projects Built</div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_18px_38px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3.5">
            <div className="w-10 h-10 text-[#2563EB] flex-shrink-0 flex items-center justify-center bg-blue-50 rounded-xl">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#0F172A] leading-tight">50+</div>
              <div className="text-[9px] text-[#64748B] font-bold mt-0.5 uppercase tracking-wider leading-tight">Workshops Conducted</div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_18px_38px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3.5">
            <div className="w-10 h-10 text-[#2563EB] flex-shrink-0 flex items-center justify-center bg-blue-50 rounded-xl">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#0F172A] leading-tight">25+</div>
              <div className="text-[9px] text-[#64748B] font-bold mt-0.5 uppercase tracking-wider leading-tight">Expert Mentors</div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_18px_38px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3.5">
            <div className="w-10 h-10 text-[#2563EB] flex-shrink-0 flex items-center justify-center bg-blue-50 rounded-xl">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#0F172A] leading-tight">8+</div>
              <div className="text-[9px] text-[#64748B] font-bold mt-0.5 uppercase tracking-wider leading-tight">Years of Impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Mission & Vision Section (3 columns, robot centered focus, equal height) ── */}
      <section className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">

          {/* Mission Card */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left bg-[#f8fafc] p-8 rounded-2xl border border-slate-100 shadow-[0_8px_24px_rgba(0,0,0,0.02)] flex-1 justify-center">
            <div className="w-14 h-14 rounded-full bg-[#D1FAE5] flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3 className="font-display font-extrabold text-[#0F172A] text-2xl mb-3">Our Mission</h3>
            <p className="text-[#64748B] text-sm leading-relaxed">
              To make quality STEM education and hands-on learning accessible to every student and empower them with skills to solve real-world problems.
            </p>
          </div>

          {/* Center Robot circular frame focus */}
          <div className="flex items-center justify-center">
            <div className="relative w-[280px] h-[280px] rounded-full bg-[#f8fafc] border border-slate-100 flex items-center justify-center overflow-hidden shadow-inner">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#2563EB]/15 animate-[spin_25s_linear_infinite]" />
              <div className="relative w-[200px] h-[200px]">
                <Image
                  src="/images/why-choose-robot.png"
                  alt="3D Robot avatar illustration"
                  fill
                  sizes="200px"
                  className="object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left bg-[#f8fafc] p-8 rounded-2xl border border-slate-100 shadow-[0_8px_24px_rgba(0,0,0,0.02)] flex-1 justify-center">
            <div className="w-14 h-14 rounded-full bg-[#DBEAFE] flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="font-display font-extrabold text-[#0F172A] text-2xl mb-3">Our Vision</h3>
            <p className="text-[#64748B] text-sm leading-relaxed">
              To be India's most trusted robotics and AI learning ecosystem, inspiring innovators and future leaders who will shape a better tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. AICRA District Coordinator Section (Dark card design) ── */}
      <section className="bg-white pb-20">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
          <div className="bg-[#050b14] rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

            <div className="flex flex-col lg:flex-row gap-10 items-center relative z-10">
              {/* Left Column (Image) */}
              <div className="w-full lg:w-1/3 flex justify-center">
                <img src="logos/aicra.webp" alt="AICRA District Coordinator" className="w-full max-w-[350px] h-auto object-contain drop-shadow-2xl" />
              </div>

              {/* Right Column (Text & Grid) */}
              <div className="w-full lg:w-2/3 flex flex-col items-start text-left">
                <span className="text-[#FFB400] text-sm font-bold uppercase tracking-wider mb-2 block">
                  WE ARE PROUD TO BE
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-[32px] font-extrabold text-white leading-tight mb-4">
                  District Coordinator (DC) for AICRA <span className="text-[#FFB400]">[ ID : DCTG2028 ]</span>
                </h2>
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 max-w-3xl">
                  MechEtron is the Official District Coordinator for AICRA (All India Council for Robotics & Automation),
                  working towards the advancement of robotics education, innovation, and research in schools and communities
                  across INDIA.
                </p>

                <div className="w-full flex flex-col items-start lg:items-center text-left lg:text-center mt-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    The Apex Body for Robotics & Automation
                  </h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
                    Empowering the ecosystem through Education, Standardization, and Industrial Innovation.
                    Join the Community of 4500+ members, shaping the Robotics & Automation Industry 5.0.
                  </p>

                  {/* AICRA Areas list */}
                  <div className="flex flex-wrap justify-start lg:justify-center gap-4 text-center text-[11px] md:text-xs font-bold text-white/80 w-full">
                    {[
                      { icon: "🤖", label: "Robotics" },
                      { icon: "💡", label: "Innovation" },
                      { icon: "📚", label: "Education" },
                      { icon: "🔬", label: "Research" },
                      { icon: "⚙️", label: "Automation" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center justify-center gap-3 w-[90px] h-[90px] md:w-[100px] md:h-[100px] rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFB400]/50 hover:bg-white/10 transition-all duration-300">
                        <span className="text-2xl md:text-3xl">{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Why Choose MechEtron? (6 cards, equal heights, hover effects) ── */}
      <section className="bg-[#f6f7fb] py-20">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
          <h2 className="text-center text-3xl md:text-[40px] font-display font-extrabold text-[#0F172A] mb-12">
            Why Choose MechEtron?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 items-stretch">
            {/* Feature 1 */}
            <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center text-2xl mb-6 border border-green-100">
                🛠️
              </div>
              <h3 className="font-display font-extrabold text-slate-800 text-lg mb-2 leading-tight">Hands-on Learning</h3>
              <p className="text-slate-500 text-sm leading-relaxed mt-auto">
                Practical, project-based training that builds real skills.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-6 border border-blue-100">
                👨‍🏫
              </div>
              <h3 className="font-display font-extrabold text-slate-800 text-lg mb-2 leading-tight">Expert Mentors</h3>
              <p className="text-slate-500 text-sm leading-relaxed mt-auto">
                Industry professionals guiding students at every step.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl mb-6 border border-purple-100">
                📝
              </div>
              <h3 className="font-display font-extrabold text-slate-800 text-lg mb-2 leading-tight">Industry Curriculum</h3>
              <p className="text-slate-500 text-sm leading-relaxed mt-auto">
                Courses designed as per industry trends and future needs.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center text-2xl mb-6 border border-yellow-100">
                💡
              </div>
              <h3 className="font-display font-extrabold text-slate-800 text-lg mb-2 leading-tight">Innovation Driven</h3>
              <p className="text-slate-500 text-sm leading-relaxed mt-auto">
                Encouraging creativity, problem solving and innovation.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-2xl mb-6 border border-cyan-100">
                🏅
              </div>
              <h3 className="font-display font-extrabold text-slate-800 text-lg mb-2 leading-tight">Certified Programs</h3>
              <p className="text-slate-500 text-sm leading-relaxed mt-auto">
                Globally recognized certifications and accredited training.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-2xl mb-6 border border-red-100">
                🚀
              </div>
              <h3 className="font-display font-extrabold text-slate-800 text-lg mb-2 leading-tight">End-to-End Support</h3>
              <p className="text-slate-500 text-sm leading-relaxed mt-auto">
                From learning to projects, competitions and career support.
              </p>
            </div>
          </div>

          {/* Added Image Section */}
          <div className="mt-12 md:mt-16 w-full rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.1)] border border-slate-200/60 relative">
            <Image
              src="/about/about us picture.webp"
              alt="MechEtron - Government-Recognized, Industry-Validated, Future-Ready"
              width={1440}
              height={800}
              className="w-full h-auto object-contain md:object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* ── 7. Founder Section ── */}
      <section id="founder" className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* Founder Photo */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] max-w-[420px] mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <Image
                  src="/about/murali-arumuttu.png"
                  alt="Murali Arumuttu — Founder & Director, MechEtron"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Founder Bio */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[#10B981] text-xs font-bold uppercase tracking-wider mb-3">Meet Our Founder & Director</span>
              <h2 className="text-3xl md:text-[40px] font-display font-extrabold text-[#0F172A] leading-tight mb-3">
                Murali Arumuttu
              </h2>
              <p className="text-[#2563EB] text-sm md:text-base font-bold leading-relaxed mb-6">
                Founder & Director — Mech-E-Tron (MET)
              </p>

              <div className="space-y-5 text-slate-600 text-sm md:text-[15px] leading-relaxed">
                <blockquote className="border-l-4 border-[#10B981] pl-4 italic font-semibold text-[#0F172A]">
                  “My vision is to create an environment where every learner gets the opportunity to transform curiosity into knowledge, knowledge into skills, and skills into innovation.”
                </blockquote>
                <p>
                  Murali Arumuttu is an engineering professional, innovator and technology entrepreneur who founded Mech-E-Tron with a clear purpose—to make emerging technologies accessible, practical and inspiring for the next generation.
                </p>
                <p>
                  His engineering and innovation-oriented background has shaped Mech-E-Tron's project-first approach to Robotics, STEM, AI, Automation, Embedded Systems, IoT and other emerging technologies. Public professional information also lists experience in product design engineering and studies in Industrial Design, Innovation and Entrepreneurship &amp; ROBOTICS IIT Delhi.
                </p>
                <p>
                  Through Mech-E-Tron, his mission is to bridge the gap between education and real-world engineering, empowering students to become confident builders, problem-solvers, innovators and future technology leaders.
                </p>

                <div className="pt-2">
                  <p className="font-semibold text-[#0F172A] mb-1">His belief is simple:</p>
                  <p className="text-[#FFB400] font-display font-extrabold text-lg md:text-xl uppercase tracking-wide">
                    Learn. Build. Innovate. Lead.
                  </p>
                  <p className="text-[#10B981] font-bold text-base mt-1">
                    Don't just learn technology. Build it.
                  </p>
                </div>
              </div>

              <a
                href={companyInfo.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${companyInfo.founder.name} on LinkedIn`}
                className="mt-6 inline-flex items-center gap-2.5 w-fit px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:border-[#0A66C2] hover:text-[#0A66C2] hover:bg-[#0A66C2]/5 transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>Connect on LinkedIn</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── Interactive Media Gallery Section ── */}
      <AboutGallery />

      {/* ── 8. Partners & Recognitions logo bar ── */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
          <p className="text-center text-[11px] font-display font-bold uppercase tracking-[0.2em] text-[#64748B] mb-10">
            Our Partners &amp; Recognitions
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {/* Logo 1: AICRA */}
            <div className="flex flex-col items-center justify-between bg-slate-50 p-5 rounded-2xl border border-slate-100/60 hover:bg-slate-100/40 hover:-translate-y-0.5 transition-all duration-300 w-[180px] h-[110px] shadow-sm">
              <div className="relative w-full h-[45px] flex items-center justify-center">
                <Image
                  src="/logos/aicra.webp"
                  alt="AICRA Logo"
                  width={75}
                  height={40}
                  className="object-contain max-h-[45px]"
                />
              </div>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider text-center leading-none mt-2">
                District Coordinator
              </span>
            </div>

            {/* Logo 2: MSME */}
            <div className="flex flex-col items-center justify-between bg-slate-50 p-5 rounded-2xl border border-slate-100/60 hover:bg-slate-100/40 hover:-translate-y-0.5 transition-all duration-300 w-[180px] h-[110px] shadow-sm">
              <div className="relative w-full h-[45px] flex items-center justify-center">
                <Image
                  src="/logos/msme.webp"
                  alt="MSME Logo"
                  width={80}
                  height={40}
                  className="object-contain max-h-[45px] rounded"
                />
              </div>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider text-center leading-none mt-2">
                Govt of India
              </span>
            </div>

            {/* Logo 3: Skill India */}
            <div className="flex flex-col items-center justify-between bg-slate-50 p-5 rounded-2xl border border-slate-100/60 hover:bg-slate-100/40 hover:-translate-y-0.5 transition-all duration-300 w-[180px] h-[110px] shadow-sm">
              <div className="relative w-full h-[45px] flex items-center justify-center">
                <Image
                  src="/images/Picture2.png"
                  alt="Skill India Logo"
                  width={80}
                  height={40}
                  className="object-contain max-h-[45px]"
                />
              </div>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider text-center leading-none mt-2">
                Govt Initiative
              </span>
            </div>

            {/* Logo 4: Android Robo */}
            <div className="flex flex-col items-center justify-between bg-slate-50 p-5 rounded-2xl border border-slate-100/60 hover:bg-slate-100/40 hover:-translate-y-0.5 transition-all duration-300 w-[180px] h-[110px] shadow-sm">
              <div className="relative w-full h-[45px] flex items-center justify-center">
                <Image
                  src="/logos/android-robo.webp"
                  alt="Android Robo Logo"
                  width={85}
                  height={40}
                  className="object-contain max-h-[45px]"
                />
              </div>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider text-center leading-none mt-2">
                Education Partner
              </span>
            </div>

            {/* Logo 5: Worlds Biggest Robotics Championship */}
            <div className="flex flex-col items-center justify-between bg-slate-50 p-5 rounded-2xl border border-slate-100/60 hover:bg-slate-100/40 hover:-translate-y-0.5 transition-all duration-300 w-[180px] h-[110px] shadow-sm">
              <div className="relative w-full h-[45px] flex items-center justify-center">
                <Image
                  src="/logos/worlds-biggest-robotics-championship.webp"
                  alt="World's Biggest Robotics Championship Logo"
                  width={90}
                  height={40}
                  className="object-contain max-h-[45px] rounded"
                  style={{ height: "auto" }}
                />
              </div>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider text-center leading-none mt-2">
                Award & Championship
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ── 9. CTA Section (Left: Student Image, Center: Text & Buttons, Right: Robot Image) ── */}
      <section className="bg-white pb-20">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
          <div className="bg-[#050b14] rounded-[24px] overflow-hidden shadow-2xl border border-white/5 relative">
            <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-12 relative z-10">

              {/* Left Student Image (lg:col-span-3) */}
              <div className="lg:col-span-3 relative aspect-[4/3] lg:aspect-square w-full rounded-xl overflow-hidden border border-white/5">
                <Image
                  src="/images/why-choose-section.png"
                  alt="Student building robotics project in lab space"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* Center Content (lg:col-span-6) */}
              <div className="lg:col-span-6 flex flex-col items-center text-center px-4">
                <h2 className="text-2xl md:text-4xl font-display font-extrabold text-white mb-4 leading-tight">
                  Let's Build the <span className="text-[#10B981]">Future</span> Together!
                </h2>
                <p className="text-sm md:text-base text-white/70 leading-relaxed font-medium mb-8 max-w-lg">
                  Join MechEtron and be a part of a movement that is shaping young innovators and building a smarter tomorrow.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#FFB400] text-[#050b14] text-xs font-extrabold hover:bg-[#FFA500] transition-colors w-full sm:w-auto hover:-translate-y-0.5 active:translate-y-0 duration-200 shadow-md"
                  >
                    <span>Book a Free Demo Class</span>
                  </Link>

                  <a
                    href={`https://wa.me/${companyInfo.whatsapp}?text=Hi, I want to inquire about the free demo class!`}
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

              {/* Right Robot Image (lg:col-span-3) */}
              <div className="lg:col-span-3 relative aspect-square w-full max-w-[200px] mx-auto">
                <Image
                  src="/images/why-choose-robot.png"
                  alt="3D Robot illustration"
                  fill
                  sizes="200px"
                  className="object-contain"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
