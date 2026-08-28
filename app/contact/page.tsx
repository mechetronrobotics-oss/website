import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { companyInfo } from "@/lib/data";

export const metadata = {
  title: "Contact Mech-E-Tron | Chennai 603002 | Hyderabad 500007 | Call 8148435246",
  description: "Reach Mech-E-Tron for robotics course enquiries in Chennai, Hyderabad or Tirupati. Call +91 81484 35246 or WhatsApp. Book a free demo today.",
  keywords: ["contact Mech-E-Tron", "robotics course enquiry", "Hyderabad robotics lab", "Chennai robotics center", "book robotics demo"],
  alternates: { canonical: "https://mechetron.com/contact" },
};

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* ── 1. HERO SECTION (Custom premium dark hero matching screenshot) ── */}
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
              <span className="text-white/70">Contact Us</span>
            </nav>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-white leading-[1.1] tracking-tight">
              Contact <span className="text-[#10B981]">Us</span>
            </h1>
            <div className="w-12 h-1 bg-[#10B981] my-4" />

            {/* Subheading */}
            <p className="mt-2 text-base sm:text-lg text-white/70 leading-relaxed font-medium max-w-xl">
              We are here to help you! Get in touch with us for admissions, workshops, school programs, collaborations or any other queries.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 w-full sm:w-auto">
              <Link
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#FFB400] text-[#050b14] text-sm font-extrabold hover:bg-[#FFA500] hover:-translate-y-0.5 active:translate-y-0 shadow-md transition-all duration-300 w-full sm:w-auto text-center"
              >
                <svg className="w-5 h-5 text-[#050b14]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Book a Free Demo Class</span>
              </Link>

              <a
                href={`https://wa.me/${companyInfo.whatsapp}?text=Hi, I want to inquire about the free demo class!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border-2 border-white/20 text-sm font-bold text-white hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 w-full sm:w-auto text-center"
              >
                <svg className="w-5 h-5 fill-[#25D366]" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.457 3.477 1.328 4.988L2 22l5.22-.1.033.018c1.45.897 3.125 1.373 4.834 1.373 5.507 0 9.988-4.482 9.988-9.988 0-5.507-4.482-9.988-9.988-9.988zm0 18.293c-1.547 0-3.06-.412-4.385-1.19l-.315-.187-3.26.062.064-3.178-.206-.328c-.854-1.357-1.305-2.93-1.305-4.56C2.607 6.444 6.824 2.227 12.012 2.227c5.188 0 9.405 4.217 9.405 9.405 0 5.188-4.217 9.406-9.405 9.406zm4.846-6.612c-.266-.134-1.573-.775-1.817-.864-.244-.088-.422-.132-.6.133-.178.266-.689.865-.844 1.042-.156.177-.311.2-.577.067-.266-.134-1.127-.415-2.147-1.325-.793-.707-1.329-1.58-1.485-1.846-.156-.266-.017-.41.117-.543.12-.12.266-.31.4-.465.133-.155.178-.266.266-.443.089-.177.044-.332-.022-.465-.067-.133-.6-1.44-.822-1.972-.216-.52-.436-.45-.6-.458-.155-.008-.333-.008-.51-.008-.178 0-.466.066-.71.332-.244.266-.932.91-.932 2.217s.954 2.57 1.087 2.747c.133.177 1.878 2.87 4.548 4.023.635.274 1.132.438 1.519.562.639.203 1.22.175 1.68.106.513-.077 1.573-.642 1.795-1.263.222-.62.222-1.152.156-1.263-.067-.11-.244-.199-.51-.332z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right: Building Image with AICRA card */}
          <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-visible border-4 border-[#10B981]/20 shadow-xl">
            <Image
              src="/about/contactus.jpg"
              alt="MET Mech-E-Tron office building and student team"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
              className="object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-[#050b14]/15 rounded-xl" />

            {/* AICRA floating badge */}
            <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-[#0c1424]/95 border border-white/10 p-5 rounded-2xl shadow-2xl flex flex-col items-center min-w-[150px] z-20 backdrop-blur-md text-center">
              <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider">DC for</span>
              <span className="text-sm text-white font-extrabold mt-1 leading-none">AICRA</span>
              <span className="text-[9px] text-[#FFB400] font-bold mt-2 uppercase tracking-wide">Official</span>
              <span className="text-[11px] text-[#10B981] font-black uppercase tracking-wider">District Coordinator</span>
              <span className="text-[10px] text-white/40 font-semibold mt-1">Chennai District</span>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs mt-3 text-[#FFB400] bg-white/5">
                🏆
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. QUICK CONTACT INFO ROW ── */}
      <section className="relative z-20 max-w-[1440px] mx-auto px-5 lg:px-10 -mt-8">
        <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-slate-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Card 1: Visit Our Office */}
          <a
            href="https://maps.app.goo.gl/H7j3X96qn97SKQzS6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-300 group/office"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex-shrink-0 flex items-center justify-center text-2xl border border-blue-100 group-hover/office:bg-blue-100 transition-colors">
              📍
            </div>
            <div>
              <h4 className="font-display font-extrabold text-slate-800 text-[15px] mb-1">Visit Our Office</h4>
              <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
                Mahindra World City,<br />
                Paranur Railway Station, Chennai - 603002,<br />
                Tamil Nadu, India
              </p>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-blue mt-2 group-hover/office:underline">
                Get Directions
                <span>→</span>
              </span>
            </div>
          </a>

          {/* Card 2: Call Us */}
          <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-300 md:border-l border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex-shrink-0 flex items-center justify-center text-2xl border border-green-100">
              📞
            </div>
            <div>
              <h4 className="font-display font-extrabold text-slate-800 text-[15px] mb-1">Call Us</h4>
              <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
                <a href="tel:+918148435246" className="hover:text-brand-blue font-semibold block">+91 81484 35246</a>
                <a href="tel:+918499985383" className="hover:text-brand-blue font-semibold block">+91 84999 85383</a>
              </p>
            </div>
          </div>

          {/* Card 3: Email Us */}
          <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-300 lg:border-l border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex-shrink-0 flex items-center justify-center text-2xl border border-purple-100">
              ✉️
            </div>
            <div>
              <h4 className="font-display font-extrabold text-slate-800 text-[15px] mb-1">Email Us</h4>
              <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed break-all">
                <a href="mailto:info@mechetron.com" className="hover:text-brand-blue font-semibold block">info@mechetron.com</a>
                <a href="mailto:admissions@mechetron.com" className="hover:text-brand-blue font-semibold block">admissions@mechetron.com</a>
              </p>
            </div>
          </div>

          {/* Card 4: Office Hours */}
          <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-300 lg:border-l border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex-shrink-0 flex items-center justify-center text-2xl border border-orange-100">
              🕒
            </div>
            <div>
              <h4 className="font-display font-extrabold text-slate-800 text-[15px] mb-1">Office Hours</h4>
              <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
                <span className="block font-medium text-slate-700">Mon - Sat: 9:00 AM - 6:00 PM</span>
                <span className="block text-slate-400">Sunday: Closed</span>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. MAP & FORM SECTION ── */}
      <Section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form */}
          <div id="contact-form" className="bg-[#f8fafc] border border-slate-100 p-8 lg:p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-800 mb-2">Send Us a Message</h3>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">Fill out the form and our team will get back to you shortly.</p>
            <ContactForm />
          </div>

          {/* Right Column: Map & Easy to Reach */}
          <div className="space-y-8">
            <div className="bg-[#f8fafc] border border-slate-100 p-6 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.02)] space-y-6">
              <h3 className="text-xl font-display font-extrabold text-slate-800">Find Us Here</h3>
              
              <div className="rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm h-[320px] w-full relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.6698656158223!2d80.0005925!3d12.730718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52fb15e6dbe451%3A0x2e2c0fcecbf6d6e6!2sMech-E-Tron!5e0!3m2!1sen!2sin!4v1717888800000!5m2!1sen!2sin"
                  className="w-full h-full border-0 absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                  title="Mech-E-Tron STEM Robotics location map"
                />
              </div>

              {/* Easy to Reach card */}
              <div className="pt-4 border-t border-slate-200/60">
                <h4 className="font-display font-bold text-slate-700 text-sm mb-4">Easy to Reach</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* By Car */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100">
                    <span className="text-xl">🚗</span>
                    <div>
                      <div className="text-[11px] font-extrabold text-slate-800 leading-tight">By Car</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">On Street Parking</div>
                    </div>
                  </div>
                  {/* By Train */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100">
                    <span className="text-xl">🚆</span>
                    <div>
                      <div className="text-[11px] font-extrabold text-slate-800 leading-tight">By Train</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">2m to Paranur Stn</div>
                    </div>
                  </div>
                  {/* By Bus */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100">
                    <span className="text-xl">🚌</span>
                    <div>
                      <div className="text-[11px] font-extrabold text-slate-800 leading-tight">By Bus</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">5m to MWC Stop</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Section>

      {/* ── 4. CLICK AWAY SECTION ── */}
      <section className="bg-[#f8fafc] py-20 border-t border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-3xl font-display font-extrabold text-slate-800 mb-2">
            We're Just One Click Away!
          </h2>
          <div className="w-12 h-1 bg-[#2563EB] mx-auto my-4" />
          <p className="text-slate-500 max-w-lg mx-auto text-sm mb-12">
            Choose your preferred way of getting in touch. We are highly responsive across all channels.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
            
            {/* WhatsApp */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.02)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center text-center">
              <div className="w-12 h-12 rounded-full bg-green-50 text-green-500 flex items-center justify-center text-2xl mb-4 border border-green-100">
                💬
              </div>
              <h3 className="font-display font-extrabold text-slate-800 text-base mb-2">WhatsApp</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Chat with us instantly for quick support.
              </p>
              <a
                href={`https://wa.me/${companyInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-green-600 hover:text-green-700 inline-flex items-center gap-1 group mt-auto"
              >
                Chat Now <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>

            {/* Call Us */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.02)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-2xl mb-4 border border-blue-100">
                📞
              </div>
              <h3 className="font-display font-extrabold text-slate-800 text-base mb-2">Call Us</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Speak directly with our friendly counselors.
              </p>
              <a
                href="tel:+918148435246"
                className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group mt-auto"
              >
                Call Now <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>

            {/* Email Us */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.02)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center text-center">
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center text-2xl mb-4 border border-purple-100">
                ✉️
              </div>
              <h3 className="font-display font-extrabold text-slate-800 text-base mb-2">Email Us</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Drop us an email and we'll respond fast.
              </p>
              <a
                href="mailto:info@mechetron.com"
                className="text-xs font-bold text-purple-600 hover:text-purple-700 inline-flex items-center gap-1 group mt-auto"
              >
                Email Now <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>

            {/* Book a Visit */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.02)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center text-center">
              <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center text-2xl mb-4 border border-orange-100">
                📅
              </div>
              <h3 className="font-display font-extrabold text-slate-800 text-base mb-2">Book a Visit</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Schedule a personal meeting at our office.
              </p>
              <a
                href="#contact-form"
                className="text-xs font-bold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1 group mt-auto"
              >
                Book Now <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>

            {/* Partnerships */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.02)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center text-center">
              <div className="w-12 h-12 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center text-2xl mb-4 border border-pink-100">
                🤝
              </div>
              <h3 className="font-display font-extrabold text-slate-800 text-base mb-2">Partnerships</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                For school/college collaborations &amp; tie-ups.
              </p>
              <a
                href="#contact-form"
                className="text-xs font-bold text-pink-600 hover:text-pink-700 inline-flex items-center gap-1 group mt-auto"
              >
                Learn More <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. LET'S BUILD THE FUTURE TOGETHER BANNER ── */}
      <section className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
          <div className="bg-[#050b14] rounded-[24px] overflow-hidden shadow-2xl border border-white/5 relative">
            <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-12 relative z-10">
              
              {/* Left Student Image */}
              <div className="lg:col-span-3 relative aspect-[4/3] lg:aspect-square w-full rounded-xl overflow-hidden border border-white/5">
                <Image
                  src="/images/why-choose-section.png"
                  alt="Student building robotics project in lab space"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* Center Content */}
              <div className="lg:col-span-6 flex flex-col items-center text-center px-4">
                <h2 className="text-2xl md:text-4xl font-display font-extrabold text-white mb-4 leading-tight">
                  Let's Build the <span className="text-[#10B981]">Future</span> Together!
                </h2>
                <p className="text-sm md:text-base text-white/70 leading-relaxed font-medium mb-8 max-w-lg">
                  Join MechEtron and be a part of a movement that is shaping young innovators and building a smarter tomorrow.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
                  <Link
                    href="#contact-form"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#FFB400] text-[#050b14] text-xs font-extrabold hover:bg-[#FFA500] transition-colors w-full sm:w-auto hover:-translate-y-0.5 active:translate-y-0 duration-200 shadow-md text-center"
                  >
                    <span>Book a Free Demo Class</span>
                  </Link>

                  <a
                    href={`https://wa.me/${companyInfo.whatsapp}?text=Hi, I want to inquire about the free demo class!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-[#25D366]/40 text-[#25D366] text-xs font-bold hover:bg-[#25D366]/5 hover:border-[#25D366] transition-colors w-full sm:w-auto hover:-translate-y-0.5 active:translate-y-0 duration-200 text-center"
                  >
                    <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                      <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.457 3.477 1.328 4.988L2 22l5.22-.1.033.018c1.45.897 3.125 1.373 4.834 1.373 5.507 0 9.988-4.482 9.988-9.988 0-5.507-4.482-9.988-9.988-9.988zm0 18.293c-1.547 0-3.06-.412-4.385-1.19l-.315-.187-3.26.062.064-3.178-.206-.328c-.854-1.357-1.305-2.93-1.305-4.56C2.607 6.444 6.824 2.227 12.012 2.227c5.188 0 9.405 4.217 9.405 9.405 0 5.188-4.217 9.406-9.405 9.406zm4.846-6.612c-.266-.134-1.573-.775-1.817-.864-.244-.088-.422-.132-.6.133-.178.266-.689.865-.844 1.042-.156.177-.311.2-.577.067-.266-.134-1.127-.415-2.147-1.325-.793-.707-1.329-1.58-1.485-1.846-.156-.266-.017-.41.117-.543.12-.12.266-.31.4-.465.133-.155.178-.266.266-.443.089-.177.044-.332-.022-.465-.067-.133-.6-1.44-.822-1.972-.216-.52-.436-.45-.6-.458-.155-.008-.333-.008-.51-.008-.178 0-.466.066-.71.332-.244.266-.932.91-.932 2.217s.954 2.57 1.087 2.747c.133.177 1.878 2.87 4.548 4.023.635.274 1.132.438 1.519.562.639.203 1.22.175 1.68.106.513-.077 1.573-.642 1.795-1.263.222-.62.222-1.152.156-1.263-.067-.11-.244-.199-.51-.332z" />
                    </svg>
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Right Robot Image */}
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
