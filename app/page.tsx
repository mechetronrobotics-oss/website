import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import { testimonials, galleryItems } from "@/lib/data";

export const metadata = {
  title: "Robotics Courses in Chennai & Hyderabad | AICRA Certified | Mech-E-Tron",
  description:
    "Hands-on robotics and STEM courses in Chennai, Hyderabad and Tirupati. AICRA certified. Arduino, drones, AI and IoT. Book your free demo today.",
  keywords: [
    "robotics course Chennai", "robotics course Hyderabad", "robotics course Tirupati",
    "arduino training India", "STEM summer camp Chennai", "robotics classes near me",
    "STEM training school students", "drone training India DGCA", "AICRA robotics",
  ],
  openGraph: {
    title: "Robotics Courses in Chennai & Hyderabad | AICRA Certified | Mech-E-Tron",
    description: "Hands-on robotics and STEM courses in Chennai, Hyderabad and Tirupati. AICRA certified. Arduino, drones, AI and IoT. Book your free demo today.",
    url: "https://mechetron.com",
  },
  alternates: { canonical: "https://mechetron.com" },
};

const studentProjects = [
  { name: "Robotic Arm", image: "/images/robotics-lab.webp" },
  { name: "Obstacle Avoiding Robot", image: "/images/arduino-components.webp" },
  { name: "Line Follower Robot", image: "/images/stem-school.webp" },
  { name: "Gesture Control Car", image: "/images/rc-car.webp" },
  { name: "Quadcopter Drone", image: "/images/drone-flying.webp" },
  { name: "Robotics Glove", image: "/images/iot-project.webp" },
];

const whyFeatures = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#10B981]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M9.88 9.88l-3.5-3.5a1.5 1.5 0 1 0-2.12 2.12l3.5 3.5" />
        <path d="M14.12 9.88l3.5-3.5a1.5 1.5 0 1 1 2.12 2.12l-3.5 3.5" />
        <path d="M9.88 14.12l-3.5 3.5a1.5 1.5 0 1 1-2.12-2.12l3.5-3.5" />
        <path d="M14.12 14.12l3.5 3.5a1.5 1.5 0 1 0 2.12-2.12l-3.5-3.5" />
      </svg>
    ),
    circleClass: "border-[#10b981]/35 bg-[#10b981]/10 shadow-[0_0_15px_rgba(16,185,129,0.15)]",
    title: "Hands-on\nLearning",
    body: "Learn by building real robots. Hands-on mentors guide students through every project."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#3B82F6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    circleClass: "border-[#3b82f6]/35 bg-[#3b82f6]/10 shadow-[0_0_15px_rgba(59,130,246,0.15)]",
    title: "Expert\nMentors",
    body: "Guidance from industry pros with deep robotics and embedded systems experience."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#6366F1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    circleClass: "border-[#6366f1]/35 bg-[#6366f1]/10 shadow-[0_0_15px_rgba(99,102,241,0.15)]",
    title: "Affordable\nKits",
    body: "High-quality Arduino kits included. Under ₹1,000 per month for premium learning."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#06B6D4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    circleClass: "border-[#06b6d4]/35 bg-[#06b6d4]/10 shadow-[0_0_15px_rgba(6,182,212,0.15)]",
    title: "Real World\nExperience",
    body: "Competitions, exhibitions & live projects — not just classroom theory."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#F59E0B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15l-2 5 2-1 2 1-2-5z" />
        <path d="M12 2a7 7 0 1 0 7 7 7 7 0 0 0-7-7z" />
      </svg>
    ),
    circleClass: "border-[#f59e0b]/35 bg-[#f59e0b]/10 shadow-[0_0_15px_rgba(245,158,11,0.15)]",
    title: "Certificate\nIncluded",
    body: "AICRA-recognized certificate for every course completed."
  }
];

export default function HomePage() {
  return (
    <>
      {/* ① Hero */}
      <Hero />

      {/* ② Stats Strip */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-x">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {[
              { icon: "👩‍🎓", value: "10,000+", label: "Students Trained" },
              { icon: "🏫", value: "120+", label: "Schools Partnered" },
              { icon: "🤖", value: "500+", label: "Projects Built" },
              { icon: "🏆", value: "50+", label: "Competitions Won" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="text-3xl">{s.icon}</span>
                <div>
                  <div className="text-xl font-display font-bold text-brand-blue leading-none">{s.value}</div>
                  <div className="text-[11px] text-brand-muted font-medium mt-0.5">{s.label}</div>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
              <div className="flex flex-col items-center gap-1">
                <Image src="/logos/aicra.webp" alt="AICRA" width={52} height={34} className="object-contain" />
                <span className="text-[9px] font-bold text-brand-muted uppercase tracking-wide">AICRA</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Image
                  src="/logos/worlds-biggest-robotics-championship.webp"
                  alt="Award Winning"
                  width={48}
                  height={34}
                  className="object-contain rounded"
                  style={{ height: "auto" }}
                />
                <span className="text-[9px] font-bold text-brand-muted uppercase tracking-wide">AWARD WINNING</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ③ Our Programs */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="eyebrow mb-3">Our Programs</div>
            <h2 className="text-h2 font-display font-bold text-brand-ink">
              Choose Your Path to Innovation
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🤖",
                image: "/images/robotics-lab.webp",
                title: "Robotics Courses",
                desc: "Comprehensive hands-on training in robotics, coding, electronics and AI concepts.",
                href: "/courses",
                cta: "Explore Courses",
              },
              {
                icon: "⚡",
                image: "/images/arduino-kit.webp",
                title: "DIY Arduino Kits",
                desc: "30+ Projects. Best selling DIY Arduino kits with step-by-step video guided with 3 months mentorship.",
                href: "/products/arduino-uno-learning-board",
                cta: "Explore Kits",
              },
              {
                icon: "🏕️",
                image: "/images/stem-school.webp",
                title: "Workshops & Camps",
                desc: "Weekend & Holidays. Fun and practical workshops, summer camps and school holiday programs.",
                href: "/summer-camp",
                cta: "View Workshops",
              },
            ].map((p) => (
              <div key={p.title} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                {/* Card image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-ink/20" />
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-xl shadow-lg">
                    {p.icon}
                  </div>
                </div>
                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-display font-bold text-brand-ink mb-2">{p.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed mb-5 flex-1">{p.desc}</p>
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-1 text-brand-blue font-semibold text-sm hover:gap-2 transition-all"
                  >
                    {p.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ④ Why Choose — full background image */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/whyus.webp"
            alt="Why Choose Mech-E-Tron background"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center bg-[#050b14]"
          />
          {/* Left-side dark overlay so heading text is readable */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(5,10,20,0.95) 0%, rgba(5,10,20,0.85) 30%, rgba(5,10,20,0.40) 60%, transparent 100%)",
            }}
          />
          {/* Bottom overlay so feature cards sit on a readable surface */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ height: "55%", background: "linear-gradient(to top, rgba(5,10,20,0.98) 0%, rgba(5,10,20,0.75) 50%, transparent 100%)" }}
          />
        </div>

        <div className="container-x relative py-16 lg:py-24 z-10">
          <div className="w-full lg:max-w-[70%]">
            {/* Top: eyebrow + heading */}
            <div className="mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#10B981] mb-3">
                Why Choose Mech-E-Tron?
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight">
                Building Skills.<br />
                <span className="text-[#D3E936]">Building Futures.</span>
              </h2>
            </div>

            {/* Bottom: 5 feature cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {whyFeatures.map((f) => (
                <div
                  key={f.title}
                  className="text-center group rounded-2xl p-4 transition-all duration-300 hover:bg-white/[0.03]"
                >
                  <div
                    className={`w-14 h-14 rounded-full border flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 ${f.circleClass}`}
                  >
                    {f.icon}
                  </div>
                  <h4 className="font-display font-bold text-white text-xs sm:text-sm mb-2 leading-snug whitespace-pre-line">
                    {f.title}
                  </h4>
                  <p className="text-[11px] text-white/50 leading-relaxed font-medium">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ⑤ Student Projects */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="eyebrow mb-1">Student Projects</div>
              <h2 className="text-h2 font-display font-bold text-brand-ink">Real Students. Real Projects.</h2>
            </div>
            <Link href="/gallery" className="btn-outline text-sm">
              View All Projects →
            </Link>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {studentProjects.map((p) => (
              <div key={p.name} className="group">
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 33vw, 16vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-transparent" />
                </div>
                <p className="text-center text-[11px] text-brand-muted mt-2 font-medium leading-tight">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑥ Success Stories / Testimonials */}
      <section className="py-20 bg-brand-surface overflow-visible relative z-0">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="eyebrow mb-3">Success Stories</div>
            <h2 className="text-h2 font-display font-bold text-brand-ink">What Parents &amp; Students Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex gap-0.5 text-yellow-400 text-lg mb-4">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <p className="text-sm text-brand-ink/80 leading-relaxed mb-6 min-h-[72px]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-orange to-brand-yellow flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-brand-ink">{t.name}</div>
                    <div className="text-xs text-brand-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑦ Final CTA — Book Free Demo */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#050b14]">
        {/* Background image & dark overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/background image.png"
            alt="STEM education background"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Lighter overlays so the dark blue circuit board shines through */}
          <div className="absolute inset-0 bg-[#050b14]/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050b14]/80 via-transparent to-[#050b14]/80" />
        </div>

        <div className="container-x relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* LEFT: Text Column */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight mb-4 text-white">
                Start Your Child&apos;s<br />
                <span style={{ color: "#25D366" }}>Innovation Journey Today!</span>
              </h2>
              <p className="text-white/70 text-base lg:text-lg leading-relaxed max-w-xl">
                Book a free demo class and experience the power of STEM learning.
              </p>
            </div>

            {/* RIGHT: Form Card */}
            <div className="lg:col-span-5 bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
              <h3 className="text-lg font-display font-bold text-brand-ink mb-5 text-center">
                Book a Free Demo Class
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-brand-ink placeholder-gray-400 text-sm focus:outline-none focus:border-[#25D366] transition"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-brand-ink placeholder-gray-400 text-sm focus:outline-none focus:border-[#25D366] transition"
                />
                <select
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-500 text-sm focus:outline-none focus:border-[#25D366] transition appearance-none"
                >
                  <option value="">Select Grade</option>
                  <option value="6">Grade 6</option>
                  <option value="7">Grade 7</option>
                  <option value="8">Grade 8</option>
                  <option value="9">Grade 9</option>
                  <option value="10">Grade 10</option>
                  <option value="11">Grade 11</option>
                  <option value="12">Grade 12</option>
                  <option value="college">College Student</option>
                </select>
                <select
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-500 text-sm focus:outline-none focus:border-[#25D366] transition appearance-none"
                >
                  <option value="">Interested Program</option>
                  <option value="robotics">Robotics Course</option>
                  <option value="arduino">Arduino UNO Course</option>
                  <option value="ai-iot">AI &amp; IoT Training</option>
                  <option value="drone">Drone Workshop</option>
                  <option value="summer-camp">Summer Camp</option>
                </select>
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-sm text-white transition-all hover:bg-[#20ba59] hover:-translate-y-0.5 active:translate-y-0 shadow-md text-center"
                  style={{ backgroundColor: "#25D366" }}
                >
                  Book Free Demo Now →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
