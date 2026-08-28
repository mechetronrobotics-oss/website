import Image from "next/image";
import Link from "next/link";
import CoursesFilterList from "@/components/CoursesFilterList";
import DownloadBrochureButton from "@/components/DownloadBrochureButton";

export const metadata = {
  title: "Robotics & STEM Courses in Chennai, Hyderabad, Tirupati | Mech-E-Tron",
  description: "Explore hands-on robotics, Arduino, AI & IoT and drone courses for school and college students. Build real projects. AICRA certified. From ₹2,299. Enroll today.",
  keywords: ["robotics course Chennai", "robotics course Hyderabad", "arduino course India", "STEM training students", "drone workshop India"],
  alternates: { canonical: "https://mechetron.com/courses" },
};

export default function CoursesPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* ── Hero Section (Dark Theme) ── */}
      <section className="relative bg-[#050b14] overflow-hidden py-16 lg:py-24 text-white">
        {/* Decorative Grid and Orbs */}
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-brand-blue/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/10 left-10 w-[300px] h-[300px] rounded-full bg-[#8B5CF6]/5 blur-[100px] pointer-events-none" />

        <div className="container-x relative max-w-content mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start animate-fade-in">
              {/* Breadcrumb Navigation */}
              <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/45 mb-6" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
                <span className="text-white/20">&gt;</span>
                <span className="text-white/70">Courses</span>
              </nav>

              {/* Title & Accent */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold text-white leading-tight">
                Explore Our <span className="text-[#FFB400]">Courses</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-4 text-sm sm:text-base md:text-lg text-white/60 leading-relaxed max-w-xl font-medium">
                From School Robotics to Advanced Engineering Programs, we have the perfect course for every learner.
              </p>

              {/* Action Buttons Row */}
              <div className="mt-8 flex flex-wrap gap-4 w-full sm:w-auto">
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
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end animate-fade-in">
              <div className="relative w-full max-w-[440px] aspect-[1.3] lg:aspect-[1.25] overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
                <Image
                  src="/images/hero-student.png"
                  alt="Student building tracked robotics vehicle"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 440px"
                  className="object-cover object-center scale-102"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Wrapper with light grey background for categories tabs and card grid */}
      <div className="bg-[#f6f7fb] pt-1">
        {/* ── Category Filter Tabs & Card List Grid (Client Side) ── */}
        <CoursesFilterList />
      </div>

      {/* ── 'Why Learn at MechETron?' Section (Rounded White Card inside Grey Bg) ── */}
      <section className="bg-[#f6f7fb] pb-16">
        <div className="max-w-content mx-auto px-5 lg:px-10">
          <div className="bg-white rounded-[32px] p-10 md:p-14 border border-black/[0.03] shadow-[0_10px_40px_rgba(0,0,0,0.02)]">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#0B1220] mb-12 text-center">
              Why Learn at MechETron?
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-y-10 gap-x-6 text-center">
              {/* Feature 1 */}
              <div className="flex flex-col items-center group">
                <div className="w-14 h-14 rounded-full bg-[#0355BC] flex items-center justify-center shadow-md mb-4 group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-brand-ink text-sm mb-1.5">Hands-on Learning</h3>
                <p className="text-[11px] text-[#5E6B7A] leading-relaxed max-w-[120px]">
                  Real world projects and practical training.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center group">
                <div className="w-14 h-14 rounded-full bg-[#10B981] flex items-center justify-center shadow-md mb-4 group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-brand-ink text-sm mb-1.5">Expert Mentors</h3>
                <p className="text-[11px] text-[#5E6B7A] leading-relaxed max-w-[120px]">
                  Learn from industry professionals.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center group">
                <div className="w-14 h-14 rounded-full bg-[#EAB308] flex items-center justify-center shadow-md mb-4 group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-brand-ink text-sm mb-1.5">Industry Curriculum</h3>
                <p className="text-[11px] text-[#5E6B7A] leading-relaxed max-w-[120px]">
                  Latest industry-aligned syllabus & tools.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center group">
                <div className="w-14 h-14 rounded-full bg-[#8B5CF6] flex items-center justify-center shadow-md mb-4 group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-brand-ink text-sm mb-1.5">Certified Courses</h3>
                <p className="text-[11px] text-[#5E6B7A] leading-relaxed max-w-[120px]">
                  Get recognized certificates upon completion.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="flex flex-col items-center group">
                <div className="w-14 h-14 rounded-full bg-[#F97316] flex items-center justify-center shadow-md mb-4 group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-brand-ink text-sm mb-1.5">Career Support</h3>
                <p className="text-[11px] text-[#5E6B7A] leading-relaxed max-w-[120px]">
                  Internships, guidance and placement assistance.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="flex flex-col items-center group">
                <div className="w-14 h-14 rounded-full bg-[#EC4899] flex items-center justify-center shadow-md mb-4 group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-brand-ink text-sm mb-1.5">Project Showcase</h3>
                <p className="text-[11px] text-[#5E6B7A] leading-relaxed max-w-[120px]">
                  Build your portfolio and showcase your skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modern Dual-Action CTA Banner (on Grey Background) ── */}
      <section className="bg-[#f6f7fb] pb-20">
        <div className="max-w-content mx-auto px-5 lg:px-10">
          <div className="bg-[#0b1424] rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            {/* Background design elements */}
            <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 blur-[80px] -mr-40 -mt-40 pointer-events-none" />

            <div className="relative z-10 max-w-xl text-center lg:text-left">
              <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
                Not Sure Which Course is Right for You?
              </h2>
              <p className="text-sm text-white/50 leading-relaxed font-medium">
                Talk to our experts and get free guidance for your learning journey.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {/* Talk to expert button */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FFB400] text-brand-ink text-xs font-extrabold hover:bg-[#FFA500] transition-colors w-full sm:w-auto hover:-translate-y-0.5 active:translate-y-0 duration-200 shadow-md"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Talk to Our Expert</span>
              </Link>

              {/* Chat on WhatsApp button */}
              <a
                href="https://wa.me/918148435256"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#25D366]/40 text-[#25D366] text-xs font-bold hover:bg-[#25D366]/5 hover:border-[#25D366] transition-colors w-full sm:w-auto hover:-translate-y-0.5 active:translate-y-0 duration-200"
              >
                <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.457 3.477 1.328 4.988L2 22l5.22-.1.033.018c1.45.897 3.125 1.373 4.834 1.373 5.507 0 9.988-4.482 9.988-9.988 0-5.507-4.482-9.988-9.988-9.988zm0 18.293c-1.547 0-3.06-.412-4.385-1.19l-.315-.187-3.26.062.064-3.178-.206-.328c-.854-1.357-1.305-2.93-1.305-4.56C2.607 6.444 6.824 2.227 12.012 2.227c5.188 0 9.405 4.217 9.405 9.405 0 5.188-4.217 9.406-9.405 9.406zm4.846-6.612c-.266-.134-1.573-.775-1.817-.864-.244-.088-.422-.132-.6.133-.178.266-.689.865-.844 1.042-.156.177-.311.2-.577.067-.266-.134-1.127-.415-2.147-1.325-.793-.707-1.329-1.58-1.485-1.846-.156-.266-.017-.41.117-.543.12-.12.266-.31.4-.465.133-.155.178-.266.266-.443.089-.177.044-.332-.022-.465-.067-.133-.6-1.44-.822-1.972-.216-.52-.436-.45-.6-.458-.155-.008-.333-.008-.51-.008-.178 0-.466.066-.71.332-.244.266-.932.91-.932 2.217s.954 2.57 1.087 2.747c.133.177 1.878 2.87 4.548 4.023.635.274 1.132.438 1.519.562.639.203 1.22.175 1.68.106.513-.077 1.573-.642 1.795-1.263.222-.62.222-1.152.156-1.263-.067-.11-.244-.199-.51-.332z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
